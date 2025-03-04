'use client';

import { CategoryTypeData } from "@/data/category";
import type { Category } from "@/data/category";
import Image from "next/image";

const Category: React.FC = () => {

    const groupedCategories: Category[][] = [];
    for (let i = 0; i < CategoryTypeData.Collections.length; i += 2) {
        groupedCategories.push(CategoryTypeData.Collections.slice(i, i + 2))
    }

    return (
        <div className="mt-24">
            <div className="px-20">
                <div className="flex flex-col gap-y-[10px]">
                    <p className="font-medium text-4xl">Shop by Category</p>
                    <p className="text-lg">Navigate Our Diverse Collections for Every Occasion</p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-rows-1 grid-flow-col justify-between">
                        {groupedCategories.map((category: Category[], index) => {
                            return (
                                <div key={index} className="flex flex-col lg:gap-5">
                                    {category.map((data) => {
                                        return (
                                            <div className="relative cursor-pointer" key={data.id}>
                                                <Image src={data.properties.image} alt={data.properties.alt} className="w-full h-auto object-cover" loading="lazy" width={0} height={0}/>
                                                <div className="absolute flex justify-start bottom-0 left-0 right-0 px-6 py-[15px]">
                                                    <div className="flex gap-x-[5px] items-center px-4 py-2 bg-white text-black text-[16px] font-medium rounded-full w-auto">
                                                        <p>{data.properties.categoryName}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;