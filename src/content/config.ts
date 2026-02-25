import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    category: z.string().default("dev"), 
    id: z.number().or(z.string()), 
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
      description: z.string().optional(),
      icon: z.string().optional(),
      category: z.string().optional(),
    })).optional(),
  }),
});

export const collections = { blog, projects };