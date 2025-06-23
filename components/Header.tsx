export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Artistly</h1>
      <nav className="space-x-4">
        <a href="/" className="text-gray-700 hover:underline">Home</a>
        <a href="/artists" className="text-gray-700 hover:underline">Artists</a>
        <a href="/onboard" className="text-gray-700 hover:underline">Onboard</a>
        <a href="/dashboard" className="text-gray-700 hover:underline">Dashboard</a>
      </nav>
    </header>
  );
}
