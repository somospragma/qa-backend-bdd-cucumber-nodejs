Feature: Autenticar usuarios

    Scenario: Usuario ingresa credenciales válidas y la autenticación es exitosa
        Given Un servicio de login
        When Usuario ingresa "admin" y "admin"
        Then El servicio debe responder con código 200

    Scenario: Usuario ingresa credenciales inválidas y la autenticación no es exitosa
        Given Un servicio de login
        When Usuario ingresa "admin1" y "admin2"
        Then El servicio debe responder con código 401