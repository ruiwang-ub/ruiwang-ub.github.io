# Rui Wang - Personal Academic Website

The personal academic website of Rui Wang, Assistant Professor in the Department of Communication and Media at Loyola University Maryland.

- **Production**: [https://ruiwangcomm.com](https://ruiwangcomm.com)
- **GitHub Pages**: [https://ruiwang-ub.github.io](https://ruiwang-ub.github.io)

## Technology

- React 17, Create React App 4, and React Router 5
- Plain CSS in `src/styles/site.css`, with Newsreader and Inter from Google Fonts
- Markdown for long-form copy, and JavaScript data files for news, courses, publications, student voices, and the profile
- A Puppeteer step after every build that saves each page as static HTML and writes `404.html`, `sitemap.xml`, and the social-sharing image `thumbnail.png`

## Getting started

```bash
npm install
npm start
```

The site runs at [http://localhost:3001](http://localhost:3001). `npm start` also watches `src/content/pages/` and reloads the page when you edit a Markdown file.

## Editing content

| What | File |
| --- | --- |
| Recent News (the eight newest show on the home page) | `src/content/news.js` |
| Courses | `src/content/courses.js` |
| Google Scholar citations and h-index on the Research page | Read automatically from the Scholar profile in `src/content/profile.js`; see [Google Scholar numbers](#google-scholar-numbers) |
| Name, title (`honorific`), role, email, profile links, faculty profile, headshot | `src/content/profile.js` |
| CV link (Google Drive), shown on the CV page and used by its Download button | `src/content/profile.js` (`cvUrl`) |
| Publications grouped by research area | `src/content/publications.js` |
| Student Voices excerpts | `src/content/studentVoices.js` |
| Home bio, About Me, Research, Current Projects, Teaching, Teaching Philosophy, Student Voices intro, and Contact copy | `src/content/pages/*.md` |
| Descriptions on the Research and Teaching landing pages | `src/content/navigation.js` |
| Page titles and search descriptions | `src/config/routes.json` |
| Production domain for canonical URLs and the sitemap | `src/config/site.json` and `public/robots.txt` |

### Hiding a page

To take a page offline without deleting it, add `"hidden": true` to its entry in `src/config/routes.json`. The page disappears from the menus, the Research and Teaching landing pages, the sitemap, and the build, and its address shows the "Page not found" page. Its code and copy stay in the repo, so removing the flag brings it back. Current Projects is hidden this way.

### News entries

Each entry has a `date`, a `category`, a `headline`, one sentence of `text`, and an optional `link` with a `label` and `url`.

- Dates can be a full date (`"2026-11-19"`), a month (`"2026-09"`), or a year (`"2026"`). The site shows the precision you enter.
- Entries are sorted newest first. Year-only entries appear after dated entries from the same year, and month-only entries after full dates in the same month. Entries with the same date keep the order of the file.
- Categories: `publication`, `conference`, `grant`, `award`, `teaching`, `appointment`.
- A link without a `url` is hidden.

### Courses

Each course has a `title`, an optional `code`, a `role`, its `semesters`, and, for Loyola courses, a one-line `summary`. Write semesters compactly: `F` for Fall or `S` for Spring plus the two-digit year, such as `"F25, S26, F26"`. Notes go in parentheses, such as `"S27 (planned)"` or `"F22, S23 (lecturer), S22 (teaching assistant)"`. Set `inDevelopment: true` to list a Loyola course under In development.

### Google Scholar numbers

The Research page shows the citation count and h-index from the Google Scholar profile linked in `src/content/profile.js`, with the date they were read. Google Scholar has no public API, and browsers can't load its pages from another site, so the numbers are read when the site is built, not while someone views the page. `npm start`, `npm run build`, and `npm run deploy` first run `scripts/fetch-scholar.js`, which saves the numbers to `src/content/scholar.generated.json` (not committed). The live site picks up new numbers each time you publish. To refresh them without building, run `npm run scholar`.

If Google Scholar can't be reached or its page layout changes, the script keeps the last numbers saved on that computer, or leaves the numbers off the Research page if there are none. The build carries on either way. Tests never contact Google Scholar.

### Email address

The email is stored in two parts in `src/content/profile.js` (`email: { user: "rwang", domain: "loyola.edu" }`). The site shows it as "rwang [at] loyola.edu" and builds the real `mailto:` link only when someone clicks it, so the full address never appears in the page source. Without JavaScript, the email links open the Contact page.

### Headshot

The home page serves the headshot from `public/images/rui-wang-320.jpg`, `-640.jpg`, and `-1024.jpg`. To replace it, save a square image of at least 1024 × 1024 pixels as `src/Assets/rui.jpg`, regenerate the three sizes, and update `headshot.alt` in `src/content/profile.js`:

```bash
for size in 320 640 1024; do sips -Z $size --setProperty formatOptions 62 src/Assets/rui.jpg --out public/images/rui-wang-$size.jpg; done
```

## Build

```bash
npm run build
```

This reads the latest [Google Scholar numbers](#google-scholar-numbers), builds the app into `build/`, then `scripts/prerender.js` saves each page listed in `src/config/routes.json` as `build/<route>/index.html` and writes `build/404.html`, `build/sitemap.xml`, and `build/thumbnail.png`. Canonical URLs end in a slash (for example `https://ruiwangcomm.com/about/`) because GitHub Pages serves each page from its own folder.

## Tests

```bash
npm test
```

## Deployment

```bash
npm run deploy
```

This builds the site, copies `CNAME` into `build/`, and publishes `build/` to the `gh-pages` branch.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the site locally at http://localhost:3001 |
| `npm run build` | Build and prerender the production site into `build/` |
| `npm test` | Run the tests |
| `npm run deploy` | Build and publish to GitHub Pages |
| `npm run content` | Regenerate `src/content/pages.generated.js` from the Markdown files |
| `npm run scholar` | Refresh the Google Scholar citations and h-index shown on the Research page |

## Google Scholar data scripts

`npm run update-all` still fetches Google Scholar data through SerpAPI into `src/data/scholar-data.json` and `src/Constants.js`, but the redesigned site no longer reads those files. The scripts need a `SERPAPI_KEY` in `.env`, which must never be committed. See `scripts/README.md`. The numbers on the Research page come from `npm run scholar` instead, which needs no key.

## Troubleshooting

### Build fails with an OpenSSL error

The npm scripts already set `NODE_OPTIONS=--openssl-legacy-provider`. If you run `react-scripts` directly, set it first:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

## License

This is a personal website. Please contact Rui Wang before reusing any content.
