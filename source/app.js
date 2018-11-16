const Item = (props) => {
  const value = props.value;
  //return React.createElement('li', {className: 'new-main-item'}, value)

  return(
    <li className="new-main-item">{value}</li>
  )
}

const App = () => {
  return React.createElement(
    'div', 
    {className: 'main'},
  [ 
    React.createElement('h1', { className: 'header-title'},'Main'),
    React.createElement('ul', {className: 'main-list'},[
      React.createElement(Item, {value: 'item 1'}),
      React.createElement(Item, {value: 'item 2'}),
      React.createElement(Item, {value: 'item 3'}),
      React.createElement(Item, {value: 'item 4'}),
      React.createElement(Item, {value: 'item 5'}),
      React.createElement(Item, {value: 'item 6'}),
      React.createElement(Item, {value: 'item 7'})
    ])
]
  );
};
//functional component is just the render of the class component/no state or lifecycle
ReactDOM.render(React.createElement(App), document.getElementById('root'));