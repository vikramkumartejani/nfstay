"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

interface LinkItem {
  href: string;
  label: string;
  icon?: string;
}

interface Links {
  title: string;
  links: LinkItem[];
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname();


  const sidebarLinks: Links[] = [
    {
      title: "General",
      links: [
        {
          href: "/",
          label: "Dashboard",
          icon: "/assets/dashboard.svg",
        },
        {
          href: "/box",
          label: "Inbox",
          icon: "/assets/inbox.svg",
        },
        {
          href: "/settings",
          label: "Settings",
          icon: "/assets/settings.svg",
        },
        {
          href: "/Docs",
          label: "Docs",
          icon: "/assets/docs.svg",
        },
      ],
    },
    {
      title: "Buy to Let",
      links: [
        {
          href: "/marketplace",
          label: "Marketplace",
          icon: "/assets/dashboard.svg",
        },
        {
          href: "/upcoming",
          label: "Upcoming",
          icon: "/assets/dashboard.svg",
        },
        {
          href: "/secondary-market",
          label: "Secondary Market",
          icon: "/assets/dashboard.svg",
        },
        {
          href: "/favorites",
          label: "Favorites",
          icon: "/assets/dashboard.svg",
        },
      ],
    },
    {
      title: "Defi",
      links: [
        {
          href: "/overview",
          label: "Overview",
          icon: "/assets/dashboard.svg",
        },
        {
          href: "/Farm (Liquidity)",
          label: "Farm (Liquidity)",
          icon: "/assets/dashboard.svg",
        },
        {
          href: "/printer",
          label: "Printer",
          icon: "/assets/dashboard.svg",
        },
      ],
    },
    {
      title: "My Profile",
      links: [
        {
          href: "/Portfolio",
          label: "Portfolio",
          icon: "/assets/dashboard.svg",
        },
        {
          href: "/Payouts",
          label: "Payouts",
          icon: "/assets/dashboard.svg",
        },
      ],
    },
    {
      title: "Join the team",
      links: [
        {
          href: "/Estate Agent",
          label: "Estate Agent",
          icon: "/assets/dashboard.svg",
        },
      ],
    },
  ];
  return (
    <header className="bg-white border-b border-[#EEEEEE] w-full px-3 sm:px-[35px] h-[100px] flex justify-between items-center">
      <div className="flex items-center gap-2 sm:gap-4">
        <button onClick={toggleMobileMenu} className="lg:hidden block">
          <IoMenu className="w-[35px] h-[35px]" />
        </button>
      </div>

      <div className="flex items-center gap-5">
        <button>
          <Image
            src="/assets/icons/setting-icon.svg"
            alt="setting-icon"
            width={28}
            height={28}
          />
        </button>
        <button>
          <Image
            src="/assets/icons/bell-icon.svg"
            alt="bell-icon"
            width={28}
            height={28}
          />
        </button>
        <button className="bg-custom-gradient text-white h-[50px] w-[170px] px-[14px] rounded-[1111px] md:text-[14px] text-[16px] font-jakarta  leading-[20px] font-semibold flex items-center justify-between ">
          <Image
            src="/assets/profile.svg"
            alt="wallet"
            width={30}
            height={30}
            className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
          />
          1ygqYRB7Q..
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={` absolute top-[100px] left-0 w-full h-fit bg-white shadow-lg flex-col flex transform py-6 px-4 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="mb-8 flex items-center gap-3">
          <Image
            src="/assets/Logo.svg"
            alt="avatar"
            width={149}
            height={32}
          />
        </div>

        <div className="my-14">
          <div className="flex flex-col gap-10 w-full">
            {sidebarLinks.map((section, index) => (
              <div key={index} className="flex flex-col gap-[15px] w-full">
                <h3 className="text-[16px] font-bold text-[#0C0839] font-jakarta">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-[15px]">
                  {section.links.map((link, idx) => (
                    <Link key={idx} href={link.href}>
                      <div className='flex items-center gap-2 w-full rounded-[10px] '>
                        {link.icon && (
                          <Image
                            src={link.icon}
                            alt="icon"
                            width={22}
                            height={22}
                          />
                        )}
                        <h2 className="text-[16px] leading-[20px] font-medium text-[#0C0839] font-jakarta text-opacity-60">
                          {link.label}
                        </h2>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
     
      </div>
    </header>
  );
};

export default Header;
