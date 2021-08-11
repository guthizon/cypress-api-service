# Smart Câmeras Testes Automatizados

## Configurando o Ambiente

* Instalar Node.js: acesse o site oficial, baixe e instale a versão para seu computador.

* Instalar VSCode

* Instalar plugins no VSCode: 

    * Cucumber (Gherkin) Full Support: Para snippets e templates do Cucumber.
    * vscode-icons: Para melhoras visualização dos ícones dos arquivos do projeto.

* Instalar cypress: npm install cypress --save-dev (Atenção: antivirus pode bloquear).

* Instalar demais dependências do projeto: npm install

* Instalar Allure Report: Pode ser utilizado o scoop (para windows) para instalar Allure de uma forma automática, ou fazer manualmente: https://docs.qameta.io/allure/

## Estrutura do Projeto

O projeto utiliza o padrão Page Objects, desta forma o projeto tem a seguinte estrutura:

* integration: arquivos com os cenários de teste escritos no formato BDD.
* plugin/index.js: este arquivo é destinado para configuração de plugins. É utilizado para configurar o Cucumber, por exemplo.
* support: nessa pasta ficam os steps, os scripts e o mapeamento de elementos dos testes.
    * steps: passos que farão a conexão entre o BDD e os scripts Cypress.
    * pageobjects: nesta pasta ficam os arquivos .js com os scripts Cypress.
    * elements: arquivos que contém os elementos da página. Tal organização permite que elementos sejam reutilizados e tenham fácil manutenção.
* node_modules: dependências do projeto, não devem ser mexidos.
* cypress.json: arquivo que contém as configurações globais do projeto. Ex.: variáveis globais, resolução do navegador, URL padrão, entre outros.

## Inatalação das Packages

Para instalar as dependências do projeto:

- abra o terminal e acesse a pasta onde o projeto está instalado;
- no mesmo diretório onde se encontra o arquivo 'package.json' execute o comando ```npm install```;
- em seguida finalize a instalação dos arquivos para o Cypress e em seguida será exibida: ```npx cypress open```.

**Observação**
Caso ocorra erro na instalação do Cypress por conta de incompatibilidade com arquitetura do sistema operacional, realize o seguinte procedimento:
- No arquivo 'package.json' localize a dependência do Cypress e exclua;
- Em seguida execute o comando no terminal ```npm cypress install```;
- Após finalizar execute o comando ```npx cypress open```.
### > Documentação Oficial Cypress e Outros Links Úteis

* https://docs.cypress.io/ - Documentação Cypress
* https://cucumber.io/docs/cucumber/ - Documentação Cucumber
* https://www.npmjs.com/package/cypress-cucumber-preprocessor - Documentação Cypress+Cucumber
* https://docs.qameta.io/allure/ - Documentação Allure