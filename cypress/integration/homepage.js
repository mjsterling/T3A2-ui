describe('Client home page', function(){
    it('should show my page', function(){
        cy.visit('/')
    })
})

describe('Calendar', () => {
    it('should open a calendar', () => {
        cy.get('.date-picker').first().click()
    })

    it('should close calendar on clicking ok', () => {
        cy.contains('OK').click()
    })
})