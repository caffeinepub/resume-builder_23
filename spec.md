# Resume Builder

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Resume builder app with Canva-like UI aesthetic
- Dark/Light theme toggle (no login required)
- 4+ premade resume templates (Modern, Classic, Creative, Minimal)
- Resume editor with sections: Personal Info, Work Experience, Education, Skills, Summary
- Live preview panel showing resume as it's being edited
- Template selector with visual previews
- Download/Export button (print-friendly view)
- Persistent state via localStorage (no backend login needed)

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: store resume data, templates metadata, and support resume CRUD operations (anonymous sessions via generated IDs)
2. Frontend:
   - Landing page with template gallery (Canva-style grid)
   - Resume editor layout: left sidebar (form inputs) + right panel (live preview)
   - Theme toggle in top nav (dark/light)
   - Template switching within editor
   - Section editors: Personal Info, Summary, Work Experience, Education, Skills
   - Print/export functionality
   - Responsive design
