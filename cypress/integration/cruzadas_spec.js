describe('Habitica sobrecarga', function() {
    it('visits Habitica and log in', function() {
        cy.visit('https://habitica.com/static/home');
        cy.contains('Login').click();
        cy.wait(1000);
        cy.get('input[id=usernameInput]').click().type("davidernestopaniagua@gmail.com");
        cy.get('input[id=passwordInput]').click().type("Asdf1234");
        //cy.get('#login-form').get('div').eq(5).get('div').eq(1).click(); 
        //cy.contains('Login').click(); 
        //cy.contains('Login').get('a').eq(0).click(); 
        cy.get('div').filter('.btn').eq(2).click();
        cy.wait(5500);
        //cy.contains('Dismiss This Alert').click();
        
        for(var i=25;i<=100;i+5)
            {
            cy.get('div').filter('.positive').eq(0).click({force:true});
            cy.get('div').filter('#__BVID__211_').get('div').get('a').eq(i).click({force:true});
            }
    })
      
})
  
