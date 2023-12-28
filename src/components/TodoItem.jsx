import { useState } from "react";
import styles from "./TodoItem.module.css";

function TodoItem({ addNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleNameChange = () => {
    setTodoName(event.target.value);
  };
  const handleDateChange = () => {
    setTodoDate(event.target.value);
  };

  const handleButtonClick = () => {
    addNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <>
      <div className={`container text-center`}>
        <div className={`row`}>
          <div className={`col-6`}>
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className={`col-4`}>
            <input type="date" value={todoDate} onChange={handleDateChange} />
          </div>
          <div className={`col-2`}>
            <button
              type="button"
              onClick={handleButtonClick}
              className={`${styles.button} btn btn-success`}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
