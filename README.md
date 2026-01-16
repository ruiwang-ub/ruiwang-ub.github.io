# Rui Wang - Personal Academic Website

This is a personal portfolio website for Rui Wang, Assistant Professor in Communication and Media at Loyola University Maryland. The website showcases academic publications, research metrics from Google Scholar, and professional information.

## 🌐 Live Website

- **Production**: [https://ruiwangcomm.com](https://ruiwangcomm.com)
- **GitHub Pages**: [https://ruiwang-ub.github.io](https://ruiwang-ub.github.io)

## 🛠️ Technology Stack

- **Frontend**: React 17, React Router, Bootstrap
- **Deployment**: GitHub Pages
- **Data Source**: Google Scholar (via SerpAPI)
- **Build Tool**: Create React App

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Git**
- **SerpAPI Key** (for updating Google Scholar data)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ruiwang-ub/ruiwang-ub.github.io.git
cd ruiwang-ub.github.io
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root:

```bash
SKIP_PREFLIGHT_CHECK=true
SERPAPI_KEY=your_serpapi_key_here
```

**Important**:
- The `.env` file is already in `.gitignore` and will NOT be committed to the repository
- Get your SerpAPI key from [https://serpapi.com](https://serpapi.com)
- You need this key to update Google Scholar data

### 4. Run Locally

```bash
npm start
```

The website will open at [http://localhost:3001](http://localhost:3001)

## 📊 Updating Publication Data

The website displays publication data from Google Scholar. To update this data:

### Option 1: Update Everything at Once (Recommended)

```bash
npm run update-all
```

This command will:
1. Fetch the latest data from Google Scholar
2. Update both the Home page metrics and Publications page

### Option 2: Update Step by Step

```bash
# Step 1: Fetch latest Google Scholar data
npm run update-scholar-data

# Step 2: Convert to Publications page format
npm run update-constants
```

### After Updating Data

1. **Review the changes**:
   ```bash
   git diff src/data/scholar-data.json
   git diff src/Constants.js
   ```

2. **Check for new publications**: The script will report any new publications added. You should manually add DOI, PDF, and GitHub links for new publications in `src/Constants.js` if available.

3. **Test locally**:
   ```bash
   npm start
   ```

4. **Commit the changes**:
   ```bash
   git add src/data/scholar-data.json src/Constants.js
   git commit -m "Update publication data"
   git push
   ```

## 🚢 Deployment

The website is deployed to GitHub Pages. To deploy:

### Deploy to Production

```bash
npm run deploy
```

This command will:
1. Build the production version of the website
2. Copy the CNAME file (for custom domain)
3. Deploy to the `gh-pages` branch
4. The website will be live at [https://ruiwangcomm.com](https://ruiwangcomm.com) in a few minutes

### Build Only (Without Deploying)

```bash
npm run build
```

The production files will be in the `build/` directory.

## 📁 Project Structure

```
ruiwang-ub.github.io/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── Home/       # Home page with Scholar metrics
│   │   ├── Projects/   # Publications page
│   │   ├── Resume/     # Resume/CV page
│   │   └── Navbar.js   # Navigation bar
│   ├── data/
│   │   └── scholar-data.json  # Cached Google Scholar data
│   ├── Constants.js    # Publication data for Publications page
│   └── App.js          # Main app component
├── scripts/
│   ├── update-scholar-data.js      # Fetch Google Scholar data
│   ├── convert-scholar-to-constants.js  # Convert to Constants.js format
│   └── README.md       # Detailed script documentation
├── .env                # Environment variables (DO NOT COMMIT)
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run the website locally at http://localhost:3001 |
| `npm run build` | Build production version |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run update-scholar-data` | Fetch latest Google Scholar data |
| `npm run update-constants` | Convert scholar data to Publications format |
| `npm run update-all` | Update both scholar data and Constants.js |

## 🔧 Common Tasks

### Adding a New Publication Manually

1. Open `src/Constants.js`
2. Add a new publication object following this format:

```javascript
{
  year: "2025",
  title: "Your Publication Title",
  authors: ["Wang, R.", "Co-Author, A."],
  venue: "Journal Name, Volume(Issue), Pages, Year",
  citations: 0,
  links: {
    doi: "https://doi.org/...",
    pdf: "https://...",
    scholar: "https://scholar.google.com/..."
  },
  tags: ["Tag1", "Tag2"],
  type: "Article"  // Options: Article, Method, Dataset, Book Chapter, Book Review
}
```

3. Save and test locally
4. Commit and deploy

### Updating Personal Information

- **Bio and research interests**: Edit `src/components/Home/Home.js`
- **Resume/CV**: Replace `src/Assets/Rui_Wang_CV.pdf`
- **Profile photo**: Replace `src/Assets/rui.jpg`
- **Social media links**: Edit `src/components/SocialMedia.js`

### Changing Website Styling

- **Global styles**: Edit `src/style.css`
- **Component-specific styles**: Edit the corresponding `.css` file in the component folder

## 🔐 Security Notes

- **Never commit** the `.env` file
- **Never hardcode** API keys in the code
- The SerpAPI key is only used locally to fetch data
- The deployed website uses cached data (no API keys exposed)

## 🐛 Troubleshooting

### Issue: "SERPAPI_KEY environment variable is required"

**Solution**: Make sure you have created a `.env` file with your SerpAPI key:
```bash
echo "SERPAPI_KEY=your_actual_key_here" >> .env
```

### Issue: "There might be a problem with the project dependency tree"

**Solution**: Add `SKIP_PREFLIGHT_CHECK=true` to your `.env` file

### Issue: Website not updating after deployment

**Solution**:
1. Clear your browser cache
2. Wait 2-3 minutes for GitHub Pages to update
3. Check the `gh-pages` branch to verify the deployment

### Issue: Build fails with OpenSSL error

**Solution**: The project already uses `NODE_OPTIONS='--openssl-legacy-provider'` in the scripts. If you still have issues, try:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm run build
```

## 📞 Support

For detailed information about the update scripts, see `scripts/README.md`

## 📄 License

This is a personal website. Please contact Rui Wang before reusing any content.

---

**Last Updated**: January 2026