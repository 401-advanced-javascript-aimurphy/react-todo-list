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
      count:0
    }
   
  addTask=(newItem)=>{
    console.log('form data is,', newItem);
    let add={
      name: newItem.name,
      id: Math.random().toString(),
      complete: newItem.complete,
    };

    this.setState({tasks: [...this.state.tasks, add]});

    this.setState({count:this.state.count + 1});
  }

  deleteTask=(delItem)=>{
    let itemName = delItem.id;

    let tasklist = this.state.tasks.filter((item) => item.id !== itemName);

    this.setState({tasks: tasklist});

    this.setState({count:this.state.count - 1});

  }

  toggleComplete=(toggled)=>{
    console.log('in toggler',toggled);

    let tog = toggled.id;
    console.log('tog id',tog);//what id i am dealing with

    // arr with only the toggled item
    // let status = this.state.tasks.filter((item) => item.id === tog);
    // console.log('filter for toggled',status[0].complete);
    // updating complete status of item
    // status[0].complete=!status[0].complete;
    // console.log('change to complete?',status);

    // arr of tasks to exclude the item we updated
    // let tasklist = this.state.tasks.filter((item) => item.id !== tog);
    // console.log(tasklist, 'is task list');

    // tasklist.push(status[0]);

    // map arr if true stay same, if false change status of complete
    let updated = this.state.tasks.map(item=>item.id!== tog ? item : {...item, complete:!item.complete});

    console.log(updated);
    // updating the tasks sans toggled
    this.setState({tasks:updated});



  }
  // toggling? {item:[...item, complete:!item.complete]});

  // we are just setting state and updating the master list. 
  render(){return (
    <div className="todo">
      <Header count={this.state.count}/>
      
      <Form action={this.addTask}/>
      <List  action={this.toggleComplete} tasks={this.state.tasks} buttons={this.deleteTask}>
      </List>
    </div>
  );}
}

export default App;
