import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from 'chai';

import { LoginService  } from '../../../src/app/services/login.service';

let loginService: any;
let response: any;

Given('Un servicio de login', () => {
    loginService = new LoginService();
});

When('Usuario ingresa {string} y {string}', (userName: string, password: string) => {
    response = loginService.login(userName, password);
});

Then('El servicio debe responder con código {int}', (code: number) => {
    expect(response.code).to.equal(code);
});
