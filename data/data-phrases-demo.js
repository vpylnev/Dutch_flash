/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */
// Demo phrases - sample entries
// Load after data-core.js

flashcardsData.push(
    { dutch: "phrase1", russian: "фраза1", english: "phrase1", category: "demo_phrases", example: "phrase1 - фраза1" },
    { dutch: "phrase2", russian: "фраза2", english: "phrase2", category: "demo_phrases", example: "phrase2 - фраза2" },
    { dutch: "phrase3", russian: "фраза3", english: "phrase3", category: "demo_phrases", example: "phrase3 - фраза3" }
);

// #region agent log
fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'data-phrases-demo.js',message:'Demo phrases loaded',data:{count:3},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H2'})}).catch(()=>{});
// #endregion

