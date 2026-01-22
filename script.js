// Flashcard application logic
class FlashcardApp {
    constructor() {
        this.allCards = [...flashcardsData];
        this.cards = [...flashcardsData];
        this.currentIndex = 0;
        this.currentCategory = 'all';
        this.isFlipped = false;
        this.mode = 'nl-ru'; // 'nl-ru' or 'ru-nl'
        this.wordListView = 'dutch'; // 'both', 'dutch', 'russian', 'hidden' - default to learning language
        this.interfaceLang = localStorage.getItem('interfaceLang') || 'ru'; // 'ru' or 'en'
        this.wordSearchQuery = '';
        
        this.initElements();
        this.initEventListeners();
        this.applyTranslations(); // Apply UI translations
        this.renderCategories();
        this.updateCard();
        this.updateStats();
        this.updateWordList();
        this.updateWordListView(); // Apply default view
    }

    initElements() {
        // Card elements
        this.flashcard = document.getElementById('flashcard');
        this.frontWord = document.getElementById('front-word');
        this.backWord = document.getElementById('back-word');
        this.frontLabel = document.getElementById('front-label');
        this.backLabel = document.getElementById('back-label');
        this.example = document.getElementById('example');
        
        // Stats elements
        this.currentCardEl = document.getElementById('current-card');
        this.totalCardsEl = document.getElementById('total-cards');
        this.currentCategoryEl = document.getElementById('current-category');
        
        // Navigation
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.shuffleBtn = document.getElementById('shuffle-btn');
        this.speakBtn = document.getElementById('speak-btn');
        this.speakSlowBtn = document.getElementById('speak-slow-btn');
        
        // Sidebars
        this.categoriesList = document.getElementById('categories-list');
        this.wordsList = document.getElementById('words-list');
        this.wordSearchInput = document.getElementById('word-search');
        
        // Mode switcher
        this.modeBtns = document.querySelectorAll('.mode-btn');
        
        // Language switcher
        this.langBtns = document.querySelectorAll('.lang-btn');
        
        // Word list controls
        this.listControlBtns = document.querySelectorAll('.list-control-btn');
        
        // Mobile menu elements
        this.toggleCategoriesBtn = document.getElementById('toggle-categories');
        this.toggleWordsBtn = document.getElementById('toggle-words');
        this.toggleSoundBtn = document.getElementById('toggle-sound');
        this.toggleSoundDesktopBtn = document.getElementById('toggle-sound-desktop');
        this.closeCategoriesBtn = document.getElementById('close-categories');
        this.closeWordsBtn = document.getElementById('close-words');
        this.sidebarLeft = document.getElementById('sidebar-left');
        this.sidebarRight = document.getElementById('sidebar-right');
        this.mobileOverlay = document.getElementById('mobile-overlay');
        
        // Sound state
        this.isSoundMuted = localStorage.getItem('soundMuted') === 'true';
        
        // Force mobile layout with JavaScript on small screens
        this.forceMobileLayout();

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:initElements',message:'Word search input presence',data:{hasInput:!!this.wordSearchInput},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H1'})}).catch(()=>{});
        // #endregion

        // #region agent log
        const langBtnTexts = Array.from(this.langBtns || []).map(btn => ({text:btn.textContent.trim(),lang:btn.dataset.lang}));
        fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:initElements',message:'Language buttons detected',data:{count:(this.langBtns||[]).length,langBtnTexts,isMobile:window.innerWidth<=768},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H4'})}).catch(()=>{});
        // #endregion

        // #region agent log
        const listControlTexts = Array.from(this.listControlBtns || []).map(btn => ({view:btn.dataset.view,text:btn.textContent.trim(),title:btn.title}));
        fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:initElements',message:'List control buttons detected',data:{count:(this.listControlBtns||[]).length,listControlTexts,isMobile:window.innerWidth<=768},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H7'})}).catch(()=>{});
        // #endregion
    }
    
    forceMobileLayout() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Force mobile styles with JavaScript - multiple approaches for compatibility
            if (this.sidebarLeft) {
                // Remove from normal flow
                this.sidebarLeft.style.setProperty('position', 'fixed', 'important');
                this.sidebarLeft.style.setProperty('top', '0', 'important');
                this.sidebarLeft.style.setProperty('bottom', '0', 'important');
                this.sidebarLeft.style.setProperty('left', '0', 'important');
                this.sidebarLeft.style.setProperty('width', '85%', 'important');
                this.sidebarLeft.style.setProperty('max-width', '320px', 'important');
                this.sidebarLeft.style.setProperty('z-index', '999', 'important');
                
                // Hide off-screen - try multiple methods
                this.sidebarLeft.style.setProperty('transform', 'translateX(-100%)', 'important');
                this.sidebarLeft.style.setProperty('-webkit-transform', 'translateX(-100%)', 'important');
                this.sidebarLeft.style.setProperty('transition', 'transform 0.3s ease', 'important');
                this.sidebarLeft.style.setProperty('-webkit-transition', '-webkit-transform 0.3s ease', 'important');
                
                // Ensure it's not taking space
                this.sidebarLeft.classList.remove('active');
            }
            
            if (this.sidebarRight) {
                // Remove from normal flow
                this.sidebarRight.style.setProperty('position', 'fixed', 'important');
                this.sidebarRight.style.setProperty('top', '0', 'important');
                this.sidebarRight.style.setProperty('bottom', '0', 'important');
                this.sidebarRight.style.setProperty('right', '0', 'important');
                this.sidebarRight.style.setProperty('left', 'auto', 'important');
                this.sidebarRight.style.setProperty('width', '85%', 'important');
                this.sidebarRight.style.setProperty('max-width', '320px', 'important');
                this.sidebarRight.style.setProperty('z-index', '999', 'important');
                
                // Hide off-screen - try multiple methods
                this.sidebarRight.style.setProperty('transform', 'translateX(100%)', 'important');
                this.sidebarRight.style.setProperty('-webkit-transform', 'translateX(100%)', 'important');
                this.sidebarRight.style.setProperty('transition', 'transform 0.3s ease', 'important');
                this.sidebarRight.style.setProperty('-webkit-transition', '-webkit-transform 0.3s ease', 'important');
                
                // Ensure it's not taking space
                this.sidebarRight.classList.remove('active');
            }
            
            // Fix app container for single column
            const appContainer = document.querySelector('.app-container');
            if (appContainer) {
                appContainer.style.setProperty('grid-template-columns', '1fr', 'important');
                appContainer.style.setProperty('grid-template-rows', '1fr', 'important');
            }
            
            // Show mobile menu buttons
            const mobileMenuButtons = document.querySelector('.mobile-menu-buttons');
            if (mobileMenuButtons) {
                mobileMenuButtons.style.display = 'flex';
            }
            
            // Show close buttons
            if (this.closeCategoriesBtn) {
                this.closeCategoriesBtn.style.display = 'block';
            }
            if (this.closeWordsBtn) {
                this.closeWordsBtn.style.display = 'block';
            }
        }
    }

    initEventListeners() {
        // Track mousedown position for drag detection
        this.mouseDownX = null;
        this.mouseDownY = null;
        
        // Card flip
        this.flashcard.addEventListener('mousedown', (e) => {
            this.mouseDownX = e.clientX;
            this.mouseDownY = e.clientY;
        });
        
        this.flashcard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('speak-btn')) {
                // Check if text is selected
                const selection = window.getSelection();
                const selectedText = selection.toString();
                
                // Check for drag (mouse moved during click)
                const mouseUpX = e.clientX;
                const mouseUpY = e.clientY;
                const dragThreshold = 5; // pixels
                const isDrag = this.mouseDownX !== null && 
                              (Math.abs(mouseUpX - this.mouseDownX) > dragThreshold || 
                               Math.abs(mouseUpY - this.mouseDownY) > dragThreshold);
                
                // Only flip if no text is selected and it's not a drag
                if (selectedText.length === 0 && !isDrag) {
                    this.flipCard();
                }
            }
        });

        // Navigation buttons
        this.prevBtn.addEventListener('click', () => this.previousCard());
        this.nextBtn.addEventListener('click', () => this.nextCard());
        this.shuffleBtn.addEventListener('click', () => this.shuffleCards());
        
        // Speak button
        this.speakBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.speak();
        });
        
        // Speak slow button
        this.speakSlowBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.speakSlow();
        });

        // Language switcher
        this.langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.interfaceLang = btn.dataset.lang;
                localStorage.setItem('interfaceLang', this.interfaceLang);

                // #region agent log
                fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:langSwitchClick',message:'Interface language changed',data:{lang:this.interfaceLang,isMobile:window.innerWidth<=768,btnText:btn.textContent.trim()},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H1'})}).catch(()=>{});
                // #endregion
                
                // Update all UI text
                this.applyTranslations();
                
                // Update mode buttons text
                this.updateModeButtons();
                
                // Refresh categories and word list
                this.renderCategories();
                this.updateCard();
                this.updateStats();
                this.updateWordList();
            });
        });
        
        // Initialize language buttons state
        this.langBtns.forEach(btn => {
            if (btn.dataset.lang === this.interfaceLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // #region agent log
        const activeLangBtn = Array.from(this.langBtns || []).find(btn => btn.classList.contains('active'));
        fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:initEventListeners',message:'Initial active language button',data:{activeLang:activeLangBtn ? activeLangBtn.dataset.lang : null,isMobile:window.innerWidth<=768},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H5'})}).catch(()=>{});
        // #endregion

        // #region agent log
        document.addEventListener('click', (e) => {
            const langBtn = e.target.closest ? e.target.closest('.lang-btn') : null;
            if (!langBtn) return;
            fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:langBtnDelegatedClick',message:'Language button click captured',data:{lang:langBtn.dataset.lang,isMobile:window.innerWidth<=768,text:langBtn.textContent.trim()},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H6'})}).catch(()=>{});
        });
        // #endregion

        // Mode switcher
        this.modeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.modeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.mode = btn.dataset.mode;
                
                // Reset flip state if card is flipped
                if (this.isFlipped) {
                    this.flashcard.classList.remove('flipped');
                    this.isFlipped = false;
                }
                
                // Auto-switch word list view to learning language
                if (this.wordListView === 'dutch' || this.wordListView === 'russian') {
                    if (this.mode === 'nl-ru') {
                        this.wordListView = 'dutch';
                        this.updateWordListButtons();
                    } else {
                        this.wordListView = 'russian';
                        this.updateWordListButtons();
                    }
                    this.updateWordListView();
                }
                
                this.updateCard();
            });
        });

        // Word list controls
        this.listControlBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.listControlBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.wordListView = btn.dataset.view;
                this.updateWordListView();
            });
        });

        if (this.wordSearchInput) {
            this.wordSearchInput.addEventListener('input', (e) => {
                this.wordSearchQuery = e.target.value || '';

                // #region agent log
                fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:wordSearchInput',message:'Word search input changed',data:{length:this.wordSearchQuery.length},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H3'})}).catch(()=>{});
                // #endregion

                this.updateWordList();
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ':
                    e.preventDefault();
                    this.flipCard();
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousCard();
                    break;
                case 'ArrowRight':
                case 'Enter':
                    e.preventDefault();
                    this.nextCard();
                    break;
                case 's':
                case 'S':
                case 'ы':
                case 'Ы':
                    this.speak();
                    break;
                case 'd':
                case 'D':
                case 'в':
                case 'В':
                    this.speakSlow();
                    break;
            }
        });
        
        // Mobile menu handlers
        if (this.toggleCategoriesBtn) {
            this.toggleCategoriesBtn.addEventListener('click', () => {
                this.openSidebar('left');
            });
        }
        
        if (this.toggleWordsBtn) {
            this.toggleWordsBtn.addEventListener('click', () => {
                this.openSidebar('right');
            });
        }
        
        if (this.toggleSoundBtn) {
            this.toggleSoundBtn.addEventListener('click', () => {
                this.toggleSound();
            });
        }
        
        if (this.toggleSoundDesktopBtn) {
            this.toggleSoundDesktopBtn.addEventListener('click', () => {
                this.toggleSound();
            });
        }
        
        // Initialize button state for both mobile and desktop
        this.updateSoundButton();
        
        if (this.closeCategoriesBtn) {
            this.closeCategoriesBtn.addEventListener('click', () => this.closeSidebar('left'));
        }
        
        if (this.closeWordsBtn) {
            this.closeWordsBtn.addEventListener('click', () => this.closeSidebar('right'));
        }
        
        if (this.mobileOverlay) {
            this.mobileOverlay.addEventListener('click', () => this.closeAllSidebars());
        }
        
        // Re-apply mobile layout on resize/orientation change
        window.addEventListener('resize', () => {
            this.forceMobileLayout();
        });
        window.addEventListener('orientationchange', () => {
            setTimeout(() => this.forceMobileLayout(), 100);
        });
    }

    renderCategories() {
        const t = translations[this.interfaceLang];
        
        // Count cards per category
        const categoryCounts = {};
        this.allCards.forEach(card => {
            categoryCounts[card.category] = (categoryCounts[card.category] || 0) + 1;
        });

        // Add "All" category
        let html = `
            <div class="category-item active" data-category="all">
                <span>${t.allCategory}</span>
                <span class="category-count">${this.allCards.length}</span>
            </div>
            <div class="category-section-title">📖 ${this.interfaceLang === 'ru' ? 'Слова' : 'Words'}</div>
        `;

        // Add word categories
        categoryTypes.words.forEach(category => {
            if (categoryCounts[category]) {
                const name = t[category] || categoryNames[category] || category;
                html += `
                    <div class="category-item" data-category="${category}">
                        <span>${name}</span>
                        <span class="category-count">${categoryCounts[category]}</span>
                    </div>
                `;
            }
        });

        // Add phrases section
        html += `<div class="category-section-title">${t.phrasesTitle}</div>`;

        // Add phrase categories
        categoryTypes.phrases.forEach(category => {
            if (categoryCounts[category]) {
                const name = t[category] || categoryNames[category] || category;
                html += `
                    <div class="category-item" data-category="${category}">
                        <span>${name}</span>
                        <span class="category-count">${categoryCounts[category]}</span>
                    </div>
                `;
            }
        });

        this.categoriesList.innerHTML = html;

        // Add click listeners
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                this.filterByCategory(item.dataset.category);
                // Close sidebar on mobile after selection
                this.closeSidebar('left');
            });
        });
    }

    updateWordList() {
        const t = translations[this.interfaceLang];

        if (this.cards.length === 0) {
            this.wordsList.innerHTML = `<div style="padding: 20px; text-align: center; opacity: 0.5;">${t.noWords}</div>`;
            return;
        }

        const query = (this.wordSearchQuery || '').trim().toLowerCase();
        const filteredCards = this.cards
            .map((card, index) => ({ card, index }))
            .filter(({ card }) => {
                if (!query) return true;
                const haystack = [
                    card.dutch,
                    card.russian,
                    card.english,
                    card.example
                ].filter(Boolean).join(' ').toLowerCase();
                return haystack.includes(query);
            });

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:updateWordList',message:'Word list filtering',data:{queryLength:query.length,total:this.cards.length,filtered:filteredCards.length},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H2'})}).catch(()=>{});
        // #endregion

        if (filteredCards.length === 0) {
            this.wordsList.innerHTML = `<div style="padding: 20px; text-align: center; opacity: 0.5;">${t.noMatches}</div>`;
            return;
        }

        let html = '';
        filteredCards.forEach(({ card, index }) => {
            const activeClass = index === this.currentIndex ? 'active' : '';
            const translation = this.getCurrentTranslation(card);
            html += `
                <div class="word-list-item ${activeClass}" data-index="${index}">
                    <div class="word-dutch">${card.dutch}</div>
                    <div class="word-russian">${translation}</div>
                </div>
            `;
        });

        this.wordsList.innerHTML = html;

        // Add click listeners
        document.querySelectorAll('.word-list-item').forEach((item) => {
            item.addEventListener('click', () => {
                const cardIndex = Number(item.dataset.index);

                // Reset flip state if card is flipped
                if (this.isFlipped) {
                    this.flashcard.classList.remove('flipped');
                    this.isFlipped = false;
                }

                this.currentIndex = Number.isNaN(cardIndex) ? 0 : cardIndex;
                this.updateCard();
                this.updateStats();
                this.updateWordList();
                // Close sidebar on mobile after selection
                this.closeSidebar('right');
            });
        });
    }

    updateWordListView() {
        this.wordsList.className = 'words-list';
        
        if (this.wordListView === 'hidden') {
            this.wordsList.classList.add('hidden-view');
        } else if (this.wordListView === 'dutch') {
            this.wordsList.classList.add('dutch-only');
        } else if (this.wordListView === 'russian') {
            this.wordsList.classList.add('russian-only');
        }
    }

    updateWordListButtons() {
        this.listControlBtns.forEach(btn => {
            if (btn.dataset.view === this.wordListView) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    updateCard() {
        if (this.cards.length === 0) return;
        
        const card = this.cards[this.currentIndex];
        const translation = this.getCurrentTranslation(card);
        const translationLang = this.interfaceLang === 'ru' ? 'Русский' : 'English';
        
        // Update card content based on mode
        // Note: flip state should already be reset by navigation methods
        if (this.mode === 'nl-ru') {
            this.frontWord.textContent = card.dutch;
            this.backWord.textContent = translation;
            this.frontLabel.textContent = 'Nederlands';
            this.backLabel.textContent = translationLang;
        } else { // ru-nl
            this.frontWord.textContent = translation;
            this.backWord.textContent = card.dutch;
            this.frontLabel.textContent = translationLang;
            this.backLabel.textContent = 'Nederlands';
        }
        
        this.example.textContent = card.example;
        
        // Update word list highlighting
        document.querySelectorAll('.word-list-item').forEach((item, index) => {
            if (index === this.currentIndex) {
                item.classList.add('active');
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });
    }

    flipCard() {
        this.flashcard.classList.toggle('flipped');
        this.isFlipped = !this.isFlipped;
        
        // Auto-speak when flipping to reveal answer
        if (this.isFlipped) {
            setTimeout(() => this.speak(), 300);
        }
    }

    speak() {
        // Check if sound is muted
        if (this.isSoundMuted) {
            return;
        }
        
        const card = this.cards[this.currentIndex];
        
        // Always speak Dutch regardless of mode
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(card.dutch);
            utterance.lang = 'nl-NL';
            utterance.rate = 0.8;
            utterance.pitch = 1;
            
            // Visual feedback
            this.speakBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.speakBtn.style.transform = 'scale(1)';
            }, 200);
            
            window.speechSynthesis.speak(utterance);
        } else {
            console.warn('Speech synthesis not supported');
        }
    }
    
    speakSlow() {
        // Check if sound is muted
        if (this.isSoundMuted) {
            return;
        }
        
        const card = this.cards[this.currentIndex];
        
        // Slow pronunciation for better learning
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            
            const userAgent = navigator.userAgent;
            const isMobile = window.innerWidth <= 768;
            const isIOS = /iPhone|iPad|iPod/.test(userAgent);
            
            // iOS FIX: Get voices and select Dutch voice explicitly
            let voices = window.speechSynthesis.getVoices();
            if (voices.length === 0) {
                // Voices not loaded yet, wait for them
                window.speechSynthesis.onvoiceschanged = () => {
                    voices = window.speechSynthesis.getVoices();
                    this.speakSlowWithVoices(card.dutch, voices, isMobile, isIOS);
                };
                // Trigger voice loading
                window.speechSynthesis.getVoices();
            } else {
                this.speakSlowWithVoices(card.dutch, voices, isMobile, isIOS);
            }
            
            // Visual feedback
            const slowBtn = document.getElementById('speak-slow-btn');
            if (slowBtn) {
                slowBtn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    slowBtn.style.transform = 'scale(1)';
                }, 200);
            }
        } else {
            console.warn('Speech synthesis not supported');
        }
    }
    
    speakSlowWithVoices(text, voices, isMobile, isIOS) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'nl-NL';
        
        // Find Dutch voice for better pronunciation
        const dutchVoice = voices.find(voice => voice.lang.startsWith('nl')) || voices[0];
        if (dutchVoice) {
            utterance.voice = dutchVoice;
        }
        
        // iOS FIX: Use extremely slow rate for iOS (0.1), moderate for other devices
        utterance.rate = isIOS ? 0.1 : (isMobile ? 0.3 : 0.5);
        utterance.pitch = 1;
        utterance.volume = 1;
        
        window.speechSynthesis.speak(utterance);
    }

    nextCard() {
        // If card is flipped, flip it back first, then navigate
        if (this.isFlipped) {
            this.flashcard.classList.remove('flipped');
            this.isFlipped = false;
            // Wait for flip animation to complete before showing next card
            setTimeout(() => {
                this.currentIndex = (this.currentIndex + 1) % this.cards.length;
                this.updateCard();
                this.updateStats();
            }, 400); // Half of flip animation duration
        } else {
            this.currentIndex = (this.currentIndex + 1) % this.cards.length;
            this.updateCard();
            this.updateStats();
        }
    }

    previousCard() {
        // If card is flipped, flip it back first, then navigate
        if (this.isFlipped) {
            this.flashcard.classList.remove('flipped');
            this.isFlipped = false;
            // Wait for flip animation to complete before showing previous card
            setTimeout(() => {
                this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
                this.updateCard();
                this.updateStats();
            }, 400); // Half of flip animation duration
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
            this.updateCard();
            this.updateStats();
        }
    }

    shuffleCards() {
        // Reset flip state if card is flipped
        if (this.isFlipped) {
            this.flashcard.classList.remove('flipped');
            this.isFlipped = false;
        }
        
        // Fisher-Yates shuffle
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
        this.currentIndex = 0;
        this.updateCard();
        this.updateStats();
        this.updateWordList();
        
        // Visual feedback
        this.shuffleBtn.textContent = '✓ Shuffled';
        setTimeout(() => {
            this.shuffleBtn.textContent = '🔀 Shuffle';
        }, 1000);
    }

    filterByCategory(category) {
        const t = translations[this.interfaceLang];
        this.currentCategory = category;
        
        // Reset flip state if card is flipped
        if (this.isFlipped) {
            this.flashcard.classList.remove('flipped');
            this.isFlipped = false;
        }
        
        if (category === 'all') {
            this.cards = [...this.allCards];
            this.currentCategoryEl.textContent = t.allCategory;
        } else {
            this.cards = this.allCards.filter(card => card.category === category);
            this.currentCategoryEl.textContent = t[category] || categoryNames[category] || category;
        }
        
        this.currentIndex = 0;
        this.updateCard();
        this.updateStats();
        this.updateWordList();
    }

    updateStats() {
        this.currentCardEl.textContent = this.currentIndex + 1;
        this.totalCardsEl.textContent = this.cards.length;
    }
    
    // Mobile sidebar management
    openSidebar(side) {
        if (side === 'left' && this.sidebarLeft) {
            this.sidebarLeft.classList.add('active');
            this.mobileOverlay.classList.add('active');
            
            // Force transform to 0 with JavaScript to override inline styles
            this.sidebarLeft.style.setProperty('transform', 'translateX(0)', 'important');
            this.sidebarLeft.style.setProperty('-webkit-transform', 'translateX(0)', 'important');
        } else if (side === 'right' && this.sidebarRight) {
            this.sidebarRight.classList.add('active');
            this.mobileOverlay.classList.add('active');
            
            // Force transform to 0 with JavaScript to override inline styles
            this.sidebarRight.style.setProperty('transform', 'translateX(0)', 'important');
            this.sidebarRight.style.setProperty('-webkit-transform', 'translateX(0)', 'important');
        }
    }
    
    closeSidebar(side) {
        if (side === 'left' && this.sidebarLeft) {
            this.sidebarLeft.classList.remove('active');
            this.mobileOverlay.classList.remove('active');
            
            // Restore hidden position
            if (window.innerWidth <= 768) {
                this.sidebarLeft.style.setProperty('transform', 'translateX(-100%)', 'important');
                this.sidebarLeft.style.setProperty('-webkit-transform', 'translateX(-100%)', 'important');
            }
        } else if (side === 'right' && this.sidebarRight) {
            this.sidebarRight.classList.remove('active');
            this.mobileOverlay.classList.remove('active');
            
            // Restore hidden position
            if (window.innerWidth <= 768) {
                this.sidebarRight.style.setProperty('transform', 'translateX(100%)', 'important');
                this.sidebarRight.style.setProperty('-webkit-transform', 'translateX(100%)', 'important');
            }
        }
    }
    
    closeAllSidebars() {
        if (this.sidebarLeft) {
            this.sidebarLeft.classList.remove('active');
            if (window.innerWidth <= 768) {
                this.sidebarLeft.style.setProperty('transform', 'translateX(-100%)', 'important');
                this.sidebarLeft.style.setProperty('-webkit-transform', 'translateX(-100%)', 'important');
            }
        }
        if (this.sidebarRight) {
            this.sidebarRight.classList.remove('active');
            if (window.innerWidth <= 768) {
                this.sidebarRight.style.setProperty('transform', 'translateX(100%)', 'important');
                this.sidebarRight.style.setProperty('-webkit-transform', 'translateX(100%)', 'important');
            }
        }
        if (this.mobileOverlay) this.mobileOverlay.classList.remove('active');
    }
    
    toggleSound() {
        this.isSoundMuted = !this.isSoundMuted;
        localStorage.setItem('soundMuted', this.isSoundMuted.toString());
        this.updateSoundButton();
        
        // Cancel any ongoing speech
        if (this.isSoundMuted && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        
        // Visual feedback for mobile button
        if (this.toggleSoundBtn) {
            this.toggleSoundBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.toggleSoundBtn.style.transform = 'scale(1)';
            }, 200);
        }
        
        // Visual feedback for desktop button
        if (this.toggleSoundDesktopBtn) {
            this.toggleSoundDesktopBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.toggleSoundDesktopBtn.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    updateSoundButton() {
        const icon = this.isSoundMuted ? '🔇' : '🔊';
        const title = this.isSoundMuted ? 'Unmute Sound' : 'Mute Sound';
        
        // Update mobile button
        if (this.toggleSoundBtn) {
            this.toggleSoundBtn.textContent = icon;
            this.toggleSoundBtn.title = title;
            
            if (this.isSoundMuted) {
                this.toggleSoundBtn.classList.add('muted');
            } else {
                this.toggleSoundBtn.classList.remove('muted');
            }
        }
        
        // Update desktop button
        if (this.toggleSoundDesktopBtn) {
            this.toggleSoundDesktopBtn.textContent = icon;
            this.toggleSoundDesktopBtn.title = title;
            
            if (this.isSoundMuted) {
                this.toggleSoundDesktopBtn.classList.add('muted');
            } else {
                this.toggleSoundDesktopBtn.classList.remove('muted');
            }
        }
    }
    
    // Apply translations to UI elements
    applyTranslations() {
        const t = translations[this.interfaceLang];
        
        // Update headers
        const desktopTitle = document.querySelector('.desktop-header h1');
        const mobileTitle = document.querySelector('.mobile-title');
        if (desktopTitle) desktopTitle.textContent = `🇳🇱 ${t.title}`;
        if (mobileTitle) mobileTitle.textContent = `🇳🇱 ${t.title}`;
        
        // Update mode buttons
        this.updateModeButtons();
        
        // Update button labels
        if (this.prevBtn) this.prevBtn.textContent = t.previous;
        if (this.nextBtn) this.nextBtn.textContent = t.next;
        if (this.shuffleBtn && this.shuffleBtn.textContent.includes('Shuffle') || this.shuffleBtn.textContent.includes('Перемешать')) {
            this.shuffleBtn.textContent = t.shuffle;
        }

        if (this.wordSearchInput) {
            this.wordSearchInput.placeholder = t.searchPlaceholder;
        }

        if (this.listControlBtns) {
            this.listControlBtns.forEach(btn => {
                if (btn.dataset.view === 'both') {
                    btn.textContent = t.both;
                } else if (btn.dataset.view === 'dutch') {
                    btn.textContent = t.dutch;
                } else if (btn.dataset.view === 'russian') {
                    btn.textContent = t.russian;
                } else if (btn.dataset.view === 'hidden') {
                    btn.textContent = t.hidden;
                }
            });
        }
        
        // Update sound button title
        this.updateSoundButton();

        // #region agent log
        const modeTexts = Array.from(this.modeBtns || []).map(btn => btn.textContent.trim());
        fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:applyTranslations',message:'Applied translations',data:{lang:this.interfaceLang,modeTexts,hasLangBtns:(this.langBtns||[]).length,isMobile:window.innerWidth<=768},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H2'})}).catch(()=>{});
        // #endregion

        // #region agent log
        const listControlTexts = Array.from(this.listControlBtns || []).map(btn => ({view:btn.dataset.view,text:btn.textContent.trim(),title:btn.title}));
        fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:applyTranslations',message:'List control buttons state',data:{lang:this.interfaceLang,listControlTexts,isMobile:window.innerWidth<=768},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H8'})}).catch(()=>{});
        // #endregion
    }
    
    // Update mode buttons based on interface language
    updateModeButtons() {
        const t = translations[this.interfaceLang];
        const secondLang = this.interfaceLang === 'ru' ? '🇷🇺' : '🇬🇧';
        
        this.modeBtns.forEach(btn => {
            if (btn.dataset.mode === 'nl-ru') {
                btn.textContent = `🇳🇱 → ${secondLang}`;
                btn.title = this.interfaceLang === 'ru' ? 'Dutch to Russian' : 'Dutch to English';
            } else if (btn.dataset.mode === 'ru-nl') {
                btn.textContent = `${secondLang} → 🇳🇱`;
                btn.title = this.interfaceLang === 'ru' ? 'Russian to Dutch' : 'English to Dutch';
            }
        });

        // #region agent log
        const updatedTexts = Array.from(this.modeBtns || []).map(btn => btn.textContent.trim());
        fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:updateModeButtons',message:'Mode buttons updated',data:{lang:this.interfaceLang,updatedTexts,isMobile:window.innerWidth<=768},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H3'})}).catch(()=>{});
        // #endregion
    }
    
    // Get translation for a card based on interface language
    getCurrentTranslation(card) {
        // If interface is English and card has 'english' field, use it
        // Otherwise fall back to 'russian' field or 'example' field
        if (this.interfaceLang === 'en') {
            return card.english || card.russian || card.example;
        }
        return card.russian;
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FlashcardApp();
});
