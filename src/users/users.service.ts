import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInput } from "./dto/create-account.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(User)
        private readonly users: Repository<User>) {}
    
    getAll(): Promise<User[]> {
        return this.users.find();
    }

    async createAccount({ email, password, role }) {
        // check new User
        try {
            const exists = await this.users.findOne({ email });
            if(exists) {
                // exists user.
                // make error
                return;
            }
            // create user & hash the password
            await this.users.save(await this.users.create({ email, password, role }));
            return true;
        } catch (error) {
            return;
        }
        
        // return 
    }
}