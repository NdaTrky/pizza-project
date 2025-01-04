   // cypress/e2e/order.spec.js

   describe('Order Page Validations', () => {
    beforeEach(() => {
      cy.visit("/"); // Order sayfasına git
    });

    it('should show error when size is not selected', () => {
      cy.get('button[type="submit"]').click(); // Sipariş Ver butonuna tıkla
      cy.contains('Boş bırakılamaz').should('be.visible'); // Hata mesajını kontrol et
    });

    it('should show error when dough is not selected', () => {
      cy.get('input[type="radio"]').first().check(); // Boyut seç
      cy.get('button[type="submit"]').click(); // Sipariş Ver butonuna tıkla
      cy.contains('Boş bırakılamaz').should('be.visible'); // Hata mesajını kontrol et
    });

    it('should allow selecting up to 10 extras', () => {
      cy.get('input[type="radio"]').first().check(); // Boyut seç
      cy.get('select').select('ince'); // Hamur kalınlığı seç

      // 10 ekstra malzeme seç
      const extras = [
        "Pepperoni", "Tavuk Izgara", "Mısır", "Peynir", "Sarımsak", 
        "Ananas", "Sosis", "Soğan", "Sucuk", "Biber"
      ];

      extras.forEach(extra => {
        cy.contains(extra).prev().check(); // Ekstra malzemeyi seç
      });

      // 11. ekstra malzemeyi seçmeye çalış
      cy.contains("Kabak").prev().check(); // 11. malzeme
      cy.contains('En fazla 10 ek malzeme seçimi yapabilirsiniz!').should('be.visible'); // Hata mesajını kontrol et
    });
  });