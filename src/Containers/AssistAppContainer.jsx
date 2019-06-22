import React from 'react';
import RegSeasOrPlayoffsIndicator from "../Components/RegSeasOrPlayoffsIndicator";
import PageHeader from "../Components/PageHeader";
import PlayerComparisonList from "../Components/PlayerComparisonList";
import Grid from '@material-ui/core/Grid';
import '../styles/App.css';
import SeasonTypeButton from "../Components/SeasonTypeButton";

const AssistAppContainer = () => {
  return (
    <React.Fragment>
      <Grid container justify='space-between'>
        <Grid item xs="4">
          <PageHeader />
        </Grid>
        <Grid item xs="4">
          <RegSeasOrPlayoffsIndicator />
        </Grid>
      </Grid>
      <PlayerComparisonList />
      <Grid container justify='center'>
        <Grid item xs="3">
          <SeasonTypeButton
            buttonText="Regular Season"
          />
        </Grid>
        <Grid item xs="3">
          <SeasonTypeButton
            buttonText="Playoffs"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default AssistAppContainer;
