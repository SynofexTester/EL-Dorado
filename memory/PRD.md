# EL Dorado MT4 Forex EA - Product Requirements Document

**Project:** EL Dorado MT4 Forex EA Website
**Last Updated:** February 5, 2025
**Status:** Frontend Complete (Mock Data)

---

## Original Problem Statement
Create a professional landing page website for EL Dorado MT4 Forex EA with sections for Hero, Features, Performance, Pricing, and Contact.

---

## User Personas
1. **Beginner Forex Traders** - Looking for automated trading solutions with minimal setup
2. **Professional Traders** - Seeking advanced grid trading systems with proven strategies
3. **Both** - Target audience includes all levels of forex traders interested in automated EA solutions

---

## Core Product Information

### Platform Details
- **Platform:** MetaTrader 4 (MT4)
- **Trading Pairs:** XAUUSD (Gold), EURUSD, GBPUSD + All Major Forex Pairs
- **Optimized Timeframe:** H1 (works on all timeframes)
- **Minimum Balance:** $200+ (Recommended: $1,000+)
- **Strategy Type:** Grid System with RSI & MA Filters + Smart Risk Control

### Package Includes
- ✅ EL Dorado v1.5 EA (.ex4) Lifetime Version
- ✅ Recommended Set Files (XAUUSD, EURUSD, GBPUSD)
- ✅ Step-by-Step User Guide (.pdf)

### Pricing Model
- **Demo Version:** FREE (limited features)
- **Lifetime Version:** $200 (one-time payment)

---

## Architecture & Tech Stack

### Frontend
- React 19 with React Router
- Tailwind CSS for styling
- Shadcn UI components
- Lucide React icons
- Sonner for toast notifications

### Backend (Planned)
- FastAPI (Python)
- MongoDB for data storage
- Motor (async MongoDB driver)

---

## What's Been Implemented (Feb 5, 2025)

### ✅ Frontend Landing Page
1. **Hero Section**
   - Large gradient text with EL Dorado branding
   - Key features badges (Smart Risk Control, 24/7 Trading, Lifetime Updates)
   - CTA buttons (Get Lifetime Access, Download Demo)
   - Stats cards (H1, $200+, Grid, v1.5)
   - Background image with overlay

2. **Features Section**
   - 6 feature cards with icons:
     - Grid Trading System
     - Smart Risk Control
     - Multi-Pair Support
     - 24/7 Automation
     - H1 Optimized
     - Preset Configurations
   - Hover effects on cards

3. **Performance Section**
   - Recommended setup card (balance, timeframe, platform)
   - Trading pairs card with badges
   - Strategy overview with 3-step process

4. **Pricing Section**
   - Demo Version card (FREE)
   - Lifetime Version card ($200) - highlighted as "Best Value"
   - Feature comparison checklist
   - CTA buttons for each plan

5. **Contact Section**
   - Contact form with Name, Email, Message fields
   - Form validation
   - Browser localStorage storage for submissions
   - Toast notification on success

6. **Header & Footer**
   - Fixed navigation header with smooth scroll
   - Navigation links (Features, Performance, Pricing, Contact)
   - Footer with branding and disclaimer

### 🎨 Design Implementation
- Premium gold (#D4AF37/amber-500) and dark slate (slate-950) color scheme
- Glass-morphism effects with backdrop blur
- Smooth scroll behavior
- Hover animations on all interactive elements
- Responsive design (mobile, tablet, desktop)
- Custom animations in App.css

### 📦 Mock Data
- Contact form submissions stored in localStorage
- Demo download triggers toast notification
- All interactions work client-side only

---

## API Contracts (Backend - Not Implemented Yet)

### Contact Endpoints

#### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "message": "string",
  "timestamp": "datetime"
}
```

#### GET /api/contact
**Response:**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "message": "string",
    "timestamp": "datetime"
  }
]
```

---

## Prioritized Backlog

### P0 - Critical
- [ ] Backend API for contact form submissions
- [ ] MongoDB schema for contacts collection
- [ ] Frontend-backend integration for contact form
- [ ] Email notification system for new contact submissions

### P1 - High Priority
- [ ] Payment integration (Stripe or PayPal) for Lifetime version
- [ ] Download functionality for Demo version (file serving)
- [ ] Admin dashboard for viewing contact submissions
- [ ] User authentication for admin access

### P2 - Nice to Have
- [ ] Live chat widget or WhatsApp integration
- [ ] Testimonials section with customer reviews
- [ ] Performance stats/charts section
- [ ] Blog section for trading tips
- [ ] Newsletter subscription
- [ ] Multiple language support

---

## Next Tasks

1. **Backend Development Phase**
   - Create MongoDB model for contact submissions
   - Build POST /api/contact endpoint
   - Build GET /api/contact endpoint (admin only)
   - Integrate frontend with backend API
   - Remove localStorage mock, use real API

2. **Payment Integration**
   - Research payment provider (Stripe recommended)
   - Implement payment flow for Lifetime version
   - Create order confirmation page
   - Set up email receipts

3. **Testing**
   - Test contact form end-to-end
   - Test payment flow
   - Mobile responsiveness testing
   - Cross-browser testing

---

## Technical Notes

### Current Implementation
- Contact form uses browser localStorage (temporary solution)
- Demo download shows toast notification (no actual file download)
- All navigation uses smooth scroll
- Toast notifications use Sonner library

### Dependencies
- All frontend dependencies already installed in package.json
- Backend dependencies ready in requirements.txt

### Environment Variables
- `REACT_APP_BACKEND_URL` - configured for API calls
- `MONGO_URL` - configured for MongoDB connection
- `DB_NAME` - database name

---

## Success Metrics (Future)
- Contact form submission rate
- Demo download conversion rate
- Lifetime version purchase conversion rate
- Average time on page
- Bounce rate
