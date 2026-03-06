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
}

export type UserRegisterResponse = {
    "userId": bigint;
}