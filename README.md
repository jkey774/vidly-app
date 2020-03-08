## Introduction

This is a course project simulating a video rental application built using MongoDB, Express, React, and Node and deployed to Heroku.

This app is running on a free dyno so it can be slow to load if the application is unused for a while since it gets unloaded from the server memory. On the first hit it gets loaded and then stays loaded until some time passes without anyone accessing it. 
Reference: https://devcenter.heroku.com/articles/dynos#dyno-sleeping

## Application URL

https://vidlyapplication.herokuapp.com

## RESTful API Endpoints

Open: <br />
https://vidly-application-api.herokuapp.com/api/genres <br />
https://vidly-application-api.herokuapp.com/api/movies <br />

Protected: <br />
https://vidly-application-api.herokuapp.com/api/auth <br />
https://vidly-application-api.herokuapp.com/api/users <br />
https://vidly-application-api.herokuapp.com/api/customers <br />
https://vidly-application-api.herokuapp.com/api/rentals <br />
https://vidly-application-api.herokuapp.com/api/returns <br />

## Admin UI Features

To see and use admin-only interface features for adding, editing, or deleting a movie, login with the following credentials: <br />

Email: admin@test.com <br />
Password: Test123! <br />
