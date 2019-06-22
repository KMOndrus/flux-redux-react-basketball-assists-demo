import React from 'react';
import PlayerComparisonHeader from "./PlayerComparisonHeader";
import PlayerComparisonRows from "./PlayerComparisonRows";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';

const PlayerComparisonList = () => {
  return (
    <Paper className="Table">
      <Table>
        <PlayerComparisonHeader />
        <PlayerComparisonRows />
      </Table>
    </Paper>
  )
};

export default PlayerComparisonList;
