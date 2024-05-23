export interface IToken{
    userId: number;
    device: string;
    accessToken: string;
    expiresAt: Date;
}