import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Text "mo:core/Text";

actor {
  type Resume = {
    personalInfo : PersonalInfo;
    summary : Text;
    workExperience : [WorkExperience];
    education : [Education];
    skills : [Text];
    template : Text;
    lastUpdated : Int;
  };

  type PersonalInfo = {
    name : Text;
    email : Text;
    phone : Text;
    location : Text;
    website : Text;
  };

  type WorkExperience = {
    company : Text;
    position : Text;
    startDate : Text;
    endDate : Text;
    description : Text;
  };

  type Education = {
    school : Text;
    degree : Text;
    startDate : Text;
    endDate : Text;
    description : Text;
  };

  let resumes = Map.empty<Text, Resume>();

  public shared ({ caller }) func createResume(sessionId : Text, resume : Resume) : async () {
    if (resumes.containsKey(sessionId)) {
      Runtime.trap("Resume with this session ID already exists");
    };
    resumes.add(sessionId, resume);
  };

  public shared ({ caller }) func updateResume(sessionId : Text, resume : Resume) : async () {
    if (not resumes.containsKey(sessionId)) {
      Runtime.trap("Resume with this session ID does not exist");
    };
    resumes.add(sessionId, resume);
  };

  public query ({ caller }) func getResume(sessionId : Text) : async Resume {
    switch (resumes.get(sessionId)) {
      case (null) { Runtime.trap("Resume not found") };
      case (?resume) { resume };
    };
  };

  public query ({ caller }) func getAllResumes() : async [Resume] {
    resumes.values().toArray();
  };

  public query ({ caller }) func getResumesByTemplate(template : Text) : async [Resume] {
    resumes.values().toArray().filter(
      func(resume) {
        resume.template == template;
      }
    );
  };
};
