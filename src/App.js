//import React, { Component } from "react";
import { Component } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], task: "" };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
  }

  handleTaskInputChange(newTask) {
    this.setState({ task: newTask });
  }

  handleAddTask() {
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: "",
    });
  }

  render() {
    return (
      <div className="task-container">
        <AddTask
          onTaskInputChange={this.handleTaskInputChange}
          onAddTask={this.handleAddTask}
          inputText={this.state.task}
        />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
