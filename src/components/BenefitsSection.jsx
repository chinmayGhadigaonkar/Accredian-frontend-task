import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const BenefitsSection = ({ setShowModal }) => {
  const program = [
    { name: "Product Management" },
    { name: "Strategy Management" },
    { name: "Business Management" },
    { name: "Fintech" },
    { name: "Data Science" },
    { name: "Digital Transformation" },
    { name: "Business Analysis" },
  ];

  const programDetails = [
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "7000",
      refereeBonus: "9000",
    },
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "7000",
      refereeBonus: "9000",
    },
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "7000",
      refereeBonus: "9000",
    },
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "7000",
      refereeBonus: "9000",
    },
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "7000",
      refereeBonus: "9000",
    },
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "7000",
      refereeBonus: "9000",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        What Are The <span className="text-primary">Referral Benefits?</span>
      </h1>
      <div className="flex flex-wrap justify-center w-full mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/3 lg:w-1/5">
          <ul className="border-2">
            <h1 className="bg-primary text-white px-2 py-2 flex justify-between items-center">
              ALL PROGRAM <KeyboardArrowRightIcon />
            </h1>
            {program.map((item, index) => (
              <li
                key={index}
                className="text-secondary flex justify-between items-center text-lg mt-4 px-1 py-2 border-b-2"
              >
                {item.name}
                <KeyboardArrowRightIcon />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3 lg:w-3/5 max-w-6xl px-4">
          <table className="table-auto w-full">
            <thead className="bg-[#1A73E859] text-primary rounded-xl border-2">
              <tr>
                <th className="px-4 py-2">Programs</th>
                <th className="px-4 py-2">Referrer Bonus</th>
                <th className="px-4 py-2">Referee Bonus</th>
              </tr>
            </thead>
            <tbody className="border-b-2">
              {programDetails.map((item, index) => (
                <tr key={index} className="bg-[#EBF3FF59] h-16">
                  <td className="border-l-2 border-r-2 px-4 py-2">
                    {item.program}
                  </td>
                  <td className="border-l-2 border-r-2 text-center px-4 py-2">
                    {item.referrerBonus}
                  </td>
                  <td className="border-l-2 border-r-2 text-center px-4 py-2">
                    {item.refereeBonus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button
        className="w-[194px] h-[54px] border-2 leading-6 px-2 text-sm bg-primary text-white font-medium rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Refer Now
      </button>
    </div>
  );
};

export default BenefitsSection;
