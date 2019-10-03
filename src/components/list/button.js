import React from 'react';


class Button extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[],
      item:{},
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state, 'in button');
    console.log('delete target info',e.target.name,this.props.id);
    // this.setState({ [e.target.name]: e.target.value});
  
    // console.log('delete item',this.state.item);
    this.props.action(this.props.id);
    // console.log('state in delete',this.state);
  }

    


render(){
  return(
    <button name="item" onClick={this.onSubmit}>Delete</button>
  )
}

}

export default Button;