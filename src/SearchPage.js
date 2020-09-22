import { Grid, Button } from "@material-ui/core";
import React from "react";

import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

// const names = [
//   "John",
//   "Jack",
//   "Bob",
//   "Barney",
//   "Jane",
//   "Joe",
//   "Luck",
//   "Lucuciuus",
//   "Lora",
//   "Lorisa",
//   "Lisa",
//   "Magg",
//   "Maggey"
// ];

export class SearchPage extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      todos: [],
      results: [],
      query: "",
      showContent: true,
    };
  }

  async componentDidMount() {
    try {
      const request = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await request.json();

      this.setState({
        todos,
        results: todos,
      });
    } catch (e) {
      console.error(e);
    }
  }

  toggleContent = () => {
    this.setState({
      showContent: !this.state.showContent
    });
  };

  handleQueryChange = (query) => {
    const filteredTodos = this.state.todos.filter((todo) => {
      return todo.title.toLowerCase().search(query.toLowerCase()) !== -1;
    });

    this.setState({ results: filteredTodos });
  };

  handleItemClick = (item) => {
    console.log(item);

    const results = this.state.results.map(i => {
      if (i.id === item.id) {
        return {
          ...i,
          completed: !i.completed
        };
      }

      return i;
    });

    this.setState({
      results
    });
  }

  render() {
    return (
      <div>
        <SearchBar onChange={this.handleQueryChange} />
          {this.state.showContent && (
            <SearchResults results={this.state.results} onItemClick={this.handleItemClick}/>
        )}
        <Grid container justify="center" style={{ marginTop: 16}}>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={2}>
                <Button 
                  variant="outlined"
                  color="secondary" 
                  onClick={this.toggleContent}
                  fullWidth
                >
                  {this.state.showContent ? 'Hide': 'Show'}    
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}