import { v7 as uuidv7 } from "uuid";

type Project = {
  id: string;
  name: string;
  image: string;
  overview: string;
  githubLink: string;
};

export const projects: Project[] = [
  {
    id: uuidv7(),
    name: " GAINTRACK (OPEN-SOURCE)",
    image:
      "https://cdn.dribbble.com/userupload/9310264/file/original-9a8a00727b1aa615e9b1e66d305c9284.png?resize=1200x900",
    overview: `Gaintrack is an open-source mobile trading application designed
                to empower you with the tools to navigate the stock market.`,
    githubLink: "https://github.com/WorkwithJagdeep/gaintrack.git",
  },
  {
    id: uuidv7(),
    name: "Blurr. (OPEN-SOURCE)",
    image:
      "https://cdn.dribbble.com/userupload/8142859/file/original-5a95f609788ef3a7f851f2984cd0c1cb.png?resize=1200x900&vertical=center",
    overview: `This project aims to develop a social app that fosters community engagement, anonymous interactions, and shared experiences.
`,
    githubLink: "https://github.com/WorkwithJagdeep/gaintrack.git",
  },
];
