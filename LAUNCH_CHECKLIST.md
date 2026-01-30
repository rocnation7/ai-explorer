# 🚀 Launch Checklist - AI in Practice

## Pre-Production Setup

### Content & Copy
- [ ] Review all copy for typos and grammatical errors
- [ ] Replace placeholder client logos in CTA section (or remove)
- [ ] Add real Lazard contact information
- [ ] Create privacy policy page at `/privacy`
- [ ] Create terms of use page at `/terms`
- [ ] Add contact form page at `/contact`
- [ ] Review all use case content for compliance language
- [ ] Get legal/compliance sign-off on all content
- [ ] Verify all external links work correctly
- [ ] Check that all internal links work correctly

### Technical Configuration
- [ ] Set up production environment variables
- [ ] Configure email capture API endpoint
  ```typescript
  // In email-capture-modal.tsx, replace console.log with:
  await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...formData, trigger })
  })
  ```
- [ ] Set up CRM integration (Salesforce/HubSpot)
- [ ] Configure marketing automation system
- [ ] Set up analytics tracking (Google Analytics 4, Segment, etc.)
- [ ] Add analytics events for key user actions
- [ ] Configure error tracking (Sentry, LogRocket)
- [ ] Set up performance monitoring
- [ ] Configure domain DNS settings
- [ ] Set up SSL certificate (auto with Vercel)
- [ ] Add robots.txt and sitemap.xml
- [ ] Configure meta tags for social sharing

### Testing
- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Edge (latest)
- [ ] Test on mobile Safari (iOS)
- [ ] Test on mobile Chrome (Android)
- [ ] Test all forms submit correctly
- [ ] Test email capture → CRM flow end-to-end
- [ ] Verify analytics events fire correctly
- [ ] Test all CTA buttons and links
- [ ] Test navigation on mobile (hamburger menu if added)
- [ ] Test keyboard navigation
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Run Lighthouse audit (target 90+ all metrics)
- [ ] Test page load speed on slow 3G
- [ ] Verify images load and are optimized
- [ ] Check for console errors
- [ ] Test "Talk to Us" CTA functionality

### Performance Optimization
- [ ] Run Lighthouse audit baseline
- [ ] Optimize images (already handled by Next.js)
- [ ] Verify font loading strategy
- [ ] Check for unnecessary JavaScript
- [ ] Test Core Web Vitals
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- [ ] Test on slow network connections
- [ ] Verify caching headers
- [ ] Check bundle size (aim for < 200KB initial JS)

### SEO
- [ ] Add page titles for all routes
- [ ] Add meta descriptions for all routes
- [ ] Add Open Graph tags for social sharing
- [ ] Add Twitter Card meta tags
- [ ] Create XML sitemap
- [ ] Submit sitemap to Google Search Console
- [ ] Add structured data (JSON-LD) for rich snippets
- [ ] Verify canonical URLs
- [ ] Check for broken links
- [ ] Add alt text to all images

### Security
- [ ] Review and update dependencies
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Configure CORS appropriately
- [ ] Set up rate limiting on API routes
- [ ] Verify no sensitive data in client code
- [ ] Add security headers (CSP, HSTS, etc.)
- [ ] Enable HTTPS only
- [ ] Test form validation and sanitization

---

## Deployment Day

### Vercel Deployment (Recommended)
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Note the deployment URL
```

### Post-Deployment Verification
- [ ] Visit production URL and verify homepage loads
- [ ] Check all navigation links work
- [ ] Test email capture form in production
- [ ] Verify analytics tracking in production
- [ ] Check CRM integration is receiving data
- [ ] Test on multiple devices
- [ ] Verify SSL certificate is active
- [ ] Check that custom domain resolves correctly
- [ ] Monitor error logs for first 24 hours
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)

### Communications
- [ ] Update Vercel project settings (custom domain, env vars)
- [ ] Notify internal stakeholders of launch
- [ ] Prepare social media announcement posts
- [ ] Draft email announcement for target audience
- [ ] Update Lazard website to link to new platform
- [ ] Prepare press release (if applicable)

---

## Week 1 Post-Launch

### Monitoring
- [ ] Check analytics daily for traffic patterns
- [ ] Review email capture conversion rate
- [ ] Monitor error logs and fix issues
- [ ] Check Core Web Vitals in Search Console
- [ ] Review CRM for lead quality
- [ ] Monitor page load times
- [ ] Check for 404 errors or broken links
- [ ] Review user feedback (if collection mechanism exists)

### Optimization
- [ ] Identify top-performing pages
- [ ] Identify pages with high bounce rates
- [ ] Review simulator completion rate
- [ ] Analyze "Talk to Us" CTA performance
- [ ] A/B test email capture trigger timing
- [ ] Review and adjust CTA copy if needed
- [ ] Fix any bugs reported by users
- [ ] Implement quick wins for performance

### Content
- [ ] Plan next 5 use cases to build
- [ ] Gather feedback from early users
- [ ] Update content based on questions received
- [ ] Start drafting Phase 2 content
- [ ] Document common questions for FAQ

---

## Environment Variables Checklist

Create `.env.local` for development and configure in Vercel for production:

```bash
# Analytics
NEXT_PUBLIC_GA_TRACKING_ID=UA-XXXXXXXXX-X
NEXT_PUBLIC_SEGMENT_WRITE_KEY=xxxxx

