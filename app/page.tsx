import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  { title: "Singers", image: "https://source.unsplash.com/400x300/?singer" },
  { title: "Dancers", image: "https://source.unsplash.com/400x300/?dancer" },
  { title: "Speakers", image: "https://source.unsplash.com/400x300/?speaker" },
  { title: "DJs", image: "https://source.unsplash.com/400x300/?dj" }
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to Artistly</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-white rounded shadow p-2 hover:shadow-md transition">
              <img src={cat.image} alt={cat.title} className="rounded h-40 w-full object-cover" />
              <h3 className="text-lg font-semibold mt-2 text-center">{cat.title}</h3>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
