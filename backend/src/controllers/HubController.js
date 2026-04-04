import BlogPost from '../models/BlogPost.model.js';

// Market Intelligence Mapping (Information Gain)
const marketIntelligence = {
  categories: {
    "restaurant": "prioritize online ordering integrations and QR menu systems",
    "clinic": "focus strictly on HIPAA-compliant appointment booking and patient portals",
    "salon": "rely on visual portfolios and Instagram-integrated scheduling",
    "real estate": "require robust MLS integrations and virtual tour capabilities",
    "default": "prioritize mobile-first loading speeds and integrated booking systems"
  },
  locations: {
    "tier-1": "hyper-local SEO (Google Maps) and mobile-first conversions",
    "default": "structured local SEO and community-focused trust signals"
  }
};

// Helper function to get the dynamic insight
const getDynamicInsight = (type, name) => {
  const normalizedName = name.toLowerCase();
  if (type === "category") {
    const key =
      Object.keys(marketIntelligence.categories).find((k) =>
        normalizedName.includes(k),
      ) || "default";
    return marketIntelligence.categories[key];
  } else {
    // logic to detect Tier 1 cities
    const tier1Cities = ["pune", "mumbai", "new york", "london", "austin"];
    const isTier1 = tier1Cities.some((city) => normalizedName.includes(city));
    return marketIntelligence.locations[isTier1 ? "tier-1" : "default"];
  }
};

export const getHubData = async (req, res) => {
  try {
    const { type, slug } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 24; 
    const skip = (page - 1) * limit;

    const query = { status: 'published' };
    
    // SLUG MATCHING 
    if (type === 'category') query.categorySlug = slug;
    else if (type === 'location') query.geographySlug = slug;
    else return res.status(400).json({ error: "Invalid hub type." });

    // PAGINATED FETCH 
    const [posts, totalGuides] = await Promise.all([
      BlogPost.find(query)
        .select('slug h1 category geography coverImage metaDescription createdAt')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      BlogPost.countDocuments(query)
    ]);

    if (!posts.length && page === 1) return res.status(404).json({ error: "No guides found." });

    // GENERATE DEEP INSIGHTS & TOP LISTS
    let insights = {};
    let topList = [];

    if (type === 'location') {
      const geoName = posts[0].geography;
      // Aggregate Top 5 Categories in this City
      topList = await BlogPost.aggregate([
        { $match: { geographySlug: slug, status: 'published' } },
        { $group: { _id: "$category", count: { $sum: 1 }, slug: { $first: "$categorySlug" } } },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ]);
      
      insights = {
        title: `Digital Strategies for ${geoName}`,
        subtitle: `Explore growth blueprints across ${totalGuides} local industries in ${geoName}.`,
        statLabel: "Total Industries",
        statValue: await BlogPost.distinct('category', { geographySlug: slug }).then(res => res.length),
        listTitle: `Top Industries in ${geoName}`
      };
    } else {
      const catName = posts[0].category;
      // Aggregate Top 5 Cities for this Category
      topList = await BlogPost.aggregate([
        { $match: { categorySlug: slug, status: 'published' } },
        { $group: { _id: "$geography", count: { $sum: 1 }, slug: { $first: "$geographySlug" } } },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ]);

      insights = {
        title: `The ${catName} Growth Playbook`,
        subtitle: `Discover how this industry leverages digital tools across ${totalGuides} cities.`,
        statLabel: "Cities Tracked",
        statValue: await BlogPost.distinct('geography', { categorySlug: slug }).then(res => res.length),
        listTitle: `Top Cities for ${catName}s`
      };
    }

    const dynamicStrategy = getDynamicInsight(type, type === 'location' ? posts[0].geography : posts[0].category);
    
    // Update the insights object being sent to the frontend:
    insights.marketIntelligence = `Based on our analysis of ${totalGuides} digital blueprints, successful ${type === 'location' ? 'local businesses in this region' : 'operators in this sector'} ${dynamicStrategy}. Businesses that implement these core features see significantly higher customer retention and organic discovery.`;
  
    res.status(200).json({
      insights,
      topList,
      totalGuides,
      totalPages: Math.ceil(totalGuides / limit),
      currentPage: page,
      posts
    });

  } catch (err) {
    console.error("Hub Fetch Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
};