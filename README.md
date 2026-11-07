# Shahzad Panhwar — Portfolio

This project has been separated into individual files so each part can be edited independently.

## Project structure

```text
shahzad-portfolio/
├── index.html          # Page content and structure
├── style.css           # All page styling and responsive layouts
├── script.js           # Menu, animations, typewriter and background effects
├── favicon.svg         # Browser tab icon
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
