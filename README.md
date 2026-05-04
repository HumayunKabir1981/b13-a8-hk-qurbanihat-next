# 🐄 QurbaniHat – Livestock Booking Platform

## 📌 Project Overview

**QurbaniHat** is a modern online livestock marketplace where users can explore animals (cows, goats, etc.) for Qurbani. Users can view detailed information, filter animals by price, and book animals after authentication.

---

## 🌐 Live URL

👉 https://b13-a8-hk-qurbanihat-next-ulyn.vercel.app/
---

## 🎯 Purpose

The goal of this project is to provide a simple and user-friendly platform for buying Qurbani animals online. It helps users:

* Browse available animals
* View detailed information
* Make booking decisions easily from home

---

## ✨ Key Features

### 🔐 Authentication

* Email & Password login/register
* Google login integration
* Protected routes using Next.js Proxy
* Session-based authentication

### 🐄 Animal Listing

* Display all animals in a responsive grid
* Dynamic routing for animal details page
* Clean UI with cards

### 🔍 Filtering System

* Filter animals by price range
* User-friendly search inputs

### 👤 User Profile

* View logged-in user information (name, email, photo)
* Update profile information (name & image)

### 🚫 Route Protection

* Private routes:

  * Animal Details page
  * My Profile page
* Redirect to login if not authenticated

### ⚡ Performance & UX

* Server-side data fetching (Next.js App Router)
* Loading UI using `loading.js`
* Responsive design (mobile + desktop)

---

## 🛠️ Technologies Used

### 🧩 Framework & Library

* Next.js 16 (App Router)
* React
* Tailwind CSS
* DaisyUI

### 🔐 Authentication

* better-auth
* MongoDB

### 🎨 UI & Icons

* react-icons

### 🎞️ Animation

* lottie-react

---

## 📦 NPM Packages Used

```bash
next
react
react-dom
tailwindcss
daisyui
react-icons
lottie-react
better-auth
mongodb
react-hook-form
```

---

## 📁 Folder Structure (Simplified)

```
app/
 ├── (main)/
 │    ├── page.jsx
 │    ├── animals/
 │    │    ├── page.jsx
 │    │    ├── [id]/page.jsx
 │
 ├── (auth)/
 │    ├── login/page.jsx
 │    ├── register/page.jsx
 │    ├── myprofile/page.jsx
 │
 ├── loading.js
 ├── not-found.js

components/
 ├── NavBar.jsx
 ├── Footer.jsx
 ├── HeroBanner.jsx


lib/
 |--auth-client.js
 |--auth.js
```

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/qurbanihat.git
cd qurbanihat
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 📌 Future Improvements

* Image upload system (Cloudinary)
* Booking system with payment
* Admin dashboard
* Email verification

---

## 👨‍💻 Author

Humayun Kabir

---

## 📄 License

This project is for educational purposes.
