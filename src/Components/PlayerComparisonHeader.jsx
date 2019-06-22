import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const PlayerComparisonHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          Player's Top Three Seasons for Assists
        </TableCell>
        <TableCell>
          Player 1
        </TableCell>
        <TableCell>
          Player 2
        </TableCell>
      </TableRow>
    </TableHead>
  )
};

export default PlayerComparisonHeader;
