// CategoryPage.js

import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import CategoryHead from "../CategoryHead/CategoryHead";
import useSWR from "swr";
import { ProductProps } from "../../type";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Spinner from "../Spinner";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../redux/shopperSlice";
import Link from "next/link";
import { useSearch } from "../../context/searchcontext";

interface CategoryPageProps {
  categoryTitle: string;
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryTitle }) => {
  const dispatch = useDispatch();
  const [categoryDataWithIds, setCategoryDataWithIds] = useState<
    Array<ProductProps>
  >([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(
    null
  );

  const { searchQuery } = useSearch();

  const { data: formData, isLoading } = useSWR(
    "http://localhost:4000/getFormData",
    fetcher
  );

  useEffect(() => {
    if (formData) {
      const updatedCategoryDataWithIds = Object.values(formData.formData)
        .filter(
          (item: any) =>
            item.itemCategory.toLowerCase() === categoryTitle.toLowerCase()
        )
        .map((item) => ({
          id: uuidv4(),
          ...(item && typeof item === "object" ? item : {}),
        })) as Array<ProductProps>;

      setCategoryDataWithIds(updatedCategoryDataWithIds);
    }
  }, [formData, categoryTitle]);

  const filteredData = categoryDataWithIds
    .filter((item) =>
      item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((item) => {
      if (selectedPriceRange === null) {
        return true;
      }

      const itemPriceAsNumber = parseFloat(item.itemPrice);

      return (
        (selectedPriceRange === 0 && itemPriceAsNumber <= 3000) ||
        (selectedPriceRange === 13000 && itemPriceAsNumber > 12000) ||
        (itemPriceAsNumber > selectedPriceRange - 3000 &&
          itemPriceAsNumber <= selectedPriceRange)
      );
    });

  const noMatch = searchQuery && filteredData.length === 0;

  return (
    <>
      <Sidebar onSelectPriceRange={setSelectedPriceRange} />
      <CategoryHead title={categoryTitle} />

      <div className="ml-[13.5rem] h-screen pl-[0.4rem] pt-[2rem] bg-gray-300 overflow-y-auto">
        <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6">
          {filteredData.map(
            ({
              id,
              itemAvailability,
              itemCategory,
              itemDescription,
              croppedImage,
              itemLocation,
              itemName,
              itemPrice,
              sellerEmail,
              sellerName,
              sellerNumber,
            }) => (
              <div
                key={id}
                className="w-full bg-white text-black p-4 mb-8 border border-gray-300 rounded-lg group overflow-hidden"
              >
                <div className="w-full h-[260px] relative">
                  <Image
                    className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                    width={300}
                    height={300}
                    src={croppedImage}
                    alt="productImage"
                  />
                  <div className="w-12 h-10 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                    <span
                      onClick={() =>
                        dispatch(
                          addToFavorite({
                            id: id,
                            itemAvailability: itemAvailability,
                            itemCategory: itemCategory,
                            itemDescription: itemDescription,
                            croppedImage: croppedImage,
                            itemLocation: itemLocation,
                            itemName: itemName,
                            itemPrice: itemPrice,
                            sellerEmail: sellerEmail,
                            sellerName: sellerName,
                            sellerNumber: sellerNumber,
                          })
                        )
                      }
                      className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-orange-700 cursor-pointer duration-300"
                    >
                      <FaHeart />
                    </span>
                  </div>
                  <p className="absolute top-0 right-0 text-orange-700 font-medium text-xs tracking-wide animate-bounce">
                    !{itemAvailability}
                  </p>
                </div>
                <hr />
                <div className="px-4 py-3 flex flex-col gap-1">
                  <p className="text-base font-medium">{itemName}</p>
                  <p>
                    <span className="text-[#0C2953] font-semibold">
                      ₦{itemPrice}
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 text-justify">
                    {itemDescription.substring(0, 120)}
                  </p>
                  <Link
                    href={{
                      pathname: `/${id}`,
                      query: {
                        id: id,
                        itemAvailability: itemAvailability,
                        itemCategory: itemCategory,
                        itemDescription: itemDescription,
                        croppedImage: croppedImage,
                        itemLocation: itemLocation,
                        itemName: itemName,
                        itemPrice: itemPrice,
                        sellerEmail: sellerEmail,
                        sellerName: sellerName,
                        sellerNumber: sellerNumber,
                      },
                    }}
                    as={`/${id}`}
                  >
                    <button className="h-10 w-full font-medium bg-[#0C2953] text-white rounded-md hover:bg-orange-700 hover:text-white duration-300 mt-2">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            )
          )}
          {isLoading && (
            <div className="w-full flex items-center justify-center">
              <Spinner />
            </div>
          )}
          {noMatch && (
            <div>
              <p className="text-center">No item matched your search!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
