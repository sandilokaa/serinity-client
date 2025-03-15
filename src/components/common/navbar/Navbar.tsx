"use client";

import Link from "next/link";
import { useState } from "react";
import SearchModal from "@/components/common/modal/SearchModal";

const Navbar: React.FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    return (
        <>
            <nav className=" text-black py-5 px-20 flex justify-between items-center">
                <Link href="/" className="text-[28px] font-bold">SERINITY</Link>
                <div className="flex gap-x-[25px] items-center text-[18px] font-normal">
                    <Link href="/">Beranda -</Link>
                    <Link href="/shop">Shop -</Link>
                    <Link href="/support">Support -</Link>
                </div>
                <div className="flex gap-x-[20px] items-center text-[18px] font-normal">
                    <button onClick={() => setIsSearchOpen(true)}>Search</button>
                    <Link href="#">Bag<span className="text-xs">(0)</span></Link>
                    <Link href="#">Account<span className="text-xs">(0)</span></Link>
                </div>
            </nav>

            { isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)}/> }
        </>
    );
};

export default Navbar;
