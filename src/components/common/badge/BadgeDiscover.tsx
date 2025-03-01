interface BadgeDiscoverProps {
    badgeName: string;
}

export default function BadgeDiscover({ badgeName }: BadgeDiscoverProps) {
    return (
        <div className="bg-transparent border border-white rounded-full">
            <p className="text-white py-[15px] px-[30px] font-medium text-[14px]">{badgeName}</p>
        </div>
    );
}
