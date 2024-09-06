import { defineSchema,defineTable } from "convex/server";
import {v} from "convex/values";
import { title } from "process";

export default defineSchema({
    todos: defineTable({
        title: v.string(),
        description: v.string(),
        completed: v.boolean(),
    }),
});