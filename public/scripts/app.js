"use strict";

console.log("App.js is running");

var app = document.getElementById('app');

var application = {
    title: "Indecision App",
    subtitle: "Let me clear your ambiguity!",
    option: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        application.option.push(option);
        e.target.elements.option.value = "";
        render();
    } else {
        //do not run the code
    }
};

var removeAll = function removeAll() {
    application.option = [];
    render();
};

var makeDecision = function makeDecision() {
    var num = Math.floor(Math.random() * application.option.length);
    console.log(application.option[num]);
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            application.title
        ),
        React.createElement(
            "p",
            null,
            application.subtitle
        ),
        React.createElement(
            "h3",
            null,
            "Option List"
        ),
        React.createElement(
            "p",
            null,
            application.option.length > 0 ? "Here are your options!!" : "You have no options in the list"
        ),
        React.createElement(
            "ol",
            null,
            application.option.map(function (num) {
                return React.createElement(
                    "li",
                    { key: num },
                    num
                );
            })
        ),
        React.createElement(
            "button",
            { disabled: application.option.length == 0, onClick: makeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            " Remove All "
        ),
        " ",
        React.createElement("br", null),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );

    ReactDOM.render(template, app);
};

render();
