"use client";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import TodoList from "@/components/TodoList";
import todoListData from "../mock/todo.json";
import TodoCard from "@/components/TodoCard";

type TodoType = "Vegetable" | "Fruit";

type Todo = {
  type: TodoType;
  name: string;
};

const Home = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [vegetableList, setVegetableList] = useState<Todo[]>([]);
  const [fruitList, setFruitList] = useState<Todo[]>([]);

  useEffect(() => {
    const data: Todo[] = todoListData as Todo[];
    setTodoList(data);
  }, []);

  const moveTo = (fromIndex: number, type: TodoType) => {
    const itemToMove = todoList[fromIndex];
    const updatedTodoList = todoList.filter((_, index) => index !== fromIndex);
    setTodoList(updatedTodoList);

    if (type === "Fruit") {
      setFruitList((prev) => [...prev, itemToMove]);
    } else {
      setVegetableList((prev) => [...prev, itemToMove]);
    }

    setTimeout(() => {
      moveBack(itemToMove, type);
    }, 5000);
  };

  const moveBack = (itemToMove: Todo, type: TodoType) => {
    if (type === "Fruit") {
      setFruitList((prev) => prev.filter((item) => item !== itemToMove));
    } else {
      setVegetableList((prev) => prev.filter((item) => item !== itemToMove));
    }

    setTodoList((prev) => Array.from(new Set([...prev, itemToMove])));
  };

  return (
    <Stack direction="row" spacing={2} sx={{ padding: 2, height: "100vh" }}>
      <TodoList>
        {todoList.map((item, index) => (
          <TodoCard
            key={`${item.name}-${index}`}
            text={item.name}
            onClick={() => moveTo(index, item.type)}
          />
        ))}
      </TodoList>

      <TodoList groupName="Fruit">
        {fruitList.map((item, index) => (
          <TodoCard
            key={`${item.name}-${index}`}
            text={item.name}
            onClick={() => moveBack(item, "Fruit")}
          />
        ))}
      </TodoList>

      <TodoList groupName="Vegetable">
        {vegetableList.map((item, index) => (
          <TodoCard
            key={`${item.name}-${index}`}
            text={item.name}
            onClick={() => moveBack(item, "Vegetable")}
          />
        ))}
      </TodoList>
    </Stack>
  );
};

export default Home;
