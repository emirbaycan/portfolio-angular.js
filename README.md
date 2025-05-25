# Portfolio Angular

A modern, responsive, and customizable personal portfolio website built with Angular.

## Features

* Modern Angular architecture (Angular CLI)
* Responsive design, SCSS theming
* Easy to customize content and styles
* Ready for deployment on any static host

## Project Structure

```
src/
  app/              # Angular components and main app logic
  assets/           # Images and static assets
  environments/     # Environment configs
  favicon.ico
  fonts.scss        # Custom fonts
  index.html        # Main HTML entry
  main.ts           # App bootstrap
  manifest.webmanifest
  polyfills.ts      # Browser polyfills
  styles.scss       # Global styles
  test.ts           # Test setup
  variables.scss    # SCSS variables
.angular/           # Angular config files
node_modules/       # Dependencies
angular.json        # Angular workspace config
karma.conf.js       # Unit testing config
LICENSE
package.json        # Project metadata and dependencies
README.md           # Project documentation
tslint.json         # Lint rules
```

## Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/emirbaycan/portfolio-angular.js.git
   cd portfolio-angular.js
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app locally**

   ```bash
   ng serve
   ```

   Visit [http://localhost:4200](http://localhost:4200)

## Customization

* **Content**: Edit files in `src/app/` for your sections (about, projects, experience, etc.)
* **Images**: Place your images in `src/assets/`
* **Theme**: Customize SCSS variables in `src/variables.scss` and global styles in `src/styles.scss`

## Build & Deploy

Build for production:

```bash
ng build --configuration production
```

Output will be in the `/dist/` folder. Deploy these files to your preferred static host (Vercel, Netlify, Firebase, etc).

## License

[MIT License](LICENSE)

## Author

Developed by [Emir Baycan](https://emirbaycan.com.tr/)
