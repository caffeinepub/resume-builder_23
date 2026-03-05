import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { FileText, Moon, Sparkles, Sun, Zap } from "lucide-react";
import { motion } from "motion/react";
import TemplateCardPreview from "../components/resume/TemplateCardPreview";
import type { TemplateConfig, TemplateId } from "../data/templates";

interface LandingPageProps {
  templates: TemplateConfig[];
  onSelectTemplate: (id: TemplateId) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function LandingPage({
  templates,
  onSelectTemplate,
  isDark,
  onToggleTheme,
}: LandingPageProps) {
  const features = [
    { icon: Sparkles, text: "4 professional templates" },
    { icon: Zap, text: "Live preview as you type" },
    { icon: FileText, text: "Export to PDF instantly" },
  ];

  return (
    <div className="min-h-screen gradient-mesh">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              ResumeFlow
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Sun className="w-4 h-4 text-muted-foreground" />
            <Switch
              checked={isDark}
              onCheckedChange={onToggleTheme}
              data-ocid="header.theme_toggle"
              aria-label="Toggle dark mode"
            />
            <Moon className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-xs font-medium tracking-wide bg-accent text-accent-foreground border-0"
          >
            Free · No login required
          </Badge>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-6">
            Build a resume that{" "}
            <span className="text-primary relative inline-block">
              gets noticed
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
              >
                <path
                  d="M2 9C60 3 120 1 150 1C180 1 240 3 298 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            Choose a template, fill in your details, and download your polished
            resume in minutes — no account needed.
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            {features.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Template Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <h2 className="font-display font-bold text-2xl text-foreground mb-2">
            Choose your template
          </h2>
          <p className="text-muted-foreground text-sm">
            Click any template to start editing immediately
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => {
            const markerIds: Record<TemplateId, string> = {
              modern: "template.item.1",
              classic: "template.item.2",
              creative: "template.item.3",
              minimal: "template.item.4",
            };

            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  type="button"
                  className="w-full text-left template-card-hover group"
                  onClick={() => onSelectTemplate(template.id)}
                  data-ocid={markerIds[template.id]}
                  aria-label={`Select ${template.name} template`}
                >
                  <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-200 group-hover:border-primary/50 group-hover:shadow-lg">
                    {/* Template mini preview */}
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <TemplateCardPreview template={template} />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-200 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                          Use this template
                        </div>
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display font-semibold text-sm text-card-foreground">
                          {template.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className="text-[10px] px-2 py-0.5 bg-accent text-accent-foreground border-0"
                        >
                          {template.tag}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}. Built with ♥ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
