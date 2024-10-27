import React from "react";
import Group from "../../assets/img/group.jpg";

function Title() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:gap-x-8 lg:px-8 grid grid-cols-1 lg:grid-cols-2 space-y-6 space-x-3 justify-items-center items-center">
        <div>
          <h1 className="text-5xl font-bold">
            We’re a passionate group of people working from around the world to
            build the future of ecommerce.
          </h1>
          <p className="mt-4 text-base text-[#DADADA]">
            At the core of our mission is a commitment to excellence and a
            relentless pursuit of innovation. We actively foster an environment
            that not only values collaboration and diversity but celebrates
            them. Our dedication to transparency and integrity in every action
            strengthens the bonds within our community, creating enduring
            relationships that resonate with our shared vision for the future.
          </p>
        </div>
        <img src={Group} className="rounded-lg " width={500} />
      </div>
    </div>
  );
}

export default Title;
