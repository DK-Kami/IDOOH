import React from "react";

import ContactCard from "@/components/LeadershipList/ContactCard";
import murzak from "@/public/images/alexander-murzak.jpg";
import bulygin from "@/public/images/ilya-bulygin.jpg";
import nassar from "@/public/images/juma-nassar.jpg";
import faldina from "@/public/images/maria-faldina.jpg";

import classes from "./index.module.css";

const LeadershipList = () => {
  const contactList = [
    {
      image: bulygin.src,
      title: "CEO",
      name: "Ilya Bulygin",
      description:
        "Investor, entrepreneur, top manager of the largest outdoor advertising operators. In the advertising business since 2003. Experience in creating and managing outdoor advertising networks in more than 50 cities in Europe and the CIS countries.",
    },
    {
      image: nassar.src,
      title: "COO",
      name: "Juma Nassar",
      description:
        "Media manager, journalist, GR specialist. Over 30 years of experience in the media business in the MENA region. Successful experience in founding and managing a number of media outlets and outdoor advertising companies.",
    },
    {
      image: faldina.src,
      title: "CBDO",
      name: "Maria Faldina",
      description:
        "Entrepreneur. Over 20 years in the advertising business. Successful experience in building sales teams in large companies, managing his own business since 2007 in Europe.",
    },
    {
      image: murzak.src,
      title: "CCO",
      name: "Alexander Murzak",
      description:
        "A visionary Creative Director with 20 years of experience in top global agencies like McCann, MullenLowe, VMLY&R, and DDB. Known for crafting powerful, award-winning campaigns that connect brands with audiences on a profound level.",
    },
  ];

  return (
    <div className={classes.leadershipList}>
      {contactList.map((contact) => (
        <ContactCard
          key={contact.name}
          imageSrc={contact.image}
          name={contact.name}
          title={contact.title}
          description={contact.description}
        />
      ))}
    </div>
  );
};

export default LeadershipList;
