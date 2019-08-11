import { Given } from 'cucumber';
import { Then } from 'cucumber';
import { When } from 'cucumber';
import NewMortgageRatesPage from '../pageobjects/newMortgageRates.page';
import FeedbackPage from '../pageobjects/feedback.page';
import RemortgageApplicationPage from '../pageobjects/remortgageApplication.page'
import NavigationUtilPage from '../pageobjects/navigationUtil.page'


  Given(/^I open the url "([^"]*)?"$/, (url) => {
        browser.url(url);
        expect(browser.getTitle()).to.be.eql('Nationwide Building Society | building society, nationwide');
    });

  Given(/^I am on the new mortgage rates page$/, () => {
      //NewMortgageRatesPage.open();
      NavigationUtilPage.SelectNewMortgagesMortgageRates();
      FeedbackPage.waitAndDismissFeedbackBox();
    });

  When(/^I search for a mortgage with search terms:$/, (table)=> {
    const searchDetails = table.hashes()[0];

    if (searchDetails['Nationwide mortgage'] === 'No') {
      NewMortgageRatesPage.haveNationWideMortgage.click();
    }

    if (searchDetails['Type of mortgage'] === 'Changing lender') {
      NewMortgageRatesPage.changingLenderMortgageType.click();
    }

    NewMortgageRatesPage.propertyValue.setValue(searchDetails['Property value']);
    NewMortgageRatesPage.mortgageAmount.setValue(searchDetails['Mortgage amount']);
    NewMortgageRatesPage.mortgageTerm.setValue(searchDetails['Term']);
    NewMortgageRatesPage.searchButton.click();
  });

  Then(/^I am shown the different mortgage rates$/, () => {
  });

  Then(/^I filter results by fixed mortgage type with product fee$/, () => {
    NewMortgageRatesPage.selectFixedRate();
    NewMortgageRatesPage.selectProductFee();
  });

  Then(/^the filtered results should contain below/, (table) =>  {
    for (let expectedResult of table.hashes()) {
      let checkResultsContain = NewMortgageRatesPage.checkResultsContain(expectedResult['Expected Results']);
      expect(checkResultsContain).to.be.eql(true);
    }
  });

  When(/^I apply for product type "([^"]*)"$/, (arg1) =>  {
    NewMortgageRatesPage.selectMoreInfo(arg1);
    NewMortgageRatesPage.apply('5 yr Fixed');
  });

  Then(/^I should progress to the Ready to Apply page$/, () => {
    expect(RemortgageApplicationPage.getHeading.getText().toLowerCase().includes('start your remortgage application')).to.be.equal(true);
  });
