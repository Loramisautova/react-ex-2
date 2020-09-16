import React from "react";

import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

const names = [
  "John",
  "Jack",
  "Bob",
  "Barney",
  "Jane",
  "Joe",
  "Luck",
  "Lucuciuus",
  "Lora",
  "Lorisa",
  "Lisa",
  "Magg",
  "Maggey"
];

export class SearchPage extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      results: [],
      query: ""
    };
  }

  componentDidMount() {
    this.setState({
      results: names,
      showContent: true
    });
  }

  toggleContent = () => {
    this.setState({
      showContent: !this.state.showContent
    });
  };

  handleQueryChange = (query) => {
    let filteredQuery = names;

    filteredQuery = filteredQuery.filter((name) => {
      return name.toLowerCase().search(query.toLowerCase()) !== -1;
    });

    this.setState({ results: filteredQuery });
  };

  render() {
    return (
      <div>
        <SearchBar onChange={this.handleQueryChange} />
        {this.state.showContent && (
          <SearchResults results={this.state.results} />
        )}
        <button onClick={this.toggleContent}>
          Click
        </button>
      </div>
    );
  }
}