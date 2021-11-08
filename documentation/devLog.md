## Development Log

### Project setup 

Kind of been stuck in tutorial hell a little bit. I like tutorials but I get bored of them very easily because I feel like I'm not making enough progress. I would rather just build something and learn as I go. With that said I am now trying to get the project set up so I can have express serve up React with typescript. 

This [article](https://nils-mehlhorn.de/posts/typescript-nodejs-react-ssr) article seems to give a good overview of what I want to do. 

Next I want to get Jest setup so that I can write unit tests. I'll try the guide for getting setup with webpack [here](https://jestjs.io/docs/webpack)

## Room creation and joining

I've been reading a few articles and watching a lot of videos but structuring the application is a bit of a grey area for me still. There is a lot of content about simple chat applications but not much on how to structure a turn based multiplayer game. At this point grey areas for me specifically are:
- how to structure the code (I think MVC is a good choice but how does socket work in this context?)
- how does routing take place. Does the frontend do that or does the backend do that? After all this is a single page application. My guess is that the front end does that maybe.

I'll start with something basic and just go along with it. If my approach is not optimal I will learn something from it so that is okay. My goal now: 

- click create room
- this sends an event to the server. Server generates a roomcode and stores it in some datastore serverside and then sends this code back to the frontend telling it to redirect the app to route /room=XXXXX.
- A socket room will have to be created corresponding to the room code.
- on the homepage entering the code sends this code to the server which checks if it is one of the roomcodes which exists currently and if it is it routes the player to the same route /room=XXXXX
- Backend will have to keep track of the connected clients in a room. Better to use an [object](https://stackoverflow.com/questions/63038016/most-efficient-way-to-store-and-access-list-of-clients-in-sockets-io-node-js)


Useful links:
- [Using commonJS modules in typescript](https://medium.com/@steveruiz/using-a-javascript-library-without-type-declarations-in-a-typescript-project-3643490015f3)

Had a lot of trouble actually testing sockets. [This example](https://socket.io/docs/v4/testing/) was eventually what I used to get it to work. Ran into 'openHandler' issues with Jest. 

