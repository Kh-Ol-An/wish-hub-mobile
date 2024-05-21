export interface IUser {
    id: string;
    firstName: string;
    lastName?: string;
    hasPassword: boolean;
    email: string;
    avatar?: string;
    wishList: string[];
    successfulWishes: number;
    unsuccessfulWishes: number;
    friends: string[];
    followFrom: string[];
    followTo: string[];
    isActivated: boolean;
}
