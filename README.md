# Shahzad Panhwar — Portfolio

This project has been separated into individual files so each part can be edited independently.

## Project structure

```text
shahzad-portfolio/
├── index.html          # Page content and structure
├── style.css           # All page styling and responsive layouts
├── script.js           # Menu, animations, typewriter and background effects
├── assets/
│   └── profile.jpg    # Profile photo extracted from the original HTML
└── README.md
```

## How to edit

- **Text, links, sections:** edit `index.html`.
- **Colors, fonts, spacing, responsive design:** edit `style.css`. Main theme variables are at the top in `:root`.
- **Interactions and animations:** edit `script.js`.
- **Profile photo:** replace `assets/profile.jpg` with your image (keep the same filename, or update the image path in `index.html`).

## Run locally

Open `index.html` in a browser. For development, you can also use the VS Code **Live Server** extension.

## Deploy

Upload the contents of this folder to a GitHub repository and enable GitHub Pages from **Settings → Pages**. Keep the folder structure unchanged.

## Notes

- The existing visual design and page content have been preserved while extracting the embedded CSS, JavaScript and profile image.
- `resume.pdf` is referenced by the Download Resume button in the page. Add your resume PDF to this project root, or update/remove that link.
- Review the personal details and project claims in `index.html` before publishing.


### Latest update — sidebar contact details
- Added Phone and Email details directly below the Contact item in the slide-out menu. Both are clickable (`tel:` and `mailto:`).
- Removed the Phone and Email cards from the Contact section; the Contact heading, “Let's build something together” wording, and footer remain unchanged.
- No other portfolio content or assets were changed.


### Recent update
- Moved the Phone and Email details out of the sidebar menu and into the footer, immediately before the social media icons. Both remain clickable.


### Footer layout correction
- Positioned the Phone and Email details horizontally to the **left** of the social media icons in the footer on wider screens.
- On narrow screens, the footer items stack neatly for responsive layout.
- Both contact links and all other content remain unchanged.


### Footer layout update — November 6, 2026
- Stacked Email above Phone on the left side of the footer.
- Kept the social media icons centred horizontally in the footer.
- On narrow screens, contact details remain vertically stacked on the left and social icons remain centred below them.
- Phone and email links remain clickable; all other content and assets are unchanged.
