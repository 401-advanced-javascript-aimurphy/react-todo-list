import React from 'react';
import Header from './header/header.js'
import Form from './form/form.js';
import List from './list/list.js';
// import Button from './list/button.js';
import '../design/App.css';
import Button from './list/button.js';

class App extends React.Component{
  state={
      tasks:[],
      item:{},
    }

   
  addTask=(item)=>{
    // console.log('form data is,', formData);
    // let item = formData;
    const newItem = {
      name: item,
      id: Math.random(),
      complete: false,
    };

    this.setState({item: newItem});
    console.log(newItem);
    this.setState({tasks: [...this.state.tasks, newItem]});
    console.log('addtsk', this.state.tasks, this.state.item);
  }

  deleteTask=(tasklist)=>{
    // actualID=this.state.tasks;
    console.log('delete from button',tasklist);
    // console.log(this.state.tasks);
    // let tasklist = this.state.tasks.filter(item=>item.id!== realID);
    this.setState({tasks: tasklist});
    // console.log('tasklist', this.state.tasks);  
    // return tasklist;

  }

  toggleComplete=(key)=>{
    // actualID=this.state.tasks;
    console.log('toggle task id',key);
    console.log(this.state.tasks[key]);
    // let tasklist = this.state.tasks.map(item=>item.id === item.realID);
    let toggledItem=this.state.tasks[key];
    let notToggle=!this.state.tasks[key].complete;
    console.log('notoggs',notToggle);
    // let completed = this.state.tasks.filter(item=>item.id===realID);
    this.setState({item:toggledItem});
    console.log('TGI', this.state.item);
    this.setState({...this.state.item, complete:notToggle});
    // return tasklist;
  }
  // toggling? {item:[...item, complete:!item.complete]});

  // we are just setting state and updating the master list. 
  render(){return (
    <div className="App">
      <Header />
      <Form action={this.addTask}/>
      <List action={this.toggleComplete} tasks={this.state.tasks} buttons={this.deleteTask}>
      </List>
    </div>
  );}
}

export default App;
