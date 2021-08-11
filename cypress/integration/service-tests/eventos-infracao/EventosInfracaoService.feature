@test
Feature: Eventos de Infração Services

  @test
  Scenario: POST /test - Teste novo projeto
    Given acesso a url "http://www.pudim.com.br"
    When informo o endpoint "/teste"
    When envio os valores no body da requisição '{"teste":"teste1"}'
    When realizo a requisição do tipo POST
    Then deve retornar o status "200"
    Then o objeto "data.events" deve retornar 3 registros
    Then deve apresentar no corpo da requisição os valores
      | motorista | placa   |
      | joao      | QQQ1111 |
    Then o tempo de resposta deve ser menor que 10000
    When envio os valores no body da requisição
      | key        | value      |
      | startDate  | 2021-07-01 |
      | endDate    | 2021-07-01 |
      | customerId | 121212     |
      | userId     | 121212     |
    When realizo a requisição do tipo POST
    Then deve retornar o status "200"
    Then deve apresentar no corpo da requisição o texto '{"teste":1,"teste":2,"teste":3,"totalPages":1}'
