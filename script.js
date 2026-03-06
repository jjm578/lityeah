// Main JavaScript for LitYeah

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderBookStack();
    animateStackOnLoad();
});

// Render the book stack on homepage
function renderBookStack() {
    const bookStack = document.getElementById('bookStack');
    if (!bookStack) return;
    
    bookStack.innerHTML = '';
    
    // Render books in reverse order (oldest first) so newest is on top
    booksData.forEach((book, index) => {
        const isFeatured = index === featuredBookIndex;
        const card = createBookCard(book, isFeatured, index);
        bookStack.appendChild(card);
    });
}

// Create a book card element
function createBookCard(book, isFeatured, index) {
    const card = document.createElement('div');
    card.className = `book-card ${isFeatured ? 'featured' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        ${isFeatured ? '<div class="featured-badge">📚 Today\'s Book</div>' : ''}
        <div class="book-date">${formatDate(book.dateAdded)}</div>
        <h2 class="book-title">${book.title}</h2>
        <p class="book-author">by ${book.author}</p>
        <div class="book-hook">${book.hook}</div>
    `;
    
    card.addEventListener('click', () => {
        navigateToBook(book.id);
    });
    
    return card;
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Animate stack on page load - scroll to featured book
function animateStackOnLoad() {
    const featuredCard = document.querySelector('.book-card.featured');
    if (featuredCard) {
        setTimeout(() => {
            featuredCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    }
}

// Navigate to book detail page
function navigateToBook(bookId) {
    window.location.href = `book-${bookId}.html`;
}

// Timer functionality for reading challenge
let timerInterval = null;
let timeRemaining = 300; // 5 minutes in seconds

function startTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    const startBtn = document.getElementById('startTimerBtn');
    const stopBtn = document.getElementById('stopTimerBtn');
    const shareSection = document.getElementById('shareSection');
    
    if (!timerDisplay) return;
    
    timeRemaining = 300;
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
    shareSection.style.display = 'none';
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay(timerDisplay, timeRemaining);
        
        if (timeRemaining <= 0) {
            stopTimer(true);
        }
    }, 1000);
}

function stopTimer(completed = false) {
    const timerDisplay = document.getElementById('timerDisplay');
    const startBtn = document.getElementById('startTimerBtn');
    const stopBtn = document.getElementById('stopTimerBtn');
    const shareSection = document.getElementById('shareSection');
    const shareMessage = document.getElementById('shareMessage');
    
    clearInterval(timerInterval);
    timerInterval = null;
    
    if (stopBtn) stopBtn.style.display = 'none';
    if (startBtn) startBtn.style.display = 'inline-block';
    
    if (completed) {
        // Show share message
        const bookTitle = document.querySelector('.book-detail-title')?.textContent || 'a great book';
        if (shareMessage) {
            shareMessage.textContent = `I read ${bookTitle} for five minutes today. 📚`;
        }
        if (shareSection) {
            shareSection.style.display = 'block';
        }
        
        // Log the reading session
        logReadingSession(bookTitle);
    }
    
    timeRemaining = 300;
    if (timerDisplay) {
        updateTimerDisplay(timerDisplay, timeRemaining);
    }
}

function updateTimerDisplay(element, seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    element.textContent = `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function copyShareMessage() {
    const shareMessage = document.getElementById('shareMessage');
    if (shareMessage) {
        const text = shareMessage.textContent;
        
        // Copy to clipboard
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Share message copied to clipboard!');
            }).catch(() => {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert('Share message copied to clipboard!');
    } catch (err) {
        alert('Failed to copy to clipboard');
    }
    document.body.removeChild(textArea);
}

// Reading log functionality
function saveLog() {
    const logInput = document.getElementById('logInput');
    const bookTitle = document.querySelector('.book-detail-title')?.textContent || 'Unknown Book';
    
    if (!logInput || !logInput.value.trim()) {
        alert('Please write something in your log before saving.');
        return;
    }
    
    const logEntry = {
        bookTitle: bookTitle,
        date: new Date().toISOString(),
        text: logInput.value.trim()
    };
    
    // Get existing logs from localStorage
    let logs = JSON.parse(localStorage.getItem('readingLogs') || '[]');
    logs.unshift(logEntry); // Add new entry to the beginning
    
    // Keep only last 50 entries
    if (logs.length > 50) {
        logs = logs.slice(0, 50);
    }
    
    localStorage.setItem('readingLogs', JSON.stringify(logs));
    
    logInput.value = '';
    alert('Your reading log has been saved!');
    displayLogHistory();
}

function displayLogHistory() {
    const logHistory = document.getElementById('logHistory');
    if (!logHistory) return;
    
    const logs = JSON.parse(localStorage.getItem('readingLogs') || '[]');
    
    if (logs.length === 0) {
        logHistory.innerHTML = '<p style="color: #7f8c8d; font-style: italic;">No reading logs yet. Start writing!</p>';
        return;
    }
    
    logHistory.innerHTML = logs.slice(0, 5).map(log => `
        <div class="log-entry">
            <div class="log-date">${formatDate(log.date.split('T')[0])} - ${log.bookTitle}</div>
            <div class="log-text">${escapeHtml(log.text)}</div>
        </div>
    `).join('');
}

function logReadingSession(bookTitle) {
    const sessionEntry = {
        bookTitle: bookTitle,
        date: new Date().toISOString(),
        text: `Completed 5-minute reading session with ${bookTitle}`
    };
    
    let logs = JSON.parse(localStorage.getItem('readingLogs') || '[]');
    logs.unshift(sessionEntry);
    
    if (logs.length > 50) {
        logs = logs.slice(0, 50);
    }
    
    localStorage.setItem('readingLogs', JSON.stringify(logs));
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize book detail page
function initBookDetailPage() {
    displayLogHistory();
    
    // Set up timer buttons
    const startBtn = document.getElementById('startTimerBtn');
    const stopBtn = document.getElementById('stopTimerBtn');
    const copyBtn = document.getElementById('copyShareBtn');
    const saveLogBtn = document.getElementById('saveLogBtn');
    
    if (startBtn) {
        startBtn.addEventListener('click', startTimer);
    }
    
    if (stopBtn) {
        stopBtn.addEventListener('click', () => stopTimer(false));
    }
    
    if (copyBtn) {
        copyBtn.addEventListener('click', copyShareMessage);
    }
    
    if (saveLogBtn) {
        saveLogBtn.addEventListener('click', saveLog);
    }
}

// Call init function if on book detail page
if (window.location.pathname.includes('book-')) {
    document.addEventListener('DOMContentLoaded', initBookDetailPage);
}
