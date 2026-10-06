/**
 * ADARSH ONE CAFÉ SYSTEM V1 — CLIENT DATA CONFIGURATION
 * 
 * Separates client-specific content from the design system.
 * To adapt this website for any other café, simply update this configuration object.
 */

import heroCafeImg from '../assets/images/hero_bandra_cafe_1791195064427.jpg';
import specialtyCoffeeImg from '../assets/images/specialty_coffee_latte_1791195076747.jpg';
import brunchToastImg from '../assets/images/brunch_truffle_toast_1791195089533.jpg';
import dessertCakeImg from '../assets/images/dessert_burnt_cheesecake_1791195102105.jpg';
import atmosphereSeatingImg from '../assets/images/atmosphere_cafe_seating_1791195113788.jpg';

export interface MenuItem {
  name: string;
  desc: string;
  price: string;
  tags?: string[];
}

export interface FeaturedItem {
  id: string;
  category: 'Coffee' | 'Brunch' | 'Desserts';
  name: string;
  description: string;
  price: string;
  notes: string;
  image: string;
  badge: string;
}

export interface GalleryItem {
  image: string;
  title: string;
  subtitle: string;
  aspect: 'wide' | 'portrait' | 'square' | 'landscape';
  colSpan: string;
}

export interface CafeConfig {
  name: string;
  shortName: string;
  neighborhood: string;
  city: string;
  tagline: string;
  subTagline: string;
  metadataChips: string[];
  address: {
    line1: string;
    line2: string;
    landmark: string;
    city: string;
    postalCode: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappUrl: string;
    instagramUrl: string;
    instagramHandle: string;
    googleMapsUrl: string;
  };
  hours: {
    days: string;
    time: string;
    kitchenNote: string;
  };
  brandPillars: Array<{
    number: string;
    title: string;
    description: string;
    notes: string;
  }>;
  story: {
    kicker: string;
    headline: string;
    paragraphs: string[];
    stats: Array<{ label: string; value: string }>;
  };
  featuredItems: FeaturedItem[];
  fullMenu: Record<string, MenuItem[]>;
  gallery: GalleryItem[];
}

