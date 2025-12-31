# Windby - Zento Style Ghost Theme

A modern Ghost theme based on the Zento design, featuring a clean and minimalist layout with powerful features.

**Features:**
- Clean, minimalist design inspired by Zento
- Responsive layout optimized for all devices
- Trending topics section with custom tag colors
- Sticky sidebar with collapsible topics index
- Classic article card layout with metadata
- Hero section with newsletter subscription
- SVG icon system
- Member authentication support
- Full Ghost 6.x compatibility

# Installation

1. [Download this theme](https://github.com/yorelll/windby/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Theme styles are compiled using Gulp/PostCSS. You'll need [Node](https://nodejs.org/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install dependencies
npm install

# Run build & watch for changes
npm run dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` task packages the theme files into `dist/windby.zip`, which you can then upload to your site.

```bash
npm run zip
```

# Theme Structure

## Templates
- `default.hbs` - Base template with header and footer
- `index.hbs` - Homepage with hero, trending topics, and article feed
- `post.hbs` - Single post/article layout
- `page.hbs` - Static page layout
- `tag.hbs` - Tag archive page
- `author.hbs` - Author archive page

## Partials
- `partials/header.hbs` - Minimalist sticky header
- `partials/footer.hbs` - Footer with social links
- `partials/sidebar.hbs` - Topics index sidebar
- `partials/loop.hbs` - Article card template
- `partials/icons/` - SVG icon components

## Styles
- `assets/css/zento/vars.css` - CSS variables and tag colors
- `assets/css/zento/fonts.css` - Font-face declarations
- `assets/css/zento/base.css` - Base styles and grid system
- `assets/css/zento/header.css` - Header styles
- `assets/css/zento/hero.css` - Hero section styles
- `assets/css/zento/categories.css` - Category/tag styles
- `assets/css/zento/sidebar.css` - Sidebar styles
- `assets/css/zento/articles.css` - Article card styles
- `assets/css/zento/footer.css` - Footer styles

## Assets
- DM Sans (400, 700) - Body font
- Urbanist (500, 600, 700, 800) - Heading font
- SVG icon sprite system

# Customization

## Theme Settings

Configure these in Ghost Admin → Settings → Design:

- **Email** - Contact email address
- **QQ** - QQ contact ID
- **RSS Link** - Custom RSS feed URL (optional)

## Tag Colors

Tags are automatically colored based on their slug. Predefined colors include:
- CSS (#227dff)
- Code (#ff2ed9)
- Databases (#5751ff)
- Deployment (#2a2728)
- Guides (#3aa9fd)
- HTML (#ff8e51)
- JavaScript (#ffcb29)
- SQL (#f95353)
- Tech (#4775ff)

Add custom tag colors in `assets/css/zento/vars.css`.

# Testing

Run Ghost theme compatibility checks:

```bash
npm test
```

# Credits

Design inspired by the Zento theme by EstudioPatagon.
Built for Ghost CMS.

# Copyright & License

Copyright (c) 2024-2025 yorelll - Released under the [MIT license](LICENSE).

