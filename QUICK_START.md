# 🚀 Quick Start Guide

## Instant Start

**Just open `index.html` in your browser!**

All modules are already loaded by default - 380+ flashcards ready to use.

## Configurations

### Option 1: Full Version (Default)
**380+ cards | 19 categories**

✅ Already configured in `index.html`  
✅ No changes needed - just open the file!

### Option 2: Basic Version
**~180 cards | 9 categories**

1. Open `data_wrapper.js` in a text editor
2. Find the `moduleConfig` object
3. Set unwanted modules to `false`:
```javascript
const moduleConfig = {
    'data-core.js': true,
    'data-words-basic.js': true,
    'data-words-daily.js': true,
    'data-words-extended.js': false,         // Disabled
    'data-weather-school.js': false,         // Disabled
    'data-phrases-basic.js': true,
    'data-phrases-situational.js': false     // Disabled
};
```
4. Save and refresh browser

### Option 3: Custom Selection

Edit `data_wrapper.js` and pick any combination:

```javascript
const moduleConfig = {
    'data-core.js': true,                    // Always required
    
    // Words - Choose any:
    'data-words-basic.js': true,             // Greetings, Numbers, Colors, Family
    'data-words-daily.js': false,            // Food, Days, Months, Weather
    'data-words-extended.js': true,          // Body, Animals, Home, Emotions
    'data-weather-school.js': false,         // Advanced weather terms
    
    // Phrases - Choose any:
    'data-phrases-basic.js': true,           // Common phrases, Questions
    'data-phrases-situational.js': false     // Shopping, Restaurant, Travel, Work
};
```

## Pre-Made Examples

### Full Configuration
Open: **`index.html`**

### Minimal Configuration  
Open: **`index-minimal-example.html`**

## Module Combinations

Edit `data_wrapper.js` with these configurations:

### Beginner Set (130 cards)
```javascript
const moduleConfig = {
    'data-core.js': true,
    'data-words-basic.js': true,
    'data-words-daily.js': true,
    'data-words-extended.js': false,
    'data-weather-school.js': false,
    'data-phrases-basic.js': false,
    'data-phrases-situational.js': false
};
```

### Conversational Set (116 cards)
```javascript
const moduleConfig = {
    'data-core.js': true,
    'data-words-basic.js': false,
    'data-words-daily.js': false,
    'data-words-extended.js': false,
    'data-weather-school.js': false,
    'data-phrases-basic.js': true,
    'data-phrases-situational.js': true
};
```

### Travel Ready (200 cards)
```javascript
const moduleConfig = {
    'data-core.js': true,
    'data-words-basic.js': true,
    'data-words-daily.js': true,
    'data-words-extended.js': false,
    'data-weather-school.js': false,
    'data-phrases-basic.js': false,
    'data-phrases-situational.js': true
};
```

### School Student (215 cards)
```javascript
const moduleConfig = {
    'data-core.js': true,
    'data-words-basic.js': true,
    'data-words-daily.js': true,
    'data-words-extended.js': false,
    'data-weather-school.js': true,
    'data-phrases-basic.js': true,
    'data-phrases-situational.js': false
};
```

## Performance

| Configuration | Cards | Load Time | Categories |
|--------------|-------|-----------|------------|
| Full | 380+ | ~50ms | 19 |
| Basic | ~180 | ~25ms | 9 |
| Minimal | ~130 | ~20ms | 7 |
| Custom | Varies | Varies | Varies |

## Keyboard Shortcuts

- **Space / Click** - Flip card
- **← →** - Previous / Next card
- **S / Ы** - Pronounce (Dutch)
- **Enter** - Next card
- **1-9** - (Future: Quick category switch)

## Learning Modes

### Dutch → Russian (Default)
- Card front: Dutch word/phrase
- Card back: Russian translation
- Pronunciation: Always Dutch

### Russian → Dutch
- Card front: Russian word/phrase
- Card back: Dutch translation
- Pronunciation: Dutch (when you flip/click Speak button)

## Tips

✅ **Start with basics** - data-words-basic.js + data-phrases-basic.js  
✅ **Progress gradually** - add modules as you improve  
✅ **Focus on needs** - traveling? Load travel phrases  
✅ **Use shuffle** - randomize for better retention  
✅ **Practice daily** - consistency beats cramming  

## Need Help?

- **Full Documentation**: See [`README.md`](README.md)
- **Russian Guide**: See [`GUIDE_RU.md`](GUIDE_RU.md)
- **Module Details**: See [`DATA_STRUCTURE.md`](DATA_STRUCTURE.md)
- **All Files**: See [`FILES.md`](FILES.md)

---

**Veel succes!** 🎓

