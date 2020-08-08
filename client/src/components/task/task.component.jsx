import React from "react";
import "./task.styles.scss";
import Delete from "../delete-task/delete-task.component";
import axios from "axios";
import Update from "../update-task/update-task.component";

class Task extends React.Component {
  splitDate(createdAt) {
    const dot = createdAt.split(".");
    const T = dot[0].split("T");
    const finaLString = "added at " + T[1] + " on " + T[0];
    return finaLString;
  }
  deleteTask(id) {
    axios
      .delete(`https://todo-for-teams.herokuapp.com/todo/delete/${id}`)
      .then(() => console.log("Task Deleted"))
      .catch((error) => console.log(error));
  }
  updateTask(id, task) {
    axios
      .post(`https://todo-for-teams.herokuapp.com/todo/update/${id}`, { task })
      .then(() => console.log("Task Updated"))
      .catch((error) => console.log(error));
  }
  render() {
    const { task, createdAt, id } = this.props;
    return (
      <div className="task">
        <div className="task-header">
          <p>{task}</p>
          <p>{this.splitDate(createdAt)}</p>
        </div>
        <div className="buttons">
          <Update task={task} id={id} updateTask={this.updateTask.bind(this)} />
          <Delete id={id} deleteTask={this.deleteTask.bind(this)} />
        </div>
      </div>
    );
  }
}
export default Task;
