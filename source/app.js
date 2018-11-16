const Item = (props) => {//function declaration
  const {value, handleClick} = props;

  return (
    <li className="new-main-item" onClick={handleClick}>{value}</li>//jsx syntax 
    //return React.createElement('li', {className: 'new-main-item'}, value)
  )
}

const ItemContainer = (props) => {
  const {items, handleClickItem} = props;//destructured
  //const items = props.items//javascript
  return (
    <ul className = "main-list">
     {
       items.map((item, idx)=>{
        return <Item key={idx} value = {item} handleClick = {handleClickItem}/>
      })
    }
    </ul>
  );
}

// const App = () => {
//   const stuffs = ['thing1', 'thing2', 'thing3'];
//   const names = ['Bert', 'Lauren', 'Joshua', 'Mitchell']
//   return (
//     <div className ='main'>,
//       <h1 className='header-title'>
//       Main
//       </h1>
//       <ItemContainer items = {stuffs}/>
//       <ItemContainer items = {names}/>
//       <ul className='main-list'>
//         <Item value="item 1" />
//         <Item value="item 2" />
//         <Item value="item 3" />
//         <Item value="item 4" />
//         <Item value="item 5" />
//         <Item value="item 6" />
//         <Item value="item 7" />
//         <Item value="item 8" />
//       </ul >
//       </div>
//      )}


      /* //React.createElement('h1', { className: 'header-title' }, 'Main'),
      //React.createElement('ul', {className: 'main-list'},[//function invokation
      // React.createElement(Item, { value: 'item 1' }),in javascript
      // React.createElement(Item, { value: 'item 2' }),
      // React.createElement(Item, { value: 'item 3' }),
      // React.createElement(Item, { value: 'item 4' }),
      // React.createElement(Item, { value: 'item 5' }),
      // React.createElement(Item, { value: 'item 6' }),
      // React.createElement(Item, { value: 'item 7' })
      //])
    ]
  );
}; */
//functional component is just the render of the class component/no state or lifecycle

//cannot have peer level html tags

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stuffs: [1,2,3],
      names: ['jo', 'bo', 'go'],
      swpeople:[]
    }
    this.handleClickItem = this.handleClickItem.bind(this);
  }
  handleClickItem(event){
    console.log(event.target);
    alert()
  }

      componentDidMount(){
        console.log('App Component mounted!')

        axios.get("https://swapi.co/api/people")
        .then(response => {
          const people = response.data.results;
          const swNames = people.map(person => person.name);
          console.log(swNames);

          this.setState({
            swpeople:swNames
          })
        })
        .catch(err => console.log(err));
  }

render(){
  const {swpeople} = this.state;
  return (
    <div className = "main">
    <h1  className = "header-title">Main</h1>
    <ItemContainer items = {this.state.stuffs}/>
    <ItemContainer items = {this.state.names}/>
    <ItemContainer items = {swpeople} handleClickItem={this.handleClickItem}/>
    </div>
  )
}
}





ReactDOM.render(React.createElement(App), document.getElementById('root'));