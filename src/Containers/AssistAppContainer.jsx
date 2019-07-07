import React from 'react';
import RegSeasOrPlayoffsIndicator from "../Components/RegSeasOrPlayoffsIndicator";
import PageHeader from "../Components/PageHeader";
import PlayerComparisonList from "../Components/PlayerComparisonList";
import Grid from '@material-ui/core/Grid';
import '../styles/App.css';
import SeasonTypeButton from "../Components/SeasonTypeButton";
import { connect } from "react-redux";
import ACTIONS from '../modules/action';

class AssistAppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataIndicator: "Regular Season",
      data: {},
    };

    this.toggleDataIndicator = this.toggleDataIndicator.bind(this);
  }

  toggleDataIndicator = (e, seasonType) => {
    this.setState({
      dataIndicator: seasonType,
    });
    if (seasonType === "Regular Season"){
      this.props.selectRegSeason();
    }
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

const mapStateToProps = state => ({
  dataIndicator: state.dataIndicator,
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  selectRegSeason: situation => dispatch(ACTIONS.selectRegSeason(situation)),
  selectPlayoffs: situation => dispatch(ACTIONS.selectPlayoffs(situation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AssistAppContainer);
