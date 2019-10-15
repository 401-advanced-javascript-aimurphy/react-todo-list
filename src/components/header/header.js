import React from 'react';


class Header extends React.Component{
  constructor(props) {
    super(props);
    };

  render(){
    return(
      <header><h1>There are {this.props.count} Items To Complete</h1></header>
    )
  }
}

export default Header;

