import React, { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      {/* <h1>This is Home Page and user is {props.username}</h1> */}
      <h1>This is Home Page and user is {username}</h1>
    </div>
  );
};
