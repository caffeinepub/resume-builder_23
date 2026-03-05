import type { TemplateConfig } from "../../data/templates";

interface TemplateCardPreviewProps {
  template: TemplateConfig;
}

export default function TemplateCardPreview({
  template,
}: TemplateCardPreviewProps) {
  switch (template.id) {
    case "modern":
      return (
        <ModernPreview
          accent={template.previewAccent}
          bg={template.previewBg}
        />
      );
    case "classic":
      return (
        <ClassicPreview
          accent={template.previewAccent}
          bg={template.previewBg}
        />
      );
    case "creative":
      return (
        <CreativePreview
          accent={template.previewAccent}
          bg={template.previewBg}
        />
      );
    case "minimal":
      return (
        <MinimalPreview
          accent={template.previewAccent}
          bg={template.previewBg}
        />
      );
    default:
      return null;
  }
}

function Bar({
  width,
  className,
  style,
}: { width?: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={className}
      style={{ ...style, ...(width ? { width } : {}) }}
    />
  );
}

function ModernPreview({ accent, bg }: { accent: string; bg: string }) {
  return (
    <div className="w-full h-full flex" style={{ background: bg }}>
      {/* Left sidebar */}
      <div
        className="w-[38%] h-full flex flex-col p-3 gap-2"
        style={{ background: accent }}
      >
        <div className="w-10 h-10 rounded-full bg-white/30 mx-auto mt-2 mb-1" />
        <div className="h-2 rounded-full bg-white/70 w-full" />
        <div className="h-1.5 rounded-full bg-white/40 w-4/5 mx-auto" />
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 rounded-full bg-white/50 w-full" />
          <div className="h-1 rounded-full bg-white/30 w-5/6" />
          <div className="h-1 rounded-full bg-white/30 w-4/6" />
        </div>
        <div className="mt-3 space-y-1">
          <div className="h-1 rounded-full bg-white/50 w-3/4" />
          <div className="h-1 rounded-full bg-white/30 w-2/3" />
          <div className="h-1 rounded-full bg-white/30 w-full" />
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          <Bar className="h-1.5 rounded-full bg-white/40" width="24px" />
          <Bar className="h-1.5 rounded-full bg-white/40" width="32px" />
          <Bar className="h-1.5 rounded-full bg-white/40" width="24px" />
        </div>
      </div>

      {/* Right content */}
      <div className="flex-1 p-3 space-y-3">
        <div>
          <div
            className="h-1.5 rounded-full w-16 mb-1.5"
            style={{ background: accent }}
          />
          <div className="h-1 rounded-full bg-gray-300 w-full mb-1" />
          <div className="h-1 rounded-full bg-gray-200 w-5/6 mb-1" />
          <div className="h-1 rounded-full bg-gray-200 w-4/6" />
        </div>
        <div>
          <div
            className="h-1.5 rounded-full w-16 mb-1.5"
            style={{ background: accent }}
          />
          <div className="space-y-2">
            <div>
              <div className="h-1.5 rounded-full bg-gray-400 w-3/4 mb-1" />
              <div className="h-1 rounded-full bg-gray-200 w-full mb-0.5" />
              <div className="h-1 rounded-full bg-gray-200 w-5/6" />
            </div>
            <div>
              <div className="h-1.5 rounded-full bg-gray-400 w-3/4 mb-1" />
              <div className="h-1 rounded-full bg-gray-200 w-full mb-0.5" />
              <div className="h-1 rounded-full bg-gray-200 w-5/6" />
            </div>
          </div>
        </div>
        <div>
          <div
            className="h-1.5 rounded-full w-16 mb-1.5"
            style={{ background: accent }}
          />
          <div className="h-1 rounded-full bg-gray-200 w-full mb-1" />
          <div className="h-1 rounded-full bg-gray-200 w-3/4" />
        </div>
      </div>
    </div>
  );
}

