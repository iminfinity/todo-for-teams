import React from "react";
import "./update-task.styles.scss";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedTask: props.task,
      modalDisplay: "none",
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
    const { updateTask, id } = this.props;
    const { updatedTask } = this.state;
    updateTask(id, updatedTask);
    this.setState({
      modalDisplay: "none",
    });
  };
  onClick = () => {
    this.state.modalDisplay === "none"
      ? this.setState({
          modalDisplay: "block",
        })
      : this.setState({
          modalDisplay: "none",
        });
  };
  render() {
    return (
      <>
        <button onClick={this.onClick}> &#9998;</button>
        <section
          style={{
            display: this.state.modalDisplay,
          }}
          className="update-task-modal"
        >
          <form onSubmit={this.onSubmit}>
            <textarea
              name="updatedTask"
              value={this.state.updatedTask}
              onChange={this.onChange}
              required
            />
            <input type="submit" value="&#10004;" />
          </form>
        </section>
      </>
    );
  }
}
export default Update;
