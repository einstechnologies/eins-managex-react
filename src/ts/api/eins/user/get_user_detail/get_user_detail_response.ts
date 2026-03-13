export interface UserQueryParams {
    bioUserId?: string;
    firstName?: string;
    lastName?: string;
}

export interface Users {
    userId: number;
    bioUserId: number;
    startTime: string;
    endTime: string;
    gender: string;
    userType: boolean;
    fileName: string;
    filePath: string;
    userFirstName: string;
    userLastName: string;
    email_id: string;
    mobileNo: string;
}


