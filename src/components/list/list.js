import React from 'react';

class List extends React.Component {


  render() {
    return (
      <ul>
        {this.props.tasks.map((item, i) => {
          return <li key={i}>{item.name}
            <button>Delete</button>
          </li>
        })}
      </ul>
    )
  }
}

export default List;