import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import PlantCard from "../components/PlantCard";

const Home = () => {
  return (
   <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f5f5f5] to-[#eeeeee]">
     <Navbar />
     <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
       style={{ backgroundImage: "url('/images/plant1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
       <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/leaf-pattern.png')] bg-no-repeat bg-center bg-contain opacity-10 pointer-events-none z-0"></div>
         <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-600 drop-shadow-xl mb-4">
           Green Your Space
         </h1>
         <p className="relative z-10 text-gray-100 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md mb-6">
            Handpicked plants to transform your space into a living sanctuary</p>
         <a href="/plants" className="relative z-10 inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-emerald-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
             Shop Now
         </a>
      </section>
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-2xl font-extrabold text-green-700 mb-8 text-center">
         Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard name="Indoor Plants" img="/images/indoor.jpg" />
          <CategoryCard name="Outdoor Plants" img="/images/outdoor.jpg" />
          <CategoryCard name="Pots" img="/images/pots.jpg" />
          <CategoryCard name="Seeds" img="/images/seeds.jpg" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-2xl font-extrabold text-green-700 mb-8 text-center">
          Our Picks for You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <PlantCard name="Monstera" price={25} img="/images/monstera.jpg" />
          <PlantCard name="Fiddle Leaf" price={30} img="/images/fiddle.jpg" />
          <PlantCard name="Snake Plant" price={20} img="/images/snake.jpg" />
          <PlantCard name="Peace Lily" price={28} img="/images/peace-lily.jpg" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
