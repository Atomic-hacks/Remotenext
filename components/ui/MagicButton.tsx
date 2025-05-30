import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  buttonClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  buttonClasses?: string;
}) => {
  return (
    <div>
      <button className={` relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none lg:w-40 ${buttonClasses}`} onClick={handleClick} type="submit" >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffae42_50%,#000000_100%)]

" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center gap-2 justify-center rounded-xl bg-primary px-4 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;