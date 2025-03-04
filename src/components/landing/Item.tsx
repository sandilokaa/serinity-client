'use client';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "@/store/store";
import { fetchData, selectSearchItemProducts, selectSearchItemProductsStatus } from "@/store/slice/SearchItemSlice";
import CurrencyFormatter from "@/utils/CurrencyFormatter";

const Item: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const items = useSelector(selectSearchItemProducts);
    const status = useSelector(selectSearchItemProductsStatus);

    useEffect(() => {
        dispatch(fetchData({ name: "", category: "" }));
    }, [dispatch]);

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
                    <div className="grid grid-cols-3 gap-4">
                        {items.map((item) => (
                            <div key={item.id} className="border p-4 rounded-lg">
                                <p className="text-xl font-semibold">{item.name}</p>
                                <p className="text-green-600">{CurrencyFormatter(item.price)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;