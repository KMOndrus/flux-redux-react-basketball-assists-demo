import React from 'react';
import Button from '@material-ui/core/Button';

const SeasonTypeButton = (props) => {
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        onClick={(e) => props.toggleDataIndicator(e, props.buttonText)}
      >
        {props.buttonText}
      </Button>
    </React.Fragment>
  )
};

export default SeasonTypeButton;
