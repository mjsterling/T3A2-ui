describe('Admin-home', ()=>{
    it('should increment by 1 day, forward or back', ()=>{
        cy.visit('/admin')
        cy.get('button').eq(1).click()
        cy.get('button').eq(2).click()
    })
})