
# ngx-security-starter
A full implementation of the heloufir/security-starter with an Angular 7+ front-end implementation

![ngx-security-starter screnshot](https://lh3.googleusercontent.com/iOprWbo6E8tQLBnHvN6EL96RdH6IucLaEb391x_0bu9JtCxSPQUcPHxZ897hn-knm0ylJKLaR2SE=s0 "2019-03-01_235722.png")

## Installation
First of all, clone this repository into your local by executing the command:

```
  git clone https://github.com/heloufir/ngx-security-starter.git
```

## Configuration
After that the repository is cloned into your local, you need to follow the next steps to make it ready to use:

**1. Install back-end dependencies**

```
  cd ~\RepositoryPath
  cd back-end
  composer install
```

**2. Configure the project environement**

Create the `.env` file in the **back-end** root path, this file needs to have the following configuration variables to make the starter work perfectly:

> **heloufir/simple-passport** package variables *(of course you can customize it as you want)*

```
  SP_RECOVER_URL=http://localhost:4200/auth/recover/
  SP_MAIL_FROM=noreply@application.com
  SP_MAIL_FROM_NAME="Ngx Security Starter"
```

> **SMTP** server configuration *(of course you can customize it as you want)*

```
  MAIL_DRIVER=smtp
  MAIL_HOST=smtp.mailtrap.io
  MAIL_PORT=2525
  MAIL_USERNAME=YOUR_USERNAME
  MAIL_PASSWORD=YOUR_PASSWORD
  MAIL_ENCRYPTION=null
```

> **Database** configuration *(of course you can customize it as you want)*

```
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=ngx_security_starter
  DB_USERNAME=root
  DB_PASSWORD=
```

> You need to execute `php artisan config:cache` to update the laravel application cache to recognize the new environement variables

**3. Install front-end dependencies**

```
  cd ~\RepositoryPath
  cd front-end
  npm install
```

*You can use the* `yarn install` *if you want to install dependencies using **yarn** instead of **npm***

## Migrate and seed data into the starter database

After creating the starter project database into your database server, you need to execute the migration command to install the starter tables into your database server:

```
  php artisan migrate
```

Now you can use the database seeder provided by the starter project to insert sample data, so you can use the starter application:

```
  php artisan db:seed
```

## Serve & use

From here you can serve the starter application and use the sample user created by the database seeders.

> Serve the starter back-end

```
  cd ~\RepositoryPath
  cd back-end
  php artisan serve
```

> Serve the starter front-end

```
  cd ~\RepositoryPath
  cd front-end
  ng serve
```

After serving the back-end and front-end of the starter application, you can access the application by going to the url http://localhost:4200 *(if you serve the front-end with another port, don't forget to change the url port)*

The sample user credentials are:
* Email address: **john.doe@gmail.com**
* Passwrd: **secret**

## Related repositories

* [Simple passport](https://github.com/heloufir/simple-passport): An implementation of laravel/passport package and an implementation of a simple forgot password system
* [Security starter](https://github.com/heloufir/security-starter): An implementation of heloufir/simple-passport package and an implementation of a simple USER_PROFILE_ROLE architecture, and some good utilities to start your project and focus into your business logic

## Credits

This starter application use the **[StarAdmin Angular template](https://github.com/BootstrapDash/StarAdmin-Free-Angular-Admin-Template)**, it's a beautiful template to start your project with, you can check the link to have more information about it!

## Releases

| Release  | Description |
| ------------- | ------------- |
| **1.0**  | First stable version: Initial version  |
| **1.1**  | Upgrade **heloufir/security-starter** version (Bug-fixing)  |

# Happy coding!
