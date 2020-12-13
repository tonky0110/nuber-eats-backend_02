import { Field, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entities/core.entity";
import { Column, Entity } from "typeorm";


enum UserRole{
    Client,
    Owner,
    Delivery,
};

registerEnumType(UserRole, { name: 'UserRole' });

@InputType({ isAbstract: true }) // form graphql 실제 스키마는 만들어지지 않는다.
@ObjectType() // form graphql
@Entity() // for TypeORM
export class User extends CoreEntity{

    @Column() // for TypeORM
    @Field(type => String) // for graphql
    email: string;
    
    @Column() // for TypeORM
    @Field(type => String) // for graphql
    password: string;

    @Column({ type: 'enum', enum: UserRole }) // for TypeORM
    @Field(type => UserRole) // for graphql
    role: UserRole;
}