import React, { useEffect, useReducer } from "react";
import * as Endpoints from "./constants";
import { fetcher } from "./utils";
import { reducer } from "./reducer";
import { PollView } from "./elements";

const initialState = {
  currentState: "Loading",
  polls: null,
  pollsLeft: 0,
  currentPoll: null,
};
export const PollApp = () => {
  const [{ currentState, pollsLeft, currentPoll }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetcher(
      Endpoints.POLLS,
      (data) =>
        dispatch({
          type: "pollsFetched",
          polls: data,
        }),
      (error) => alert(error)
    );
  }, []);

  const pollSubmit = (id, poll) => {
    if (currentState === "PollAvailable")
      fetcher(
        `${Endpoints.POLLS}/${id}`,
        () =>
          dispatch({
            type: "pollSubmit",
            id,
            poll,
          }),
        (error) => alert("Please Try Again  !" + error),
        "PUT",
        { votedFor: poll }
      );
  };

  const NoPollView = () => (
    <h2 className="head" data-test-name="no-polls">
      No Polls available
    </h2>
  );
  const PollsFinishedView = () => (
    <h2 className="head" data-test-name="polls-finished">
      You have finished all the polls
    </h2>
  );
  const LoadingView = () => (
    <div data-test-name="loader" className="loader"></div>
  );

  switch (currentState) {
    case "Loading":
      return <LoadingView />;
    case "PollAvailable":
      return (
        <PollView
          currentPoll={currentPoll}
          onClick={pollSubmit}
          pollsLeft={pollsLeft}
        />
      );
    case "PollFinished":
      return <PollsFinishedView />;
    default:
      return <NoPollView />;
  }
};
