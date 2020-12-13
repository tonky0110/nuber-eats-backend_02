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

    async login({ email, password }): Promise<{ ok: boolean, error?: string, token?: string }> {
        try {
            // 1. find the user with the email.
            const user = await this.users.findOne({ email });
            if(!user) {
                return {
                    ok: false,
                    error: 'User not found.'
                };
            }

            // 2. check if the password is correct.
            const paswordCorrect = await user.checkPassword(password);
            if(!paswordCorrect) {
                return {
                    ok: false,
                    error: 'Wrong Password.'
                };
            }

            // 3. make a JWT and give it to the user
            return {
                ok: true,
                error: null,
                token: 'lalalalal'
            };
        } catch (error) {
            return {
                ok: false,
                error: ''
            }
        }

    }
}