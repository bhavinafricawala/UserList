import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.maxId,
      name: "",
      email: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onAddCancel = this.onAddCancel.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onUserAdd(this.state);
  }

  onAddCancel(event) {
    this.props.onCancel();
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              name="id"
              className="form-control"
              disabled
              value={this.state.id}
              onChange={this.onFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={this.state.summary}
              onChange={this.onFieldChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>{" "}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.onAddCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default UserForm;
