'use client';

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";

import { AppDispatch } from "@/store/store";
import { fetchData, selectSearchItemProducts, selectSearchItemProductsStatus } from "@/store/slice/SearchItemSlice";

import CurrencyFormatter from "@/utils/CurrencyFormatter";

const Item: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [imageHovered, setImageHovered] = useState<{ [key: number]: boolean }>({});
    const [filledStatus, setFilledStatus] = useState<{ [key: number]: boolean }>({});

    const items = useSelector(selectSearchItemProducts);
    const status = useSelector(selectSearchItemProductsStatus);

    useEffect(() => {
        dispatch(fetchData({ name: "", category: "" }));
    }, [dispatch]);

    const handleMouseEnterImage = (id: number) => {
        setImageHovered((prev) => ({ ...prev, [id]: true }));
    };

    const handleMouseLeaveImage = (id: number) => {
        setImageHovered((prev) => ({ ...prev, [id]: false }));
    };

    const handleClickWishlistIcon = (id: number) => {
        setFilledStatus((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="mt-24">
            <div className="px-20">
                <div className="flex flex-col gap-y-[10px]">
                    <p className="font-medium text-4xl">New Arrivals</p>
                    <p className="text-lg">Exciting New Pieces to Elevate Your Wardrobe</p>
                </div>
                <div className="mt-10">
                    {status === "loading" && <p>Loading...</p>}
                    {status === "failed" && <p>Failed to fetch data</p>}
                    <div className="grid grid-cols-4 justify-between gap-y-10 gap-x-5">
                        {items.length > 0 ? (
                            items.slice(0, 4).map((product) => {
                                const hovered = imageHovered[product.id];
                                const imageUrl =
                                    product.images.length > 0
                                        ? hovered
                                            ? product.images[1]?.image_url
                                            : product.images[0]?.image_url
                                        : '';

                                return (
                                    <div
                                        className="relative group"
                                        key={product.id}
                                        // onClick={() => {
                                        //     navigate(`/item/detail/${product.id}`);
                                        //     setTimeout(() => {
                                        //         window.scrollTo(0, 0);
                                        //     }, 100);
                                        // }}
                                        onMouseEnter={() => handleMouseEnterImage(product.id)}
                                        onMouseLeave={() => handleMouseLeaveImage(product.id)}
                                    >
                                        <Image
                                            src={`http://localhost:8080/${imageUrl}`}
                                            alt="Item Image"
                                            loading="lazy"
                                            className="w-full h-auto cursor-pointer"
                                            width={500}
                                            height={500}
                                        />
                                        <div 
                                            className="absolute top-2 right-5 w-auto h-auto cursor-pointer"
                                            onClick={() => handleClickWishlistIcon(product.id)}
                                        >
                                            <svg
                                                className={`w-6 h-6 transition-all duration-200 ${
                                                    filledStatus[product.id] ? "text-red-500" : "text-gray-500"
                                                }`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 25 25"
                                                fill={filledStatus[product.id] ? "currentColor" : "none"}
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </div>
                                        <div className="mt-[25px] cursor-pointer">
                                            <div className="flex flex-col text-center gap-y-[10px]">
                                                <p className="text-lg">{product.name}</p>
                                                {product.sale ? (
                                                    <div className="flex justify-center gap-x-[10px]">
                                                        <p className="font-medium text-gray-400"><s>{CurrencyFormatter(product.price)}</s></p>
                                                        <p className="font-medium text-red-600">{CurrencyFormatter(product.price * 0.6)}</p>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p className="font-medium">{CurrencyFormatter(product.price)}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p>No items found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;