import React from "react";

export class SearchResults extends React.PureComponent {
  constructor(props) {
    super();
  }
  render() {
    return (
      <ul>
        {this.props.results.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    );
  }
}

class Item extends React.Component {
  render() {
    return this.props.item ? <li>{this.props.item.id} {this.props.item.title}</li> : 'N/A';
  }
}