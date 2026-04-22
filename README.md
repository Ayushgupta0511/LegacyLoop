# LegacyLoop - Campus Marketplace

A campus-exclusive marketplace connecting students to exchange resources sustainably through verified peer-to-peer, faculty/staff, lost & found, and free giveaway sections.

## 🚀 Features

- **4 Main Sections**: Peer-to-Peer, Faculty/Staff, Lost & Found, Free Giveaways
- **6 Item Categories**: Academic, Clothing, Dorm Essentials, Hobbies, Electronics, Kitchen
- **Authentication**: College email verification with Firebase Auth
- **Wishlist Board**: Post requests for items you're looking for
- **Graduating Soon**: Special section for seniors leaving campus
- **Search & Filter**: Find items quickly by category, condition, and keywords
- **Modern UI**: Dark theme with smooth animations and responsive design

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

You need to complete the Firebase configuration to enable authentication and database features.

#### Step 1: Get Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **legacy-loop-c74f0**
3. Click on the gear icon (⚙️) → **Project Settings**
4. Scroll down to **Your apps** section
5. If you don't have a web app yet, click **Add app** → Select **Web** (</>) → Register app
6. Copy the `apiKey` and `appId` from the Firebase config

#### Step 2: Update Firebase Config

Open `src/firebase/config.js` and replace the placeholders:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",  // Replace this
  authDomain: "legacy-loop-c74f0.firebaseapp.com",
  projectId: "legacy-loop-c74f0",
  storageBucket: "legacy-loop-c74f0.appspot.com",
  messagingSenderId: "444977284608",
  appId: "YOUR_ACTUAL_APP_ID"  // Replace this (format: 1:444977284608:web:xxxxx)
};
```

#### Step 3: Enable Firebase Services

In Firebase Console:

1. **Authentication**:
   - Go to **Authentication** → **Get Started**
   - Click **Sign-in method** tab
   - Enable **Email/Password** provider

2. **Firestore Database**:
   - Go to **Firestore Database** → **Create database**
   - Start in **test mode** (for development)
   - Choose your preferred location

3. **Storage**:
   - Go to **Storage** → **Get started**
   - Start in **test mode** (for development)

#### Step 4: Set Up Firestore Security Rules (Optional for Production)

For production, update Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    
    match /items/{itemId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.sellerId;
    }
    
    match /wishlists/{wishlistId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.userId;
    }
  }
}
```

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init
```
- Select **Hosting**
- Choose **Use an existing project** → Select **legacy-loop-c74f0**
- Set public directory to: `dist`
- Configure as single-page app: **Yes**
- Set up automatic builds with GitHub: **No** (or Yes if you want)

4. Build and deploy:
```bash
npm run build
firebase deploy
```

Your app will be live at: `https://legacy-loop-c74f0.web.app`

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use `gh-pages` package for deployment

## 📱 Usage

1. **Sign Up**: Create an account with your college email (.edu domain required)
2. **Verify Email**: Check your email for verification link
3. **Login**: Access the dashboard
4. **Browse Items**: Choose a section → Select a category → View items
5. **List Items**: Click "List an Item" → Fill the form → Submit
6. **Wishlist**: Post requests for items you're looking for
7. **Graduating Soon**: Check items from seniors leaving campus

## 🎨 Tech Stack

- **Frontend**: React + Vite
- **Routing**: React Router
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Styling**: Vanilla CSS with modern design system

## 📂 Project Structure

```
legacy-loop/
├── src/
│   ├── components/
│   │   ├── Auth/          # Login, Signup
│   │   ├── Dashboard/     # Dashboard, CategoryGrid
│   │   ├── Items/         # ItemList, ItemCard, AddItem
│   │   ├── Features/      # WishlistBoard, GraduatingSoon
│   │   └── Layout/        # Navbar
│   ├── contexts/          # AuthContext
│   ├── firebase/          # Firebase config
│   ├── App.jsx            # Main app with routing
│   └── App.css            # Global styles
├── public/
├── index.html
└── package.json
```

## 🔐 Security Notes

- College email verification required (.edu domain)
- Firebase Authentication for secure user management
- Firestore security rules to protect user data
- Student ID verification (stored securely in Firebase Storage)

## 🐛 Troubleshooting

### Firebase Errors

If you see Firebase errors:
1. Make sure you've added the correct `apiKey` and `appId` in `src/firebase/config.js`
2. Verify that Authentication, Firestore, and Storage are enabled in Firebase Console
3. Check that you're using the correct project ID: `legacy-loop-c74f0`

### Build Errors

If build fails:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

MIT License - feel free to use this for your hackathon and beyond!

## 🤝 Contributing

This is a hackathon project. Feel free to fork and improve!

---

**Built with ❤️ for campus communities**
