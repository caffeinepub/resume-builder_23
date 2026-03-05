import type { Resume } from "../../types/resume";

interface Props {
  resume: Resume;
}

export default function MinimalTemplate({ resume }: Props) {
  const { personalInfo, summary, workExperience, education, skills } = resume;

  return (
    <div
      className="w-full min-h-full p-10"
      style={{ fontFamily: "'Outfit', sans-serif", color: "#0f172a" }}
    >
      {/* Ultra-minimal header */}
      <div className="mb-7">
        <h1
          className="text-3xl font-light tracking-tight mb-2"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          {personalInfo.name || "Your Name"}
        </h1>
        <div
          className="flex items-center flex-wrap gap-x-4 gap-y-1 text-[10px]"
          style={{ color: "#64748b" }}
        >
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </div>

      <div
        style={{ borderBottom: "1px solid #e2e8f0", marginBottom: "24px" }}
      />

      {/* Summary */}
      {summary && (
        <div className="mb-7">
          <p className="text-[11px] text-gray-500 leading-relaxed max-w-lg">
            {summary}
          </p>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="mb-7">
          <h2
            className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#94a3b8" }}
          >
            Experience
          </h2>
          <div className="space-y-5">
            {workExperience.map((exp, i) => (
              <div
                key={`exp-${exp.company}-${i}`}
                className="grid grid-cols-[1fr_auto] gap-x-6"
              >
                <div>
                  <p className="text-[12px] font-semibold text-gray-900 mb-0.5">
                    {exp.position}
                  </p>
                  <p className="text-[11px] text-gray-500 mb-1">
                    {exp.company}
                  </p>
                  {exp.description && (
                    <p className="text-[10px] text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
                <p className="text-[9px] text-gray-300 whitespace-nowrap text-right mt-0.5">
                  {exp.startDate}
                  {exp.endDate ? `\n${exp.endDate}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        style={{ borderBottom: "1px solid #e2e8f0", marginBottom: "24px" }}
      />

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-7">
          <h2
            className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#94a3b8" }}
          >
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={`edu-${edu.school}-${i}`}
                className="grid grid-cols-[1fr_auto] gap-x-6"
              >
                <div>
                  <p className="text-[12px] font-semibold text-gray-900 mb-0.5">
                    {edu.degree}
                  </p>
                  <p className="text-[11px] text-gray-500">{edu.school}</p>
                  {edu.description && (
                    <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
                <p className="text-[9px] text-gray-300 whitespace-nowrap text-right mt-0.5">
                  {edu.startDate}
                  {edu.endDate ? `\n${edu.endDate}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <>
          <div
            style={{ borderBottom: "1px solid #e2e8f0", marginBottom: "24px" }}
          />
          <div>
            <h2
              className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#94a3b8" }}
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {skills.map((skill) => (
                <span key={skill} className="text-[10px] text-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
