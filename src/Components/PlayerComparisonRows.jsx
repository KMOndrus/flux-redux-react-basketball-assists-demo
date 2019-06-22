import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from "@material-ui/core/TableRow";
import TableCell from '@material-ui/core/TableCell';

const tempData = [
  {
    "rank": 1,
    "player1": 100,
    "player2": 101,
  },
  {
    "rank": 2,
    "player1": 200,
    "player2": 201,
  },
  {
    "rank": 3,
    "player1": 300,
    "player2": 301,
  },
];

const PlayerComparisonRows = () => {
  return (
    <TableBody>
      {tempData.map(row => (
        <TableRow>
          <TableCell>
            {row.rank}
          </TableCell>
          <TableCell>
            {row.player1}
          </TableCell>
          <TableCell>
            {row.player2}
          </TableCell>
        </TableRow>
        )
      )}

    </TableBody>
  )
};

export default PlayerComparisonRows;
