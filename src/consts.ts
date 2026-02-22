import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Seungyong Cho",
  EMAIL: "Zoyoong124@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Seungyong Cho's Portfolio and Blog.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Thoughts on development, technology, and life.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects and open source contributions.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/spencer0124"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/zoyoong124",
  }
];
