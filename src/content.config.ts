import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        link: z.string(),
        type: z.string(),
        date: z.string(),
        stack: z.array(z.string()),
        status: z.string(),
    }),
});

export const collections = { projects };
