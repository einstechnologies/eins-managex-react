export type UpdateUserRequest = {
    userFirstName: string;
    userLastName: string;
    emailId: string;
    mobileNo: string;
    gender: string;
    pin: string;
    userType: boolean;
    activationDate: string; // ISO 8601 string
    expiryDate: string;     // ISO 8601 string
    lastModifiedBy: number;
};

export type UpdateUserResponse = {
    userId: bigint;
};
