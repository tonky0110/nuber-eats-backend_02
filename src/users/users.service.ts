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

    async createAccount({ email, password, role }): Promise<{ ok: boolean, error?: string }> {
        // check new User
        try {
            // check exists user
            const exists = await this.users.findOne({ email });
            if(exists) {
                // make error
                return {
                    ok: false,
                    error: 'There is a user width that email already.'
                };
            }
            // create user & hash the password
            await this.users.save(await this.users.create({ email, password, role }));
            return { ok: true };
        } catch (error) {
            return {
                ok: false,
                error: "couldn't create account."
            };
        }
    }
}