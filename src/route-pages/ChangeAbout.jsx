import React, { useState, useContext } from "react";
import { AppContext } from "../App";

export const ChangeAbout = (props) => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setnewUsername] = useState("");
  return (
    <div>
      <h1>Change About page</h1>
      <input
        type="text"
        onChange={(e) => {
          setnewUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // props.setUsername(newUsername);
          setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
