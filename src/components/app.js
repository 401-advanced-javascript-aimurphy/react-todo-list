import React from 'react';
import Header from './header/header.js'
import Form from './form/form.js';
import List from './list/list.js';
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

  deleteTask=(actualID)=>{
    console.log('delete task id',actualID);
    let tasklist = this.state.tasks.map(item=>item.id!== actualID ? item:{...item, complete:!item.complete});
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
