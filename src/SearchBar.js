import React from "react";

export class SearchBar extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      query: ""
    };
  }

  handleSubmit = () => {
    this.props.onChange(this.state.query);
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <button onClick={this.handleSubmit}>Find</button>
      </div>
    );
  }
}