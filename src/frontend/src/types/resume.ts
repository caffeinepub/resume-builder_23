export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  website: string;
}

export interface WorkExperience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Resume {
  template: string;
  personalInfo: PersonalInfo;
  summary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  lastUpdated: bigint;
}
