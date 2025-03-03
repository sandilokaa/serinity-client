"use client";

import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className=" text-black py-5 px-20 flex justify-between items-center">
            <Link href="/" className="text-[28px] font-bold">SERINITY</Link>
            <div className="flex gap-x-[25px] items-center text-[16px] font-medium">
                <Link href="/">Beranda -</Link>
                <Link href="/shop">Shop -</Link>
                <Link href="/support">Support -</Link>
            </div>
            <div className="flex gap-x-[20px] items-center text-[16px] font-medium">
                <Link href="#">Search</Link>
                <Link href="#">Bag<span className="text-xs">(0)</span></Link>
                <Link href="#">Account<span className="text-xs">(0)</span></Link>
            </div>
        </nav>
    );
};

export default Navbar;
