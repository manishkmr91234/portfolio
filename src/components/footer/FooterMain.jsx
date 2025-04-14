import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];

  return (
    <div className="px-4 bg-black text-lightGrey">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-4 max-w-[1200px] mx-auto gap-4">
        <p className="text-2xl md:text-3xl text-lightGrey">Manish Kumar</p>

        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl items-center">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-4 mb-12 text-sm text-lightBrown">
        © 2025 Manish | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