# CRM Integration
SALESFORCE_API_KEY=xxxxx
HUBSPOT_API_KEY=xxxxx

# Email Service
SENDGRID_API_KEY=xxxxx
EMAIL_FROM=noreply@lazard.com

# Monitoring
SENTRY_DSN=xxxxx

# API Keys (if needed)
API_SECRET_KEY=xxxxx
```

---

## API Endpoints to Create

### `/api/leads` - Email Capture
```typescript
// app/api/leads/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()

  // Validate data
  if (!data.email || !data.role) {
    return NextResponse.json(
      { error: 'Email and role are required' },
      { status: 400 }
    )
  }

  // Send to CRM (Salesforce, HubSpot, etc.)
  // await sendToCRM(data)

  // Send confirmation email
  // await sendConfirmationEmail(data.email)

  // Log for analytics
  // await logEvent('lead_captured', data)

  return NextResponse.json({ success: true })
}
```

### `/api/contact` - Contact Form
```typescript
// app/api/contact/route.ts
export async function POST(request: NextRequest) {
  // Handle contact form submission
  // Send to sales team
  // Create CRM record
}
```

---

## Analytics Events to Track

### Page Views
- Homepage view
- Role page view (by role)
- Use case view (by slug)
- Simulator view
- Built with AI view

### Interactions
- Email capture opened
- Email capture submitted
- Email capture by role/firmType/AUM
- Simulator started
- Simulator stage advanced
- Simulator completed
- "Talk to Us" CTA clicked
- Role card clicked
- Use case clicked
- Navigation item clicked

### User Flow
- Entry page
- Exit page
- Pages per session
- Average session duration
- Bounce rate
- Conversion funnel: Homepage → Role → Use Case → Email Capture

---

## Success Metrics - 30 Day Targets

### Traffic
- **Unique Visitors**: 1,000+ (depends on outreach)
- **Page Views**: 4,000+
- **Average Session Duration**: 3-5 minutes
- **Bounce Rate**: < 60%

### Engagement
- **Email Capture Rate**: 8-12% of unique visitors
- **Simulator Completion**: 40%+ of starts
- **Pages per Session**: 3-4 pages
- **Return Visitor Rate**: 15-20%

### Lead Quality
- **Total Leads**: 80-120
- **Qualified Leads**: 30-50 (based on role/AUM)
- **"Talk to Us" Conversions**: 2-3% of visitors
- **CRM Meetings Booked**: 10-15

---

## Support & Maintenance Plan

### Daily (First Week)
- Check error logs
- Monitor analytics dashboard
- Review new leads in CRM
- Respond to any issues

### Weekly
- Review weekly metrics report
- Update content as needed
- Address any bugs
- Check Core Web Vitals

### Monthly
- Comprehensive analytics review
- Add new use cases (target: 2-3/month)
- User feedback analysis
- Performance optimization
- Dependency updates

---

## Rollback Plan

If critical issues arise post-launch:

1. **Immediate**: Revert to previous Vercel deployment
   ```bash
   vercel rollback [deployment-url]
   ```

2. **Communication**: Notify stakeholders of issue
3. **Fix**: Address issue in development environment
4. **Test**: Verify fix thoroughly
5. **Redeploy**: Push corrected version
6. **Monitor**: Watch closely for 24 hours

---

## Contact Information

### Technical Issues
- **Developer**: [Your name/email]
- **Vercel Support**: support@vercel.com
- **Emergency**: [Phone number]

### Content Issues
- **Product Owner**: Anthony Nicastro
- **Compliance**: [Compliance contact]
- **Marketing**: [Marketing contact]

---

## Notes

- **Current Status**: ✅ MVP Complete, Ready for Production
- **Deployment Target**: Vercel (recommended)
- **Domain**: [To be configured]
- **Expected Launch**: [Date TBD]
- **Phase 2 Start**: [Date TBD]

---

**Last Updated**: 2026-01-30
**Version**: 1.0.0
