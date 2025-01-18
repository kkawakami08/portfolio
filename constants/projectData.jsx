import positivusPhone from "@/assets/images/positivus-iphone.png";
import rentalLaptop from "@/assets/images/rental-laptop.png";
import rentalDesktop from "@/assets/images/rental.jpg";
import rentalPhone from "@/assets/images/rental-phone.png";
import positivusDesktop from "@/assets/images/positivus-desktop.jpg";
import positivusMobile from "@/assets/images/positivus-phone.png";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoMongodb, BiGitBranch } from "react-icons/bi";
import { SiMongoose, SiFigma } from "react-icons/si";

export const phoneProjects = [
  {
    title: "Modern Landing Page",
    image: positivusPhone,
    desktop: positivusDesktop,
    mobile: positivusMobile,
    points: ["Responsive", "Figma Design File"],
    skills: () => (
      <div className=" flex flex-wrap  w-full items-center text-brand-dark-yellow justify-around gap-2 ">
        <RiNextjsFill className="text-5xl" />
        <RiReactjsFill className="text-5xl" />
        <SiFigma className="text-5xl" />
        <RiTailwindCssFill className="text-5xl" />

        <RiJavascriptFill className="text-5xl" />
        <BiGitBranch className="text-5xl" />
      </div>
    ),
    url: "/projects/#positivus",
    livePreview: "https://positivus-site-phi.vercel.app/",
    github: "https://github.com/kkawakami08/positivus-site",
    description: () => (
      <div className="text-lg font-medium flex flex-col gap-5 py-5 px-3">
        <p>
          This project demonstrates my expertise in transforming design concepts
          into fully functional websites. Using a Figma design file as the
          foundation, I built a dynamic landing page for a marketing company
          using modern web technologies. The project was developed with Next.js
          for optimal performance and SEO, styled using Tailwind CSS for
          responsive design, and leveraged React for interactive components.
        </p>
        <p>Key aspects of this project include:</p>
        <ul className="flex flex-col gap-3  pl-5 font-bold">
          <li>
            - Implementing pixel-perfect design translation from Figma to code
          </li>
          <li>- Ensuring responsive behavior across all device sizes</li>
          <li>
            - Utilizing modern development workflows with Git for version
            control
          </li>
          <li>- Deploying and optimizing the site using Vercel's platform</li>
        </ul>
        <p>
          The end result is a fast, responsive landing page that maintains
          visual fidelity to the original design while providing an optimal user
          experience across desktop and mobile devices.
        </p>
      </div>
    ),
  },
];
export const laptopProjects = [
  {
    title: "Property Rental Site",
    image: rentalLaptop,
    desktop: rentalDesktop,
    mobile: rentalPhone,
    points: ["Full Stack", "Responsive"],
    skills: () => (
      <div className=" flex flex-wrap  w-full lg:justify-start items-center text-brand-dark-yellow justify-center gap-2 ">
        <RiNextjsFill className="text-5xl" />
        <RiReactjsFill className="text-5xl" />
        <RiTailwindCssFill className="text-5xl" />
        <RiJavascriptFill className="text-5xl" />
        <BiLogoMongodb className="text-5xl" />
        <SiMongoose className="text-5xl" />
        <BiGitBranch className="text-4xl" />
      </div>
    ),
    url: "/projects/#rental-properties",
    livePreview: "https://rental-property-pi.vercel.app/",
    github: "https://github.com/kkawakami08/rental-property",
    description: () => (
      <div className="text-lg font-medium flex flex-col gap-5 pt-5 px-3 ">
        <p>
          I developed a comprehensive full-stack property rental platform that
          seamlessly connects property owners with potential tenants. This
          project demonstrates my ability to build complex, user-centric
          applications using modern web technologies and best practices.
        </p>
        <p>
          Built with Next.js, React, and Tailwind CSS on the frontend, the
          application features a responsive and intuitive interface that enables
          users to list properties, search available rentals, and manage their
          favorites through a bookmarking system. The backend architecture
          leverages Next.js server actions and MongoDB with Mongoose for
          efficient data management and retrieval.
        </p>
        <p>Key aspects of this project include:</p>
        <ul className="flex flex-col gap-3 list-disc pl-5 font-bold">
          <li>
            - Implementing secure user authentication using Google OAuth through
            NextAuth.js
          </li>
          <li>
            - Designing and building a real-time messaging system between
            property owners and interested tenants
          </li>
          <li>
            - Creating an advanced search functionality with multiple filtering
            options
          </li>
          <li>
            - Developing a robust property listing system with image handling
          </li>
          <li>
            - Integrating social sharing capabilities across multiple platforms
          </li>
          <li>
            - Building a responsive, mobile-first interface using Tailwind CSS
          </li>
        </ul>
        <p>
          This project showcases my proficiency in full-stack development,
          database design, authentication systems, and creating seamless user
          experiences. The application handles complex data relationships while
          maintaining performance and security.
        </p>
      </div>
    ),
  },
];
