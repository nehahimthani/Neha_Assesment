This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `application related information`
Kindly install the node-modules before npm start.

For the first time all the data will be loaded on the page.<br>
This application lets the user to search the job based on location/experience/compnayname/skills.<br>
At any moment if user wants to remove the searching parameters there is a "Clear filter" button for that.<br>

Features-

Sort by location - Sorting will be done in ascending order. In most of the job data object, location field was empty, 
so when the user will click on "Sort by Location" firstly those jobs will be seen that have empty location and there after jobs will be seen based on location name (A-Z)

Sort by experience- Sorting will be done in ascending order. 
In most of the job data object, experience field was empty, so when the user will click on "Sort by experience" firstly those jobs will be seen that have empty experience or fresher ( due to data issue I have shown experience as 0 for both empty experience and experience with fresher value but this case will be applicable only when the user will click on "Sort by experience" button) and there after jobs will be seen based on experience in ascending order.

### `test cases`
When the user opens this application , he can see all the job details. Then if the user wants to search some specific job based on query parameters, he can do that <br>
1- User can search job based on location/experience/company name/skill.<br>
2- Suppose user search the job based on location, then only that particular location based jobs will be visible. <br>
And when in continuation if the user wants to add experience and then search then the data based on both location and experience will be visible to him.<br>
Again in the same continuation if the user also wants to add any specific skill or company name then the searched data that will be visible to him <br>
will be based on the location/experience/skill or company name that he has added.<br>

3- User can also sort the data based on location and experience. I have made one assumption that when sorting is done based on experience,I have <br>
made experience value to 0 for those where experience is either missing or have value as "fresher".<br>

4- Any point of time if user wants to remove the filters, then there is a clear filter button available on whose click all the data will again be populated on the screen.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
