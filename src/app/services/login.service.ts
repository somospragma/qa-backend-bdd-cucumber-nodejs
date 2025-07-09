export class LoginService {

    public userName: string = '';
    public password: string = '';

    public login(userName: string, password: string) {
        const user = users.find(user => user.userName === userName && user.password === password);
        if (!user) {
            return { success: false, code: 401, message: 'Invalid credentials' };
        }
        return { success: true, code: 200, message: 'Succesfuly!' };
    };
}

const users = [
    { userName: 'admin', password: 'admin' }
];