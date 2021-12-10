//import React from "react";
const TaskList = (props) => {
  return (
    <div className="task-list-wrapper">
      <ul>
        All task:
        {props.tasks.map((item, index) => (
          <li key={`${item}${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
