import React from "react";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Plant = () => {
  const indoorPlants = [
    {
      name: "Aloe Vera",
      img: "/images/aloevera.jpg",
      description: "A medicinal succulent known for its soothing gel and air-purifying nature.",
      sunlight: "Bright, indirect sunlight",
      water: "Water every 2-3 weeks; allow soil to dry completely",
      soil: "Well-draining cactus/succulent mix"
    },
    {
      name: "Peace Lily",
      img: "/images/peaceLily.jpg",
      description: "Elegant indoor plant known for its white spathes and excellent air purification.",
      sunlight: "Low to medium indirect light",
      water: "Keep soil slightly moist; water once a week",
      soil: "Rich, well-draining potting mix"
    },
    {
      name: "Money Plant",
      img: "/images/moneyPlant2.jpg",
      description: "Fast-growing vine believed to bring prosperity and great for purifying indoor air.",
      sunlight: "Low to bright indirect light",
      water: "Water every 5-7 days",
      soil: "Well-aerated, moist potting soil"
    },

    {
      name: "Monstera",
      img: "/images/monstera.jpg",
      description: "A trendy indoor plant famous for its large, split leaves.",
      sunlight: "Bright, indirect light",
      water: "Water every 7-10 days",
      soil: "Well-draining peat-based soil"
    },
    {
      name: "Fiddle Leaf",
      img: "/images/fiddleLeaf.jpg",
      description: "Popular indoor tree with large violin-shaped leaves.",
      sunlight: "Bright, filtered light",
      water: "Water once weekly; keep soil slightly moist",
      soil: "Well-draining potting mix with peat"
    },
    {
      name: "ZZ Plant",
      img: "/images/zzPlant.jpg",
      description: "Extremely low-maintenance indoor plant with glossy leaves.",
      sunlight: "Low to medium indirect light",
      water: "Water every 2-3 weeks",
      soil: "Well-draining mix; tolerates dry soil"
    },
    {
      name: "Snake Plant",
      img: "/images/snakePlant.jpg",
      description: "Air-purifying plant known for upright sword-shaped leaves.",
      sunlight: "Low to bright indirect light",
      water: "Water every 2-3 weeks",
      soil: "Sandy, fast-draining soil"
    },
    {
      name: "Spider Plant",
      img: "/images/spiderPlant.jpg",
      description: "Low-maintenance indoor plant that produces baby spiderettes.",
      sunlight: "Medium to bright indirect light",
      water: "Water every 5-7 days",
      soil: "Well-draining general potting mix"
    }
  ];

  const outdoorPlants = [
    {
      name: "Hibiscus",
      img: "/images/hibiscus.jpg",
      description: "Tropical plant known for its large, colorful flowers.",
      sunlight: "Full sunlight (6+ hours)",
      water: "Water 3-4 times a week",
      soil: "Rich, well-drained soil"
    },
    {
      name: "Rose",
      img: "/images/rose.jpg",
      description: "Classic flowering plant producing fragrant and colorful blooms.",
      sunlight: "Full sunlight (6 hours minimum)",
      water: "Deep watering 2-3 times a week",
      soil: "Nutrient-rich, well-drained soil"
    },
    {
      name: "Tulsi",
      img: "/images/tulsi.jpg",
      description: "Sacred medicinal herb widely used in Ayurveda.",
      sunlight: "Full sunlight",
      water: "Light watering daily",
      soil: "Loose, well-drained soil"
    },
     {
      name: "Marigold",
      img: "/images/marigold.jpg",
      description: "Bright flowering plant commonly grown in Indian gardens.",
      sunlight: "Full sunlight",
      water: "Water 2-3 times a week",
      soil: "Fertile, well-drained soil"
    },
     {
      name: "Jasmine",
      img: "/images/jasmine.jpg",
      description: "Fragrant flowering vine/shrub popular in India.",
      sunlight: "Full sunlight to partial shade",
      water: "Water 2-3 times a week",
      soil: "Moist, well-drained soil"
    },
     {
      name: "Dahlia",
      img: "/images/dahlia.jpg",
      description: "Showy plant producing vibrant, layered blooms.",
      sunlight: "Full sunlight",
      water: "Water 2-3 times a week",
      soil: "Rich, well-drained soil"
    },
    {
      name: "Lavendar",
      img: "/images/lavendar.jpg",
      description: "Fragrant herb known for calming aroma and purple flowers.",
      sunlight: "Full sun (6-8 hours)",
      water: "Water once a week; avoid overwatering",
      soil: "Sandy, well-drained soil"
    },
    {
      name: "Lily",
      img: "/images/lily1.jpg",
      description: "Elegant outdoor flowering plant with trumpet-shaped blooms.",
      sunlight: "Full sun to partial shade",
      water: "Water 2-3 times a week",
      soil: "Moist, fertile, well-drained soil"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       <Navbar />
      <h2 data-aos="fade-up" className="text-2xl font-bold text-green-700 mt-10 mb-6 text-center">Indoor Plants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {indoorPlants.map((plant, index) => (
          <CategoryCard key={index} {...plant} />
        ))}
      </div>

      <h2 data-aos="fade-up" className="text-2xl font-bold text-green-700 mt-10 mb-4 text-center">Outdoor Plants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {outdoorPlants.map((plant, index) => (
          <CategoryCard key={index} {...plant} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Plant;

