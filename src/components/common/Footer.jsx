import React from "react";
import footerImg from "../../assets/footerImg.png";
import { Facebook, Linkedin, Plus } from "lucide-react";
import { FacebookOutlined, Instagram, Twitter, YouTube, YoutubeSearchedFor, YoutubeSearchedForRounded } from "@mui/icons-material";

const Footer = () => {
  const program = [
    {
      name: "Product Management",
    },
    {
      name: "Stretegy Management",
    },
    {
      name: "Business Management",
    },
    {
      name: "Fintech ",
    },
    {
      name: "Data Science",
    },
    {
      name: "Digital Transformation",
    },
    {
      name: "Business Analysis",
    },
    {
      name: "Business Analysis",
    },
    {
      name: "Business Analysis",
    },
  ];
    
    const contactUS = [
      {
        key: "Email for Data Science Queries",
        value: "admissions@accredian.com",
      },
      {
        key: "Email for Product Management Queries",
        value: "pm@accredian.com",
      },
      {
        key: "Data Science Admission Helpline",
        value: "+91 9079653292 (9 AM - 7 PM)",
      },
      {
        key: "Product Management Admission Helpline",
        value: "+91 9625811095",
      },
      {
        key: "Enrolled Student Helpline",
        value: "+91 7969322507",
      },
      {
        key: "Office Address",
        value:
          "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015",
      },
    ];

    const Policy = [
        {
            name: "About"
        },
        {
            name: "Career",
        },
        {
            name: "Blog",
        },
        {
            name: "Admission Policy",
        },
        {
            name: "Referral Policy",
        },
        {
            name: "Privacy Policy",    
        },
        {
            name: "Terms Of Service",
        },
        {
            name:"Master FAQs",
        }

        
    ]
    
  return (
    <div className="bg-[#282828] flex justify-center  flex-col pt-10 items-center  w-full ">
      <div className="w-full flex justify-between flex-wrap px-24">
        <img src={footerImg} alt="Img" className="w-[144px] h-[39px]" />
        <div>
          <button className="w-[200px] h-[38px]    leading-6	px-2 text-sm  bg-primary  text-white font-medium rounded-lg  ">
            Schedule a 1-on-1 Call Now
          </button>
          <p className="text-xs px-4  pt-.5 text-white">
            Speak with our Learning Advisor
          </p>
        </div>
      </div>
      <hr className="border-1   min-w-[90%] px-10  my-5 border-white " />

      <div className="flex flex-col  w-full  justify-center px-24 md:flex-row space-y-4 md:space-y-0 md:space-x-12 ">
        <div className="w-full md:w-1/4">
          <h1 className="text-white text-lg font-bold mb-2">Programs</h1>
          <ul className="text-white  w-full space-y-4">
            {program.map((item) => (
              <li key={item.name} className=" w-full text-white font-normal ">
                <div className="flex justify-between items-center">
                  <p className="w-full">{item.name}</p>
                  <Plus />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-2/4">
          <h1 className="text-white text-lg font-bold mb-2">Contact Us</h1>
          <ul className="text-white text-xs space-y-2">
            {contactUS.map((item) => (
              <li key={item.key} className="text-white font-normal">
                <span className="font-semibold">{item.key}</span>: {item.value}
              </li>
            ))}
          </ul>
          <div className="text-white pt-2 ">
            <h1 className="text-lg font-thin">Why Accredian</h1>
            <h1 className="text-lg font-thin">Follow Us</h1>
            <div className="flex space-x-1 pt-2">
              <FacebookOutlined className="w-6 h-6" />
              <Linkedin className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
              <YouTube className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <h1 className="text-white text-lg font-bold mb-2">Acredian</h1>
          <ul className="text-white space-y-2">
            {Policy.map((item) => (
              <li key={item.name} className="text-white font-normal text-xs">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
          </div>
          
          <div className="w-full flex justify-center  text-white text-sm text-thin items-center py-4">
              <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
            </div>
    </div>
  );
};

export default Footer;




// Contact Us
// Accredian
// Data Science & AI
// Email us (For Data Science Queries): admissions@accredian.com
// About
// Email us (For Product Management Queries):pm@accredian.com
// Career
// Product Management
// Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
// Blog
// Product Management Admission Helpline:+91 9625811095
// Admission Policy
// Business Analytics
// Enrolled Student Helpline: +91 7969322507
// Referral Policy
// Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
// Haryana 122015
// Privacy Policy
// Digital Transformation
// Terms Of Service
// Why Accredian
// Master FAQs
// Business Management
// Follow Us
// Project Management
// Strategy & Leadership
// Senior Management
// Fintech
// © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved