import React from 'react';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
      item:{}
    };
  }

  onSubmit = (e) => {
        e.preventDefault();
        console.log('delete target info',e.target.keyid);
        this.setState({ [e.target.name]: e.target.value});
        console.log('state in delete',this.state);
        console.log('delete item',this.state.item);
        this.props.action(this.state.item);
        
        
  }


  render() {
    return (
      <ul>
        {this.props.tasks.map((item, i) => {
          return <li key={i}>{item.name}
            <button keyid={item.name} value={i} onClick={this.onSubmit}>Delete</button>
          </li>
        })}
      </ul>
    )
  }
}

export default List;