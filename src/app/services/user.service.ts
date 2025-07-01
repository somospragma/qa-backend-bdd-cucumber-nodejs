import { User, CreateUserDTO } from '../models/user.model';

export class UserService {

    private users: User[] = [];
    private nextId = 1;

    createUser(userData: CreateUserDTO) {
        const newUser: User = {
            id: this.nextId++,
            ...userData,
        };
        this.users.push(newUser);
        return { success: true, code: 200, message: 'Succesfuly!', body: newUser };
    }

    getAllUsers() {
        const listUsers = this.users;
        if (listUsers.length === 0) {
            return { success: true, code: 404, message: 'Data not found!', body: listUsers };
        };
        return { success: true, code: 200, message: 'Succesfuly!', body: listUsers };
    }

    getUserById(id: number): User | undefined {
        return this.users.find((user) => user.id === id);
    }

    updateUser(id: number, userData: Partial<CreateUserDTO>): User | undefined {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex === -1) return undefined;
        this.users[userIndex] = { ...this.users[userIndex], ...userData };
        return this.users[userIndex];
    }

    deleteUser(id: number): boolean {
        const initialLength = this.users.length;
        this.users = this.users.filter((user) => user.id !== id);
        return this.users.length !== initialLength;
    }
}