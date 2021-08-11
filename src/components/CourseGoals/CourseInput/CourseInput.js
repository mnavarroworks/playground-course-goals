import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    const valid = event.target.value.trim().length > 0;
    console.log("v: ", event.target.value);
    setIsValid(valid);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: isValid ? "black" : "1px solid red",
            background: isValid ? "transparent" : "salmon",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
