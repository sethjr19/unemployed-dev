
export type Skill = {
  name: string;
  level: number;
};

export type Experience = {
  title: string;
  date: string;
  details: string[];
};

export type CommunityInvolvement = {
  title: string;
  description: string;
};

export type OpenSourceContribution = {
  title: string;
  description: string;
};

export type UserProfileDetails = {
  isOnline: string;
  isFollowing: string;
  username: string;
  location: string;
  followers: number;
  following: number;
  watched: number;
  starred: number;
  bio: string;
  aboutMe: string;
  quickFacts: string[];
  skills: Skill[];
  experience: Experience[];
  learningGoals: string[];
  favoriteBooks: string[];
  onlineCourses: string[];
  certifications: string[];
  communityInvolvement: CommunityInvolvement[];
  openSourceContributions: OpenSourceContribution[];
  connectionMessage: string;
};
