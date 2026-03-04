# InstaWeb Labs: Programmatic SEO (pSEO) Engine

## 1. Project Title
**InstaWeb Labs - AI-Powered Local SEO Blog Generator**

## 2. Description
InstaWeb Labs is an automated, full-stack programmatic SEO (pSEO) engine. It is designed to generate highly optimized, location-specific blog posts to capture local search traffic. The platform solves the traditional Single Page Application (SPA) SEO problem by using a custom Express.js interception layer that dynamically injects meta tags and JSON-LD structured data into the raw HTML before serving it to search engine crawlers like Googlebot. 

## 3. Features
* **AI Content Generation:** Leverages the Gemini API to instantly write, format, and structure high-quality blog posts based on targeted long-tail keywords (e.g., "Top Website Builder for Salon in Pune").
* **Server-Side SEO Injection:** Dynamically injects `<title>`, `<meta>` descriptions, and Open Graph tags into the raw HTML for immediate search engine reading.
* **Rich Snippet Schema:** Automatically generates and injects `@type: "Article"` JSON-LD schema markup to help pages rank for rich search results.
* **Automated Indexing Pipeline:** Dynamically generates and updates `sitemap.xml`, `robots.txt`, and `llms.txt` the moment a new post is created.
* **Admin UI:** A clean, mobile-responsive React dashboard to generate and manage blog content.

## 4. Tech Stack
* **Frontend:** React.js, Vite, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **AI Integration:** Google Gemini API
* **Deployment:** Render (with automated CI/CD)

## 5. Architecture
The project follows a decoupled Client-Server architecture designed specifically for search engine visibility:
1. **Frontend (Vite/React):** Handles the Admin Dashboard and the dynamic UI for reading blogs.
2. **Backend (Express):** Serves the built static files. However, for any `/blog/:slug` route, a custom SEO Controller intercepts the request, fetches the blog data from MongoDB, injects the proper SEO tags into the `index.html` string, and sends the fully optimized HTML back to the client/crawler.
3. **Automated Crawling:** Dynamic routes handle `/sitemap.xml` and `/robots.txt` to keep Googlebot constantly updated on new content.

## 6. Installation
To set up the project locally, ensure you have Node.js and MongoDB installed on your machine.

```bash
# Clone the repository
git clone https://github.com/Necro-Rohan/INSTAWEB-LABS.git

# Navigate into the project directory
cd instaweb-labs

# Install Backend Dependencies
cd backend
npm install

# Install Frontend Dependencies
cd ../frontend
npm install

```

## 7. Environment Variables

Create a `.env` file in the **`backend`** folder and add the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_google_gemini_api_key
NODE_ENV=development
ADMIN_SECRET=your_secret_key_for_admin_dashboard

```

## 8. Run Locally

You will need two terminal windows to run the frontend and backend simultaneously.

**Terminal 1 (Backend):**

```bash
cd backend
npm start
# or run with nodemon: npm run dev

```

**Terminal 2 (Frontend):**

```bash
cd frontend
npm run dev

```

The application will be available at `http://localhost:5173`.

## 9. API Documentation

* **`POST /api/generate`** - Triggers the AI to generate a new blog post based on provided keywords.
* **`GET /api/blogs`** - Fetches all published blog posts.
* **`GET /api/blogs/:slug`** - Fetches a single blog post by its URL slug.
* **`GET /sitemap.xml`** - Generates the dynamic XML sitemap for search engines.
* **`GET /robots.txt`** - Generates the crawler directives.
* **`GET /llms.txt`** - Generates a markdown directory for AI crawlers.

## 10. Folder Structure

```text
instaweb-labs/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Business logic (BlogGenerator, Indexing, SEO)
│   │   ├── middlewares/      # Request verification (adminVerification)
│   │   ├── models/           # MongoDB schemas (BlogPost.model.js)
│   │   ├── routes/           # API endpoints (aiRoutes, frontendRoutes, indexingRoutes)
│   │   └── services/         # External API integrations (aiService.js)
│   ├── db.js                 # MongoDB connection setup
│   ├── server.js             # Express application entry point
│   ├── package.json
│   └── .env                  # Backend environment variables
├── frontend/
│   ├── public/               # Static assets (favicons, SVG icons)
│   ├── src/
│   │   ├── assets/           # Local frontend assets
│   │   ├── pages/            # React page components (AdminDashboard, BlogPage, HomePage)
│   │   ├── utils/            # Axios API utility configuration (api.js)
│   │   ├── App.jsx           # Main React router configuration
│   │   ├── main.jsx          # React DOM mounting point
│   │   └── index.css         # Global styles and Tailwind directives
│   ├── index.html            # Main HTML template for Vite
│   ├── vite.config.js        # Vite bundler configuration
│   ├── package.json
│   └── .env                  # Frontend environment variables
└── README.md                 # Project documentation

```

## 11. Deployment

This project is configured for deployment on platforms like **Render**.

1. Connect your GitHub repository to Render as a "Web Service".
2. **Build Command:** `npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend`
3. **Start Command:** `node backend/server.js`
4. Ensure all Environment Variables from step 7 are added to the host environment dashboard.

## 12. Author

**Rohan Kumar** * GitHub: [Necro-Rohan](https://github.com/Necro-Rohan)

* LinkedIn: [Rohan Kumar](https://www.linkedin.com/in/rohan-kumar-2b2ab9326/)

---

