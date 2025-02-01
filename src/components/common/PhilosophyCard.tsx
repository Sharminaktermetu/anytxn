import Image, { StaticImageData } from "next/image";
import React from "react";
type PhilosophyCardProps = {
    icon: StaticImageData;
    title: string;
    description: string;
}
const PhilosophyCard = ({ icon, title, description }:PhilosophyCardProps) => {
    return (
      <div className="card bg-[#f8fcff] lg:w-96 w-48">
        <div className="card-body space-y-4">
          <Image src={icon} alt={title} className="size-12"/>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

export default PhilosophyCard;
