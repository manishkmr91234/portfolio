import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const projects = [
  {
    name: "Real Estate Catalog",
    description: "This Real Estate project built with the MERN stack (MongoDB, Express.js, React, Node.js) offers a complete platform to buy, sell, and rent properties. Users can browse property listings, view detailed information, and contact sellers directly. Admins can manage listings and users securely. The app includes user authentication, real-time updates, image uploads, and responsive UI. With efficient data handling and dynamic filtering, it provides a seamless user experience for both buyers and sellers in the real estate market.",
    align: "right",
   
    image: "../../public/images/photo-1582407947304-fd86f028f716.jpeg",
   
    deploymentLink: "https://real-estate-catalog-six.vercel.app/signin",
    link: "https://github.com/manishkmr1234/real-estate-catalog"
  },
  {
    name: "Ecommerce Website",
    description: "This E-commerce project is built using React and Redux, offering a responsive and user-friendly interface for online shopping. It features a dynamic product listing, detailed product pages, and an efficient Add to Cart functionality managed through Redux for seamless state handling. Users can add, view, and remove products from the cart with real-time updates. The application ensures smooth navigation and performance. The tech stack includes React, Redux, JavaScript, and Tailwind CSS, providing a scalable and maintainable structure for future enhancements.",
    align: "left",
    
    image: "../../public/images/ecoom.jpg",

    deploymentLink: "https://ecommercemk.netlify.app",
    link: "https://github.com/manishkmr91234/ecommerce"
  }
];
const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              description={project.description}
              align={project.align}
              image={project.image}
              link={project.link}
              deploymentLink={project.deploymentLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
