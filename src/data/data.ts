export interface IComent {
    id: number;
    productId: number;
    description: string;
    date: string;
}

export interface IProduct {
    id: number;
    image: string;
    name: string;
    count: number;
    size: {
        width: number;
        height: number;
    };
    weight: number;
    comments: IComent[];
}
export const defaultProduct : IProduct= {
    id: 0, // Default ID
    image: '/images/img_2.png', // Default empty image URL
    name: '', // Default empty name
    count: 0, // Default count
    size: {
        width: 0, // Default width
        height: 0, // Default height
    },
    weight: 0, // Default weight
    comments: [], // Default empty comments array
}
// Generating a list of IProduct objects
export let products: IProduct[] = [
    {
        id: 1,
        image: "/images/img_2.png",
        name: "Product 1",
        count: 10,
        size: {
            width: 20,
            height: 30,
        },
        weight: 1.5,
        comments: [
            {
                id: 1,
                productId: 1,
                description: "Great product!",
                date: "2024-12-07",
            },
            {
                id: 2,
                productId: 1,
                description: "Worth the price.",
                date: "2024-12-06",
            },
        ],
    },
    {
        id: 2,
        image: "/images/img_2.png",
        name: "Product 2",
        count: 5,
        size: {
            width: 15,
            height: 25,
        },
        weight: 2.0,
        comments: [
            {
                id: 1,
                productId: 2,
                description: "Not bad, but could be improved.",
                date: "2024-12-05",
            },
        ],
    },
    {
        id: 3,
        image: "/images/img_2.png",
        name: "Product 3",
        count: 8,
        size: {
            width: 10,
            height: 15,
        },
        weight: 0.8,
        comments: [],
    },
];
