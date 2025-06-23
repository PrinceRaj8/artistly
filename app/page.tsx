import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  { title: "Singers", image: "https://source.unsplash.com/400x300/?singer" },
  { title: "Dancers", image: "https://source.unsplash.com/400x300/?dancer" },
  { title: "Speakers", image: "https://source.unsplash.com/400x300/?speaker" },
  { title: "DJs", image: "https://source.unsplash.com/400x300/?dj" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-4 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Artistly.com</h2>
          <p className="text-gray-600 mb-6">
            A one-stop platform for Event Planners and Artist Managers to connect and collaborate.
          </p>
          <a
            href="/artists"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Artists
          </a>
        </section>

        {/* Categories Section */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-6">Popular Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <img src={cat.image} alt={cat.title} className="w-full h-40 object-cover" />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-medium">{cat.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
