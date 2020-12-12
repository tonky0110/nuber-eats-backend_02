import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType() // 스키마를 빌드하기 위해 사용하는 Graphql decorator
@Entity() // for TypeORM
export class Restaurant {

    @Field(type => Number) // Grapqhl entity
    @PrimaryGeneratedColumn() // typeORM entity
    id: number;

    @Field(type => String) // Grapqhl entity
    @Column() // typeORM entity
    name: string;

    @Field(type => Boolean)
    @Column()
    isVegan: boolean;

    @Field(type => String)
    @Column()
    address: string;

    @Field(type => String)
    @Column()
    ownersName: string;

    @Field(type => String)
    @Column()
    cetegoryName: string; 
}