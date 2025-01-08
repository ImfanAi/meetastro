/* eslint-disable @next/next/no-img-element */
import React from "react";
import FaqItem from "@/components/main/faqItem";

type FAQ = {
  title: string,
  description: string
}

const faqs: FAQ[] = [
  {
    title: 'What is MeetAstro and how does it work?',
    description: 'MeetAstro is a gamified platform that integrates AI, decentralized finance (DeFi), and entertainment. Users interact with "Astro," your AI-powered companion that guides you through DeFi tools and experiences in a gamified way.'
  },
  {
    title: 'What is the purpose of the Swap ATM feature?',
    description: 'The Swap ATM allows users to swap cryptocurrencies using a decentralized exchange (DEX) mechanism. It facilitates token swaps through a secure wallet and user-friendly interface.'
  },
  {
    title: 'How does the Yield Generator benefit users?',
    description: 'The Yield Generator helps users find optimal staking opportunities for their crypto assets. It uses AI to analyze blockchain data and connect with staking platforms to maximize returns.'
  },
  {
    title: 'What is the leveling and rewards system?',
    description: 'Users earn XP and unlock rewards as they interact with the platform. Completing missions and using features like the Swap ATM increases Astro’s level, providing perks such as bigger rewards and special in-game fun.'
  },
  {
    title: 'How does revenue sharing work?',
    description: 'MeetAstro redistributes platform earnings to active users through participation rewards. A portion of the revenue is pooled and distributed once certain thresholds are met.'
  },
]

const FAQ = () => {

  return (
    <section id="faq" className="section-faq p-left p-right !font-snow">
      <div className="container5 align-top">
        <h2
          className="heading text-white text-center md:text-left w-full md:w-auto"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          faq
        </h2>
        <div className="accordion-container">
          {
            faqs.map((_faq: FAQ) => <FaqItem key={_faq.title} title={_faq.title} description={_faq.description}/>)
          }
        </div>
      </div>
    </section>
  );
};

export default FAQ;
