export type TemplateId = "modern" | "classic" | "creative" | "minimal";

export interface TemplateConfig {
  id: TemplateId;
  name: string;
  description: string;
  accentColor: string;
  tag: string;
  previewBg: string;
  previewAccent: string;
}

export const TEMPLATES: TemplateConfig[] = [
  {
    id: "modern",
    name: "Modern",
    description: "Colored sidebar with clean typography and bold accent colors",
    accentColor: "#0d9488",
    tag: "Popular",
    previewBg: "#f0fdfa",
    previewAccent: "#0d9488",
  },
  {
    id: "classic",
    name: "Classic",
    description:
      "Traditional layout with elegant serif typography and ruled lines",
    accentColor: "#1e293b",
    tag: "Timeless",
    previewBg: "#f8fafc",
    previewAccent: "#1e293b",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold color-block header with a dynamic two-column layout",
    accentColor: "#7c3aed",
    tag: "Bold",
    previewBg: "#faf5ff",
    previewAccent: "#7c3aed",
  },
  {
    id: "minimal",
    name: "Minimal",
    description:
      "Ultra-clean whitespace-forward design with refined small type",
    accentColor: "#0f172a",
    tag: "Clean",
    previewBg: "#ffffff",
    previewAccent: "#64748b",
  },
];
