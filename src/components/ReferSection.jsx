import React from "react";
import circleImage from "../assets/CircleImg.png";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const ReferSection = ({ setShowModal }) => {
  return (
    <div className="flex flex-col h-fit   bg-[#EEF5FF] py-10 w-full items-center">
      <h1 className="text-2xl h-fit  md:text-3xl  lg:text-3xl font-bold ">
        How Do I <span className="text-primary">Refer</span>
      </h1>
      <div className="relative h-[35rem] flex justify-center items-center ">
        <img src={circleImage} alt="Circles" className="w-full  " />

        {/* Overlay text on circles */}
        <div className="absolute top-[60%] left-[21%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <PersonAddIcon
            className="text-primary"
            style={{ fontSize: "48px" }}
          />
          <h2 className="text-secondary mt-4 w-36 text-sm">
            Submit referrals easily via our website’s referral section
          </h2>
        </div>
        <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <NoteAltIcon className="text-primary" style={{ fontSize: "48px" }} />
          <h2 className="text-secondary mt-4 w-36 text-sm">
            Earn rewards once your referral joins an Accredian program.
          </h2>
        </div>
        <div className="absolute top-[60%] right-[10%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <AccountBalanceWalletIcon
            className="text-primary"
            style={{ fontSize: "48px" }}
          />
          <h2 className="text-secondary mt-4 w-36 text-sm">
            Both parties receive a bonus 30 days after program enrollment.
          </h2>
        </div>
      </div>
      <button className="w-[194px] h-[54px] border-2 leading-6 px-2 text-sm bg-primary text-white font-medium rounded-lg" onClick={()=>setShowModal(true)}>
        Refer Now
      </button>
    </div>
  );
};

export default ReferSection;
