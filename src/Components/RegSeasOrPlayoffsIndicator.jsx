import React from 'react';

const RegSeasOrPlayoffsIndicator = (props) => {
  const display = () => {
    if (props.dataIndicator === true) {
      return ("Playoffs");
    } else {
      return ("Regular Season");
    }
  };
  return (
    <React.Fragment>
      <h2>
        {display()}
      </h2>
    </React.Fragment>
  )
};

export default RegSeasOrPlayoffsIndicator;
