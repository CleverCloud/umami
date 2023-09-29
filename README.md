# umami

Umami is a simple, fast, privacy-focused alternative to Google Analytics. This version is a fork by Clever Cloud.

## Getting started

A detailed getting started guide can be found at [https://umami.is/docs/](https://umami.is/docs/)

## Installing from source

### Requirements

- A server with Node.js version 16.13 or newer
- A database. Umami supports [MySQL](https://www.mysql.com/) and [Postgresql](https://www.postgresql.org/) databases. To deploy on Clever Cloud, we will be using a PostgreSQL add-on.

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

Create an `.env` file with the following environment variable:

```
POSTGRESQL_ADDON_URI=connection-url
```

The connection url is in the following format:

```
postgresql://username:mypassword@localhost:5432/mydb

mysql://username:mypassword@localhost:3306/mydb
```

💡 For a smoother workflow, you can already create a PostgreSQL add-on on Clever Cloud and use the `POSTGRESQL_ADDON_URI` value provided from your add-on dashboard (see **Information**).

### Build the application

```bash
yarn build
```

The build step will also create tables in your database if you ae installing for the first time. It will also create a login user with username **admin** and password **umami**.

### Start the application

```bash
yarn start
```

By default this will launch the application on `http://localhost:8080`. You will need to either
[proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) requests from your web server
or change the [port](https://nextjs.org/docs/api-reference/cli#production) to serve the application directly.

## Deploy Umami on

![Clever Cloud](https://cellar-c2.services.clever-cloud.com/precious-jpegs/clever-cloud-logo.png)

Clone this repository and follow this easy procedure.

### 1. Set up the remote database

💡 _Skip this step if you've already done it_

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

#/public/script.js
```

Give them permissions with: (not sure if this is necessary?)

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

Add the new `clever` remote but don't deploy yet! Go to **Service dependencies** and connect your PostgreSQL addon first.

After that, go to **Information** and add the new git remote. 🚀 Now you can deploy your app with `git push clever main:master`!

## Getting updates

To get the latest features, simply do a pull, install any new dependencies, and rebuild:

```bash
git pull
yarn install
yarn build
```

## License

MIT
