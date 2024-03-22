import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { deleteFavorite } from "../../redux/shopperSlice";
import { IoMdClose } from "react-icons/io";

interface Item {
  id: string;
  itemAvailability: string;
  itemCategory: string;
  itemDescription: string;
  croppedImage: string;
  itemLocation: string;
  itemName: string;
  itemPrice: string;
  sellerEmail: string;
  sellerName: string;
  sellerNumber: string;
}

interface cartProductsProps {
  item: Item;
}

const FavoriteProduct = ({ item }: cartProductsProps) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4">
      <div style={{ background: "gray" }}>
        <Image
          className="object-cover"
          width={150}
          height={150}
          src={item.croppedImage}
          alt="productImage"
        />
      </div>
      <div
        className="flex items-center gap-4 px-2 flex-1"
        style={{ justifyContent: "space-between" }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-[#0C2953]">
            {item.itemName}
          </p>
          <p className="text-sm text-gray-600">{item.itemDescription}</p>
          <p className="text-sm text-gray-600">
            Unit Price: {""}
            <span className="font-semibold text-[#0C2953]">
              ₦{item.itemPrice}
            </span>
          </p>
        </div>
        <div
          onClick={() => dispatch(deleteFavorite(item.id))}
          className="flex items-center text-sm font-medium text-gray-400 hover:text-red-700 cursor-pointer duration-300"
        >
          <IoMdClose className="mt-[2px]" /> <p>remove</p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
