const Types = {
  SELECT_REG_SEASON: "SELECT_REG_SEASON",
  SELECT_PLAYOFFS: "SELECT_PLAYOFFS",
};

const selectRegSeason = situation => ({
  type: Types.SELECT_REG_SEASON,
  payload: situation.dateTime,
});

const selectPlayoffs = situation => ({
  type: Types.SELECT_PLAYOFFS,
  payload: situation.dateTime,
});

export default {
  selectRegSeason,
  selectPlayoffs,
  Types,
};

