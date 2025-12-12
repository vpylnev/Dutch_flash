# 🇳🇱 Dutch Flashcards - Learn Dutch A1-A2

A beautiful, modern web-based flashcard application for learning Dutch language at A1-A2 level with enhanced features.

## ✨ Key Features

- 📚 **380+ Flashcards** with Dutch words and phrases (massively expanded!)
- 📦 **Modular data structure** - load only the categories you need (see below)
- 🔄 **Interactive flip animation** - click to reveal translation
- 🔊 **Audio pronunciation** - hear correct Dutch pronunciation (auto-plays on flip)
- 🎯 **Two learning modes**: Dutch → Russian OR Russian → Dutch
- 📋 **19 Categories** divided into:
  - 📖 **13 Word Categories**: Greetings, Numbers, Colors, Family, Food, Days, Months, Body Parts, Weather, Weather (School), Animals, Home, Emotions
  - 💬 **6 Phrase Categories**: Basic Phrases, Questions, Shopping, Restaurant, Travel, Work & Study
- 🗂️ **Organized sidebar** - categories grouped by type
- 📝 **Word list panel** - see all words with multiple view modes
- 🔀 **Shuffle mode** - randomize cards for better learning
- ⌨️ **Keyboard shortcuts** for efficient navigation (including Russian layout)
- 📱 **Responsive design** - works on desktop and mobile
- 🎨 **Modern 3-column layout** with smooth animations

## How to Use

### Opening the App

1. Simply open `index.html` in your web browser
2. No installation or server required!

### Navigation

- **Click on card** - flip to see translation
- **Next/Previous buttons** - navigate between cards (card shows front side)
- **Shuffle button** - randomize card order
- **🔊 button** - hear pronunciation (always in Dutch)
- **Left sidebar** - click category to filter cards
- **Right sidebar** - click word to jump to it
- **Mode switcher** (🇳🇱 → 🇷🇺 / 🇷🇺 → 🇳🇱) - change learning direction

### Word List Panel (Right Sidebar)

The word list has 4 view modes:
- **🇳🇱🇷🇺** - Show both Dutch and Russian
- **🇳🇱** - Show only Dutch (test yourself!)
- **🇷🇺** - Show only Russian
- **👁️** - Hide the list completely

### Keyboard Shortcuts

- `Space` - flip card
- `←` - previous card
- `→` or `Enter` - next card (shows front side, not flipped)
- `S` or `Ы` - speak (pronounce) - works with both English and Russian keyboard layout

## Categories (350+ cards total)

### 📖 Word Categories (191 cards)

**Greetings (20 cards)** - Basic greetings, farewells, and polite expressions  
**Numbers (20 cards)** - Numbers from 0 to 1,000,000  
**Colors (15 cards)** - Essential color vocabulary including light/dark variations  
**Family (20 cards)** - Family member terms including extended family  
**Food (25 cards)** - Common food, drinks, and cooking ingredients  
**Days of the Week (7 cards)** - All days from Monday to Sunday  
**Months (12 cards)** - All 12 months of the year  
**Body Parts (15 cards)** - Essential body vocabulary  
**Weather (12 cards)** - Weather conditions and descriptions  
**Animals (15 cards)** - Common animals and pets  
**Home (15 cards)** - House rooms and furniture  
**Emotions (15 cards)** - Feelings and emotional states

### 💬 Phrase Categories (116 cards)

**Basic Phrases (30 cards)** - Useful everyday phrases for conversations  
**Questions (20 cards)** - Essential question words and common questions  
**Shopping (15 cards)** - Phrases for stores and buying things  
**Restaurant (18 cards)** - Ordering food and dining out  
**Travel (18 cards)** - Transportation, hotels, and getting around  
**Work & Study (15 cards)** - Office and school vocabulary

## Technical Details

### Files Structure

```
flash_dutch/
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # Application logic
├── data.js             # Flashcard data
└── README.md           # Documentation
```

### Technologies Used

- **HTML5** - structure
- **CSS3** - styling and animations
- **Vanilla JavaScript** - no frameworks needed
- **Web Speech API** - for pronunciation

### Browser Compatibility

- Chrome/Edge - ✅ Full support
- Firefox - ✅ Full support
- Safari - ✅ Full support
- Opera - ✅ Full support

**Note**: Speech synthesis requires internet connection for some browsers.

## Learning Tips

