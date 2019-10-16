import React from 'react';
import Header from './header/header.js'
import Form from './form/form.js';
import List from './list/list.js';
// import Button from './list/button.js';
import '../design/todo.css';
import Button from './list/button.js';

class App extends React.Component{
  state={
      tasks:[],
      item:{},
      count:''
    }

   
  addTask=(item)=>{
    console.log('form data is,', item);
    // let item = formData;
    const newItem = {
      name: item,
      id: Math.random().toString(),
      complete: false,
    };

    this.setState({item: newItem});
    console.log(newItem);
    this.setState({tasks: [...this.state.tasks, newItem]});
    console.log('addtsk', this.state.tasks, this.state.item);
  }

  deleteTask=(delItem)=>{
    let itemName = delItem.id;
    // actualID=this.state.tasks;
    console.log('delete from button',delItem);
    console.log(this.state.tasks);
    let tasklist = this.state.tasks.filter((item) => item.id !== itemName);
    console.log(tasklist, 'is task list');
    this.setState({tasks: tasklist});
    // console.log('tasklist', this.state.tasks);  
    // return tasklist;

  }

  toggleComplete=(toggled)=>{
    console.log('in toggler',toggled);

    let tog = toggled.id;
    console.log('tog id',tog);

    let status = this.state.tasks.filter((item) => item.id === tog);
    console.log(status[0].complete);
    status[0].complete=!status[0].complete;
    console.log(status);

    let tasklist = this.state.tasks.filter((item) => item.id !== tog);
    console.log(tasklist, 'is task list');
    this.setState({tasks: tasklist});

    // this.setState({item: status[0]});

    this.setState({tasks: [...this.state.tasks, status[0]]});


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
