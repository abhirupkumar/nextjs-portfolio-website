import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      {/* <span className='p-2 kalam-regular text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-500 rounded-md'>AKB</span> */}
      <span className='p-2 kalam-regular text-3xl logo-text'>AKB</span>
    </Link>
  );
};

export default Logo;
