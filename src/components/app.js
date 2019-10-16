import React from 'react';
import Header from './header/header.js'
import Form from './form/form.js';
import List from './list/list.js';
// import Button from './list/button.js';
import '../design/todo.css';
// import Button from './list/button.js';

class App extends React.Component{
  state={
      tasks:[],
      item:{},
      count:''
    }
   
  addTask=(newItem)=>{
    console.log('form data is,', newItem);
    let add={
      name: newItem.name,
      id: Math.random().toString(),
      complete: newItem.complete,
    };

    this.setState({tasks: [...this.state.tasks, add]});
  }

  deleteTask=(delItem)=>{
    let itemName = delItem.id;

    let tasklist = this.state.tasks.filter((item) => item.id !== itemName);

    this.setState({tasks: tasklist});

  }

  toggleComplete=(toggled)=>{
    console.log('in toggler',toggled);

    let tog = toggled.id;
    console.log('tog id',tog);

    let status = this.state.tasks.filter((item) => item.id === tog);
    console.log('filter for toggled',status[0].complete);
    status[0].complete=!status[0].complete;
    console.log('change to complete?',status);

    let tasklist = this.state.tasks.filter((item) => item.id !== tog);
    console.log(tasklist, 'is task list');
    this.setState({tasks: [...this.state.tasks,tasklist]});

    // this.setState({item: status[0]});

    this.addTask(status[0]);


  }
  // toggling? {item:[...item, complete:!item.complete]});

  // we are just setting state and updating the master list. 
  render(){return (
    <div className="todo">
      if(this.state.tasks.length>0){<Header />}
      
      <Form action={this.addTask}/>
      <List  action={this.toggleComplete} tasks={this.state.tasks} buttons={this.deleteTask}>
      </List>
    </div>
  );}
}

export default App;
