import React from "react";

const FAQSection = ({ setShowModal }) => {
  const items = [
    {
      name: "Eligibility",
    },
    {
      name: "How to Use",
    },
    {
      name: "Terms & Conditions",
    },
  ];

  return (
    <div className="flex flex-col h-fit py-10 w-full items-center ">
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-8">
        Frequently Asked <span className="text-primary">Questions</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl space-y-6 md:space-y-0 md:space-x-8 px-4">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex w-52 text-center h-16 px-3 items-center justify-center border-2 rounded-md"
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <p className="text-[#1A73E8] font-bold ">
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </p>
          <p>
            No, the program is designed to be inclusive of all levels of
            experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.
          </p>
          <p>What is the minimum system configuration required?</p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
