# Strawberry Collective Website File Directory Structure (Eleventy & Tailwind CSS)

This document outlines a proposed file directory structure for the Strawberry Collective website, specifically tailored for **Eleventy (11ty)** and **Tailwind CSS**. The structure is designed to be logical, scalable, and aligned with modern JAMstack best practices, separating content, layouts, static assets, and configuration for efficient development and content management.

```
Strawberry Collective-website/
├── src/                        # Source directory for all content and templates
│   ├── _data/                  # Global data files (e.g., navigation, social links)
│   │   ├── navigation.js
│   │   └── site.js
│   ├── _includes/              # Reusable templates and components
│   │   ├── layouts/              # Base layouts for pages
│   │   │   └── base.njk
│   │   ├── partials/             # Reusable HTML partials (e.g., header, footer, sidebar)
│   │   │   ├── header.njk
│   │   │   ├── footer.njk
│   │   │   └── sidebar.njk
│   │   └── components/           # Reusable components (e.g., cards, buttons)
│   │       ├── card.njk
│   │       └── button.njk
│   ├── assets/                 # Static assets (images, fonts, etc.)
│   │   ├── css/                  # CSS files (processed by Tailwind)
│   │   │   └── main.css
│   │   ├── js/                   # JavaScript files
│   │   │   └── main.js
│   │   └── img/                  # Images
│   │       └── strawberry.png
│   ├── content/                # All website content (Markdown files)
│   │   ├── _index.md             # Homepage content
│   │   ├── about.md
│   │   ├── services.md
│   │   ├── portfolio/
│   │   │   ├── _index.md
│   │   │   ├── project-1.md
│   │   │   └── project-2.md
│   │   ├── education/
│   │   │   ├── _index.md
│   │   │   ├── what-is-jamstack.md
│   │   │   ├── understanding-indieweb.md
│   │   │   └── exploring-digital-gardens.md
│   │   ├── blog/                 # Traditional blog posts
│   │   │   ├── _index.md
│   │   │   ├── post-title-1.md
│   │   │   └── post-title-2.md
│   │   ├── garden/               # Digital Garden notes (interconnected)
│   │   │   ├── _index.md
│   │   │   ├── concept-a.md
│   │   │   └── concept-b.md
│   │   ├── contact.md
│   │   └── showcase.md
│   └── admin/                  # (Optional) For Netlify CMS configuration
│       ├── config.yml
│       └── index.html
├── .eleventy.js                # Eleventy configuration file
├── tailwind.config.js          # Tailwind CSS configuration file
├── postcss.config.js           # PostCSS configuration file (for Tailwind)
├── .gitignore                  # Git ignore file
├── README.md                   # Project README
└── package.json                # Node.js package manager file
```

## Explanation of Key Directories (Eleventy & Tailwind CSS):

*   **`src/`**: The main source directory. Eleventy will process all files within this directory and output the final website to a `_site` or `public` folder (configurable).
    *   **`_data/`**: Stores global data files (in `.js` or `.json` format) that can be accessed by templates. This is where you would define site-wide variables, navigation menus, etc.
    *   **`_includes/`**: Contains reusable template files that are not rendered as standalone pages. This is where you'll keep your layouts, partials, and components.
        *   `layouts/`: Base templates for different page types (e.g., a default layout, a post layout).
        *   `partials/`: Smaller, reusable chunks of HTML (e.g., header, footer, sidebar).
        *   `components/`: Can be used for more complex, reusable UI components.
    *   **`assets/`**: Holds static assets like CSS, JavaScript, and images. These are typically processed and copied to the output directory.
        *   `css/`: Contains the main CSS file that will be processed by Tailwind CSS.
        *   `js/`: For your custom JavaScript files.
        *   `img/`: For images, including your strawberry emoji logo.
    *   **`content/`**: All your website content in Markdown files. The file structure here will determine the URL structure of your site.
        *   The use of subdirectories helps organize content logically (e.g., `blog/`, `garden/`, `portfolio/`).
    *   **`admin/`**: (Optional) If you choose to use Netlify CMS for content management, this directory would hold its configuration files.
*   **`.eleventy.js`**: The main configuration file for Eleventy. Here you'll define your input and output directories, template engines, collections, filters, and more.
*   **`tailwind.config.js`**: The configuration file for Tailwind CSS. You'll use this to customize your design system, including colors, fonts, and other utility classes.
*   **`postcss.config.js`**: The configuration file for PostCSS, which is used to process your CSS with Tailwind.
*   **`.gitignore`**: Specifies files and directories that Git should ignore (e.g., `_site/`, `node_modules/`).
*   **`README.md`**: Provides essential information about the project, setup instructions, and development guidelines.
*   **`package.json`**: Manages all your project's Node.js dependencies, including Eleventy, Tailwind CSS, and any other build tools.

This Eleventy-specific structure is more aligned with modern JavaScript-based static site generators and provides a clean, organized foundation for building your Strawberry Collective website with Tailwind CSS.

