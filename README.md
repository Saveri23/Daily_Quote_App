📱 Daily Quote App – AI-Assisted Mobile Application
📌 Overview

This is a Daily Quote mobile application built using React Native & Expo.
The app displays random quotes, allows users to save favorite quotes, share quotes using the system share sheet, and supports persistent storage.

This project was built as part of a Mobile Application Developer assignment, with a strong focus on effective AI tool usage during design, development, and debugging.

✨ Features

📖 Fetches and displays random quotes

❤️ Save favorite quotes

📂 View favorites in a separate screen

🔄 Persistent storage using AsyncStorage

📤 Share quotes via system share sheet

🌗 Light & Dark mode support

💥 Crash-free and clean UI

🛠️ Tech Stack

Framework: React Native (Expo)

Language: TypeScript / JavaScript

Storage: AsyncStorage

API: Quotable / ZenQuotes API

Design: Figma Make

AI Tools: ChatGPT (for code generation, debugging, workflow)

 UI Design (Figma)

The app UI was designed using Figma Make, focusing on a clean, minimal, and modern design.

 Figma Design Link:
https://www.figma.com/make/10sWYjZ76WOKbbQol1Aqmc/sa?t=5rZ3LPLucQCvQnxj-20&fullscreen=1
(Includes Home Screen, Favorites Screen, Light Mode & Dark Mode designs)

 AI-Assisted Development Workflow

AI tools were used to:

Generate initial project structure

Create reusable components (QuoteCard, Screens)

Integrate quote API

Implement AsyncStorage persistence

Debug runtime and logic issues

Improve code readability and structure

 AI Prompt Used:
Build a React Native Daily Quote App with random quote fetching,
favorite persistence using AsyncStorage, and share functionality.

Iteration Process:

Initial AI responses were refined by improving prompts

Generic solutions were customized to fit the project structure

AI was also used as a debugging assistant

 Loom Walkthrough Video (Important)

A 5-minute Loom video demonstrates:

App demo (features & flow)

Figma design process

AI usage and workflow

Code structure overview

 Loom Video Link:

https://www.loom.com/share/30dfa2047e0645f5aeb57876ee9f73d6
 Getting Started (Setup Instructions)
Prerequisites

Node.js installed

Expo CLI installed

Android Studio (for emulator) or physical device

Steps
https://github.com/Saveri23/Daily_Quote_App.git
cd daily-quote-app
npm install
npx expo start


Open the app in Android Emulator or Expo Go app

 Project Structure
app/
 | |-_layout.ysx
 │   ├─ index.tsx
 │   ├─ Favorites.tsx
 ├─ components/
 │   ├─ QuoteCard.tsx
 ├─ utils/
 │   ├─ storage.ts
|-theme.ts
 Future Improvements

Offline caching

Quote categories

Animations & transitions

Improved error handling

 Author
Saveri Gavvala

Bujji
Mobile Application Developer
screenshots:
home:/../assests/home.png
faviortes:/../assests/faviortes.png
share:/../assests/share.png
figma:/../assests/figma.png
