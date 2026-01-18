import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),        // contoh: "/projects/proyek-pertama.jpg"
    date: z.date().optional(),
    featured: z.boolean().default(false),
    links: z.object({
      demo: z.string().url().optional(),
      repo: z.string().url().optional(),
    }).optional(),
  }),
});

const achievements = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    org: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    proof: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, achievements };
