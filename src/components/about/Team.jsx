import React from "react";

const profiles = [
  {
    id: 1,
    name: "Samuel Soriano",
    role: "Full Stack Developer",
    location: "Tarma, Peru",
    imageUrl: "https://i.postimg.cc/G2PrCkMW/samuel.jpg",
  },
  {
    id: 2,
    name: "Erick Lozano",
    role: "Full Stack Developer",
    location: "Tarma, Peru",
    imageUrl: "https://i.postimg.cc/ZK031JZ4/erick.jpg",
  },
  {
    id: 3,
    name: "Alexander Urquizo",
    role: "Frontend Developer",
    location: "Tarma, Peru",
    imageUrl: "https://i.postimg.cc/mgNfYfqW/alex.jpg",
  },
  {
    id: 4,
    name: "Andy Perales",
    role: "Frontend Developer",
    location: "Tarma, Peru",
    imageUrl: "https://i.postimg.cc/YSq2TN3W/andy-2023.jpg",
  },
  {
    id: 5,
    name: "Marco Espinoza",
    role: "Frontend Developer",
    location: "Tarma, Peru",
    imageUrl: "https://i.postimg.cc/nz8nvxcZ/marco.jpg",
  },
];

function Team() {
  return (
    <div className="relative mx-auto max-w-7xl p-4 mb-20">
      <div>
        <h1 className="text-2xl font-bold">Our Team</h1>
        <p className="mt-4 text-base text-[#DADADA]">
          Get to know the passionate individuals who make up our team. Committed
          to excellence, we seek constant innovation and thrive in a
          collaborative and diverse environment. Explore the unique talents and
          personalities that contribute to our success.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
        {profiles.map((profile) => (
          <div key={profile.id} className="space-y-2">
            <div className="relative max-w-sm overflow-hidden rounded-lg">
              <img
                className="transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 blur-sm hover:blur-none"
                src={profile.imageUrl}
                alt={profile.name}
                width={200}
                height={200}
              />
            </div>

            <div className="flex-grow ml-2">
              <h2 className="title-font font-medium text-base text-[#DADADA]">
                {profile.name}
              </h2>
              <h3 className="text-[#dadadae2] font-normal text-sm">
                {profile.role}
              </h3>
              <p className="text-[#dadadab8] text-xs font-light">
                {profile.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
