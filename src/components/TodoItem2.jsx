import styles from "./TodoItem2.module.css";
function TodoItem2({ todoName, todoDate, onDelete }) {
  return (
    <>
      <div className={`container text-center`}>
        <div className={`${styles.rowcss} row`}>
          <div className={`col-6`}>{todoName}</div>
          <div className={`col-4`}>{todoDate}</div>
          <div className={`col-2`}>
            <button
              type="button"
              className={`btn btn-danger`}
              onClick={() => onDelete(todoName)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem2;
