import React from "react";

export class SearchResults extends React.PureComponent {
  constructor(props) {
    super();
  }
  render() {
    return (
      <ul>
        {this.props.results.map((item) => {
          return <Item key={item} name={item} />;
        })}
      </ul>
    );
  }
}

class Item extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}