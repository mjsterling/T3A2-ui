describe('admin room page', ()=>{
    it('should visit the room page', ()=>{

        cy.visit('/room/1')
    })
    describe('calendar', ()=>{
        it('should change date when clicking a day', ()=>{
        })
    })
    describe('new booking', () => {
        it('should open a new booking application popup', () => {
            cy.get('button').eq(1).click()
        })

        it('should let you type in a field', () => {
            cy.get('input[type="text"]').eq(2).type(`Rick`)
            cy.get('input[type="text"]').eq(3).type(`Astley`)
            cy.get('input[type="text"]').eq(4).type(`rick@rickastley.com`)
            cy.get('input[type="text"]').eq(5).type(`04123123123`)
        })

        it('should post a request when clicking create booking', ()=>{
            cy.get('button').eq(8).click();
        })
    })
})