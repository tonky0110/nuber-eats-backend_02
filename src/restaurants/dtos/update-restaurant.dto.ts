import { ArgsType, Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./create-restaurant.dto";

// Update를 위해서는 id가 필요하지만, CreateRestaurantDto에서는 ID를 가지고 있지 않음.
// Partialtype으로 상속 후 UpdateRestaurantDto에서 ID + UpdateRestaurantInputType를 가지는 UpdateRestaurantDto를 생성 

@InputType()
export class UpdateRestaurantInputType extends PartialType(CreateRestaurantDto) {}

@InputType()
export class UpdateRestaurantDto {
    
    @Field(type => Number)
    id: number;

    @Field(type => UpdateRestaurantInputType)
    data: UpdateRestaurantInputType;
}
