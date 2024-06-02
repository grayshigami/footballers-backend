export class UpdateForwardDto {
    name?: string;
    nationalityFlag?: {
        flag?: string;
        name?: string;
    };
    birthplace?: string;
    countryOfBirth?: {
        flag?: string;
        name?: string;
    };
    position?: string;
    height?: number;
    birthday?: string;
    apps?: number;
    goals?: number;
    intCaps?: number;
    intGoals?: number;
    team?: {
        logo?: string;
        name?: string;
    };
    tc?: string;
}
