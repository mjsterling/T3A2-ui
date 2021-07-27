describe('login', ()=>{
    it('should visit login', ()=>{ 
        cy.visit('/login')
    })

    it('should not be able to click login button before typing in details', ()=>{
        cy.get('button').should('be.disabled')
    })

    it('should be able to type email address and password', () => {
        cy.get('input[type="text"]').eq(0).type(`rick@astley.com`)
        cy.get('input[type="password"]').eq(0).type(`getrickrolled`)
    })

    it('should make a request when you press login', ()=>{
        cy.get('button').eq(1).click()
    })
})