# i18n Scan Report - FAQ Page

## Scan Date
2025-07-13 19:14:00 UTC+2

## File Analyzed
`src/components/FaqPage.tsx`

## Scan Method
Manual analysis of hardcoded text elements

## Summary
Found **47 hardcoded text elements** that need to be extracted for i18n support.

## Detailed Findings

### 1. Header Section (3 elements)
- **Title**: "Optimization, Explained"
- **Subtitle**: "Find answers to common questions about AI-powered workforce optimization"
- **Search Placeholder**: "Find answers..."

### 2. Category Tabs (4 elements)
- **Implementation**: "Implementation"
- **Billing**: "Billing"
- **Security**: "Security"
- **Global Features**: "Global Features"

### 3. FAQ Questions & Answers (32 elements)
#### Implementation Category (8 elements)
- **Q1**: "How fast do I see savings?"
- **A1**: "87% of our customers see >15% reduction in labor costs within the first 30 days. Our AI starts optimizing immediately after connecting your POS system."
- **Q2**: "Do you work with my POS?"
- **A2**: "We integrate seamlessly with all major POS systems including Toast, Clover, Lightspeed, and Clip. New integrations are added weekly based on customer demand."
- **Q3**: "How long does setup take?"
- **A3**: "Most restaurants are up and running in under 5 minutes. Our one-click integration connects to your existing POS system automatically."
- **Q4**: "Do I need to train my staff?"
- **A4**: "No training required! Our AI works behind the scenes. Staff simply follow the optimized schedules generated automatically."

#### Billing Category (8 elements)
- **Q1**: "What's included in the free trial?"
- **A1**: "Full access to all features for 30 days. No credit card required. Cancel anytime with no obligations."
- **Q2**: "How does pricing scale?"
- **A2**: "Pricing is per location. Volume discounts available for 10+ locations. Enterprise plans include dedicated support and custom features."
- **Q3**: "What if I don't save 20%?"
- **A3**: "We guarantee 20% labor cost savings or your money back. Our success team works with you to ensure optimal results."
- **Q4**: "Can I change plans anytime?"
- **A4**: "Yes, upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing."

#### Security Category (8 elements)
- **Q1**: "Is my data secure?"
- **A1**: "Yes, we're SOC 2 Type II certified and fully compliant with GDPR and CCPA regulations. Your data is encrypted in transit and at rest."
- **Q2**: "Where is my data stored?"
- **A2**: "Data is stored in secure, geographically distributed data centers with 99.9% uptime SLA and automatic backups."
- **Q3**: "Who has access to my data?"
- **A3**: "Only authorized personnel with legitimate business needs. All access is logged and monitored. We never sell or share your data."
- **Q4**: "How do you handle compliance?"
- **A4**: "We automatically ensure compliance with local labor laws, working time directives, and break requirements across all supported regions."

#### Global Features Category (8 elements)
- **Q1**: "Which regions do you support?"
- **A1**: "We support US, EU, LATAM, and APAC markets with region-specific optimizations for tipping, regulations, and payment preferences."
- **Q2**: "How does tip forecasting work?"
- **A2**: "Our AI analyzes historical tip data, party sizes, shift types, and local market conditions to predict optimal staffing for maximum tip yield."
- **Q3**: "What about local labor laws?"
- **A3**: "We automatically comply with local regulations including EU working time directives, break requirements, and overtime rules."
- **Q4**: "Do you support mobile payments?"
- **A4**: "Yes, especially in APAC markets where we optimize for mobile wallet preferences, resulting in 22% higher average tips."

### 4. Dynamic Content Labels (8 elements)
#### Savings Calculator
- **Title**: "Savings Calculator"
- **Stat 1**: "See Results"
- **Stat 2**: "Cost Reduction"
- **Stat 3**: "Days"

#### POS System Badges
- **Badge 1**: "Toast"
- **Badge 2**: "Clover"
- **Badge 3**: "Lightspeed"
- **Badge 4**: "Clip"
- **More Text**: "+ More added weekly"

#### Security Badges
- **Badge 1**: "SOC 2 Type II"
- **Badge 2**: "GDPR Compliant"
- **Badge 3**: "CCPA Compliant"

### 5. Support Section (8 elements)
- **Title**: "Still stuck? Our optimization specialists speak 12 languages"
- **Subtitle**: "Get personalized help from our team of workforce optimization experts"
- **Chat Button**: "Chat Now"
- **Schedule Button**: "Schedule Call"
- **Stat 1**: "24/7"
- **Stat 1 Label**: "Support Available"
- **Stat 2**: "12"
- **Stat 2 Label**: "Languages Supported"
- **Stat 3**: "<2min"
- **Stat 3 Label**: "Average Response"

## Recommendations

### Priority 1: Critical for Launch
All 47 identified hardcoded text elements should be extracted to the i18n JSON files created:
- `src/locales/en/components/faq.json`
- `src/locales/es/components/faq.json`

### Priority 2: Type Safety
The TypeScript interfaces have been created at:
- `src/types/i18n/faq-translations.ts`

### Priority 3: Implementation Strategy
1. Replace all hardcoded strings with `t()` function calls
2. Use the created JSON structure for translations
3. Test both English and Spanish versions
4. Ensure dynamic content (calculator stats, badges) works correctly

## Next Steps
1. Update FaqPage.tsx to use i18n translations
2. Test the implementation
3. Update memory bank with completion status
