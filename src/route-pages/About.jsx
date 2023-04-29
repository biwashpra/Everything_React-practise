import React, { useContext } from "react";
import { ChangeAbout } from "./ChangeAbout";
import { AppContext } from "../App";

export const About = () => {
  const { username, setUsername } = useContext(AppContext);
  return (
    <div>
      <h1>
        {/* This is About section and user is {props.username} */}
        This is About section and user is {username}
        {/* <ChangeAbout setUsername={props.setUsername} /> */}
        <ChangeAbout setUsername={setUsername} />
      </h1>
    </div>
  );
};
