import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';

@Resolver(of => Restaurant) // Restaurant entity의 resolver를 의미
export class RestaurantResolver{
    constructor(private readonly restaurantService: RestaurantService){};

    @Query(returns => [Restaurant]) // graphql에서의 return value 설정
    myRestaurants(): Promise<Restaurant[]> { // typescript에서의 return value설정.
        return this.restaurantService.getAll();
    }

    @Mutation(returns => Boolean)
    createRestaurant(@Args() createRestaurantDto : CreateRestaurantDto): boolean {
            console.log(`createRestaurantDto: ${createRestaurantDto}`);
        return true;
    }
}
 