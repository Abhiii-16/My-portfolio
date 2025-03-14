import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink, Github, LucideComputer, Instagram } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Github", link: "https://github.com/Abhiii-16", icon: <Github /> },
    { name: "Instagram", link: "https://www.instagram.com/abhiii_.16/", icon: <Instagram /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/abhiii16/", icon: <Linkedin /> },
    
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
