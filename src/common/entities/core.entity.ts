import { Field } from "@nestjs/graphql";
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CoreEntity {
    @PrimaryGeneratedColumn() // for typeORM
    @Field(type => Number) // for graphql
    id: number;

    @CreateDateColumn() // for typeORM
    @Field(type => Date) // for graphql
    createdAt: Date;

    @UpdateDateColumn() // for typeORM
    @Field(type => Date) // for graphql
    updatedAt: Date;
}