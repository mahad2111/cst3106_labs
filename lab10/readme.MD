# Hospital Triage App Design System

## Table of Contents
1. [Introduction](#introduction)
2. [Fonts](#fonts)
3. [Colour Palette](#colour-palette)
4. [App Components](#app-components)
5. [Layout and Navigation](#layout-and-navigation)
6. [Consistency](#consistency)
7. [Accessibility Considerations](#accessibility-considerations)
8. [Conclusion](#conclusion)

---

## Introduction

The **Hospital Triage App** is designed to efficiently assess and prioritize patient cases based on the severity of their conditions. This design system serves as a comprehensive guide to the visual and functional elements of the app, ensuring a cohesive and user-friendly experience across all components and pages.

---

## Fonts

### Font Selection

- **Primary Font:** [Open Sans](https://fonts.google.com/specimen/Open+Sans)
  
  - **Weights Used:** 400 (Regular), 600 (Semi-Bold)
  
  ![Open Sans Font Example](https://via.placeholder.com/400x100?text=Open+Sans+Font+Example)

### Reasoning Behind Font Choices

- **Readability:** Open Sans is renowned for its excellent readability on both web and mobile platforms, making it ideal for an application where clarity is paramount.
  
- **Versatility:** With multiple weight options, Open Sans provides flexibility in creating visual hierarchy without the need for multiple font families.
  
- **Aesthetic Appeal:** The clean and modern look of Open Sans aligns with the professional and trustworthy image of a hospital triage system.

### Implementation in CSS

```css
/* Google Fonts Integration */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

/* Applying the font to the body */
body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
}
Colour Palette
Overview
The color palette is meticulously selected to evoke trust, calmness, and professionalism, essential qualities for a healthcare application.

Primary Colours
Colour Name	HEX	Usage
Trust Blue	#007BFF	Primary buttons, links, and highlights
Neutral Gray	#6C757D	Text, secondary elements
Soothing Green	#28A745	Success messages, accents
Light Background	#F0F4F8	Backgrounds of sections and cards

Reasoning Behind Colour Choices
Trust Blue (#007BFF): Blue is universally associated with trust and reliability, making it perfect for primary actions and highlights.

Neutral Gray (#6C757D): Gray serves as a balanced color that complements primary and accent colors without overwhelming the user.

Soothing Green (#28A745): Green conveys health, safety, and calmness, ideal for success messages and positive indicators.

Light Background (#F0F4F8): A light and airy background ensures content stands out and maintains a clean look, reducing visual fatigue.

Implementation in CSS
css
Copy code
:root {
    --primary-color: #007BFF; /* Trust Blue */
    --secondary-color: #6C757D; /* Neutral Gray */
    --accent-color: #28A745; /* Soothing Green */
    --background-color: #F0F4F8; /* Light Background */
    /* Additional color variables */
    --header-background: #ffffff;
    --header-shadow: rgba(0, 0, 0, 0.1);
    --footer-background: #ffffff;
    --button-primary-bg: #007BFF;
    --button-primary-hover: #0056b3;
    --button-secondary-bg: #6C757D;
    --button-secondary-hover: #5a6268;
    --input-border: #CED4DA;
    --input-focus-border: #80BDFF;
    --card-background: #ffffff;
    --table-header-bg: #007BFF;
    --table-header-color: #ffffff;
    --table-row-hover: #f1f1f1;
    --site-title-color: #007BFF; /* Title Color */
}
App Components
1. Titles
User Page Title: "Hospital Triage - User"

Design: Large, centered text for clear identification.

Purpose: Clearly indicates the purpose of the page to the user.

Admin Page Title: "Hospital Triage - Admin"

Design: Mirrors the user page title for consistency.

Purpose: Differentiates the admin functionalities from the user interface.

Implementation in HTML:

html
Copy code
<h2>Hospital Triage - User</h2>
Implementation in CSS:

css
Copy code
h2 {
    color: var(--primary-color);
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
}
2. Buttons
Primary Buttons: Used for main actions like "Submit" or "Get Started".

Design: Trust Blue background with white text, hover effect for interactivity.

Functionality: Encourages user engagement through prominent actions.

Secondary Buttons: Used for less critical actions like "Remove".

Design: Neutral Gray background with white text, consistent hover effects.

Functionality: Provides alternative actions without drawing undue attention.

Implementation in HTML:

html
Copy code
<button class="primary-button">Submit</button>
<button class="secondary-button">Remove</button>
Implementation in CSS:

css
Copy code
.primary-button {
    background-color: var(--button-primary-bg);
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
}

.primary-button:hover {
    background-color: var(--button-primary-hover);
    transform: translateY(-2px);
}

.secondary-button {
    background-color: var(--button-secondary-bg);
    color: #fff;
    border: 2px solid #fff;
    display: flex;
    align-items: center;
    gap: 5px;
}

.secondary-button:hover {
    background-color: var(--button-secondary-hover);
    transform: translateY(-2px);
}
3. Input Fields
Design: Clear borders with subtle focus effects to guide user input.

Functionality: Enhances user experience by providing intuitive and accessible forms.

Implementation in HTML:

html
Copy code
<input type="text" id="name" name="name" required placeholder="Enter your full name">
Implementation in CSS:

css
Copy code
form input,
form select,
form textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--input-border);
    border-radius: 5px;
    font-size: 1em;
    transition: border-color 0.3s, box-shadow 0.3s;
}

form input:focus,
form select:focus,
form textarea:focus {
    border-color: var(--input-focus-border);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    outline: none;
}
4. Tables
Design: Clear headers with alternating row colors for readability.

Functionality: Allows admins to efficiently manage and review user submissions.

Implementation in HTML:

html
Copy code
<table>
    <thead>
        <tr>
            <th>Full Name</th>
            <th>Contact Number</th>
            <th>Injury Type</th>
            <th>Pain Level</th>
            <th>Additional Info</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <!-- Table rows -->
    </tbody>
</table>
Implementation in CSS:

css
Copy code
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    padding: 15px;
    text-align: left;
}

th {
    background-color: var(--table-header-bg);
    color: var(--table-header-color);
    font-size: 1.1em;
}

tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

tbody tr:hover {
    background-color: var(--table-row-hover);
}

td button {
    padding: 8px 12px;
    font-size: 0.9em;
    display: flex;
    align-items: center;
    gap: 5px;
}
Layout and Navigation
Layout Structure
The Hospital Triage App employs a responsive layout that adapts seamlessly across various devices and screen sizes. The primary structure includes the following sections:

Header (Navbar): Fixed at the top, providing navigation links to different pages.
Main Content: Divided into distinct sections such as Hero, About Us, Services, Why Choose Us, Testimonials, and Contact.
Footer: Positioned at the bottom, containing copyright and policy links.
Wireframes
Note: Replace the placeholder links with actual wireframe images or diagrams.

Homepage Wireframe:


User Page Wireframe:


Admin Page Wireframe:


Navigation Flow
Primary Navigation:

Home: Landing page with overview and call-to-action.
User Page: Form for users to submit their triage information.
Admin Page: Dashboard for admins to manage and prioritize submissions.
Contact: Form for users to reach out with inquiries or feedback.
Hamburger Menu:

Visible on smaller screens, toggles the visibility of navigation links.

Enhancements for User Interaction:

Responsive Design: Ensures that navigation remains accessible and user-friendly across all devices.
Clear Call-to-Actions: Buttons like "Get Started" guide users through the app's workflow.
Consistent Layout: Maintains uniformity across different pages, enhancing user familiarity and ease of use.
Consistency
Design Principles
Uniform Typography: Consistent use of Open Sans across all text elements ensures a harmonious visual flow.
Colour Usage: Adherence to the defined color palette across all components reinforces brand identity and user recognition.
Component Styling: Similar styles for buttons, input fields, and other interactive elements provide predictability and ease of use.
Implementation Strategies
CSS Variables: Utilizing CSS variables for colors and fonts ensures easy maintenance and consistency throughout the app.

css
Copy code
:root {
    --primary-color: #007BFF;
    --secondary-color: #6C757D;
    /* ...other variables */
}
Reusable Classes: Common classes like .primary-button and .secondary-button are used across different pages, maintaining a consistent look and feel.

css
Copy code
.primary-button {
    background-color: var(--button-primary-bg);
    color: #fff;
    /* ...other styles */
}
Responsive Design: Consistent behavior across different screen sizes ensures that the user experience remains intact regardless of the device used.

Benefits of Consistency
Enhanced Usability: Users can navigate and interact with the app intuitively without having to relearn interfaces.
Professional Appearance: A consistent design exudes professionalism and reliability, crucial for a healthcare application.
Simplified Maintenance: Uniform design elements make it easier to update and manage the app's visual aspects.
Accessibility Considerations
Ensuring accessibility is paramount to cater to all users, including those with disabilities. The following strategies have been implemented:

ARIA Labels:

Added to interactive elements like the navbar for better screen reader compatibility.

html
Copy code
<nav class="navbar" aria-label="Main Navigation">
    <!-- Navbar Content -->
</nav>
Keyboard Navigation:

Ensured that all links and buttons are accessible via keyboard (tab navigation).
Alt Texts:

Provided meaningful alt attributes for all images to describe their purpose.

html
Copy code
<img src="images/hero-image.jpg" alt="Healthcare Professionals assisting patients">
Contrast Ratios:

Verified that text and background color combinations meet WCAG contrast standards.
Responsive Text:

Utilized relative units (em, rem) for font sizes to support user preferences and device settings.
Form Accessibility:

Associated labels with input fields to enhance form usability.

html
Copy code
<label for="name">Full Name:</label>
<input type="text" id="name" name="name" required>
Conclusion
The Hospital Triage App Design System provides a structured and cohesive framework that guides the app's visual and functional elements. By adhering to this design system, the app ensures a seamless and accessible user experience, fostering trust and efficiency in healthcare triage processes.

For any further enhancements or questions regarding the design system, please refer to the project repository or contact the development team.

markdown
Copy code

---

## Additional Notes

- **Visual Aids:** Replace the placeholder image links (e.g., `https://via.placeholder.com/...`) with actual screenshots or diagrams relevant to your app.
  
- **Repository Link:** Ensure that your GitHub repository is well-organized and includes all necessary files (HTML, CSS, JavaScript, images) as referenced in the design system.

- **Submission Details:** Follow your lab submission guidelines meticulously, providing all required information such as team member names and the repository link.

- **Consistency Check:** Before finalizing your document, review it to ensure that all sections are complete and accurately reflect your app's design.

Feel free to modify and expand upon this template to better fit the specific details and unique aspects of your Hospital Triage App.





