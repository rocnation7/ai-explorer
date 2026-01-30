# AI in Practice - Wealth & Asset Management

A premium thought leadership platform demonstrating how AI can responsibly transform wealth advisory workflows.

## Project Overview

This is a client-facing marketing and educational website built for Lazard, targeting wealth advisors, RIAs, and investment professionals. The platform showcases AI-enabled workflows with a focus on practical, compliance-aware implementation.

### Key Features

- **Role-Based Hubs**: Personalized content for Wealth Advisors, RIA Principals, CIOs, and Client Service teams
- **Use Case Library**: Detailed before/after workflow comparisons with implementation guidance
- **Interactive Workflow Simulator**: Experience AI prompt refinement from naive to advisor-ready outputs
- **Email Capture System**: Lead generation with CRM integration points
- **Meta Story**: Transparent look at how AI was used to build the site itself

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (Shadcn/ui patterns)
- **Fonts**: DM Sans (body), Playfair Display (serif/display)
- **Icons**: Lucide React
- **Animations**: Framer Motion (optional enhancement)

## Design Philosophy

**Financial Editorial Luxury** - inspired by premium financial publications (FT, Bloomberg). Key aesthetic elements:

- Elegant serif typography (Playfair Display) paired with clean sans-serif (DM Sans)
- Sophisticated navy/charcoal palette with warm gold accents (#b8945f)
- Generous whitespace and editorial-style layouts
- Subtle, tasteful animations
- Professional credibility over flashy design

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
ai-explorer/
├── app/
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles and CSS variables
│   ├── roles/
│   │   ├── page.tsx            # Role hub overview
│   │   └── [role]/page.tsx     # Individual role pages
│   ├── use-cases/
│   │   ├── page.tsx            # Use case library
│   │   └── [slug]/page.tsx     # Individual use cases
│   ├── simulator/page.tsx      # Workflow simulator
│   └── built-with-ai/page.tsx  # Meta story page
├── components/
│   ├── ui/                     # Shadcn UI components
│   ├── navigation.tsx          # Main navigation
│   ├── hero-section.tsx        # Homepage hero
│   ├── role-cards.tsx          # Role selection cards
│   ├── workflow-simulator.tsx  # Interactive simulator
│   ├── email-capture-modal.tsx # Lead capture form
│   └── footer.tsx              # Site footer
├── lib/
│   └── utils.ts                # Utility functions (cn, etc.)
└── public/
    └── images/                 # Static assets
```

## Content Management

### Current Approach (MVP)
Content is embedded in TypeScript files as structured data objects. This approach:
- ✅ Fast to implement
- ✅ Type-safe
- ✅ Version controlled
- ⚠️ Requires developer for content updates

### Future Enhancement Options

1. **MDX Files** (Next step)
   - Content as Markdown with React components
   - Git-based workflow
   - Easy for technical content creators

2. **Headless CMS** (Enterprise)
   - Contentful, Sanity, or similar
   - Non-technical editor experience
   - Editorial workflow support

## Accessibility

The site is built to WCAG 2.1 AA standards:

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliance
- Reduced motion support (`prefers-reduced-motion`)
- Screen reader friendly

## Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### Optimization Strategies
- Next.js Image optimization
- Font optimization with `next/font`
- Route-based code splitting
- Static page generation where possible

## Lead Capture & Analytics

### Email Capture
Modal triggers:
- After viewing 3+ use case pages
- Completing workflow simulator
- Explicit "Get Updates" CTA

Captured fields:
- Email (required)
- Role (required)
- Firm type (optional)
- AUM band (optional)
- Marketing consent (required)

### Integration Points
The email capture system is ready to integrate with:
- Marketing automation (Marketo, HubSpot, etc.)
- CRM systems (Salesforce, etc.)
- Analytics platforms (Segment, etc.)

Currently logs to console - add API endpoints in production.

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The site is a standard Next.js app and can deploy to:
- Azure Static Web Apps
- AWS Amplify
- Netlify
- Self-hosted with Node.js

## Roadmap

### Phase 1 - MVP ✅
- Homepage + POV
- Role hubs (4 roles)
- 2 sample use cases
- Email capture
- Workflow simulator
- Built with AI page

### Phase 2 - Content Expansion
- [ ] 10-15 complete use cases
- [ ] MDX content system
- [ ] Advanced filtering/search
- [ ] Personalization based on role

### Phase 3 - Intelligence
- [ ] CRM integration
- [ ] Analytics dashboard
- [ ] A/B testing framework
- [ ] Lead scoring

### Phase 4 - Differentiation
- [ ] Interactive expansions
- [ ] Executive briefing generator
- [ ] Events/webinar tie-ins
- [ ] Community features

## Contributing

This is a client project. Internal team members should:
1. Create feature branches from `main`
2. Follow existing code patterns and design system
3. Test accessibility and performance
4. Submit PRs with clear descriptions

## License

Proprietary - Lazard Asset Management

## Contact

For questions about this project:
- **Product Owner**: Anthony Nicastro
- **Development Team**: [Your team contact]

---

Built with ❤️ and 🤖 AI assistance
