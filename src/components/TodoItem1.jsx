import TodoItem2 from "./TodoItem2";

function TodoItem1({ todoItems, onDelete }) {
  return (
    <>
      <div className={`container text-center`}>
        <div className={`row`}>
          {todoItems.map((item) => (
            <TodoItem2
              key={item.name}
              todoName={item.name}
              todoDate={item.dueDate}
              onDelete={onDelete}
            ></TodoItem2>
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoItem1;
