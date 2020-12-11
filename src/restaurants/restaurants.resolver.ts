import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(of => Restaurant) // Restaurant entity의 resolver를 의미
export class RestaurantResolver{
    
    @Query(returns => [Restaurant]) // graphql에서의 return value 설정
    //            graphql            function 
    myRestaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] { // typescript에서의 return value설정.
        console.log(`veganOnly: ${veganOnly}`);
        return [];
    }

    @Mutation(returns => Boolean)
    createRestaurant(@Args() createRestaurantDto : CreateRestaurantDto): boolean {
            console.log(`createRestaurantDto: ${createRestaurantDto}`);
        return true;
    }
}
 