const App = () =>{
    return React.createElement(
        "div",
        {},
        React.createElement(
            "h1",
            {},
            "Chai chill and react - React -18"
        )
    )
}


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))