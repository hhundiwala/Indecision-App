"use strict";

console.log("App.js is running");

var template = React.createElement(
    "h1",
    null,
    "This is it, the apolocalypse!!! "
);

var test_trmplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name: Harsh Hundiwala"
    ),
    React.createElement(
        "p",
        null,
        "Don't mess with me!"
    )
);

var app = document.getElementById('app');

ReactDOM.render(test_trmplate, app);
