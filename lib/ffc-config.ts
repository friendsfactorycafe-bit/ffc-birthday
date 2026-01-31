// Friends Factory Cafe - Vadodara Configuration
// Main configuration file for the FFC website

export interface SetupPackage {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  cakeIncluded: boolean; // true for Setup 1-3, false for Setup 4-8 (extra cost)
  features: string[];
  perfectFor: string[];
  thumbnail: string;
  images: string[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: ServiceKeyword[];
}

export interface ServiceKeyword {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  // NEW: Unique content fields for each page
  uniqueContent?: {
    heroSubtitle: string;
    introduction: string;
    whyChooseUs: string[];
    features: string[];
    process: { step: string; description: string }[];
    faqs: { question: string; answer: string }[];
    testimonial: { name: string; text: string; rating: number };
    closingText: string;
  };
}

export interface AreaConfig {
  slug: string;
  name: string;
  // NEW: Unique content fields for each area page
  uniqueContent?: {
    heroSubtitle: string;
    introduction: string;
    aboutArea: string;
    whyChooseUs: string[];
    servicesDescription: string;
    locationAdvantage: string;
    faqs: { question: string; answer: string }[];
    testimonial: { name: string; location: string; text: string; rating: number };
    nearbyLandmarks: string[];
    closingText: string;
  };
}

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: "Friends Factory Cafe",
  tagline: "Vadodara's #1 Birthday Celebration Venue - Where Birthday Dreams Come True! 🎂",
  description: "Best birthday celebration venue in Vadodara. Premium rooftop birthday surprises, birthday party venues, balloon decorations, cake setups & unforgettable birthday experiences for couples and loved ones.",
  phone: "+91 7487888730",
  whatsapp: "917487888730",
  email: "hello@friendsfactorycafe.com",
  address: "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa, Sevasi - Canal Rd, Gotri, Vadodara, Gujarat 391101",
  city: "Vadodara",
  website: "https://friendsfactorycafe.com",
  colors: {
    primary: "#EC4899", // Pink (Rainbow theme)
    secondary: "#8B5CF6", // Purple
    accent: "#3B82F6", // Blue
    gradient: "from-pink-500 via-purple-500 to-blue-500",
    gradientHover: "from-pink-600 via-purple-600 to-blue-600",
    lightBg: "bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50",
    darkBg: "bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900",
    text: "text-pink-600"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/friendsfactorycafe/",
    facebook: "https://www.facebook.com/friendsfactorycafe/",
    youtube: ""
  }
};

