/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */
// Demo words - sample entries
// Load after data-core.js

flashcardsData.push(
    { dutch: "word1", russian: "слово1", english: "word1", category: "demo_words", example: "word1 - слово1" },
    { dutch: "word2", russian: "слово2", english: "word2", category: "demo_words", example: "word2 - слово2" },
    { dutch: "word3", russian: "слово3", english: "word3", category: "demo_words", example: "word3 - слово3" },
    { dutch: "word4", russian: "слово4", english: "word4", category: "demo_words", example: "word4 - слово4" },
    { dutch: "word5", russian: "слово5", english: "word5", category: "demo_words", example: "word5 - слово5" }
);

// #region agent log
fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'data-words-demo.js',message:'Demo words loaded',data:{count:5},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H1'})}).catch(()=>{});
// #endregion

