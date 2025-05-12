
import { Category, Product, PricingPlan } from "@/types";

export const categories: Category[] = [
  "UI Kits",
  "Mockups",
  "Illustrations",
  "Prompt Packs",
  "Stock Images",
];

export const products: Product[] = [
  {
    id: "ui-kit-1",
    name: "Minimalist Dashboard UI Kit",
    shortDescription: "Clean, modern dashboard components",
    description: "A comprehensive collection of minimalist dashboard components perfect for admin interfaces and data visualization projects.",
    price: 49,
    category: "UI Kits",
    image: "/assets/products/ui-kit-1.webp",
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
    image: "/assets/products/ui-kit-2.webp",
    details: {
      type: "UI Kits",
      toolsSupported: ["Figma", "Sketch"],
      fileTypes: ["Figma", ".sketch", ".svg"],
      screenCount: 85,
    },
  },
  {
    id: "mockup-1",
    name: "Device Mockup Collection",
    shortDescription: "Realistic device mockups for presentations",
    description: "High-quality mockups of popular devices including phones, tablets, laptops, and watches for beautiful product presentations.",
    price: 39,
    category: "Mockups",
    image: "/assets/products/mockup-1.webp",
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
    image: "/assets/products/mockup-2.webp",
    details: {
      type: "Mockups",
      deviceTypes: ["iPhones", "iPads", "MacBooks", "Apple Watch"],
      resolution: "4K (3840x2160px)",
    },
  },
  {
    id: "illustration-1",
    name: "Abstract Shape Collection",
    shortDescription: "Colorful abstract vector illustrations",
    description: "A versatile set of abstract shapes and illustrations perfect for landing pages, presentations, and branding projects.",
    price: 0,
    category: "Illustrations",
    image: "/assets/products/illustration-1.webp",
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
    image: "/assets/products/illustration-2.webp",
    details: {
      type: "Illustrations",
      style: "Flat, Colorful",
      formats: [".svg", ".ai", ".png"],
      licensing: "Commercial Use",
    },
  },
  {
    id: "prompt-pack-1",
    name: "Product Description Generator",
    shortDescription: "AI prompts for compelling product descriptions",
    description: "A curated pack of prompts specifically designed to generate engaging and persuasive product descriptions for e-commerce.",
    price: 19,
    category: "Prompt Packs",
    image: "/assets/products/prompt-pack-1.webp",
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
    image: "/assets/products/prompt-pack-2.webp",
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
    id: "stock-image-1",
    name: "Workspace Photo Collection",
    shortDescription: "Modern workspace photography",
    description: "Beautiful high-resolution photographs of modern workspaces, perfect for websites, presentations, and marketing materials.",
    price: 0,
    category: "Stock Images",
    image: "/assets/products/stock-image-1.webp",
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
    image: "/assets/products/stock-image-2.webp",
    featured: true,
    details: {
      type: "Stock Images",
      resolution: "5K (5120x2880px)",
      licensing: "Royalty-Free",
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
