export class UpdateGoalkeeperDto {
    name?: string;
    nationality?: {
        flag?: string;
        name?: string;
    };
    birthplace?: string;
    countryOfBirth?: {
        flag?: string;
        name?: string;
    };
    height?: number;
    birthday?: string;
    apps?: number;
    intCaps?: number;
    team?: {
        logo?: string;
        name?: string;
    };
    tc?: string;
    starter?: string;
}
