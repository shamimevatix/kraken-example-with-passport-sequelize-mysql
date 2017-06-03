# kraken-example-with-passport-sequelize-mysql

# with.passport

A simple application that manages users with [passport](http://passportjs.org/) and [KrakenJS](http://www.krakenjs.com)
I have used the respository https://github.com/krakenjs/kraken-example-with-passport. But too many things were not working for me. So, i had to make my own respository for mysql database. This application is just a login and log out system. I have intentionally kept it simple because an experienced developer can figure out the rest.

## Introduction
In many cases you'll need to manage users in your application. Here's a simple application that will show you how to use passport.js with mysql database.

This example highlights the following things:

* Using passport.js to handle user authentication.
* Using a mysql model to represent user data.
* Using bcrypt to securely hash and salt user passwords before storing them in a database.
* Storing credentials in a Mysql database.
* Modifying elements of the user interface based on logged in/logged out user status.
* Registering Kraken middleware via the JSON configuration files.


## Prerequisites
* This example requires that [Mysql] be installed and be running on its default port.
* You will -- of course -- need [Node](http://nodejs.org) (Version >= 0.10.22 preferred)
* For Windows machines, Visual Studio is required to compile some of the dependencies. The free Visual Studio Express version is sufficient. https://www.visualstudio.com/products/visual-studio-express-vs
* Import the database from kraken-passport.sql to your mysql database.

## Installation
Clone, install and run.

```shell
git clone https://github.com/krakenjs/kraken-example-with-passport.git
cd kraken-example-with-passport
npm install
npm start
```

## Explore the app

Visit [`http://localhost:8000/login`](http://localhost:8000/login)

In will show the login form. Please use the following credential:

username: admin
password: passw0rd

After login you will be redirected to http://localhost:8000/profile. And then click the logout button. That's it.

I could make too many features like roles, protected resources. But right now i am really lazy to do it.

