import Image from "next/image";
import Headeritem from "./Headeritem";
import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

const Header = () => {
  return (
    <>
        <header className="flex flex-col  sm:flex-row m-5 justify-between items-center h-auto">
          <div className="flex flex-grow justify-evenly max-w-2xl">
              <Headeritem title="Home" Icon={HomeIcon} />
              <Headeritem title="Trending" Icon={LightningBoltIcon} />
              <Headeritem title="Verified" Icon={BadgeCheckIcon} />
              <Headeritem title="Collections" Icon={CollectionIcon} />
              <Headeritem title="Search" Icon={SearchIcon} />
              <Headeritem title="Account" Icon={UserIcon} />
          </div>
          <Image 
          className="object-contain cursor-pointer" 
          src="https://links.papareact.com/ua6" 
          width="200" 
          height="100" 
          />
        </header>
    
    </>
  );
};

export default Header;
