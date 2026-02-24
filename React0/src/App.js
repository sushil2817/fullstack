import React from "https://esm.sh/react@19.2.0";
import ReactDOM from "https://esm.sh/react-dom@19.2.0/client";

const Chai = (props) =>{
    return React.createElement("div",{},[
        React.createElement("h1",{},props.name),
        React.createElement("h5",{},props.cost),
    ]);
};

const App = () =>{
    return React.createElement(
        "div",
        {class:"test"},
        React.createElement("h1",{},"Chai variations by chaicode",),
        React.createElement(Chai,{name:"Masala Chai",cost:"600"}),
        React.createElement(Chai,{name:"Ginger Chai",cost:"900"}),
        React.createElement(Chai,{name:"Lemon Tea",cost:"800"}),
        React.createElement(Chai,{name:"Ice Tea",cost:"700"}),
    );

};
const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))