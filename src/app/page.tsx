"use client"
import { Authenticated, Unauthenticated } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { SignInButton, UserButton } from "@clerk/nextjs";
//pushing to vercel
export default function Home() {
  
  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-4">
      <Authenticated>
      <div className="flex justify-between items-center bg-gradient-to-r from-[#f5971d] via-[#f5971d] to-[#f5971d]">
      <h1 className="text-4xl font-bold text-pink-600 mb-2 animate__animated animate__fadeInDown">
      To-Do List
      </h1>
    <UserButton />
    </div>

        <ToDoList />
        <NewToDoForm />
       
      </Authenticated>
      <Unauthenticated>
  <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#f5971d] via-[#f5971d] to-[#f5971d]">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg animate__animated animate__fadeInDown">
      <h1 className="text-4xl font-bold text-pink-600 mb-4 animate__animated animate__pulse animate__repeat-3">
        Welcome to Your To-Do List
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Please sign in to continue managing your tasks!
      </p>
      <SignInButton>
        <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-pink-700 hover:scale-105">
          Sign In
        </button>
      </SignInButton>
    </div>
  </div>
</Unauthenticated>
</div>
  );
}
