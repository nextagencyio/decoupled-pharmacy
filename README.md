# Decoupled Pharmacy

A community pharmacy and health services website starter template for Decoupled Drupal + Next.js. Built for independent pharmacies, compounding pharmacies, retail pharmacy chains, and health-focused businesses.

![Decoupled Pharmacy Screenshot](docs/screenshot.png)

## Features

- **Services** - Showcase pharmacy services including prescriptions, immunizations, compounding, and clinical offerings with availability and insurance details
- **Health Tips** - Publish health and wellness articles authored by pharmacists with topic categorization and publication dates
- **Locations** - Display store locations with addresses, hours, phone numbers, available services, drive-through info, and lead pharmacist details
- **Modern Design** - Clean, accessible UI optimized for pharmacy and healthcare content

## Quick Start

### 1. Clone the template

```bash
npx degit nextagencyio/decoupled-pharmacy my-pharmacy
cd my-pharmacy
npm install
```

### 2. Run interactive setup

```bash
npm run setup
```

This interactive script will:
- Authenticate with Decoupled.io (opens browser)
- Create a new Drupal space
- Wait for provisioning (~90 seconds)
- Configure your `.env.local` file
- Import sample content

### 3. Start development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Manual Setup

If you prefer to run each step manually:

<details>
<summary>Click to expand manual setup steps</summary>

### Authenticate with Decoupled.io

```bash
npx decoupled-cli@latest auth login
```

### Create a Drupal space

```bash
npx decoupled-cli@latest spaces create "My Pharmacy"
```

Note the space ID returned. Wait ~90 seconds for provisioning.

### Configure environment

```bash
npx decoupled-cli@latest spaces env 1234 --write .env.local
```

### Import content

```bash
npm run setup-content
```

This imports:
- Homepage with hero, stats (500,000+ prescriptions filled, 35+ years, 3 locations, 12 pharmacists), and prescription transfer CTA
- 3 services: Prescription Filling & Refills, Immunizations & Vaccines, Custom Compounding
- 3 health tips: Medication Safety at Home, Preparing for Flu Season, Understanding Blood Pressure Numbers
- 3 locations: Downtown, Oakwood, Riverside
- 2 static pages: About Cornerstone Pharmacy, Insurance & Pricing

</details>

## Content Types

### Service
- **image**: Service promotional image
- **summary**: Brief description of the service
- **availability**: When and where the service is available
- **insurance_accepted**: Whether insurance is accepted for this service
- **service_category**: Category taxonomy (Prescription Services, Immunizations, Clinical Services, Compounding, Delivery, Specialty Pharmacy, Wellness)

### Health Tip
- **image**: Featured article image
- **summary**: Brief article summary
- **topic**: Topic taxonomy (Medication Safety, Chronic Disease, Nutrition, Seasonal Health, Preventive Care, Mental Wellness, Heart Health)
- **author_name**: Article author (e.g., pharmacist name and credentials)
- **published_date**: Publication date

### Location
- **image**: Location photo
- **address / city / state_province / postal_code**: Full mailing address
- **phone / fax**: Contact numbers
- **hours**: Hours of operation (HTML formatted)
- **services_available**: List of services offered at this location
- **has_drive_through**: Whether drive-through pickup is available
- **pharmacist_name**: Lead pharmacist at this location

### Homepage
- **hero_title**: Main headline (e.g., "Your Neighborhood Pharmacy, Reimagined")
- **hero_subtitle**: Pharmacy name or tagline
- **hero_description**: Welcome message
- **stats_items**: Key statistics (prescriptions filled, years, locations, pharmacists)
- **featured_items_title**: Section heading for services
- **cta_title / cta_description**: Prescription transfer call-to-action block

### Basic Page
- General-purpose static content pages (About, Insurance & Pricing, etc.)

## Customization

### Colors & Branding
Edit `tailwind.config.js` to customize colors, fonts, and spacing.

### Content Structure
Modify `data/pharmacy-content.json` to add or change content types and sample content.

### Components
React components are in `app/components/`. Update them to match your design needs.

## Demo Mode

Demo mode allows you to showcase the application without connecting to a Drupal backend.

### Enable Demo Mode

```bash
NEXT_PUBLIC_DEMO_MODE=true
```

### Removing Demo Mode

1. Delete `lib/demo-mode.ts`
2. Delete `data/mock/` directory
3. Delete `app/components/DemoModeBanner.tsx`
4. Remove `DemoModeBanner` from `app/layout.tsx`
5. Remove demo mode checks from `app/api/graphql/route.ts`

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/decoupled-pharmacy)

### Other Platforms
Works with any Node.js hosting platform that supports Next.js.

## Documentation

- [Decoupled.io Docs](https://www.decoupled.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drupal GraphQL](https://www.decoupled.io/docs/graphql)

## License

MIT
