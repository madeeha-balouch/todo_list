import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";


export function NewToDoForm(){
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const createTodo = useMutation(api.functions.createTodo)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createTodo({title,description})
        setTitle("");
        setDesc("");
  }

    return (
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <label className="text-sm font-semibold text-gray-700" htmlFor="title">
          Title
        </label>
        <input
          className="p-2 border-2 border-pink-500 rounded focus:outline-none focus:border-orange-500 transition-all duration-300"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        
        <label className="text-sm font-semibold text-gray-700" htmlFor="description">
          Description
        </label>
        <input
          className="p-2 border-2 border-pink-500 rounded focus:outline-none focus:border-orange-500 transition-all duration-300"
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={e => setDesc(e.target.value)}
        />
        
        <button
          className="bg-pink-500 p-2 rounded text-white font-semibold hover:bg-orange-500 hover:scale-105 transition-all duration-300"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
    
    )
}