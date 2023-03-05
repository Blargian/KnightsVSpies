## Knights & Spies setup guideline

To setup the project you will need to have NodeJS installed on your local machine. 
If you do not have this installed already then head on over to [the NodeJS homepage](https://nodejs.org/en/)
and download the latest version of NodeJS. 

## Cloning the project 

Once you have installed NodeJS you will need to clone the project to your local machine

Head on over to the [Knights & Spies github page](https://github.com/Blargian/spyspy) and click 
on the green button titled '<> Code'. Under 'Clone' you'll see options for HTTPS,SSH or GitHub CLI.
For simplicity sake click the copy icon next to the url 'https://github.com/Blargian/spyspy.git'

On your local machine open up a git enabled terminal and type 

`git clone`

and paste the previously copied url after this command: 

`git clone https://github.com/Blargian/spyspy.git`

## Installing dependencies 

Now that the project has been cloned to your local machine, you can install the dependencies. Navigate to the root of the previously cloned folder which should contain a file called 'package.json'. In your terminal type:  

`npm install`

This command will install all of the needed project dependencies which are listed in the package.json file. It could take a few minutes to fetch all the required dependencies. 

## Running development mode and tests locally

Once the previous command has finished, all of the project dependencies have been installed, and you can now run the project locally. 

To build and compile locally type: 

`npm run start:dev`

This will build the project and run it locally. You can now open up the game in a webbrowser by navigating to: 

`http://localhost:3000/`

You can simulate new players simply by opening up new tabs in your browser at the address above. Each tab will be a new player. 

To run the automated test-suite type 

`npm run test`

## Deploying to Heroku

