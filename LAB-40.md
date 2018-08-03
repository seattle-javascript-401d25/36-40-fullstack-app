![cf](https://i.imgur.com/7v5ASc8.png) 
# 401 JS --  Lab 40 - Heroku Deployment and Amazon Cloudfront CDN

## Submission Instructions
  * **This is a rolling lab that that will last through Friday. All subsequent assignments this week require that you have a *mid-term project* or a *substantially finished Lab 18* that implement account and profile creation with basic auth and bearer auth. If, for some reason, those projects are not suitable for these current lab assignments, you may use [Lecture 18](https://github.com/codefellows/seattle-javascript-401d25/tree/master/back-end/18-asset-management) as your backup. *However*, you can only get a maximum of 9 points if you do this.**
  * Continue working from previous labs
  * Work in a branch on your fork
  * Submit a pull request to your forked repository
  * Submit a link to your pull request on canvas
  * Submit the following three links
     * Your deployed Heroku frontend
     * Your deployed Heroku backend
     * Your Amazon Cloudfront CDN URL, with a pathname to a file that is in your related S3 bucket, i.e, assuming your bucket has an `index.html` file, you would also include: 
       ```
       http://my-generated-cloudfront-cdn-url/index.html
       ```
  * Submit a question, observation, and how long you spent on canvas  
  * Submit the Github URL to the backend repo you selected
  * Submit any necessary `.env` variables for BOTH your backend and front end projects so that TA's can have an easier time configuring their environments

  
 
## Feature Tasks 
* Deploy your frontend/backend code as demonstrated in lecture today, ensuring you have set up all the proper `env` variables in Heroku settings 
* Ensure your front end has an `index.js` and you have installed Express via `npm i express` so you can serve your front end code through Heroku
* Ensure your front end `package.json` has the following scripts in order to work properly:
```
"start": "npm run build && node index.js",
"heroku-prebuild": "npm uninstall cypress",
"heroku-postbuild": "webpack --progress --config webpack.prod.js"
```
* Run the script `npm run build` in the root of your frontend code to generate a `build` folder that has all the bundled modules you need for your app (`main[hash].js, main[hash].css, index.html, any related image assets`)
* Create a new S3 bucket and drop your bundled files into it
* Go to Amazon Cloudfront in your AWS console and create a new CDN for your S3 bucket
* Go to your Heroku settings of your deployed front end, click on `Config Vars`, and add a variable called `CDN_URL` equal to the AWS Cloudfront domain you generated
* **Delete your build folder from your local project**

 
## Testing 
* Review the prior labs that had testing requirements and **complete those testing requirements when you submit this lab**. 
  * [Lab 36 Testing Requirements](https://github.com/seattle-javascript-401d25/36-40-fullstack-app#testing-dont-worry-about-this-today)
  * [Lab 38 testing Requirements](https://github.com/seattle-javascript-401d25/36-40-fullstack-app/blob/master/LAB-38.md#testing)
  

##  Documentation  
Write a description of the project in your README.md. 
