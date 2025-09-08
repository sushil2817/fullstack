import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";


const Chai  = () =>{
    
    return React.createElement("div",{},[
        React.createElement("p",{},"Ginger Chai")
    ])
};

const App = () =>{
    return React.createElement(
        "div",
        {},
        [React.createElement("h1",{},"Chai Variations by chaicode"),
            React.createElement(Chai),
            React.createElement(Chai),
            React.createElement(Chai),
            React.createElement(Chai),
        ]
    )
}


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))