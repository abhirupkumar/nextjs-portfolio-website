'use client';

import {
  RiLinkedinFill,
  RiGithubFill,
} from 'react-icons/ri';

import Link from 'next/link';
import { SiLeetcode } from 'react-icons/si';
import { FaDev } from 'react-icons/fa';

const icons = [
  {
    path: 'https://linkedin.com/in/abhirup2003',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/abhirupkumar',
    name: <RiGithubFill />,
  },
  {
    path: 'https://leetcode.com/Abhirup2003',
    name: <SiLeetcode />,
  },
  {
    path: 'https://dev.to/abhirup2003',
    name: <FaDev />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer" >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
