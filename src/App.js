//import React, { Component } from "react";
import { Component } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [111, 111, 1223] };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask() {}

  render() {
    return (
      <div className="task-container">
        <AddTask />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
