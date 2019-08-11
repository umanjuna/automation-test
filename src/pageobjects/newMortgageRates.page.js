import Page from './page'

class NewMortgageRatesPage extends Page{
    /**
   * define elements
   */
    get haveNationWideMortgage() {
        return $('#selectorItemHaveNationwideMortgage1');
    }

    get changingLenderMortgageType() {
        return $('#selectorItemNationwideMortgageTypeNo2');
    }

    get propertyValue() {
        return $('#SearchPropertyValue');
    }

    get mortgageAmount() {
        return $('#SearchMortgageAmount');
    }

    get mortgageTerm() {
        return $('#SearchMortgageTerm');
    }

    get searchButton() {
        return $('#myButton');
    }

    get overlay()
    {
      return $('[class="overlay"]');
    }

    get mortgagesList()
    {
      return $('[class="results mortgageRatesResultsNew"]');
    }

    get filters()
    {
      return $('#newMortgageRatesTypeFilter');
    }

    get filterFixedRate() {
        return $('#fixed');
    }

    get filterFee() {
        return $('#product-fee-fee');
    }

    get productHeading() {
        $$('th.notOnMobile.productHeading');
    }

    get loading()
    {
      return $('[class="loading"]');
    }

    get lightboxOverlay()
    {
      return $('[class="lightbox"]')
    }

    get mortgageRatesTable()
    {
      return $$('#NewMortgageRateTables');
    }

    /**
   * define or overwrite page methods
   */
    open()
    {
      super.open("https://www.nationwide.co.uk/products/mortgages/our-mortgage-rates");
    }

    selectFixedRate()
    {
      browser.waitUntil(function() {
        return browser.isExisting('[class="overlay"]') === false;
      },10000);

      browser.waitUntil(function() {
        return browser.isVisible('#fixed');
        },10000);

      while(this.filterFixedRate.getAttribute('aria-checked') == 'false') {
        this.filterFixedRate.click();
      }

      browser.waitUntil(function ()
      {
        let y = true;

        let es=$$('th.notOnMobile.productHeading');
        es.forEach(function (x)
        {
            y = y && x.getText().toLowerCase().includes('fixed');
        });

        return y === true;
      }, 10000, undefined, 1000);
    }

    selectProductFee()
    {
      while(this.filterFee.getAttribute('aria-checked') === 'false') {
        this.filterFee.click();
      }

      browser.waitUntil(function ()
      {
        let y = true;
        let es=$$('//td//span[contains(.,\'Product fee\')]/parent::div/following-sibling::div');

        es.forEach(function (x)
        {
          let temp = x.getText().toLowerCase().indexOf("none") === -1;
          y = y && temp;
        });

        return y === true;
      }, 10000, undefined, 1000);
    }

    checkResultsContain(term)
    {
      let availableTerms = [];
      let ph = $$('th.notOnMobile.productHeading');

      ph.forEach(function (x)
      {
        availableTerms.push((x.getText()));
      });

      return availableTerms.includes(term);
    }

    selectMoreInfo(selectProduct) {
      const selector = '[data-product-name="' + selectProduct + '"]';
      browser.waitForVisible(selector, 10000);

      return $(selector).click('a.toggleMoreDetails');
    }

    apply(selectProduct)
    {
      const selector = 'a[data-productname^="' + selectProduct + '"]';
      browser.waitForVisible(selector, 10000);

      return $(selector).click();
    }
}

export default new NewMortgageRatesPage();
