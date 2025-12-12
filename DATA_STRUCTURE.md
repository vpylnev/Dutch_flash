# 📁 Data Structure - Modular Design

## Overview

The flashcard data has been split into multiple modular files for better organization and maintainability. Each file can be enabled or disabled independently in `index.html`.

## File Structure

### 🔧 Core File (Required)

**`data-core.js`**
- **Must be loaded first**
- Defines the global `flashcardsData` array
- Contains category names (`categoryNames` object)
- Contains category types (`categoryTypes` object)

### 📚 Data Modules (Optional)

You can include or exclude any of these modules in `index.html`:

#### Basic Words
**`data-words-basic.js`** (75 cards)
- Приветствия (Greetings) - 20 cards
- Числа (Numbers) - 20 cards
- Цвета (Colors) - 15 cards
- Семья (Family) - 20 cards

#### Daily Life Words
**`data-words-daily.js`** (56 cards)
- Еда и напитки (Food) - 25 cards
- Дни недели (Days) - 7 cards
- Месяцы (Months) - 12 cards
- Погода (Weather) - 12 cards

#### Extended Words
**`data-words-extended.js`** (60 cards)
- Части тела (Body) - 15 cards
- Животные (Animals) - 15 cards
- Дом (Home) - 15 cards
- Эмоции (Emotions) - 15 cards

#### Advanced Weather
**`data-weather-school.js`** (30 cards)
- Погода (школа) - 30 cards
- Advanced weather vocabulary for school level

#### Basic Phrases
**`data-phrases-basic.js`** (50 cards)
- Базовые фразы (Common Phrases) - 30 cards
- Вопросы (Questions) - 20 cards

#### Situational Phrases
**`data-phrases-situational.js`** (66 cards)
- В магазине (Shopping) - 15 cards
- В ресторане (Restaurant) - 18 cards
- Путешествия (Travel) - 18 cards
- Работа и учёба (Work & Study) - 15 cards

## Total Statistics

- **Total Cards**: 380+ flashcards
- **Total Categories**: 19 categories
- **Word Categories**: 13
- **Phrase Categories**: 6

## How to Use

### Enable All Modules (Default)

In `index.html`, all modules are loaded via `data_wrapper.js`:

```html
<script src="data_wrapper.js"></script>
<script src="script.js"></script>
```

The `data_wrapper.js` file automatically loads all data modules in the correct order.

### Enable Only Basic Vocabulary

Edit `data_wrapper.js` and set modules to `false`:

```javascript
const moduleConfig = {
    'data-core.js': true,                    // Required - always true
    'data-words-basic.js': true,             // Enable
    'data-words-daily.js': true,             // Enable
    'data-words-extended.js': false,         // Disable
    'data-weather-school.js': false,         // Disable
    'data-phrases-basic.js': true,           // Enable
    'data-phrases-situational.js': false     // Disable
};
```

### Create Custom Learning Sets

Edit `data_wrapper.js` to enable only the modules you want:

```javascript
const moduleConfig = {
    'data-core.js': true,
    'data-words-basic.js': true,             // Only basics
    'data-words-daily.js': false,
    'data-words-extended.js': false,
    'data-weather-school.js': false,
    'data-phrases-basic.js': true,           // Only basic phrases
    'data-phrases-situational.js': false
};
```

## Adding New Categories

### Option 1: Add to Existing Module

Open the appropriate data file (e.g., `data-words-basic.js`) and add new cards:

```javascript
flashcardsData.push(
    { dutch: "nieuw woord", russian: "новое слово", category: "greetings", example: "new word" }
);
```

### Option 2: Create New Module

1. Create a new file (e.g., `data-words-sports.js`)
2. Add new category to `data-core.js`:

```javascript
const categoryNames = {
    // ... existing categories
    sports: "Спорт"
};

const categoryTypes = {
    words: ['greetings', ..., 'sports'],  // Add to words
    phrases: [...]
};
```

3. Create the new data file:

```javascript
// data-words-sports.js
flashcardsData.push(
    { dutch: "voetbal", russian: "футбол", category: "sports", example: "football" },
    // ... more cards
);
```

4. Add to `index.html`:

```html
<script src="data-core.js"></script>
<!-- ... existing modules ... -->
<script src="data-words-sports.js"></script>
<script src="script.js"></script>
```

## Benefits of Modular Structure

✅ **Easy to maintain** - Each category in its own logical group  
✅ **Flexible loading** - Enable only what you need  
✅ **Better organization** - Clear file naming  
✅ **Collaborative** - Multiple people can work on different modules  
✅ **Performance** - Load only required data  
✅ **Scalable** - Easy to add 100s more categories

## Migration Notes

The old `data.js` file has been replaced with this modular structure. All 380+ cards are preserved across the new modules.

If you need to revert to the old structure, you can combine all module files back into a single `data.js` file.

