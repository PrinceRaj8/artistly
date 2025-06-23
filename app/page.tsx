import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    title: "Singers",
    images: [
      "/images/singer1.jpg", "/images/singer2.jpg", "/images/singer3.jpg",
      "/images/singer4.jpg", "/images/singer5.jpg", "/images/singer6.jpg",
      "/images/singer7.jpg", "/images/singer8.jpg", "/images/singer9.jpg",
      "/images/singer10.jpg"
    ]
  },
  {
    title: "Dancers",
    images: [
      "/images/dancer1.jpg", "/images/dancer2.jpg", "/images/dancer3.jpg",
      "/images/dancer4.jpg", "/images/dancer5.jpg", "/images/dancer6.jpg",
      "/images/dancer7.jpg", "/images/dancer8.jpg", "/images/dancer9.jpg",
      "/images/dancer10.jpg"
    ]
  },
  {
    title: "Speakers",
    images: [
      "/images/speaker1.jpg", "/images/speaker2.jpg", "/images/speaker3.jpg",
      "/images/speaker4.jpg", "/images/speaker5.jpg"
    ]
  },
  {
    title: "DJs",
    images: [
      "/images/dj1.jpg", "/images/dj2.jpg", "/images/dj3.jpg",
      "/images/dj4.jpg", "/images/dj5.jpg", "/images/dj6.jpg"
    ]
  }
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
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-1">
                  {cat.images.map((url, j) => (
                    <img
                      key={j}
                      src={url}
                      alt={`${cat.title} ${j + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  ))}
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold">{cat.title}</h4>
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
