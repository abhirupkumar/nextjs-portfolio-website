import Socials from './Socials';

const Footer = () => {
  return (
    <div className="backdrop-blur-[2px] inset-x-0 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto lg:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright © Abhirup Kumar Bhowmick. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
