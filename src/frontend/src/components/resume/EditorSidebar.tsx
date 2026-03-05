import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ChevronDown, Plus, Tag, Trash2, X } from "lucide-react";
import { useState } from "react";
import type { Education, Resume, WorkExperience } from "../../types/resume";

interface EditorSidebarProps {
  resume: Resume;
  onChange: (resume: Resume) => void;
}

// Collapsible section component
function EditorSection({
  title,
  ocid,
  children,
  defaultOpen = false,
}: {
  title: string;
  ocid: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="border border-border rounded-xl overflow-hidden"
      data-ocid={ocid}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/50 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-sm text-card-foreground">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div className="p-4 bg-card border-t border-border space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default function EditorSidebar({
  resume,
  onChange,
}: EditorSidebarProps) {
  const [skillInput, setSkillInput] = useState("");

  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...resume,
      personalInfo: { ...resume.personalInfo, [field]: value },
    });
  };

  const updateSummary = (value: string) => {
    onChange({ ...resume, summary: value });
  };

  const addExperience = () => {
    const newExp: WorkExperience = {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    onChange({ ...resume, workExperience: [...resume.workExperience, newExp] });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updated = resume.workExperience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp,
    );
    onChange({ ...resume, workExperience: updated });
  };

  const removeExperience = (index: number) => {
    onChange({
      ...resume,
      workExperience: resume.workExperience.filter((_, i) => i !== index),
    });
  };

  const addEducation = () => {
    const newEdu: Education = {
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    onChange({ ...resume, education: [...resume.education, newEdu] });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updated = resume.education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu,
    );
    onChange({ ...resume, education: updated });
  };

  const removeEducation = (index: number) => {
    onChange({
      ...resume,
      education: resume.education.filter((_, i) => i !== index),
    });
  };

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed || resume.skills.includes(trimmed)) return;
    onChange({ ...resume, skills: [...resume.skills, trimmed] });
    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    onChange({ ...resume, skills: resume.skills.filter((s) => s !== skill) });
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4">
      {/* Personal Info */}
      <EditorSection
        title="Personal Info"
        ocid="editor.personal_info.panel"
        defaultOpen
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <Label className="text-xs mb-1.5 block">Full Name</Label>
            <Input
              value={resume.personalInfo.name}
              onChange={(e) => updatePersonalInfo("name", e.target.value)}
              placeholder="Alexandra Chen"
              className="text-sm h-9"
            />
          </div>
          <div>
            <Label className="text-xs mb-1.5 block">Email</Label>
            <Input
              value={resume.personalInfo.email}
              onChange={(e) => updatePersonalInfo("email", e.target.value)}
              placeholder="alex@email.com"
              type="email"
              className="text-sm h-9"
            />
          </div>
          <div>
            <Label className="text-xs mb-1.5 block">Phone</Label>
            <Input
              value={resume.personalInfo.phone}
              onChange={(e) => updatePersonalInfo("phone", e.target.value)}
              placeholder="+1 (415) 000-0000"
              className="text-sm h-9"
            />
          </div>
          <div>
            <Label className="text-xs mb-1.5 block">Location</Label>
            <Input
              value={resume.personalInfo.location}
              onChange={(e) => updatePersonalInfo("location", e.target.value)}
              placeholder="San Francisco, CA"
              className="text-sm h-9"
            />
          </div>
          <div>
            <Label className="text-xs mb-1.5 block">Website</Label>
            <Input
              value={resume.personalInfo.website}
              onChange={(e) => updatePersonalInfo("website", e.target.value)}
              placeholder="yoursite.com"
              className="text-sm h-9"
            />
          </div>
        </div>
      </EditorSection>

      {/* Summary */}
      <EditorSection title="Summary" ocid="editor.summary.panel">
        <Textarea
          value={resume.summary}
          onChange={(e) => updateSummary(e.target.value)}
          placeholder="Write a brief professional summary..."
          className="text-sm resize-none min-h-[100px]"
        />
      </EditorSection>

      {/* Work Experience */}
      <EditorSection title="Work Experience" ocid="editor.experience.panel">
        <div className="space-y-4">
          {resume.workExperience.map((exp, index) => (
            <div
              key={`exp-${exp.company}-${index}`}
              className="rounded-lg border border-border p-3 space-y-3 bg-muted/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">
                  {exp.position || `Position ${index + 1}`}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-destructive"
                  onClick={() => removeExperience(index)}
                  aria-label="Remove experience"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-xs mb-1 block">Position</Label>
                  <Input
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(index, "position", e.target.value)
                    }
                    placeholder="Senior Designer"
                    className="text-xs h-8"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">Company</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(index, "company", e.target.value)
                    }
                    placeholder="Acme Corp"
                    className="text-xs h-8"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">Start Date</Label>
                  <Input
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(index, "startDate", e.target.value)
                    }
                    placeholder="Jan 2022"
                    className="text-xs h-8"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">End Date</Label>
                  <Input
                    value={exp.endDate}
                    onChange={(e) =>
                      updateExperience(index, "endDate", e.target.value)
                    }
                    placeholder="Present"
                    className="text-xs h-8"
                  />
                </div>
              </div>
              <div>
                <Label className="text-xs mb-1 block">Description</Label>
                <Textarea
                  value={exp.description}
                  onChange={(e) =>
                    updateExperience(index, "description", e.target.value)
                  }
                  placeholder="Describe your key responsibilities and achievements..."
                  className="text-xs resize-none min-h-[72px]"
                />
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            size="sm"
            className="w-full border-dashed h-9 text-xs gap-1.5 text-muted-foreground hover:text-foreground"
            onClick={addExperience}
            data-ocid="editor.add_experience.button"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Experience
          </Button>
        </div>
      </EditorSection>

      {/* Education */}
      <EditorSection title="Education" ocid="editor.education.panel">
        <div className="space-y-4">
          {resume.education.map((edu, index) => (
            <div
              key={`edu-${edu.school}-${index}`}
              className="rounded-lg border border-border p-3 space-y-3 bg-muted/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">
                  {edu.degree || `Degree ${index + 1}`}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 text-muted-foreground hover:text-destructive"
                  onClick={() => removeEducation(index)}
                  aria-label="Remove education"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2">
                  <Label className="text-xs mb-1 block">Degree</Label>
                  <Input
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(index, "degree", e.target.value)
                    }
                    placeholder="Bachelor of Science"
                    className="text-xs h-8"
                  />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs mb-1 block">School</Label>
                  <Input
                    value={edu.school}
                    onChange={(e) =>
                      updateEducation(index, "school", e.target.value)
                    }
                    placeholder="University Name"
                    className="text-xs h-8"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">Start Date</Label>
                  <Input
                    value={edu.startDate}
                    onChange={(e) =>
                      updateEducation(index, "startDate", e.target.value)
                    }
                    placeholder="Aug 2019"
                    className="text-xs h-8"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">End Date</Label>
                  <Input
                    value={edu.endDate}
                    onChange={(e) =>
                      updateEducation(index, "endDate", e.target.value)
                    }
                    placeholder="May 2023"
                    className="text-xs h-8"
                  />
                </div>
              </div>
              <div>
                <Label className="text-xs mb-1 block">Description</Label>
                <Textarea
                  value={edu.description}
                  onChange={(e) =>
                    updateEducation(index, "description", e.target.value)
                  }
                  placeholder="Notable achievements, GPA, activities..."
                  className="text-xs resize-none min-h-[64px]"
                />
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            size="sm"
            className="w-full border-dashed h-9 text-xs gap-1.5 text-muted-foreground hover:text-foreground"
            onClick={addEducation}
            data-ocid="editor.add_education.button"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Education
          </Button>
        </div>
      </EditorSection>

      {/* Skills */}
      <EditorSection title="Skills" ocid="editor.skills.panel">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 min-h-[36px]">
            {resume.skills.length === 0 ? (
              <p className="text-xs text-muted-foreground">
                No skills added yet
              </p>
            ) : (
              resume.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="gap-1 pr-1.5 text-xs bg-accent text-accent-foreground border-0 hover:bg-destructive/20 hover:text-destructive transition-colors"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-0.5 rounded-full hover:bg-destructive/20"
                    aria-label={`Remove ${skill}`}
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </Badge>
              ))
            )}
          </div>
          <Separator />
          <div className="flex gap-2">
            <Input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleSkillKeyDown}
              placeholder="Add a skill..."
              className="text-sm h-9"
              data-ocid="editor.skills.input"
            />
            <Button
              size="sm"
              variant="outline"
              className="h-9 px-3 shrink-0"
              onClick={addSkill}
              disabled={!skillInput.trim()}
              data-ocid="editor.skills.add_button"
            >
              <Plus className="w-3.5 h-3.5" />
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground">
            Press Enter or click + to add a skill
          </p>
        </div>
      </EditorSection>
    </div>
  );
}
