# GoogleBooks
A React-based Google Books Search app that allows the user to serach for a book in the google API.

## Description
This app will allows the user to look for a book. After the call to the google API the list of the books searched by the user are displayed. 

Click here https://yfatougooglesearch.herokuapp.com/ to access to the deployed version of the app.

## How to use GoogleBook search
Once the application loads, the user will have a search form on the landing page which is the Search page. On this page, a form will let the user enter the title of the book to Search.
Once the book is found, a list of items with the same title is displayed with two options for each entry: 
   1. "View" option - the user can access to the description of the book in the Google Play website
   2. "Save" option - the user can choose to save the book. The saved book will be inserted in a database.

   ![](googleSearch_demo1.gif)

A "Saved" page is also available for the user.
On this page, the user will access to the list of Saved books. On the "Saved" books page, the user has also two options for each entry: 
   1. "View" option - the user can access to the description of the book in the Google Play website
   2. "Delete" option - the user can choose to delete the book fro the list of saved books. The deleted book will be removed from the page and the database.


![](googleSearch_demo2.gif)



## How is this app built
The app is built with ReactJS.

## Technologies used
 - Javascript
 - ReactJS
 - JSX
 - Express
 - Node.js
 - MongoDB/Mongoose
 - Bootstrap
 - HTMLCSS


## How to setup the GoogleBook app locally
To use this application from a local environment, the following steps will be necessary:

1. Make sure that Reactjs is installed on your machine.

2. Clone this repo using the command line on the terminal: git clone https://github.com/Yfatou/GoogleBooks.git

3. Open the cloned repo, rename the existing client folder and create a new react app by typing create-react-app client at the root of the cloned repo.

4. Replace the src and public folder just created by the one in the renamed client folder.

5. Open the new client folder and copy the line __"proxy": "http://localhost:3001/",__ after "private": true,

6. Type npm run build

7. Follow the instructions and install the packages missing

8. Type npm run build again until the build is successful (repeat steps 6 and 7 as needed)

9. Start the application from the command line to the root level: npm start

