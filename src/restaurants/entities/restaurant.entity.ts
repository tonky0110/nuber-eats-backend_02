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

    @Field(type => Boolean) // for graphql
    @Column({ default: true }) // for typeORM
    @IsOptional() // for validation체크
    @IsBoolean() // for validation체크
    isVegan: boolean;

    @Field(type => String) // for graphql
    @Column({ nullable: false, default: '강남' }) // for typeORM
    @IsOptional() // for validation체크
    @IsString() // for validation체크
    address: string;

    @Field(type => String) // for graphql
    @Column({ default: '' }) // for typeORM
    @IsOptional() // for validation체크
    @IsString() // for validation체크
    ownersName: string;

    @Field(type => String) // for graphql
    @Column({ default: '' }) // for typeORM
    @IsOptional() // for validation체크
    @IsString() // for validation체크
    cetegoryName: string; 
}

// data를 default 설정으로 넣고자 할 때.
// @Column({ default: '' }) + @InsOptional() 으로 전달.
// Field({ defaultFalue: '' })으로 호출하는 경우, mutation에서 값을 설정하지 않아도 graphql에서 자동으로 값을 넣고 호출함.