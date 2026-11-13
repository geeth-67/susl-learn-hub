# PROJECT DOCUMENTATION: LEARN HUB SUSL

---

## 📋 DOCUMENT CONTROL & COVER METADATA

| Metadata Field | Project Detail / Assignment Value |
| :--- | :--- |
| **Project Title** | LearnHub SUSL — Student Learning Platform & Resource Hub |
| **Live Website URL** | `https://learnhubsusl.vercel.app` |
| **Institution** | Sabaragamuwa University of Sri Lanka (SUSL) |
| **Course Code / Module** | [Enter Course Code Here] |
| **Submission Date** | [Enter Submission Date Here] |

---

## 1. PROJECT OVERVIEW

### 1.1 Introduction
**LearnHub SUSL** is a specialized, student-centric academic resource portal built specifically for undergraduate students at the Sabaragamuwa University of Sri Lanka (SUSL). The platform addresses the common challenge of fragmented study materials by consolidating first-semester lecture notes, presentation slides, video tutorials, and examination past papers into a single, highly accessible, and responsive digital interface.

### 1.2 Target Audience
* **Undergraduate Students:** Primarily first-year students navigating initial semester coursework and looking for organized revision materials.
* **Faculty & Peers:** Collaborative learners seeking a centralized repository to share and access verified academic content.

### 1.3 Core Objective
To bridge the information gap for university undergraduates by delivering a fast, clean, and intuitive web application that organizes complex academic modules into searchable, easy-to-navigate resource feeds.

---

## 2. SITE ARCHITECTURE & NAVIGATION STRUCTURE

The website follows a clean single-page application (SPA) layout with distinct modular sections mapped out for instant user access:

* **Header Navigation Bar:** Persistent top menu providing quick anchor links to *Home*, *Subjects*, *About*, and *FAQ*.
* **Hero Section:** High-impact welcoming banner introducing the platform's primary purpose and providing an instant call-to-action button (*"Explore Subjects"*).
* **Subjects Grid / Module Section:** Interactive repository listing all first-semester subjects, equipped with a real-time keyword search bar.
* **FAQ / Help Section:** Expandable accordion component addressing common student questions regarding file downloads and platform navigation.
* **Footer:** Institutional copyright notices, quick links, and developer attribution metadata.

---

## 3. KEY FEATURES & FUNCTIONALITY

1. **Real-Time Subject Search & Filtering:** 
   * Enables students to instantly locate specific courses or modules by typing keywords or course codes into the search input, eliminating manual scrolling.
2. **Centralized Academic Resource Repository:** 
   * Provides structured access points categorized per subject, housing notes, presentation slides, video lectures, and past examination papers.
3. **Responsive Mobile-First Layout:** 
   * Designed to adapt seamlessly across diverse hardware viewports—from mobile smartphones and tablets to desktop monitors.
4. **Interactive UI Components (Accordions):** 
   * Utilizes clean expandable dropdown menus for frequently asked questions to maintain a clutter-free user interface.

---

## 4. TECHNOLOGIES USED (TECHNICAL STACK)

The application is engineered using modern, lightweight frontend web technologies and cloud deployment tools optimized for high performance, rapid page rendering, and seamless serverless hosting:

* **HyperText Markup Language (HTML5):**
  * *Role:* Establishes the core semantic structure of the web pages, utilizing standard structural landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), accessible heading hierarchies, and clean document flow.
* **Cascading Style Sheets (CSS3):**
  * *Role:* Handles visual presentation, responsive layout grids, custom typography, flexible box models (Flexbox), and mobile-first media query breakpoints to guarantee cross-device compatibility.
* **JavaScript (ES6+):**
  * *Role:* Powers client-side interactivity, DOM manipulation, dynamic content rendering, responsive navigation toggling, and the real-time subject search filtering algorithm.
* **Vercel Cloud Hosting Platform:**
  * *Role:* Acts as the production deployment environment, providing continuous integration/continuous deployment (CI/CD), global Edge network content caching, and high-availability serverless hosting accessible via `https://learnhubsusl.vercel.app`.

---

## 5. HOW TO ACCESS & USE (USER GUIDE)

1. **Launch the Portal:** 
   * Open any modern web browser (Google Chrome, Microsoft Edge, Safari, or Mozilla Firefox) and enter the URL: `https://learnhubsusl.vercel.app/`.
2. **Explore Academic Modules:** 
   * Click on the **"Explore Subjects"** button or scroll directly to the course grid. Use the built-in search bar to filter subjects by name or code.
3. **Access Study Materials:** 
   * Click on any subject card to view available sub-resources, including lecture notes, slides, video recordings, and past papers.
4. **Troubleshoot & Get Assistance:** 
   * Scroll to the bottom FAQ accordion section for quick answers regarding file access, website navigation, or support contacts.