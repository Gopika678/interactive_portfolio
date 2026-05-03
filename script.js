
// INTERACTIVE PORTFOLIO - JavaScript



// 1. DARK MODE TOGGLE


/**
 * Initialize dark mode based on user preference stored in localStorage
 * Toggles dark mode class on body element
 */
function initializeDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set initial theme based on localStorage
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    // Add click event listener to toggle theme
    themeToggle.addEventListener('click', toggleDarkMode);
}

/**
 * Toggle dark mode and save preference to localStorage
 */
function toggleDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const isDarkMode = document.body.classList.toggle('dark-mode');

    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);

    // Update button icon
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}


// 2. SMOOTH SCROLLING


/**
 * Add smooth scrolling to all navigation links
 */
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollBtn = document.getElementById('scrollBtn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll to projects section button
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    }
}


// 3. FORM VALIDATION

/**
 * Validation rules for form fields
 */
const validationRules = {
    name: {
        required: true,
        minLength: 3,
        pattern: /^[a-zA-Z\s]+$/,
        errors: {
            required: 'Name is required',
            minLength: 'Name must be at least 3 characters',
            pattern: 'Name can only contain letters and spaces'
        }
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errors: {
            required: 'Email is required',
            pattern: 'Please enter a valid email address'
        }
    },
    phone: {
        pattern: /^[\d\s\-\+\(\)]+$/,
        errors: {
            pattern: 'Please enter a valid phone number'
        }
    },
    subject: {
        required: true,
        minLength: 5,
        errors: {
            required: 'Subject is required',
            minLength: 'Subject must be at least 5 characters'
        }
    },
    message: {
        required: true,
        minLength: 10,
        maxLength: 500,
        errors: {
            required: 'Message is required',
            minLength: 'Message must be at least 10 characters',
            maxLength: 'Message cannot exceed 500 characters'
        }
    }
};

/**
 * Validate a single form field
 * @param {string} fieldName - Name of the field to validate
 * @param {string} value - Value of the field
 * @returns {object} - Validation result with isValid and error message
 */
function validateField(fieldName, value) {
    const rules = validationRules[fieldName];
    
    if (!rules) return { isValid: true, error: '' };

    // Check required
    if (rules.required && (!value || value.trim() === '')) {
        return { isValid: false, error: rules.errors.required };
    }

    // Skip further validation if field is optional and empty
    if (!rules.required && (!value || value.trim() === '')) {
        return { isValid: true, error: '' };
    }

    // Check minimum length
    if (rules.minLength && value.length < rules.minLength) {
        return { isValid: false, error: rules.errors.minLength };
    }

    // Check maximum length
    if (rules.maxLength && value.length > rules.maxLength) {
        return { isValid: false, error: rules.errors.maxLength };
    }

    // Check pattern
    if (rules.pattern && !rules.pattern.test(value)) {
        return { isValid: false, error: rules.errors.pattern };
    }

    return { isValid: true, error: '' };
}

/**
 * Display validation error for a field
 * @param {string} fieldName - Name of the field
 * @param {string} errorMessage - Error message to display
 */
function showFieldError(fieldName, errorMessage) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}Error`);

    if (field) {
        field.classList.add('error');
    }

    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
}

/**
 * Clear validation error for a field
 * @param {string} fieldName - Name of the field
 */
function clearFieldError(fieldName) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}Error`);

    if (field) {
        field.classList.remove('error');
    }

    if (errorElement) {
        errorElement.textContent = '';
    }
}

/**
 * Initialize real-time form validation
 */
function initializeFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    // Add real-time validation on input
    const formFields = form.querySelectorAll('input, textarea');
    
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            const validation = validateField(this.id, this.value);
            
            if (!validation.isValid) {
                showFieldError(this.id, validation.error);
            } else {
                clearFieldError(this.id);
            }
        });

        // Clear error on focus
        field.addEventListener('focus', function() {
            clearFieldError(this.id);
        });

        // Update character count for message field
        if (this.id === 'message') {
            field.addEventListener('input', updateCharCount);
        }
    });

    // Handle form submission
    form.addEventListener('submit', validateAndSubmitForm);
}

