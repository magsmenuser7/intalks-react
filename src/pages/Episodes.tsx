

























import React, { useState, useEffect } from 'react';
import { Search, Filter, Play, Clock, Users, Calendar } from 'lucide-react';

// ------------------ Types ------------------
interface Episode {
  id: number;
  title: string;
  guest: string;
  duration: string;
  date: string;
  category: string;
  thumbnail: string;
  description: string;
  views: string;
  youtubeLink: string;
}

// ------------------ YouTube Helpers ------------------
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
console.log("ENV KEY:", VITE_API_KEY); // <--- Debug check

function extractVideoId(url: string) {
  const patterns = [
    /v=([^&]+)/,
    /youtu\.be\/([^?]+)/,
    /embed\/([^?]+)/,
    /shorts\/([^?]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

async function fetchYouTubeViews(videoId: string) {
  if (!videoId) return "0";
  if (!VITE_API_KEY) {
    console.error("❌ Missing API KEY! Check .env");
    return "0";
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${VITE_API_KEY}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data.items?.[0]?.statistics?.viewCount ?? "0";
}



// ------------------ Component ------------------
const Episodes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  // --- Fetch Data From Django + YouTube Views ---
  useEffect(() => {
    // fetch("http://127.0.0.1:8000/api/episodes/")
    fetch("https://api.mibbs.ai/api/episodes/")
      .then(res => res.json())
      .then(async res => {
        if (res.success && Array.isArray(res.data)) {
          
          const mapped = await Promise.all(
            res.data.map(async (e: any) => {
              const videoId = extractVideoId(e.youtubeLink);
              let views = e.views ?? "0";

              if (videoId) {
                views = await fetchYouTubeViews(videoId);
              }

              return {
                id: e.id,
                title: e.title ?? "",
                guest: e.guest ?? "",
                duration: e.duration ?? "",
                date: e.date ?? "",
                category: e.category ?? "General",
                thumbnail: e.thumbnail ?? "",
                description: e.description ?? "",
                views,
                youtubeLink: e.youtubeLink ?? "",
              };
            })
          );

          setEpisodes(mapped);
        }
      })
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  // --- Category List ---
  const categories = [
    'all',
    ...Array.from(new Set(episodes.map(e => e.category)))
  ];

  // --- Filtering Logic ---
  const filteredEpisodes = episodes.filter((episode) => {
    const title = episode.title ?? "";
    const guest = episode.guest ?? "";
    const category = episode.category ?? "";

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Every Conversation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse episodes featuring creators, entrepreneurs, and leaders.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search episodes or guests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F7B58D]"
            />
          </div>

          <div className="relative w-full md:w-64">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#F7B58D]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <a
                href={episode.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video overflow-hidden block"
              >
                <img
                  src={episode.thumbnail}
                  alt={episode.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-16 h-16 bg-[#F7B58D] rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-black" />
                  </div>
                </div>

                <div className="absolute top-4 left-3">
                  <span className="bg-[#F7B58D] text-black px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {episode.category}
                  </span>
                </div>

                <div className="absolute top-4 right-3">
                  <span className="bg-[#F7B58D] text-black px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {Number(episode.views).toLocaleString()} views
                  </span>
                </div>
              </a>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#F7B58D] transition-colors duration-200 line-clamp-2">
                  {episode.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {episode.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{episode.guest}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{episode.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{episode.date}</span>
                  </div>
                  <a
                    href={episode.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F7B58D] font-medium hover:opacity-80"
                  >
                    Watch Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEpisodes.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No episodes found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Episodes;











