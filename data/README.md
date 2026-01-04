# Data Files Directory

This directory contains all vocabulary and phrase data files for the Dutch Flashcards application.

## File Structure

### Core
- `data-core.js` - Core data structure (flashcardsData, categoryNames, categoryTypes) - **must load first**

### Words (Vocabulary)
- `data-words-basic.js` - Basic words (greetings, numbers, colors, family)
- `data-words-daily.js` - Daily life words (food, days, months, weather)
- `data-words-extended.js` - Extended words (body parts, animals, home, emotions)
- `data-words-shopping1.js` - Shopping vocabulary part 1 (shops, meat, bread)
- `data-words-shopping2.js` - Shopping vocabulary part 2 (vegetables, fruits, dairy)
- `data-words-shopping3.js` - Shopping vocabulary part 3 (poultry, alcohol, supermarket)
- `data-weather-school.js` - Advanced weather vocabulary (from school materials)

### Phrases
- `data-phrases-basic.js` - Basic phrases (common expressions, questions)
- `data-phrases-questions-wh.js` - Wh-questions (Wat, Wie, Waar, Wanneer, Hoe, Waarom)
- `data-phrases-modal.js` - Modal verb phrases (kunnen, mogen, moeten, willen, zullen)
- `data-phrases-holidays.js` - Christmas and New Year themed phrases
- `data-phrases-shopping-textbook.js` - Shopping phrases from textbook
- `data-phrases-situational.js` - Situational phrases (shopping, restaurant, travel, work)

## Loading Order

All files are loaded through `data_wrapper.js` in the parent directory, which ensures proper loading order and allows enabling/disabling individual modules.

## Adding New Data

When adding new vocabulary or phrases:

1. Create a new file following the naming convention: `data-words-*.js` or `data-phrases-*.js`
2. Follow the structure from existing files
3. Add the file to `dataModules` array in `data_wrapper.js`
4. Add the configuration entry to `moduleConfig` in `data_wrapper.js`
5. Update `data-core.js` with new category names and types if needed

## File Format

Each file should:
- Append to the `flashcardsData` array
- Use proper category IDs from `data-core.js`
- Include Dutch word/phrase, Russian translation, and optional example

