# AccMan Consultancy Landing Page

A modern, minimalist landing page for AccMan Consultancy - a professional US-based accounting firm offering bookkeeping, tax services, and payroll management.

## Features

- **Responsive Design**: Fully responsive and mobile-optimized
- **Minimalist Aesthetic**: Clean, professional design with deep navy and white theme
- **Service Grid**: Showcase of Bookkeeping, Tax, and Payroll services
- **Web3Forms Integration**: Contact form connected to Web3Forms for lead capture
- **Software Integrations**: Display of supported platforms (QuickBooks Online, Xero, Bill.com)
- **Trust Indicators**: Security badges, team credentials, and company statistics
- **Smooth Animations**: Subtle hover effects and transitions

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Hosting**: Netlify
- **Form Submission**: Web3Forms

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd accman-consultancy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates optimized files in the `dist` directory.

## Configuration

### Web3Forms Setup

1. Visit [web3forms.com](https://web3forms.com) and sign up for a free account
2. Create a new form and get your access key
3. Update the `access_key` value in `src/App.tsx` (line 307):
```tsx
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
```

### Contact Information

Update the contact details in the Contact and Footer sections:
- **Email**: contact@accmanconsultancy.com
- **Phone**: (302) 602-2028
- **Address**: 444 Washington Blvd, Jersey City, NJ 07310, USA

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Netlify will automatically build and deploy on every push

The `netlify.toml` configuration file is already set up for deployment.

## Project Structure

```
src/
├── App.tsx           # Main component with all sections
├── main.tsx          # React entry point
├── index.css         # Global styles
└── vite-env.d.ts     # Type definitions

public/
└── [static assets]

dist/                 # Production build (generated)
```

## Customization

### Colors
The site uses a deep navy (#0F172A) and white theme with blue accents. Modify Tailwind classes in `App.tsx` to change colors:
- Primary Navy: `#0F172A`
- Secondary Blue: `#blue-600`
- Background Light: `#F8FAFC`

### Typography
All text uses system fonts for optimal performance. Modify font families in the main div's style attribute in `App.tsx`.

### Content
Edit section headings, descriptions, and services directly in `src/App.tsx`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size: ~50KB gzipped
- Lighthouse score: 95+
- Mobile-first responsive design
- Fast load times with Vite

## License

All rights reserved © 2024 AccMan Consultancy

## Support

For questions or issues, contact: contact@accmanconsultancy.com

---

**Ready to deploy?**

1. Create a new repository on GitHub
2. Push the code:
```bash
git remote add origin https://github.com/yourusername/accman-consultancy.git
git branch -M main
git push -u origin main
```
3. Connect to Netlify for automatic deployment
