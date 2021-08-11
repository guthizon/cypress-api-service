import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import CommonsPage from "../pageobjects/commonsPage";

const commonsPage = new CommonsPage

let response = undefined;
let url = '';
let headerKey = 'Authorization';
let headerValue = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJUZXN0ZSBTYXNjYXIiLCJleHAiOhjksahkshajkahkjahskjah.xsSudYwZVloZd_OZXaIc8sSVdBPqCkEaQL64ZldBRS3p1hDkjfxt3nE_GIOfMsma3Tyj2SGKwKTh2HmCFPx0KQ';
let params = '';
let values = undefined;
let body = {};

beforeEach(() => {
  url = '';
  params = '';
})

Given('acesso a url {string}', uri => {
  url = uri;
})

When('informo o endpoint {string}', endpoint => {
  url += endpoint;
})

When('informo o valor para o parâmetro {string} {string} no header da requisição', function(key, value) {
  headerKey = key;
  headerValue = value;
})

When('não informo o Auth do header', () => {
  headerValue = '';
})

When('passo os parâmtros para a requisição {string}', param => {
  params = param;
})

When('realizo a requisição do tipo GET', () => {
  cy.request({
    method: 'GET',
    form: true,
    url: url,
    headers: {
      [headerKey] : headerValue
    },
    failOnStatusCode: false,
    qs: {
      search: `{${params}}`
    }
  })
  .then((res) => {
    response = res;
  })
})

When('realizo a requisição do tipo POST', () => {
  cy.request({
    method: 'POST',
    url: url,
    headers: {
      [headerKey] : headerValue,
      'Content-type': 'application/json'
    },
    failOnStatusCode: false,
    qs: {
      search: `{${params}}`
    },
    body: 
      values
    })
  .then((res) => {
    response = res;
  })
})

When('realizo a requisição do tipo PUT', () => {
  cy.request({
    method: 'PUT',
    url: url,
    headers: {
      [headerKey] : headerValue,
      'Content-type': 'application/json'
    },
    failOnStatusCode: false,
    body: 
      values
    })
  .then((res) => {
    response = res;
  })
})

When('realizo a requisição do tipo DELETE', () => {
  cy.request({
    method: 'DELETE',
    url: url,
    headers: {
      [headerKey] : headerValue,
      'Content-type': 'application/json'
    },
    failOnStatusCode: false,
    })
  .then((res) => {
    response = res;
  })
})

Then('deve retornar o status {string}', status => {
  console.log(response);
  cy.log(response);
  expect(response.status).to.eq(+status);
})

Then('deve apresentar no corpo da requisição o texto {string}', result => {
  expect(JSON.stringify(response.body)).to.have.string(result);
  // assert.include(JSON.stringify(response.body), result);
})

Then('deve apresentar no corpo da requisição os valores', dataTable => {
  let columns = Object.keys(dataTable.hashes()[0]).length;
  let rows = dataTable.hashes().length;
  let dt = dataTable.hashes();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      expect(JSON.stringify(response.body)).to.have.string(Object.values(dt[i])[j]);
    }
  }
})

Then('não deve apresentar no corpo da requisição o texto {string}', string => {
  assert.notInclude(JSON.stringify(response.body), string);
})

Then('o objeto {string} deve retornar {int} registros', (objeto, total) => {
  console.log(response.body);
  let teste = commonsPage.objectJson(response.body, objeto);
  expect(total).to.equal(teste.length);
})

Then('o objeto {string} deve exibir os valores', (objeto, dataTable) => {
  let columns = Object.keys(dataTable.hashes()[0]).length;
  let rows = dataTable.hashes().length;
  let dt = dataTable.hashes();
  let obj = commonsPage.objectJson(response.body, objeto);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      expect(JSON.stringify(columns > 1 ? obj[i] : obj)).to.have.string(Object.values(dt[i])[j]);
    }
  }
})

When('envio os valores no body da requisição {string}', bodyValue => {
  values = bodyValue;
})

When('envio os valores no body da requisição', dataTable => {
  body = {};
  dataTable.hashes().forEach(dt => {
    let key = dt.key;
    body[key] = dt.value;
  });
  values = body;
  console.log(values);
})

Then('o tempo de resposta deve ser menor que {int}', time => {
  let duration = JSON.stringify(response.duration);
  cy.wrap(+duration).should('be.lt', time);
})

// Given('teste usuário', () => {
//   cy.request({
//       url: 'http://localhost:8081/user', 
//       headers: {
//           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA'
//       }
//   })
//   .then((res) => {
//       response = res;
//       // expect(res.status).to.eq(200)
//       // expect(JSON.stringify(res.body)).to.have.string('Leonardo')
//   })
// });

// Given('teste usuário', () => {
//   cy.request({
//       url: 'http://localhost:8081/user', 
//   })
//   .then((res) => {
//       expect(res.status).to.eq(403)
//       expect(JSON.stringify(res.body)).to.have.string('\"error\": \"you do not have access to this resource\"')
//   })
// });