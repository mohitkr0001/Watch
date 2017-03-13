"use strict";

function tick() {
  var element = React.createElement(
    "div",
    { className: "Container" },
    React.createElement(
      "div",
      { className: "Block" },
      React.createElement(
        "h1",
        { className: "left-text" },
        "The Clock is ticking"
      ),
      React.createElement(
        "h2",
        { className: "item-block" },
        new Date().toLocaleTimeString()
      )
    )
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);