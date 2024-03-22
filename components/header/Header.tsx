import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../redux/shopperSlice";
import Image from "next/image";
import { StateProps } from "../../type";
import cartIcon from "../../src/images/cartIcon.png";
import { HiOutlineSearch } from "react-icons/hi";
import { useSearch } from "../../context/searchcontext";

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.shopper.userInfo);
  const favoriteData = useSelector((state: any) => state.shopper.favoriteData);
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const { signOut } = useClerk();

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      dispatch(
        addUser({
          id: user.id,
          username: user?.username,
          email: user?.primaryEmailAddress?.emailAddress,
          image: user?.imageUrl,
        })
      );
    } else {
      dispatch(removeUser());
    }
  }, [user, dispatch]);

  const capitalizeFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div
          className={`bg-[#0a1930] gap-6 mx-auto mdl:gap-3 w-full text-[#E1E5EB] px-8 py-5 flex items-center justify-between ${
            isSticky ? "bg-[#0a1930]" : ""
          }`}
        >
          <div>
            <Link href="/">
              <h2 className="text-[#E1E5EB] font-semibold text-2xl">
                Edu<span className="text-orange-700">Mart</span>.
              </h2>
            </Link>
          </div>

          {userInfo ? (
            <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
              <input
                onChange={handleSearch}
                value={searchQuery}
                className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-orange-700"
                type="text"
                placeholder="Search for your products"
              />
              <span className="w-12 h-full bg-orange-700 text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
                <HiOutlineSearch />
              </span>
            </div>
          ) : (
            <div>
              <ul className="flex items-center gap-4">
                <Link href="/">
                  <li className="text-base font-semibold">Home</li>
                </Link>
                <Link href="/contact">
                  <li className="text-base font-semibold">Contact Us</li>
                </Link>
              </ul>
            </div>
          )}

          {userInfo ? (
            <>
              <div className="flex items-center gap-2">
                <div
                  onClick={() => signOut()}
                  className="flex items-center gap-2"
                >
                  <Image
                    width={500}
                    height={500}
                    className="w-8 rounded-full object-cover"
                    src={userInfo.image}
                    alt="UserImage"
                  />
                  {/* <UserButton afterSignOutUrl="/" /> */}
                  <div>
                    {/* <p className="text-xs">Sign Out</p> */}
                    <h2 className="text-sm font-semibold">
                      Hi, {capitalizeFirstLetter(userInfo.username)}
                    </h2>
                  </div>
                </div>

                <Link
                  href={"/favorite"}
                  className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
                >
                  <p>Marked</p>
                  <p className="text-white font-bold">& Favorite</p>
                  {favoriteData.length > 0 && (
                    <span className="absolute right-2 top-0 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-orange-700">
                      {favoriteData.length}
                    </span>
                  )}
                </Link>
              </div>
            </>
          ) : (
            <div>
              <ul className="flex items-center gap-4">
                <Link href="/sign-in">
                  <li>Sign In</li>
                </Link>
                <Link href="/sign-up">
                  <li>Sign Up</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
