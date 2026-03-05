import type { Resume } from "../../types/resume";

interface Props {
  resume: Resume;
}

export default function ClassicTemplate({ resume }: Props) {
  const { personalInfo, summary, workExperience, education, skills } = resume;

  return (
    <div
      className="w-full min-h-full p-8"
      style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1a1a1a" }}
    >
      {/* Header */}
      <div
        className="text-center pb-4 mb-4"
        style={{ borderBottom: "2px solid #1e293b" }}
      >
        <h1
          className="text-2xl font-bold tracking-tight mb-1"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            color: "#1e293b",
          }}
        >
          {personalInfo.name || "Your Name"}
        </h1>
        <div className="flex items-center justify-center gap-3 flex-wrap text-[10px] text-gray-500 mt-2">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span>·</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>·</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span>·</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
            Summary
          </h2>
          <p className="text-[11px] text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      <div
        style={{ borderBottom: "1px solid #cbd5e1", marginBottom: "16px" }}
      />

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">
            Work Experience
          </h2>
          <div className="space-y-4">
            {workExperience.map((exp, i) => (
              <div key={`exp-${exp.company}-${i}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[12px] font-bold text-gray-900">
                      {exp.position}
                    </p>
                    <p className="text-[11px] text-gray-600 italic">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-[10px] text-gray-400 whitespace-nowrap ml-4">
                    {exp.startDate}
                    {exp.endDate ? ` – ${exp.endDate}` : ""}
                  </p>
                </div>
                {exp.description && (
                  <p className="text-[10px] text-gray-600 leading-relaxed mt-1">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        style={{ borderBottom: "1px solid #cbd5e1", marginBottom: "16px" }}
      />

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-3">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu, i) => (
              <div key={`edu-${edu.school}-${i}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[12px] font-bold text-gray-900">
                      {edu.degree}
                    </p>
                    <p className="text-[11px] text-gray-600 italic">
                      {edu.school}
                    </p>
                  </div>
                  <p className="text-[10px] text-gray-400 whitespace-nowrap ml-4">
                    {edu.startDate}
                    {edu.endDate ? ` – ${edu.endDate}` : ""}
                  </p>
                </div>
                {edu.description && (
                  <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <>
          <div
            style={{ borderBottom: "1px solid #cbd5e1", marginBottom: "16px" }}
          />
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-2">
              Skills
            </h2>
            <p className="text-[10px] text-gray-700">{skills.join("  ·  ")}</p>
          </div>
        </>
      )}
    </div>
  );
}
