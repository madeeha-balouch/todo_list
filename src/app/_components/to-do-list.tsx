import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";

export function ToDoList() {
  const todos = useQuery(api.functions.listTodos);
  return (
    <ul className="space-y-4">
      {todos?.map(({ _id, title, description, completed }, index) => (
        <ToDoItem
          key={index}
          id={_id}
          title={title}
          description={description}
          completed={completed}
        />
      ))}
    </ul>
  );
}

function ToDoItem({
  id,
  title,
  description,
  completed,
}: {
  id: Id<"todos">;
  title: string;
  description: string;
  completed: boolean;
}) {
  const updateTodo = useMutation(api.functions.updateTodo);
  const deleteTodo = useMutation(api.functions.deleteTodo);

  return (
    <li className="w-full items-center flex gap-4 border-2 border-orange-500 rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <input
        type="checkbox"
        className="h-5 w-5 accent-pink-500"
        checked={completed}
        onChange={(e) => updateTodo({ id, completed: e.target.checked })}
      />
      <div>
        <p className="font-semibold text-orange-600">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="ml-auto">
        <button
          type="button"
          className="text-pink-500 font-semibold hover:text-orange-600 transition-colors duration-300"
          onClick={() => deleteTodo({ id })}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
