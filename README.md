# Redux Counter Example with Server Side Rendering

+ This is a simple implementation of the Redux React Server Side example given @ [http://redux.js.org/docs/recipes/ServerRendering.html](http://redux.js.org/docs/recipes/ServerRendering.html)
 
 
## To Install all of the dependencies ##
    npm install
    
## To build the project ##

    npm run build

## To launch the Node Express Server ##

    node dist/server
    
...And head over to [http://localhost:3000/](http://localhost:3000/)


### A few notes ###

All of the relevant counter code can be found in the lib directory. Upon building (Babel/Webpack) the code gets copied over to the dist folder and a bundle.js file gets created.
This implementation uses the following tools:

1. Babel
2. Webpack
3. React
4. Redux
5. Node.js/Express

There are a lot of optimizations that could be made, this is just a basic example.

## Some Helpful Links that relate to this project ##

[React/Redux Server Side Rendering](http://redux.js.org/docs/recipes/ServerRendering.html)

[Redux Project Counter Example](https://github.com/reactjs/redux/tree/master/examples/counter)






