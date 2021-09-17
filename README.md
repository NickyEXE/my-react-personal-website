# Nicky's Personal Website!

This Readme's a work in progress. I'm also using it as my to-do list. I apologize in advance.

To do:
- Add configuration options and explanations to games.
- Refactor the arcade and its games.

### The Arcade

In order to add a game to the arcade, use the PlayGame component passing in a function that runs a game. This function must:
- Take in the canvas as an argument, and render to the canvas
- Either return a cleanup function, or resolve to a cleanup function in the case of an asynchronous function (the latter was implemented to deal with waiting to load all images before starting a game.)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
