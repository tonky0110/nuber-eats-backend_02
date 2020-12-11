import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(of => Restaurant) // Restaurant entity의 resolver를 의미
export class RestaurantResolver{
    
    @Query(returns => [Restaurant]) // graphql에서의 return value 설정
    //            graphql            function 
    myRestaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] { // typescript에서의 return value설정.
        console.log(`veganOnly: ${veganOnly}`);
        return [];
    }
}
 