# TxAccelerator

A modern landing page for TxAccelerator - an advanced clinical assessment platform for healthcare providers.

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Fonts**: Inter (sans-serif) and Lora (serif)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts
│   │   ├── page.tsx        # Main page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Header.tsx      # Fixed header with logo and CTAs
│   │   ├── Hero.tsx        # Hero section with stats
│   │   ├── Features.tsx    # Features grid
│   │   ├── Screenshots.tsx # Product screenshots
│   │   ├── CTA.tsx         # Call-to-action section
│   │   ├── ContactForm.tsx # Contact/trial form
│   │   └── ui/             # Reusable UI components
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/
│   ├── logo.png            # TxAccelerator logo
│   ├── screenshot-1.png    # Product screenshot 1
│   └── screenshot-2.png    # Product screenshot 2
```

## Adding Images

Place the following images in the `public/` folder:

1. `logo.png` - Your TxAccelerator logo
2. `screenshot-1.png` - First product screenshot
3. `screenshot-2.png` - Second product screenshot

## Deployment to Cloud Run

1. Build the Docker image:

```bash
docker build -t txaccelerator .
```

2. Tag for Google Container Registry:

```bash
docker tag txaccelerator gcr.io/YOUR_PROJECT_ID/txaccelerator
```

3. Push to GCR:

```bash
docker push gcr.io/YOUR_PROJECT_ID/txaccelerator
```

4. Deploy to Cloud Run:

```bash
gcloud run deploy txaccelerator \
  --image gcr.io/YOUR_PROJECT_ID/txaccelerator \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Customization

- **Colors**: Edit the color scheme in `tailwind.config.ts`
- **Content**: Update text in component files
- **Forms**: Integrate ContactForm with your backend API

## License

Proprietary - TxAccelerator
