![cf](https://i.imgur.com/7v5ASc8.png) 
# 401 JS --  Lab 39 - File Reader API and AWS S3 Bucket Uploads

## Submission Instructions
  * **This is a rolling lab that that will last through Friday. All subsequent assignments this week require that you have a *mid-term project* or a *substantially finished Lab 18* that implement account and profile creation with basic auth and bearer auth. If, for some reason, those projects are not suitable for these current lab assignments, you may use [Lecture 18](https://github.com/codefellows/seattle-javascript-401d25/tree/master/back-end/18-asset-management) as your backup. *However*, you can only get a maximum of 9 points if you do this.**
  * Continue working from previous labs
  * Work in a branch on your fork
  * Submit a pull request to your forked repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
  * Submit the Github URL to the backend repo you selected
  * Submit any necessary `.env` variables for BOTH your backend and front end projects so that TA's can have an easier time configuring their environments

## Configuration  
#### backend
* No extra changes today unless you wish to add any new routes to make more customized requests (i.e., you want to fetch and display a list of photos associated with a user's account on page load, etc.)
* **Be sure you have a current AWS access key id and AWS secret access key in your `.env.` file**. Your `.env` file for the backend should look like this:
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

  
 
## Feature Tasks 
* Create a new component that is a form which has an `<input type="file />` tag, which accepts a file upload
* Determine the best place in your app this component should go. In lecture, the component was placed in `Dashboard`, but this may not be the best place for you app.
* Use the File Reader API to show a preview of that file upload
* Setup new sync and async action creators that make a request to your asset upload route on your backend 
* Make a new reducer for your asset and remember to place it in your `reducer/main` reducer module that exports `combineRedudcers`
* Create a `drop zone` in your form component so a user can drag and drop files from their own hard drive with ease 
* **NOT PROVIDED IN LECTURE CODE, FIGURE THIS OUT ON YOUR OWN**: After succesful upload of your asset to Amazon S3, display your uploaded assets in a list on the page. This may need to be its own component that has access to the Redux store. 

 
## Testing 
* None toady

 
 ## Stretch Goals
 * Abstract the `drop zone` in your file upload form to another component 
 * Figure out how to write a Cypress test for your file upload. Reading about [Cypress.Blob](https://docs.cypress.io/api/utilities/blob.html#Image-Fixture) is a great place to start. 
    * If you aim for this stretch goal, it is best to also stub your responses completely so you don't have to rely on making a real upload to AWS
 

##  Documentation  
Write a description of the project in your README.md
