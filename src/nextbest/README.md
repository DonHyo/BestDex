# NextBest Module

Goal: Suggest best next move each turn.

Files:
- core.ts: entry point, will call scorer.
- scorer.ts: scoring logic (currently placeholder).
- types.ts: MoveSuggestion type definition.
- index.ts: exports for easy import.

Next steps:
- Integrate with ShowDex UI.
- Replace Math.random() scoring with real calc (@smogon/calc).
- Show top 3 moves with KO chances in panel.