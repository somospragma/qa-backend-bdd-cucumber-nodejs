import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from 'chai';

import { CreateUserDTO } from '../../../src/app/models/user.model';
import { UserService } from '../../../src/app/services/user.service';

let userService: UserService;
let userData: CreateUserDTO;
let response: any;

Given('Ingreso información válida de un usuario como nombre {string}, email {string}, edad {int}', (name: string, email: string, age: number) => {
    userService = new UserService();
    userData = { name, email, age };
});

When('Voy a crear un nuevo usuario', () => {
    response = userService.createUser(userData);
});

Then('Debería recibir una respuesta exitosa con código {int} y el detalle del nuevo usuario', (code: number) => {
    expect(response).to.deep.equal({
        success: true,
        code,
        message: 'Succesfuly!',
        body: {
            id: response.body.id,
            name: userData.name,
            email: userData.email,
            age: userData.age,
        },
    });
    expect(response.body.id).to.be.a('number').and.to.be.greaterThan(0);
});
