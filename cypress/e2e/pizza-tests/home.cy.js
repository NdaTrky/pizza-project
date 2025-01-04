describe('Pizza Ana Sayfa Testleri', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Ana sayfa başlığını kontrol et', () => {
    cy.get('h1').should('contain', 'Pizza')
  })

  it('Menü öğelerini kontrol et', () => {
    cy.get('.card').should('have.length.at.least', 1)
  })

  it('Sipariş butonunu kontrol et', () => {
    cy.get('button').contains('Sipariş Ver').should('be.visible')
  })
}) 