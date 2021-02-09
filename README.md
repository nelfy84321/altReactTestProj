# About "React Test Project"

This application is a SPA that has the following pages:\
“/ ” - the main page, which contains information about the application, about me and about my experience.\
“/news” - a page with news, which are loaded from the jasonplaceholder. Pagination works.\
“/login” and “/signup” - pages on which you can register a user and log in to the system to access the page that is closed from unauthorized users. If an authorized user tries to visit one of these pages, a redirect to the profile page will work.\
“/profile” - a page where the authorized user can take notes for himself. App will redirect the user to profile page if an unauthorized user tries to enter this page.\
There is validation on the registration page: the username must be unique; the password and password confirmation fields must match. The user will see an alarm if one of the conditions is not met.\
The correctness of the username and password on the login page is checked.\
All information about registered users and notes is stored in localStorage.\

##### Stack: react, react-router, redux, redux-thunk.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
