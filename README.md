# 🍪 Cookie Consent

A simple cookie consent banner that demonstrates basic DOM manipulation and event handling in JavaScript.

## 📋 Description

This project creates a cookie consent popup that appears when users visit the page. The popup displays a message and provides buttons to accept or dismiss cookies. Once the user accepts, the consent is saved using localStorage, and the popup won't appear on subsequent visits.

**Skills Demonstrated:**
- DOM manipulation with `querySelector`
- Event listeners (`DOMContentLoaded`, `click`)
- localStorage API for persistence
- Dynamic element styling

## ✨ Features

- ✅ Cookie consent banner on page load
- ✅ Accept and close buttons
- ✅ Persistent user consent using localStorage
- ✅ Banner doesn't reappear after acceptance
- ✅ Clean, modern UI

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No dependencies required

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Interact with the cookie consent banner

## 📁 Project Structure

```
cookie-consent/
├── index.html      # HTML structure
├── style.css       # Styling
├── script.js       # JavaScript functionality
├── README.md       # This file
└── LICENSE         # Project license
```

## 💡 How It Works

1. **First Visit:** The banner appears displaying a cookie consent message
2. **Accept Cookies:** Clicking "Accept" saves consent to localStorage and hides the banner
3. **Close Banner:** Clicking the close button hides the banner (without persisting consent)
4. **Subsequent Visits:** localStorage is checked; if consent exists, the banner doesn't appear

## 🎨 Customization

You can customize the banner by modifying:
- **HTML** in `index.html` - Change message text and button labels
- **CSS** in `style.css` - Adjust colors, fonts, positioning
- **JavaScript** in `script.js` - Modify behavior and localStorage keys

## 📚 Learning Outcomes

By completing this project, you'll understand:
- How to select and manipulate DOM elements
- Event handling and listeners
- localStorage for client-side data persistence
- Basic JavaScript timing and DOM events

## 🔗 Resources

- [Original Project on roadmap.sh](https://roadmap.sh/projects/cookie-consent)
- [MDN: DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## 📝 License

This project is licensed under the terms in the LICENSE file.
