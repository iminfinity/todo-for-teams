import React from "react";
import "./todo.styles.scss";
import axios from "axios";

import Task from "../task/task.component";
import AddTask from "../add-task/add-task.component";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.addNewTask();
  }
  componentDidUpdate() {
    this.addNewTask();
  }
  addNewTask() {
    axios
      .get("https://todo-for-teams.herokuapp.com/todo")
      .then((tasks) => {
        this.setState({
          tasks: tasks.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="todo">
        <div className="tasks">
          {tasks.map((task) => (
            <Task
              key={task._id}
              task={task.task}
              createdAt={task.createdAt}
              id={task._id}
            />
          ))}
        </div>
        <AddTask addNewTask={this.addNewTask.bind(this)} />
      </div>
    );
  }
}

export default Todo;
