# Quick Reference: Services Pages

## 🚀 Access Your Services Pages

Visit these URLs to see your new service pages:

1. **Main Services**: http://localhost:3000/services
2. **Art & Creation**: http://localhost:3000/services/art-and-creation
3. **Graphic Design**: http://localhost:3000/services/graphic-design
4. **UI/UX Design**: http://localhost:3000/services/uiux-design
5. **Web Development**: http://localhost:3000/services/web-development

## 🎯 Category Navigation

The main services page (`/services`) features sticky category buttons at the top:
- Art and Creation
- Graphic Design
- UI/UX Design
- Web Development

Click any category to navigate to its dedicated page.

## 📝 Editing Content

### To update pricing:
Edit `app/constants/shopData.ts` → `servicePricing` array

```typescript
{
  id: 'price-001',
  title: 'Your Service Title',
  description: 'Service description',
  price: 1200,  // or 'Custom'
  category: 'art-and-creation',
  features: ['Feature 1', 'Feature 2', 'Feature 3']
}
```

### To update portfolio items:
Edit `app/constants/shopData.ts` → `servicePortfolio` array

### To update gallery:
Edit `app/constants/shopData.ts` → `serviceGallery` array

## 🖼️ Adding Images

Place images in: `public/images/services/`

Update image paths in shopData.ts from placeholders to actual paths:
```typescript
image: '/images/services/your-image.jpg'
```

## 🎨 Customizing Pages

Each service page is at:
- `app/services/[category-name]/page.tsx`

Example: `app/services/art-and-creation/page.tsx`

## 🔧 Component Reference

All service components are in `app/components/`:
- `ServiceHero.tsx` - Hero banner
- `ServicePricingCard.tsx` - Pricing cards
- `ServicePortfolioSection.tsx` - Portfolio display
- `ServiceDigitalShowcase.tsx` - Feature showcase
- `ServiceGallery.tsx` - Image gallery

## ✨ Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark mode support
✅ Smooth scroll navigation
✅ Category filtering
✅ Popular pricing badge
✅ Interactive hover effects
✅ Image placeholders
✅ TypeScript type safety

## 🛠️ Running the Site

Development: `npm run dev`
Build: `npm run build`
Start: `npm start`

## 📱 Responsive Testing

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Test at: http://localhost:3000/services

## 🎯 Key Files Modified

1. `app/constants/shopData.ts` - Service data
2. `app/components/Navbar.tsx` - Navigation link
3. `app/services/` - All service pages
4. `app/components/` - New service components

## 💡 Tips

- Unique IDs for all items
- Category must match exactly
- Images use placeholders (replace before production)
- All prices in LKR (Sri Lankan Rupees)
- Use 'Custom' for variable pricing

---

**All pages are live and ready to use!** 🎉
