interface Props {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export default function FilterBlock({ selectedCategory, setSelectedCategory }: Props) {
  const categories = ["All", "Singers", "Dancers", "Speakers", "DJs"];

  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded border ${
            selectedCategory === cat ? "bg-blue-600 text-white" : "bg-white text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
