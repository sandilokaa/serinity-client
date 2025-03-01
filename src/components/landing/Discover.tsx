import Image from "next/image";
import BadgeDiscover from "../common/badge/BadgeDiscover";

const Discover: React.FC = () => {
    return (
        <div className="mt-24 mb-20">
            <div className="px-20">
                <div className="flex flex-col gap-y-[10px]">
                    <p className="font-medium text-4xl">More to Discover</p>
                    <p className="text-lg">Unveiling New Horizons and Opportunities</p>
                </div>
                <div className="flex gap-x-5 mt-10">
                    <div className="flex-2 relative">
                        <Image className="h-auto w-full" src="/images/general/discover-1.svg" alt="Discover Image" width={0} height={0}/>
                        <div className="absolute left-[35px] top-[25px]">
                            <BadgeDiscover
                                badgeName="COMMUNITY INITIATIVE"
                            />
                        </div>
                        <div className="absolute bottom-[25px] left-[35px]">
                            <p className="text-[64px] text-white font-bold m-auto">#FROMUSFORUS</p>
                        </div>
                    </div>
                    <div className="flex-1 relative bg-[#5184AE] rounded-[15px]">
                        <div className="absolute top-[25px] px-[35px]">
                            <BadgeDiscover
                                badgeName="SPECIAL OFFERS"
                            />
                        </div>
                        <div className="absolute bottom-[25px] px-[35px]">
                            <p className="mt-10 font-bold text-white text-[44px]">Get 20% Off on Selected Sale Items This Season!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover;