declare module 'coordinate_to_country';

declare module 'firebase' {
    export class User {
        updateProfile(update: object): Promise<void>;
    }
}