/**
 * Update character count for message textarea
 */
function updateCharCount() {
    const messageField = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    if (charCount) {
        charCount.textContent = `${messageField.value.length} / 500`;
    }
}

/**
 * Validate entire form and handle submission
 * @param {event} event - Form submit event
 */
function validateAndSubmitForm(event) {
    event.preventDefault();

    const form = event.target;
    const formFields = form.querySelectorAll('input, textarea');
    const formMessage = document.getElementById('formMessage');
    let isFormValid = true;

    // Validate all fields
    formFields.forEach(field => {
        if (field.type !== 'submit') {
            const validation = validateField(field.id, field.value);
            
            if (!validation.isValid) {
                showFieldError(field.id, validation.error);
                isFormValid = false;
            } else {
                clearFieldError(field.id);
            }
        }
    });

    // If form is valid, show success message
    if (isFormValid) {
        // Save form data to localStorage
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        localStorage.setItem('lastFormSubmission', JSON.stringify(data));

        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
        formMessage.style.display = 'flex';

        // Reset form
        form.reset();
        document.getElementById('charCount').textContent = '0 / 500';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    } else {
        formMessage.className = 'form-message error';
        formMessage.textContent = '✗ Please fix the errors above and try again.';
        formMessage.style.display = 'flex';
    }
}


// 4. TO-DO LIST FUNCTIONALITY


/**
 * Initialize todo list
 */
function initializeTodoList() {
    const addBtn = document.getElementById('addTodoBtn');
    const todoInput = document.getElementById('todoInput');
    const clearBtn = document.getElementById('clearTodoBtn');

    if (addBtn) {
        addBtn.addEventListener('click', addTodo);
    }

    if (todoInput) {
        todoInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', clearCompletedTodos);
    }

    // Load todos from localStorage
    loadTodosFromStorage();
}

/**
 * Add a new todo item
 */
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a task');
        return;
    }

    // Create todo item
    const todoItem = createTodoElement(todoText);
    todoList.appendChild(todoItem);

    // Clear input
    todoInput.value = '';
    todoInput.focus();

    // Save to localStorage
    saveTodosToStorage();
    updateClearButton();
}

/**
 * Create a todo list item element
 * @param {string} text - Todo text
 * @param {boolean} completed - Whether todo is completed
 * @returns {HTMLElement} - Todo item element
 */
function createTodoElement(text, completed = false) {
    const li = document.createElement('li');
    li.className = `todo-item ${completed ? 'completed' : ''}`;
    
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${completed ? 'checked' : ''}>
        <span class="todo-text">${escapeHtml(text)}</span>
        <button class="todo-delete" title="Delete task">✕</button>
    `;

    // Add event listeners
    const checkbox = li.querySelector('.todo-checkbox');
    const deleteBtn = li.querySelector('.todo-delete');

    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
        saveTodosToStorage();
        updateClearButton();
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
        saveTodosToStorage();
        updateClearButton();
    });

    return li;
}

/**
 * Save todos to localStorage
 */
function saveTodosToStorage() {
    const todoList = document.getElementById('todoList');
    const todos = [];

    todoList.querySelectorAll('.todo-item').forEach(item => {
        const text = item.querySelector('.todo-text').textContent;
        const completed = item.classList.contains('completed');
        todos.push({ text, completed });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

/**
 * Load todos from localStorage
 */
function loadTodosFromStorage() {
    const todoList = document.getElementById('todoList');
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
        const todos = JSON.parse(savedTodos);
        todos.forEach(todo => {
            const todoItem = createTodoElement(todo.text, todo.completed);
            todoList.appendChild(todoItem);
        });
    }

    updateClearButton();
}

/**
 * Clear all completed todos
 */
function clearCompletedTodos() {
    const todoList = document.getElementById('todoList');
    const completedItems = todoList.querySelectorAll('.todo-item.completed');

    if (completedItems.length === 0) {
        alert('No completed tasks to clear');
        return;
    }

    if (confirm('Delete all completed tasks?')) {
        completedItems.forEach(item => item.remove());
        saveTodosToStorage();
        updateClearButton();
    }
}

/**
 * Update clear button visibility
 */
function updateClearButton() {
    const clearBtn = document.getElementById('clearTodoBtn');
    const todoList = document.getElementById('todoList');
    const hasCompleted = todoList.querySelector('.todo-item.completed');

    if (clearBtn) {
        clearBtn.style.display = hasCompleted ? 'block' : 'none';
    }
}

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 5. IMAGE GALLERY / SLIDER


let currentImageIndex = 0;
const images = [
    'https://via.placeholder.com/600x400?text=Project+1',
    'https://via.placeholder.com/600x400?text=Project+2',
    'https://via.placeholder.com/600x400?text=Project+3',
    'https://via.placeholder.com/600x400?text=Project+4',
    'https://via.placeholder.com/600x400?text=Project+5',
    'https://via.placeholder.com/600x400?text=Project+6'
];

/**
 * Initialize gallery slider
 */
function initializeGallery() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (prevBtn) {
        prevBtn.addEventListener('click', previousImage);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }

    // Add click event to thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            currentImageIndex = parseInt(this.dataset.index);
            updateGallery();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') previousImage();
        if (e.key === 'ArrowRight') nextImage();
    });

    updateGallery();
}

/**
 * Show previous image
 */
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGallery();
}

/**
 * Show next image
 */
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery();
}

/**
 * Update gallery display
 */
function updateGallery() {
    const galleryImage = document.getElementById('galleryImage');
    const imageCounter = document.getElementById('imageCounter');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Update main image
    if (galleryImage) {
        galleryImage.src = images[currentImageIndex];
        galleryImage.style.animation = 'none';
        // Trigger reflow to restart animation
        void galleryImage.offsetWidth;
        galleryImage.style.animation = '';
    }

    // Update counter
    if (imageCounter) {
        imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
    }

    // Update thumbnail active state
    thumbnails.forEach((thumb, index) => {
        if (index === currentImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}


// 6. COLLAPSIBLE CONTENT


/**
 * Initialize collapsible sections
 */
function initializeCollapsibles() {
    const skillsToggle = document.getElementById('skillsToggle');
    const skillsContent = document.getElementById('skillsContent');

    if (skillsToggle && skillsContent) {
        skillsToggle.addEventListener('click', function() {
            const isHidden = skillsContent.style.display === 'none';
            
            if (isHidden) {
                skillsContent.style.display = 'block';
                skillsToggle.textContent = '📚 Hide Skills';
            } else {
                skillsContent.style.display = 'none';
                skillsToggle.textContent = '📚 Show Skills';
            }
        });
    }
}


// 7. INITIALIZE ALL FEATURES


/**
 * Main initialization function
 * Called when DOM is fully loaded
 */
function initializePortfolio() {
    console.log('🚀 Initializing Interactive Portfolio...');

    // Initialize all features
    initializeDarkMode();
    initializeSmoothScroll();
    initializeFormValidation();
    initializeTodoList();
    initializeGallery();
    initializeCollapsibles();

    console.log('✓ Portfolio initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}


// ADDITIONAL UTILITIES


/**
 * Debounce function to optimize event listeners
 * @param {function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {function} - Debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Get data from localStorage with error handling
 * @param {string} key - LocalStorage key
 * @returns {any} - Stored value or null
 */
function getFromStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(`Error reading from localStorage: ${error}`);
        return null;
    }
}

/**
 * Save data to localStorage with error handling
 * @param {string} key - LocalStorage key
 * @param {any} value - Value to store
 * @returns {boolean} - Success status
 */
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error(`Error writing to localStorage: ${error}`);
        return false;
    }
}


// CONSOLE MESSAGES (Development)


console.log('%c🎨 Interactive Portfolio', 'font-size: 20px; color: #0c0d0e; font-weight: bold;');
console.log('%cFeatures:', 'font-weight: bold;');
console.log('✓ Dark Mode Toggle with LocalStorage');
console.log('✓ Form Validation with Real-time Feedback');
console.log('✓ Interactive To-Do List');
console.log('✓ Image Gallery/Slider');
console.log('✓ Smooth Scrolling Navigation');
console.log('✓ Collapsible Content Sections');
console.log('✓ Responsive Design');
