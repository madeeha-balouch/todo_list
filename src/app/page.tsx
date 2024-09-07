"use client"
import { Authenticated } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
export default function Home() {

  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <Authenticated>
        <ToDoList />
        <NewToDoForm />
      </Authenticated>
    </div>
  );
}
