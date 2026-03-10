export type SaveUserImageRequest = {
    "userId": string;
    "image": File;
}

export type SaveUserImageResponse = {
    "userId": bigint;
    "imageUrl": string;
    "success": boolean;
}