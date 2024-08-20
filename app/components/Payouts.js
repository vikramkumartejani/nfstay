import React from "react";

const payoutsData = [
  {
    id: 1,
    img: "/assets/leaderboard.svg",
    propertyName: "Gohard",
    date: "2.4K",
    price: "$1.2M",
    nftsOwned: "+20%",
    payout: "+ $100,000",
    totalPL: "+ $300,000",
  },
  {
    id: 2,
    img: "/assets/leaderboard.svg",
    propertyName: "Gohard",
    date: "2.4K",
    price: "$1.2M",
    nftsOwned: "+20%",
    payout: "+ $100,000",
    totalPL: "+ $300,000",
  },
  {
    id: 3,
    img: "/assets/leaderboard.svg",
    propertyName: "Gohard",
    date: "2.4K",
    price: "$1.2M",
    nftsOwned: "+20%",
    payout: "+ $100,000",
    totalPL: "+ $300,000",
  },
];

const Payouts = () => {
  return (
    <div className="bg-white text-primary-color max-w-[1110px] mx-auto w-full">
      <h2 className="text-[22px] sm:text-[28px] leading-[40.32px] tracking-[-2%] font-[700] text-primary-color pt-[32px] pb-[32px]">
        Top Earners Leaderboard
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white rounded-[14px] md:mb-[108px] table-auto">
          <thead>
            <tr className="text-nowrap">
              <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                {/* Username */}
              </th>
              <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                Username
              </th>
              <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                Fractions Owned
              </th>
              <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                Current Value
              </th>
              <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                Performance
              </th>
              <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                Dividends Received
              </th>
              <th className="text-[#0C0839] text-opacity-50 text-[14px] font-medium font-jakarta leading-[16px] px-[12px] md:px-[25px]">
                Total Profit/Loss
              </th>
            </tr>
          </thead>
          <tbody>
            {payoutsData.map((payout, index) => (
              <tr
                key={index}
                className={`border-[#0C0839] text-nowrap border-opacity-[0.2] ${
                  index !== payoutsData.length - 1 ? "border-b" : ""
                }`}
              >
                <td className="py-[20px] flex items-center">
                  <h1 className="text-[16px] leading-[24px] font-semibold font-jakarta text-[#0C0839] pr-4 md:pr-6">
                    {payout.id}
                  </h1>
                  <img
                    src={payout.img}
                    alt="property"
                    className="w-[32px] h-[32px] md:w-[44px] md:h-[44px] rounded-full mr-2 md:mr-4"
                  />
                  
                </td>

                <td className="px-[50px] sm:px-0 font-[600] text-[14px] md:text-[16px] leading-[23px] text-[#0C0839] py-[20px] text-center">
                    {payout.propertyName}
                </td>

                <td className="font-[600] text-[14px] md:text-[16px] leading-[23px] text-primary-color px-[12px] md:px-[23px] py-[20px] text-center min-w-[126px]">
                  {payout.date}
                </td>
                <td className="font-[600] text-[14px] md:text-[16px] leading-[23px] text-primary-color px-[12px] md:px-[23px] py-[20px] text-center">
                  {payout.price}
                </td>
                <td className="font-[600] text-[14px] md:text-[16px] leading-[23px] text-primary-color px-[12px] md:px-[23px] py-[20px] text-center">
                  {payout.nftsOwned}
                </td>
                <td className="font-[600] text-[14px] md:text-[16px] leading-[23px] text-primary-color px-[12px] md:px-[23px] py-[20px] text-center">
                  {payout.payout}
                </td>
                <td className="font-[600] text-[14px] md:text-[16px] leading-[23px] text-center py-[20px] text-[#43CD61]">
                  {payout.totalPL}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payouts;
