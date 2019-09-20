import React from 'react';
class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      item:{}
    };
  }

  onInput=(element)=>{
    this.setState({ [element.target.name]: element.target.value});
    console.log(this.state);
  }

  onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.item);
        e.target.reset();
        this.props.action(this.state.item);
        // this.setState({ title: "" });
  }


  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <input name="item" type="text" placeholder="create a new task" defaultValue="" onChange={this.onInput}></input>

        <button type="submit"
          value="Submit">add task</button>
      </form>
    )}
}



export default Form;



// import React from 'react';
// let state=[
//   {id:1, task:'house', complete: false},
//   {id:2, task:'yard', complete: false}, 
// ];
// class Form extends React.Component {
  

//   toggleitem=(e, actualID)=>{
//     e.preventDefault();

//     let newTodos=state.map(item=>item.id!== actualID ? item:{...item, complete:!item.complete});
//     state.setState({ [e.target.name]: e.target.value });

//   }
//   onChange = e => this.setState({ [e.target.name]: e.target.value });

//   onSubmit = e => {
//     e.preventDefault();
//     this.props.addTask(this.state.title);
//     this.setState({ title: "" });

//   let getTodos=()=>{
//     return state.map((item,i)=>{return <li key={i} onClick={toggleitem}>{item.task}</li>})
//   }

//   return (<>
//   <h1> hi </h1>
//   <form onSubmit={this.onSubmit}>
//       <input
//           type="text"
//           name="title"
//           placeholder="Create new task"
//           // defaultValue={this.state.title}
//           onChange={this.onChange}
//         />
//         <input
//           type="submit"
//           value="Submit"
//         />
//       </form>

//   <ul>
//     {
//       state.map((item,i)=>{
//         // when you iterate you need an id, key is that @720ish
//         return <li key={i} onClick={toggleitem}>{item.task} - {item.complete.toString()}</li>
//       })
//     }
//   </ul>
//   </>
//   )
// }
//   }



