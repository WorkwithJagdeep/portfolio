import { v7 as uuidv7 } from "uuid";

type feaure = {
  title: string;
  feature: string;
};

type Project = {
  id: string;
  name: string;
  image: string;
  overview: string;
  githubLink: string;
  tech_stack: string[];
  app_image: string[];
  feature: feaure[];
};

export const projects: Project[] = [
  {
    id: "0191cb2a-5832-7ddb-87c2-5b8c9c1315c2",
    name: " GAINTRACK (OPEN-SOURCE)",
    image:
      "https://cdn.dribbble.com/userupload/9310264/file/original-9a8a00727b1aa615e9b1e66d305c9284.png?resize=1200x900",
    overview: `Gaintrack is an open-source mobile trading application designed
                to empower you with the tools to navigate the stock market.`,
    githubLink: "https://github.com/WorkwithJagdeep/gaintrack.git",
    app_image: [],
    tech_stack: ["Typescript", "React Native", "Redux"],
    feature: [
      {
        title: "Create Watchlists:",
        feature: `Build personalized watchlists by adding stocks you're interested in tracking.`,
      },
      {
        title: "Simulate Order Placement:",
        feature:
          "Experiment with simulated order placement to gain confidence before making real trades (backend functionality not yet implemented)",
      },
      {
        title: "Access Stock Market News:",
        feature:
          "Stay informed with the latest developments impacting the market.",
      },
    ],
  },
  {
    id: "0191cb2b-3d79-7ee4-ab0b-48211791df35",
    name: "Blurr. (OPEN-SOURCE)",
    image:
      "https://cdn.dribbble.com/userupload/8142859/file/original-5a95f609788ef3a7f851f2984cd0c1cb.png?resize=1200x900&vertical=center",
    overview: `a social app that fosters community engagement, anonymous
            interactions, and shared experiences. The app will leverage
            geolocation, user interests, and real-time interactions to create a
            dynamic and engaging platform.`,
    tech_stack: ["Typescript", "React Native", "Redux"],
    app_image: [
      "https://github.com/user-attachments/assets/f92a24a3-b403-4e34-b9ce-a1876fb67bf4",
      "https://github.com/user-attachments/assets/f38080d9-fccd-47e7-9101-c07391ee9ec5",
      "https://github.com/user-attachments/assets/cfad053a-800d-4554-940a-afcd503be5ed",
    ],
    githubLink: "https://github.com/WorkwithJagdeep/blurr.git",
    feature: [
      {
        title: "Anonymous Messaging:",
        feature: `Users can send anonymous messages to specific individuals or to public groups.`,
      },
      {
        title: "Shared Experiences",
        feature:
          "Users can share their screens or content in real-time for others to join. (backend functionality not yet implemented)",
      },
      {
        title: "Share Moment:",
        feature:
          "Users can upload and share pre-recorded videos.(backend functionality to be implemented in the future).",
      },
    ],
  },
];
