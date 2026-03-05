import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  LayoutTemplate,
  Loader2,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import EditorSidebar from "../components/resume/EditorSidebar";
import ResumePreview from "../components/resume/ResumePreview";
import { DEFAULT_RESUME } from "../data/sampleResume";
import { TEMPLATES, type TemplateId } from "../data/templates";
import { useResumeSession } from "../hooks/useResumeSession";
import type { Resume } from "../types/resume";

interface EditorPageProps {
  resume: Resume;
  setResume: (resume: Resume | ((prev: Resume) => Resume)) => void;
  selectedTemplate: TemplateId;
  setSelectedTemplate: (id: TemplateId) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onGoBack: () => void;
}

export default function EditorPage({
  resume,
  setResume,
  selectedTemplate,
  setSelectedTemplate,
  isDark,
  onToggleTheme,
  onGoBack,
}: EditorPageProps) {
  const { backendResume, isLoading, saveResume, isSaving } = useResumeSession();

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstLoad = useRef(true);
  const hasLoadedFromBackend = useRef(false);

  // Load from backend on mount
  useEffect(() => {
    if (backendResume && !hasLoadedFromBackend.current) {
      hasLoadedFromBackend.current = true;
      isFirstLoad.current = false;
      setResume({ ...backendResume });
      if (backendResume.template) {
        setSelectedTemplate(backendResume.template as TemplateId);
      }
    }
  }, [backendResume, setResume, setSelectedTemplate]);

  // Debounced auto-save
  const debouncedSave = useCallback(
    (updatedResume: Resume) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(async () => {
        const isNew = !hasLoadedFromBackend.current && isFirstLoad.current;
        await saveResume(updatedResume, isNew);
        if (isFirstLoad.current) {
          isFirstLoad.current = false;
          hasLoadedFromBackend.current = true;
        }
      }, 1500);
    },
    [saveResume],
  );

  const handleResumeChange = useCallback(
    (updated: Resume) => {
      const withTemplate = { ...updated, template: selectedTemplate };
      setResume(withTemplate);
      debouncedSave(withTemplate);
    },
    [setResume, selectedTemplate, debouncedSave],
  );

  const handleTemplateChange = (templateId: TemplateId) => {
    setSelectedTemplate(templateId);
    const updated = { ...resume, template: templateId };
    setResume(updated);
    debouncedSave(updated);
  };

  const handleDownload = () => {
    window.print();
  };

  // Sync selected template into resume
  const resumeWithTemplate = { ...resume, template: selectedTemplate };

  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen bg-background">
        {/* Header */}
        <header className="h-14 border-b border-border bg-background/95 backdrop-blur-sm z-40 flex items-center px-4 gap-3 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={onGoBack}
            aria-label="Back to templates"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <LayoutTemplate className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-sm text-foreground hidden sm:block">
              ResumeFlow
            </span>
          </div>

          {/* Template picker tabs (compact) */}
          <div className="flex-1 flex justify-center">
            <Tabs
              value={selectedTemplate}
              onValueChange={(v) => handleTemplateChange(v as TemplateId)}
            >
              <TabsList className="h-8 bg-muted/60">
                {TEMPLATES.map((t) => (
                  <TabsTrigger
                    key={t.id}
                    value={t.id}
                    className="text-xs h-7 px-3"
                    data-ocid={`template.${t.id}.tab`}
                  >
                    {t.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="flex items-center gap-2">
            {/* Save indicator */}
            {isSaving ? (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span className="hidden sm:inline">Saving…</span>
              </div>
            ) : !isLoading ? (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                <span className="hidden sm:inline">Saved</span>
              </div>
            ) : null}

            {/* Theme toggle */}
            <div className="flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-muted-foreground" />
              <Switch
                checked={isDark}
                onCheckedChange={onToggleTheme}
                data-ocid="header.theme_toggle"
                aria-label="Toggle dark mode"
              />
              <Moon className="w-3.5 h-3.5 text-muted-foreground" />
            </div>

            {/* Download */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  className="h-8 gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold"
                  onClick={handleDownload}
                  data-ocid="header.download_button"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download as PDF</TooltipContent>
            </Tooltip>
          </div>
        </header>

        {/* Editor body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left sidebar - Form panels */}
          <aside className="w-80 xl:w-88 border-r border-border bg-background shrink-0 overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b border-border">
              <h2 className="font-display font-semibold text-sm text-foreground">
                Edit Resume
              </h2>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Changes auto-save as you type
              </p>
            </div>
            <ScrollArea className="flex-1">
              <EditorSidebar
                resume={resumeWithTemplate}
                onChange={handleResumeChange}
              />
            </ScrollArea>
          </aside>

          {/* Right panel - Preview */}
          <main className="flex-1 overflow-auto bg-muted/30 flex flex-col">
            <div className="sticky top-0 z-10 bg-muted/80 backdrop-blur-sm px-4 py-2 border-b border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">
                Preview
              </span>
              <span className="text-xs text-muted-foreground">
                {TEMPLATES.find((t) => t.id === selectedTemplate)?.name}{" "}
                Template
              </span>
            </div>

            <div className="flex-1 flex items-start justify-center p-8">
              <motion.div
                key={selectedTemplate}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "w-full max-w-[640px] shadow-2xl rounded-sm overflow-hidden",
                  "ring-1 ring-black/10",
                )}
                style={{ minHeight: "842px" }}
              >
                <ResumePreview
                  resume={resumeWithTemplate}
                  templateId={selectedTemplate}
                />
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
