export type Recipe = {
  id: string;
  title: string;
  description: string;
  cuisine: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  calories: number;
  imageUrl: string;
  tags: string[];
};

export const recipes: Recipe[] = [
  {
    id: "creamy-tuscan-garlic-chicken",
    title: "Creamy Tuscan Garlic Chicken",
    description: "Tender pan-seared chicken breasts smothered in a rich garlic, sun-dried tomato, and spinach cream sauce.",
    cuisine: "Italian",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: "Easy",
    calories: 520,
    imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    tags: ["Chicken", "Creamy", "Keto-Friendly", "Dinner"],
  },
  {
    id: "classic-margherita-pizza",
    title: "Artisanal Margherita Pizza",
    description: "Crispy hand-stretched crust topped with San Marzano tomato sauce, fresh buffalo mozzarella, and fragrant sweet basil.",
    cuisine: "Italian",
    prepTimeMinutes: 25,
    cookTimeMinutes: 12,
    servings: 3,
    difficulty: "Medium",
    calories: 680,
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegetarian", "Pizza", "Comfort Food"],
  },
  {
    id: "spicy-shoyu-ramen",
    title: "Spicy Shoyu Ramen Bowl",
    description: "Springy noodles nestled in rich seasoned dashi broth with tender chashu, soft-boiled marinated egg, and nori.",
    cuisine: "Japanese",
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    servings: 2,
    difficulty: "Medium",
    calories: 610,
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    tags: ["Noodles", "Soup", "Spicy", "Authentic"],
  },
  {
    id: "avocado-toast-poached-egg",
    title: "Sourdough Avocado Toast & Egg",
    description: "Toasted artisan sourdough loaded with seasoned crushed avocado, golden runny poached eggs, chili flakes, and microgreens.",
    cuisine: "American",
    prepTimeMinutes: 10,
    cookTimeMinutes: 5,
    servings: 1,
    difficulty: "Easy",
    calories: 340,
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    tags: ["Breakfast", "Healthy", "Quick & Easy"],
  },
  {
    id: "thai-green-curry",
    title: "Fragrant Thai Green Curry",
    description: "Aromatic coconut milk curry infused with lemongrass, kaffir lime, crisp bamboo shoots, and tender chicken or tofu.",
    cuisine: "Thai",
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    servings: 4,
    difficulty: "Medium",
    calories: 490,
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
    tags: ["Curry", "Spicy", "Gluten-Free"],
  },
  {
    id: "acai-berry-smoothie-bowl",
    title: "Superfood Berry Smoothie Bowl",
    description: "Thick organic açaí blend topped with fresh sliced strawberries, blueberries, chia seeds, and toasted almond granola.",
    cuisine: "Fusion",
    prepTimeMinutes: 10,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: "Easy",
    calories: 310,
    imageUrl: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegan", "Superfood", "Breakfast", "Refreshing"],
  },
];
