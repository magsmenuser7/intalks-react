import React from 'react';


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

interface Guest {
  id: number;
  name: string;
  role: string;
  image: string;
  company: string;
}

const GuestWall = () => {
  const guests: Guest[] = [
     {
      id: 1,
      name: "Dr. Rayapati Mamatha",
      role: "Deputy Managing Director of Ramesh Hospitals",
      image: guest1,
      company: "Ramesh Hospitals"
    },
    {
      id: 2,
      name: "Sakku Madhavi",
      role: "member of the Sakku Group",
      image: guest2,
      company: "Sakku Group"
    },
    {
      id: 3,
      name: "Ram",
      role: "Interior Design",
      image: guest3,
      company: "Interior Design"
    },
    {
      id: 4,
      name: "Sridhar",
      role: "IT Founder",
      image: guest4,
      company: "CHS Software Solutions"
    },
    {
      id: 5,
      name: "Dr.Subramanyam",
      role: "Founder Of Shakthi An Ayurvedic Nut Powder",
      image: guest5,
      company: "Founder Of Shakthi An Ayurvedic Nut Powder"
    },
     {
      id: 6,
      name: "Saikesh Goud",
      role: "Country Chicken Co.",
      image: guest6,
      company: "Country Chicken Co."
    },
    {
      id: 7,
      name: "Avinash Chukkapalli",
      role: "Sandal Enthusiast",
      image: guest7,
      company: " Popular Shoe Mart"
    },
    {
      id: 8,
      name: "Venkata Vikas",
      role: "Cocomunzz And Vepuri Agro Products",
      image: guest8,
      company: "Cocomunzz and Vepuri Agro Products"
    },
    {
      id: 9,
      name: "Dr.Praneeth Kumar",
      role: "Dental Surgeon & Smile Design",
      image: guest9,
      company: "Dental Surgeon & Smile Design"
    },
    {
      id: 10,
      name: "Vivek",
      role: "Podcaster vs Marketer",
      image: guest10,
      company: "Podcaster vs Marketer"
    },
    {
      id: 11,
      name: "Yamuna Kishore",
      role: "Ad Flimmaker",
      image: guest11,
      company: "Ad Flimmaker"
    },
    {
      id: 12,
      name: "Adithya Saha",
      role: "Bizrights IP",
      image: guest12,
      company: "Bizrights IP"
    },
    {
      id: 13,
      name: "D.V.S.B.Rammurthy",
      role: "Dermatologist",
      image: guest13,
      company: "Dermatologist"
    },
    {
      id: 14,
      name: "K.V. Vijaya Kumar",
      role: "Retd I.A.S",
      image: guest14,
      company: "Dermatologist"
    },
    {
      id: 15,
      name: "K.V. Vijaya Kumar",
      role: "Retd I.A.S",
      image: guest15,
      company: "Dermatologist"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-[#FDF8EE] via-white to-[#F7B58D]/5 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23F7B58D&quot; fill-opacity=&quot;0.05&quot;%3E%3Cpath d=&quot;M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z&quot;/%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#111111] via-[#F7B58D] to-[#111111] bg-clip-text text-transparent">
            Voices That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet the creators, entrepreneurs, and visionaries shaping India's future
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FDF8EE] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FDF8EE] to-transparent z-10"></div>
          
          <div className="flex space-x-8 animate-scroll">
            {[...guests, ...guests].map((guest, index) => (
              <div
                key={`${guest.id}-${index}`}
                className="group flex-shrink-0 relative transform transition-all duration-500"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#F7B58D]/30 group-hover:border-[#F7B58D] transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#F7B58D]/25">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Card */}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-[#F7B58D]/20 whitespace-wrap z-20 group-hover:-translate-y-7">
                  <p className="font-bold text-sm text-[#111111] mb-1">{guest.name}</p>
                  <p className="text-xs text-gray-600 mb-1">{guest.role}</p>
                  <p className="text-xs text-[#F7B58D] font-medium">{guest.company}</p>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-t border-[#F7B58D]/20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default GuestWall;