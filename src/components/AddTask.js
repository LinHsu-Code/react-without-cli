//import React from "react";
const AddTask = (props) => {
  return (
    <div className="add-task-wrapper">
      <input id="task" name="task" type="text" placeholder="new task" />
      <button type="submit">Submit</button>
    </div>
  );
};
export default AddTask;
