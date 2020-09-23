import React from "react";

import {ListItem, ListItemIcon, Checkbox, ListItemText, List} from "@material-ui/core";


export class SearchResults extends React.PureComponent {
  constructor(props) {
    super();
  }
  
  render() {
    return (
        <div>
          <List>
            {this.props.results.map((item) => {
              return <Item key={item.id} item={item} onClick={() => this.props.onItemClick(item)}/>;
            })}
          </List>
          </div>
    );
  }
}

class Item extends React.PureComponent {
  render() {
    return this.props.item 
    ? (
        <ListItem dense button onClick={this.props.onClick}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={this.props.item.completed}
                  color="secondary"
                  disableRipple
                  fullWidth
                />
              </ListItemIcon>
              <ListItemText primary={`${this.props.item.id} ${this.props.item.title}`} />
        </ListItem>
    ) 
    : 'N/A'
  }
}