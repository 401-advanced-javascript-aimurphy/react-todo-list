import React from 'react';


class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      count:props.count
    }
    };

  render(){
    return(
      <header><h1>There are {this.state.count} Items To Complete</h1></header>
    )
  }
}

export default Header;

