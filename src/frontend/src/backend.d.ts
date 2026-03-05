import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PersonalInfo {
    name: string;
    email: string;
    website: string;
    phone: string;
    location: string;
}
export interface Resume {
    education: Array<Education>;
    workExperience: Array<WorkExperience>;
    lastUpdated: bigint;
    summary: string;
    template: string;
    personalInfo: PersonalInfo;
    skills: Array<string>;
}
export interface WorkExperience {
    endDate: string;
    description: string;
    company: string;
    position: string;
    startDate: string;
}
export interface Education {
    endDate: string;
    school: string;
    description: string;
    degree: string;
    startDate: string;
}
export interface backendInterface {
    createResume(sessionId: string, resume: Resume): Promise<void>;
    getAllResumes(): Promise<Array<Resume>>;
    getResume(sessionId: string): Promise<Resume>;
    getResumesByTemplate(template: string): Promise<Array<Resume>>;
    updateResume(sessionId: string, resume: Resume): Promise<void>;
}
