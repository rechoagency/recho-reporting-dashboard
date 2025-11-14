# 📦 GitHub Setup - Step-by-Step Copy & Paste Guide

This guide walks you through uploading your Reddit Performance Dashboard to GitHub and deploying it as a **free public website**.

---

## 🎯 What You'll Get

**A live, shareable URL like:**
```
https://your-username.github.io/reddit-dashboard/
```

**Anyone with the link can view your dashboard** - perfect for:
- Client presentations
- Portfolio showcases
- Team collaboration
- Stakeholder reporting

---

## 📝 Step 1: Create GitHub Account (if needed)

1. Go to **https://github.com**
2. Click **"Sign up"**
3. Follow the registration process (it's free!)

---

## 📂 Step 2: Create a New Repository

1. **After logging in**, click the **"+"** icon (top right)
2. Select **"New repository"**

3. **Fill in the form:**

   **Repository name:** `reddit-dashboard`
   
   **Description:** `Professional Reddit Performance Dashboard powered by RECHO`
   
   **Visibility:**
   - ✅ Select **"Public"** (required for free GitHub Pages hosting)
   
   **Initialize repository:**
   - ❌ **DO NOT** check "Add a README file"
   - ❌ **DO NOT** add .gitignore or license (we already have them)

4. **Click "Create repository"**

---

## 📤 Step 3: Upload Your Files

You'll see a page with instructions. **Ignore the command-line instructions** and do this instead:

### Easy Upload Method (Web Interface):

1. **Click the link** that says **"uploading an existing file"**
   - Or click **"Add file"** → **"Upload files"**

2. **Drag and drop these 6 files** into the upload area:
   ```
   ✅ index.html
   ✅ script.js
   ✅ recho-logo.png
   ✅ README.md
   ✅ .gitignore
   ✅ DEPLOYMENT.md
   ```

3. **Scroll down** to the "Commit changes" section

4. **Leave the default message** ("Add files via upload")

5. **Click the green "Commit changes" button**

✅ **Your files are now on GitHub!**

---

## 🌐 Step 4: Enable GitHub Pages (Make it Live!)

Now let's turn your repository into a live website:

1. **Click "Settings"** (top menu in your repository)

2. **In the left sidebar**, scroll down and click **"Pages"**

3. **Under "Source"**:
   - **Branch**: Select **"main"** (or "master" if that's your branch name)
   - **Folder**: Select **"/ (root)"**

4. **Click "Save"**

5. **Wait 1-2 minutes** - GitHub is building your site!

6. **Refresh the page** - you should see a message:
   ```
   ✅ Your site is live at https://your-username.github.io/reddit-dashboard/
   ```

---

## 🎉 Step 5: Access Your Live Dashboard

**Your dashboard is now live!** Visit:

```
https://YOUR-GITHUB-USERNAME.github.io/reddit-dashboard/
```

**Example:** If your username is `johndoe`:
```
https://johndoe.github.io/reddit-dashboard/
```

### ✅ Test Everything:
- [ ] Does the page load?
- [ ] Do all three tabs work?
- [ ] Do the charts display?
- [ ] Does the date filter work?

---

## 🔗 Step 6: Share Your Dashboard

**Copy your URL and share it with:**
- Clients via email
- Team members on Slack
- Stakeholders in presentations
- Your portfolio or LinkedIn

**Pro Tip:** The URL is public, so anyone with the link can view it. Since this uses dummy/anonymized data, it's safe to share!

---

## 🔄 How to Update Your Dashboard Later

**When you need to make changes:**

### Method 1: Edit on GitHub (Easy)
1. Go to your repository
2. Click on the file you want to edit (e.g., `script.js`)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Scroll down and click **"Commit changes"**
6. Wait 1-2 minutes for the site to rebuild
7. Refresh your live URL to see changes

### Method 2: Re-upload Files
1. Go to your repository
2. Click on the file you want to replace
3. Click **"Delete file"** and commit
4. Upload the new version using "Add file" → "Upload files"

---

## 📱 Bonus: Custom Domain (Optional)

Want a custom URL like `recho-dashboard.com` instead of `username.github.io`?

1. **Buy a domain** from any registrar (Namecheap, GoDaddy, Google Domains)
2. **In GitHub**: Settings → Pages → Custom domain
3. **Enter your domain** (e.g., `dashboard.recho.co`)
4. **Update DNS** at your registrar:
   ```
   Type: CNAME
   Name: www (or subdomain)
   Value: your-username.github.io
   ```
5. **Wait 24 hours** for DNS propagation

---

## 🆘 Troubleshooting

### "404 - Page Not Found"
- **Wait longer**: First deployment takes 5-10 minutes
- **Check URL**: Make sure it's `https://` not `http://`
- **Verify Settings**: Go to Settings → Pages and confirm it's enabled
- **Check branch**: Make sure you selected the correct branch (main/master)

### "Charts Not Loading"
- **Check browser console**: Press F12 → Console tab
- **CDN blocked?**: Try a different network or disable ad blockers
- **File missing?**: Verify `script.js` was uploaded correctly

### "Can't Enable GitHub Pages"
- **Repository not public?**: Only public repos get free GitHub Pages
- **No index.html?**: Verify `index.html` is in the root directory
- **Organization account?**: May need GitHub Pro for private repo Pages

---

## 📋 File Checklist

Before sharing, verify you uploaded:

```
✅ index.html       - Main dashboard page (73 KB)
✅ script.js        - JavaScript functionality (46 KB)
✅ recho-logo.png   - RECHO logo image (28 KB)
✅ README.md        - Project documentation (20 KB)
✅ .gitignore       - Git ignore rules (385 bytes)
✅ DEPLOYMENT.md    - Deployment guide (8 KB)
```

**Total size:** ~170 KB (very lightweight!)

---

## 🎯 Quick Copy-Paste Summary

**Your Repository URL:**
```
https://github.com/YOUR-USERNAME/reddit-dashboard
```

**Your Live Dashboard URL:**
```
https://YOUR-USERNAME.github.io/reddit-dashboard/
```

**Files to Upload:** (6 files total)
- index.html
- script.js
- recho-logo.png
- README.md
- .gitignore
- DEPLOYMENT.md

**GitHub Pages Settings:**
- Branch: `main`
- Folder: `/ (root)`

---

## ✅ Success!

🎉 **Congratulations!** Your Reddit Performance Dashboard is now:
- ✅ Backed up on GitHub
- ✅ Live on the internet
- ✅ Shareable with anyone
- ✅ Free forever (on GitHub's servers)
- ✅ Easy to update

**Share your accomplishment:**
- Tweet your dashboard URL
- Add it to your portfolio
- Send it to clients
- Show it in interviews

---

**Need more help?** 
- GitHub Pages Docs: https://docs.github.com/pages
- GitHub Support: https://support.github.com

**Questions about the dashboard itself?**
- Check `README.md` for full documentation
- Check `DEPLOYMENT.md` for advanced deployment options
