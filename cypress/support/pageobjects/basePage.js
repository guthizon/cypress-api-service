class BasePage {

    screenshotStep() {
        let step = window.testState.currentStep;
        let descStep = window.testState.currentScenario.steps[step].text
        cy.screenshot(descStep);
    }

    clickOnButton(button) {
        cy.get('button').contains(button).screenshot(`Clicou no botão ${button}`);
        cy.get('button').contains(button).click({force: true});
    }

    clickOnElement(element) {
        cy.get(element).click({force: true}).screenshot(`Clicou no elemento ${element}`);
    }
  
    forceClickOnElement(element) {
        cy.get(element).click({force: true, multiple: true}).screenshot(`Clicou no elemento ${element}`);
    }

    clickOnElementByXpath(element) {
        cy.screenshot(`Clicou no elemento ${element}`);
        cy.xpath(element).click({force: true})
    }
    
    forceClickOnElementByXpath(element) {
        cy.screenshot(`Clicou no elemento ${element}`);
        cy.xpath(element).click({force: true, multiple: true})
    }

    getProperties() {
        cy.fixture('properties').then((prop) => {
            return prop;
        })
    }

    typeOnElement(element, valor) {
        cy.get(element).clear();
        cy.get(element).type(valor, {force: true}).screenshot(`informou o valor ${valor} no campo ${element}`)
    }

    typeOnElementByXpath(element, valor) {
        cy.xpath(element).clear();
        cy.xpath(element).type(valor, {force: true}).screenshot(`informou o valor ${valor} no campo ${element}`)
    }

    checkElementByXpath(element) {
        cy.xpath(element).click({force: true}).screenshot('check no elemento');
    }

    checkElementBy(element) {
        cy.get(element).click({force: true}).screenshot('check no elemento');
    }

    getMes(mes) {
        let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let index = meses.indexOf(mes);
        return index+1;
    }

    assertElementIsPresent(element) {
        cy.get(element).should('exist').screenshot(`ELemento ${element} existe`);
    }

    assertElementIsPresentByXpath(element) {
        cy.xpath(element).should('exist').screenshot(`ELemento ${element} existe`);
    }

    assertElementIsVisibleByXpath(element) {
        cy.xpath(element).should('be.visible').screenshot(`ELemento ${element} existe`);
    }

    wait(time) {
        cy.wait(time);
    }

    assertElementContainsValue(element, value) {
        cy.get(element).should('contain', value)
        cy.screenshot('Elemento conteém o valor');
    }
 
}


export default BasePage;