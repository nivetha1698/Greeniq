import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import PlantCard from "../components/PlantCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <section className="bg-green-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Bring Nature Home 🌿</h1>
        <p className="text-gray-700 mb-6">Discover beautiful indoor & outdoor plants</p>
        <a href="/plans" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Shop Now</a>
      </section>

      <div className="max-w-7xl mx-auto mt-6 px-4">
        <SearchBar />
      </div>

      {/* Categories */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard name="Indoor Plants" img="/images/indoor.jpg" />
          <CategoryCard name="Outdoor Plants" img="/images/outdoor.jpg" />
          <CategoryCard name="Pots" img="/images/pots.jpg" />
          <CategoryCard name="Seeds" img="/images/seeds.jpg" />
        </div>
      </section>

      {/* Featured Plans */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <PlantCard name="Monstera" price={25} img="/images/monstera.jpg" />
          <PlantCard name="Fiddle Leaf" price={30} img="/images/fiddle.jpg" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
