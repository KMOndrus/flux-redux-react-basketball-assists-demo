import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from "@material-ui/core/TableRow";
import TableCell from '@material-ui/core/TableCell';

const tempData = [
  {
    "rank": 1,
    "player1": "100 ... 2018",
    "player2": "101 ... 2017",
  },
  {
    "rank": 2,
    "player1": "200 ... 2016",
    "player2": "201 ... 2016",
  },
  {
    "rank": 3,
    "player1": "300 ... 2015",
    "player2": "301 ... 2018",
  },
];

const PlayerComparisonRows = () => {
  return (
    <TableBody>
      {tempData.map(row => (
        <TableRow
          id={row.rank}
          key={row.rank}
        >
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
