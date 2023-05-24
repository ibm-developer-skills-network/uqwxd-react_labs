import React from "react";
import { useDispatch } from "react-redux";
import increment from "../action";

const MyButton = () => {
  let dispatch = useDispatch();

  const onClick = () => {
    dispatch(increment(1));
  };

  return <button onClick={onClick}>Increase counter</button>;
};

export default MyButton;
