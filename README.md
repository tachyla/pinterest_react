
Get Up & Running: 

This application was created with the Create-React-App command. 
The following dependencies are needed in the package.json to successfully run the application:

React 15.6.2
ReactDom 
React Router Dom
prop-types

After all dependencies are installed, use 'npm start' to launch the application. A new tab should open, starting the server using port localhost: 3000


The most significant library used for this one page application is React. It allowed me to create modular and reuseable components that can easily be utilized or omitted.

**App - is the outtermost component rendering a single parent component BoardCard to the DOM 

**BoardCard - is a representation of the pintrest board that contains child components like a list of infinite scrolling pins and interchangable widgets 

**PinsList maps the pins_formatted.json file to render the pin images in a ul.  

Widgets represent how powerful the React Library is, providing small modular stateless components that can be used or omitted
    **logo - links user to pinterest.com
    **search - filters images based on search keywords
    **home - returns user to their user profile

