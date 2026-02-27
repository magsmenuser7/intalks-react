import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';

interface Guest {
  id: number;
  guestname: string;
  thumbnail: string;
  youtubeLink: string;
  episodeNumber: number | string;
  category: string; // FIXED
}

const Guests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    // fetch("http://127.0.0.1:8000/api/guests/")
    fetch("https://api.mibbs.ai/api/guests/")
      .then(res => res.json())
      .then(res => {
        if (res.success && Array.isArray(res.data)) {
          const mapped = res.data.map((e: any) => ({
            id: e.id,
            guestname: e.guestname ?? "",
            thumbnail: e.thumbnail ?? "",
            youtubeLink: e.youtubeLink ?? "",
            episodeNumber: e.episodeNumber ?? "",
            category: e.category ?? "General", // FIXED ✔
          }));
          setGuests(mapped);
        }
      })
      .catch(err => console.error("Guests Fetch Error:", err));
  }, []);

  // ✅ Category List (Unique)
  const categories = [
    "all",
    ...Array.from(new Set(guests.map(g => g.category)))
  ];

  // ✅ Guest Filter
  const filteredGuests = guests.filter((g) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch = g.guestname.toLowerCase().includes(search);
    const matchesCategory = selectedCategory === "all" || g.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Voices That Matter</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the creators, entrepreneurs, and visionaries shaping India's creator economy.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search guests by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
            />
          </div>

          <div className="relative w-full md:w-64">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#F7B58D]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Guests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuests.map((guest) => (
            <div
              key={guest.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <a href={guest.youtubeLink} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <img
                    src={guest.thumbnail}
                    alt={guest.guestname}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#F7B58D] text-[#111111] px-3 py-1 rounded-full text-sm font-medium">
                      Episode {guest.episodeNumber}
                    </span>
                  </div>
                </div>
              </a>

              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-bold">{guest.guestname}</h3>
                <a
                  href={guest.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F7B58D] font-medium hover:text-[#F7B58D]/80 transition-colors duration-200"
                >
                  View Episode →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGuests.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#F7B58D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[#F7B58D]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No guests found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or browse all our amazing guests.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#F7B58D]/10 via-white to-[#F7B58D]/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Join This Community?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you have insights that can inspire creators and brands, we'd love to have you on Intalks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/become-guest" className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200">
              Become a Guest
            </a>
            <a href="/contact" className="px-6 py-3 border-2 border-[#F7B58D] text-[#F7B58D] font-medium rounded-lg hover:bg-[#F7B58D] hover:text-[#111111] transition-colors duration-200">
              Recommend Someone
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Guests;





