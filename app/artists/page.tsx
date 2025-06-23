import artists from "@/data/artists.json";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArtistsPage() {
  return (
    <>
      <Header />
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">All Artists</h1>
        <FilterBlock />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
