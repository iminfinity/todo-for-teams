import React from "react";
import "./delete-task.styles.scss";

class Delete extends React.Component {
  render() {
    const { id } = this.props;
    return <button onClick={() => this.props.deleteTask(id)}>&#10004;</button>;
  }
}
export default Delete;
