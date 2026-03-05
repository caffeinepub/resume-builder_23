import { Globe, Mail, MapPin, Phone } from "lucide-react";
import type { Resume } from "../../types/resume";

interface Props {
  resume: Resume;
}

export default function ModernTemplate({ resume }: Props) {
  const { personalInfo, summary, workExperience, education, skills } = resume;

  return (
    <div
      className="w-full min-h-full flex text-[11px] leading-relaxed font-sans"
      style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a2e" }}
    >
      {/* Left sidebar */}
      <div
        className="w-[35%] min-h-full p-6 flex flex-col gap-5"
        style={{ background: "#0d9488", color: "white" }}
      >
        {/* Name block */}
        <div>
          <h1
            className="text-xl font-bold leading-tight mb-0.5"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {personalInfo.name || "Your Name"}
          </h1>
          <p className="text-xs opacity-80 font-medium tracking-wide uppercase">
            Professional
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h2 className="text-[9px] font-bold uppercase tracking-widest opacity-60 mb-2">
            Contact
          </h2>
          {personalInfo.email && (
            <div className="flex items-start gap-2">
              <Mail className="w-3 h-3 opacity-70 mt-0.5 shrink-0" />
              <span className="text-[10px] opacity-90 break-all">
                {personalInfo.email}
              </span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-start gap-2">
              <Phone className="w-3 h-3 opacity-70 mt-0.5 shrink-0" />
              <span className="text-[10px] opacity-90">
                {personalInfo.phone}
              </span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-start gap-2">
              <MapPin className="w-3 h-3 opacity-70 mt-0.5 shrink-0" />
              <span className="text-[10px] opacity-90">
                {personalInfo.location}
              </span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-start gap-2">
              <Globe className="w-3 h-3 opacity-70 mt-0.5 shrink-0" />
              <span className="text-[10px] opacity-90 break-all">
                {personalInfo.website}
              </span>
            </div>
          )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className="text-[9px] font-bold uppercase tracking-widest opacity-60 mb-2">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded-full text-[9px] font-medium"
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    color: "white",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right content */}
      <div className="flex-1 p-6 flex flex-col gap-5">
        {/* Summary */}
        {summary && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="h-0.5 w-4 rounded-full"
                style={{ background: "#0d9488" }}
              />
              <h2
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "#0d9488" }}
              >
                Profile
              </h2>
            </div>
            <p className="text-[10px] text-gray-600 leading-relaxed">
              {summary}
            </p>
          </div>
        )}

        {/* Work Experience */}
        {workExperience.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-0.5 w-4 rounded-full"
                style={{ background: "#0d9488" }}
              />
              <h2
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "#0d9488" }}
              >
                Experience
              </h2>
            </div>
            <div className="space-y-3">
              {workExperience.map((exp, i) => (
                <div key={`exp-${exp.company}-${i}`}>
                  <div className="flex items-start justify-between mb-0.5">
                    <div>
                      <p className="text-[11px] font-bold text-gray-800">
                        {exp.position}
                      </p>
                      <p
                        className="text-[10px] font-semibold"
                        style={{ color: "#0d9488" }}
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
            <div className="flex items-center gap-2 mb-3">
              <div
                className="h-0.5 w-4 rounded-full"
                style={{ background: "#0d9488" }}
              />
              <h2
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "#0d9488" }}
              >
                Education
              </h2>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={`edu-${edu.school}-${i}`}>
                  <div className="flex items-start justify-between mb-0.5">
                    <div>
                      <p className="text-[11px] font-bold text-gray-800">
                        {edu.degree}
                      </p>
                      <p className="text-[10px] text-gray-600">{edu.school}</p>
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
  );
}
