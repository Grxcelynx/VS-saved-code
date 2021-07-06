"use strict";

console.log("hello");


function Hello(props) {

    return (<h1>Hello world (from React + jsx</h1>);
    // return React.createElement('h1', null ,'Hello world (from React)');
}

ReactDOM.render(
    <Hello />, //Hello element
    
//or use 
    // React.createElement(Hello),
    document.getElementById("react-go")
);