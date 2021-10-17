export const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        currentState: "Loading",
      };
    case "pollsFetched":
      const polls = action.polls.filter((poll) => poll.state !== "FINISHED");
      return {
        ...state,
        currentState: "PollAvailable",
        polls,
        currentPoll: polls[Math.floor(Math.random() * polls.length)],
        pollsLeft: polls.length,
      };
    case "pollSubmit":
      const pollsFilter = state.polls.filter((poll) => poll.id !== action.id);
      return {
        ...state,
        currentState: pollsFilter.length ? "PollAvailable" : "PollFinished",
        polls: pollsFilter,
        pollsLeft: pollsFilter.length,
        currentPoll:
          pollsFilter[Math.floor(Math.random() * pollsFilter.length)],
      };
    default:
      throw new Error();
  }
};
