import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { StoreProduct, StateProps } from "../../../type";
import FavoriteProduct from "../../../components/FavoriteProducts/FavoriteProduct";
import ResetFavoriteItems from "../../../components/Reset/ResetFavoriteItems";

const FavoritePage = () => {
  const favoriteData = useSelector((state: any) => state.shopper.favoriteData);

  return (
    <div className="bg-gray-300 h-screen">
      <div className="max-w-screen-xl mx-auto px-6 gap-10 py-4">
        {favoriteData.length > 0 ? (
          <div className="bg-white p-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-xl font-semibold text-[#0C2953]">
                Favorite Items
              </p>
              <p className="text-lg font-semibold text-[#0C2953]">Action</p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              {favoriteData.map((item: StoreProduct) => (
                <div key={item.id} className="mt-2">
                  <FavoriteProduct item={item} />
                </div>
              ))}
              <ResetFavoriteItems />
            </div>
          </div>
        ) : (
          <div className="bg-white h-96  flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
            <h1>Nothing is available in the Favorite list</h1>
            <Link href="/">
              <button className="w-52 h-10 bg-[#0C2953] text-white rounded-lg text-sm font-semibold hover:bg-orange-700 hover:text-white duration-300 mt-2">
                Go to shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
