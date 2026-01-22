<!--
Author: Valentin Pylnev
Created: 2025-2026
-->

# 📂 Project Files Overview

## Core Application Files

### HTML
- **`index.html`** - Main application page (full version with all modules)
- **`index-minimal-example.html`** - Example minimal configuration (basic modules only)

### CSS
- **`style.css`** - All styles for the application (3-column layout, animations, responsive design)

### JavaScript

#### Main Script
- **`script.js`** - Main application logic (card flipping, navigation, pronunciation, filtering)

#### Data Files

##### Wrapper (Recommended)
- **`data_wrapper.js`** - Unified data loader
  - Loads all data modules automatically
  - Configurable module enable/disable
  - Simplifies HTML includes
  - **Load this instead of individual modules**

##### Core (Required)
- **`data-core.js`** - Core data structure
  - Defines `flashcardsData` array
  - Contains `categoryNames` object
  - Contains `categoryTypes` object
  - **Loaded automatically by data_wrapper.js**

##### Word Modules (Optional)
- **`data-words-basic.js`** - Basic vocabulary (75 cards)
  - Greetings (20 cards)
  - Numbers (20 cards)
  - Colors (15 cards)
  - Family (20 cards)

- **`data-words-daily.js`** - Daily life vocabulary (56 cards)
  - Food & Drinks (25 cards)
  - Days of the Week (7 cards)
  - Months (12 cards)
  - Weather (12 cards)

- **`data-words-extended.js`** - Extended vocabulary (60 cards)
  - Body Parts (15 cards)
  - Animals (15 cards)
  - Home (15 cards)
  - Emotions (15 cards)

- **`data-weather-school.js`** - Advanced weather vocabulary (30 cards)
  - Weather (School) - advanced terms for students

##### Phrase Modules (Optional)
- **`data-phrases-basic.js`** - Basic phrases (50 cards)
  - Common Phrases (30 cards)
  - Questions (20 cards)

- **`data-phrases-situational.js`** - Situational phrases (66 cards)
  - Shopping (15 cards)
  - Restaurant (18 cards)
  - Travel (18 cards)
  - Work & Study (15 cards)

## Documentation Files

- **`README.md`** - Main project documentation (English)
- **`GUIDE_RU.md`** - User guide in Russian
- **`DATA_STRUCTURE.md`** - Detailed documentation on modular data structure
- **`CHANGELOG.md`** - Version history and changes
- **`FILES.md`** - This file (project structure overview)

## Backup Files

- **`data.js.backup`** - Original monolithic data file (preserved for reference)

## Additional Files

- **`1-da8f9bf1399a4ba99e27f245e9d1f896.pdf`** - Source PDF with weather vocabulary

## File Loading Order

### Recommended (Simplified)

```html
<!-- 1. Data wrapper (loads all modules automatically) -->
<script src="data_wrapper.js"></script>

<!-- 2. Main script (required, must be last) -->
<script src="script.js"></script>
```

### Alternative (Manual Loading)

If you prefer to load modules manually:

```html
<!-- 1. Core (required) -->
<script src="data-core.js"></script>

<!-- 2. Data modules (optional, in any order) -->
<script src="data-words-basic.js"></script>
<script src="data-words-daily.js"></script>
<script src="data-words-extended.js"></script>
<script src="data-weather-school.js"></script>
<script src="data-phrases-basic.js"></script>
<script src="data-phrases-situational.js"></script>

<!-- 3. Main script (required, must be last) -->
<script src="script.js"></script>
```

## Total Statistics

- **Total Files**: 17 active files (+ 2 backup/docs)
- **Total Cards**: 380+ flashcards
- **Total Categories**: 19 categories
- **Lines of Code**: ~3200+ lines (excluding documentation)

## File Dependencies

### Current Structure (Simplified)
```
index.html
├── style.css
├── data_wrapper.js (loads all modules)
│   ├── data-core.js (required)
│   ├── data-words-*.js (optional)
│   └── data-phrases-*.js (optional)
└── script.js (required, depends on data files)
```

### Alternative Structure (Manual)
```
index.html
├── style.css
├── data-core.js (required)
├── data-words-*.js (optional)
├── data-phrases-*.js (optional)
└── script.js (required, depends on data files)
```

## Modifying the Project

### To add vocabulary:
1. Choose appropriate module or create new one
2. Add cards to `flashcardsData.push(...)`
3. Reload page

### To add category:
1. Edit `data-core.js` (add to `categoryNames` and `categoryTypes`)
2. Create data file with cards
3. Include in `index.html`

### To customize UI:
1. Edit `style.css` for visual changes
2. Edit `script.js` for behavior changes
3. Edit `index.html` for structure changes

## Browser Requirements

- Modern browser with ES6+ support
- Web Speech API support for pronunciation
- No server required (static files)

