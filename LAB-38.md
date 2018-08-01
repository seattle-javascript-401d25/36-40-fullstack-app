![cf](https://i.imgur.com/7v5ASc8.png) 
# 401 JS --  Lab 38 - Google OAuth

## Submission Instructions
  * **This is a rolling lab that that will last through Friday. All subsequent assignments this week require that you have a *mid-term project* or a *substantially finished Lab 18* that implement account and profile creation with basic auth and bearer auth. If, for some reason, those projects are not suitable for these current lab assignments, you may use [Lecture 18](https://github.com/codefellows/seattle-javascript-401d25/tree/master/back-end/18-asset-management) as your backup. *However*, you can only get a maximum of 9 points if you do this.**
  * Please have different SCSS styles from lecture code or you will get a 0
  * Continue working from your previous labs
  * Work in a branch on your fork
  * Submit a pull request to your forked repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  * Submit the Github URL to the backend repo you selected
  * Submit any necessary `.env` variables for BOTH your backend and front end projects so that TA's can have an easier time configuring their environments

## Configuration  
#### backend
* Get a [Google](http://www.google.com) account if you do not have one already
* Sign into the [Google Developer Console](https://console.developers.google.com) and create a new project
  * Follow all the steps shown in lecture today to obtain your Google client id and your Google client secret
* Make the necessary changes to your `corsOptions` object in our `lib/server.js` module so you can handle undefined origins that may come from Google or Cypress test environments
* At this point, your backend `.env` should now look like this:
```
NODE_ENV=development
PORT=3000
CORS_ORIGINS=http://localhost
MONGODB_URI=mongodb://localhost:27017/testing
SECRET_KEY=randomstring
AWS_ACCESS_KEY_ID=your-own-aws-info
AWS_SECRET_ACCESS_KEY=your-own-aws-info
AWS_BUCKET=your-own-aws-info
GOOGLE_OAUTH_ID=your-own-google-info
GOOGLE_OAUTH_SECRET=your-own-google-info
CLIENT_URL=http://localhost:8080
API_URL=http://localhost:3000/api
```
* Make a new `googleOAuth` router module that takes in a `code` from Google in order to initiate OAuth on the backend
* Save a new acount in the Mongo database based off the Google response you received
* If an existing user signs in again using Google, you should query the Mongo database for that user and set the user's token as a cookie in the browser
* Use the comments in [lecture code](https://github.com/codefellows/seattle-javascript-401d25/blob/master/back-end/18-asset-management/aws-s3-asset-mgt/src/router/google-oauth-router.js) as a guide for how you should code this process out
#### frontend
* Follow current lecture's scaffolding
* Your frontend `.env` should now look like this:
```
API_URL=http://localhost:3000/api
GOOGLE_OAUTH_ID=your-own-google-oauth-id
```
* Configure your Webpack so that you set up a `GOOGLE_OAUTH_ID` constant that is globally available in your app
* Cofigure the `eslintrc.json` to prevent linting of the `GOOGLE_OAUTH_ID` variable



 #### Feature Tasks
* Implement all the new changes to your backend noted above in Configuration
* Determine the best component in your app that should initiate Google OAuth, i.e. where to place the `href` that a user clicks to log in via their Google account. In lecture code, the best place was `Navbar`, but your app might have a different need. 

 
## Testing
* These testing requirements are not due until the last day of this rolling lab. TA's will *not* take away points for this specific lab if you don't have Cypress tests ready. **However, it is strongly recommended you still write your tests today**. 
* Continue from Monday's scenario after you succesfully signed up and logged in, and add this scenario:
    * A logged in user clicks on the `Profile` link
    * The Profile form appears and the user creates a new profile
    * The user edits the profile 
    * The user logs out and logs back in  and can view their profile upon clicking the `Profile` link
 * You must stub your API responses and set an `isStubbed` boolean variable in your test. Submit your tests with this boolean set to true so that TA's do not have to make requests to a real server to run your Cypress tests
 * It is not necessary to do any testing regarding the Google OAuth API
 
 ## Stretch Goals
 * Same as previous labs
 * Try to stub out a Google response in your backend code and write tests for your new Google OAuth route. Refer to his blog about [mocking test data in Jest](https://medium.com/@deanslamajr/jest-fn-all-the-things-d26f3b929986) to get started.
 * Switch it up! Instead of sticking with Google, find another OAuth client to use instead, e.g. Github, Facebook, LinkedIn, etc.
 * Utilize [Passport](http://www.passportjs.org/docs/oauth/) modules specfic to Google or the third party client you intend to use for this lab
 

##  Documentation  
Write a description of the project in your README.md
