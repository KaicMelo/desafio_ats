class GenericSteps { 

  visit() {
    cy.visit('http://localhost:4200/');
  }

  getUserAvatar() {
    return cy.get(`[data-testid=UserAvatar]`);
  }

  goToSignIn() {
    const link = this.header.getSignInLink();
    link.click();

    const signIn = new SignInPage();
    return signIn;
  }
}

export default HomePage;