import React, { useState } from 'react';
import { Search, Filter, Play, Clock, Users, Calendar } from 'lucide-react';
import guest1 from "../assets/intalks-podcast-1.jpg";
import guest2 from "../assets/intalks-podcast-2.jpg";
import guest3 from "../assets/intalks-podcast-3.jpg";
import guest4 from "../assets/intalks-podcast-4.jpg";
import guest5 from "../assets/intalks-podcast-5.jpg";
import guest6 from "../assets/intalks-podcast-6.jpg";
import guest7 from "../assets/intalks-podcast-7.jpg";
import guest8 from "../assets/intalks-podcast-8.jpg";
import guest9 from "../assets/intalks-podcast-9.jpg";
import guest10 from "../assets/intalks-podcast-10.jpg";
import guest11 from "../assets/intalks-podcast-11.jpg";
import guest12 from "../assets/intalks-podcast-12.jpg";
import guest13 from "../assets/intalks-podcast-13.jpg";
import guest14 from "../assets/intalks-podcast-14.jpg";
import guest15 from "../assets/intalks-podcast-15.jpg";
import guest16 from "../assets/intalks-podcast-16.jpg";
import guest17 from "../assets/intalks-podcast-17.jpg";
import guest18 from "../assets/intalks-podcast-18.jpg";
import guest19 from "../assets/intalks-podcast-19.jpg";
import guest20 from "../assets/intalks-podcast-20.jpg";
import guest21 from "../assets/intalks-podcast-21.jpg";
import guest22 from "../assets/intalks-podcast-22.jpg";
import guest23 from "../assets/intalks-podcast-23.jpg"; 
import guest24 from "../assets/intalks-podcast-24.jpg";
import guest25 from "../assets/intalks-podcast-25.jpg";
import guest26 from "../assets/intalks-podcast-26.jpg";
import guest27 from "../assets/intalks-podcast-27.jpg"; 
import guest28 from "../assets/intalks-podcast-28.jpg";
import guest29 from "../assets/intalks-podcast-29.jpg";

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
  youtubeLink?: string; // Optional: Link to the YouTube video
}

