import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useClerk } from "@clerk/clerk-react";
import { removeUser } from "../../redux/shopperSlice";
import Link from "next/link";

const BottomHeader = () => {
  const userInfo = useSelector((state: any) => state.shopper.userInfo);
  const dispatch = useDispatch();

  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
    dispatch(removeUser());
  };

  return (
    <>
      {userInfo && (
        <div className="w-full h-10 bg-[#0C2953] text-sm text-white px-8 flex justify-between items-center">
          <p className="flex items-center gap-2 h-8 px-2 border border-transparent cursor-pointer duration-300">
            <FaShoppingBag className="text-xl" /> Shop By Categories
          </p>

          <div>
            <Link href="/books">
              <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
                Books
              </p>
            </Link>
            <Link href="/kitchenUtensils">
              <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
                Kitchen Utensils
              </p>
            </Link>
            <Link href="/gadgets">
              <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
                Gadgets
              </p>
            </Link>
            <Link href="/householdMaterials">
              <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
                Household Materials
              </p>
            </Link>

            <Link href="/sell">
              <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
                Sell
              </p>
            </Link>
          </div>

          <div>
            <Link href="/contact">
              <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
                Contact Us
              </p>
            </Link>

            <button
              onClick={handleSignOut}
              className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-orange-700 hover:text-orange-700 text-amazon_yellow cursor-pointer duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomHeader;
