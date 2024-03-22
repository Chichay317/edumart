import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { addToFavorite } from "../../redux/shopperSlice";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa";

const DynamicPage = () => {
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setProduct(router.query);
  }, [router.query]);

  return (
    <div className="w-full mx-auto bg-gray-300 h-screen px-20 py-4 md:py-10 ">
      {isLoading ? (
        <div className="w-full flex flex-col gap-6 items-center justify-center py-20">
          <p>Your product is loading...</p>
          <BeatLoader color="#0C2953" size={40} />
        </div>
      ) : (
        <div className="w-full grid md:grid-cols-3 bg-gray-100 gap-y-3 h-4/5 rounded-lg">
          <div className="flex items-center justify-center rounded-lg relative group overflow-hidden">
            <div>
              <img
                src={product.croppedImage}
                alt="product image"
                width={500}
                className="object-cover"
                height={500}
              />
            </div>
            <div className="w-12 h-10 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
              <span
                onClick={() =>
                  dispatch(
                    addToFavorite({
                      id: product.id,
                      itemAvailability: product.itemAvailability,
                      itemCategory: product.itemCategory,
                      itemDescription: product.itemDescription,
                      croppedImage: product.croppedImage,
                      itemLocation: product.itemLocation,
                      itemName: product.itemName,
                      itemPrice: product.itemPrice,
                      sellerEmail: product.sellerEmail,
                      sellerName: product.sellerName,
                      sellerNumber: product.sellerNumber,
                    })
                  )
                }
                className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-orange-700 cursor-pointer duration-300"
              >
                <FaHeart />
              </span>
            </div>
          </div>

          <div className="md:col-span-2 bg-white flex flex-col gap-3 rounded-lg justify-center p-4">
            <p className="text-xs md:text-sm text-[#0C2953] font-semibold -mb-3">
              {product.itemCategory}
            </p>
            <h1 className="text-xl md:text-3xl tracking-wide font-semibold">
              {product.itemName}
            </h1>
            <p className="text-sm text-gray-600">{product.itemDescription}</p>
            <p className="text-base text-gray-600 flex items-center gap-1">
              Price:
              <span className="text-lg text-[#0C2953] font-semibold">
                ₦{product.itemPrice}
              </span>
            </p>
            <p className="text-base text-gray-600 flex items-center gap-1">
              Item Location:
              <span className="text-lg text-[#0C2953] font-semibold">
                {product.itemLocation}
              </span>
            </p>
            <p className="text-base text-gray-600 flex items-center gap-1">
              Seller's Name:
              <span className="text-lg text-[#0C2953] font-semibold">
                {product.sellerName}
              </span>
            </p>
            <p className="text-base text-gray-600 flex items-center gap-1">
              Seller's Email:
              <span className="text-lg text-[#0C2953] font-semibold">
                {product.sellerEmail}
              </span>
            </p>
            <p className="text-base text-gray-600 flex items-center gap-1">
              Seller's Number:
              <span className="text-lg text-[#0C2953] font-semibold">
                {product.sellerNumber}
              </span>
            </p>
            <div className="mt-4 mb-4 flex flex-col gap-2">
              <p className="text-orange-700 text-base">
                ℹ Do not make payments to anyone you have not seen.
              </p>
              <p className="text-orange-700 text-base">
                ℹ You must meet the buyer/seller in a public place.
              </p>
              <p className="text-orange-700 text-base">
                ℹ Thoroughly recheck the item for verification.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicPage;
