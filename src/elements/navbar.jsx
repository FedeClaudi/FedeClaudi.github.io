import Icon from './Icon';
import federicoImage from '../assets/federico.jpg';


const renderIconLink = (icon, iconStyle, href) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-dark hover:text-primary-darker transition-all duration-300 opacity-75 hover:opacity-100 hover:scale-110"
  >
    <Icon icon={icon} iconStyle={iconStyle} className="text-xl" />
  </a>

  );
};

const Navbar = () => {



  return (
    <nav className="p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Photo, Name, and Social Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* <img
              src={federicoImage}
              alt="Federico Claudi"
              className="w-16 h-16 rounded-full object-cover"
            /> */}
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-6xl font-display text-primary-darker select-none">Federico Claudi</h1>
              <div className="flex space-x-4 mt-2">
                {/* Email */}
                {renderIconLink("envelope", "solid", "mailto:federicoclaudi@protonmail.com")}

                {/* LinkedIn */}
                {renderIconLink("linkedin", "brands", "https://www.linkedin.com/in/federico-claudi-3b31b5262/")}

                {/* X */}
                {renderIconLink("x-twitter", "brands", "https://x.com/Federico_claudi/")}

                {/* GitHub */}
                {renderIconLink("github", "brands", "https://github.com/FedeClaudi")}
              </div>
            </div>
          </div>

          {/* Right side - Navigation Buttons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button className="px-6 py-2 bg-secondary-dark text-salient-light rounded-md hover:bg-secondary-light transition-colors">
              Research
            </button>
            <button className="px-6 py-2 bg-secondary-dark text-salient-light rounded-md hover:bg-secondary-light transition-colors">
              Portfolio
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
