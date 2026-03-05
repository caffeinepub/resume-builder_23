import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { DEFAULT_RESUME } from "./data/sampleResume";
import { TEMPLATES, type TemplateId } from "./data/templates";
import EditorPage from "./pages/EditorPage";
import LandingPage from "./pages/LandingPage";
import type { Resume } from "./types/resume";

export type Page = "landing" | "editor";

export default function App() {
  const [page, setPage] = useState<Page>("landing");
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateId>("modern");
  const [resume, setResume] = useState<Resume>(DEFAULT_RESUME);
  const [isDark, setIsDark] = useState(false);

  // Theme persistence
  useEffect(() => {
    const stored = localStorage.getItem("resume-builder-theme");
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("resume-builder-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("resume-builder-theme", "light");
    }
  };

  const handleSelectTemplate = (templateId: TemplateId) => {
    setSelectedTemplate(templateId);
    setResume((prev) => ({ ...prev, template: templateId }));
    setPage("editor");
  };

  const handleGoBack = () => {
    setPage("landing");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {page === "landing" ? (
        <LandingPage
          templates={TEMPLATES}
          onSelectTemplate={handleSelectTemplate}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />
      ) : (
        <EditorPage
          resume={resume}
          setResume={setResume}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onGoBack={handleGoBack}
        />
      )}
      <Toaster position="bottom-right" />
    </div>
  );
}
