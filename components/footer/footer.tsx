import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const iconsTab = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/hanieh-s-1b384649/",
    },
    { icon: <FaGithub />, href: "https://github.com/thegoodscientist" },
    { icon: <FaKaggle />, href: "https://www.kaggle.com/haniehsalimian" },
  ];
  return (
    <>
      <footer id="footer" className="bg-other mx-full">
        {/* footer div all */}
        <div className="flex flex-col items-center justify-around md:flex-row md:items-start gap-2 md:gap-20 text-left px-5 py-16">
          {/* left div */}
          <div className="flex flex-col w-full md:w-1/4 md:p-1 py-4 gap-6">
            <div className="flex justify-center md:justify-start px-4 md:px-0">
              <p className="text-[15px] font-medium text-[#646464]">
                “How many programmers does it take to change a light bulb? None,
                that&apos;s a hardware problem.”
              </p>
            </div>
            {/* socials */}
            <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
              {iconsTab.map(({ icon, href }, index) => {
                return (
                  <div
                    key={index}
                    className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-tertiary hover:text-white"
                    style={{ transition: "all 0.3s" }}
                  >
                    <a target="_blank" rel="noreferrer" href={href}>
                      {icon}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center md:justify-start">
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Hanieh <br />
                Design by Hanieh
              </p>
            </div>
          </div>
          {/* middle div */}
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[22px] text-[black] font-bold footer-main">
                Get in Touch
              </p>
              <hr className="w-[8.5rem] h-[4px] bg-secondary" />
            </div>
            <div className="flex flex-col items-center justify-center md:items-start">
              <div>
                <p>
                  <Link
                    className="text-[16px] font-bold hover:text-secondary cursor-pointer text-[#646464]"
                    href={`mailto:xxxh@hotmail.com`}
                  >
                    Contact Me
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* right div */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center justify-center md:items-start">
              <div>
                <p className="text-[22px] text-[black] font-bold footer-main">
                  Working Hours
                </p>
              </div>
              <div>
                <hr className="w-[10rem] h-[4px] bg-secondary" />
              </div>
            </div>
            <div className="flex-wrap">
              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:{" "}
                <span className="text-[16px] text-[#646464] font-medium">
                  9:00am - 5:00pm
                </span>
              </p>
            </div>
            <div className="flex-wrap">
              <p className="text-[16px] text-[#646464] font-bold">
                Saturday:{" "}
                <span className="text-[16px] text-[#646464] font-medium">
                  Either doing dev stuff or out socializing
                </span>
              </p>
            </div>
            <div className="flex-wrap">
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday:{" "}
                <span className="text-[16px] text-[#646464] font-medium">
                  Busy adulting
                </span>
              </p>
            </div>
          </div>
          <span></span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
