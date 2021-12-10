//import React, { Component } from "react";
import { Component } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(newTask) {
    const tasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: tasks,
    });
  }

  render() {
    return (
      <div className="task-container">
        <AddTask onAddTask={this.handleAddTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
