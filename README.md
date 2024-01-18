# Kasa, rent an appartement 🏡: A React Front-end Application ⚛️

## I - Introduction

This project is a kind of RBNB copy 🏠🛏️. This is an Front-end application built with React and this is also my first React app.
In this app you will be able to navigate beetwen the Home page, the Logement page and the About section by interaction with the logement card and links of each section. There is also a 404 error redirection page in case of using unvalid adress.

This project require :
• Node JS

_Clone this repository on your computer then open the folder and from the root of the folder enter the command `npm install` in your terminal to install all the needed packages. Then open the page `http://localhost:3000` on your browser (make sure the application is running on the port 3000 because the port could be unvalable at the moment you start the application so another port could be use, in this case you will be able see in the terminal on what port the application is running)_

## II - The project

This project is structured in 2 folders : the `public` one in which you can find the html, and the logos and the `src` folder where there all the logical.

The `src` folder is composed by 5 under folders :

- assets : all the pictures for the app
- components : all the react components used in the differents pages of the app
- data : mocked data (pictures links, tags...)
- pages : here there are the 4 available pages to navigate in the app and their style sheet.
- sass : contains the main style sheet but not the ones specific at each pages since you can find them in the component folder himself.

### 1. 'hashrouter & createBrowserRouter'

You can find 2 branch, the 'main' branch in which it's used `createBrowserRouter` to navigate beetwen the different pages and the other branch 'hashrouter-to-deploy' in which i used `hashrouter` to be able to use this app when it is deployed on github since `createBrowserRouter` don't work with this kind of use.
