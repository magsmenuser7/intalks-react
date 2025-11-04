import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
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
import guest30 from "../assets/intalks.podcast-30-2.jpg";
import guest31 from "../assets/intalks-podcast-31.jpg";
import guest32 from "../assets/intalks-podcast-32.jpg";

interface Guest {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  episodes: string[];
  youtubeLink: string;
  episodeNumber: string | number;
}

const Guests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const guests: Guest[] = [
      {
    id: 1,
    name: "Dr. Rayapati Mamatha",
    role: "Healthcare Leadership",
    company: "YouTube Creator",
    image: guest1,
    episodes: ["From Medicine to Management"],
    youtubeLink: "https://youtu.be/9cgx45gJfE8?si=rEFz2FyR26shhk7X",
    episodeNumber: 1,
  },
  {
    id: 2,
    name: "Sakku Madhavi",
    role: "Business & Entrepreneurship",
    company: "Sakku Group",
    image: guest2,
    episodes: ["Empowering Women in Business"],
    youtubeLink: "https://youtu.be/xeMl0V16CHU?si=2QwR-iZ-mORi6OYr",
    episodeNumber: 2, 
  },
  {
    id: 3,
    name: "Ram",
    role: "Interior Design",
    company: "Interior Design",
    image: guest3,
    episodes: ["Redefining Interiors: Tradition Meets Modern"],
    youtubeLink: "https://youtu.be/Y2ABoUuEkSw?si=dDAR-CBp-wIidhTx",
    episodeNumber: 3,
  },
  {
    id: 4,
    name: "Sridhar",
    role: "IT Founder",
    company: "CSH Software Solutions",
    image: guest4,
    episodes: ["AI Insights with Sridhar"],
    youtubeLink: "https://youtu.be/Tu1Z5w_lEqo?si=KJ2LTwpXYLIZIUhJ",
    episodeNumber: 4,
  },
  {
    id: 5,
    name: "Dr.Subramanyam",
    role: "Shakthi an Ayurvedic Nut Powder",
    company: "Shakthi an Ayurvedic Nut Powder",
    image: guest5,
    episodes: ["Ayurveda Reinvented with Shakthi"],
    youtubeLink: "https://youtu.be/VLAvgT2WUJI?si=ebYECzJURxKcQgmG",
    episodeNumber: 5,
  },
  {
    id: 6,
    name: "Saikesh Goud",
    role: "Creators",
    company: "Clean Chicken Revolution",
    image: guest6,
    episodes: ["Clean Chicken Revolution with Saikesh"],
    youtubeLink: "https://youtu.be/N0MHDT29Gsk?si=afC5Wjai32xaom4k",
    episodeNumber: 6,
  },
  {
    id: 7,
    name: "Avinash Chukkapalli",
    role: "Fashion & Lifestyle",
    company: "Stepping Into Style",
    image: guest7,
    episodes: ["Stepping Into Style"],
    youtubeLink: "https://youtu.be/C4-0iwevOY8?si=YEn-RKS9QBRIovEY",
    episodeNumber: 7,
  },
  {
    id: 8,
    name: "Venkata Vikas",
    role: "Coconut Industry & FMCG Insights",
    company: "Vepuri Foods",
    image: guest8,
    episodes: ["Cracking the Coconut Code"],
    youtubeLink: "https://youtu.be/C4-0iwevOY8?si=YEn-RKS9QBRIovEY",
    episodeNumber: 8,
  },
  {
    id: 9,
    name: "Dr. Praneeth Kumar",
    role: "Health & Dentistry",
    company: "Smile Design & Dental Care",
    image: guest9,
    episodes: ["Smile Design & Dental Care"],
    youtubeLink: "https://youtu.be/x7HEwRWvZTQ?si=s7H1RJ9UDkGt4yI5",
    episodeNumber: 9,
  },
  {
    id: 10,
    name: "Vivek",
    role: "Podcaster vs Marketer",
    company: "Marketing",
    image: guest10,
    episodes: ["100 రూపాయలతో కూడా Marketing చెయ్యొచ్చు!"],
    youtubeLink: "https://youtu.be/e0ybzD7FNmo?si=PBqHCYk_lSWPPi3S",
    episodeNumber: 10,
  },
  {
    id: 11,
    name: "Yamuna Kishore",
    role: "Ad Flimmaker",
    company: "Advertising",
    image: guest11,
    episodes: ["మనందరం ఈ Ads చూసేవుంటాం"],
    youtubeLink: "https://youtu.be/EVwapJkZuf8?si=JaX2HFc2OAzzhg-P",
    episodeNumber : 11,
  },
  {
    id: 12,
    name: "Adithya Saha",
    role: "Business & Intellectual Property",
    company: "Intellectual Property",
    image:  guest12,
    episodes: ["What to do when your Ideas are copied?"],
    youtubeLink: "https://youtu.be/sYcJ0WsYVMU?si=zvJWu8JlW0hOXdTj",
    episodeNumber: 12,
  },
  {
    id: 13,
    name: "Dr. D.V.S.B.Rammurthy",
    role: "Dermatologist",
    company: "Skin & Health",
    image:  guest13,
    episodes: ["30 yrs experienced Dermat says “You don’t need Sunscreen!"],
    youtubeLink: "https://youtu.be/qyHhRBAksYg?si=6JSrEJHhoezcIkB9",
    episodeNumber: 13,
  },
  {
    id: 14,
    name: "K.V.Vijaya Kumar",
    role: "Legal Advice & Personal Safety",
    company: "Retired Judge",
    image: guest14,
    episodes: ["ఏంటి మగవాళ్ళు కూడా భరణం తీసుకోవచ్చా?"],
    youtubeLink: "https://youtu.be/00gLQbey8_g?si=OeaTyGggBJGXgmdF",
    episodeNumber: 14,
  },
  {
    id: 15,
    name: "Rajya Lakshmi",
    role: "Service to humanity",
    company: "Community Service",
    image: guest15,
    episodes: ["Service to humanity is service to God"],
    youtubeLink: "https://youtu.be/nlYt7ZDM2eI?si=wmFmfgEaFez-Kdct",
    episodeNumber : 15,
  },
  {
    id: 16,
    name: "Dora Raju",
    role: "Entrepreneurship & Business Success",
    company: "Entrepreneur",
    image: guest16,
    episodes: ["₹15 లక్షల అప్పు నుంచి Sweet Success వరుకు!"],
    youtubeLink: "https://youtu.be/EedTBmAC0oc?si=huKFCU8LTgZF-0Kv",
    episodeNumber: 16,
  },
  {
    id: 17,
    name: "Dr. Suhas B Shetty",
    role: "Business & Food Industry",
    company: "Ice Cream Brand",
    image: guest17,
    episodes: ["నీ Ice-cream లో Milk Vunda"],
    youtubeLink: "https://youtu.be/XHr2ncS8Seg?si=vWZJwudpuwC-PyHI",
    episodeNumber: 17,
  },
  {
    id: 18,
    name: "Rama Sita",
    role: "Women’s Empowerment & Personal Growth",
    company: "Sports & Family",
    image: guest18,
    episodes: ["Every Women Must Watch"],
    youtubeLink: "https://youtu.be/uxOnm6B79ng?si=UtzIAY-FkOTiTliG",
    episodeNumber: 18,
  },
  {
    id: 19,
    name: "CA Mahamood Shaik",
    role: "Business & Finance",
    company: "Chartered Accountant",
    image: guest19,
    episodes: ["Shocking! How a Boatman Earned ₹30Cr & Paid 30% Tax"],
    youtubeLink: "https://youtu.be/-GsfH1Evq5k?si=E269IPKmGCTrJfGO",
    episodeNumber: 19,
  },
  {
    id: 20,
    name: "Raj R",
    role: "Film & Entertainment",
    company: "Filmmaker",
    image: guest20,
    episodes: ["What It Really Takes to Make a Realistic Movie"],
    youtubeLink: "https://youtu.be/Nk92Ex-AnyU?si=GVHl0RNQqtt_eFEP",
    episodeNumber: 20,
  },
  {
    id: 21,
    name: "Uma Maheshwar",
    role: "GV Mall Chairman",
    company: "GV Mall",
    image: guest21, 
    episodes: ["Future లో Malls ఉంటాయా?"],
    youtubeLink: "https://youtu.be/B9cOn169Xzo?si=nd2pUkBHzDgKbcWW",
    episodeNumber: 21,
  },
  {
    id: 22,
    name: "Dr. V. Anuradha",
    role: "Parenting & Family",
    company: "Vignan",
    image: guest22,
    episodes: ["Vignan Principal On Being A Mother"],
    youtubeLink: "https://youtu.be/q1UzxcrmUCQ?si=MNZ8z16OWnCiq6-P",
    episodeNumber: 22,
  },
  {
    id: 23,
    name: "Dr.Vivek",
    role: "Health & Cardiology",
    company: "Cardiologist",
    image: guest23,
    episodes: ["Youth Heart Attack Failures, Post Covid Vaccine Norms"],
    youtubeLink: "https://youtu.be/JrjFefgv2YI?si=qypL5JdWChWSerW6",
    episodeNumber: 23,
  },
  {
    id: 24,
    name: "Kiriti Damaraju",
    role: "Film & Career Stories",
    company: "Actor",
    image: guest24,
    episodes: ["Passion, Struggle & Film Industry"],
    youtubeLink: "https://youtu.be/D_J2PVyCSUU?si=twqQmgbwvpUjBpDk",
    episodeNumber: 24,
  },
  {
    id: 25,
    name: "Annapurnamma",
    role: "Film & Entertainment",
    company: "Actress",
    image: guest25,
    episodes: ["50 Years in Industry, 900+ Films"],
    youtubeLink: "https://youtu.be/P0eeyHQ5xz8?si=lEkS1OlkGFS59w15",
    episodeNumber: 25,
  },
  {
    id: 26,
    name: "Ravi Vadlamani",
    role: "Social Impact & Leadership",
    company: "Education",
    image: guest26,
    episodes: ["పేదవాడు పేద స్కూల్ లోనే చదవాలా!!!"],
    youtubeLink: "https://youtu.be/cTILII65dlM?si=Tl8TNE4f2UuRXMeB",
    episodeNumber: 26,
  },
  {
    id: 27,
    name: "Sri Santh Sadananda Giri",
    role: "Spirituality & Life Lessons",
    company: "Spiritual Leader",
    image: guest27,
    episodes: ["గుడులు, సనాతన ధర్మం, సత్యాలు"],
    youtubeLink: "https://youtu.be/EXf7R4PePmk?si=KHEOV2q3bNtK1G8y",
    episodeNumber: 27,
  },
  {
    id: 28,
    name: "Retd Major General Ravi Ravada NSG",
    role: "Patriotism & National Security",
    company: "Indian Army",
    image: guest28,
    episodes: ["37 ఏళ్లు దేశానికి అంకితం 🔥"],
    youtubeLink: "https://youtu.be/u8qEUzabOkE?si=-7x6PXw3MQJfRPXI",
    episodeNumber: 28,
  },
  {
    id: 29,
    name: "IAS M Gopala Krishna (Retd)",
    role: "Governance & Public Service",
    company: "IAS Officer",
    image: guest29,
    episodes: ["Reservation vs Talent: Explained"],
    youtubeLink: "https://youtu.be/crY9TCPI5hk?si=TlnVk5wSNnMhjIQ6",
    episodeNumber: 29,
  },
  {
    id: 30,
    name: "V S R Murthy",
    role: "Spirituality & Science",
    company: "IAS Officer",
    image: guest30,
    episodes: ["Does God Exist?"],
    youtubeLink: "https://www.youtube.com/watch?v=sXHux49QGsk",
    episodeNumber: 30,
  },
  {
    id: 31,
    name: "J.A. Chowdary",
    role: "Technology & Leadership",
    company: "IAS Officer",
    image: guest31,
    episodes: ["JA Chowdary on Layoffs, AI, Andhra Future"],
    youtubeLink: "https://www.youtube.com/watch?v=y1EV-SqsX7c&t=924s",
    episodeNumber: 31,
  },
  {
    id: 32,
    name: "Ghazal Srinivas",
    role: "Music & Peace",
    company: "IAS Officer",
    image: guest32,
    episodes: ["పదాలకు అతీతమైన సంగీత అనుభూతి"],
    youtubeLink: "https://www.youtube.com/watch?v=DsPnkfaniTE&t=1681s",
    episodeNumber: 32,
  }
  ];

    // Generate role list dynamically
  const roleCategories = Array.from(new Set(guests.map((g) => g.role.toLowerCase())));
  const categories = ['all', ...roleCategories];

  const filteredGuests = guests.filter((guest) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      guest.name.toLowerCase().includes(search) ||
      guest.role.toLowerCase().includes(search) ||
      guest.company.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === 'all' ||
      guest.role.toLowerCase() === selectedCategory;

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

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search guests by name, role, or company..."
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
                  {cat === 'all' ? 'All Roles' : cat.charAt(0).toUpperCase() + cat.slice(1)}
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Image clickable */}
              <a href={guest.youtubeLink} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <div className="overflow-hidden">
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-52 object-cover"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#F7B58D] text-[#111111] px-3 py-1 rounded-full text-sm font-medium">
                      Episode {guest.episodeNumber}
                    </span>
                  </div>
                </div>
              </a>

              {/* Name + Button */}
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-bold">{guest.name}</h3>
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
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
            >
              View All Guests
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#F7B58D]/10 via-white to-[#F7B58D]/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Join This Community?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you have insights that can inspire creators and brands, we'd love to have you on InTalks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/become-guest"
              className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
            >
              Become a Guest
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-[#F7B58D] text-[#F7B58D] font-medium rounded-lg hover:bg-[#F7B58D] hover:text-[#111111] transition-colors duration-200"
            >
              Recommend Someone
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;







// import React, { useState } from 'react';
// import { Search, Filter, ExternalLink, Linkedin, Instagram, Youtube } from 'lucide-react';

// interface Guest {
//   id: number;
//   name: string;
//   role: string;
//   company: string;
//   image: string;
//   bio: string;
//   expertise: string[];
//   social: {
//     linkedin?: string;
//     instagram?: string;
//     youtube?: string;
//     website?: string;
//   };
//   episodes: string[];
// }

// const Guests = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const categories = ['all', 'creators', 'brands', 'founders', 'influencers', 'strategists'];

//   const guests: Guest[] = [
//     {
//       id: 1,
//       name: "Priya Sharma",
//       role: "Content Creator",
//       company: "YouTube Creator",
//       image: "src/assets/intalks-podcast-1.jpg",
//       bio: "Building India's creator economy through authentic storytelling and strategic brand partnerships.",
//       expertise: ["Content Strategy", "Brand Partnerships", "Audience Growth"],
//       social: {
//         linkedin: "#",
//         instagram: "#",
//         youtube: "#"
//       },
//       episodes: ["Building India's Creator Economy"]
//     },
//     {
//       id: 2,
//       name: "Rajesh Kumar",
//       role: "Marketing Director",
//       company: "Brand Studio",
//       image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
//       bio: "Strategic marketing leader with 10+ years of experience in creator-brand collaborations.",
//       expertise: ["Brand Strategy", "Influencer Marketing", "ROI Optimization"],
//       social: {
//         linkedin: "#",
//         website: "#"
//       },
//       episodes: ["Brand Partnerships That Actually Work"]
//     },
//     {
//       id: 3,
//       name: "Ananya Patel",
//       role: "Digital Influencer",
//       company: "Fashion & Lifestyle",
//       image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
//       bio: "Fashion influencer turned entrepreneur, building sustainable creator businesses.",
//       expertise: ["Fashion", "Lifestyle", "Personal Branding"],
//       social: {
//         instagram: "#",
//         youtube: "#",
//         linkedin: "#"
//       },
//       episodes: ["The Future of Influence Marketing"]
//     },
//     {
//       id: 4,
//       name: "Vikram Singh",
//       role: "Startup Founder",
//       company: "TechCorp",
//       image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
//       bio: "Serial entrepreneur and startup ecosystem builder with 3 successful exits.",
//       expertise: ["Entrepreneurship", "Tech Startups", "Scaling"],
//       social: {
//         linkedin: "#",
//         website: "#"
//       },
//       episodes: ["From Zero to Million: A Startup Journey"]
//     },
//     {
//       id: 5,
//       name: "Neha Gupta",
//       role: "Brand Strategist",
//       company: "Creative Agency",
//       image: "https://images.pexels.com/photos/3184288/pexels-photo-3184288.jpeg",
//       bio: "Creative strategist helping brands navigate the digital-first consumer landscape.",
//       expertise: ["Creative Strategy", "Digital Marketing", "Consumer Insights"],
//       social: {
//         linkedin: "#",
//         instagram: "#"
//       },
//       episodes: ["Creative Strategy in the Digital Age"]
//     },
//     {
//       id: 6,
//       name: "Arjun Mehta",
//       role: "Digital Creator",
//       company: "Social Media",
//       image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg",
//       bio: "Viral content creator and social media strategist with 5M+ followers.",
//       expertise: ["Viral Content", "Social Media Strategy", "Community Building"],
//       social: {
//         instagram: "#",
//         youtube: "#",
//         linkedin: "#"
//       },
//       episodes: ["The Art of Viral Content Creation"]
//     }
//   ];

//   const filteredGuests = guests.filter(guest => {
//     const matchesSearch = guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          guest.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          guest.company.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || guest.role.toLowerCase().includes(selectedCategory);
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="min-h-screen pt-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Voices That Matter</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Meet the creators, entrepreneurs, and visionaries shaping India's creator economy.
//           </p>
//         </div>

//         {/* Search and Filters */}
//         <div className="flex flex-col md:flex-row gap-4 mb-12">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search guests by name, role, or company..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F7B58D] transition-colors duration-200"
//             />
//           </div>
          
//           <div className="flex items-center gap-2">
//             <Filter className="w-5 h-5 text-gray-400" />
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#F7B58D] transition-colors duration-200 bg-white"
//             >
//               <option value="all">All Roles</option>
//               <option value="creators">Creators</option>
//               <option value="brands">Brand Leaders</option>
//               <option value="founders">Founders</option>
//               <option value="influencers">Influencers</option>
//               <option value="strategists">Strategists</option>
//             </select>
//           </div>
//         </div>

//         {/* Guests Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredGuests.map((guest) => (
//             <div key={guest.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
//               <div className="relative">
//                 <div className="aspect-square overflow-hidden">
//                   <img
//                     src={guest.image}
//                     alt={guest.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="absolute top-4 right-4">
//                   <span className="bg-[#F7B58D] text-[#111111] px-3 py-1 rounded-full text-sm font-medium">
//                     {guest.episodes.length} Episode{guest.episodes.length !== 1 ? 's' : ''}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{guest.name}</h3>
//                 <p className="text-[#F7B58D] font-medium mb-1">{guest.role}</p>
//                 <p className="text-gray-600 text-sm mb-4">{guest.company}</p>
                
//                 <p className="text-gray-700 mb-4 line-clamp-3">{guest.bio}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {guest.expertise.slice(0, 2).map((skill, index) => (
//                     <span key={index} className="bg-[#F7B58D]/10 text-[#F7B58D] px-2 py-1 rounded-full text-xs font-medium">
//                       {skill}
//                     </span>
//                   ))}
//                   {guest.expertise.length > 2 && (
//                     <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
//                       +{guest.expertise.length - 2} more
//                     </span>
//                   )}
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                   <div className="flex space-x-3">
//                     {guest.social.linkedin && (
//                       <a href={guest.social.linkedin} className="text-gray-400 hover:text-[#F7B58D] transition-colors duration-200">
//                         <Linkedin className="w-4 h-4" />
//                       </a>
//                     )}
//                     {guest.social.instagram && (
//                       <a href={guest.social.instagram} className="text-gray-400 hover:text-[#F7B58D] transition-colors duration-200">
//                         <Instagram className="w-4 h-4" />
//                       </a>
//                     )}
//                     {guest.social.youtube && (
//                       <a href={guest.social.youtube} className="text-gray-400 hover:text-[#F7B58D] transition-colors duration-200">
//                         <Youtube className="w-4 h-4" />
//                       </a>
//                     )}
//                     {guest.social.website && (
//                       <a href={guest.social.website} className="text-gray-400 hover:text-[#F7B58D] transition-colors duration-200">
//                         <ExternalLink className="w-4 h-4" />
//                       </a>
//                     )}
//                   </div>
                  
//                   <button className="text-[#F7B58D] font-medium hover:text-[#F7B58D]/80 transition-colors duration-200">
//                     View Episodes →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredGuests.length === 0 && (
//           <div className="text-center py-12">
//             <div className="w-16 h-16 bg-[#F7B58D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Search className="w-8 h-8 text-[#F7B58D]" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">No guests found</h3>
//             <p className="text-gray-600 mb-4">
//               Try adjusting your search terms or browse all our amazing guests.
//             </p>
//             <button
//               onClick={() => {
//                 setSearchTerm('');
//                 setSelectedCategory('all');
//               }}
//               className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
//             >
//               View All Guests
//             </button>
//           </div>
//         )}

//         {/* CTA Section */}
//         <div className="mt-16 bg-gradient-to-r from-[#F7B58D]/10 via-white to-[#F7B58D]/10 rounded-2xl p-8 text-center">
//           <h2 className="text-2xl font-bold mb-4">Want to Join This Community?</h2>
//           <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//             If you have insights that can inspire creators and brands, we'd love to have you on InTalks.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/become-guest"
//               className="px-6 py-3 bg-[#F7B58D] text-[#111111] font-medium rounded-lg hover:bg-[#F7B58D]/90 transition-colors duration-200"
//             >
//               Become a Guest
//             </a>
//             <a
//               href="/contact"
//               className="px-6 py-3 border-2 border-[#F7B58D] text-[#F7B58D] font-medium rounded-lg hover:bg-[#F7B58D] hover:text-[#111111] transition-colors duration-200"
//             >
//               Recommend Someone
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Guests;