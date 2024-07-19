const { timeout } = require("rxjs");

describe('Weather Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/home')
    })
  
    context('On, District of Columbia Forecast page', () => {
        beforeEach(() => {
            cy.visit('http://localhost:4200/weather/LWX')
        })

        it('should render a title of the chart', () => {
            cy.get('[cy-name="title"]').should('include.text', 'District of Columbia Forecast');
        })


        it('should show a loading spinner while fetching data', () => {
            cy.get('[cy-name="loading-spinner"]').should('exist');
        })

        it('should render the line chart when data is compleated fetched from API', () => {
            cy.get('[cy-name="weather-chart"]', {timeout: 5000}).should('exist');
        })

        it('should render weather forecast details on a card element which was previously fetched from API', () => {
            cy.get('[cy-name="weather-forecast-details-card-container"]', {timeout: 5000}).should('exist');
            cy.get('[cy-name="weather-forecast-details-card-container"]')
                .find('[cy-name="card-date"],[cy-name="card-forecast"],[cy-name="card-temperature"],[cy-name="card-wind-direction"],[cy-name="card-wind-speed"]',{timeout: 5000}).should('exist');                
        })

    });

    context('On, Kansas Forecast page', () => {
        beforeEach(() => {
            cy.visit('http://localhost:4200/weather/TOP')
        })

        it('should render a title of the chart', () => {
            cy.get('[cy-name="title"]').should('include.text', 'Kansas Forecast');
        })


        it('should show a loading spinner while fetching data', () => {
            cy.get('[cy-name="loading-spinner"]').should('exist');
        })

        it('should render the line chart when data is compleated fetched from API', () => {
            cy.get('[cy-name="weather-chart"]', {timeout: 5000}).should('exist');
        })
    });

    
})
  