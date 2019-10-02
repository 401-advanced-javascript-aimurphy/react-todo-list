import React from 'react';
import Header from './header/header.js'
import Form from './form/form.js';
import List from './list/list.js';
import '../design/App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasks:[],
      // item:{},
    }
  }
   
  addTask=(item)=>{
    const newItem = {
      name: item,
      id: Math.random(),
      complete: false,
      // id:
    };
    // this.setState({item: newItem});
    // console.log(newItem);
    this.setState({tasks: [...this.state.tasks, newItem]});
  }

  deleteTask=(actualID)=>{
    
    let tasklist = this.state.map(item=>item.id!== actualID ? item:{...item, complete:!item.complete});
    console.log(tasklist, this.state.tasks);
  }

  // we are just setting state and updating the master list. 
  render(){return (
    <div className="App">
      <Header />
      <Form action={this.addTask}/>
      <List action={this.deleteTask} tasks={this.state.tasks}/>
    </div>
  );}
}

export default App;
