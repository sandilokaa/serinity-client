'use client';

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import { AppDispatch } from "@/store/store";
import { fetchData, selectSearchItemProducts, selectSearchItemProductsStatus } from "@/store/slice/SearchItemSlice";
import useDebouncedSearch from "@/hooks/useDebounceSearch";

import CurrencyFormatter from "@/utils/CurrencyFormatter";

interface SearchModalProps {
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isEntering, setIsEntering] = useState<boolean>(false);
    const [isExiting, setIsExiting] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(selectSearchItemProducts);
    const status = useSelector(selectSearchItemProductsStatus);
    
    useEffect(() => {
        setIsEntering(true);
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const fetchDataCallback = useCallback((term: string) => {
        if (term.trim() !== "") {
            dispatch(fetchData({ name: term, category: null }));
        }
    }, [dispatch]);

    useDebouncedSearch(searchTerm, 500, fetchDataCallback);

    return (
        <div
            className={`fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
                isExiting ? "opacity-0" : "opacity-100"
            }`}
        >
            <div
                className={`bg-white w-[470px] p-[45px] transform transition-transform duration-300 ${
                    isEntering ? "translate-x-0" : "translate-x-full"
                } ${isExiting ? "translate-x-full" : ""}`}
            >
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <p className="font-medium text-sm">SEARCH SERINITY.COM</p>
                    </div>
                    <div onClick={handleClose} className="flex items-center cursor-pointer">
                        <Image className="w-full h-auto" src="/images/icon/Close.svg" alt="Close icon" height={20} width={20}/>
                    </div>
                </div>
                <div className="mt-[35px]">
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
                            placeholder="Type to search..."
                            className="p-0 border-none border-b border-[#CACACA] w-full h-[45px] text-sm placeholder:text-xs focus:outline-none"
                        />
                    </div>
                    <hr />
                </div>
                <div className="mt-10">
                    {status === "loading" && <p className="text-xs">Loading...</p>}
                    {status === "succeeded" && products.length === 0 && (
                        <p className="text-xs">
                            Sorry, but nothing matched your search terms. Please try again with some different keywords.
                        </p>
                    )}
                    {status === "succeeded" && products.length > 0 && (
                        <div className="grid grid-cols-2 gap-5">
                            {products.map((product) => {
                                const imageUrl = product.images.length > 0 ? product.images[0]?.image_url : "";
                                return (
                                    <div key={product.id} className="flex flex-col gap-y-[10px] cursor-pointer">
                                        <Image src={`http://localhost:8080/${imageUrl}`} alt="img" loading="lazy" className="w-full" width={50} height={50}/>
                                        <div className="flex flex-col text-center gap-y-[5px]">
                                            <p className="font-medium text-sm">{product.name}</p>
                                            {product.sale ? (
                                                    <div className="flex justify-center gap-x-[10px]">
                                                        <p className="text-sm font-medium text-gray-400"><s>{CurrencyFormatter(product.price)}</s></p>
                                                        <p className="text-sm font-medium text-red-600">{CurrencyFormatter(product.price * 0.6)}</p>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p className="text-sm font-medium">{CurrencyFormatter(product.price)}</p>
                                                    </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {status === "failed" && <p className="text-xs">Error loading data.</p>}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;