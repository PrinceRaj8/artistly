"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";

export default function ArtistListingPage() {
  const [artists, setArtists] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/data/artists.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

  const filtered = selectedCategory === "All"
    ? artists
    : artists.filter((a: any) => a.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="p-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Browse Artists</h2>
        <FilterBlock selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((artist: any) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
