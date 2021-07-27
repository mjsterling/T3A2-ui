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

    it('should show an error if you input incorrect details', () => {
        cy.contains('Invalid username or password')
    })
})

describe('login request', () => {
    it('should return a token from a request with correct login details', () => {
        cy.request({
            method: "post",
            url: `http://localhost:3000/login`,
            headers: {
              "Content-Type": "application/json",
            },
            body: {
              email: 'dburgan@live.com',
              password: 'burgand98'
            }
        })
        .then((response)=>{
            expect(response.body).have.property('token')
        })
    })
})