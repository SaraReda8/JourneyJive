# 🌍 Journey Jive

Journey Jive is a fully responsive travel website built using **React.js** and **Vite**, designed to provide an engaging and visually appealing experience for users exploring travel destinations, city breaks, holidays, and more.

## 🌐 Live Preview

## 🚀 Tech Stack

- ⚛️ **React.js** (with `react-router-dom` for routing)
- ⚡ **Vite** for blazing-fast development
- 💅 **CSS Modules** for scoped styling
- 🎨 **Bootstrap 5** & **React Bootstrap** for layout and responsiveness
- 🌀 **Framer Motion**, **Animate.css**, and **ScrollReveal** for smooth animations
- 🎯 **Formik** + **Yup** for form handling and validation
- 🔁 **React Query** for future API integration (currently no APIs are used)
- 🔠 **FontAwesome**, **React Icons** for iconography
- 🎡 **Slick Carousel** for sliders
- 💡 **React Detect Offline** for offline user detection

## 🧭 Key Features

**🎯 Interactive Navigation Bar**  
A responsive and user-friendly navigation bar, designed to help users easily navigate between different sections like Home, Holidays, City Breaks, Destinations, and more.

**📱 Responsive Design**  
Optimized for mobile and desktop devices, ensuring the best user experience across all platforms.

**🌍 Holiday and City Breaks**  
Information on holidays and city breaks with easy-to-browse packages, details, and pricing.

**📋 Travel List Management**  
A unique "Far Away" component allows you to create a to-do list for your trip. You can add tasks, delete completed ones, and track the percentage of completed items.

**🛍️ Booking and Contact Pages**  
Easy booking interface and contact details to get in touch with the team.

**📑 Mega Menu**  
A detailed and user-friendly mega menu with access to all the important pages like Terms, Privacy Policy, FAQs, etc.

**👇 Customizable Footer**  
A clean footer that contains useful links like social media, contact information, and payment methods.

**👨‍👩‍👧‍👦 Tour Guides and Feedback**  
Access to tour guide information and feedback from other travelers to help you make informed decisions.

**⭐ User Testimonials**  
Display of user reviews and testimonials, making it easier for new users to trust and rely on the services.

**🎨 Animated Elements**  
Smooth animations using libraries like animate.css and framer-motion to improve the overall user experience.

**🌐 Social Media and Payment Icons**  
Displays major payment methods (Visa, MasterCard, PayPal, InstaPay) and links to social media platforms for enhanced trust.

**🌀 SVG Animations**  
Logo animations and rotating text for an engaging user interface.

**🔐 User Authentication**  
Authentication forms to ensure users can sign up, log in, and manage their profiles.

**📱 Mobile-Friendly Forms**  
Form components such as sign-up, login, and contact forms are optimized for mobile devices with form validation via Yup and Formik.

**🌟 On-demand Content Fetching**  
Components like Holiday Details and Travel List load content as needed, reducing unnecessary data fetches.

**⚠️ Error Handling**  
Graceful error handling for failed API requests or missing pages, improving user experience.

**📈 SEO Optimization**  
The website has basic SEO optimizations for better discoverability by search engines.

**🌐 Cross-Browser Compatibility**  
The site is designed to work seamlessly across all major browsers.

**🚫 Offline Detection**  
With react-detect-offline, users are informed if they lose internet connection, enhancing accessibility.

**📍 Sticky Navigation**  
The navigation bar remains fixed at the top as users scroll down, providing easy access to the menu.

**📝 User Feedback**  
Provides a Feedback section for users to leave comments and reviews, increasing interaction.

**📚 Blog Integration**  
A blog section with dynamic loading of posts and the ability to add new content for the community.

**🔒 Privacy and Terms Pages**  
Dedicated pages outlining privacy policy and terms of use for legal transparency
## 🖼️ Assets
- All images are in **`.webp`** format for performance optimization.
- Images are stored in the `src/assets/` folder.
- Used locally — no API fetching.## 🧪 Scripts
## 📌 Notes
 - No external APIs are used — all data and images are managed locally.
 - Make sure to use modern browsers for the best performance and visual quality.
 - All images are compressed .webp format to ensure fast load times and efficient storage.
 
 | Script        | Description                        |
|---------------|------------------------------------|
| `npm run dev` | Start the development server       |
| `npm run build` | Build the app for production     |
| `npm run preview` | Preview the production build   |
| `npm run lint` | Lint the project                  |

## 📦 Installation

```bash
git clone https://github.com/yourusername/journey-jive.git
cd journey-jive
npm install
npm run dev