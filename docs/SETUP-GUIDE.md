# MD Razib Portfolio - Setup Guide

## Quick Start

1. **Download/Clone the Project**
   ```bash
   git clone https://github.com/the-razib/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Replace Placeholder Content**
   - Add your profile photo to `assets/images/profile.jpg`
   - Add project screenshots to `assets/images/`
   - Update personal information in `index.html`

3. **Open the Website**
   - Double-click `index.html` or
   - Use Live Server in VS Code or
   - Run a local server

## Required Image Replacements

### Profile Photo
- **File**: `assets/images/profile.jpg`
- **Size**: 500x500px (square)
- **Format**: JPG or PNG
- **Quality**: High resolution, professional photo

### Project Screenshots
Replace these placeholder references with actual project images:

1. **Real Convert App**
   - File: `assets/images/real-convert.jpg`
   - Size: 800x400px (2:1 ratio)

2. **Task Manager App**
   - File: `assets/images/task-manager.jpg`
   - Size: 800x400px (2:1 ratio)

3. **Mosque Finder App**
   - File: `assets/images/mosque-finder.jpg`
   - Size: 800x400px (2:1 ratio)

4. **Crafty Bay E-commerce**
   - File: `assets/images/crafty-bay.jpg`
   - Size: 800x400px (2:1 ratio)

5. **Sentiment Analysis App**
   - File: `assets/images/sentiment-analysis.jpg`
   - Size: 800x400px (2:1 ratio)

6. **Step Indicator Package**
   - File: `assets/images/step-indicator.jpg`
   - Size: 800x400px (2:1 ratio)

## Content Customization

### Personal Information
Edit the following sections in `index.html`:

1. **Hero Section** (Lines 45-85)
   - Name and title
   - Description
   - Social media links

2. **About Section** (Lines 90-130)
   - Professional summary
   - Statistics

3. **Experience Section** (Lines 180-250)
   - Work experience details
   - Education information

4. **Projects Section** (Lines 260-400)
   - Project descriptions
   - Technologies used
   - Project links

5. **Contact Section** (Lines 410-480)
   - Contact information
   - Location details

### Social Media Links
Update these URLs throughout the site:
- GitHub: `https://github.com/the-razib`
- LinkedIn: `https://linkedin.com/in/md-razib`
- Email: `mdrazib.cse@gmail.com`
- Website: `https://softvence.agency/`

## Color Customization

To change the color scheme, edit `assets/css/neumorphism.css`:

```css
:root {
    /* Primary colors */
    --primary-bg: #e6f2ff;        /* Main background */
    --accent-color: #4a90e2;      /* Accent color */
    --text-primary: #2c3e50;      /* Main text */
    
    /* Modify these to match your brand */
}
```

## Form Integration

The contact form is ready for integration. Choose one option:

### Option 1: EmailJS (Recommended)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Update `assets/js/main.js` with your keys

### Option 2: Formspree
1. Sign up at [Formspree](https://formspree.io/)
2. Create a form endpoint
3. Update form action in HTML

### Option 3: Custom Backend
1. Create your own API endpoint
2. Update form submission logic in JavaScript

## Development Setup

### Using VS Code
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Using Node.js
```bash
npm install
npm start
```

### Using Python
```bash
python -m http.server 8000
```

## Testing Checklist

Before going live, test:

- [ ] All navigation links work
- [ ] Contact form submits properly
- [ ] All images load correctly
- [ ] Responsive design on mobile/tablet
- [ ] Cross-browser compatibility
- [ ] Loading performance
- [ ] Accessibility features
- [ ] Social media links
- [ ] Project links

## Browser Support

Tested and optimized for:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS 14+, Android 10+)

## Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure image files exist in `assets/images/`
- Verify file names match exactly (case-sensitive)

### Animations Not Working
- Check browser compatibility
- Disable if `prefers-reduced-motion` is set
- Verify JavaScript files are loading

### Contact Form Issues
- Check form integration setup
- Verify email service configuration
- Test form validation

### Mobile Display Issues
- Check viewport meta tag
- Test responsive breakpoints
- Verify touch interactions

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before upload
   - Use appropriate dimensions

2. **Minimize HTTP Requests**
   - Combine CSS/JS files if needed
   - Use CSS sprites for icons
   - Enable browser caching

3. **Loading Performance**
   - Preload critical resources
   - Lazy load images below fold
   - Minify CSS/JS for production

## Support

If you need help with setup:
- Email: mdrazib.cse@gmail.com
- GitHub Issues: [Repository Issues](https://github.com/the-razib/personal-portfolio/issues)
- LinkedIn: [MD Razib](https://linkedin.com/in/md-razib)

## License

This project is open source and available under the [MIT License](LICENSE).
