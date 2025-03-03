"use client";

interface ButtonSubmitProps {
    buttonName: string;
    fontSize: string;
    width: string;
    borderRadius: string;
    fontWeight: string;
}

export default function ButtonSubmit({ buttonName, fontSize, width, borderRadius, fontWeight }: ButtonSubmitProps) {
    return (
        <button style={{fontSize: fontSize, fontWeight: fontWeight, width: width, borderRadius: borderRadius}} className="bg-black border border-black text-white py-2 px-6 hover:border hover:border-black hover:text-black hover:bg-white transition-all">
            {buttonName}
        </button>
    );
}