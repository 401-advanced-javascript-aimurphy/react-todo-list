import React from 'react';
import Header from './header/header.js'
import Form from './form/form.js';
import List from './list/list.js';
// import Button from './list/button.js';
import '../design/App.css';

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

  deleteTask=(realID)=>{
    // actualID=this.state.tasks;
    console.log('delete task id',realID);
    console.log(this.state.tasks);
    let tasklist = this.state.tasks.filter(item=>item.id!== realID);
    this.setState({tasks: tasklist});
    console.log('tasklist', this.state.tasks);  
    // return tasklist;
  }

  toggleComplete=(realID)=>{
    // actualID=this.state.tasks;
    console.log('toggle task id',realID);
    console.log(this.state.tasks);
    let tasklist = this.state.tasks.filter(item=>item.id!== realID);
    this.setState({tasks: tasklist});
    console.log('tasklist', this.state.tasks);  
    // return tasklist;
  }
  // toggling? {item:[...item, complete:!item.complete}]);

  // we are just setting state and updating the master list. 
  render(){return (
    <div className="App">
      <Header />
      <Form action={this.addTask}/>
      <List action={this.toggleComplete} tasks={this.state.tasks}>
      </List>
    </div>
  );}
}

export default App;
