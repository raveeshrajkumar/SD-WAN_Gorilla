# Gorilla SD-WAN Webpage

This repository contains the source code for the Gorilla SD-WAN webpage, built using React. To run the application locally, follow these steps:

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Step 1: Create a new React app

If you don't have an existing React project, you can create one using the following command:

npx create-react-app my-app

This will create a new React application named "my-app" in your current directory.

## Step 2: Replace the default source code

Once the React app is created, navigate to the project directory:

cd my-app

Now, you need to replace the default `src` folder with the one from this repository. You can do this by following these steps:

1. Delete the existing `src` folder in your project:

   rm -rf src

2. Download or clone this repository to your local machine.
3. Copy the `src` folder from this repository and paste it into your project's root directory.

## Step 3: Install dependencies

Next, you need to install the project dependencies. Run the following command in your project's root directory:

npm install

This command will install all the required dependencies listed in the `package.json` file.

## Step 4: Start the development server

After the installation is complete, you can start the development server by running the following command:

npm start

This will start the development server and open the Gorilla SD-WAN webpage in your default browser at `http://localhost:3000`.

## Step 5: Build for production

If you want to build the application for production, run the following command:

npm run build

This command will create an optimized build of your application in the `build` folder. You can then deploy the contents of the `build` folder to a web server.

That's it! You have successfully set up the Gorilla SD-WAN webpage on your local machine. Feel free to explore the code and make any necessary modifications.