function ClassicPreview({ accent, bg }: { accent: string; bg: string }) {
  return (
    <div
      className="w-full h-full p-4 flex flex-col gap-2"
      style={{ background: bg }}
    >
      <div
        className="text-center pb-2"
        style={{ borderBottom: `1px solid ${accent}` }}
      >
        <div
          className="h-3 rounded-sm w-3/4 mx-auto mb-1.5"
          style={{ background: accent }}
        />
        <div className="h-1.5 rounded-full bg-gray-400 w-1/2 mx-auto mb-1" />
        <div className="h-1 rounded-full bg-gray-300 w-2/3 mx-auto" />
      </div>
      <div className="space-y-1 pt-1">
        <div
          className="h-1.5 rounded-sm w-20 mb-1.5"
          style={{ background: accent }}
        />
        <div className="h-1 rounded-full bg-gray-300 w-full" />
        <div className="h-1 rounded-full bg-gray-200 w-5/6" />
        <div className="h-1 rounded-full bg-gray-200 w-4/6" />
      </div>
      <div style={{ borderBottom: `0.5px solid ${accent}40`, marginTop: 2 }} />
      <div className="space-y-1.5">
        <div
          className="h-1.5 rounded-sm w-24 mb-1"
          style={{ background: accent }}
        />
        <div className="space-y-1">
          <div className="flex justify-between">
            <div className="h-1.5 rounded-full bg-gray-500 w-2/5" />
            <div className="h-1 rounded-full bg-gray-300 w-1/4" />
          </div>
          <div className="h-1 rounded-full bg-gray-400 w-1/3" />
          <div className="h-1 rounded-full bg-gray-200 w-full" />
          <div className="h-1 rounded-full bg-gray-200 w-4/5" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <div className="h-1.5 rounded-full bg-gray-500 w-2/5" />
            <div className="h-1 rounded-full bg-gray-300 w-1/4" />
          </div>
          <div className="h-1 rounded-full bg-gray-400 w-1/3" />
          <div className="h-1 rounded-full bg-gray-200 w-full" />
          <div className="h-1 rounded-full bg-gray-200 w-4/5" />
        </div>
      </div>
      <div style={{ borderBottom: `0.5px solid ${accent}40` }} />
      <div className="space-y-1">
        <div className="h-1.5 rounded-sm w-20" style={{ background: accent }} />
        <div className="h-1.5 rounded-full bg-gray-400 w-3/5" />
        <div className="h-1 rounded-full bg-gray-200 w-4/5" />
      </div>
    </div>
  );
}

