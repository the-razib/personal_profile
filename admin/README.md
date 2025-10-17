# Admin Panel - MD Razib Portfolio

Professional admin dashboard for managing your portfolio website content.

## 🚀 Features

- **Secure Login System** - Static authentication with demo credentials
- **Dashboard Overview** - Quick stats and recent activity
- **Profile Management** - Edit hero section, about, and contact info
- **Projects Management** - Add, edit, and delete portfolio projects
- **Skills Management** - Organize skills by categories
- **Experience Management** - Update work experience and education
- **Messages Viewer** - View contact form submissions
- **Responsive Design** - Works on desktop and mobile devices
- **Neumorphism UI** - Matches your main portfolio design

## 🔐 Login Credentials

**Username:** `admin`  
**Password:** `admin123`

## 📁 File Structure

```
admin/
├── index.html              # Login page
├── dashboard.html          # Main dashboard
├── profile.html            # Profile management
├── projects.html           # Projects management
├── messages.html           # Contact messages
├── css/
│   ├── admin-style.css     # Main styles
│   └── admin-neumorphism.css # Design system
├── js/
│   ├── auth.js             # Authentication
│   ├── dashboard.js        # Dashboard logic
│   ├── projects.js         # Projects CRUD
│   └── profile.js          # Profile updates
└── README.md               # This file
```

## 🎯 How to Use

### 1. Access the Admin Panel
Open `admin/index.html` in your browser or navigate to `/admin/` on your website.

### 2. Login
Use the demo credentials to login:
- Username: `admin`
- Password: `admin123`

### 3. Manage Content

#### Dashboard
- View statistics about your portfolio
- Quick access to all sections
- Recent activity feed

#### Profile Management
- Update hero section (name, title, description)
- Edit about section content
- Modify contact information
- Update social media links

#### Projects Management
- Add new projects with details
- Upload project images
- Add technology tags
- Include GitHub, Play Store, App Store links
- Mark projects as featured
- Edit or delete existing projects

#### Messages
- View contact form submissions
- Read message details
- Delete old messages

### 4. Data Storage
All data is stored in browser's `localStorage`:
- `adminLoggedIn` - Login status
- `profileData` - Profile information
- `projects` - Projects list
- `skills` - Skills data
- `messages` - Contact messages

## 🔧 Customization

### Change Login Credentials
Edit `admin/js/auth.js`:
```javascript
const DEMO_CREDENTIALS = {
  username: 'your-username',
  password: 'your-password'
};
```

### Modify Colors
Edit `admin/css/admin-neumorphism.css` to change the color scheme:
```css
:root {
  --primary-bg: #e6f2ff;
  --accent-color: #4a90e2;
  /* ... other colors */
}
```

### Add New Sections
1. Create new HTML page in `admin/` folder
2. Add navigation link in sidebar
3. Create corresponding JS file for functionality
4. Follow existing patterns for consistency

## 📱 Responsive Design

The admin panel is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔒 Security Notes

**Important:** This is a static admin panel for demonstration purposes.

For production use:
1. Implement backend authentication
2. Use secure password hashing
3. Add CSRF protection
4. Implement proper session management
5. Use HTTPS
6. Add rate limiting
7. Store data in a database instead of localStorage

## 🚀 Future Enhancements

Potential improvements:
- Backend integration with Node.js/PHP
- Database storage (MongoDB, MySQL)
- Image upload functionality
- Rich text editor for descriptions
- Analytics integration
- Export/Import data functionality
- Multi-user support with roles
- Email notifications

## 📝 Notes

- Data is stored locally in browser
- Clearing browser data will reset everything
- Use browser's developer tools to inspect localStorage
- Export data regularly as backup

## 🤝 Support

For issues or questions:
- Email: mdrazib.cse@gmail.com
- GitHub: https://github.com/the-razib

---

**Version:** 1.0.0  
**Last Updated:** October 2025  
**Author:** MD Razib
