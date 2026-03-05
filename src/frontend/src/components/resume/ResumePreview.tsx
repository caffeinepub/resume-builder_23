import type { TemplateId } from "../../data/templates";
import type { Resume } from "../../types/resume";
import ClassicTemplate from "./ClassicTemplate";
import CreativeTemplate from "./CreativeTemplate";
import MinimalTemplate from "./MinimalTemplate";
import ModernTemplate from "./ModernTemplate";

interface ResumePreviewProps {
  resume: Resume;
  templateId: TemplateId;
}

export default function ResumePreview({
  resume,
  templateId,
}: ResumePreviewProps) {
  const renderTemplate = () => {
    switch (templateId) {
      case "modern":
        return <ModernTemplate resume={resume} />;
      case "classic":
        return <ClassicTemplate resume={resume} />;
      case "creative":
        return <CreativeTemplate resume={resume} />;
      case "minimal":
        return <MinimalTemplate resume={resume} />;
      default:
        return <ModernTemplate resume={resume} />;
    }
  };

  return (
    <div
      id="resume-print-area"
      data-ocid="resume.preview.panel"
      className="bg-white w-full min-h-full shadow-2xl"
      style={{
        fontFamily: "'Outfit', sans-serif",
        minHeight: "842px",
        color: "#1a1a1a",
      }}
    >
      {renderTemplate()}
    </div>
  );
}