// ==================== SETUP PACKAGES (8 Setups) ====================
export const packages: SetupPackage[] = [
  {
    id: "setup-1",
    slug: "forever-us-loveframe-rooftop",
    name: "Forever Us LoveFrame Rooftop",
    emoji: "",
    shortDescription: "Celebrate love in a space where every glance, laugh, and memory is framed against the stunning skyline",
    fullDescription: `Forever Us LoveFrame Rooftop - where every moment is a memory, every glance is a story, and love is beautifully framed under the stars.

Celebrate love in a space where every glance, laugh, and memory is framed against the stunning Vadodara skyline. Forever Us LoveFrame Rooftop is thoughtfully designed for couples and families seeking intimate, romantic, and unforgettable moments at the best rooftop cafe in Vadodara.

Experience Highlights:

- Private Rooftop Celebration (3 Hours)
An exclusive, cozy setting perfect for birthday surprises, anniversary celebrations, romantic proposals, candlelight dinners, and delightful surprises.

- Curated Treats & Welcome Drink + Complimentary Celebration Cake
Enjoy specially prepared refreshments and a FREE celebration cake, ideal for baby moments, pregnancy announcements, and heartfelt occasions.

- Elegant Rooftop Decor & Ambient Lighting
Romantic accents, twinkling lights, and a warm atmosphere create a perfect backdrop for pre-wedding shoots and timeless memories.

- Candle-Lit Seating & Skyline Views
Comfortable seating for meaningful conversations, shared smiles, and unforgettable moments under the stars.

- Delicious Snacks & Soft Music
Tasty treats and gentle melodies enhance the mood for love, laughter, and celebration.

Perfect For:
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Shoot Venue | Baby Moments (Pregnancy Announcement)

📍 Best romantic rooftop cafe in Vadodara for couples | Private celebration venue Vadodara | Couple-friendly cafe Gotri`,
    price: 6900,
    cakeIncluded: true,
    features: [
      "3 Hours Private Rooftop Celebration",
      "Welcome Drink & Complimentary Celebration Cake",
      "Elegant Photo Frame Setup with romantic decorations",
      "Candle-Lit Seating with premium decor & props",
      "Panoramic Skyline Views of Vadodara",
      "Ambient Lighting & Twinkling Fairy Lights",
      "Delicious Snacks & Soft Romantic Music"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Shoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/forever-us-loveframe-rooftop.png",
    images: [
      "/packages/forever-us-loveframe-rooftop/images/2.png",
      "/packages/forever-us-loveframe-rooftop/images/3.png",
      "/packages/forever-us-loveframe-rooftop/images/4.png",
      "/packages/forever-us-loveframe-rooftop/images/5.png",
      "/packages/forever-us-loveframe-rooftop/images/6.png",
      "/packages/forever-us-loveframe-rooftop/images/7.png",
      "/packages/forever-us-loveframe-rooftop/images/8.png",
      "/packages/forever-us-loveframe-rooftop/images/9.png",
      "/packages/forever-us-loveframe-rooftop/images/10.png",
      "/packages/forever-us-loveframe-rooftop/images/11.png",
      "/packages/forever-us-loveframe-rooftop/images/12.png",
      "/packages/forever-us-loveframe-rooftop/images/13.png",
      "/packages/forever-us-loveframe-rooftop/images/14.png",
      "/packages/forever-us-loveframe-rooftop/images/15.png",
      "/packages/forever-us-loveframe-rooftop/images/16.png",
      "/packages/forever-us-loveframe-rooftop/images/17.png",
      "/packages/forever-us-loveframe-rooftop/images/18.png",
      "/packages/forever-us-loveframe-rooftop/images/19.png"
    ]
  },
  {
    id: "setup-2",
    slug: "eternal-love-rooftop-celebration",
    name: "Eternal Love Rooftop Celebration",
    emoji: "💖✨🌙",
    shortDescription: "Celebrate moments that matter in a rooftop setting where emotions shine as brightly as the city lights below 🌆💫",
    fullDescription: `💖✨🌙 Eternal Love Rooftop Celebration — where every emotion feels deeper, every moment feels special, and love is celebrated under the open sky

Celebrate moments that matter in a rooftop setting where emotions shine as brightly as the city lights below 🌆💫. Eternal Love Rooftop Celebration is a beautifully curated experience for those who want to turn special occasions into lifelong memories, surrounded by romance, elegance, and a magical open-sky ambiance at the best couple-friendly cafe in Vadodara.

✨ Experience Highlights

• Exclusive Private Rooftop Time (3 Hours) ✨
A serene and intimate rooftop escape, ideal for heartfelt birthdays, anniversary surprises, romantic proposals, and candlelight dinners 💕🕯️

• Thoughtfully Curated Refreshments 🥂 + Complimentary Celebration Cake 🍰
Enjoy a warm welcome drink, delightful treats, and a FREE celebration cake—perfect for surprises, baby announcements, and joyful milestones 🎉

• Stylish Canopy & Romantic Décor 🎈💡
Graceful curtains, glowing lights, and elegant accents create a stunning setting for pre-wedding shoots, proposals, and picture-perfect moments 📸

• Soft Candle Glow Seating 🕯️🌅
Comfortable seating with premium décor and panoramic skyline views, designed for intimate conversations and meaningful celebrations 💑

• Tasty Bites & Gentle Music 🍽️🎶
A soothing soundtrack and delicious snacks to elevate the mood and complete the experience ✨

🎉 Ideal For
Birthday Celebration Vadodara | Anniversary Surprise | Romantic Proposal Venue | Candlelight Dinner | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best rooftop celebration venue Vadodara | Private romantic dinner Vadodara | Couple cafe near Gotri`,
    price: 6500,
    cakeIncluded: true,
    features: [
      "3 Hours Exclusive Private Rooftop Celebration ✨",
      "Welcome Drink & Complimentary Celebration Cake 🍰",
      "Stylish Canopy Setup with elegant curtains",
      "Heart-shaped Balloons & Rose Petals 🎈",
      "Soft Candle Glow Seating with premium décor",
      "Panoramic City Views & Starlit Ambiance 🌆",
      "Tasty Bites & Gentle Romantic Music 🎶"
    ],
    perfectFor: ["Birthday Celebration", "Anniversary Surprise", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/eternal-love-rooftop-celebration.png",
    images: [
      "/packages/eternal-love-rooftop-celebration/images/21.png",
      "/packages/eternal-love-rooftop-celebration/images/22.png",
      "/packages/eternal-love-rooftop-celebration/images/23.png",
      "/packages/eternal-love-rooftop-celebration/images/24.png",
      "/packages/eternal-love-rooftop-celebration/images/25.png",
      "/packages/eternal-love-rooftop-celebration/images/26.png",
      "/packages/eternal-love-rooftop-celebration/images/27.png",
      "/packages/eternal-love-rooftop-celebration/images/28.png",
      "/packages/eternal-love-rooftop-celebration/images/29.png",
      "/packages/eternal-love-rooftop-celebration/images/30.png",
      "/packages/eternal-love-rooftop-celebration/images/31.png",
      "/packages/eternal-love-rooftop-celebration/images/32.png",
      "/packages/eternal-love-rooftop-celebration/images/33.png",
      "/packages/eternal-love-rooftop-celebration/images/34.png",
      "/packages/eternal-love-rooftop-celebration/images/35.png",
      "/packages/eternal-love-rooftop-celebration/images/36.png",
      "/packages/eternal-love-rooftop-celebration/images/37.png",
      "/packages/eternal-love-rooftop-celebration/images/38.png",
      "/packages/eternal-love-rooftop-celebration/images/39.png",
      "/packages/eternal-love-rooftop-celebration/images/40.png"
    ]
  },
  {
    id: "setup-3",
    slug: "golden-promise-glass-house",
    name: "Golden Promise Glass House",
    emoji: "✨💛🏡",
    shortDescription: "Step into a radiant space where every moment glows with love, warmth, and elegance ✨",
    fullDescription: `✨💛🏡 Golden Promise Glass House — where love shines brighter, moments feel magical, and every celebration turns golden

Step into a radiant space where every moment glows with love, warmth, and elegance ✨. Golden Promise Glass House is designed for couples and families to celebrate milestones in a luxurious, intimate, and unforgettable setting at the best glass house cafe in Vadodara.

✨ Experience Highlights

• Exclusive Glass House Celebration (3 Hours) ✨
An elegant and private space, perfect for birthday surprises, anniversary celebrations, romantic proposals, candlelight dinners, and special surprises 💖🕯️

• Curated Treats & Welcome Drink 🥂 + Complimentary Celebration Cake 🍰
Hand-selected refreshments and a FREE celebration cake, ideal for baby moments, pregnancy announcements, and meaningful celebrations 🎉

• Luxurious Décor with Soft Golden Glow 💡🌿
Warm lighting, stylish accents, and thoughtful décor create the perfect backdrop for pre-wedding shoots and timeless photographs 📸

• Candle-Lit Seating & Panoramic Views 🕯️💑
Comfortable seating designed for deep conversations, cherished moments, and intimate celebrations 🌅

• Delicious Snacks & Soothing Music 🍽️🎶
A delightful culinary experience paired with gentle music to set the perfect mood for love and joy ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot Venue | Baby Moments (Pregnancy Announcement)

📍 Best glass house cafe Vadodara | Private celebration venue | Romantic dinner place Gotri`,
    price: 6000,
    cakeIncluded: true,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Complimentary Celebration Cake 🍰",
      "Elegant Golden Fairy Lights & Décor 💡",
      "Flower Decorations & Premium Props 🌸",
      "Candle-Lit Seating with Panoramic Views",
      "Climate Controlled Environment",
      "Delicious Snacks & Soothing Music 🎶"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/golden-promise-glass-house.png",
    images: [
      "/packages/golden-promise-glass-house/images/52.png",
      "/packages/golden-promise-glass-house/images/53.png",
      "/packages/golden-promise-glass-house/images/54.png",
      "/packages/golden-promise-glass-house/images/55.png",
      "/packages/golden-promise-glass-house/images/56.png",
      "/packages/golden-promise-glass-house/images/57.png",
      "/packages/golden-promise-glass-house/images/58.png",
      "/packages/golden-promise-glass-house/images/59.png",
      "/packages/golden-promise-glass-house/images/60.png",
      "/packages/golden-promise-glass-house/images/61.png",
      "/packages/golden-promise-glass-house/images/62.png",
      "/packages/golden-promise-glass-house/images/63.png",
      "/packages/golden-promise-glass-house/images/64.png",
      "/packages/golden-promise-glass-house/images/65.png",
      "/packages/golden-promise-glass-house/images/66.png",
      "/packages/golden-promise-glass-house/images/67.png",
      "/packages/golden-promise-glass-house/images/68.png",
      "/packages/golden-promise-glass-house/images/69.png",
      "/packages/golden-promise-glass-house/images/70.png",
      "/packages/golden-promise-glass-house/images/71.png"
    ]
  },
  {
    id: "setup-4",
    slug: "moonlit-romance-experience",
    name: "Moonlit Romance Experience",
    emoji: "🌙💞",
    shortDescription: "Step into a serene night where love unfolds beneath a glowing moon and shimmering city lights ✨🌌",
    fullDescription: `🌙💞 Moonlit Romance Experience — where every glance feels warmer, every moment feels closer, and love glows softly under the night sky ✨

Step into a serene night where love unfolds beneath a glowing moon and shimmering city lights ✨🌌. Moonlit Romance Experience is thoughtfully designed for couples seeking a calm, intimate, and deeply romantic celebration away from the noise of the world at the best romantic cafe in Vadodara.

✨ Experience Highlights

• Private Rooftop Ambience (3 Hours) 🌙
A peaceful, candle-kissed setting perfect for romantic proposals, anniversary dinners, candlelight dinners, and romantic surprises 💕🕯️

• Elegant Welcome Treats 🥂🍰
Delight in hand-picked refreshments and curated treats, ideal for special moments and heartfelt announcements 🎉
💡 Celebration Cake available at extra cost (₹500)

• Dreamy Moonlight Décor ✨💡
Soft drapes, glowing lights, and subtle romantic details create a stunning backdrop for pre-wedding shoots and timeless photos 📸

• Cozy Candle-Lit Seating 🕯️🌆
Comfortable seating with skyline views, crafted for quiet conversations, deep connections, and shared smiles 💑

• Gentle Music & Tasty Bites 🎶🍽️
A soothing playlist paired with delicious snacks to set the perfect mood for the evening 💫

🎉 Perfect For
Romantic Proposal Vadodara | Anniversary Dinner | Candlelight Dinner for Couples | Surprise Date Night | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best moonlit rooftop cafe Vadodara | Romantic night celebration venue | Couple-friendly cafe Gotri`,
    price: 5100,
    cakeIncluded: false,
    features: [
      "3 Hours Private Moonlit Rooftop Celebration 🌙",
      "Welcome Drink & Curated Treats 🥂",
      "Dreamy Moon-themed Décor with silver accents ✨",
      "Candle Pathway & Romantic Seating 🕯️",
      "Panoramic Skyline Views & Starlit Ambiance 🌆",
      "Gentle Music & Delicious Snacks 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Dinner", "Candlelight Dinner", "Surprise Date Night", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/moonlit-romance-experience.png",
    images: [
      "/packages/moonlit-romance-experience/images/24.png",
      "/packages/moonlit-romance-experience/images/25.png",
      "/packages/moonlit-romance-experience/images/26.png",
      "/packages/moonlit-romance-experience/images/27.png",
      "/packages/moonlit-romance-experience/images/28.png",
      "/packages/moonlit-romance-experience/images/29.png",
      "/packages/moonlit-romance-experience/images/30.png",
      "/packages/moonlit-romance-experience/images/31.png",
      "/packages/moonlit-romance-experience/images/32.png",
      "/packages/moonlit-romance-experience/images/33.png",
      "/packages/moonlit-romance-experience/images/34.png",
      "/packages/moonlit-romance-experience/images/35.png",
      "/packages/moonlit-romance-experience/images/36.png"
    ]
  },
  {
    id: "setup-5",
    slug: "the-promise-creative-area",
    name: "The Promise Creative Area",
    emoji: "💍",
    shortDescription: "Ignite joy under the stars at The Promise Creative Area — a magical rooftop space designed for unforgettable celebrations 🎉🌌",
    fullDescription: `💍 The Promise Creative Area — where every occasion turns into a forever memory under the stars ✨🌙

Ignite joy under the stars at The Promise Creative Area — a magical rooftop space designed for Birthdays, Anniversaries, Proposals, Candlelight Dinners, Surprises, Pre-Wedding Shoots, and Baby Moments (Pregnancy Announcements) at the best celebration cafe in Vadodara.

Celebrate love and life with breathtaking city views, warm candlelight, and unforgettable décor 🎉🌌

✨ What's Included

• 3 Mesmerizing Hours of Private Rooftop Celebration ✨
Perfect for Birthday Surprises, Anniversary Celebrations, Romantic Proposals & Candlelight Dinners 💖🕯️

• Curated Treats with Welcome Drink 🥂
Ideal for special occasions and heartfelt celebrations
💡 Celebration Cake available at extra cost (₹500) 🍰

• Festive Tent Setup with elegant curtains, balloons 🎈 & twinkling lights 💡
A dreamy backdrop for Pre-Wedding Shoots, Proposals & Romantic Moments 📸

• Candle-Lit Seating with props, premium décor & panoramic skyline views 🌅
Crafted for Anniversaries, Candlelight Dinners & Intimate Surprises 💑

• Delicious Snacks 🍽️ & Soft, Joyful Music 🎶
Creating the perfect mood for Every Celebration & Love Story ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best rooftop celebration venue Vadodara | Private party place Gotri | Couple-friendly cafe`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Rooftop Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Festive Tent Setup with curtains & balloons 🎈",
      "Twinkling Lights & Romantic Décor 💡",
      "Candle-Lit Seating with premium props 🕯️",
      "Panoramic Skyline Views of Vadodara 🌅",
      "Delicious Snacks & Joyful Music 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/the-promise-creative-area.png",
    images: [
      "/packages/the-promise-creative-area/images/2.png",
      "/packages/the-promise-creative-area/images/3.png",
      "/packages/the-promise-creative-area/images/4.png",
      "/packages/the-promise-creative-area/images/5.png",
      "/packages/the-promise-creative-area/images/6.png",
      "/packages/the-promise-creative-area/images/7.png",
      "/packages/the-promise-creative-area/images/8.png",
      "/packages/the-promise-creative-area/images/9.png",
      "/packages/the-promise-creative-area/images/10.png",
      "/packages/the-promise-creative-area/images/11.png",
      "/packages/the-promise-creative-area/images/12.png",
      "/packages/the-promise-creative-area/images/13.png",
      "/packages/the-promise-creative-area/images/14.png",
      "/packages/the-promise-creative-area/images/15.png",
      "/packages/the-promise-creative-area/images/16.png",
      "/packages/the-promise-creative-area/images/17.png",
      "/packages/the-promise-creative-area/images/18.png",
      "/packages/the-promise-creative-area/images/19.png",
      "/packages/the-promise-creative-area/images/20.png",
      "/packages/the-promise-creative-area/images/21.png",
      "/packages/the-promise-creative-area/images/22.png"
    ]
  },
  {
    id: "setup-6",
    slug: "timeless-bond-glass-house",
    name: "Timeless Bond Glass House",
    emoji: "♾️💞🏡",
    shortDescription: "Step into an elegant glass house where love feels calm, pure, and everlasting ✨",
    fullDescription: `♾️💞🏡 Timeless Bond Glass House — where love stands still, moments feel eternal, and every celebration becomes a beautiful memory

Step into an elegant glass house where love feels calm, pure, and everlasting ✨. Timeless Bond Glass House is designed for couples and families who want to celebrate meaningful milestones in a serene, light-filled space that beautifully frames every emotion at the best glass house cafe in Vadodara.

✨ Experience Highlights

• Private Glass House Celebration (3 Hours) ✨
An intimate and peaceful setting, ideal for anniversary surprises, romantic proposals, birthday celebrations, candlelight dinners, and heartfelt surprises 💖🕯️

• Warm Welcome with Curated Treats 🥂🍰
Thoughtfully arranged refreshments, perfect for baby moments, pregnancy announcements, and special occasions 🎉
💡 Celebration Cake available at extra cost (₹500)

• Elegant Glass Décor & Soft Lighting 💡🌿
Minimal yet romantic décor with glowing lights creates a stunning atmosphere for pre-wedding shoots and timeless photographs 📸

• Comfortable Candle-Lit Seating 🕯️💑
Cozy seating designed for deep conversations, shared smiles, and unforgettable memories 🌸

• Delicious Bites & Soothing Music 🍽️🎶
Gentle melodies and tasty snacks complete the experience with warmth and charm ✨

🎉 Perfect For
Birthday Celebration Vadodara | Anniversary Surprise | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best glass house celebration venue Vadodara | Private romantic cafe Gotri | Couple-friendly venue`,
    price: 5700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Minimalist Elegant White Theme Décor",
      "Flower Arrangements & Candle Setup 🌸",
      "Soft Lighting & Instagram-worthy Spots 📸",
      "Delicious Snacks & Soothing Music 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Birthday Celebration", "Anniversary Surprise", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/timeless-bond-glass-house.png",
    images: [
      "/packages/timeless-bond-glass-house/images/112.png",
      "/packages/timeless-bond-glass-house/images/113.png",
      "/packages/timeless-bond-glass-house/images/114.png",
      "/packages/timeless-bond-glass-house/images/115.png",
      "/packages/timeless-bond-glass-house/images/116.png",
      "/packages/timeless-bond-glass-house/images/117.png",
      "/packages/timeless-bond-glass-house/images/118.png",
      "/packages/timeless-bond-glass-house/images/119.png",
      "/packages/timeless-bond-glass-house/images/120.png",
      "/packages/timeless-bond-glass-house/images/121.png",
      "/packages/timeless-bond-glass-house/images/122.png",
      "/packages/timeless-bond-glass-house/images/123.png",
      "/packages/timeless-bond-glass-house/images/124.png",
      "/packages/timeless-bond-glass-house/images/125.png",
      "/packages/timeless-bond-glass-house/images/126.png",
      "/packages/timeless-bond-glass-house/images/127.png",
      "/packages/timeless-bond-glass-house/images/128.png",
      "/packages/timeless-bond-glass-house/images/129.png"
    ]
  },
  {
    id: "setup-7",
    slug: "sweet-together-glass-house",
    name: "Sweet Together Glass House",
    emoji: "🍯💖",
    shortDescription: "Step into a charming space where love feels cozy, laughter is shared, and every moment is sweeter than the last ✨",
    fullDescription: `🍯💖 Sweet Together Glass House — where love is warm, moments are sweeter, and memories last forever 🏡

Step into a charming space where love feels cozy, laughter is shared, and every moment is sweeter than the last ✨. Sweet Together Glass House is designed for couples and families to celebrate life's precious memories in a warm, intimate, and beautifully decorated setting at the best couple cafe in Vadodara.

✨ Experience Highlights

• Private Glass House Celebration (3 Hours) ✨
A delightful, intimate space perfect for birthday surprises, anniversary dinners, romantic proposals, candlelight dinners, and sweet surprises 💕🕯️

• Curated Treats & Welcome Drink 🥂🍰
Enjoy handpicked refreshments, ideal for baby moments, pregnancy announcements, and special celebrations 🎉
💡 Celebration Cake available at extra cost (₹500)

• Romantic & Cozy Décor 💡🌸
Soft lighting, elegant décor, and thoughtful details create a perfect backdrop for pre-wedding shoots and picture-perfect moments 📸

• Candle-Lit Seating & Cozy Corners 🕯️💑
Comfortable seating designed for shared smiles, heart-to-heart conversations, and memorable experiences 🌿

• Delicious Snacks & Gentle Music 🍽️🎶
Tasty bites paired with a soft playlist to set the mood for love and laughter ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Dinner | Romantic Proposal | Candlelight Dinner for Couples | Surprise Date | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best cozy glass house cafe Vadodara | Private celebration venue Gotri | Romantic couple cafe`,
    price: 5500,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Sweet & Cozy Theme with warm décor 🌸",
      "Balloon Arrangements & Romantic Props 🎈",
      "Candle-Lit Seating & Cozy Corners 🕯️",
      "Delicious Snacks & Gentle Music 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Dinner", "Romantic Proposal", "Candlelight Dinner", "Surprise Date", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/sweet-together-glass-house.png",
    images: [
      "/packages/sweet-together-glass-house/images/75.png",
      "/packages/sweet-together-glass-house/images/76.png",
      "/packages/sweet-together-glass-house/images/77.png",
      "/packages/sweet-together-glass-house/images/78.png",
      "/packages/sweet-together-glass-house/images/79.png",
      "/packages/sweet-together-glass-house/images/80.png",
      "/packages/sweet-together-glass-house/images/81.png",
      "/packages/sweet-together-glass-house/images/82.png",
      "/packages/sweet-together-glass-house/images/83.png",
      "/packages/sweet-together-glass-house/images/84.png",
      "/packages/sweet-together-glass-house/images/85.png",
      "/packages/sweet-together-glass-house/images/86.png",
      "/packages/sweet-together-glass-house/images/87.png",
      "/packages/sweet-together-glass-house/images/88.png",
      "/packages/sweet-together-glass-house/images/89.png",
      "/packages/sweet-together-glass-house/images/90.png",
      "/packages/sweet-together-glass-house/images/91.png",
      "/packages/sweet-together-glass-house/images/92.png",
      "/packages/sweet-together-glass-house/images/93.png"
    ]
  },
  {
    id: "setup-8",
    slug: "pure-love-glass-house",
    name: "Pure Love Glass House",
    emoji: "🤍💍🏡",
    shortDescription: "Welcome to a serene glass house where emotions are honest, moments are gentle, and love is beautifully pure ✨",
    fullDescription: `🤍💍🏡 Pure Love Glass House — where simplicity meets romance, and every moment is wrapped in love ✨

Welcome to a serene glass house where emotions are honest, moments are gentle, and love is beautifully pure ✨. Pure Love Glass House is a thoughtfully designed space for celebrating heartfelt milestones in an elegant, calm, and romantic atmosphere at the best romantic cafe in Vadodara.

✨ Experience Highlights

• Private Glass House Celebration (3 Hours) ✨
A peaceful and intimate setting, perfect for anniversary celebrations, romantic proposals, birthday surprises, candlelight dinners, and meaningful surprises 🤍🕯️

• Warm Welcome with Curated Treats 🥂🍰
Delightful refreshments, ideal for baby moments, pregnancy announcements, and joyful occasions 🎉
💡 Celebration Cake available at extra cost (₹500)

• Minimal Romantic Décor with Soft Lights 💡🌿
A clean, elegant setup that enhances emotions and creates a stunning backdrop for pre-wedding shoots and timeless photos 📸

• Cozy Candle-Lit Seating 🕯️💑
Comfortable seating designed for quiet conversations, deep connections, and unforgettable moments 💞

• Tasty Bites & Gentle Music 🍽️🎶
Soft music and delicious snacks to complete a calm, love-filled experience ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best pure romantic glass house Vadodara | Private celebration venue Gotri | Couple-friendly cafe`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Pure White Theme with elegant simplicity 🤍",
      "Rose Petals & Candle Pathway 🌹",
      "Minimal Romantic Décor & Soft Lights 💡",
      "Delicious Snacks & Gentle Music 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/pure-love-glass-house.png",
    images: [
      "/packages/pure-love-glass-house/images/95.png",
      "/packages/pure-love-glass-house/images/96.png",
      "/packages/pure-love-glass-house/images/97.png",
      "/packages/pure-love-glass-house/images/98.png",
      "/packages/pure-love-glass-house/images/99.png",
      "/packages/pure-love-glass-house/images/100.png",
      "/packages/pure-love-glass-house/images/101.png",
      "/packages/pure-love-glass-house/images/102.png",
      "/packages/pure-love-glass-house/images/103.png",
      "/packages/pure-love-glass-house/images/104.png",
      "/packages/pure-love-glass-house/images/105.png",
      "/packages/pure-love-glass-house/images/106.png",
      "/packages/pure-love-glass-house/images/107.png",
      "/packages/pure-love-glass-house/images/108.png",
      "/packages/pure-love-glass-house/images/109.png",
      "/packages/pure-love-glass-house/images/110.png"
    ]
  }
];

// ==================== MENU ITEMS ====================
export const menuItems = {
  starters: [
    { name: "Welcome Drink", description: "A refreshing welcome to begin your romantic experience", emoji: "🥤" },
    { name: "Cheese Fondue", description: "A rich, velvety cheese fondue served with cheese balls, wedges, and nachos", emoji: "🧀" },
    { name: "Paneer Tortilla", description: "Soft tortilla filled with spicy paneer and the chef's special seasoning", emoji: "🌯" },
    { name: "Peri Peri Fries with Mac & Cheese", description: "Creamy mac & cheese paired with peri-peri fries", emoji: "🍟" },
    { name: "Tangy Loaf", description: "Warm loaf served with cheesy garlic sauce", emoji: "🍞" }
  ],
  desserts: [
    { name: "Dessert with Chocolate Bite", description: "A sweet ending with rich chocolate indulgence", emoji: "🍫" }
  ],
  addOns: [
    { name: "Cake", description: "Complimentary celebration cake", price: "Free", emoji: "🍰" },
    { name: "Champagne", description: "Non-Alcoholic Fruit Flavour", price: "₹500", emoji: "🥂" }
  ]
};

// ==================== SERVICE CATEGORIES ====================
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "birthday-surprise",
    name: "Birthday Surprise",
    emoji: "🎂",
    description: "Create magical birthday celebrations with beautiful decorations, cakes, and intimate private setups.",
    metaTitle: "Birthday Surprise in Vadodara | Friends Factory Cafe",
    metaDescription: "Plan the perfect birthday surprise in Vadodara at Friends Factory Cafe. Romantic decorations, celebration cake, and intimate rooftop celebration for couples.",
    keywords: [
      { slug: "birthday-surprise-for-boyfriend-vadodara", title: "Birthday Surprise for Boyfriend", h1: "Best Birthday Surprise for Boyfriend in Vadodara", metaTitle: "Birthday Surprise for Boyfriend Vadodara | Friends Factory Cafe", metaDescription: "Plan the perfect birthday surprise for your boyfriend in Vadodara. Romantic decorations, cake, and intimate celebration at Friends Factory Cafe." },
      { slug: "birthday-surprise-for-girlfriend-vadodara", title: "Birthday Surprise for Girlfriend", h1: "Romantic Birthday Surprise for Girlfriend in Vadodara", metaTitle: "Birthday Surprise for Girlfriend Vadodara | Make Her Day Special", metaDescription: "Create unforgettable birthday memories for your girlfriend in Vadodara with balloon decorations, cake, flowers and romantic setup at Friends Factory Cafe." },
      { slug: "birthday-surprise-for-husband-vadodara", title: "Birthday Surprise for Husband", h1: "Special Birthday Surprise for Husband in Vadodara", metaTitle: "Birthday Surprise for Husband Vadodara | Romantic Celebration", metaDescription: "Surprise your husband with a romantic birthday celebration in Vadodara. Private rooftop setup, decorations, and memorable moments at Friends Factory Cafe." },
      { slug: "birthday-surprise-for-wife-vadodara", title: "Birthday Surprise for Wife", h1: "Romantic Birthday Surprise for Wife in Vadodara", metaTitle: "Birthday Surprise for Wife Vadodara | Make Her Feel Special", metaDescription: "Plan a dreamy birthday surprise for your wife in Vadodara with elegant decorations, flowers, and romantic ambiance at Friends Factory Cafe." },
      { slug: "romantic-birthday-surprise-vadodara", title: "Romantic Birthday Surprise", h1: "Romantic Birthday Surprise in Vadodara", metaTitle: "Romantic Birthday Surprise Vadodara | Couple Celebration", metaDescription: "Book a romantic birthday surprise in Vadodara with candlelight setup, decorations, and intimate celebration for couples at Friends Factory Cafe." },
      { slug: "birthday-celebration-for-couples-vadodara", title: "Birthday Celebration for Couples", h1: "Birthday Celebration for Couples in Vadodara", metaTitle: "Couple Birthday Celebration Vadodara | Private Venue", metaDescription: "Celebrate your special day as a couple in Vadodara with exclusive birthday packages and romantic rooftop setups at Friends Factory Cafe." },
      { slug: "birthday-room-decoration-vadodara", title: "Birthday Room Decoration", h1: "Birthday Room Decoration in Vadodara", metaTitle: "Birthday Room Decoration Vadodara | Balloon & Flower Setup", metaDescription: "Beautiful birthday room decoration in Vadodara with balloons, flowers, and romantic themes for couples at Friends Factory Cafe." },
      { slug: "birthday-balloon-decoration-vadodara", title: "Birthday Balloon Decoration", h1: "Birthday Balloon Decoration in Vadodara", metaTitle: "Birthday Balloon Decoration Vadodara | Creative Setups", metaDescription: "Stunning birthday balloon decoration in Vadodara for romantic celebrations. Heart shapes, arches, and more at Friends Factory Cafe." },
      { slug: "surprise-birthday-party-vadodara", title: "Surprise Birthday Party", h1: "Surprise Birthday Party in Vadodara", metaTitle: "Surprise Birthday Party Vadodara | Private Celebration", metaDescription: "Plan a surprise birthday party in Vadodara with romantic setup and private ambiance at Friends Factory Cafe rooftop." },
      { slug: "midnight-birthday-surprise-vadodara", title: "Midnight Birthday Surprise", h1: "Midnight Birthday Surprise in Vadodara", metaTitle: "Midnight Birthday Surprise Vadodara | 12 AM Celebration", metaDescription: "Book midnight birthday surprise in Vadodara to celebrate at 12 AM with cake, decorations, and romantic moments at Friends Factory Cafe." },
      { slug: "birthday-party-places-vadodara", title: "Birthday Party Places", h1: "Best Birthday Party Places in Vadodara", metaTitle: "Birthday Party Places Vadodara | Romantic Venues", metaDescription: "Find the best birthday party places in Vadodara for couples. Friends Factory Cafe offers private rooftop celebrations." },
      { slug: "birthday-party-venues-vadodara", title: "Birthday Party Venues", h1: "Birthday Party Venues for Couples in Vadodara", metaTitle: "Birthday Party Venues Vadodara | Couple-Friendly", metaDescription: "Discover couple-friendly birthday party venues in Vadodara. Book Friends Factory Cafe for intimate celebrations." },
      { slug: "best-birthday-surprise-vadodara", title: "Best Birthday Surprise", h1: "Best Birthday Surprise Ideas in Vadodara", metaTitle: "Best Birthday Surprise Vadodara | Top Rated", metaDescription: "Looking for the best birthday surprise in Vadodara? Friends Factory Cafe offers premium decorations and romantic setups." },
      { slug: "birthday-surprise-planners-vadodara", title: "Birthday Surprise Planners", h1: "Birthday Surprise Planners in Vadodara", metaTitle: "Birthday Surprise Planners Vadodara | Professional Setup", metaDescription: "Expert birthday surprise planners in Vadodara. We handle decorations, cake, and everything at Friends Factory Cafe." },
      { slug: "unique-birthday-celebration-vadodara", title: "Unique Birthday Celebration", h1: "Unique Birthday Celebration Ideas in Vadodara", metaTitle: "Unique Birthday Celebration Vadodara | Creative Ideas", metaDescription: "Plan a unique birthday celebration in Vadodara with creative themes and personalized romantic setups at Friends Factory Cafe." },
      { slug: "18th-birthday-surprise-vadodara", title: "18th Birthday Surprise", h1: "18th Birthday Surprise Celebration in Vadodara", metaTitle: "18th Birthday Surprise Vadodara | Teen Birthday Party", metaDescription: "Celebrate your 18th birthday in style in Vadodara with a stunning rooftop party, decorations, and unforgettable moments at Friends Factory Cafe." },
      { slug: "21st-birthday-celebration-vadodara", title: "21st Birthday Celebration", h1: "21st Birthday Celebration in Vadodara", metaTitle: "21st Birthday Celebration Vadodara | Milestone Birthday", metaDescription: "Make your 21st birthday unforgettable in Vadodara with romantic decorations, cake, and a private celebration at Friends Factory Cafe." },
      { slug: "25th-birthday-surprise-vadodara", title: "25th Birthday Surprise", h1: "25th Birthday Surprise in Vadodara", metaTitle: "25th Birthday Surprise Vadodara | Quarter Century Celebration", metaDescription: "Celebrate your 25th birthday milestone in Vadodara with a beautiful rooftop surprise, decorations, and memories at Friends Factory Cafe." },
      { slug: "30th-birthday-celebration-vadodara", title: "30th Birthday Celebration", h1: "30th Birthday Celebration in Vadodara", metaTitle: "30th Birthday Celebration Vadodara | Dirty Thirty Party", metaDescription: "Plan an amazing 30th birthday celebration in Vadodara with elegant decorations and romantic ambiance at Friends Factory Cafe." },
      { slug: "40th-birthday-surprise-vadodara", title: "40th Birthday Surprise", h1: "40th Birthday Surprise in Vadodara", metaTitle: "40th Birthday Surprise Vadodara | Fabulous Forty", metaDescription: "Celebrate turning 40 in Vadodara with a stunning surprise party, decorations, and intimate celebration at Friends Factory Cafe." },
      { slug: "50th-birthday-celebration-vadodara", title: "50th Birthday Celebration", h1: "50th Birthday Celebration in Vadodara", metaTitle: "50th Birthday Celebration Vadodara | Golden Birthday", metaDescription: "Plan a memorable 50th birthday celebration in Vadodara with elegant decorations and a beautiful rooftop venue at Friends Factory Cafe." },
      { slug: "birthday-dinner-date-vadodara", title: "Birthday Dinner Date", h1: "Birthday Dinner Date in Vadodara", metaTitle: "Birthday Dinner Date Vadodara | Romantic Dining", metaDescription: "Enjoy a romantic birthday dinner date in Vadodara with your partner. Candlelight setup, delicious food, and magical atmosphere at Friends Factory Cafe." },
      { slug: "birthday-candlelight-dinner-vadodara", title: "Birthday Candlelight Dinner", h1: "Birthday Candlelight Dinner in Vadodara", metaTitle: "Birthday Candlelight Dinner Vadodara | Romantic Setup", metaDescription: "Book a birthday candlelight dinner in Vadodara for an intimate celebration with romantic ambiance and stunning views at Friends Factory Cafe." },
      { slug: "birthday-photoshoot-vadodara", title: "Birthday Photoshoot", h1: "Birthday Photoshoot in Vadodara", metaTitle: "Birthday Photoshoot Vadodara | Photo-worthy Setup", metaDescription: "Capture stunning birthday photos in Vadodara with beautiful decorations and a perfect backdrop at Friends Factory Cafe rooftop." },
      { slug: "birthday-decorators-vadodara", title: "Birthday Decorators", h1: "Best Birthday Decorators in Vadodara", metaTitle: "Birthday Decorators Vadodara | Professional Decoration", metaDescription: "Looking for birthday decorators in Vadodara? Friends Factory Cafe offers professional balloon and flower decorations for your celebration." },
      { slug: "birthday-organisers-vadodara", title: "Birthday Organisers", h1: "Birthday Organisers in Vadodara", metaTitle: "Birthday Organisers Vadodara | Party Planning", metaDescription: "Professional birthday organisers in Vadodara. We plan everything from decorations to cake for your perfect celebration at Friends Factory Cafe." },
      { slug: "birthday-event-planners-vadodara", title: "Birthday Event Planners", h1: "Birthday Event Planners in Vadodara", metaTitle: "Birthday Event Planners Vadodara | Complete Planning", metaDescription: "Expert birthday event planners in Vadodara offering complete party planning services with decorations, cake, and venue at Friends Factory Cafe." },
      { slug: "birthday-surprise-near-me-vadodara", title: "Birthday Surprise Near Me", h1: "Birthday Surprise Near Me in Vadodara", metaTitle: "Birthday Surprise Near Me Vadodara | Local Venue", metaDescription: "Looking for birthday surprise venues near you in Vadodara? Friends Factory Cafe offers the best rooftop birthday celebrations in Gotri." },
      { slug: "private-birthday-celebration-vadodara", title: "Private Birthday Celebration", h1: "Private Birthday Celebration in Vadodara", metaTitle: "Private Birthday Celebration Vadodara | Exclusive Venue", metaDescription: "Book a private birthday celebration in Vadodara with an exclusive rooftop venue, decorations, and intimate setting at Friends Factory Cafe." },
      { slug: "rooftop-birthday-party-vadodara", title: "Rooftop Birthday Party", h1: "Rooftop Birthday Party in Vadodara", metaTitle: "Rooftop Birthday Party Vadodara | Sky High Celebration", metaDescription: "Host an amazing rooftop birthday party in Vadodara with stunning city views, decorations, and memorable moments at Friends Factory Cafe." },
      { slug: "budget-birthday-surprise-vadodara", title: "Budget Birthday Surprise", h1: "Budget Birthday Surprise in Vadodara", metaTitle: "Budget Birthday Surprise Vadodara | Affordable Celebration", metaDescription: "Plan an affordable budget birthday surprise in Vadodara without compromising on quality. Beautiful decorations and cake at Friends Factory Cafe." },
      { slug: "premium-birthday-celebration-vadodara", title: "Premium Birthday Celebration", h1: "Premium Birthday Celebration in Vadodara", metaTitle: "Premium Birthday Celebration Vadodara | Luxury Experience", metaDescription: "Experience a premium birthday celebration in Vadodara with luxury decorations, exclusive setup, and VIP treatment at Friends Factory Cafe." },
      { slug: "birthday-packages-vadodara", title: "Birthday Packages", h1: "Birthday Packages in Vadodara", metaTitle: "Birthday Packages Vadodara | All-Inclusive Plans", metaDescription: "Explore birthday packages in Vadodara with all-inclusive plans featuring decorations, cake, and venue at Friends Factory Cafe." },
      { slug: "birthday-surprise-for-friend-vadodara", title: "Birthday Surprise for Friend", h1: "Birthday Surprise for Friend in Vadodara", metaTitle: "Birthday Surprise for Friend Vadodara | Friendship Goals", metaDescription: "Plan a special birthday surprise for your friend in Vadodara with fun decorations and memorable celebration at Friends Factory Cafe." }
    ]
  }
];

// ==================== VADODARA AREAS ====================
export const vadodaraAreas: AreaConfig[] = [
  { slug: "alkapuri-vadodara", name: "Alkapuri" },
  { slug: "akota-vadodara", name: "Akota" },
  { slug: "fatehgunj-vadodara", name: "Fatehgunj" },
  { slug: "sayajigunj-vadodara", name: "Sayajigunj" },
  { slug: "vasna-vadodara", name: "Vasna" },
  { slug: "manjalpur-vadodara", name: "Manjalpur" },
  { slug: "waghodia-road-vadodara", name: "Waghodia Road" },
  { slug: "gotri-vadodara", name: "Gotri" },
  { slug: "sama-vadodara", name: "Sama" },
  { slug: "karelibaug-vadodara", name: "Karelibaug" },
  { slug: "nizampura-vadodara", name: "Nizampura" },
  { slug: "subhanpura-vadodara", name: "Subhanpura" },
  { slug: "ajwa-road-vadodara", name: "Ajwa Road" },
  { slug: "old-padra-road-vadodara", name: "Old Padra Road" },
  { slug: "race-course-vadodara", name: "Race Course" },
  { slug: "ellora-park-vadodara", name: "Ellora Park" },
  { slug: "harni-vadodara", name: "Harni" },
  { slug: "tandalja-vadodara", name: "Tandalja" },
  { slug: "bhayli-vadodara", name: "Bhayli" },
  { slug: "sevasi-vadodara", name: "Sevasi" },
  { slug: "chhani-vadodara", name: "Chhani" },
  { slug: "makarpura-vadodara", name: "Makarpura" },
  { slug: "gorwa-vadodara", name: "Gorwa" },
  { slug: "tarsali-vadodara", name: "Tarsali" },
  { slug: "diwalipura-vadodara", name: "Diwalipura" },
  { slug: "maneja-vadodara", name: "Maneja" },
  { slug: "raopura-vadodara", name: "Raopura" },
  { slug: "mandvi-vadodara", name: "Mandvi" },
  { slug: "nyay-mandir-vadodara", name: "Nyay Mandir" },
  { slug: "jetalpur-vadodara", name: "Jetalpur" },
  { slug: "kalali-vadodara", name: "Kalali" },
  { slug: "undera-vadodara", name: "Undera" },
  { slug: "bil-vadodara", name: "Bil" },
  { slug: "karodiya-vadodara", name: "Karodiya" },
  { slug: "dabhoi-road-vadodara", name: "Dabhoi Road" },
  { slug: "sama-savli-road-vadodara", name: "Sama Savli Road" },
  { slug: "atladra-vadodara", name: "Atladra" },
  { slug: "tp-13-vadodara", name: "TP 13" },
  { slug: "koyali-vadodara", name: "Koyali" },
  { slug: "ranoli-vadodara", name: "Ranoli" }
];

// Helper functions
export function getPackageBySlug(slug: string): SetupPackage | undefined {
  return packages.find(p => p.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(s => s.slug === slug);
}

export function getKeywordBySlug(serviceSlug: string, keywordSlug: string): ServiceKeyword | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.keywords.find(k => k.slug === keywordSlug);
}

export function getAreaBySlug(slug: string): AreaConfig | undefined {
  return vadodaraAreas.find(a => a.slug === slug);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}.00`;
}

// ==================== BLOG POSTS ====================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-10-birthday-surprise-ideas-vadodara",
    title: "Top 10 Birthday Surprise Ideas in Vadodara",
    excerpt: "Discover creative and romantic birthday surprise ideas to make your loved one's special day unforgettable in Vadodara.",
    metaTitle: "Top 10 Birthday Surprise Ideas in Vadodara 2026 | Best Ideas",
    metaDescription: "Looking for birthday surprise ideas in Vadodara? Discover 10 creative ways to surprise your partner, from rooftop dinners to midnight celebrations.",
    coverImage: "/packages/forever-us-loveframe-rooftop/images/2.png",
    publishedAt: "2026-01-15",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "surprise", "vadodara", "celebration"]
  },
  {
    slug: "how-to-plan-perfect-proposal-vadodara",
    title: "How to Plan a Perfect Proposal in Vadodara",
    excerpt: "A complete guide to planning a romantic and memorable marriage proposal in Vadodara that she'll never forget.",
    metaTitle: "How to Plan a Perfect Proposal in Vadodara | Complete Guide",
    metaDescription: "Planning to propose in Vadodara? Learn how to plan the perfect proposal with our step-by-step guide. Best locations, timing & decoration ideas.",
    coverImage: "/packages/eternal-love-rooftop-celebration/images/21.png",
    publishedAt: "2026-01-12",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "engagement", "romantic", "vadodara"]
  },
  {
    slug: "best-candlelight-dinner-spots-vadodara",
    title: "Best Candlelight Dinner Spots in Vadodara 2026",
    excerpt: "Explore the most romantic candlelight dinner restaurants and cafes in Vadodara for an unforgettable date night.",
    metaTitle: "Best Candlelight Dinner Spots in Vadodara 2026 | Top Picks",
    metaDescription: "Find the best candlelight dinner spots in Vadodara. Romantic restaurants, rooftop cafes & private dining options for couples.",
    coverImage: "/packages/golden-promise-glass-house/images/52.png",
    publishedAt: "2026-01-10",
    readTime: "6 min",
    category: "Date Night",
    tags: ["candlelight dinner", "romantic", "restaurants", "vadodara"]
  },
  {
    slug: "anniversary-celebration-ideas-couples",
    title: "Anniversary Celebration Ideas for Couples in Vadodara",
    excerpt: "Creative and romantic ways to celebrate your wedding anniversary in Vadodara and make it truly special.",
    metaTitle: "Anniversary Celebration Ideas Vadodara | Romantic Ideas",
    metaDescription: "Looking for anniversary celebration ideas in Vadodara? From intimate dinners to surprise parties, discover the best ways to celebrate your love.",
    coverImage: "/packages/moonlit-romance-experience/images/24.png",
    publishedAt: "2026-01-08",
    readTime: "6 min",
    category: "Anniversary",
    tags: ["anniversary", "couples", "celebration", "vadodara"]
  },
  {
    slug: "romantic-date-night-ideas-vadodara",
    title: "Romantic Date Night Ideas in Vadodara",
    excerpt: "Spice up your relationship with these creative and romantic date night ideas perfect for Vadodara couples.",
    metaTitle: "Romantic Date Night Ideas in Vadodara 2026 | Best Dates",
    metaDescription: "Need date night inspiration in Vadodara? Discover romantic ideas from rooftop dinners to stargazing experiences for couples.",
    coverImage: "/packages/the-promise-creative-area/images/2.png",
    publishedAt: "2026-01-05",
    readTime: "5 min",
    category: "Date Night",
    tags: ["date night", "romantic", "couples", "vadodara"]
  },
  {
    slug: "best-rooftop-restaurants-vadodara-couples",
    title: "Best Rooftop Restaurants in Vadodara for Couples",
    excerpt: "Discover the most romantic rooftop restaurants in Vadodara perfect for date nights and special celebrations.",
    metaTitle: "Best Rooftop Restaurants in Vadodara for Couples 2026",
    metaDescription: "Looking for rooftop restaurants in Vadodara? Find the best sky-high dining spots for romantic dinners and couple celebrations.",
    coverImage: "/packages/timeless-bond-glass-house/images/112.png",
    publishedAt: "2026-01-03",
    readTime: "5 min",
    category: "Restaurants",
    tags: ["rooftop", "restaurants", "couples", "vadodara"]
  },
  {
    slug: "surprise-birthday-party-wife-guide",
    title: "How to Plan a Surprise Birthday Party for Your Wife",
    excerpt: "A complete guide to planning the perfect surprise birthday party that will make your wife feel truly special.",
    metaTitle: "Surprise Birthday Party for Wife | Complete Planning Guide",
    metaDescription: "Want to surprise your wife on her birthday? Learn how to plan a memorable surprise party with decorations, cake & romantic setup.",
    coverImage: "/packages/sweet-together-glass-house/images/75.png",
    publishedAt: "2025-12-28",
    readTime: "8 min",
    category: "Birthday",
    tags: ["birthday", "wife", "surprise party", "planning"]
  },
  {
    slug: "creative-anniversary-gift-ideas-experiences",
    title: "Creative Anniversary Gift Ideas: Experience Over Things",
    excerpt: "Why experience gifts make the best anniversary presents and how to create lasting memories together.",
    metaTitle: "Anniversary Gift Ideas | Why Experiences Beat Material Gifts",
    metaDescription: "Looking for unique anniversary gifts? Discover why experience gifts like romantic dinners create better memories than material presents.",
    coverImage: "/packages/pure-love-glass-house/images/95.png",
    publishedAt: "2025-12-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "gifts", "experiences", "couples"]
  },
  {
    slug: "pre-wedding-photoshoot-locations-vadodara",
    title: "Best Pre-Wedding Photoshoot Locations in Vadodara",
    excerpt: "Stunning pre-wedding photoshoot locations in Vadodara including rooftops, gardens, and heritage sites.",
    metaTitle: "Best Pre-Wedding Photoshoot Locations Vadodara 2026",
    metaDescription: "Planning your pre-wedding shoot in Vadodara? Discover the best locations from rooftops to heritage sites for stunning photos.",
    coverImage: "/packages/forever-us-loveframe-rooftop/images/5.png",
    publishedAt: "2025-12-22",
    readTime: "6 min",
    category: "Pre-Wedding",
    tags: ["pre-wedding", "photoshoot", "locations", "vadodara"]
  },
  {
    slug: "baby-shower-planning-guide-vadodara",
    title: "Baby Shower Planning Guide for Vadodara Moms",
    excerpt: "Everything you need to know about planning the perfect baby shower in Vadodara, from venues to themes.",
    metaTitle: "Baby Shower Planning Guide Vadodara | Complete Checklist",
    metaDescription: "Planning a baby shower in Vadodara? Get our complete guide with venue ideas, themes, decorations & checklist for a perfect celebration.",
    coverImage: "/packages/eternal-love-rooftop-celebration/images/25.png",
    publishedAt: "2025-12-20",
    readTime: "7 min",
    category: "Baby Shower",
    tags: ["baby shower", "planning", "vadodara", "celebration"]
  },
  {
    slug: "valentines-day-date-ideas-vadodara",
    title: "Valentine's Day Date Ideas in Vadodara",
    excerpt: "Make Valentine's Day special with these romantic date ideas perfect for couples in Vadodara.",
    metaTitle: "Valentine's Day Date Ideas Vadodara 2026 | Romantic Plans",
    metaDescription: "Looking for Valentine's Day ideas in Vadodara? Discover romantic date plans from candlelight dinners to rooftop surprises.",
    coverImage: "/packages/golden-promise-glass-house/images/55.png",
    publishedAt: "2025-12-18",
    readTime: "5 min",
    category: "Valentine's Day",
    tags: ["valentines day", "date ideas", "romantic", "vadodara"]
  },
  {
    slug: "corporate-team-lunch-ideas-vadodara",
    title: "How to Organize a Corporate Team Lunch in Vadodara",
    excerpt: "Tips and venue ideas for organizing successful corporate team lunches and office celebrations in Vadodara.",
    metaTitle: "Corporate Team Lunch Vadodara | Venue & Planning Guide",
    metaDescription: "Planning a corporate team lunch in Vadodara? Find the best venues and get tips for organizing a successful office gathering.",
    coverImage: "/packages/the-promise-creative-area/images/5.png",
    publishedAt: "2025-12-15",
    readTime: "5 min",
    category: "Corporate",
    tags: ["corporate", "team lunch", "office party", "vadodara"]
  },
  {
    slug: "kitty-party-ideas-venues-vadodara",
    title: "Kitty Party Ideas and Venues in Vadodara",
    excerpt: "Fun kitty party themes, games, and the best venues in Vadodara for your ladies' get-together.",
    metaTitle: "Kitty Party Ideas & Venues Vadodara 2026 | Best Places",
    metaDescription: "Planning a kitty party in Vadodara? Discover fun themes, games, and the best venues for your next ladies' gathering.",
    coverImage: "/packages/timeless-bond-glass-house/images/115.png",
    publishedAt: "2025-12-12",
    readTime: "6 min",
    category: "Kitty Party",
    tags: ["kitty party", "venues", "ladies", "vadodara"]
  },
  {
    slug: "private-dining-experiences-vadodara",
    title: "Best Places for Private Dining in Vadodara",
    excerpt: "Exclusive private dining venues in Vadodara for intimate celebrations and special occasions.",
    metaTitle: "Private Dining Vadodara | Exclusive Restaurant Experiences",
    metaDescription: "Looking for private dining in Vadodara? Discover exclusive venues for intimate dinners, proposals & special celebrations.",
    coverImage: "/packages/sweet-together-glass-house/images/78.png",
    publishedAt: "2025-12-10",
    readTime: "5 min",
    category: "Dining",
    tags: ["private dining", "exclusive", "restaurants", "vadodara"]
  },
  {
    slug: "memorable-farewell-party-planning",
    title: "How to Plan a Memorable Farewell Party",
    excerpt: "Create lasting memories with our guide to planning the perfect farewell party for colleagues or friends.",
    metaTitle: "Farewell Party Planning Guide | Memorable Send-Off Ideas",
    metaDescription: "Planning a farewell party? Learn how to organize a memorable send-off with venue ideas, activities & emotional touches.",
    coverImage: "/packages/moonlit-romance-experience/images/28.png",
    publishedAt: "2025-12-08",
    readTime: "6 min",
    category: "Farewell",
    tags: ["farewell", "party planning", "office", "celebration"]
  },
  {
    slug: "birthday-decoration-ideas-budget",
    title: "Birthday Party Decoration Ideas on a Budget",
    excerpt: "Creative and affordable birthday decoration ideas that look expensive but won't break the bank.",
    metaTitle: "Budget Birthday Decoration Ideas | Affordable Party Decor",
    metaDescription: "Want stunning birthday decorations on a budget? Discover creative DIY ideas and affordable decoration tips for memorable parties.",
    coverImage: "/packages/the-promise-creative-area/images/8.png",
    publishedAt: "2025-12-05",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "decoration", "budget", "diy"]
  },
  {
    slug: "romantic-proposal-ideas-say-yes",
    title: "Romantic Proposal Ideas That Will Make Her Say Yes",
    excerpt: "Creative and heartfelt proposal ideas that are sure to get a 'YES!' from your special someone.",
    metaTitle: "Romantic Proposal Ideas | Creative Ways to Propose",
    metaDescription: "Looking for proposal inspiration? Discover romantic and creative proposal ideas guaranteed to make her say yes.",
    coverImage: "/packages/pure-love-glass-house/images/98.png",
    publishedAt: "2025-12-02",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "romantic", "engagement", "ideas"]
  },
  {
    slug: "gender-reveal-party-ideas-vadodara",
    title: "Gender Reveal Party Ideas in Vadodara",
    excerpt: "Creative and exciting gender reveal party ideas to announce your baby's gender in style.",
    metaTitle: "Gender Reveal Party Ideas Vadodara | Creative Announcements",
    metaDescription: "Planning a gender reveal party in Vadodara? Discover creative reveal ideas, decorations & venues for the big announcement.",
    coverImage: "/packages/forever-us-loveframe-rooftop/images/10.png",
    publishedAt: "2025-11-28",
    readTime: "6 min",
    category: "Baby",
    tags: ["gender reveal", "baby", "party", "vadodara"]
  },
  {
    slug: "best-anniversary-restaurants-vadodara",
    title: "Best Anniversary Restaurants in Vadodara",
    excerpt: "Top restaurants in Vadodara perfect for celebrating your wedding anniversary with your partner.",
    metaTitle: "Best Anniversary Restaurants Vadodara 2026 | Top Picks",
    metaDescription: "Celebrating your anniversary in Vadodara? Find the best restaurants for romantic anniversary dinners with your partner.",
    coverImage: "/packages/eternal-love-rooftop-celebration/images/30.png",
    publishedAt: "2025-11-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "restaurants", "romantic", "vadodara"]
  },
  {
    slug: "surprise-date-night-planning-guide",
    title: "How to Plan a Surprise Date Night",
    excerpt: "Step-by-step guide to planning a romantic surprise date night that your partner will love.",
    metaTitle: "Surprise Date Night Planning | Complete Guide for Couples",
    metaDescription: "Want to surprise your partner with a romantic date night? Get our complete planning guide with ideas, tips & checklist.",
    coverImage: "/packages/golden-promise-glass-house/images/58.png",
    publishedAt: "2025-11-22",
    readTime: "6 min",
    category: "Date Night",
    tags: ["date night", "surprise", "romantic", "planning"]
  },
  {
    slug: "maternity-photoshoot-ideas-vadodara",
    title: "Maternity Photoshoot Ideas for Expecting Mothers",
    excerpt: "Beautiful maternity photoshoot ideas and locations in Vadodara to capture your pregnancy journey.",
    metaTitle: "Maternity Photoshoot Ideas Vadodara | Pregnancy Photos",
    metaDescription: "Planning a maternity photoshoot in Vadodara? Discover poses, outfits & location ideas for stunning pregnancy photos.",
    coverImage: "/packages/timeless-bond-glass-house/images/118.png",
    publishedAt: "2025-11-18",
    readTime: "6 min",
    category: "Maternity",
    tags: ["maternity", "photoshoot", "pregnancy", "vadodara"]
  },
  {
    slug: "bachelor-bachelorette-party-ideas-vadodara",
    title: "Bachelor and Bachelorette Party Ideas in Vadodara",
    excerpt: "Fun and memorable bachelor/bachelorette party ideas and venues for the bride and groom-to-be.",
    metaTitle: "Bachelor & Bachelorette Party Ideas Vadodara 2026",
    metaDescription: "Planning a bachelor or bachelorette party in Vadodara? Discover fun ideas, themes & venues for an unforgettable celebration.",
    coverImage: "/packages/sweet-together-glass-house/images/82.png",
    publishedAt: "2025-11-15",
    readTime: "7 min",
    category: "Pre-Wedding",
    tags: ["bachelor party", "bachelorette", "pre-wedding", "vadodara"]
  },
  {
    slug: "new-year-celebration-ideas-vadodara",
    title: "Best Places to Celebrate New Year in Vadodara",
    excerpt: "Top venues and ideas for celebrating New Year's Eve in Vadodara with your loved ones.",
    metaTitle: "New Year Celebration Vadodara 2026 | Best Places & Ideas",
    metaDescription: "Looking for New Year celebration venues in Vadodara? Find the best places to ring in the new year with parties & dinners.",
    coverImage: "/packages/moonlit-romance-experience/images/32.png",
    publishedAt: "2025-11-12",
    readTime: "5 min",
    category: "New Year",
    tags: ["new year", "celebration", "venues", "vadodara"]
  },
  {
    slug: "couple-photoshoot-locations-vadodara",
    title: "Couple Photoshoot Locations in Vadodara",
    excerpt: "Romantic and scenic locations in Vadodara perfect for couple photoshoots and engagement shoots.",
    metaTitle: "Couple Photoshoot Locations Vadodara | Romantic Spots",
    metaDescription: "Planning a couple photoshoot in Vadodara? Discover the most romantic locations for stunning couple photos.",
    coverImage: "/packages/the-promise-creative-area/images/12.png",
    publishedAt: "2025-11-08",
    readTime: "6 min",
    category: "Photoshoot",
    tags: ["couple", "photoshoot", "locations", "vadodara"]
  },
  {
    slug: "intimate-wedding-planning-guide",
    title: "Intimate Wedding Planning Guide for Vadodara Couples",
    excerpt: "Everything you need to know about planning a beautiful small wedding in Vadodara.",
    metaTitle: "Intimate Wedding Planning Vadodara | Small Wedding Guide",
    metaDescription: "Planning an intimate wedding in Vadodara? Get our complete guide with venue ideas, tips & checklist for a perfect small wedding.",
    coverImage: "/packages/pure-love-glass-house/images/102.png",
    publishedAt: "2025-11-05",
    readTime: "8 min",
    category: "Wedding",
    tags: ["wedding", "intimate", "small wedding", "vadodara"]
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(b => b.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(b => b.category === category);
}
