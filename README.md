# SUSL LearnHub

A simple study resource website for first-semester Information Systems students at Sabaragamuwa University of Sri Lanka. It is built with HTML, CSS, and plain JavaScript.

## Open the website

Open `index.html` in a web browser. No installation or build step is needed. An internet connection is used to load the Google Fonts; the site itself uses local files.

## Project files

- `index.html` — page content, navigation, homepage sections, FAQ, and footer.
- `style.css` — colors, layout, typography, and responsive styles for phones and larger screens.
- `script.js` — the 12 subject entries, search, subject detail pages, resource links, mobile menu, and FAQ interactions.
- `assets/` — images used on the homepage. The current hero portrait is `girl.png`, and the student group image is `students.png`.

## Main features

- Browse all 12 first-semester subjects.
- Search subjects by code or name.
- Open a subject to see its notes, slides, video tutorials, and past papers when links are available.
- Use the back button to return to the subject list.
- Expand FAQ answers by clicking the plus button.
- Use the navigation links to jump to Home, Subjects, About, and FAQ.
- View the responsive layout on desktop, tablet, or mobile.

## Update subject information

Open `script.js` and edit the `subjects` list near the top. Each subject has a code, name, icon, and arrays for `notes`, `slides`, `videos`, and `papers`. Add resource objects to the appropriate array, for example:

```js
{
  title: "Lecture 1 notes",
  description: "Introduction to the subject",
  url: "https://example.com/resource.pdf"
}
```

Use a direct PDF link for downloadable notes or papers, and a YouTube URL for a video. Replace the example URL with a real, verified link.

## Update the FAQ

In `index.html`, find the section marked `FAQ Section`. Each question has a button and an answer below it. Copy an existing `.faq-item` to add another question, then edit its question and answer text.

## Replace homepage images

Place image files in `assets/`, then update the image paths in `index.html`. The current page refers to `assets/girl.png` and `assets/students.png`.
