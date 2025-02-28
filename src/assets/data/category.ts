export type Category = {
    id: string;
    properties: {
        categoryName: string;
        image: string;
        alt: string;
    };
};

export const CategoryTypeData: { Collections: Category[] } = {
    Collections: [
        {
            id: "1",
            properties: {
                categoryName: "HEADWEAR",
                image: "/images/category/image1.svg",
                alt: "Headwear Image",
            },
        },
        {
            id: "2",
            properties: {
                categoryName: "T-SHIRT COLLECTION",
                image: "/images/category/image4.svg",
                alt: "Tshirt Image",
            },
        },
        {
            id: "3",
            properties: {
                categoryName: "BOTTOMS",
                image: "/images/category/image2.svg",
                alt: "Bottom Image",
            },
        },
        {
            id: "4",
            properties: {
                categoryName: "BAGS",
                image: "/images/category/image5.svg",
                alt: "Bags Image",
            },
        },
        {
            id: "5",
            properties: {
                categoryName: "ACCESSORIES",
                image: "/images/category/image3.svg",
                alt: "Accessories Image",
            },
        },
        {
            id: "6",
            properties: {
                categoryName: "HOODIES",
                image: "/images/category/image6.svg",
                alt: "Hoodie Image",
            },
        },
    ],
};
