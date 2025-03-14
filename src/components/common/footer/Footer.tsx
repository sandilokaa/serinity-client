"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonSubmit from "../button/ButtonSubmit";
import SubscribeInput from "../input/SubscribeInput";

const Footer: React.FC = () => {
    return (
        <>
            <div className="mt-[100px] border border-t-[#CACACA] border-b-[#CACACA]">
                <div className="mx-auto lg:px-20 lg:py-10">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-y-5">
                            <div>
                                <p className="font-bold text-2xl">SERINITY</p>
                            </div>
                            <div className="flex flex-col gap-y-[10px] text-sm">
                                <p>Jl. Bukit Cemara Indah, Semarang, Indonesia.</p>
                                <p>+62876-8765-8765</p>
                                <p>serinity@gmail.com</p>
                            </div>
                            <div className="flex gap-x-[15px]">
                                <div className="p-2 rounded-full border border-black cursor-pointer">
                                    <Image className="h-auto w-full" src="/images/icon/instagram.svg" alt="Social Media" width={0} height={0}/>
                                </div>
                                <div className="p-2 rounded-full border border-black cursor-pointer">
                                    <Image className="h-auto w-full" src="/images/icon/twitter.svg" alt="Social Media" width={0} height={0}/>
                                </div>
                                <div className="p-2 rounded-full border border-black cursor-pointer">
                                    <Image className="h-auto w-full" src="/images/icon/tiktok.svg" alt="Social Media" width={0} height={0}/>
                                </div>
                                <div className="p-2 rounded-full border border-black cursor-pointer">
                                    <Image className="h-auto w-full" src="/images/icon/whatsapp.svg" alt="Social Media" width={0} height={0}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 text-sm">
                            <div>
                                <p className="font-bold">HOT CATEGORIES</p>
                            </div>
                            <div className="flex flex-col gap-y-[10px]">
                                <Link href="/">Special Offers</Link>
                                <Link href="/">T-Shirt Collection</Link>
                                <Link href="/">Headwear</Link>
                                <Link href="/">Hoodies</Link>
                                <Link href="/">Bottoms</Link>
                                <Link href="/">Bags</Link>
                                <Link href="/">Accessories</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 text-sm">
                            <div>
                                <p className="font-bold">CUSTOMER SERVICE</p>
                            </div>
                            <div className="flex flex-col gap-y-[10px]">
                                <Link href="/">Privacy Policy</Link>
                                <Link href="/">Term & Conditions</Link>
                                <Link href="/">Store Locations</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 text-sm">
                            <div>
                                <p className="font-bold">SIGN UP TO NEWSLETTER</p>
                            </div>
                            <div>
                                <p>Enter your email address to get updated information on Sales and Offers.</p>
                            </div>
                            <div className="flex gap-x-[10px]">
                                <SubscribeInput />
                                <ButtonSubmit
                                    buttonName="Subscribe"
                                    fontSize="12px"
                                    fontWeight="500"
                                    width="180px"
                                    borderRadius="50px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-10">
                <p className="text-sm">© 2024 SERINITY. All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;
