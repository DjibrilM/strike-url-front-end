import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { cn } from "@/lib/cn";

interface Props {
  title: string;
  description?: string;
  className?: string;
}

const EmptyResult: React.FC<Props> = ({ title, description, className }) => {
  return (
    <div className={cn("flex items-center flex-col text-center w-full ", className)}>
      <FaBoxOpen className="text-white sm:text-6xl text-4xl" />
      <h3 className="sm:text-4xl text-2xl text-center text-white/85">{title}</h3>
      <p className="text-center text-white/65">{description}</p>
    </div>
  );
};

export default EmptyResult;
