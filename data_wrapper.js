/*
 * Author: Valentin Pylnev
 * Created: 2025-2026
 */

/**
 * Data Wrapper - Unified data loader for Dutch Flashcards
 * 
 * This file loads all data modules in the correct order.
 * Simply include this file in index.html instead of loading each module separately.
 * 
 * Usage in HTML:
 * <script src="data_wrapper.js"></script>
 * <script src="script.js"></script>
 */

(function() {
    'use strict';
    
    // List of data modules to load in order
    const dataModules = [
        'data/data-core.js',                    // Core structure (must be first)
        'data/data-words-basic.js',             // Basic words
        'data/data-words-daily.js',             // Daily life words
        'data/data-words-extended.js',          // Extended words
        'data/data-words-demo.js',              // Demo words
        'data/data-words-clothing.js',          // Clothing vocabulary
        'data/data-words-shopping1.js',         // Shopping vocabulary part 1 (textbook)
        'data/data-words-shopping2.js',         // Shopping vocabulary part 2 (textbook)
        'data/data-words-shopping3.js',         // Shopping vocabulary part 3 (textbook)
        'data/data-weather-school.js',          // Weather (school)
        'data/data-phrases-basic.js',           // Basic phrases
        'data/data-phrases-questions-wh.js',    // Wh-questions (Wat, Wie, Waar, etc.)
        'data/data-phrases-modal.js',           // Modal verbs phrases
        'data/data-phrases-negation.js',        // Negation phrases (geen/niet)
        'data/data-phrases-demo.js',            // Demo phrases
        'data/data-phrases-holidays.js',        // Christmas and New Year
        'data/data-phrases-shopping-textbook.js', // Shopping phrases (textbook)
        'data/data-phrases-shopping-textbook-2.js', // Shopping phrases (textbook) part 2
        'data/data-phrases-textbook-verbs.js', // Verb pairs and particles (textbook)
        'data/data-phrases-food-price.js',      // Food adjectives and price phrases (textbook)
        'data/data-phrases-situational.js',      // Situational phrases
    ];
    
    /**
     * Configuration: Enable/Disable modules
     * Set to false to skip loading a module
     */
    const moduleConfig = {
        'data/data-core.js': true,                    // Required - always true
        'data/data-words-basic.js': true,             // Greetings, Numbers, Colors, Family
        'data/data-words-daily.js': true,             // Food, Days, Months, Weather
        'data/data-words-extended.js': true,          // Body, Animals, Home, Emotions
        'data/data-words-demo.js': true,              // Demo words
        'data/data-words-clothing.js': true,          // Clothing vocabulary
        'data/data-words-shopping1.js': true,         // Shopping vocabulary part 1 (shops, meat, bread)
        'data/data-words-shopping2.js': true,         // Shopping vocabulary part 2 (vegetables, fruits, dairy)
        'data/data-words-shopping3.js': true,         // Shopping vocabulary part 3 (poultry, alcohol, supermarket)
        'data/data-weather-school.js': true,          // Advanced weather vocabulary
        'data/data-phrases-basic.js': true,           // Common Phrases, Questions
        'data/data-phrases-questions-wh.js': true,    // Wh-questions (Wat, Wie, Waar, Wanneer, Hoe, Waarom, etc.)
        'data/data-phrases-modal.js': true,           // Modal verbs (kunnen, mogen, moeten, willen, zullen)
        'data/data-phrases-negation.js': true,        // Negation phrases (geen/niet)
        'data/data-phrases-demo.js': true,            // Demo phrases
        'data/data-phrases-holidays.js': true,        // Christmas and New Year phrases
        'data/data-phrases-shopping-textbook.js': true, // Shopping phrases from textbook
        'data/data-phrases-shopping-textbook-2.js': true, // Shopping phrases from textbook (part 2)
        'data/data-phrases-textbook-verbs.js': true,  // Verb pairs and particles (textbook)
        'data/data-phrases-food-price.js': true,      // Food adjectives and price phrases
        'data/data-phrases-situational.js': true,      // Shopping, Restaurant, Travel, Work
    };
    
    /**
     * Load a script synchronously
     * @param {string} src - Script source path
     */
    function loadScriptSync(src) {
        if (!moduleConfig[src]) {
            console.log(`[Data Wrapper] Skipping module: ${src}`);
            return;
        }
        
        console.log(`[Data Wrapper] Loading module: ${src}`);
        
        // Use document.write for synchronous loading
        // This ensures scripts load in order and execute before the next one
        document.write('<script src="' + src + '"><\/script>');
    }
    
    /**
     * Load all data modules
     */
    function loadAllModules() {
        console.log('[Data Wrapper] Starting to load data modules...');
        
        dataModules.forEach(function(module) {
            loadScriptSync(module);
        });
        
        console.log('[Data Wrapper] All enabled modules loaded.');
    }
    
    // Start loading modules
    loadAllModules();
    
})();







