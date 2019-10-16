import React from 'react';


class Button extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[],
      item:{},
    }
  }

 

    


render(){
  return(
    <button name="item" onClick={this.onSubmit}>Delete</button>
  )
}

}

export default Button;