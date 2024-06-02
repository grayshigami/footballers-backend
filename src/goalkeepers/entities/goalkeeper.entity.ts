import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Goalkeeper extends Document {
    @Prop()
    name: string;
    @Prop({type: Object})
    nationality: {
        flag: string;
        name: string;
    };
    @Prop()
    birthplace: string;
    @Prop({type: Object})
    countryOfBirth: {
        flag: string;
        name: string;
    };
    @Prop()
    height: number;
    @Prop()
    birthday: string;
    @Prop()
    apps: number;
    @Prop()
    intCaps: number;
    @Prop({type: Object})
    team: {
        logo: string;
        name: string;
    };
    @Prop()
    tc: string;
    @Prop()
    starter: string;
}

export const GoalkeeperSchema = SchemaFactory.createForClass(Goalkeeper);