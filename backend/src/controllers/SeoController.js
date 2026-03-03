import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import BlogPost from '../models/BlogPost.model.js';

// ES Module ke liye __dirname setting
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const renderSeoBlogPage = async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug });
    
    const indexPath = path.resolve(__dirname, '../../../frontend/dist/index.html');
    let htmlData = fs.readFileSync(indexPath, 'utf8');

    if (post) {
      htmlData = htmlData
        .replace('<title>Vite + React</title>', `<title>${post.metaTitle}</title>`)
        .replace('<meta name="description" content="Vite description"/>', `<meta name="description" content="${post.metaDescription}"/>`);
    } else {
      htmlData = htmlData.replace('<title>Vite + React</title>', `<title>Post Not Found - Websites.co.in</title>`);
    }

    res.send(htmlData);
  } catch (err) {
    console.error("SEO Injection Error:", err);
    res.status(500).send("Server Error occurred while injecting SEO.");
  }
};