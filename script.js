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
        
        this.initElements();
        this.initEventListeners();
        this.renderCategories();
        this.updateCard();
        this.updateStats();
        this.updateWordList();
        this.updateWordListView(); // Apply default view
        
        // #region agent log
        this.debugMobileHeader();
        // #endregion
    }
    
    // #region agent log
    debugMobileHeader() {
        setTimeout(() => {
            const isMobile = window.innerWidth <= 768;
            const mobileHeader = document.querySelector('.mobile-header');
            const btn1 = document.getElementById('toggle-categories');
            const title = document.querySelector('.mobile-title');
            const btn2 = document.getElementById('toggle-words');
            
            if (mobileHeader) {
                const styles = window.getComputedStyle(mobileHeader);
                const rect = mobileHeader.getBoundingClientRect();
                const btn1Rect = btn1 ? btn1.getBoundingClientRect() : null;
                const titleRect = title ? title.getBoundingClientRect() : null;
                const btn2Rect = btn2 ? btn2.getBoundingClientRect() : null;
                
                const data = {
                    deviceInfo: {
                        isMobile: isMobile,
                        windowWidth: window.innerWidth,
                        windowHeight: window.innerHeight,
                        devicePixelRatio: window.devicePixelRatio,
                        userAgent: navigator.userAgent.substring(0, 100)
                    },
                    hypothesisA_LayoutIssue: {
                        display: styles.display,
                        justifyContent: styles.justifyContent,
                        flexDirection: styles.flexDirection,
                        alignItems: styles.alignItems,
                        width: Math.round(rect.width),
                        padding: styles.padding,
                        paddingLeft: styles.paddingLeft,
                        paddingRight: styles.paddingRight,
                        gap: styles.gap,
                        boxSizing: styles.boxSizing
                    },
                    hypothesisB_Coordinates: {
                        headerLeft: Math.round(rect.left),
                        headerRight: Math.round(rect.right),
                        btn1Left: btn1Rect ? Math.round(btn1Rect.left) : null,
                        btn1Right: btn1Rect ? Math.round(btn1Rect.right) : null,
                        btn1Width: btn1Rect ? Math.round(btn1Rect.width) : null,
                        titleLeft: titleRect ? Math.round(titleRect.left) : null,
                        titleRight: titleRect ? Math.round(titleRect.right) : null,
                        titleWidth: titleRect ? Math.round(titleRect.width) : null,
                        btn2Left: btn2Rect ? Math.round(btn2Rect.left) : null,
                        btn2Right: btn2Rect ? Math.round(btn2Rect.right) : null,
                        btn2Width: btn2Rect ? Math.round(btn2Rect.width) : null,
                        expectedBtn1Left: Math.round(rect.left + parseFloat(styles.paddingLeft)),
                        expectedBtn2Right: Math.round(rect.right - parseFloat(styles.paddingRight))
                    },
                    hypothesisD_FlexGrow: {
                        btn1Flex: btn1 ? window.getComputedStyle(btn1).flex : null,
                        titleFlex: title ? window.getComputedStyle(title).flex : null,
                        titleFlexGrow: title ? window.getComputedStyle(title).flexGrow : null,
                        btn2Flex: btn2 ? window.getComputedStyle(btn2).flex : null
                    }
                };
                
                fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:debugMobileHeader',message:'Mobile header layout analysis',data:data,timestamp:Date.now(),sessionId:'debug-session',runId:'mobile-header-2',hypothesisId:'A,B,D'})}).catch(()=>{});
            } else {
                fetch('http://127.0.0.1:7242/ingest/7c2c19a6-aaed-464a-b0a8-08723f50663f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:debugMobileHeader',message:'Mobile header NOT FOUND',data:{isMobile:isMobile,windowWidth:window.innerWidth},timestamp:Date.now(),sessionId:'debug-session',runId:'mobile-header-2',hypothesisId:'ERROR'})}).catch(()=>{});
            }
        }, 1000);
    }
    // #endregion

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
        
        // Sidebars
        this.categoriesList = document.getElementById('categories-list');
        this.wordsList = document.getElementById('words-list');
        
        // Mode switcher
        this.modeBtns = document.querySelectorAll('.mode-btn');
        
        // Word list controls
        this.listControlBtns = document.querySelectorAll('.list-control-btn');
        
        // Mobile menu elements
        this.toggleCategoriesBtn = document.getElementById('toggle-categories');
        this.toggleWordsBtn = document.getElementById('toggle-words');
        this.closeCategoriesBtn = document.getElementById('close-categories');
        this.closeWordsBtn = document.getElementById('close-words');
        this.sidebarLeft = document.getElementById('sidebar-left');
        this.sidebarRight = document.getElementById('sidebar-right');
        this.mobileOverlay = document.getElementById('mobile-overlay');
        
        // Force mobile layout with JavaScript on small screens
        this.forceMobileLayout();
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
        // Card flip
        this.flashcard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('speak-btn')) {
                this.flipCard();
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
        // Count cards per category
        const categoryCounts = {};
        this.allCards.forEach(card => {
            categoryCounts[card.category] = (categoryCounts[card.category] || 0) + 1;
        });

        // Add "All" category
        let html = `
            <div class="category-item active" data-category="all">
                <span>All</span>
                <span class="category-count">${this.allCards.length}</span>
            </div>
            <div class="category-section-title">📖 Слова</div>
        `;

        // Add word categories
        categoryTypes.words.forEach(category => {
            if (categoryCounts[category]) {
                const name = categoryNames[category] || category;
                html += `
                    <div class="category-item" data-category="${category}">
                        <span>${name}</span>
                        <span class="category-count">${categoryCounts[category]}</span>
                    </div>
                `;
            }
        });

        // Add phrases section
        html += `<div class="category-section-title">💬 Фразы</div>`;

        // Add phrase categories
        categoryTypes.phrases.forEach(category => {
            if (categoryCounts[category]) {
                const name = categoryNames[category] || category;
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
        if (this.cards.length === 0) {
            this.wordsList.innerHTML = '<div style="padding: 20px; text-align: center; opacity: 0.5;">No words in this category</div>';
            return;
        }

        let html = '';
        this.cards.forEach((card, index) => {
            const activeClass = index === this.currentIndex ? 'active' : '';
            html += `
                <div class="word-list-item ${activeClass}" data-index="${index}">
                    <div class="word-dutch">${card.dutch}</div>
                    <div class="word-russian">${card.russian}</div>
                </div>
            `;
        });

        this.wordsList.innerHTML = html;

        // Add click listeners
        document.querySelectorAll('.word-list-item').forEach((item, index) => {
            item.addEventListener('click', () => {
                // Reset flip state if card is flipped
                if (this.isFlipped) {
                    this.flashcard.classList.remove('flipped');
                    this.isFlipped = false;
                }
                
                this.currentIndex = index;
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
        
        // Update card content based on mode
        // Note: flip state should already be reset by navigation methods
        if (this.mode === 'nl-ru') {
            this.frontWord.textContent = card.dutch;
            this.backWord.textContent = card.russian;
            this.frontLabel.textContent = 'Nederlands';
            this.backLabel.textContent = 'Русский';
        } else { // ru-nl
            this.frontWord.textContent = card.russian;
            this.backWord.textContent = card.dutch;
            this.frontLabel.textContent = 'Русский';
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
        this.currentCategory = category;
        
        // Reset flip state if card is flipped
        if (this.isFlipped) {
            this.flashcard.classList.remove('flipped');
            this.isFlipped = false;
        }
        
        if (category === 'all') {
            this.cards = [...this.allCards];
            this.currentCategoryEl.textContent = 'All';
        } else {
            this.cards = this.allCards.filter(card => card.category === category);
            this.currentCategoryEl.textContent = categoryNames[category] || category;
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
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FlashcardApp();
});
