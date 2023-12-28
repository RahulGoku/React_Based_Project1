import "bootstrap/dist/css/bootstrap.min.css";
import TodoItem from "./components/TodoItem";
import TodoItem1 from "./components/TodoItem1";
import { useState } from "react";

function App() {
  const todoItems = [
    // {
    //   name: "Milk",
    //   dueDate: "25/12/2023",
    // },
    // {
    //   name: "fruit",
    //   dueDate: "05/12/2023",
    // },
  ];

  const [todoItem, setTodoItem] = useState(todoItems);
  const addNewItem = (item, date) => {
    if (item && date) {
      const newTodoitem = [...todoItem, { name: item, dueDate: date }];
      setTodoItem(newTodoitem);
    }
  };

  const handleDeleteItem = (itemName) => {
    const newTodoItemR = todoItem.filter((item) => item.name !== itemName);
    setTodoItem(newTodoItemR);
  };
  return (
    <>
      <center>Todo App</center>

      <TodoItem addNewItem={addNewItem}></TodoItem>
      <TodoItem1 todoItems={todoItem} onDelete={handleDeleteItem}></TodoItem1>
    </>
  );
}

export default App;
