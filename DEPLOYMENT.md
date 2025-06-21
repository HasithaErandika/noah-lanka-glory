# Deployment Guide - Noah Lanka Glory

This guide explains how to deploy the Noah Lanka Glory website to your hosting provider's `public_html` folder.

## 🚀 Pre-Deployment Steps

### 1. Build the Production Version

First, build the optimized production version of your website:

```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build
```

This will create a `dist` folder with all the optimized files.

### 2. What Gets Built

The build process creates:
- **Optimized HTML** (`index.html`)
- **Minified CSS** (in `assets/` folder)
- **Minified JavaScript** (in `assets/` folder)
- **Optimized images** and other assets
- **Source maps** (disabled for production)

## 📁 Files to Upload to public_html

Upload **ALL** contents of the `dist` folder to your `public_html` directory:

```
public_html/
├── index.html              # Main HTML file
├── assets/                 # All CSS, JS, and other assets
│   ├── index-[hash].css    # Minified CSS
│   ├── index-[hash].js     # Minified JavaScript
│   └── [other assets]      # Images, fonts, etc.
└── .htaccess              # Apache configuration (if using Apache)
```

## 🌐 Hosting Configuration

### Apache Server (Most Common)

If your hosting uses Apache (most shared hosting providers):

1. **Upload the `.htaccess` file** from the `public` folder to your `public_html` directory
2. **Ensure mod_rewrite is enabled** (contact your hosting provider if needed)
3. **The `.htaccess` file handles:**
   - Client-side routing for React Router
   - Security headers
   - Compression
   - Browser caching
   - Protection of sensitive files

### Nginx Server

If your hosting uses Nginx, add this configuration to your server block:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;

# Compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
```

### Other Servers

For other server types, ensure that:
- **All routes redirect to `index.html`** (for React Router to work)
- **Static assets are served correctly**
- **Security headers are configured**

## 🔧 Post-Deployment Checklist

### 1. Test All Pages
- ✅ Home page loads correctly
- ✅ About page with team gallery works
- ✅ Products page displays properly
- ✅ Contact page form functions
- ✅ Services page loads
- ✅ Navigation between pages works
- ✅ Mobile responsiveness

### 2. Test Interactive Features
- ✅ Hero slideshow cycles automatically
- ✅ Team gallery autoplay and controls work
- ✅ Contact form submission
- ✅ Modal popups for products
- ✅ Smooth scrolling and animations

### 3. Performance Check
- ✅ Page load times are acceptable
- ✅ Images load properly
- ✅ Fonts display correctly
- ✅ No console errors

### 4. SEO Verification
- ✅ Meta tags are present
- ✅ Open Graph tags work
- ✅ Page titles are correct
- ✅ Sitemap is accessible (if created)

## 🛠️ Troubleshooting

### Common Issues

#### 1. 404 Errors on Page Refresh
**Problem:** Direct access to routes like `/about` returns 404
**Solution:** Ensure `.htaccess` file is uploaded and mod_rewrite is enabled

#### 2. Assets Not Loading
**Problem:** CSS/JS files return 404
**Solution:** Check that all files from `dist/assets/` are uploaded

#### 3. Routing Not Working
**Problem:** Navigation works but direct URLs don't
**Solution:** Verify `.htaccess` configuration or server routing rules

#### 4. Slow Loading
**Problem:** Website loads slowly
**Solution:** 
- Enable compression on server
- Check image optimization
- Verify caching headers

### File Permissions

Set correct permissions:
```bash
# Directories
chmod 755 public_html/
chmod 755 public_html/assets/

# Files
chmod 644 public_html/index.html
chmod 644 public_html/.htaccess
chmod 644 public_html/assets/*
```

## 🔄 Updating the Website

To update your website:

1. **Make changes** to your local code
2. **Test locally** with `npm run dev`
3. **Build production version** with `npm run build`
4. **Upload new files** from `dist/` to `public_html/`
5. **Clear browser cache** or test in incognito mode

## 📊 Performance Monitoring

After deployment, monitor:

- **Page load times** (aim for <3 seconds)
- **Core Web Vitals** (LCP, FID, CLS)
- **Mobile performance**
- **User engagement** metrics

## 🔒 Security Considerations

The deployment includes:

- **Security headers** (X-Frame-Options, X-Content-Type-Options, etc.)
- **Content Security Policy** (CSP)
- **HTTPS enforcement** (recommended)
- **Sensitive file protection**

## 📞 Support

If you encounter issues:

1. **Check browser console** for errors
2. **Verify file uploads** are complete
3. **Test with different browsers**
4. **Contact hosting provider** for server configuration issues
5. **Review server error logs**

---

**Note:** This deployment guide assumes you're using a standard web hosting service with `public_html` directory. For cloud hosting (AWS, Vercel, Netlify, etc.), refer to their specific deployment documentation. 