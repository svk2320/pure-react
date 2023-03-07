const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title' }, "React Is rendered"),
        React.createElement(Person, { name: 'Nitish', occupation: 'Farmer' }, null),
        React.createElement(Person, { name: 'Bharani', occupation: 'SuperMarket Owner' }, null),
        React.createElement(Person, { name: 'Abliash', occupation: 'Business Man' }, null),
    ])
};

// old way of writing the ReactDOM
// ReactDOM.render(React.createElement(App), document.getElementById('root'));

// New way of writing the ReactDOM
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    React.createElement(App)
);