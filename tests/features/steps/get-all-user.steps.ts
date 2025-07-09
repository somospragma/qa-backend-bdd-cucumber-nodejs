import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

import { UserService } from '../../../src/app/services/user.service';
import { CreateUserDTO } from '../../../src/app/models/user.model';

let userService: UserService;
let retrievedUsers: any;

Given('No hay usuarios registrados', () => {
    userService = new UserService();
});

Given('Estan registrados los siguientes usuarios:', (dataTable: any) => {
    userService = new UserService();
    const usersData = dataTable.hashes();
    usersData.forEach((userData: CreateUserDTO) => {
        userService.createUser(userData);
    });
});

When('Quiero obtener el listado de usuarios', () => {
    retrievedUsers = userService.getAllUsers();
});

Then('Deberia obtener una respuesta con código {int}', (code: number) => {
    expect(retrievedUsers.body).to.be.an('array').that.is.empty;
});

Then('Deberia obtener una respuesta con código {int} y los siguientes usuarios:', (code: number, dataTable: any) => {
    const expectedUsers = dataTable.hashes(); 
    expect(retrievedUsers.body).to.have.lengthOf(expectedUsers.length);
    expect(retrievedUsers).to.deep.equal({
            success: true,
            code,
            message: 'Succesfuly!',
            body: retrievedUsers.body,
        });
    retrievedUsers.body.forEach((user: any, index: number) => {
        expect(user.name).to.equal(expectedUsers[index].name);
        expect(user.email).to.equal(expectedUsers[index].email);
        expect(user.age).to.equal(expectedUsers[index].age);
    });
});