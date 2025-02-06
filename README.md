# 🍽️ Foodies 
### A Full-Stack Next.js App for Meal Browsing  

## 📌 Overview  
This project is a **Next.js** application that allows users to browse and view meal details. It utilizes **React components, server-side rendering (SSR), and an SQLite database** to manage and display meal information dynamically.  

---

## 🚀 Features  
✅ **Next.js 13 (App Router)** – Uses server-side rendering and dynamic routing for efficient rendering.  
✅ **Dynamic Meal Pages** – Each meal has its own detailed page, fetched from a SQLite database.  
✅ **Styled with CSS Modules** – Ensures modular and maintainable styling for each component.  
✅ **Optimized Image Handling** – Uses **Next.js Image Optimization** for fast-loading meal images.  
✅ **Error Handling & Loading States** – Custom error pages and loading indicators for a smooth user experience.  
✅ **Modular Components** – Reusable UI components for maintainability.  

---

## 🛠️ Technologies Used  
- **Next.js 13** – For SSR and API routes.  
- **React** – Component-based architecture.  
- **SQLite (better-sqlite3)** – Lightweight database for meal storage.  
- **CSS Modules** – Scoped styling for each component.  
- **Node.js & npm** – For package management and development.  
- **ESLint & Prettier** – Code formatting and linting.  

---

## 📸 Project Preview
![image](https://github.com/user-attachments/assets/816efb7d-c50c-4278-a246-433838240f6f)
![image](https://github.com/user-attachments/assets/6660aadf-cbe3-4ae0-b945-4a7c97f2b11a)
![image](https://github.com/user-attachments/assets/647d37be-6e7f-43d2-bb3c-34025b670e4a)



## 📂 Project Structure  

```
foodies-website/
├── app/
│   ├── community/              # Community-related pages
│   ├── meals/                  # Meal-related pages
│   │   ├── [mealSlug]/         # Dynamic route for each meal
│   │   │   ├── page.js         # Renders individual meal details
│   │   │   ├── page.module.css # Scoped styles for meal details
│   │   ├── share/              # Shared meal components
│   │   ├── error.js            # Custom error page
│   │   ├── loading-out.js      # Loading animation
│   │   ├── layout.js           # Layout component for meals section
│   │   ├── not-found.js        # Custom 404 page
│   │   ├── page.js             # Main meals page
│   │   ├── page.module.css     # Meals page styling
│   ├── globals.css             # Global styles
│   ├── assets/                 # Static assets (icons, images, etc.)
│   ├── components/             # Reusable UI components
│   │   ├── main-header/        # Navigation bar/header
│   │   ├── meals/              # Meal card components
│   ├── lib/                    # Database and utility functions
│   │   ├── meals.js            # Database queries
├── public/                     # Publicly accessible assets
├── meals.db                     # SQLite database file
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Files to ignore in Git
├── initdb.js                    # Database initialization script
├── jsconfig.json                # Path aliasing config
├── next.config.js                # Next.js configuration
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Dependency lock file
└── README.md                    # Project documentation
```

---

## 📸 Preview  
*(Include a screenshot of your app here for better presentation.)*  

---

## 📥 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/Caiko/foodies-website.git
cd foodies-website
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Set Up the Database  
```sh
node initdb.js
```

### 4️⃣ Run the Development Server  
```sh
npm run dev
```
Then open **[localhost:3000](http://localhost:3000)** in your browser.   
