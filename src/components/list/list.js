import React from 'react';
import Button from './button.js';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
      item:{}
    };
  }
  onToggle = (e) => {
    e.preventDefault();
    console.log('toggle info',e.target.value);
    // this.setState({ [e.target.name]: e.target.value});

    // console.log('delete item',this.state.item);
    this.props.action(e.target.value);
    // console.log('state in delete',this.state);
    
}


deleteTask=(realID)=>{
  // actualID=this.state.tasks;
  console.log('delete task id',realID);
  console.log(this.props.tasks);
  let tasklist = this.props.tasks.filter(item=>item.id !== item.realID);
  this.setState({tasks: tasklist});
  console.log('tasklist', this.props.tasks);  
  // return tasklist;
}
// onSubmit = (e) => {
//   e.preventDefault();
//   console.log('delete target info',e.target.name,e.target.value);
//   // this.setState({ [e.target.name]: e.target.value});

//   // console.log('delete item',this.state.item);
//   this.props.action(e.target.value);
//   // console.log('state in delete',this.state);
// }

  render() {
    return (
      <ul>
        {this.props.tasks.map((item, i) => {
          return <li key={i}><p value={item.id} onClick={this.onToggle}>{item.name}</p>   <Button id={item.id} action={this.deleteTask}/>
          </li>
        })}
      </ul>
    )
  }
}

export default List;