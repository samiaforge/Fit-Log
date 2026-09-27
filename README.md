# 💪 FitLog — Workout Library

FitLog is a modern, responsive workout library built with Next.js. It allows users to browse workouts, view detailed workout information, add workouts to their daily plan, save workouts for later, and manage their workout list from a dedicated My Plan page.

## 🔗 Live Demo

[Live Link](https://fit-log-samia21.vercel.app/)

## 📂 GitHub Repository

[[GitHub Repository](https://github.com/samiaforge/Fit-Log)]

---

## ✨ Features

* 🏋️ **Workout Library** — Browse workouts with images, categories, equipment, duration, calories, and ratings.
* 📋 **Today's Plan** — Add workouts to your daily workout plan and track total exercises, minutes, and calories.
* 🔖 **Save for Later** — Save workouts and access them from the Saved tab.
* 🔍 **Workout Details** — View complete workout information including difficulty, sets, reps, instructions, and specifications.
* 📊 **Sort Workouts** — Sort workouts by duration, calories, or rating.
* 🔔 **Toast Notifications** — Get feedback when adding, saving, removing, or completing workouts.
* 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop screens.
* 🧭 **Dynamic Navigation** — Active navigation states and live Plan/Saved counters.
* ❌ **Empty States** — Helpful empty-state UI when no workouts are available.
* ⚡ **Loading & Error Handling** — Loading states while workout data is being fetched and a custom 404 page for invalid routes.

---

## 🛠️ Technologies Used

| Technology          | Purpose                           |
| ------------------- | --------------------------------- |
| **Next.js**         | Application framework and routing |
| **React**           | Building reusable UI components   |
| **TypeScript**      | Type-safe development             |
| **Tailwind CSS**    | Styling and responsive design     |
| **DaisyUI**         | UI components                     |
| **React Hot Toast** | Toast notifications               |
| **Next/Image**      | Optimized image rendering         |
| **FitLog API**      | Workout data source               |

---

## 📡 API

The project uses the FitLog API to fetch workout data.

### All Workouts

`[https://api.api-store.workers.dev/api/fitlog]`

### Single Workout

`https://api.api-store.workers.dev/api/fitlog/:id`

---

## 📁 Main Features & Pages

### 🏠 Home Page

The home page contains:

* Hero/Banner section
* Workout Library
* Responsive workout card grid
* Workout categories
* Workout statistics
* Loading state while fetching data

### 💪 Workout Details

Each workout has a dedicated details page containing:

* Workout image
* Workout name
* Description
* Muscle groups
* Equipment
* Difficulty
* Sets & reps
* Duration
* Calories
* Rating
* Instructions
* Add to Today's Plan button
* Save for Later button

### 📋 My Plan

The My Plan page allows users to manage:

* Today's Plan
* Saved workouts
* Exercise count
* Total workout minutes
* Total calories
* Sorting by duration, calories, or rating
* View Details
* Mark as Done
* Remove workouts

---

## 🧩 State Management

FitLog uses React Context API to manage workout state globally.

The `PlanContext` handles:

* Today's Plan
* Saved workouts
* Adding workouts to the plan
* Removing workouts from the plan
* Adding workouts to Saved
* Removing workouts from Saved

This also keeps the navbar counters synchronized with the current plan and saved items.

---

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The layout adapts the navbar, hero section, workout grid, workout details, and My Plan cards according to screen size.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK_HERE
```

Navigate to the project:

```bash
cd fitlog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📦 Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 🎯 Project Goals

FitLog was built to practice and demonstrate:

* Next.js App Router
* React components
* TypeScript
* React Context API
* API data fetching
* Dynamic routes
* Responsive UI design
* State management
* Reusable components
* User interaction and notifications

---

## 👩‍💻 Author

**Samia**

Built with 💪 and ☕ using Next.js, React, TypeScript, and Tailwind CSS.

---

## 📄 License

This project was created for educational and assignment purposes.
