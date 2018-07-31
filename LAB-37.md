![cf](https://i.imgur.com/7v5ASc8.png) 
# 401 JS --  Lab 37 - Cookies and Profile Creation
## Submission Instructions
  * **This is a rolling lab that that will last through Friday. All subsequent assignments this week require that you have a *mid-term project* or a *substantially finished Lab 18* that implement account and profile creation with basic auth and bearer auth. If, for some reason, those projects are not suitable for these current lab assignments, you may use [Lecture 18](https://github.com/codefellows/seattle-javascript-401d25/tree/master/back-end/18-asset-management) as your backup. *However*, you can only get a maximum of 9 points if you do this.**
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Submit a pull request to your forked repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  * Submit the Github URL to the backend repo you selected
  * Submit any necessary `.env` variables for BOTH your backend and front end projects so that TA's can have an easier time configuring their environments

## Configuration  
#### backend
* Set a server-side cookie on your `/api/login` and `/api/signup` routes and give them expiry times. You can refer to examples in Lines 26-27 and Lines 43-44 of [this file](https://github.com/codefellows/seattle-javascript-401d25/blob/master/back-end/18-asset-management/aws-s3-asset-mgt/src/router/auth-router.js). Please name the `key` of your cookie to something different from this lecture code.
* Make a new `PUT` route for your `Profile` router if you do not have one already
* Make a new route called `/api/profiles/me` that returns a profile matching the provided `accountId`. Reference [lecture code](https://github.com/codefellows/seattle-javascript-401d25/blob/master/back-end/18-asset-management/aws-s3-asset-mgt/src/router/profile-router.js) for how these routes should be formatted.

#### frontend
* Follow lecture code's scaffolding
  
 
## Feature Tasks 
* Implement functionality that creates a new Profile associated with your authenticated account
    * Actions: make new Profile sync and async action creators
    * Components: 
        * Profile
        * Profile Form
        * Navbar
    * Lib/utils.js: make functions that delete and fetch your browser cookies
    * Lib/routes.js: add a new `/profiles` constant 
    * Reducers:
        * Make a new Profile reducer
        * Add changes to your Token reducer that fetches your cookie token
* Ensure that if a token cookie is set in your browser, you always remain logged in.
* If a user clicks the `Log Out` button, that should clear the the token cookie and force you to sign up or login again
* Your profile component be successfully updated when the form is submitted in Edit mode

 
## Testing (don't worry about this today)

 
 ## Stretch Goals
 * Same as previous lab
 * Additional testing with Cypress
 * Create multiple profiles and display those profiles in a list when your pathname is `/profiles`, i.e. a Facebook friends list. (This also involves having a backend route that fetches all profiles).
 * Include your token as a localStorage item and make checks to see if exists so you can recreate a user session similar to how the cookie works. Remember that the cookie will only work through `localhost` and NOT work on a deployed Heroku app unless you purchase a domain name. Setting up your token in localStorage can be a workaround.
 

##  Documentation  
Write a description of the project in your README.md
