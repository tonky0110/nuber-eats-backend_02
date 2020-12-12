import { Field, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType() // 스키마를 빌드하기 위해 사용하는 Graphql decorator
@Entity() // for TypeORM
export class Restaurant {

    @Field(type => Number) // Grapqhl entity
    @PrimaryGeneratedColumn() // typeORM entity
    id: number;

    @Field(type => String) // Grapqhl entity
    @Column() // typeORM entity
    @IsString() // validation체크
    @Length(5)
    name: string;

    @Field(type => Boolean)
    @Column()
    @IsBoolean() // validation체크
    isVegan: boolean;

    @Field(type => String)
    @Column()
    @IsString() // validation체크
    address: string;

    @Field(type => String)
    @Column()
    @IsString() // validation체크
    ownersName: string;

    @Field(type => String)
    @Column()
    @IsString() // validation체크
    cetegoryName: string; 
}