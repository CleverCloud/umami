/* eslint-disable no-console */
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const chalk = require('chalk');
const { execSync } = require('child_process');
const semver = require('semver');

if (process.env.SKIP_DB_CHECK) {
  console.log('Skipping database check.');
  process.exit(0);
}

function getDatabaseType(url = process.env.POSTGRESQL_ADDON_URI) {
  const type = url && url.split(':')[0];

  if (type === 'postgres') {
    return 'postgresql';
  }

  return type;
}

const prisma = new PrismaClient();

function success(msg) {
  console.log(chalk.greenBright(`✓ ${msg}`));
}

function error(msg) {
  console.log(chalk.redBright(`✗ ${msg}`));
}

async function checkEnv() {
  if (!process.env.POSTGRESQL_ADDON_URI) {
    throw new Error('POSTGRESQL_ADDON_URI is not defined.');
  } else {
    success('POSTGRESQL_ADDON_URI is defined.');
  }
}

async function checkConnection() {
  try {
    await prisma.$connect();

    success('Database connection successful.');
  } catch (e) {
    throw new Error('Unable to connect to the database.');
  }
}

async function checkDatabaseVersion() {
  const query = await prisma.$queryRaw`select version() as version`;
  const version = semver.valid(semver.coerce(query[0].version));

  const databaseType = getDatabaseType();
  const minVersion = databaseType === 'postgresql' ? '9.4.0' : '5.7.0';

  if (semver.lt(version, minVersion)) {
    throw new Error(
      `Database version is not compatible. Please upgrade ${databaseType} version to ${minVersion} or greater`,
    );
  }

  success('Database version check successful.');
}

async function checkV1Tables() {
  try {
    await prisma.$queryRaw`select * from account limit 1`;

    error(
      'Umami v1 tables detected. For how to upgrade from v1 to v2 go to https://umami.is/docs/migrate-v1-v2.',
    );
    process.exit(1);
  } catch (e) {
    // Ignore
  }
}

async function applyMigration() {
  console.log(execSync('prisma migrate deploy').toString());

  success('Database is up to date.');
}

(async () => {
  let err = false;
  for (let fn of [checkEnv, checkConnection, checkDatabaseVersion, checkV1Tables, applyMigration]) {
    try {
      await fn();
    } catch (e) {
      error(e.message);
      err = true;
    } finally {
      await prisma.$disconnect();
      if (err) {
        process.exit(1);
      }
    }
  }
})();
