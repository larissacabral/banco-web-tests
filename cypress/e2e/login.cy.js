describe('login', () => {
  beforeEach(() => {
    //arrange
    cy.visit('http://localhost:4000')
    //cy.screenshot('apos-visitar-site')
  })
  it('Login com dados validos deve permitir entrada no sistema', () => {

    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('apos-preencher-dados')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-no-botao-entrar')
    //assert
    //cy.contains('sh4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    //act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()
    //assert
    cy.get('.toast').should('be.visible').should('have.text', 'Erro no login. Tente novamente.')
  })


})