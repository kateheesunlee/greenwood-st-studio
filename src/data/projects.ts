export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  status: string;
  colors: {
    primary: string;
    secondary: string;
    textColor: string;
  };
}

export const projects: Project[] = [
  {
    id: "espresso-log",
    title: "Espresso Log",
    description:
      "Track your daily coffee journey with detailed tasting notes, brewing methods, and flavor profiles.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    url: "/espresso-log",
    status: "In Development",
    colors: {
      primary: "#8B4513", // Coffee brown
      secondary: "#A0522D", // Lighter brown
      textColor: "#8B4513", // Coffee brown for text
    },
  },
  {
    id: "wine-log",
    title: "Wine Log",
    description:
      "Document wine tastings, vineyard visits, and build your personal wine collection database.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=300&fit=crop",
    url: "/wine-log",
    status: "Planned",
    colors: {
      primary: "#722F37", // Wine red
      secondary: "#8B1538", // Darker wine red
      textColor: "#722F37", // Wine red for text
    },
  },
  {
    id: "itinerary-generator",
    title: "Just in plan",
    description:
      "AI-powered itinerary generator that creates personalized travel plans, suggests activities, and optimizes routes based on your preferences and interests.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    url: "/itinerary-generator",
    status: "Concept",
    colors: {
      primary: "#1E3A8A", // Travel blue
      secondary: "#3B82F6", // Lighter blue
      textColor: "#1E3A8A", // Travel blue for text
    },
  },
  {
    id: "parent-assistant",
    title: "Parent Assistant",
    description:
      "Smart tools for busy parents - labeling, summarizing, and translating emails. Create calendar events and tasks from emails.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
    url: "/parent-assistant",
    status: "Research",
    colors: {
      primary: "#059669", // Family green
      secondary: "#10B981", // Lighter green
      textColor: "#059669", // Family green for text
    },
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectByUrl = (url: string): Project | undefined => {
  return projects.find((project) => project.url === url);
};
