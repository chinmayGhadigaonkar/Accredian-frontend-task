import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  const navItems = [
    { name: 'Refer', link: '#' },
    { name: 'Benefits', link: '#' },
    { name: 'FAQs', link: '#' },
    { name: 'Support', link: '#' },
  ];

  return (
    <div className="bg-[#1A73E81C] h-auto mt-3 flex flex-col md:flex-row justify-center items-center py-4 px-5 md:px-20 w-full md:w-fit mx-auto space-y-4 md:space-y-0 md:space-x-10 rounded-xl">
      {navItems.map((item, index) => (
        <Link
          key={index}
          className="text-secondary font-medium text-lg transition-all px-1 cursor-pointer hover:text-primary hover:font-bold"
          to={item.link}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default HomeNav;
