import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersRepository {
    private readonly repository;
    constructor(repository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    create(userData: Partial<User>): Promise<User>;
    update(id: number, userData: Partial<User>): Promise<User | null>;
    remove(id: number): Promise<void>;
}
