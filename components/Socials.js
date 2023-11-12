import Link from "next/Link"

import { RiInstagramLine } from "react-icons/ri";

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className='hover:text-accent translation-all duration-300'> <RiInstagramLine/> </Link>
  </div>;
};

export default Socials;
