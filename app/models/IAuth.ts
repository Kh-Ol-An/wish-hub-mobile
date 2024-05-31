import { IUser } from '@/app/models/IUser';

export interface IAuth {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}
