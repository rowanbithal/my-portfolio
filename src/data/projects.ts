export type Project = {
  title: string;
  description: string;
  tech: string[];
  /** Link to the live site, if any. */
  live?: string;
  /** Link to the source repo. */
  repo?: string;
  /** Mark your strongest 3–5 to feature them on the home page. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "MarketRoom",
    description:
      "A social-first financial platform that unifies portfolio tracking, personalised news, and asset-linked discussion. Spring Boot REST API backed by PostgreSQL, with live prices from Polygon.io, news from MarketAux, and OpenAI for article ranking and daily summaries. React Native frontend, JWT auth, and AWS S3 for media.",
    tech: ["React Native", "Spring Boot", "Java", "PostgreSQL", "OpenAI API", "Polygon.io", "AWS S3", "JWT"],
    featured: true,
  },
  {
    title: "Music Room Booking System",
    description:
      "Full-stack room booking system built for the University of Birmingham's Music Department, scoring 87% in the Team Project module. Features room booking, user statistics, and a CI/CD pipeline via GitHub Actions deploying to a self-hosted Ubuntu VM on Azure. Built in an agile team using vertical slicing and protected branching workflows across 30+ collaborative sessions.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "GitHub Actions", "Azure"],
    featured: true,
  },
  {
    title: "Firewall Configuration Manager",
    description:
      "A concurrent server program in C that manages firewall rules and handles multiple simultaneous client connections over sockets. Implemented concurrency mechanisms for responsiveness under load, validated with automated test scripts, and audited for memory leaks with Valgrind.",
    tech: ["C", "Networking", "Sockets", "Valgrind"],
    featured: true,
  },
  {
    title: "House Price Prediction Model",
    description:
      "Random Forest regression model trained on 3,500+ London property records to predict sale prices. Includes full data preprocessing — missing value imputation, feature scaling, one-hot encoding — with model performance tuned via cross-validation.",
    tech: ["Python", "Machine Learning", "Pandas", "scikit-learn"],
    featured: true,
  },
];
