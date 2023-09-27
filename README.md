# umami

Umami is a simple, fast, privacy-focused alternative to Google Analytics.

## Getting started

A detailed getting started guide can be found at [https://umami.is/docs/](https://umami.is/docs/)

## Installing from source

### Requirements

- A server with Node.js version 16.13 or newer
- A database. Umami supports [MySQL](https://www.mysql.com/) and [Postgresql](https://www.postgresql.org/) databases.

### Install Yarn

```
npm install -g yarn
```

### Get the source code and install packages

```
git clone https://github.com/umami-software/umami.git
cd umami
yarn install
```

### Configure umami

Create an `.env` file with the following

```
POSTGRESQL_ADDON_URI=connection-url
```

The connection url is in the following format:

```
postgresql://username:mypassword@localhost:5432/mydb

mysql://username:mypassword@localhost:3306/mydb
```

### Build the application

```bash
yarn build
```

The build step will also create tables in your database if you ae installing for the first time. It will also create a login user with username **admin** and password **umami**.

### Start the application

```bash
yarn start
```

By default this will launch the application on `http://localhost:3000`. You will need to either
[proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) requests from your web server
or change the [port](https://nextjs.org/docs/api-reference/cli#production) to serve the application directly.

## Deploy Umami on

![Clever Cloud](src/assets/clever-cloud-logo.png)

Clone this repository and follow this easy procedure.

### 1. Set up the remote database

Create a PostgreSQL add-on on Clever Cloud and add `POSTGRESQL_ADDON_URI` value in your local `.env` file.

### 2. Build the app locally

This step should only be necessary on first deployment.

```bash
yarn install
yarn build
```

### 3. Commit your build repositories

Comment in your `.gitignore` the following files : 

```
#/.next/
#/out/
#/prisma/
```

Give them permissions with: (not sure if this is necessary?)

```bash
chmod -R +rwx .next out prisma
```

Then add them and commit them:

```bash
git add .
git commit -m "first deployment"
```

### 4. Declare a Node.JS app

Create a new app on Clever Cloud, choose to deploy with Git and select a Node.JS runtime.

Then add the following environment variables:

```
CC_CUSTOM_BUILD_TOOL="yarn"
CC_WEBROOT="/.next"
NODE_ENV="production"
```

Don't deploy yet! Go to **Service dependencies** and connect your PostgreSQL addon.

After that, go to **Information** and add the new git remote. 🚀 Now you can deploy your app!

## Getting updates

To get the latest features, simply do a pull, install any new dependencies, and rebuild:

```bash
git pull
yarn install
yarn build
```

To update the Docker image, simply pull the new images and rebuild:

```bash
docker compose pull
docker compose up --force-recreate
```

## License

MIT
