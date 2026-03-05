import { Globe, Mail, MapPin, Phone } from "lucide-react";
import type { Resume } from "../../types/resume";

interface Props {
  resume: Resume;
}

export default function CreativeTemplate({ resume }: Props) {
  const { personalInfo, summary, workExperience, education, skills } = resume;
  const accent = "#7c3aed";

  return (
    <div
      className="w-full min-h-full flex flex-col"
      style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a" }}
    >
      {/* Bold color-block header */}
      <div className="p-8 pb-6" style={{ background: accent }}>
        <h1
          className="text-2xl font-bold text-white mb-1"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="flex items-center flex-wrap gap-4 mt-3">
          {personalInfo.email && (
            <div className="flex items-center gap-1.5 text-white/70 text-[10px]">
              <Mail className="w-3 h-3" />
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1.5 text-white/70 text-[10px]">
              <Phone className="w-3 h-3" />
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1.5 text-white/70 text-[10px]">
              <MapPin className="w-3 h-3" />
              {personalInfo.location}
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-1.5 text-white/70 text-[10px]">
              <Globe className="w-3 h-3" />
              {personalInfo.website}
            </div>
          )}
        </div>
      </div>

      {/* Body: two-column */}
      <div className="flex flex-1">
        {/* Left column */}
        <div
          className="w-[38%] p-5 flex flex-col gap-5"
          style={{ background: "#f5f3ff" }}
        >
          {/* Summary */}
          {summary && (
            <div>
              <h2
                className="text-[9px] font-bold uppercase tracking-widest mb-2"
                style={{ color: accent }}
              >
                About
              </h2>
              <p className="text-[10px] text-gray-600 leading-relaxed">
                {summary}
              </p>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2
                className="text-[9px] font-bold uppercase tracking-widest mb-2"
                style={{ color: accent }}
              >
                Skills
              </h2>
              <div className="flex flex-col gap-1">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: accent }}
                    />
                    <span className="text-[10px] text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="flex-1 p-5 flex flex-col gap-5">
          {/* Work Experience */}
          {workExperience.length > 0 && (
            <div>
              <h2
                className="text-[9px] font-bold uppercase tracking-widest mb-3"
                style={{ color: accent }}
              >
                Experience
              </h2>
              <div className="space-y-3">
                {workExperience.map((exp, i) => (
                  <div
                    key={`exp-${exp.company}-${i}`}
                    className="relative pl-3"
                    style={{ borderLeft: `2px solid ${accent}30` }}
                  >
                    <div
                      className="absolute top-0 left-[-4px] w-2 h-2 rounded-full"
                      style={{ background: accent }}
                    />
                    <div className="flex items-start justify-between mb-0.5">
                      <div>
                        <p className="text-[11px] font-bold text-gray-800">
                          {exp.position}
                        </p>
                        <p
                          className="text-[10px] font-semibold"
                          style={{ color: accent }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-[9px] text-gray-400 whitespace-nowrap ml-2">
                        {exp.startDate}
                        {exp.endDate ? ` – ${exp.endDate}` : ""}
                      </p>
                    </div>
                    {exp.description && (
                      <p className="text-[10px] text-gray-500 leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h2
                className="text-[9px] font-bold uppercase tracking-widest mb-3"
                style={{ color: accent }}
              >
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div
                    key={`edu-${edu.school}-${i}`}
                    className="relative pl-3"
                    style={{ borderLeft: `2px solid ${accent}30` }}
                  >
                    <div
                      className="absolute top-0 left-[-4px] w-2 h-2 rounded-full"
                      style={{ background: accent }}
                    />
                    <div className="flex items-start justify-between mb-0.5">
                      <div>
                        <p className="text-[11px] font-bold text-gray-800">
                          {edu.degree}
                        </p>
                        <p className="text-[10px] text-gray-600">
                          {edu.school}
                        </p>
                      </div>
                      <p className="text-[9px] text-gray-400 whitespace-nowrap ml-2">
                        {edu.startDate}
                        {edu.endDate ? ` – ${edu.endDate}` : ""}
                      </p>
                    </div>
                    {edu.description && (
                      <p className="text-[10px] text-gray-500 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
