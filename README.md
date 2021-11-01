# NordCloud Notes
This app was made for recruitment process. 

## Stack ##
**React + AWS Amplify + Graphql**

Why ? 
* Inspired by this blog-post https://medium.com/nordcloud-engineering/how-we-built-a-roadmapper-tool-in-just-3-hours-using-amplify-and-ci-cd-pipelines-45c3826feca6 (in fairness took me more than 3 hours to full deployment :rocket:)
* Also i haven't work with serverless apps, so it was nice experience trying it for first time
* Authentication handled by AWS Cognito Pool

## Task Requirements :notebook:
App should be created with following requirements in mind:
* Share the note content :heavy_check_mark:
* Ability to define life-time of the note :heavy_check_mark:
* Password protected notes :heavy_check_mark:

Additional task :page_with_curl:
* Create & Design & Implement additional functionality that could be usefull in such app.
 
  Additional features implemented:
  * Create Folders / Add notes to selected folders :heavy_check_mark:
  * Ability to Create New Events via Calendar Component :heavy_check_mark:
 


## React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Amplify
To run amplify existing project please follow this link -> https://aws.amazon.com/blogs/mobile/amplify-cli-adds-scaffolding-support-for-amplify-apps-and-authoring-plugins/
