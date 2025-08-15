# COGSEC - Secure Your Mind

A futuristic AI detection and cognitive security platform inspired by Evangelion aesthetics, featuring black and green color schemes with glassy, futuristic design elements.

## Features

- **AI Analyzer**: Glassy analyzer that simulates AI/human detection with logo display
- **Evangelion-inspired Design**: Black background with neon green accents
- **Main Sections**:
  - **Story**: The origin and mission of Cogsec with integrated gallery images
  - **Gallery**: Interactive modal gallery with your uploaded images
  - **Contact**: Secure communications with crypto address and social links

## Design Elements

- Futuristic glassy interface with MacBook-like aesthetics
- Matrix-style background effects
- Orbitron font for that sci-fi feel
- Animated scanning effects
- Backdrop blur and glass morphism
- Neon glow effects
- Responsive design

## Setup Instructions

### Option 1: Direct HTML (Immediate Use)
Simply open `index.html` in your web browser. All styles and scripts are included inline.

### Option 2: React Development Setup
1. Install Node.js (https://nodejs.org/)
2. Open terminal/command prompt
3. Navigate to the cogsec folder: `cd path/to/cogsec`
4. Install dependencies: `npm install`
5. Start development server: `npm start`
6. Open http://localhost:3000 in your browser
7. For production build: `npm run build`

### Option 3: Quick Start
```bash
# Clone or download the project
cd cogsec
npm install
npm start
```

### Option 4: Vercel Deployment
1. **Push to GitHub**: Upload your project to a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com) and sign up
   - Click "New Project" and import your GitHub repository
   - Vercel will auto-detect it's a React app
3. **Deploy**: Click "Deploy" - Vercel handles everything automatically
4. **Custom Domain**: Add your custom domain in Vercel dashboard (optional)

**Vercel Build Settings:**
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

## Structure

```
cogsec/
├── index.html          # Main website file (standalone)
├── package.json        # React configuration
├── README.md          # This file
├── public/            # Public assets
│   ├── logo.png       # Cogsec logo
│   ├── Banner.png     # Main banner image
│   └── gallery/       # Gallery images (1.png to 16.png)
└── src/               # React components (for development)
    ├── components/    # Individual React components
    └── styles/       # CSS stylesheets
```

## Color Scheme

- **Primary Background**: Black (#000000)
- **Matrix Green**: #00ff41 (main accent)
- **Secondary Green**: #00aa2b (variations)
- **Warning Yellow**: #ffff00 (for warnings)
- **Glass Effect**: Transparent with backdrop blur
- **Text**: White/light gray for readability

## Sections Overview

### 1. Loading Screen
Displays your Cogsec logo during the AI detection simulation phase.

### 2. Story Section
Starts with your banner as a hero image, followed by the origin story of Cogsec enhanced with integrated gallery images for visual storytelling.

### 3. Gallery
Interactive image gallery with modal viewing, populated with your uploaded images.

### 4. Contact
Secure communications section featuring the crypto wallet address with copy functionality and Twitter/X social link.

## Next Steps

1. ✅ **Gallery**: Fully populated with your uploaded images and interactive modal viewing
2. ✅ **Logo & Banner**: Strategically placed - logo in loading, banner in main site
3. ✅ **Story Enhancement**: Integrated with gallery images for rich visual storytelling
4. ✅ **Contact Information**: Added crypto address and Twitter link with secure styling
5. ✅ **Streamlined Navigation**: Three focused sections (Story, Gallery, Contact)
6. **Customization**: Continue modifying content, colors, or add new features as needed

## Technologies Used

- HTML5
- CSS3 (with modern features like backdrop-filter)
- Vanilla JavaScript
- React 18
- Google Fonts (Orbitron)
- CSS Grid and Flexbox
- CSS Animations and Keyframes
- Vercel (deployment ready)

## Deployment

### Quick Deploy to Vercel:
1. **Push to GitHub**: Upload this project to a GitHub repository
2. **Connect Vercel**: Go to [vercel.com](https://vercel.com) and import your repo
3. **Auto-Deploy**: Vercel detects React and deploys automatically
4. **Live Site**: Your Cogsec site will be live with a `.vercel.app` domain

### Files Included for Deployment:
- ✅ `vercel.json` - Vercel configuration
- ✅ `.vercelignore` - Deployment ignore rules
- ✅ `deploy.sh` / `deploy.bat` - Helper scripts
- ✅ `DEPLOYMENT.md` - Detailed deployment guide

### Alternative Deployment:
The project also works with other hosting platforms:
- **Netlify**: Drag & drop the `build` folder
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: `firebase deploy`
- **Static hosting**: Any web server can serve the built files

---

**SECURE YOUR MIND. PROTECT YOUR THOUGHTS. RESIST THE MACHINES.**
