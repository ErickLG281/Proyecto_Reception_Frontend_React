import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const values = [
  {
    name: "Be world-class",
    description:
      "Strive for excellence in everything we do, setting the standard for quality and professionalism.",
  },
  {
    name: "Be supportive",
    description:
      "Foster a culture of collaboration and support, valuing each team member's unique contributions.",
  },
  {
    name: "Share everything you know",
    description:
      "Cultivate a transparent and open environment where knowledge is shared freely to empower the entire team.",
  },
  {
    name: "Take responsibility",
    description:
      "Embrace accountability and take ownership of our actions, always seeking solutions and continuous improvement.",
  },
  {
    name: "Always learning",
    description:
      "Promote a growth mindset, continuously seeking opportunities to learn, adapt, and innovate.",
  },
  {
    name: "Enjoy downtime",
    description:
      "Recognize the importance of work-life balance, fostering a positive and enjoyable workplace.",
  },
];

function Values() {
  return (
    <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
      <div>
        <h1 className="text-2xl font-bold">Our Values</h1>
        <p className="mt-4 text-base text-[#DADADA]">
          Committed to excellence, we seek constant innovation. We strive to
          create an environment where collaboration and diversity are
          celebrated. We believe in transparency and integrity in all our
          actions, thus building strong and lasting relationships with our
          community.
        </p>
      </div>
      <div className="mt-12 lg:col-span-2 lg:mt-0">
        <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
          {values.map((values) => (
            <div key={values.name} className="relative">
              <dt>
                <FaRegCheckCircle
                  className="absolute h-6 w-6 text-[#e69d00]"
                />
                <p className="ml-9 text-base font-medium leading-6 text-[#DADADA]">
                  {values.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-sm text-[#dadadae2]">
                {values.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Values;
