import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Forward extends Document {
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
    position: string;
    @Prop()
    height: number;
    @Prop()
    birthday: string;
    @Prop()
    apps: number;
    @Prop()
    goals: number;
    @Prop()
    intCaps: number;
    @Prop()
    intGoals: number;
    @Prop({type: Object})
    team: {
        logo: string;
        name: string;
    };
    @Prop()
    tc: string;
}

export const ForwardSchema = SchemaFactory.createForClass(Forward);