# Electrike

Electrike is a website designed to show the price of electricity according to the spanish new PVPC tariff which take effect from 1 June 2021.

## Demo

To access the web application, you can visit https://electrike.es/.

## Features

- Dropdown with all the information about the new PVPC tariff.
- Summary with current price and lower and higher prices of the day.
- Table of prices according to the time of day and the price variation between hours.
- You can switch between PCB prices or CYM prices depend on where you live.

## Installation

You can clone the repository to your computer. In order to run it you will need to install Node.js and Gulp.

After cloning you need to run:

```
npm install
```

Once the installation is finished, in the project directory, run:

```
npm start
```

Open http://localhost:3000 to view it in your browser.

## Technologies

```
- HTML5
- SASS & Bootstrap
- JavaScript
```

## Work to be done

- Show indicator for different periods of the day.
- Show average price for the day.
- Select date to check prices.
- Show the correct current price if you live in the Canary Islands (other time zone).
