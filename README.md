# Goblin's Demonic Tiny CSS Framework For Web Development

**License:** MIT License

Goblin's Demonic Tiny CSS Framework (GDT.CSS) is a **minimalist, modular, and responsive CSS/JS framework** for web development.  
It is designed for **fast prototyping** and **modular UI development**, with **lightweight JS components** for interactivity.

---

## Project Files

- `gdt.css` — Core CSS framework, includes base widgets (Wave 1 & 2). **Required.**  
- `gdt.css.js` — JS for interactive core widgets (menu toggles, accordions, tabs). **Required.**  
- `gdt.css-extended.css` — Extended CSS for Wave 3 widgets (toasts, spinners, timeline, etc.). **Optional.**  
- `gdt.css-extended.js` — JS for Wave 3 widgets (toasts, context menus). **Optional.**  
- `test.html` — Showcase/demo page containing all widgets and usage examples.

---

## Installation

Include the core CSS and JS in your HTML:

```html
<link rel="stylesheet" href="gdt.css">
<script src="gdt.css.js"></script>
````

For Wave 3 (extended widgets), include the optional files:

```html
<link rel="stylesheet" href="gdt.css-extended.css">
<script src="gdt.css-extended.js"></script>
```

---

## Theme Variables

GDT.CSS is **variable-driven**, so theming is simple. Variables are declared in `:root`:

```css
:root {
    --page-background: rgb(232, 232, 232);
    --page-text-color: dimgray;
    --page-font-name: Arial, Monospace;
    --page-primary-color: rgb(0, 77, 154);
    --page-secondary-color: rgb(0, 100, 199);
    --page-teritary-color: rgb(0, 128, 255);
    --page-primary-text-color: white;
    --page-shadow-color: rgba(0, 0, 0, 0.25);
    --page-highlight-color: rgba(0, 128, 255, 0.25);
}
```

Modify these values to **switch between light/dark or custom themes** without touching widget CSS.

---

## Core Widgets (Wave 1 & 2)

### 1. Navigation Bar

Responsive nav bar with **menu toggle for small screens**.

```html
<nav>
    <h1>
        GDT.CSS - Showcase
    </h1>
    <div class="items">
        <button>
            Home
        </button>
        <button>
            Downloads
        </button>
        <button>
            Source
        </button>
        <button>
            Examples
        </button>
    </div>
    <div class="menu" id="navbar-menu">
        <button>
            ☰
        </button>
    </div>
</nav>
<div class="nav-menu-options" id="nav-menu-option-elm" style="height: 0px;">
    <button>
        Home
    </button>
    <button>
        Downloads
    </button>
    <button>
        Source
    </button>
    <button>
        Examples
    </button>
</div>
<script>
    document.getElementById("navbar-menu").addEventListener('click', ()=>{
        (document.getElementById("nav-menu-option-elm").style.height == "0px")?
            document.getElementById("nav-menu-option-elm").style.height = documentgetElementById("nav-menu-option-elm").scrollHeight + 'px' : document.getElementById("nav-menu-option-elm").style.height = '0px';
    })
</script>
```

### 2. Dropdown

```html
<div class="gdt-dropdown">
    <button class="gdt-dropdown-btn">Menu ▼</button>
    <div class="gdt-dropdown-menu">
        <button>Profile</button>
        <button>Settings</button>
    </div>
</div>
```

---

### 3. Accordion

```html
<div class="gdt-accordion-item">
    <div class="gdt-accordion-header">Section 1</div>
    <div class="gdt-accordion-content">
        <p>Accordion content here.</p>
    </div>
</div>
```

### 4. Tabs

```html
<div class="gdt-tabs">
    <div class="gdt-tab active" onclick="gdtOpenTab(0)">Tab 1</div>
    <div class="gdt-tab" onclick="gdtOpenTab(1)">Tab 2</div>
</div>
<div class="gdt-tab-content show">
    <p>Content for Tab 1</p>
</div>
<div class="gdt-tab-content">
    <p>Content for Tab 2</p>
