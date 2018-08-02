const isStubbed = true;

const beckEndApiUrl = 'http://localhost:3000/api';

describe('SIGNUP testing', () => {
  let currentUser;
  before(() => {
    cy.fixture('test-user.json')
      .then((response) => {
        currentUser = response;
        console.log(response, 'response')

        if (isStubbed) {
          cy.server();
          cy.route({
            method: 'POST',
            url: `${backEndApiUrl}/signup*`,
            response: {
              token: 'fakeToken94949',
            },
          });
          cy.route({
            method: 'GET',
            url: `${backEndApiUrl}/login*`,
            response: {
              token: 'fakeToken94949',
            },
          });
        }
      });
  });

  it('should sign up a new user starting at the homepage', () => {
    cy.visit('/');
    cy.get('a[href="/signup"]').click();
    cy.url().should('include', '/signup');

    cy.get('input[name=username]').type(currentUser.username);
    cy.get('input[name=email]').type(currentUser.email);
    cy.get('input[name=password]').type(currentUser.password);

    cy.get('form.auth-form').submit()
      .then(() => {
        cy.url().should('include', '/dashboard');
      })
  })
})

