import { InputType, OmitType } from "@nestjs/graphql";
import { Restaurant } from "../entities/restaurant.entity";

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ["id"], InputType) {}
// 0: 상속하고자하는 entity객체.
// 1: 제외하고자하는 컬럼
// 2: entity타입이 다른 경우 변경(ObjectType --> InputType)
// 방법2 - entity @InputType({isAbstract: true})옵션 추가.(스키마에서는 제외하는 설정)