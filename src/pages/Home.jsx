import React, { useState } from "react";
import HeroPage from "../assets/HeroPage.png";
import m1 from "../assets/m1.png";
import Introduction from "../components/common/Introduction";
import HomeNav from "../components/common/HomeNav";
import ReferSection from "../components/ReferSection";
import BenefitsSection from "../components/BenefitsSection";
import FAQSection from "../components/FAQSection";
import Modal from "../components/common/Modal";
import ReferalForm from "../components/ReferalForm";

const Home = () => {
  const [showModal, setShowModal] = useState(false);



  
  return (
    <div className="space-y-4">
      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
         <ReferalForm />
        </Modal>
      )}
      <HomeNav />
      <Introduction setShowModal={setShowModal} />
      <ReferSection setShowModal={setShowModal} />
      <BenefitsSection setShowModal={setShowModal} />
      <FAQSection setShowModal={setShowModal} />
    </div>
  );
};

export default Home;
