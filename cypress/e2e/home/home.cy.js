describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/home')
    })
  
    it('should render a greeting title', () => {
        cy.get('[cy-name="title"]').should('include.text', 'Welcome');
    })

    it('should have the following list of weather forecasting options: District of Columbia Forecast ( LWX ), Kansas Forecast ( TOP )', () => {
        cy.get('[cy-name="weather-forecasting-options"] button').should('exist');
        cy.get('[cy-name="btn-lwx-option"]').should('contain', 'District of Columbia Forecast');
        cy.get('[cy-name="btn-top-option"]').should('contain', 'Kansas Forecast');
    })


    it('should redirect to /weather/LWX when "District of Columbia Forecast" button is clicked.', () => {
        cy.get('[cy-name="btn-lwx-option"]').click();
        cy.url().should('contain', '/weather/LWX'); 
    })

    it('should redirect to /weather/TOP when "Kansas Forecast" button is clicked.', () => {
        cy.get('[cy-name="btn-top-option"]').click();
        cy.url().should('contain', '/weather/TOP'); 
    })
    
})
  