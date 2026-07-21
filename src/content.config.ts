import { defineCollection } from "astro:content";
import { z } from "astro/zod"
import { glob } from "astro/loaders";


const projects = defineCollection({
    loader: glob({ pattern: "**/index.md", base: "./src/project-log" }), //where we look for and what we look for
    schema: z.object({ //schema of the data 
        title: z.string(),
        description: z.string(),
        startedDate: z.coerce.date(),
    }) 
})

const entries = defineCollection({
   loader: glob({ pattern: "**/!(index).md", base: "./src/project-log" }),
    schema: z.object({
        date: z.coerce.date(),
        title: z.string(),
        milestone: z.boolean().default(false),
        tags: z.array(z.string()).optional(),
    }),
})

export const collections = { projects , entries }