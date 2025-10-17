# Deployment Instructions

## GitHub Pages Deployment

1. **Push to GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/the-razib/personal-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Custom Domain (Optional)**
   - Add CNAME file with your domain
   - Configure DNS settings

## Netlify Deployment

1. **Connect Repository**
   - Log in to Netlify
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   - Build command: (leave empty for static site)
   - Publish directory: (leave empty or use "/")
   - Deploy site

3. **Custom Domain**
   - Go to Domain settings
   - Add custom domain
   - Configure DNS

## Vercel Deployment

1. **Import Project**
   - Log in to Vercel
   - Click "New Project"
   - Import from GitHub

2. **Deploy**
   - Configure project settings
   - Deploy automatically

## Manual Deployment

1. **Build (Optional)**
   ```bash
   npm install
   npm run build
   ```

2. **Upload Files**
   - Upload all files to your web server
   - Ensure proper file permissions
   - Configure web server (if needed)

## Pre-deployment Checklist

- [ ] Replace placeholder images with actual photos
- [ ] Update personal information
- [ ] Test all links and forms
- [ ] Optimize images for web
- [ ] Test responsive design
- [ ] Check cross-browser compatibility
- [ ] Validate HTML and CSS
- [ ] Test accessibility
- [ ] Add proper meta tags for SEO
- [ ] Set up analytics (Google Analytics, etc.)

## Performance Optimization

1. **Image Optimization**
   ```bash
   npm run optimize-images
   ```

2. **CSS/JS Minification**
   ```bash
   npm run build
   ```

3. **Enable Compression**
   - Configure gzip compression on server
   - Use CDN for static assets

## Monitoring

1. **Google Analytics**
   - Add tracking code to HTML
   - Monitor visitor traffic

2. **Google Search Console**
   - Submit sitemap
   - Monitor search performance

3. **PageSpeed Insights**
   - Test loading performance
   - Implement suggestions

## Updates and Maintenance

1. **Content Updates**
   - Regular portfolio updates
   - New project additions
   - Experience updates

2. **Technical Updates**
   - Security patches
   - Dependencies updates
   - Performance improvements

3. **SEO Maintenance**
   - Meta tags optimization
   - Content freshness
   - Link building
