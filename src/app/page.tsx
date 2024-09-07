"use client"
import { Authenticated, Unauthenticated } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { SignInButton } from "@clerk/nextjs";
export default function Home() {

  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-4">
      <Authenticated>
        <div className="flex item-center justify-between">
          <h1 className="text-xl font-bold">To-Do List</h1>
        </div>
        <ToDoList />
        <NewToDoForm />
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </div>
  );
}
