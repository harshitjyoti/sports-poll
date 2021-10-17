import React from "react";
import { Button } from "./Button";
import * as Icons from "../static";
export const PollView = ({ currentPoll, onClick, pollsLeft }) => {
  const { name, group, state, country, awayName, homeName, sport, id } =
    currentPoll;
  const sportIcon = Icons[sport.toLowerCase()] && (
    <img src={Icons[sport.toLowerCase()].default} />
  );
  const countryIcon = Icons[country.toLowerCase()] && (
    <img src={Icons[country.toLowerCase()].default} />
  );

  return (
    <div className="container">
      <div className="row">
        <div className="column"><h3 data-test-name="polls-left">Polls available: {pollsLeft}</h3></div>
        <div className={`column ${state.toLowerCase()}`}><h3 data-test-name="status">{state}</h3></div>
      </div>
      <div className="head">
        <h2>To which team you want to poll for ?</h2>
      </div>
      <div className="row">
        <div className="column">
          <h2 data-test-name="sport">{sport}</h2>
          <hr />
          <div>
            {sportIcon} {countryIcon}
          </div>
          <h3 data-test-name="group-country">
            {group} , {country}
          </h3>
          <h4 data-test-name="name">{name}</h4>
          <hr />
        </div>
        <div className="column">
          <Button
            id={id}
            awayName={awayName}
            homeName={homeName}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};
