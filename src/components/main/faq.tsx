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
    title: 'How does revenue sharing work?',
    description: 'MeetAstro redistributes platform earnings to active users through participation rewards. A portion of the revenue is pooled and distributed once certain thresholds are met.'
  },
  {
    title: 'What kind of missions can Astro undertake?',
    description: 'Astro can embark on missions which earn yield tokens, XP, and other rewards. Players can speed up missions by spending in-game gems.'
  },
  {
    title: 'How do social media and referrals contribute to rewards?',
    description: 'Users earn in-game currency by interacting with social media posts and referring others. The platform tracks interactions, and referrals yield bonuses based on user activity.'
  },
  {
    title: 'What is the long-term vision for MeetAstro?',
    description: 'MeetAstro plans to expand mission types, and enhance DeFi integration. Future updates will include more gamified elements, game modes, more defi features to increase user engagement and revenue distribution.'
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
