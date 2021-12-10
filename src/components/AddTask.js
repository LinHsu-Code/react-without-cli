//import React from "react";
const AddTask = (props) => {
  const handleTaskInputChange = (e) => {
    props.onTaskInputChange(e);
  };
  const handleAddTask = (e) => {
    props.onAddTask(e);
  };
  return (
    <div className="add-task-wrapper">
      <input
        id="task"
        name="task"
        type="text"
        placeholder="new task"
        value={props.inputText}
        onChange={handleTaskInputChange}
      />
      <button type="submit" onClick={handleAddTask}>
        Submit
      </button>
    </div>
  );
};
export default AddTask;
// import { Component } from "react";
// class AddTask extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { inputTest: "" };
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleAddTask = this.handleAddTask.bind(this);
//   }
//   handleInputChange(e) {
//     this.setState({ inputTest: e.target.value });
//   }
//   handleAddTask(newTask) {
//     this.props.onAddTask(newTask);
//     this.setState({ inputTest: "" });
//   }

//   render() {
//     return (
//       <div className="add-task-wrapper">
//         <input
//           id="task"
//           name="task"
//           type="text"
//           placeholder="new task"
//           value={this.state.inputTest}
//           onChange={(e) => this.handleInputChange(e)}
//         />
//         <button
//           type="submit"
//           onClick={(e) => this.handleAddTask(this.state.inputTest, e)}
//         >
//           Submit
//         </button>
//       </div>
//     );
//   }
// }
// export default AddTask;
