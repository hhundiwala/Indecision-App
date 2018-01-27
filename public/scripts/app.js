"use strict";

console.log("App.js is running");

var app = document.getElementById('app');

var count = 0;
var addOne = function addOne() {
    count++;
    console.log("Count!" + count);
    renderCounter();
};

var minusOne = function minusOne() {
    count--;
    console.log("Count!" + count);
    renderCounter();
};

var resetCount = function resetCount() {
    count = 0;
    console.log("Count!" + count);
    renderCounter();
};
var test_trmplate = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "This is just the template "
    ),
    React.createElement(
        "h1",
        null,
        " Counter : ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        " +1 "
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        " -1 "
    ),
    React.createElement(
        "button",
        { onClick: resetCount },
        " Reset "
    )
);

console.log(test_trmplate);

ReactDOM.render(test_trmplate, app);

var renderCounter = function renderCounter() {
    var test_trmplate = React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "This is just the template "
        ),
        React.createElement(
            "h1",
            null,
            " Counter : ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            " +1 "
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            " -1 "
        ),
        React.createElement(
            "button",
            { onClick: resetCount },
            " Reset "
        )
    );

    ReactDOM.render(test_trmplate, app);
};
