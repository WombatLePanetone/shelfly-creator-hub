
import { Category, Product, PricingPlan } from "@/types";

export const categories: Category[] = [
  "UI Kits",
  "Mockups",
  "Illustrations",
  "Prompt Packs",
  "Stock Images",
];

export const products: Product[] = [
  // UI Kits (4 products)
  {
    id: "ui-kit-1",
    name: "Minimalist Dashboard UI Kit",
    shortDescription: "Clean, modern dashboard components",
    description: "A comprehensive collection of minimalist dashboard components perfect for admin interfaces and data visualization projects.",
    price: 49,
    category: "UI Kits",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    featured: true,
    details: {
      type: "UI Kits",
      toolsSupported: ["Figma", "Sketch", "Adobe XD"],
      fileTypes: ["Figma", ".sketch", ".xd", ".svg"],
      screenCount: 120,
    },
  },
  {
    id: "ui-kit-2",
    name: "E-commerce UI Components",
    shortDescription: "Complete e-commerce interface system",
    description: "Everything you need to build beautiful online stores with pre-made components for product listings, carts, and checkouts.",
    price: 59,
    category: "UI Kits",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    details: {
      type: "UI Kits",
      toolsSupported: ["Figma", "Sketch"],
      fileTypes: ["Figma", ".sketch", ".svg"],
      screenCount: 85,
    },
  },
  {
    id: "ui-kit-3",
    name: "Social Media UI Framework",
    shortDescription: "Modern social networking components",
    description: "Comprehensive UI components designed for building social media platforms, community sites and networking applications.",
    price: 45,
    category: "UI Kits",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    details: {
      type: "UI Kits",
      toolsSupported: ["Figma", "Sketch", "Adobe XD"],
      fileTypes: ["Figma", ".sketch", ".xd", ".svg"],
      screenCount: 95,
    },
  },
  {
    id: "ui-kit-4",
    name: "Financial Dashboard Kit",
    shortDescription: "Banking and finance interface components",
    description: "Specialized UI components for financial applications, featuring charts, tables, and data visualization tools.",
    price: 65,
    category: "UI Kits",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    details: {
      type: "UI Kits",
      toolsSupported: ["Figma", "Sketch"],
      fileTypes: ["Figma", ".sketch", ".ai"],
      screenCount: 110,
    },
  },
  
  // Mockups (4 products)
  {
    id: "mockup-1",
    name: "Device Mockup Collection",
    shortDescription: "Realistic device mockups for presentations",
    description: "High-quality mockups of popular devices including phones, tablets, laptops, and watches for beautiful product presentations.",
    price: 39,
    category: "Mockups",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    featured: true,
    details: {
      type: "Mockups",
      deviceTypes: ["Phones", "Tablets", "Laptops", "Watches"],
      resolution: "4K (3840x2160px)",
    },
  },
  {
    id: "mockup-2",
    name: "Clay Device Mockups",
    shortDescription: "Elegant clay-style device presentations",
    description: "Modern clay-style mockups for showcasing your UI designs on various devices with customizable backgrounds and shadows.",
    price: 29,
    category: "Mockups",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    details: {
      type: "Mockups",
      deviceTypes: ["iPhones", "iPads", "MacBooks", "Apple Watch"],
      resolution: "4K (3840x2160px)",
    },
  },
  {
    id: "mockup-3",
    name: "Responsive Website Mockups",
    shortDescription: "Multi-device web presentation templates",
    description: "Showcase your responsive website designs across multiple devices simultaneously with these professional mockup templates.",
    price: 34,
    category: "Mockups",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    details: {
      type: "Mockups",
      deviceTypes: ["Desktop", "Laptop", "Tablet", "Phone"],
      resolution: "5K (5120x2880px)",
    },
  },
  {
    id: "mockup-4",
    name: "Branding Identity Mockups",
    shortDescription: "Professional brand presentation templates",
    description: "Complete set of mockups for presenting your brand identity designs including stationery, signage, and promotional items.",
    price: 0,
    category: "Mockups",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    details: {
      type: "Mockups",
      deviceTypes: ["Stationery", "Business Cards", "Signage", "Merchandise"],
      resolution: "4K (3840x2160px)",
    },
  },
  
  // Illustrations (4 products)
  {
    id: "illustration-1",
    name: "Abstract Shape Collection",
    shortDescription: "Colorful abstract vector illustrations",
    description: "A versatile set of abstract shapes and illustrations perfect for landing pages, presentations, and branding projects.",
    price: 0,
    category: "Illustrations",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    featured: true,
    details: {
      type: "Illustrations",
      style: "Abstract, Geometric",
      formats: [".svg", ".ai", ".eps", ".png"],
      licensing: "Commercial Use",
    },
  },
  {
    id: "illustration-2",
    name: "Character Illustration Pack",
    shortDescription: "Diverse character illustrations",
    description: "A diverse set of character illustrations in a consistent style, perfect for websites, apps, and marketing materials.",
    price: 39,
    category: "Illustrations",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    details: {
      type: "Illustrations",
      style: "Flat, Colorful",
      formats: [".svg", ".ai", ".png"],
      licensing: "Commercial Use",
    },
  },
  {
    id: "illustration-3",
    name: "Isometric Scene Builder",
    shortDescription: "3D-style isometric illustration assets",
    description: "Create custom isometric scenes with this collection of buildings, objects, and character assets in a consistent style.",
    price: 49,
    category: "Illustrations",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    details: {
      type: "Illustrations",
      style: "Isometric, 3D",
      formats: [".svg", ".ai", ".eps", ".png"],
      licensing: "Commercial Use",
    },
  },
  {
    id: "illustration-4",
    name: "Nature & Environment Pack",
    shortDescription: "Environmental illustration elements",
    description: "Beautiful nature-themed illustrations including plants, landscapes, and environmental elements for eco-friendly projects.",
    price: 29,
    category: "Illustrations",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    details: {
      type: "Illustrations",
      style: "Hand-drawn, Organic",
      formats: [".svg", ".ai", ".png"],
      licensing: "Commercial Use",
    },
  },
  
  // Prompt Packs (4 products)
  {
    id: "prompt-pack-1",
    name: "Product Description Generator",
    shortDescription: "AI prompts for compelling product descriptions",
    description: "A curated pack of prompts specifically designed to generate engaging and persuasive product descriptions for e-commerce.",
    price: 19,
    category: "Prompt Packs",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    featured: true,
    details: {
      type: "Prompt Packs",
      aiModels: ["ChatGPT", "Claude", "Gemini"],
      examplePrompts: [
        "Create a compelling product description for [product] that highlights its [key feature]",
        "Write a persuasive bullet-point list of benefits for [product type] focused on [customer pain point]"
      ],
    },
  },
  {
    id: "prompt-pack-2",
    name: "UX Copy Creator",
    shortDescription: "Generate user-friendly interface copy",
    description: "Specialized prompts for creating clear, concise, and effective UX copy for buttons, forms, error messages, and more.",
    price: 24,
    category: "Prompt Packs",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    details: {
      type: "Prompt Packs",
      aiModels: ["ChatGPT", "Claude", "Gemini", "DALL-E"],
      examplePrompts: [
        "Write error message copy for [situation] that is helpful and non-technical",
        "Create microcopy for [feature] that guides users through [process]"
      ],
    },
  },
  {
    id: "prompt-pack-3",
    name: "Marketing Content Framework",
    shortDescription: "AI prompts for marketing campaigns",
    description: "Comprehensive prompts designed to generate social media posts, email campaigns, and advertising copy for various platforms.",
    price: 29,
    category: "Prompt Packs",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    details: {
      type: "Prompt Packs",
      aiModels: ["ChatGPT", "Claude", "Gemini", "Bard"],
      examplePrompts: [
        "Create a 5-part social media campaign for [product launch] targeting [audience]",
        "Generate a sequence of 3 email subject lines for [promotion] with increasing urgency"
      ],
    },
  },
  {
    id: "prompt-pack-4",
    name: "SEO Content Optimizer",
    shortDescription: "Enhance content for search visibility",
    description: "AI prompts specifically crafted to help optimize website content, blog posts, and product descriptions for better search ranking.",
    price: 0,
    category: "Prompt Packs",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    details: {
      type: "Prompt Packs",
      aiModels: ["ChatGPT", "Claude", "Gemini"],
      examplePrompts: [
        "Rewrite this [text] to target the keyword [keyword] with natural language",
        "Create an SEO-optimized FAQ section about [topic] with structured data markup"
      ],
    },
  },
  
  // Stock Images (4 products)
  {
    id: "stock-image-1",
    name: "Workspace Photo Collection",
    shortDescription: "Modern workspace photography",
    description: "Beautiful high-resolution photographs of modern workspaces, perfect for websites, presentations, and marketing materials.",
    price: 0,
    category: "Stock Images",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    details: {
      type: "Stock Images",
      resolution: "4K (3840x2160px)",
      licensing: "Royalty-Free",
    },
  },
  {
    id: "stock-image-2",
    name: "Nature Background Pack",
    shortDescription: "HD nature backgrounds and textures",
    description: "A versatile collection of high-definition nature backgrounds, textures, and patterns for your design projects.",
    price: 29,
    category: "Stock Images",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    featured: true,
    details: {
      type: "Stock Images",
      resolution: "5K (5120x2880px)",
      licensing: "Royalty-Free",
    },
  },
  {
    id: "stock-image-3",
    name: "Business & Corporate Gallery",
    shortDescription: "Professional business imagery",
    description: "High-quality stock photographs depicting modern business settings, meetings, teamwork, and corporate environments.",
    price: 35,
    category: "Stock Images",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    details: {
      type: "Stock Images",
      resolution: "4K (3840x2160px)",
      licensing: "Royalty-Free",
    },
  },
  {
    id: "stock-image-4",
    name: "Minimal Tech Photography",
    shortDescription: "Clean technology product imagery",
    description: "Minimalist photographs of modern technology devices and setups on clean backgrounds, perfect for tech websites.",
    price: 25,
    category: "Stock Images",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    details: {
      type: "Stock Images",
      resolution: "4K (3840x2160px)",
      licensing: "Extended Commercial",
    },
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out Shelfly",
    features: [
      "Access to free products",
      "Basic download capabilities",
      "Standard license",
      "Community support"
    ],
    buttonText: "Get Started",
    buttonLink: "/category/all"
  },
  {
    name: "Single Product",
    price: "From $19",
    description: "For creators who need specific assets",
    features: [
      "One product of your choice",
      "Lifetime updates",
      "Commercial license",
      "Email support"
    ],
    highlighted: true,
    buttonText: "Browse Products",
    buttonLink: "/category/all"
  },
  {
    name: "Pro Access",
    price: "$10/mo",
    description: "Get everything with one low payment",
    features: [
      "Access to all products",
      "Unlimited downloads",
      "Commercial license",
      "Priority support",
      "Early access to new products"
    ],
    buttonText: "Unlock Everything",
    buttonLink: "/checkout?plan=pro"
  }
];