function CreativePreview({ accent, bg }: { accent: string; bg: string }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: bg }}>
      <div className="p-4 pb-3" style={{ background: accent }}>
        <div className="h-4 rounded-sm w-3/5 bg-white/80 mb-1.5" />
        <div className="h-1.5 rounded-full bg-white/50 w-2/5 mb-2" />
        <div className="flex gap-2">
          <div className="h-1 rounded-full bg-white/40 w-16" />
          <div className="h-1 rounded-full bg-white/40 w-12" />
        </div>
      </div>
      <div className="flex flex-1">
        <div
          className="w-2/5 p-2 space-y-2"
          style={{ background: `${accent}15` }}
        >
          <div>
            <div
              className="h-1.5 rounded-sm w-full mb-1"
              style={{ background: accent, opacity: 0.7 }}
            />
            <div className="space-y-1">
              <div className="h-1 rounded-full bg-gray-300 w-10" />
              <div className="h-1 rounded-full bg-gray-300 w-8" />
              <div className="h-1 rounded-full bg-gray-300 w-10" />
              <div className="h-1 rounded-full bg-gray-300 w-8" />
            </div>
          </div>
          <div>
            <div
              className="h-1.5 rounded-sm w-full mb-1"
              style={{ background: accent, opacity: 0.7 }}
            />
            <div className="flex flex-wrap gap-1">
              <div
                className="h-1.5 rounded-full"
                style={{ width: "21px", background: accent, opacity: 0.4 }}
              />
              <div
                className="h-1.5 rounded-full"
                style={{ width: "28px", background: accent, opacity: 0.4 }}
              />
              <div
                className="h-1.5 rounded-full"
                style={{ width: "21px", background: accent, opacity: 0.4 }}
              />
              <div
                className="h-1.5 rounded-full"
                style={{ width: "21px", background: accent, opacity: 0.4 }}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 space-y-2">
          <div>
            <div
              className="h-1.5 rounded-sm w-16 mb-1"
              style={{ background: accent }}
            />
            <div className="space-y-0.5">
              <div className="h-1.5 rounded-full bg-gray-500 w-4/5" />
              <div className="h-1 rounded-full bg-gray-300 w-full" />
              <div className="h-1 rounded-full bg-gray-200 w-3/4" />
            </div>
          </div>
          <div>
            <div
              className="h-1.5 rounded-sm w-16 mb-1"
              style={{ background: accent }}
            />
            <div className="space-y-0.5">
              <div className="h-1.5 rounded-full bg-gray-500 w-3/4" />
              <div className="h-1 rounded-full bg-gray-300 w-full" />
              <div className="h-1 rounded-full bg-gray-200 w-3/5" />
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="h-1.5 rounded-full bg-gray-500 w-3/5" />
            <div className="h-1 rounded-full bg-gray-300 w-full" />
            <div className="h-1 rounded-full bg-gray-200 w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MinimalPreview({ accent, bg }: { accent: string; bg: string }) {
  return (
    <div
      className="w-full h-full p-5 flex flex-col gap-3"
      style={{ background: bg }}
    >
      <div>
        <div
          className="h-3 rounded-sm w-2/3 mb-1"
          style={{ background: accent }}
        />
        <div className="h-1.5 rounded-full bg-gray-300 w-2/5" />
      </div>
      <div className="h-px w-full" style={{ background: `${accent}25` }} />
      <div className="flex gap-2">
        <div className="h-1 rounded-full bg-gray-300 w-[30px]" />
        <div className="h-1 rounded-full bg-gray-300 w-[40px]" />
        <div className="h-1 rounded-full bg-gray-300 w-[30px]" />
      </div>
      <div className="space-y-1">
        <div className="h-1 rounded-full bg-gray-400 w-full" />
        <div className="h-1 rounded-full bg-gray-300 w-5/6" />
        <div className="h-1 rounded-full bg-gray-300 w-4/6" />
      </div>
      <div className="h-px w-full" style={{ background: `${accent}25` }} />
      <div className="space-y-2">
        <div
          className="h-1.5 rounded-sm w-24"
          style={{ background: accent, opacity: 0.5 }}
        />
        <div className="space-y-1">
          <div className="h-1.5 rounded-full bg-gray-500 w-2/3" />
          <div className="h-1 rounded-full bg-gray-300 w-full" />
          <div className="h-1 rounded-full bg-gray-200 w-4/5" />
        </div>
        <div className="space-y-1">
          <div className="h-1.5 rounded-full bg-gray-500 w-3/5" />
          <div className="h-1 rounded-full bg-gray-300 w-full" />
        </div>
      </div>
      <div className="h-px w-full" style={{ background: `${accent}25` }} />
      <div className="flex flex-wrap gap-1.5">
        <div
          className="h-1.5 rounded-full"
          style={{ width: "24px", background: `${accent}30` }}
        />
        <div
          className="h-1.5 rounded-full"
          style={{ width: "32px", background: `${accent}30` }}
        />
        <div
          className="h-1.5 rounded-full"
          style={{ width: "24px", background: `${accent}30` }}
        />
        <div
          className="h-1.5 rounded-full"
          style={{ width: "16px", background: `${accent}30` }}
        />
        <div
          className="h-1.5 rounded-full"
          style={{ width: "32px", background: `${accent}30` }}
        />
      </div>
    </div>
  );
}
