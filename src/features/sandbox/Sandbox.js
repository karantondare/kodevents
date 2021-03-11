import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);

  const data = useSelector((state) => state.test.data);

  const { loading } = useSelector((state) => state.async);

  return (
    <>
      <h1>testing 123</h1>
      <h3>the data is: {data}</h3>
      <Button
        name="increment"
        onClick={(e) => {
          dispatch(increment(10));
          setTarget(e.target.name);
        }}
        content="Increment"
        color="green"
        loading={loading && target === "increment"}
      />
      <Button
        name="decrement"
        onClick={(e) => {
          dispatch(decrement(10));
          setTarget(e.target.name);
        }}
        content="Decrement"
        color="red"
        loading={loading && target === "decrement"}
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        content="Open Modal"
        color="teal"
      />
    </>
  );
}
