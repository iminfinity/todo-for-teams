import React from "react";
import "./add-task.styles.scss";
import axios from "axios";

class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const { task } = event.target;
    axios
      .post("http://localhost:5000/todo/add", { task: task.value })
      .then(() => console.log("New Task Added"))
      .catch((error) => console.log("Error: " + error));

    this.props.addNewTask();
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <div className="add-task">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.onChange}
          />
          <input type="submit" value="&#10010;" />
        </form>
      </div>
    );
  }
}

export default AddTask;
