import React from "react";

class DeleteUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      name: props.name,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onAddCancel = this.onAddCancel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onUserDelete(this.state);
  }

  onAddCancel(event) {
    this.props.onCancel();
  }
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Edit User</h1>
          </div>
          <br />
          <p>
            <form onSubmit={this.handleSubmit}>
              <div className="alert alert-danger">
                Are you sure you want to delete {this.state.name}? {"   "}
              </div>
              <button type="submit" className="btn btn-danger">
                Submit
              </button>{" "}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.onAddCancel}>
                Cancel
              </button>
            </form>
          </p>
        </div>
      </div>
    );
  }
}

export default DeleteUserForm;
