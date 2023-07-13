export interface ProductModel {
    map(arg0: (el: ProductModel) => import('react/jsx-runtime').JSX.Element): unknown;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
