// This is what you SEND to the login API
export type LoginRequest = {
    username : string;
    password : string;
}

export type LoginResponse = {
    token : string;
    expiresAt : string;
    tokenType : string;
    userId : Number;
    username : string;
    userRole : string;
}