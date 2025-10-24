# CV Download Feature - Implementation Guide

## What Was Added

### 1. Main Website (index.html)
- **CV Download Button** added to the hero section
- Button appears alongside "View My Work" and "Get In Touch" buttons
- Includes download icon for better UX
- Default link: `https://cdn.jsdelivr.net/gh/the-razib/personal_profile/cv/Md-Razib-CV-16-09-25.pdf`

### 2. Admin Panel (admin/settings.html)
- **New CV Settings Section** added above Admin Settings
- Features:
  - Input field to update CV link
  - Preview of current CV link with clickable link to test
  - Save button to update the CV link
  - Success notification when CV link is updated
  - Helpful info text explaining the field

### 3. JavaScript Functionality (assets/js/main.js)
- **loadCVLink()** function added
- Automatically loads CV link from localStorage
- Falls back to default link if none is set
- Runs on page load

## How to Use

### For Website Visitors:
1. Visit your portfolio website
2. Click the "Download CV" button in the hero section
3. CV will open in a new tab or download automatically

### For Admin (You):
1. Login to admin panel at `/admin/`
2. Navigate to "Site Settings" from the sidebar
3. Scroll to "CV Settings" section
4. Enter your new CV link (full URL)
5. Click "Update CV Link"
6. Test the link using the preview link
7. Visit your main website to verify the button works

## CV Link Format
- Use full URLs (starting with `https://`)
- Recommended: Use CDN links like jsDelivr for GitHub-hosted files
- Example: `https://cdn.jsdelivr.net/gh/username/repo/path/to/cv.pdf`
- PDF format recommended for best compatibility

## Technical Details
- CV link stored in browser's localStorage
- Key: `cvLink`
- Persists across sessions
- Can be exported/imported with other portfolio data
- No backend required - fully client-side

## Default CV Link
If no custom link is set, the system uses:
```
https://cdn.jsdelivr.net/gh/the-razib/personal_profile/cv/Md-Razib-CV-16-09-25.pdf
```

## Notes
- The CV link updates instantly on the main website
- No page refresh needed after updating in admin
- Visitors will see the updated link immediately on their next visit
- Make sure your CV file is publicly accessible at the URL you provide
