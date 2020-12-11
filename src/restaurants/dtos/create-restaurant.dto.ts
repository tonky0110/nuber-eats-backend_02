import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateRestaurantDto {
    @Field(type => String) // graphql
    name: string; // ts
    
    @Field(type => Boolean)
    isVegan: boolean;
    
    @Field(type => String)
    address: string;
    
    @Field(type => String)
    ownersName: string;
}