export const CAFE_DATA: CafeConfig = {
  name: "Mysa Coffee House",
  shortName: "Mysa",
  neighborhood: "Bandra West",
  city: "Mumbai",
  tagline: "Coffee, food & moments worth staying for.",
  subTagline: "A modern neighbourhood café in Mumbai, crafted for slow mornings, good conversations and everything in between.",
  metadataChips: ["Specialty Coffee", "All-Day Brunch", "House-Made Desserts"],
  address: {
    line1: "Shop 4, Ground Floor, Perry Cross Road",
    line2: "Off Carter Road, Bandra West",
    landmark: "Near Jogger's Park & D'Monte Park",
    city: "Mumbai",
    postalCode: "400050"
  },
  contact: {
    phone: "+917498 733 087",
    phoneDisplay: "+91 7498 733 087",
    whatsappUrl: "https://wa.me/917498733087?text=Hi%20Mysa%20Coffee%20House,%20I'd%20like%20to%20reserve%20a%20table%20/%20say%20hello!",
    instagramUrl: "https://instagram.com/",
    instagramHandle: "@mysacoffeehouse",
    googleMapsUrl: "https://maps.google.com/?q=Perry+Cross+Road+Bandra+West+Mumbai"
  },
  hours: {
    days: "Monday – Sunday",
    time: "8:00 AM – 11:00 PM",
    kitchenNote: "Kitchen serves all-day brunch till 10:15 PM"
  },
  brandPillars: [
    {
      number: "01",
      title: "Specialty Coffee",
      description: "Direct-trade single-origin Arabica from heritage estates in Chikmagalur and Araku. Dialed in each morning, pulled on custom pressure-profile machines, and poured with quiet precision.",
      notes: "Direct Trade Beans · Manual Brew Bar · 18-hr Cold Brew"
    },
    {
      number: "02",
      title: "All-Day Brunch",
      description: "Grounded in 36-hour slow-fermented sourdough, rich cultured butters, farm-sourced eggs, and seasonal Maharashtra produce. Wholesome plates designed to nourish without rush.",
      notes: "Served All Day · Cultured Sourdough · Market Produce"
    },
    {
      number: "03",
      title: "House Desserts",
      description: "Small-batch patisserie baked fresh every dawn in our open pastry studio. Caramelized burnt basque centers, single-origin chocolate tarts, and subtle spice notes.",
      notes: "Baked Fresh Daily · Low Sugar Balance · Single-Origin Cacao"
    }
  ],
  story: {
    kicker: "The Philosophy",
    headline: "Made for the moments between things.",
    paragraphs: [
      "In a city that never stops moving, Mysa was conceived as a sanctuary of pause. The word 'mysa' is rooted in the Swedish ethos of lingering—taking time to slow down, settle into warmth, and savor simple pleasures with the people who matter.",
      "Nestled quietly off Perry Cross Road in Bandra West, our space blends raw limewash walls, warm reclaimed teak, and sun-drenched greenery. Whether you're settling in with a paperback at 8 AM, sharing truffle mushroom toast with old friends, or capping off an evening with Basque cheesecake, Mysa is your neighbourhood living room.",
      "We take coffee seriously, but never pretentiously. Every cup is brewed with patience, care, and beans that honour the multigenerational farmers who grew them."
    ],
    stats: [
      { label: "Origin Estates", value: "3 Dedicated Farms" },
      { label: "Sourdough Ferment", value: "36 Hours" },
      { label: "Neighbourhood", value: "Bandra West" },
      { label: "Roast Batch Size", value: "5 kg Small Batch" }
    ]
  },
  featuredItems: [
    {
      id: "mysa-house-latte",
      category: "Coffee",
      name: "Mysa House Latte",
      description: "Double ristretto of Chikmagalur washed Arabica, silky steamed whole milk, and our proprietary infusion of toasted green cardamom and Madagascar vanilla.",
      price: "₹340",
      notes: "House Recipe · Hot or Iced",
      image: specialtyCoffeeImg,
      badge: "Signature Blend"
    },
    {
      id: "cold-brew-tonic",
      category: "Coffee",
      name: "Cold Brew Tonic",
      description: "18-hour cold steeped single-origin coffee layered over crisp botanical tonic water, dehydrated Nagpur orange slice, and a sprig of fresh bruised rosemary.",
      price: "₹360",
      notes: "Sparkling · Bright Citrus Finish",
      image: heroCafeImg,
      badge: "Barista Favorite"
    },
    {
      id: "truffle-mushroom-toast",
      category: "Brunch",
      name: "Truffle Mushroom Toast",
      description: "Thick-cut 36-hour sourdough, pan-roasted wild shimeji and cremini mushrooms, 24-month aged parmesan, thyme butter, white truffle infusion, and chives.",
      price: "₹480",
      notes: "Artisanal Sourdough · Vegetarian",
      image: brunchToastImg,
      badge: "Most Loved"
    },
    {
      id: "pesto-eggs",
      category: "Brunch",
      name: "Pesto Folded Eggs",
      description: "Pasture-raised eggs gently folded with house-pounded Genovese basil pesto, toasted pine nuts, slow-roasted cherry tomatoes, and seeded sourdough.",
      price: "₹460",
      notes: "Farm Eggs · Made to Order",
      image: atmosphereSeatingImg,
      badge: "Morning Staple"
    },
    {
      id: "burnt-basque-cheesecake",
      category: "Desserts",
      name: "Burnt Basque Cheesecake",
      description: "Caramelized charred exterior with a rich, molten cream cheese center that melts on the palate. Finished with a delicate pinch of Maldon sea salt flakes.",
      price: "₹420",
      notes: "Baked In-House Daily · Molten Center",
      image: dessertCakeImg,
      badge: "Signature Bake"
    },
    {
      id: "chocolate-hazelnut-tart",
      category: "Desserts",
      name: "Chocolate Hazelnut Tart",
      description: "Crisp cocoa sablé tart shell filled with 70% single-origin dark chocolate ganache, slow-roasted Kerala hazelnuts, and flaked sea salt.",
      price: "₹390",
      notes: "Single-Origin Dark Cacao · Rich & Decadent",
      image: dessertCakeImg,
      badge: "Patisserie Cut"
    }
  ],
  fullMenu: {
    Coffee: [
      { name: "Mysa House Latte", desc: "Double ristretto, velvety steamed milk, house cardamom-vanilla spice.", price: "₹340", tags: ["Signature", "Hot / Iced"] },
      { name: "Cold Brew Tonic", desc: "18-hr slow-drip single origin, botanical tonic, citrus peel, rosemary.", price: "₹360", tags: ["Iced", "Sparkling"] },
      { name: "Espresso Cortado", desc: "Equal parts double shot espresso and velvety microfoam in a 4oz glass.", price: "₹260", tags: ["Classic"] },
      { name: "Filter Kaapi Reimagined", desc: "Chikmagalur peaberry pulled through V60, aerated jaggery milk foam.", price: "₹290", tags: ["Specialty"] },
      { name: "Pour Over (V60 / Aeropress)", desc: "Choice of Ratnagiri Estate or Attikan Estate light roast. Floral and delicate.", price: "₹320", tags: ["Single Origin"] },
      { name: "Sea Salt Dark Mocha", desc: "Callebaut 70% chocolate, double espresso, steamed milk, Maldon salt.", price: "₹380", tags: ["Indulgent"] }
    ],
    Brunch: [
      { name: "Truffle Mushroom Toast", desc: "Pan-roasted wild shimeji & cremini, truffle emulsion, aged parmesan, sourdough.", price: "₹480", tags: ["Vegetarian", "Bestseller"] },
      { name: "Pesto Folded Eggs", desc: "Soft scrambled farm eggs, fresh basil pesto, blistered cherry tomatoes, sourdough.", price: "₹460", tags: ["Farm Eggs"] },
      { name: "Whipped Ricotta & Fig Brioche", desc: "Toasted shokupan brioche, lemon ricotta, Mahabaleshwar figs, wild honey, pistachio.", price: "₹440", tags: ["Seasonal"] },
      { name: "Smoked Salmon & Caper Bagel", desc: "Wood-fired artisanal sesame bagel, dill cream cheese, smoked salmon, pickled shallots.", price: "₹590", tags: ["Signature"] },
      { name: "Avocado & Edamame Sourdough", desc: "Crushed Hass avocado, lime, togarashi edamame, micro coriander, seed crunch.", price: "₹490", tags: ["Plant-Based"] },
      { name: "Mysa Breakfast Hash", desc: "Crispy rosemary baby potatoes, spiced halloumi or chorizo, sunny egg, chimichurri.", price: "₹520", tags: ["Hearty"] }
    ],
    Desserts: [
      { name: "Burnt Basque Cheesecake", desc: "Caramelized charred crown, molten cream cheese center, flaked sea salt.", price: "₹420", tags: ["House Icon"] },
      { name: "Chocolate Hazelnut Tart", desc: "Crisp cocoa sablé, 70% dark ganache, roasted hazelnuts, fleur de sel.", price: "₹390", tags: ["Dark Cacao"] },
      { name: "Almond Frangipane Galette", desc: "Flaky rough puff pastry, almond cream, seasonal roasted stone fruit, thyme.", price: "₹360", tags: ["Seasonal"] },
      { name: "Tiramisu della Casa", desc: "Savoiardi dipped in Mysa espresso, mascarpone zabaglione, raw cacao dusting.", price: "₹440", tags: ["Classic"] },
      { name: "Cardamom Orange Financier", desc: "Brown butter tea cakes with candied orange zest and crushed green cardamom.", price: "₹240", tags: ["Tea Time"] }
    ],
    Drinks: [
      { name: "Iced Hibiscus Berry Shrub", desc: "House-steeped wild hibiscus, raspberry shrub, sparkling water, mint sprig.", price: "₹310", tags: ["Refreshing"] },
      { name: "Matcha Coconut Cloud", desc: "Ceremonial Uji matcha, chilled coconut milk, light vanilla cream float.", price: "₹380", tags: ["Ceremonial"] },
      { name: "Yuzu Sparkling Lemonade", desc: "Fresh pressed Japanese yuzu, Meyer lemon, sparkling soda, basil seeds.", price: "₹290", tags: ["Citrus"] },
      { name: "Golden Spiced Turmeric Latte", desc: "Single-origin Lakadong turmeric, crushed ginger, black pepper, oat milk.", price: "₹320", tags: ["Caffeine-Free"] }
    ]
  },
  gallery: [
    {
      image: heroCafeImg,
      title: "The Main Room",
      subtitle: "Limewash walls, natural teak & morning sun",
      aspect: "wide",
      colSpan: "col-span-12 md:col-span-8"
    },
    {
      image: specialtyCoffeeImg,
      title: "The Morning Cup",
      subtitle: "Specialty beans roasted for slow mornings",
      aspect: "square",
      colSpan: "col-span-12 md:col-span-4"
    },
    {
      image: atmosphereSeatingImg,
      title: "The Reading Nook",
      subtitle: "A quiet corner off Perry Cross Road",
      aspect: "portrait",
      colSpan: "col-span-12 md:col-span-4"
    },
    {
      image: brunchToastImg,
      title: "All-Day Kitchen",
      subtitle: "Wild mushroom sourdough & market produce",
      aspect: "landscape",
      colSpan: "col-span-12 md:col-span-4"
    },
    {
      image: dessertCakeImg,
      title: "The Pastry Case",
      subtitle: "Burnt Basque cheesecake & daily bakes",
      aspect: "square",
      colSpan: "col-span-12 md:col-span-4"
    }
  ]
};

export {
  heroCafeImg,
  specialtyCoffeeImg,
  brunchToastImg,
  dessertCakeImg,
  atmosphereSeatingImg,
};
