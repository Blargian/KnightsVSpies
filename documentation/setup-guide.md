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

Now that the project has been cloned to your local machine, you can install the dependencies using 

`npm install`

Wait for all of the dependencies to download. This could take a few minutes. 

## Running development mode and tests locally

Once all of the project dependencies have been installed, you can now run the project locally. 

To build and compile locally type 

`npm run start:dev`

To run the automated test-suite type 

`npm run test`

## Deploying to Heroku

