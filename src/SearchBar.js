import React from "react";

import {Button, TextField, Grid} from "@material-ui/core";


export class SearchBar extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      query: "",
      showContent: true
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
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <TextField 
            id="standard-basic" 
            color="secondary" 
            label="Search" 
            value={this.state.query}
            onChange={this.handleChange}
            fullWidth
          />
      </Grid>
        <Grid xs={2}>
          <Button 
              variant="outlined"
              color="secondary" 
              onClick={this.handleSubmit}
              fullWidth
          >
            Find
          </Button>
        </Grid>
      </Grid>
    );
  }
}
