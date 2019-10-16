import React from 'react';
// import Button from './button.js';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: this.complete,
    };
  }


  onToggle = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id); 
    this.props.action(e.target);
  }

  deleter = (e) => {
    console.log('delete target info',e.target.name,e.target.id);

    console.log('before setstate', this.props.tasks);
    // must be setstate?
    this.props.buttons(e.target);

    console.log('after setstate', this.props.tasks);
  }

  render() {
    // do not forget className={`complete-${item.complete}`} that was a pain in the butt to figure out.
    return (
      <ul>
        {this.props.tasks.map((item, i) => {
          return <li className={`complete-${item.complete}`} key={i} id={i}><span id={item.id} onClick={this.onToggle} >{item.name}</span>
            <button name={item.name} onClick={this.deleter} id={item.id}>Delete</button>
          </li>
        })}
      </ul>
    )
  }
}

export default List;