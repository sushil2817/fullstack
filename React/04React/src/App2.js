import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";


const Chai  = (props) =>{
        console.log(props);

    return React.createElement("div",{},[
        React.createElement("h1",{},props.name),
        React.createElement("p",{},props.cost)
    ])
};


const App = () =>{
    return React.createElement(
        "div",
        {},
        [React.createElement("h1",{},"Chai Variations by chaicode"),
            React.createElement(Chai,{name:"masala chai",cost:100}),
            React.createElement(Chai,{name:"ginger chai",cost:100}),
            React.createElement(Chai,{name:"icetea chai",cost:100}),
            React.createElement(Chai,{name:"simple chai",cost:100}),
        ]
    )
}


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))