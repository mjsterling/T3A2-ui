describe('should open the booking request page', () => {
    it('opens the page', () => {
        cy.visit('/book')
    })
})

describe('calendar', () => {
    it('should be able to open the calendar', ()=> {
        cy.get('input[type="text"]').first().click()
        cy.get('button').eq(46).click()
        cy.contains('OK').click()
    })
})

describe('PaxIcons', () => {
    it('click buttons to increment', () => {
        cy.get('[type="button"]').eq(2).click()
    })
})

describe('Details form', () => {
    it('should let you type in a field', () => {
        cy.get('input[type="text"]').eq(2).type(`Rick`)
        cy.get('input[type="text"]').eq(3).type(`Astley`)
        cy.get('input[type="text"]').eq(4).type(`rick@rickastley.com`)
        cy.get('input[type="text"]').eq(5).type(`04123123123`)
    })
})

describe('Ts&Cs & Privacy', () => {
    it('should be able to accept terms', () => {
        cy.get('[type="checkbox"]').first().check()
    })
    it('should be able to accept terms', () => {
        cy.get('[type="checkbox"]').eq(1).check()
    })
})

describe('should be able to create a booking by clicking the book button', () => {
    it('should have a book button', () => {
        cy.contains('Book');
    })

    it('should submit a booking request', () => {
        cy.contains('Book').click();
    })

    it('if failed should present booking error', ()=>{
        cy.contains('Booking Error')
    })
})