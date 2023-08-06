# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## My Notes

1. Yup majorly helps in validations. 

insted of writing our custom validations , yup comes in handy with its own validation sand easy to write.

2. to reduce the biler plate code we can use formik props: 
 =ex: instead of writing:  
    onBlur={formik.handleBlur}
    onChange={formik.handleChange} 
    value={formik.values.Name}  in all the fileds, we can write only on line of code {...formik.getFieldProps('name')}

3. To refactor code formik helps us with components.
   Formik : Wrap over the entire for insteaed of useFormik hook and pass the initialVlaues, validationSchema, on submit as props.
   Form:intesadd of html form use the Form component given by formik and reove onsubmit as formik takes care about it.
   Field:(by deault it renders an html input element) inested of label use field component and remove the onblur, on chnage, bvales and also the  formik.getfieldprops , as the field comp hooks up handle change, handle blur, values etc to formik using name attribute .
    i. Any additional props in the field component can pass through ex; Placeholder
    ii. ability to render a diff element other than input or deafult elemt Ex: i can use text area in filed componet --> <Field as='textarea' id='' name=''/> like wise we can use as input or text are or select or custom react component.
   Errormessage : instead of the error message code use this components as it conditionally renders the error corresponding to form field only if filed visited and error exixts. 

   4. we can also create our field component and errormessage componet by using renderprops patterns(helps in case we want to chnage some default functionalities.)

   5. We can assign any element to error message component by div componnet attritubute ans also a custom copopnet. also we can craete create a new component or custom thing using render props pattern.
   6. Nested objects :(require to group together some data) collects the data in form in a format we want to store in db. (namaging a Field state in nested Objects)
   7. Arrays: require to handle list data(ex: phone numbers.)
   8. FieldArray: helps us to add dynamic list in a formik   
   9. FastField: is the optimized version of Field. renders only if we chnage the state of FastField compoennt. where as Field component render when there is a chnage in state of other fields as well. read more in formik doc. due to coutions.

   10. i. Formik runs validations after any change event in form. 
       ii. Formik runs validations after any blur event in form. 
       ii. Formik runs validations when we submit event in form. 
   By using ValidateOnchnage=[false] we can stop the formik validation on chnage event
   By using ValidateOnblur=[false] we can stop the formik validation on blur event

   11. we can also do field level validation : by giving the same validate function for specific filed and pass as attribute in filed Validation={validationmethod}. to get the error use formik errorcomponent

   12. To trigger manual validation to entire form use render prop pattern.

   13. Two ways to disbale a submit button
        1. by valiadating : 
        i. use disabled=[props.isValid] (isValid will be false if any error msg is tehre)
        ii. use validateOnmount method in Formik comp , to diable on initial form load
        iii.to diable only if any of the filed is chnaged use dirty.
        2. during processing or during submitting form: