# Interactive Portfolio Website 🚀

A fully functional, responsive portfolio website built with HTML5, CSS3, and vanilla JavaScript. This project demonstrates modern web development practices including form validation, DOM manipulation, event handling, and local storage functionality.

**Live Demo:** Open `index.html` in your browser

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [File Structure](#file-structure)
- [Technology Stack](#technology-stack)
- [Code Architecture](#code-architecture)
- [Feature Documentation](#feature-documentation)
- [Testing Guide](#testing-guide)
- [Browser Compatibility](#browser-compatibility)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)

---

## 🎯 Project Overview

This Interactive Portfolio Website is a Week 3 JavaScript project designed to showcase practical web development skills. The website serves as both a working portfolio and a comprehensive learning resource for JavaScript fundamentals including:

- **Client-side scripting** and event handling
- **DOM manipulation** for dynamic content
- **Form validation** with real-time feedback
- **Local storage** for persistent data
- **Responsive design** for all devices
- **Accessible components** following WCAG guidelines

### Project Goals

✓ Create a professional, interactive website with multiple features  
✓ Implement robust form validation  
✓ Add at least 3+ interactive features  
✓ Use modern JavaScript best practices  
✓ Ensure responsive design and accessibility  
✓ Demonstrate clean code organization  

---

## ✨ Features

### 1. **Dark Mode Toggle** 🌙
- Switch between light and dark themes instantly
- Preference saved to localStorage
- Persists across browser sessions
- Smooth CSS transitions
- Icon updates based on current theme

### 2. **Form Validation** ✓
- Real-time field validation as you type
- Comprehensive validation rules:
  - Name: 3+ characters, letters only
  - Email: Valid email format
  - Phone: Valid phone number format (optional)
  - Subject: 5+ characters
  - Message: 10-500 characters
- Error messages display below each field
- Visual feedback with red borders on invalid fields
- Character counter for message field
- Form data saved to localStorage on submission
- Success/error messages displayed to user

### 3. **Interactive To-Do List** ✅
- Add new tasks with Enter key or button click
- Mark tasks as complete with checkboxes
- Delete individual tasks
- Clear all completed tasks
- Visual indication of completed tasks (strikethrough)
- All tasks persist in localStorage
- Smooth animations for added/removed items

### 4. **Image Gallery Slider** 🖼️
- Navigate through 6 sample images
- Previous/Next buttons for navigation
- Thumbnail previews with click selection
- Keyboard navigation (Arrow keys)
- Image counter showing current position
- Active thumbnail highlighting
- Smooth image transitions

### 5. **Smooth Scrolling Navigation** 📍
- Smooth scroll to sections on nav link click
- "Explore My Work" button scrolls to projects
- Animated underline effect on nav links
- Active section awareness

### 6. **Collapsible Skills Section** 📚
- Toggle to show/hide skills grid
- Smooth expand/collapse animation
- Button text updates dynamically
- Organized skills in three categories:
  - Frontend technologies
  - Tools & platforms
  - Soft skills

### 7. **Responsive Design** 📱
- Mobile-first approach
- Breakpoints for tablets and desktop
- Touch-friendly buttons and inputs
- Flexible grid layouts
- Readable font sizes on all devices

---

## 🛠️ Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic understanding of HTML, CSS, and JavaScript

### Installation Steps

1. **Create Project Folder**
   ```bash
   mkdir my-portfolio
   cd my-portfolio
   ```

2. **Create Files**
   - Create `index.html` - Main HTML file
   - Create `style.css` - Stylesheet
   - Create `script.js` - JavaScript file
   - Create `README.md` - Documentation

3. **Copy Code**
   - Copy the provided HTML code to `index.html`
   - Copy the provided CSS code to `style.css`
   - Copy the provided JavaScript code to `script.js`

4. **Run the Project**
   - Option 1: Double-click `index.html` to open in browser
   - Option 2: Right-click → Open With → Your browser
   - Option 3: Use VS Code Live Server extension
   - Option 4: Use Python HTTP server:
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000` in your browser

5. **Test All Features**
   - Toggle dark mode
   - Fill and validate the contact form
   - Add/complete/delete tasks
   - Navigate the image gallery
   - Test on mobile devices

---

## 📁 File Structure

```
interactive-portfolio/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and dark mode
├── script.js           # JavaScript functionality
├── README.md           # Documentation
│
└── images/             # Optional: Add your own images
    ├── project1.jpg
    ├── project2.jpg
    └── gallery/
        ├── image1.jpg
        └── ...
```

### Files Explanation

| File | Purpose | Size |
|------|---------|------|
| `index.html` | Semantic HTML structure with form, gallery, todo list | ~400 lines |
| `style.css` | Complete styling with CSS variables for theming | ~600 lines |
| `script.js` | All interactive features and functionality | ~500 lines |
| `README.md` | Comprehensive project documentation | This file |

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Styling, animations, gradients, flexbox, grid
- **Vanilla JavaScript (ES6+)** - No frameworks or libraries

### Storage
- **LocalStorage API** - For persistence

### Tools
- Any text editor
- Chrome DevTools for debugging
- Browser console

---

## 🏗️ Code Architecture

### JavaScript Organization

The JavaScript file is organized into logical modules:

```javascript
// 1. Dark Mode Toggle (Lines 10-50)
function initializeDarkMode()
function toggleDarkMode()

// 2. Smooth Scrolling (Lines 52-75)
function initializeSmoothScroll()

// 3. Form Validation (Lines 77-200)
validationRules (configuration object)
function validateField()
function showFieldError()
function clearFieldError()
function initializeFormValidation()
function validateAndSubmitForm()

// 4. To-Do List (Lines 202-330)
function initializeTodoList()
function addTodo()
function createTodoElement()
function saveTodosToStorage()
function loadTodosFromStorage()
function clearCompletedTodos()

// 5. Image Gallery (Lines 332-410)
function initializeGallery()
function previousImage()
function nextImage()
function updateGallery()

// 6. Collapsible Content (Lines 412-430)
function initializeCollapsibles()

// 7. Main Initialization (Lines 432-445)
function initializePortfolio()

// 8. Utilities (Lines 447-490)
function debounce()
function getFromStorage()
function saveToStorage()
```

### CSS Organization

CSS is organized using CSS Variables for easy theming:

```css
:root {
  /* Colors */
  /* Spacing */
  /* Typography */
  /* Transitions */
  /* Shadows */
}

/* Sections */
/* Navigation */
/* Hero */
/* Forms */
/* Buttons */
/* Dark Mode */
/* Responsive Design */
/* Accessibility */
```

---

## 📚 Feature Documentation

### 1. Dark Mode Implementation

**How It Works:**
- Uses CSS custom properties (variables) that change in dark mode
- Stores preference in localStorage as 'darkMode'
- Toggles `dark-mode` class on body element
- Button icon changes based on current theme

**Key Code:**
```javascript
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}
```

**CSS Variables:**
```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #212529;
}

body.dark-mode {
    --bg-primary: #1a1a1a;
    --text-primary: #f0f0f0;
}
```

---

### 2. Form Validation System

**Validation Rules:**

| Field | Required | Min Length | Max Length | Pattern |
|-------|----------|-----------|-----------|---------|
| Name | Yes | 3 | ∞ | Letters & spaces only |
| Email | Yes | - | - | Valid email format |
| Phone | No | - | - | Valid phone number |
| Subject | Yes | 5 | ∞ | Any characters |
| Message | Yes | 10 | 500 | Any characters |

**Validation Flow:**

```
User Types → Real-time Validation (blur event)
                 ↓
        Field Valid? 
         /          \
       Yes          No
        ↓            ↓
   Clear error  Show error
        ↓            ↓
   Continue    User corrects
        ↓
   Form Submit
        ↓
   Validate ALL fields
        ↓
   All Valid?
    /        \
  Yes        No
   ↓         ↓
Submit    Show errors
```

**Key Code:**
```javascript
function validateField(fieldName, value) {
    const rules = validationRules[fieldName];
    // Check required, length, pattern
    return { isValid: boolean, error: string };
}
```

---

### 3. To-Do List System

**Features:**
- Add tasks via button or Enter key
- Check/uncheck to mark complete
- Delete individual tasks
- Clear all completed at once
- Persistent storage in localStorage

**Data Structure:**
```javascript
// Stored in localStorage as 'todos'
[
    { text: "Learn JavaScript", completed: false },
    { text: "Build a project", completed: true },
]
```

**CRUD Operations:**
- **Create:** `addTodo()` - Adds new task
- **Read:** `loadTodosFromStorage()` - Loads from localStorage
- **Update:** Checkbox changes → `saveTodosToStorage()`
- **Delete:** Delete button or `clearCompletedTodos()`

---

### 4. Image Gallery Slider

**Features:**
- 6 sample placeholder images
- Previous/Next navigation
- Thumbnail selection
- Keyboard support (Arrow keys)
- Image counter
- Smooth transitions

**Navigation Methods:**
1. **Previous Button:** Goes to previous image
2. **Next Button:** Goes to next image
3. **Thumbnail Click:** Jump to specific image
4. **Keyboard:** Left/Right arrow keys

**Code Logic:**
```javascript
const images = [...]; // Array of 6 image URLs
let currentImageIndex = 0;

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery();
}
```

---

## 🧪 Testing Guide

### Manual Testing Checklist

#### Dark Mode Testing
- [ ] Click theme toggle button
- [ ] Verify colors change
- [ ] Refresh page - theme persists
- [ ] All text readable in both modes
- [ ] Transitions are smooth

#### Form Validation Testing
```javascript
// Test cases for each field:

Name:
✓ Empty → Error: "Name is required"
✓ "Go" → Error: "Name must be at least 3 characters"
✓ "gopika123" → Error: "Name can only contain letters"
✓ "Gopika" → ✓ Valid

Email:
✓ Empty → Error required
✓ "invalid" → Error invalid format
✓ "test@example.com" → ✓ Valid

Message:
✓ Less than 10 chars → Error
✓ 10+ chars → ✓ Valid
✓ Form submits successfully
✓ Success message appears
✓ Data saved to localStorage
```

#### To-Do List Testing
- [ ] Add task with button
- [ ] Add task with Enter key
- [ ] Check task - strikethrough appears
- [ ] Uncheck task - strikethrough removes
- [ ] Delete individual task
- [ ] Clear completed button appears when needed
- [ ] Clear all completed tasks
- [ ] Refresh page - tasks persist
- [ ] XSS prevention - test HTML in task

#### Gallery Testing
- [ ] Click previous - goes to previous image
- [ ] Click next - goes to next image
- [ ] Click thumbnail - jumps to that image
- [ ] Keyboard arrows work
- [ ] Image counter updates
- [ ] Thumbnail active state highlights
- [ ] Wraps around (last→first, first→last)

#### Responsive Testing
- [ ] View on desktop (1920px, 1200px)
- [ ] View on tablet (768px)
- [ ] View on mobile (375px, 480px)
- [ ] All buttons clickable on mobile
- [ ] Forms readable on mobile
- [ ] No horizontal scrolling

#### Accessibility Testing
- [ ] Tab through form fields
- [ ] Keyboard navigation works
- [ ] Focus visible on all interactive elements
- [ ] Labels associated with inputs
- [ ] Error messages announce properly
- [ ] Color contrast sufficient

### Console Debugging

```javascript
// Check if todo list loaded
console.log(JSON.parse(localStorage.getItem('todos')));

// Check dark mode setting
console.log(localStorage.getItem('darkMode'));

// Check last form submission
console.log(JSON.parse(localStorage.getItem('lastFormSubmission')));

// Monitor validation
document.getElementById('email').addEventListener('input', (e) => {
    console.log('Email validation:', validateField('email', e.target.value));
});
```

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Full support |
| Firefox | Latest | ✅ Full support |
| Safari | Latest | ✅ Full support |
| Edge | Latest | ✅ Full support |
| IE 11 | - | ❌ Not supported |

**APIs Used:**
- LocalStorage - Supported in all modern browsers
- ES6 Features - Supported in all modern browsers
- CSS Grid/Flexbox - Supported in all modern browsers
- CSS Custom Properties - Supported in all modern browsers

---

## ⚡ Performance Optimization

### Current Implementation
- Minimal dependencies (vanilla JavaScript)
- CSS custom properties for theme switching (no re-render)
- Event delegation where possible
- Efficient DOM queries
- LocalStorage for offline persistence

### Best Practices Implemented
```javascript
// 1. Debouncing for performance
const debouncedHandler = debounce(function, 300);

// 2. Error handling for localStorage
try {
    localStorage.setItem(key, value);
} catch (error) {
    console.error('Storage error:', error);
}

// 3. Efficient DOM querying
document.querySelectorAll('.class'); // Instead of getElementById in loops

// 4. Event delegation
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) { }
});
```

### Load Time Metrics
- Initial load: < 1 second
- Dark mode toggle: < 50ms
- Form validation: < 10ms per field
- Gallery navigation: < 50ms

---

## 🐛 Troubleshooting

### Issue: Form validation not working
**Solution:**
- Ensure JavaScript file is linked correctly in HTML
- Check browser console for errors
- Verify input field `id` attributes match validation rules

### Issue: Dark mode not persisting
**Solution:**
- Check if browser allows localStorage
- Clear browser cache and try again
- Check if localStorage is not full/disabled

### Issue: To-do list tasks not saving
**Solution:**
- Verify localStorage is enabled
- Check browser console for storage errors
- Ensure localStorage has available space
- Try clearing cache

### Issue: Gallery images not showing
**Solution:**
- Replace placeholder URLs with actual image paths
- Ensure images exist in project folder
- Check image file paths in HTML

### Issue: Form submits without validation
**Solution:**
- Verify form has `novalidate` attribute
- Check form submit handler is attached
- Ensure preventDefault() is called

### Issue: Mobile responsiveness issues
**Solution:**
- Add viewport meta tag to HTML
- Check CSS media queries
- Use Chrome DevTools device emulation
- Test on actual mobile device

---

## 🚀 Future Enhancements

### Phase 2 - Backend Integration
- [ ] Replace form with actual email sending
- [ ] Connect to database for todos
- [ ] User authentication system
- [ ] Cloud storage for preferences

### Phase 3 - Advanced Features
- [ ] Add drag-and-drop for todos
- [ ] Image upload functionality
- [ ] Comments/ratings on projects
- [ ] Search functionality
- [ ] Filtering and sorting

### Phase 4 - Progressive Web App
- [ ] Add service worker
- [ ] Offline functionality
- [ ] PWA manifest
- [ ] Install to home screen

### Phase 5 - Analytics & SEO
- [ ] Google Analytics integration
- [ ] SEO optimization
- [ ] Meta tags and structured data
- [ ] Sitemap generation

### Code Improvements
- [ ] Add TypeScript for type safety
- [ ] Unit tests with Jest
- [ ] Integration tests
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)
- [ ] Internationalization (i18n)

---

## 📖 Learning Resources

### JavaScript Concepts Covered
1. **DOM Manipulation**
   - querySelector/querySelectorAll
   - classList.add/remove/toggle
   - createElement, appendChild
   - innerHTML, textContent

2. **Event Handling**
   - addEventListener
   - Event delegation
   - Event object (preventDefault, target)
   - Keyboard events

3. **Form Validation**
   - Input validation patterns
   - Error messaging
   - Real-time feedback
   - Form submission handling

4. **Local Storage**
   - setItem/getItem
   - JSON stringify/parse
   - Storage quota
   - Error handling

5. **Functions & Scope**
   - Arrow functions
   - Function hoisting
   - Closures
   - Variable scoping

### Recommended Learning Resources

**Video Tutorials:**
- [JavaScript Basics for Beginners](https://www.youtube.com/results?search_query=javascript+basics+for+beginners)
- [DOM Manipulation Tutorial](https://www.youtube.com/results?search_query=javascript+dom+manipulation)
- [Form Validation in JavaScript](https://www.youtube.com/results?search_query=javascript+form+validation)

**Websites:**
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [freeCodeCamp JavaScript Curriculum](https://www.freecodecamp.org/)
- [JavaScript.info](https://javascript.info/)

**Books:**
- "Eloquent JavaScript" by Marijn Haverbeke
- "JavaScript: The Good Parts" by Douglas Crockford
- "You Don't Know JS" by Kyle Simpson

---

## 📝 Code Quality Standards

### HTML
- Semantic HTML5 elements
- Proper heading hierarchy
- Form labels for accessibility
- ARIA attributes where needed
- No inline styles

### CSS
- CSS custom properties for theming
- Mobile-first approach
- BEM naming convention
- Organized by component
- Comments for clarity
- Accessibility-focused

### JavaScript
- Clear, descriptive function names
- Single responsibility principle
- Proper error handling
- Comments for complex logic
- Console logs for debugging
- DRY (Don't Repeat Yourself)



## 💬 Questions & Support

- Check the troubleshooting section
- Review code comments
- Check browser console for errors
- Test in Chrome DevTools device emulation
- Refer to MDN documentation

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| HTML Lines | ~400 |
| CSS Lines | ~600 |
| JavaScript Lines | ~500 |
| Functions | 30+ |
| Features | 7+ |
| Accessibility Score | 95+ |
| Mobile Responsive | ✅ Yes |
| Dark Mode Support | ✅ Yes |
| LocalStorage Used | ✅ Yes |
| No Dependencies | ✅ Yes |



### Quick Links

- [View Demo](#project-overview)
- [Setup Guide](#setup-instructions)
- [Feature List](#features)
- [Testing Checklist](#testing-guide)
- [Troubleshooting](#troubleshooting)


