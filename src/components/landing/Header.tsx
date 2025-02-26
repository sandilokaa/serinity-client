import headerImage from "@/assets/images/general/bg-header.svg";
import Image from "next/image";

const Header = () => (
    <section>
        <div className="bg-black py-3">
            <p className="text-white text-center font-medium">Instant Delivery is now available in Semarang area. Free shipping for standard delivery.</p>
        </div>
        <div className="relative">
            <Image className="w-full h-auto object-cover" src={headerImage} alt="Header Image" loading="lazy"/>
            <div className="absolute inset-0 px-20">
                <h1 className="m-0 font-bold text-white text-[176px]">SERINITY</h1>
                <div className="mt-56 flex justify-between text-white gap-x-32">
                    <p className="text-xl">
                        where every price reflects a unique narrative of artistry and sophistication. 
                        Delve into our carefully curated selection of high-quality clothing, each piece 
                        designed not only to showcase exceptional craftsmanship but also to inspire and 
                        empower your personal sense of style and self-expression.
                    </p>
                    <p className="text-sm right-0">
                        From timeless classics to the latest trends, discover items that align perfectly with 
                        your distinctive fashion taste. Whether youre preparing for work, leisure activities, 
                        or special events, enhance every experience with our thoughtfully curated collection.
                    </p>
                </div>
                <div className="flex justify-start mt-6">
                    <p className="text-white text-xl">Vol.1</p>
                </div>
            </div>
        </div>
    </section>
);

export default Header;