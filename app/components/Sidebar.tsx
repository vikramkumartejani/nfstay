"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


interface LinkItem {
  href: string;
  label: string;
  icon?: string;
}

interface Links {
  title: string;
  links: LinkItem[];
}

const Sidebar: React.FC = () => {

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
          href: "/chatapp",
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
    <aside className="min-w-[253px] bg-[#F7F6FF] py-8 px-10 lg:block hidden">
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
    </aside>
  );
};

export default Sidebar;
