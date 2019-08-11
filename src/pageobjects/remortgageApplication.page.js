import Page from './page'

class RemortgageApplicationPage extends Page{

  /**
   * define elements
   */
  get getHeading() {
    return $('[class="blue boldText headingSize02  center "]');
  }
}
export default new RemortgageApplicationPage();
