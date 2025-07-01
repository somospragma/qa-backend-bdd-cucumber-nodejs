import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

import { UserService } from '../../../src/app/services/user.service'; 
import { CreateUserDTO } from '../../../src/app/models/user.model';

let userService: UserService;
let userDataList: CreateUserDTO[];
let responses: any[];

Given('Ingreso la siguiente data de varios usuarios:', function (dataTable: any) {
    userService = new UserService();
    userDataList = dataTable.hashes();
});

When('Voy a crear varios usuarios', function () {
    responses = userDataList.map((userData) => userService.createUser(userData));
    console.log(responses);
});

Then('Debería recibir una respuesta exitosa con código {int} y el detalle de los nuevos usuarios', function (code: number) {
    responses.forEach((response, index) => {
        const userData = userDataList[index];

        expect(response).to.deep.equal({
            success: true,
            code,
            message: 'Succesfuly!',
            body: {
                id: response.body.id,
                name: userData.name,
                email: userData.email,
                age: userData.age
            }
        });
        expect(response.body.id).to.be.a('number').and.to.be.greaterThan(0);
    });
});