1. **Start with categories** - focus on one topic at a time using the left sidebar
2. **Use both modes** - practice 🇳🇱 → 🇷🇺 and 🇷🇺 → 🇳🇱 for better retention
3. **Hide translations** - use the word list panel to test yourself (show only one language)
4. **Listen actively** - press S or С to hear pronunciation (works in Russian layout!)
5. **Use shuffle mode** - after learning a category, shuffle to test yourself randomly
6. **Navigate efficiently** - use arrow keys to move through cards quickly
7. **Practice daily** - consistency is key for language learning
8. **Repeat out loud** - say the words after hearing them

## 📁 Modular Data Structure

### File Organization

The flashcard data is now split into modular files for better organization and maintainability:

#### Required Core
- **`data-core.js`** - Core structure with category definitions (always load first!)

#### Optional Data Modules
- **`data-words-basic.js`** - Greetings, Numbers, Colors, Family (75 cards)
- **`data-words-daily.js`** - Food, Days, Months, Weather (56 cards)
- **`data-words-extended.js`** - Body, Animals, Home, Emotions (60 cards)
- **`data-weather-school.js`** - Advanced weather vocabulary (30 cards)
- **`data-phrases-basic.js`** - Common Phrases, Questions (50 cards)
- **`data-phrases-situational.js`** - Shopping, Restaurant, Travel, Work (66 cards)

### Loading Modules

In `index.html`, all modules are loaded via a single wrapper:

```html
<!-- Loads all data modules automatically -->
<script src="data_wrapper.js"></script>

<!-- Main application script -->
<script src="script.js"></script>
```

To enable/disable specific modules, edit `data_wrapper.js`:

```javascript
const moduleConfig = {
    'data-core.js': true,                    // Required
    'data-words-basic.js': true,             // Enable
    'data-words-daily.js': true,             // Enable
    'data-words-extended.js': false,         // Disable
    // ... etc
};
```

### Configuration Examples

- **Full version** (380+ cards) - all modules enabled
- **Basic version** (~180 cards) - only basic and daily modules
- **Phrases only** (~116 cards) - only phrases-* modules

See `index-minimal-example.html` for a minimal configuration example.

Full documentation in [`DATA_STRUCTURE.md`](DATA_STRUCTURE.md)

## Customization

### Adding More Cards

Edit the appropriate data module (e.g., `data-words-basic.js`) and add to `flashcardsData`:

```javascript
flashcardsData.push(
    { dutch: "Your Dutch word", russian: "Russian translation", category: "greetings", example: "info" }
);
```

### Creating New Categories

1. Edit `data-core.js` and add to `categoryNames` and `categoryTypes`:
```javascript
const categoryNames = {
    // ... existing categories
    sports: "Sports"
};

const categoryTypes = {
    words: ['greetings', ..., 'sports'],
    phrases: [...]
};
```

2. Create new data file (e.g., `data-words-sports.js`):
```javascript
flashcardsData.push(
    { dutch: "voetbal", russian: "футбол", category: "sports", example: "football" }
);
```

3. Load it in `index.html`:
```html
<script src="data-words-sports.js"></script>
```

### Changing Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Recent Updates (v3.0)

- ✅ **350+ cards** - massively expanded from 200 to 350+ words and phrases!
- ✅ **18 categories** - organized into "Words" (12) and "Phrases" (6) sections
- ✅ **New phrase categories** - Questions, Shopping, Restaurant, Travel, Work & Study
- ✅ **New word categories** - Home, Emotions
- ✅ **Organized sidebar** - categories grouped by type with section headers
- ✅ **Auto-pronunciation** - card automatically speaks when flipped
- ✅ **Improved navigation** - smooth transitions without flickering
- ✅ **Bidirectional learning** - Dutch → Russian AND Russian → Dutch
- ✅ **Russian keyboard support** - press Ы for pronunciation
- ✅ **3-column layout** - categories sidebar, main card, word list panel
- ✅ **Word list views** - show both, one, or hide completely

## Future Enhancements

- [ ] Progress tracking with localStorage
- [ ] "Know"/"Don't know" buttons with statistics
- [ ] Spaced repetition algorithm
- [ ] User-created custom decks
- [ ] Export/import functionality
- [ ] Dark mode toggle
- [ ] More language pairs (English-Dutch, etc.)
- [ ] Quiz mode with multiple choice
- [ ] Typing practice mode

## License

Free to use for personal and educational purposes.

## Credits

Created for Dutch language learners at A1-A2 level.

---

**Veel succes met leren!** (Good luck with learning!)

