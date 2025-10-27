import React, { useState, useRef } from "react";
import { Plus, Trash2, Check } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { Task } from "@/types";

const HomePage: React.FC = () => {
  const { tasks, setTasks, theme } = useApp();
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = () => {
    if (!text.trim()) return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const toggleComplete = (id: string) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const deleteTask = (id: string) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <div style={{ paddingBottom: "80px" }}>
      <h2>Task List</h2>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
          style={{ flex: 1 }}
        />
        <button onClick={addTask}>
          <Plus />
        </button>
      </div>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <button onClick={() => toggleComplete(t.id)}>
              <Check color={t.completed ? "green" : theme.textSecondary} />
            </button>
            <span
              style={{ textDecoration: t.completed ? "line-through" : "none" }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(t.id)}>
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