const Episodes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // const categories = ['all', 'creators', 'brands', 'founders', 'influencers'];

  const episodes: Episode[] = [
    {
      id: 1,
      title: "From Medicine to Management",
      guest: "Dr. Rayapati Mamatha",
      duration: "1:25:51 min",
      date: "Aug 12, 2024",
      category: "Healthcare Leadership",
      thumbnail: guest1,
      description: "Dr. Rayapati Mamatha shares her inspiring journey from medical student to hospital leader, blending healthcare expertise with management.",
      views: "10.5k",
      youtubeLink:"https://youtu.be/9cgx45gJfE8?si=rEFz2FyR26shhk7X"
    },
    {
      id: 2,
      title: "Empowering Women in Business",
      guest: "Sakku Madhavi",
      duration: "47:01 min",
      date: "Aug 22, 2024",
      category: "Business & Entrepreneurship",
      thumbnail: guest2,
      description: "Sakku Madhavi shares challenges, triumphs, and strategies shaping women’s evolving roles, leadership, and entrepreneurial success in business.",
      views: "2.191k",
      youtubeLink: "https://youtu.be/xeMl0V16CHU?si=2QwR-iZ-mORi6OYr"
    },
    {
      id: 3,
      title: "Redefining Interiors: Tradition Meets Modern",
      guest: "Ram",
      duration: "56:08 min",
      date: "Aug 29, 2024",
      category: "Interior Design",
      thumbnail: guest3,
      description: "Ram explores interior design’s evolution, temple architecture’s influence, and challenges posed by Pinterest’s often unrealistic design expectations.",
      views: "3.6k",
      youtubeLink: "https://youtu.be/Y2ABoUuEkSw?si=dDAR-CBp-wIidhTx"
    },
    {
      id: 4,
      title: "AI Insights with Sridhar",
      guest: "Sridhar",
      duration: "47:32 min",
      date: "Sep 9, 2024",
      category: "IT Founder",
      thumbnail: guest4,
      description: "Sridhar explores student mindsets, AI’s transformative impact across industries, and shares practical strategies for academic and professional growth.",
      views: "2.3k",
      youtubeLink: "https://youtu.be/Tu1Z5w_lEqo?si=KJ2LTwpXYLIZIUhJ"
    },
    {
      id: 5,
      title: "Ayurveda Reinvented with Shakthi",
      guest: "Dr.Subramanyam",
      duration: "45:07 min",
      date: "Sep 30, 2024",
      category: "Shakthi an Ayurvedic Nut Powder",
      thumbnail: guest5,
      description: "Dr. Subramanyam shares Shakthi’s journey, blending Ayurvedic wisdom with modern nutrition to promote sustainable, holistic wellness solutions.",
      views: "893",
      youtubeLink: "https://youtu.be/VLAvgT2WUJI?si=ebYECzJURxKcQgmG"
    },
    {
      id: 6,
      title: "Clean Chicken Revolution with Saikesh",
      guest: "Saikesh Goud",
      duration: "1:32:01 min",
      date: "Oct 10, 2024",
      category: "creators",
      thumbnail: guest6,
      description: "Saikesh Goud exposes poultry industry dangers, revealing clean, drug-free alternatives for healthier, sustainable eating and food safety.",
      views: "11k",
      youtubeLink: "https://youtu.be/N0MHDT29Gsk?si=afC5Wjai32xaom4k"
    },
    {
      id: 7,
      title: "Stepping Into Style",
      guest: "Avinash Chukkapalli",
      duration: "1:39:31 min",
      date: "Oct 24, 2024",
      category: "Fashion & Lifestyle",
      thumbnail: guest7,
      description: "Explore footwear’s artistry and business, from sneakers to sandals, with insights from designers, retailers, and passionate shoe lovers.",
      views: "6.9k",
      youtubeLink: "https://youtu.be/C4-0iwevOY8?si=YEn-RKS9QBRIovEY"
    },
     {
      id: 8,
      title: "Cracking the Coconut Code",
      guest: "Venkata Vikas",
      duration: "1:04:22 min",
      date: "Oct 31, 2024",
      category: "Coconut Industry & FMCG Insights",
      thumbnail:  guest8,
      description: "Discover coconut industry secrets with Vepuri Foods’ Vikas, exploring traditions, innovations, challenges, and surprising business insights.",
      views: "32k",
      youtubeLink: "https://youtu.be/C4-0iwevOY8?si=YEn-RKS9QBRIovEY"
    },
    {
      id: 9,
      title: "Smile Design & Dental Care",
      guest: "Dr. Praneeth Kumar",
      duration: "1:08:54 min",
      date: "Nov 10, 2024",
      category: "Health & Dentistry",
      thumbnail: guest9,
      description: "Explore dental health, smile design trends, and expert tips with Dr. Praneeth Kumar on necessity versus cosmetic choice.",
      views: "4.7k",
      youtubeLink: "https://youtu.be/x7HEwRWvZTQ?si=s7H1RJ9UDkGt4yI5"
    },
    {
      id: 10,
      title: "100 రూపాయలతో కూడా Marketing చెయ్యొచ్చు!",
      guest: "Vivek",
      duration: "1:08:54 min",
      date: "Nov 30, 2024",
      category: "Podcaster vs Marketer",
      thumbnail: guest10,
      description: "Join Vivek in Part 2 as he shares bold marketing strategies, creative insights, and playful branding experiments.",
      views: "943",
      youtubeLink: "https://youtu.be/e0ybzD7FNmo?si=PBqHCYk_lSWPPi3S"
    },
     {
      id: 11,
      title: "మనందరం ఈ Ads చూసేవుంటాం",
      guest: "Yamuna Kishore",
      duration: "1:24:13 min",
      date: "Dec 10, 2024",
      category: "Ad Flimmaker",
      thumbnail: guest11,
      description: "Explore Telugu advertising secrets with Yamuna Kishore, uncovering creative strategies, memorable slogans, and insights for aspiring filmmakers.",
      views: "5k",
      youtubeLink: "https://youtu.be/EVwapJkZuf8?si=JaX2HFc2OAzzhg-P"
    },
     {
      id: 12,
      title: "What to do when your Ideas are copied?",
      guest: "Adithya Saha",
      duration: "50:22 min",
      date: "Dec 21, 2024",
      category: "Business & Intellectual Property",
      thumbnail: guest12,
      description: "Learn how to protect ideas, trademarks, copyrights, and personality rights with insights from Adithya Saha on Intalks.",
      views: "685",
      youtubeLink: "https://youtu.be/sYcJ0WsYVMU?si=zvJWu8JlW0hOXdTj"
    },
    {
      id: 13,
      title: "30 yrs experienced Dermat says “You don’t need Sunscreen!",
      guest: "Dr. D.V.S.B.Rammurthy",
      duration: "1:16:26 min",
      date: "Dec 31, 2024",
      category: "Dermatologist",
      thumbnail: guest13,
      description: "Dr.Rammurthy shares expert skincare tips, debunks myths, and reveals habits for healthy, radiant skin naturally.",
      views: "13k",
      youtubeLink: "https://youtu.be/qyHhRBAksYg?si=6JSrEJHhoezcIkB9"
    },
    {
      id: 14,
      title: "😮ఏంటి మగవాళ్ళు కూడా భరణం తీసుకోవచ్చా 😮?",
      guest: "K.V.Vijaya Kumar",
      duration: "1:36:17 min",
      date: "Jan 21, 2025",
      category: "Legal Advice & Personal Safety",
      thumbnail:  guest14,
      description: "Retired Judge K.V. Vijaya Kumar explains signature pitfalls, real-life legal disputes, and ways to safeguard yourself effectively.",
      views: "5.7k",
      youtubeLink: "https://youtu.be/00gLQbey8_g?si=OeaTyGggBJGXgmdF"
    },
    {
      id: 15,
      title: "Service to humanity is service to God",
      guest: "Rajya Lakshmi",
      duration: "37:24 min",
      date: "Jan 31, 2025",
      category: "Service to humanity",
      thumbnail:  guest15,
      description: "Rajya Lakshmi Vadlamani shares inspiring stories of service, leadership, and making a meaningful difference in the community.",
      views: "7.6k",
      youtubeLink: "https://youtu.be/nlYt7ZDM2eI?si=wmFmfgEaFez-Kdct"
    },
    {
      id: 16,
      title: "₹15 లక్షల అప్పు నుంచి Sweet Success వరుకు!",
      guest: "Dora Raju",
      duration: "1:25:31 min",
      date: "Feb 14, 2025",
      category: "Entrepreneurship & Business Success",
      thumbnail:  guest16,
      description: "Dora Babu shares his journey overcoming ₹15 lakh debt, business challenges, and lessons in ethical entrepreneurship.",
      views: "1.3k",
      youtubeLink: "https://youtu.be/EedTBmAC0oc?si=huKFCU8LTgZF-0Kv"
    },
    {
      id: 17,
      title: "నీ Ice-cream లో Milk Vunda ",
      guest: "Dr. Suhas B Shetty",
      duration: "59:53 min",
      date: "Feb 28, 2025",
      category: "Business & Food Industry",
      thumbnail:  guest17,
      description: "Explore the journey of building a premium organic ice cream brand, overcoming challenges, and thriving in a competitive market.",
      views: "2.5k",
      youtubeLink: "https://youtu.be/XHr2ncS8Seg?si=vWZJwudpuwC-PyHI"
    },
     {
      id: 18,
      title: "😇 Every Women Must Watch",
      guest: "Rama Sita",
      duration: "45:40 min",
      date: "Mar 8, 2025",
      category: "Women’s Empowerment & Personal Growth",
      thumbnail:  guest18,
      description: "Explore an inspiring journey of balancing sports, ambition, and family, highlighting resilience, dedication, and self-discovery.",
      views: "12k",
      youtubeLink: "https://youtu.be/uxOnm6B79ng?si=UtzIAY-FkOTiTliG"
    },
     {
      id: 19,
      title: "Shocking! How a Boatman Earned ₹30Cr & Paid 30% Tax",
      guest: " CA Mahamood Shaik ",
      duration: "1:24:08 min",
      date: "Mar 22, 2025",
      category: "Business & Finance",
      thumbnail:  guest19,  
      description: "Learn essential financial strategies, tax tips, and business structures for startups and entrepreneurs to secure long-term success.",
      views: "2.9k",
      youtubeLink: "https://youtu.be/-GsfH1Evq5k?si=E269IPKmGCTrJfGO"
    },
     {
      id: 20,
      title: "What It Really Takes to Make a Realistic Movie",
      guest: "Raj R",
      duration: "40:32 min",
      date: "Apr 15, 2025",
      category: "Film & Entertainment",
      thumbnail:  guest20,
      description: "Explore behind-the-scenes of Telugu filmmaking, from casting and funding to creative challenges faced by indie filmmakers.",
      views: "3.7k",
      youtubeLink: "https://youtu.be/Nk92Ex-AnyU?si=GVHl0RNQqtt_eFEP"
    },
     {
      id: 21,
      title: "⁠Future లో Malls ఉంటాయా?",
      guest: "Uma Maheshwar",
      duration: "1:17:38 min",
      date: "Apr 30, 2025",
      category: "GV Mall Chairman",
      thumbnail:  guest21,
      description: "Learn how a traditional clothing business modernized, embracing systemization, marketing strategies, and adapting to post-COVID retail changes.",
      views: "10.3k",
      youtubeLink: "https://youtu.be/B9cOn169Xzo?si=nd2pUkBHzDgKbcWW"
    },
     {
      id: 22,
      title: "Vignan Principal On Being A Mother",
      guest: "Dr. V. Anuradha",
      duration: "38:50 min",
      date: "May 11, 2025",
      category: "Parenting & Family",
      thumbnail:  guest22,
      description: "A heartfelt conversation exploring motherhood, parenting challenges, family bonds, discipline, and the unsaid aspects of raising children.",
      views: "1.1k",
      youtubeLink: "https://youtu.be/q1UzxcrmUCQ?si=MNZ8z16OWnCiq6-P"
    },
     {
      id: 23,
      title: "Dr.Vivek On Youth Heart Attack Failures, Post Covid Vaccine Norms",
      guest: "Dr.Vivek",
      duration: "1:20:59 min",
      date: "May 30, 2025",
      category: "Health & Cardiology",
      thumbnail:  guest23,
      description: "Learn to differentiate heart attack from gas pain, recognize cardiac risks, and adopt life-saving heart-healthy habits.",
      views: "4k",
      youtubeLink: "https://youtu.be/JrjFefgv2YI?si=qypL5JdWChWSerW6"
    },
    {
      id: 24,
      title: "Passion, Struggle & Film Industry ",
      guest: "Kiriti Damaraju",
      duration: "51:06 min",
      date: "June 20, 2025",
      category: "Film & Career Stories",
      thumbnail:  guest24,
      description: "Discover the journey of balancing a 9-5 job with acting, overcoming struggles, and pursuing cinematic passion.",
      views: "545",
      youtubeLink: "https://youtu.be/D_J2PVyCSUU?si=twqQmgbwvpUjBpDk"
    },
     {
      id: 25,
      title: "50 Years in Industry, 900+ Films",
      guest: "Annapurnamma",
      duration: "1:38:01 min",
      date: "June 28, 2025",
      category: "Film & Entertainment",
      thumbnail:  guest25,
      description: "Annapurnamma Garu shares her five-decade Telugu cinema journey, insights on acting, legacy, and staying grounded in life.",
      views: "33k",
      youtubeLink: "https://youtu.be/P0eeyHQ5xz8?si=lEkS1OlkGFS59w15"
    },
    {
      id: 26,
      title: "పేదవాడు పేద స్కూల్ లోనే చదవాలా!!!",
      guest: "Ravi Vadlamani",
      duration: "1:08:33 min",
      date: "July 16, 2025",
      category: "Social Impact & Leadership",
      thumbnail:  guest26,
      description: "Discover a journey of service, charity, and community impact, highlighting true success beyond fame and wealth.",
      views: "1.8k",
      youtubeLink: "https://youtu.be/cTILII65dlM?si=Tl8TNE4f2UuRXMeB"
    },
    {
      id: 27,
      title: "గుడులు, సనాతన ధర్మం, సత్యాలు",
      guest: "Sri Santh Sadananda Giri",
      duration: "1:30:28 min",
      date: "July 31, 2025",
      category: "Spirituality & Life Lessons",
      thumbnail:  guest27,
      description: "Swamiji shares profound wisdom on meditation, culture, and timeless life lessons for today’s fast-paced modern world.",
      views: "2.1k",
      youtubeLink: "https://youtu.be/EXf7R4PePmk?si=KHEOV2q3bNtK1G8y"
    },
    {
      id: 28,
      title: "37 ఏళ్లు దేశానికి అంకితం 🔥",
      guest: "Retd Major General Ravi Ravada NSG",
      duration: "1:12:45 min",
      date: "Aug 15, 2025",
      category: "Patriotism & National Security",
      thumbnail:  guest28,  
      description: "Major General Ravi shares inspiring stories of discipline, courage, patriotism, and insights on national security, diplomacy, and leadership.",
      views: "3.1k",
      youtubeLink: "https://youtu.be/u8qEUzabOkE?si=-7x6PXw3MQJfRPXI"
    },
    {
      id: 29,
      title: "Reservation vs Talent: Explained",
      guest: "IAS M Gopala Krishna (Retd)",
      duration: "1:15:17 min",
      date: "Aug 31, 2025",
      category: "Governance & Public Service",
      thumbnail:  guest29,
      description: "An inspiring conversation on UPSC, governance, leadership, and ethics with lessons from decades of public service experience.",
      views: "2.3k",
      youtubeLink: "https://youtu.be/crY9TCPI5hk?si=TlnVk5wSNnMhjIQ6"
    },
  ];

  // -------------------- Dynamic Category List --------------------
  const categories = [
    'All Categories',
    ...Array.from(new Set(episodes.map((e) => e.category))),
  ];

  // -------------------- Filtering --------------------
  const filteredEpisodes = episodes.filter((episode) => {
    const matchesSearch =
      episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      episode.guest.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || episode.category === selectedCategory;
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
            Browse 29+ episodes featuring India&apos;s leading creators,
            entrepreneurs, and brands.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search episodes or guests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
            />
          </div>

          <div className="relative w-full md:w-64">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F7B58D] transition-colors duration-200 bg-white"
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
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Image & Play Button */}
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
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-[#F7B58D] rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-[#111111]" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F7B58D] text-[#111111] px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {episode.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {episode.views} views
                  </span>
                </div>
              </a>

              {/* Title & Description */}
              <div className="p-6">
                <a
                  href={episode.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#F7B58D] transition-colors duration-200 line-clamp-2">
                    {episode.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {episode.description}
                  </p>
                </a>

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

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{episode.date}</span>
                  </div>
                  <a
                    href={episode.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F7B58D] font-medium hover:text-[#F7B58D]/80 transition-colors duration-200"
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
            <div className="w-16 h-16 bg-[#F7B58D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[#F7B58D]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No episodes found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or browse all episodes.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
            >
              View All Episodes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Episodes;