</div>
```

### 5. Progress Bar

```html
<div class="gdt-progress">
    <div class="gdt-progress-inner" id="progress-inner"></div>
</div>
<button onclick="document.getElementById('progress-inner').style.width='70%'">Fill 70%</button>
```

### 6. Badges

```html
<span class="gdt-badge">New</span>
<span class="gdt-badge">Beta</span>
```

### 7. Tooltips

```html
<div class="gdt-tooltip" data-tip="This is a tooltip!">
    <button>Hover me</button>
</div>
```

### 8. Sidebar Layout

```html
<div class="gdt-sidebar">
    <button>Dashboard</button>
    <button>Settings</button>
</div>
<div style="margin-left:270px; padding:20px;">
    Main content here
</div>
```

### 9. Grid System

```html
<div class="gdt-row">
    <div class="gdt-col gdt-col-4">33%</div>
    <div class="gdt-col gdt-col-4">33%</div>
    <div class="gdt-col gdt-col-4">33%</div>
</div>
```

---

## Extended Widgets (Wave 3 — Optional)

### 1. Pagination

```html
<div class="gdt-pagination">
    <button class="gdt-page-btn">Prev</button>
    <button class="gdt-page-btn active">1</button>
    <button class="gdt-page-btn">2</button>
    <button class="gdt-page-btn">Next</button>
</div>
```

### 2. Styled Tables

```html
<table class="gdt-table">
    <thead>
        <tr><th>ID</th><th>Name</th><th>Status</th></tr>
    </thead>
    <tbody>
        <tr><td>001</td><td>Alice</td><td><span class="gdt-badge">Active</span></td></tr>
    </tbody>
</table>
```

### 3. Spinner

```html
<div class="gdt-spinner"></div>
```

### 4. Toast Notification

```html
<button onclick="showToast()">Show Toast</button>
<div class="gdt-toast" id="gdt-toast">This is a toast!</div>
<script src="gdt.css-extended.js"></script>
```

### 5. Avatar Group

```html
<div class="gdt-avatar-group">
    <div class="gdt-avatar">A</div>
    <div class="gdt-avatar">B</div>
</div>
```

### 6. Chat Bubbles

```html
<div class="gdt-chat-bubble left">Hi there!</div>
<div class="gdt-chat-bubble right">Hello!</div>
```

### 7. Timeline

```html
<div class="gdt-timeline">
    <div class="gdt-timeline-item">
        <div class="dot"></div>
        <div class="content">Event 1</div>
    </div>
</div>
```

### 8. Stepper

```html
<div class="gdt-stepper">
    <div class="gdt-step active">1</div>
    <div class="gdt-step">2</div>
</div>
```

### 9. Breadcrumbs

```html
<div class="gdt-breadcrumb">
    <span>Home</span> &gt;
    <span>Dashboard</span> &gt;
    <span class="active">Settings</span>
</div>
```

### 10. File Upload

```html
<label class="gdt-upload">
    <input type="file">
    <span>Choose File</span>
</label>
```

### 11. Notification Bell

```html
<div class="gdt-bell">
    🔔<span class="gdt-bell-badge">3</span>
</div>
```

### 12. Range Slider

```html
<input type="range" class="gdt-range">
```

### 13. Context Menu

```html
<div class="gdt-context-area" id="ctxArea">Right click here</div>
<ul class="gdt-context-menu" id="ctxMenu">
    <li>Cut</li>
    <li>Copy</li>
    <li>Paste</li>
</ul>
<script src="gdt.css-extended.js"></script>
```

---

## Usage Tips

* Include **only the core files** for lightweight projects.
* Include **extended files** if you need advanced widgets (Wave 3).
* Modify `:root` variables to **switch theme or adjust appearance**.
* All interactive components (tabs, accordions, menus) require their corresponding JS file.

---

## Demo

Check `test.html` for a **full showcase** of all Wave 1-3 widgets, including working JS demos.

---

## License

MIT License — see [LICENSE](LICENSE) file.

---

**Goblin’s Demonic Tiny CSS Framework** — minimal, modular, demonically efficient.
