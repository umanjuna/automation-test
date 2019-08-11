import Page from "./page";

class NavigateUtilPage extends Page{

  get mortgagesPrimaryMenu() {
    return $('#MortgagesNavItem');
  }

  get mortgagesRatesSecondaryMenu() {
    return this.mortgagesPrimaryMenu.element('a[href="/products/mortgages/our-mortgage-rates"]');
  }

  SelectNewMortgagesMortgageRates() {
    this.mortgagesPrimaryMenu.waitForVisible();
    this.mortgagesPrimaryMenu.moveToObject();
    this.mortgagesRatesSecondaryMenu.waitForVisible();
    return this.mortgagesRatesSecondaryMenu.click();
  }
}

export default new NavigateUtilPage();
