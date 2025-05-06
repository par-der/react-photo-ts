export interface IProduct {
    id: number;
    article: string;
    title: string;
    main_image: string;
    image_version: number;
}

export interface IProductRequest {
    article: string;
    title: string;
    main_image: File | null;
}