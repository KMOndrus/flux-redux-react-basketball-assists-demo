import React from 'react';
import RegSeasOrPlayoffsIndicator from "../Components/RegSeasOrPlayoffsIndicator";
import PageHeader from "../Components/PageHeader";
import PlayerComparisonList from "../Components/PlayerComparisonList";
import RegSeasButton from "../Components/RegSeasButton";
import PlayoffButton from "../Components/PlayoffButton";

const AssistAppContainer = () => {
  return (
    <React.Fragment>
      <h1>
        This is the AssistAppContainer
      </h1>
      <PageHeader />
      <RegSeasOrPlayoffsIndicator />
      <PlayerComparisonList />
      <RegSeasButton />
      <PlayoffButton />
    </React.Fragment>
  )
};

export default AssistAppContainer;
