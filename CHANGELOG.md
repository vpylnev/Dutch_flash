# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2024-12-12

### 🎉 Major Update: Modular Data Structure

#### Added
- **Modular data architecture** - split monolithic `data.js` into 6 separate modules
- **`data-core.js`** - core structure with category definitions
- **`data-words-basic.js`** - basic vocabulary (75 cards)
- **`data-words-daily.js`** - daily life vocabulary (56 cards)
- **`data-words-extended.js`** - extended vocabulary (60 cards)
- **`data-weather-school.js`** - advanced weather vocabulary (30 cards)
- **`data-phrases-basic.js`** - basic phrases (50 cards)
- **`data-phrases-situational.js`** - situational phrases (66 cards)
- **`DATA_STRUCTURE.md`** - comprehensive documentation on modular structure
- **`index-minimal-example.html`** - example of minimal configuration
- **`CHANGELOG.md`** - this file
- **New category**: "Погода (школа)" / "Weather (School)" with 30 advanced weather terms

#### Changed
- **index.html** - updated to load modular data files instead of single `data.js`
- **README.md** - updated with modular structure documentation
- **GUIDE_RU.md** - updated with modular structure documentation (Russian)
- **Total cards**: increased from 350 to 380+ flashcards
- **Total categories**: increased from 18 to 19 categories

#### Removed
- Monolithic `data.js` (preserved as `data.js.backup`)

#### Benefits
- ✅ Load only the categories you need
- ✅ Better organization and maintainability
- ✅ Easier collaboration (multiple people can edit different modules)
- ✅ Improved performance (optional loading)
- ✅ Scalable architecture

## [1.0.0] - 2024-12-11

### Initial Release

#### Features
- 350+ flashcards with Dutch words and phrases
- 18 categories (12 words + 6 phrases)
- Two learning modes (NL→RU and RU→NL)
- Audio pronunciation (Dutch only)
- 3-column layout (categories, flashcard, word list)
- Keyboard shortcuts (Space, Arrows, S/Ы, Enter)
- Shuffle mode
- Word list with 4 view modes
- Auto-pronunciation on card flip
- Responsive design
- Modern UI with smooth animations

#### Categories
**Words:**
- Greetings (20)
- Numbers (20)
- Colors (15)
- Family (20)
- Food & Drinks (25)
- Days of the Week (7)
- Months (12)
- Body Parts (15)
- Weather (12)
- Animals (15)
- Home (15)
- Emotions (15)

**Phrases:**
- Basic Phrases (30)
- Questions (20)
- Shopping (15)
- Restaurant (18)
- Travel (18)
- Work & Study (15)

---

## Version Numbering

This project uses [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible changes
- **MINOR** version for new features (backwards compatible)
- **PATCH** version for bug fixes (backwards compatible)










