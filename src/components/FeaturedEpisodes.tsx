import React from 'react';
import { Play, Clock, Users, Sparkles, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import podcast29Thumb from "../assets/intalks-podcast-29.jpg";
import podcast28Thumb from "../assets/intalks-podcast-28.jpg";
import podcast27Thumb from "../assets/intalks-podcast-27.jpg";

interface Episode {
  id: number;
  title: string;
  guest: string;
  duration: string;
  thumbnail: string;
  description: string;
  youtubeLink?: string; // Optional: Link to the YouTube video
}

const FeaturedEpisodes = () => {
  const episodes: Episode[] = [
    {
      id: 1,
      title: "Lessons in Leadership and Service",
      guest: "IAS M Gopala Krishna (Retd)",
      duration: "1:15:17 min",
      thumbnail: podcast29Thumb,
      description:
        "A remarkable journey through elections, governance, and mentorship, offering timeless insights on democracy, leadership, ethics, and public service.",
      youtubeLink: "https://youtu.be/crY9TCPI5hk?si=oWWPbE0A5RiDEPWO" // Replace with actual link
    },
    {
      id: 2,
      title: "Life, Service, and Sacrifice",
      guest: "Retd Major General Ravi Ravada NSG ",
      duration: "1:12:45 min",
      thumbnail: podcast28Thumb,
      description:
        "An inspiring journey of courage, discipline, and sacrifice, exploring patriotism, national security, global diplomacy, and life’s true simplicity.",
      youtubeLink: "https://youtu.be/u8qEUzabOkE?si=PFc4tBD_AQYwZ1YP" // Replace with actual link
    },
    {
      id: 3,
      title: "Eternal Insights with Swamiji",
      guest: "Sri Santh Sadananda Giri ",
      duration: "1:30:28 min",
      thumbnail: podcast27Thumb,
      description:
        "We sit down with Sri Santh Sadananda Giri Swamiji, a revered spiritual teacher aged 109, to discuss some of the most important aspects of life that often go unnoticed in today's fast-paced world.",
      youtubeLink: "https://youtu.be/EXf7R4PePmk?si=l3-Let2cI1lerqZ8" // Replace with actual link
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FDF8EE] to-[#F7B58D]/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23F7B58D&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpath d=&quot;M30 30l15-15v30l-15-15zm-15 0l15-15v30l-15-15z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-[#F7B58D]/10 rounded-full mb-8 backdrop-blur-sm border border-[#F7B58D]/20">
            <TrendingUp className="w-5 h-5 text-[#F7B58D] mr-2" />
            <span className="text-[#F7B58D] font-medium">Most Watched</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#111111] via-[#F7B58D] to-[#111111] bg-clip-text text-transparent">
            Latest Conversations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive deep into the stories and strategies shaping India's creator economy
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {episodes.map((episode) => (
    <div
      key={episode.id}
      className="group block transform transition-all duration-500 hover:-translate-y-2"
    >
      {/* Thumbnail + Play button → YouTube */}
      <a
        href={episode.youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video shadow-lg group-hover:shadow-2xl transition-all duration-500">
          <img
            src={episode.thumbnail}
            alt={episode.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-20 h-20 bg-gradient-to-r from-[#F7B58D] to-[#FFD700] rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500">
              <Play className="w-8 h-8 text-[#111111] ml-1" />
            </div>
          </div>

          {/* Sparkle Effect */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Sparkles className="w-6 h-6 text-[#F7B58D] animate-pulse" />
          </div>
        </div>
      </a>

      {/* Title + Description → Internal navigation */}
      <Link
        to={`/episodes`}
        className="block space-y-4 px-2"
      >
        <h3 className="text-2xl font-bold group-hover:text-[#F7B58D] transition-colors duration-300 line-clamp-2 leading-tight">
          {episode.title}
        </h3>
        <p className="text-gray-600 line-clamp-2 leading-relaxed">{episode.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span className="font-medium">{episode.guest}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{episode.duration}</span>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>


        <div className="text-center mt-16">
          <a
            href="/episodes"
            className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#F7B58D] to-[#FFD700] text-[#111111] font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#F7B58D]/25 transition-all duration-500 hover:transform hover:-translate-y-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#F7B58D] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">View All Episodes</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodes;
