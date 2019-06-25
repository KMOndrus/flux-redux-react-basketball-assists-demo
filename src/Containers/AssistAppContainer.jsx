import React from 'react';
import RegSeasOrPlayoffsIndicator from "../Components/RegSeasOrPlayoffsIndicator";
import PageHeader from "../Components/PageHeader";
import PlayerComparisonList from "../Components/PlayerComparisonList";
import Grid from '@material-ui/core/Grid';
import '../styles/App.css';
import SeasonTypeButton from "../Components/SeasonTypeButton";

class AssistAppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataIndicator: "Regular Season",
    };

    this.toggleDataIndicator = this.toggleDataIndicator.bind(this);
  }

  toggleDataIndicator = (e) => {
    console.log(e.currentTarget.id);
    this.setState({
      dataIndicator: !this.state.dataIndicator,
    });
  };

  render(){
    return (
      <React.Fragment>
        <Grid container justify='space-between'>
          <Grid item xs={4}>
            <PageHeader />
          </Grid>
          <Grid item xs={4}>
            <RegSeasOrPlayoffsIndicator
              dataIndicator={this.state.dataIndicator}
            />
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <PlayerComparisonList />
        </Grid>
        <Grid container justify='center'>
          <Grid item xs={4}>
            <SeasonTypeButton
              id="regSeason-button"
              buttonText="Regular Season"
              toggleDataIndicator={this.toggleDataIndicator}
            />
          </Grid>
          <Grid item xs={4}>
            <SeasonTypeButton
              id="playoffs-button"
              buttonText="Playoffs"
              toggleDataIndicator={this.toggleDataIndicator}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
};

export default AssistAppContainer;
