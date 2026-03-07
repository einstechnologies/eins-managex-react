export type UserRegisterRequest = {
    "bioUserID": number;
    "userFirstName": string;
    "userLastName": string;
    "emailId": string;
    "addedBy": number;
    "pin": string;
    "activationDate": string;
    "expiryDate": string;
    "mobileNo": string;
    "gender": string;
    "userType": boolean;
}

export type UserRegisterResponse = {
    "userId": bigint;
}