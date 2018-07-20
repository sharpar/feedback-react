// using require cause node js only has support for commonjs modules, not es2015 modules
// import will be used for the front end (react etc)
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

// check if the underlying environment (eg:heroku) has declared a port for us to use
const PORT = process.env.PORT || 5000;
app.listen(PORT);
