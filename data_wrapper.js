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
        'data-core.js',                    // Core structure (must be first)
        'data-words-basic.js',             // Basic words
        'data-words-daily.js',             // Daily life words
        'data-words-extended.js',          // Extended words
        'data-words-shopping.js',          // Shopping vocabulary (from textbook)
        'data-weather-school.js',          // Weather (school)
        'data-phrases-basic.js',           // Basic phrases
        'data-phrases-modal.js',           // Modal verbs phrases
        'data-phrases-holidays.js',        // Christmas and New Year
        'data-phrases-situational.js'      // Situational phrases
    ];
    
    /**
     * Configuration: Enable/Disable modules
     * Set to false to skip loading a module
     */
    const moduleConfig = {
        'data-core.js': true,                    // Required - always true
        'data-words-basic.js': true,             // Greetings, Numbers, Colors, Family
        'data-words-daily.js': true,             // Food, Days, Months, Weather
        'data-words-extended.js': true,          // Body, Animals, Home, Emotions
        'data-words-shopping.js': true,          // Shopping vocabulary from textbook (winkels en producten)
        'data-weather-school.js': true,          // Advanced weather vocabulary
        'data-phrases-basic.js': true,           // Common Phrases, Questions
        'data-phrases-modal.js': true,           // Modal verbs (kunnen, mogen, moeten, willen, zullen)
        'data-phrases-holidays.js': true,        // Christmas and New Year phrases
        'data-phrases-situational.js': true      // Shopping, Restaurant, Travel, Work
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







