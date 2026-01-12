import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.number(),
    role: z.string().optional(),
    tech: z.array(z.string()).default([]),
    summary: z.string(),
    links: z.object({
      demo: z.string().url().optional(),
      repo: z.string().url().optional(),
    }).optional(),
  }),
});

const achievements = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.number(),
    organizer: z.string().optional(),
    level: z.string().optional(), // contoh: Kampus/Kota/Provinsi/Nasional
    proof: z.string().url().optional(), // link sertifikat/drive, opsional
    summary: z.string(),
  }),
});

export const collections = {
  projects,
  achievements,
};
