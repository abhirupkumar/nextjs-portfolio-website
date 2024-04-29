'use client';
import CountUp from 'react-countup';

const Badge = ({
  containerStyles,
  icon,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="lg:text-3xl text-lg text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
