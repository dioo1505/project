import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import devias from "../../assets/devias (1).png";
import overview from "../../assets/overview1.png";
import account from "../../assets/account (1).png";
import analytics from "../../assets/analytics (1).png";
import commerce from "../../assets/e-commerence (1).png";
import crypto from "../../assets/crypto (1).png";
import customers from "../../assets/customers (1).png";
import products from "../../assets/products1.png";
import orders from "../../assets/orders1.png";
import invoices from "../../assets/invoices (1).png";
import logistics from "../../assets/logistics (1).png";
import academy from "../../assets/academy1.png";
import job_listings from "../../assets/job listings (1).png";
import social_media from "../../assets/social media1.png";
import blog from "../../assets/blog (1).png";
import file_manager from "../../assets/file manager (1).png";
import kanban from "../../assets/kanban (1).png";
import mail from "../../assets/mail (1).png";
import calendar from "../../assets/calendar (1).png";
import chat from "../../assets/chat (1).png";

const Sidebar = () => {
  const menuItems = [
    { icon: overview, text: "Overview", to: "/overview" },
    { icon: analytics, text: "Analytics", to: "/analytics" },
    { icon: commerce, text: "E-Commerce", to: "/e-commerce" },
    { icon: crypto, text: "Crypto", to: "/crypto" },
    { icon: account, text: "Account", to: "/account" },
    { icon: customers, text: "Customers", to: "/customers" },
    { icon: products, text: "Products", to: "/products" },
    { icon: orders, text: "Orders", to: "/orders" },
    { icon: invoices, text: "Invoices", to: "/invoices" },
    { icon: logistics, text: "Logistics", to: "/logistics" },
    { icon: academy, text: "Academy", to: "/academy" },
    { icon: job_listings, text: "Job Listings", to: "/job-listings" },
    { icon: social_media, text: "Social Media", to: "/social-media" },
    { icon: blog, text: "Blog", to: "/blog" },
    { icon: file_manager, text: "File Manager", to: "/file-manager" },
    { icon: kanban, text: "Kanban", to: "/kanban" },
    { icon: mail, text: "Mail", to: "/mail" },
    { icon: chat, text: "Chat", to: "/chat" },
    { icon: calendar, text: "Calendar", to: "/calendar" },
  ];

  return (
    <div className="sidebar w-[279px] max-h-[100vh] bg-[#1C2536] fixed overflow-y-auto no-scrollbar">
      <div className="flex items-center justify-between px-[24px] pt-[24px] sticky top-0 z-50 bg-[#1C2536]">
        <div className="flex items-center gap-[15px]">
          <img src={devias} alt="devias" />
          <div>
            <h3 className="font-jakarta font-bold text-[16.7px] leading-[20px] text-[#FFFFFF]">
              Devias
            </h3>
            <span className="font-inter text-[14px] font-normal leading-[21.98px] text-[#9DA4AE]">
              Production
            </span>
          </div>
        </div>
        <MdKeyboardArrowDown className="text-[#6C737F] text-[15px]" />
      </div>

      <div className="mt-[36.38px] px-[16px] flex flex-col justify-center gap-[20px]">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-[16px] w-[247.2px] h-[36px] px-[16px] hover:rounded-[8px] hover:bg-[#252e3e]"
          >
            <img src={item.icon} alt={item.text} />
            <div className="flex justify-between items-center w-full">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `font-inter font-semibold text-[14px] leading-[24px] ${
                    isActive ? "text-[#FFFFFF]" : "text-[#9DA4AE]"
                  } hover:text-[#FFFFFF]`
                }
              >
                {item.text}
              </NavLink>
              {item.to !== "/overview" && (
                <MdKeyboardArrowRight className="text-[#4D5761]" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
