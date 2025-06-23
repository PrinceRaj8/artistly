interface Artist {
  name: string;
  category: string;
  location: string;
  price: string;
  image: string;
}

export default function ArtistCard({ name, category, location, price, image }: Artist) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition bg-white">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-3" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-1">Category: {category}</p>
      <p className="text-sm text-gray-600 mb-1">Location: {location}</p>
      <p className="text-sm text-gray-600 mb-2">Price: {price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}
