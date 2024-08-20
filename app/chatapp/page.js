import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

const ChatList = () => {
  return (
    <div className="md:w-1/3 w-full h-screen border-r border-[#0C0839] border-opacity-[0.1] px-[25px] py-[38px]">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Chat"
          className="w-full pl-[16px] pr-[40px] py-[15px] text-[#0C0839] border rounded-[14px] bg-[#F5F5F5] text-[14px]"
        />
        <span className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-[#0C0839] text-opacity-[0.3]">
          <FiSearch size={20} />
        </span>
      </div>

      <div className="overflow-y-auto pt-[27px]">
        {/* Repeat this block for each chat */}
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer border-b border-[#0C0839] border-opacity-[0.2]">
          <div className="flex items-center gap-[16px] pb-[16px]">
            <img
              src="/assets/chat-profile2.jpg"
              alt="User"
              className="w-[64px] h-[64px] rounded-full object-top object-cover"
            />
            <div className="flex flex-col gap-[8px] text-primary-color">
              <p className="text-[16px] leading-[20.16px] font-[700]">
                Candy Bosley
              </p>
              <p className="text-[16px] font-[500] leading-[20.16px] opacity-[0.6] overflow-hidden whitespace-nowrap text-ellipsis max-w-[165px]">
                Wow, that's okay, really, where are we going on vacation?
              </p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-[12px] mt-[-6px]">
            <p className="text-[12px] font-[500] leading-[15.12px] text-primary-color opacity-[0.6]">
              02.30
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer border-b border-[#0C0839] border-opacity-[0.2]">
          <div className="flex items-center gap-[16px] pb-[16px]">
            <img
              src="/assets/chat-profile3.jpg"
              alt="User"
              className="w-[64px] h-[64px] rounded-full object-top object-cover"
            />
            <div className="flex flex-col gap-[8px] text-primary-color">
              <p className="text-[16px] leading-[20.16px] font-[700]">
                James Aaron
              </p>
              <p className="text-[16px] font-[500] leading-[20.16px] opacity-[0.6] overflow-hidden whitespace-nowrap text-ellipsis max-w-[165px]">
                Michele, let's go for the party
              </p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-[12px] mt-[-6px]">
            <p className="text-[12px] font-[500] leading-[15.12px] text-primary-color opacity-[0.6]">
              10:45
            </p>
            <span className="w-fit text-right text-[12px] leading-[15.12px] text-white bg-[#954AFC] rounded-full px-[9px] py-[4.5px]">
              7
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer border-b border-[#0C0839] border-opacity-[0.2]">
          <div className="flex items-center gap-[16px] pb-[16px]">
            <img
              src="/assets/chat-profile4.jpg"
              alt="User"
              className="w-[64px] h-[64px] rounded-full object-top object-cover"
            />
            <div className="flex flex-col gap-[8px] text-primary-color">
              <p className="text-[16px] leading-[20.16px] font-[700]">
                Adrian Jhonson
              </p>
              <p className="text-[16px] font-[500] leading-[20.16px] opacity-[0.6] overflow-hidden whitespace-nowrap text-ellipsis max-w-[165px]">
                Wow, that's okay, really, where are we going on vacation?
              </p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-[12px] mt-[-6px]">
            <p className="text-[12px] font-[500] leading-[15.12px] text-primary-color opacity-[0.6]">
              10:45
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer border-b border-[#0C0839] border-opacity-[0.2]">
          <div className="flex items-center gap-[16px] pb-[16px]">
            <img
              src="/assets/chat-profile5.jpg"
              alt="User"
              className="w-[64px] h-[64px] rounded-full object-top object-cover"
            />
            <div className="flex flex-col gap-[8px] text-primary-color">
              <p className="text-[16px] leading-[20.16px] font-[700]">
                James Aaron
              </p>
              <p className="text-[16px] font-[500] leading-[20.16px] opacity-[0.6] overflow-hidden whitespace-nowrap text-ellipsis max-w-[165px]">
                Michele, let's go for the party
              </p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-[12px] mt-[-6px]">
            <p className="text-[12px] font-[500] leading-[15.12px] text-primary-color opacity-[0.6]">
              10:45
            </p>
            <span className="w-fit text-right text-[12px] leading-[15.12px] text-white bg-[#954AFC] rounded-full px-[9px] py-[4.5px]">
              7
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer border-b border-[#0C0839] border-opacity-[0.2]">
          <div className="flex items-center gap-[16px] pb-[16px]">
            <img
              src="/assets/chat-profile6.jpg"
              alt="User"
              className="w-[64px] h-[64px] rounded-full object-top object-cover"
            />
            <div className="flex flex-col gap-[8px] text-primary-color">
              <p className="text-[16px] leading-[20.16px] font-[700]">
                Adrian Jhonson
              </p>
              <p className="text-[16px] font-[500] leading-[20.16px] opacity-[0.6] overflow-hidden whitespace-nowrap text-ellipsis max-w-[165px]">
                Wow, that's okay, really, where are we going on vacation?
              </p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-[12px] mt-[-6px]">
            <p className="text-[12px] font-[500] leading-[15.12px] text-primary-color opacity-[0.6]">
              10:45
            </p>
          </div>
        </div>
        {/* Repeat this block ends */}
      </div>
    </div>
  );
};

const Conversation = () => {
  return (
    <div className="md:w-2/3 w-full h-screen flex flex-col text-primary-color">
      <div className="flex items-center justify-between pt-[32px] pb-[27px] px-[25px]">
        <div className="flex items-center gap-[16px]">
          <img
            src="/assets/chat-profile2.jpg"
            alt="User"
            className="w-[65px] h-[65px] rounded-full object-top object-cover"
          />
          <div className="flex flex-col gap-[8px] text-primary-color">
            <p className="text-[16px] leading-[20.16px] font-[700]">
              Candy Bosley
            </p>
            <p className="text-[16px] font-[500] leading-[20.16px] opacity-[0.6]">
              Last seen Yesterday 02.30 PM
            </p>
          </div>
        </div>
        <button className="text-primary-color pb-[3px] text-opacity-[0.5] rotate-[90deg] bg-[#F5F5F5] rounded-full text-[12px] w-[48px] h-[48px] hover:text-gray-600">
          •••
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-[25px] bg-[#F5F5F5]">
        {/* Repeat this block for each message */}
        <div className="flex items-start gap-[13px] mb-[24px]">
          <img
            src="/assets/chat-profile2.jpg"
            alt="User"
            className="w-[50px] h-[50px] rounded-full object-cover object-top"
          />
          <div className="flex flex-col gap-[4px] text-primary-color">
            <p className="text-[16px] leading-[20.16px] font-[700]">
              Candy Bosley
            </p>
            <p className="text-[12px] font-[500] leading-[15.12px] opacity-[0.6]">
              08.00 AM
            </p>
            <p className="text-[16px] font-[500] leading-[20.16px] w-fit text-primary-color px-[16px] py-[14px] rounded-r-full text-opacity-[0.6] rounded-b-full mt-[10px] bg-[#FFFFFF]">
              Id ut varius quis aliquet mattis ante eget.
            </p>
            <p className="text-[16px] font-[500] leading-[20.16px] w-fit text-primary-color px-[16px] py-[14px] rounded-r-full text-opacity-[0.6] rounded-b-full mt-[10px] bg-[#FFFFFF]">
              Nulla pellentesque senectus fames eu facilisis.
            </p>
          </div>
        </div>
        <div className="flex items-end flex-col justify-end mb-[24px]">
          <div className="flex items-start  gap-[13px]">
            <div className="flex flex-col items-end gap-[4px] text-primary-color">
              <p className="text-[16px] leading-[20.16px] font-[700]">You</p>
              <p className="text-[12px] font-[500] leading-[15.12px] opacity-[0.6]">
                09:45 AM
              </p>
            </div>
            <img
              src="/assets/chat-profile.jpg"
              alt="User"
              className="w-[50px] h-[50px] rounded-full object-top object-cover"
            />
          </div>
          <p className="text-[16px] font-[500] text-white leading-[20.16px] w-fit px-[16px] py-[14px] rounded-l-full rounded-b-full mt-[10px] bg-[#954AFC]">
            Ok thanks for the progress update
          </p>
          <p className="text-[16px] font-[500] text-white leading-[20.16px] w-fit px-[16px] py-[14px] rounded-l-full rounded-b-full mt-[10px] bg-[#954AFC]">
            Wow, that's okay, really, where are we going on vacation?
          </p>
        </div>
        {/* Repeat this block ends */}
      </div>
      <div className="px-[25px] pb-[30px] flex items-center bg-[#F5F5F5]">
        <div className="relative flex-1 w-full border rounded-full bg-white">
          <span className="absolute left-[23px] top-1/2 transform -translate-y-1/2 text-[#0C0839] text-opacity-[0.4]">
            <CiFaceSmile size={27} />
          </span>
          <div className="absolute left-[65px] bg-[#0C0839] opacity-[0.2] flex h-[32px] top-1/2 transform -translate-y-1/2 w-[1.5px]"></div>
          <input
            type="text"
            placeholder="Type Your Message Here..."
            className="w-[80%] ms-[60px] px-[20px] h-[64px] bg-transparent outline-none leading-[27px] text-[16px] font-[500]"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#954AFC] text-white rounded-full items-center justify-center flex h-[54px] w-[54px]">
            <img src="/assets/Send.svg" alt="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatApp = () => {
  return (
    <div className="flex h-screen md:flex-row flex-col mb-20">
      <ChatList />
      <Conversation />
    </div>
  );
};

export default ChatApp;