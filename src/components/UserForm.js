import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      summary: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onUserAdd(this.state);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="UserFormInput">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.onFieldChange}
          />
        </div>
        <div className="UserFormInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFieldChange}
          />
        </div>
        <div className="UserFormInput">
          <label htmlFor="summary">Summary</label>
          <input
            type="text"
            name="summary"
            value={this.state.summary}
            onChange={this.onFieldChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UserForm;
