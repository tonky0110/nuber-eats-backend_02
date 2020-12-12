import { Field, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType() // 스키마를 빌드하기 위해 사용하는 Graphql decorator
@Entity() // for TypeORM
export class Restaurant {

    @Field(type => Number) // for graphql
    @PrimaryGeneratedColumn() // for typeORM
    id: number;

    @Field(type => String) // for graphql
    @Column() // for typeORM
    @IsString() // for validation체크
    @Length(5) // for validation체크
    name: string;

    @Field(type => Boolean, { defaultValue: true }) // for graphql
    @Column({ default: true }) // for typeORM
    @IsOptional() // for validation체크
    @IsBoolean() // for validation체크
    isVegan: boolean;

    @Field(type => String, { defaultValue: '강남'}) // for graphql
    @Column() // for typeORM
    @IsString() // for validation체크
    address: string;

    @Field(type => String) // for graphql
    @Column() // for typeORM
    @IsString() // for validation체크
    ownersName: string;

    @Field(type => String, { defaultValue: '' }) // for graphql
    @Column({ default: '' }) // for typeORM
    @IsString() // for validation체크
    cetegoryName: string; 
}