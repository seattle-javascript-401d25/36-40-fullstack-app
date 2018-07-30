# 401 JS --  Lab 37 Full-Stack Auth

## Submission Instructions
  * **This is a rolling lab. All subsequent assignments this week require that you have a *mid-term project* or a *substantially finished Lab 18* that implement account and profile creation with basic auth and bearer auth. If, for some reason, those projects are not suitable for these current lab assignments, you may use [Lecture 18](https://github.com/codefellows/seattle-javascript-401d25/tree/master/back-end/18-asset-management) as your backup. *However*, you can only get a maximum of 9 points if you do this.**
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Set up your repo with Travis CI * Set up Travis CI and update your repo to utilize the [Travis CI Github app](https://github.com/marketplace/travis-ci). *Use the free instsallation.* 
  * Submit a pull request to your forked repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Configuration  
#### backend/
* Select your midterm project OR your Lab 18 as your backend API that interacts with your front end
* Add a `CORS_ORIGINS` variable in your `.env` file of your backend project
* Make the necessary CORS changes per lecture code in your `lib/server.js` module so that your front end origin can communicate with your back end server
#### frontend /
* Follow lecture code's scaffolding
  
 
## Feature Tasks 
* Implement Login/Signup functionality for your chosen backend project.
* Add thunk middleware
* Make async action creators for making ajax requests to your backend
* Make sync action creators for updating your app store

#### Components
```
Provider
  App
    AuthRedirect
    Landing
      // handle login and signup
    Dashboard
      // display main app when a user properly authenticates
```

* Implement a Landing route that allows a user to signup and login to the application.
* Manage the frontend routes based on the clients authorization
  * If the user is not logged in, they should be forced to view the Landing page at `/, /signup, or /login`.
  * If the user is logged in, they should always view the Dashboard page at `/dashboard`
 
## Testing
* Testing requirements are not due until the last day of this rolling lab, **but it is strongly recommended you start testing today**. 
* Use Cypress to test the following scenario:
    * A user travels to the homepage at `/`
    * A user clicks `Sign up` on your nav menu to travel to `/signup`
    * A user fills out a username, email, and password (and any other required properties for your account model) and submits the form
    * The `Dashboard` page properly appears indicating the user has been authenticated
    * User travels back to `/login`
    * User enters their username and password to authorize themselves into the app
    * The `Dashboard` page properly appears indicating the user has been authorized
 * You must stub your responses and set an `isStubbed` boolean variable in your test. Submit your tests with this boolean set to true so that TA's do not have to make requests to a real server to run your Cypress tests

##  Documentation  
Write a description of the project in your README.md
