# Quick Start Guide

Get up and running with the AI in Practice platform in 5 minutes.

## 🏃‍♂️ Quick Setup

```bash
# Clone the repository (if not already local)
cd ai-explorer

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

That's it! The site should be running locally.

---

## 📁 Project Structure

```
ai-explorer/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   ├── globals.css        # Global styles + design system
│   ├── roles/             # Role hub pages
│   ├── use-cases/         # Use case pages
│   ├── simulator/         # Workflow simulator
│   ├── built-with-ai/     # Meta story page
│   └── about/             # About page
│
├── components/            # React components
│   ├── ui/               # Shadcn UI primitives
│   ├── navigation.tsx    # Main nav bar
│   ├── hero-section.tsx  # Homepage hero
│   ├── role-cards.tsx    # Role selection cards
│   ├── workflow-simulator.tsx  # Interactive simulator
│   ├── email-capture-modal.tsx # Lead capture form
│   └── footer.tsx        # Site footer
│
├── lib/
│   └── utils.ts          # Utility functions
│
└── public/               # Static assets
```

---

## 🎨 Design System Quick Reference

### Colors
```typescript
// Primary Navy
bg-[#1a1f36]    text-[#1a1f36]
border-[#1a1f36]

// Gold Accent
bg-[#b8945f]    text-[#b8945f]
border-[#b8945f]

// Backgrounds
bg-[#f8f7f2]    // Light warm gray
bg-[#f5f5f0]    // Lighter warm gray

// Text
text-[#1a1f36]  // Dark navy (headings)
text-[#4a4a4a]  // Medium gray (body)
text-[#6a6a6a]  // Light gray (supporting)
```

### Typography
```typescript
// Display/Headlines
className="font-serif text-5xl"  // Playfair Display

// Body Text
className="text-lg"              // DM Sans (default)

// Buttons/UI
className="font-medium"          // DM Sans medium weight
```

### Common Patterns
```typescript
// Card with hover
className="bg-white border border-[#e5e5dc] rounded-lg p-6
           hover:shadow-xl hover:border-[#b8945f]/30 transition-all"

// Gradient background
className="bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0]"

// Section padding
className="py-20 px-6 lg:px-12"
```

---

## ✏️ Adding New Content

### Add a New Use Case

1. **Create the page**: Duplicate an existing use case
   ```bash
   cp app/use-cases/portfolio-commentary/page.tsx \
      app/use-cases/your-new-case/page.tsx
   ```

2. **Update the content object**: Edit the `useCaseData` object
   ```typescript
   const useCaseData = {
     "your-new-case": {
       title: "Your Use Case Title",
       role: "Wealth Advisor",
       difficulty: "Basic",
       // ... rest of content
     }
   }
   ```

3. **Add to use cases index**: Update `app/use-cases/page.tsx`
   ```typescript
   const useCases = [
     // ... existing cases
     {
       slug: "your-new-case",
       title: "Your Use Case Title",
       // ...
     }
   ]
   ```

4. **Add to role page**: Update the relevant role in `app/roles/[role]/page.tsx`

### Add a New Role

1. **Update roleData object** in `app/roles/[role]/page.tsx`
2. **Add to roles list** in `app/roles/page.tsx`
3. **Add icon** from Lucide React
4. **Update RoleCards** in `components/role-cards.tsx`

---

## 🎭 Component Examples

### Button Component
```typescript
import { Button } from "@/components/ui/button"

<Button variant="primary" size="lg">
  Click Me
</Button>

// Variants: default, primary, outline, ghost, link
// Sizes: default, sm, lg, icon
```

### Email Capture Modal
```typescript
import { EmailCaptureModal } from "@/components/email-capture-modal"

const [isOpen, setIsOpen] = useState(false)

<EmailCaptureModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  trigger="use-case-view"  // for analytics
/>
```

### Dialog/Modal
```typescript
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title Here</DialogTitle>
      <DialogDescription>Description here</DialogDescription>
    </DialogHeader>
    {/* Your content */}
  </DialogContent>
</Dialog>
```

---

## 🔧 Common Tasks

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 221 83% 53%;  /* Adjust HSL values */
  --background: 0 0% 100%;
  /* ... */
}
```

### Change Fonts
Edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google"

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
})
```

### Add Analytics Event
```typescript
// In your component
const handleClick = () => {
  // Your action

  // Log to analytics (configure in production)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: 'talk_to_us',
    })
  }
}
```

### Add New Page
```bash
# Create new route
mkdir app/your-page
touch app/your-page/page.tsx

# Add to navigation (components/navigation.tsx)
<Link href="/your-page">Your Page</Link>
```

---

## 🐛 Troubleshooting

### Port 3000 in use
```bash
# Kill existing process
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Styling not updating
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript errors
```bash
# Check all type errors
npm run build

# Or use VS Code's TypeScript checker
```

---

## 📦 Build & Deploy

### Local Production Build
```bash
# Create production build
npm run build

# Test production build locally
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🧪 Testing Checklist

Before committing changes:
- [ ] Page loads without errors
- [ ] Responsive on mobile (cmd+shift+M in Chrome)
- [ ] All links work
- [ ] Forms submit correctly
- [ ] No TypeScript errors (`npm run build`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Lighthouse score stays 90+ (DevTools)

---

## 📚 Key Files to Know

### Design System
- `app/globals.css` - CSS variables, animations
- `tailwind.config.ts` - Tailwind configuration
- `components/ui/button.tsx` - Button variants

### Content
- `app/roles/[role]/page.tsx` - Role data and structure
- `app/use-cases/[slug]/page.tsx` - Use case template
- `components/workflow-simulator.tsx` - Simulator scenarios

### Configuration
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript settings
- `package.json` - Dependencies and scripts

---

## 💡 Pro Tips

1. **Use the `cn()` utility** for conditional classes:
   ```typescript
   import { cn } from "@/lib/utils"

   <div className={cn(
     "base classes",
     isActive && "active classes",
     variant === "primary" && "primary classes"
   )} />
   ```

2. **Component file structure**:
   ```typescript
   // Imports
   import { ... } from "..."

   // Types/Interfaces
   interface MyProps { ... }

   // Component
   export function MyComponent({ props }: MyProps) {
     return <div>...</div>
   }
   ```

3. **Always use semantic HTML**:
   ```typescript
   <nav>      // Navigation
   <header>   // Page headers
   <main>     // Main content
   <section>  // Content sections
   <footer>   // Page footer
   ```

4. **Keyboard accessibility**:
   ```typescript
   <button onKeyDown={(e) => {
     if (e.key === 'Enter' || e.key === ' ') {
       handleClick()
     }
   }}>
   ```

5. **Loading states**:
   ```typescript
   const [loading, setLoading] = useState(false)

   <Button disabled={loading}>
     {loading ? "Loading..." : "Submit"}
   </Button>
   ```

---

## 🆘 Need Help?

### Resources
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Radix UI**: https://www.radix-ui.com/
- **Lucide Icons**: https://lucide.dev/

### Common Issues
- **Build errors**: Check [Next.js Troubleshooting](https://nextjs.org/docs/messages)
- **Styling issues**: Check [Tailwind Docs](https://tailwindcss.com/docs)
- **Component API**: Check [Radix UI Docs](https://www.radix-ui.com/)

---

## 🎯 Next Steps

### For Developers
1. Read [README.md](README.md) for architecture overview
2. Review [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for features
3. Check [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) before deploying

### For Content Creators
1. Review existing use cases for structure
2. Use the template in `app/use-cases/[slug]/page.tsx`
3. Follow the voice and tone of existing content
4. Include guardrails and compliance considerations

### For Designers
1. Review design system in `app/globals.css`
2. Check component library in `components/ui/`
3. Use Figma/design tools to prototype first
4. Maintain color palette and typography hierarchy

---

**Happy Building! 🚀**
