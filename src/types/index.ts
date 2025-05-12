
export type Category = 
  | "UI Kits" 
  | "Mockups" 
  | "Illustrations" 
  | "Prompt Packs" 
  | "Stock Images";

export type PricingTier = "Free" | "Paid" | "Pro";

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  category: Category;
  image: string;
  featured?: boolean;
  details: ProductDetails;
}

export type ProductDetails = 
  | UIKitDetails
  | MockupDetails
  | IllustrationDetails
  | PromptPackDetails
  | StockImageDetails;

export interface UIKitDetails {
  type: "UI Kits";
  toolsSupported: string[];
  fileTypes: string[];
  screenCount: number;
}

export interface MockupDetails {
  type: "Mockups";
  deviceTypes: string[];
  resolution: string;
}

export interface IllustrationDetails {
  type: "Illustrations";
  style: string;
  formats: string[];
  licensing: string;
}

export interface PromptPackDetails {
  type: "Prompt Packs";
  aiModels: string[];
  examplePrompts: string[];
}

export interface StockImageDetails {
  type: "Stock Images";
  resolution: string;
  licensing: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonLink: string;
}
