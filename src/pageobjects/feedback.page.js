import Page from "./page";

class FeedbackPage extends Page{

  get noThanks()
  {
    return $('[class="button buttonStyle03 survey-no"]');
  }

  waitAndDismissFeedbackBox()
  {
      this.noThanks.waitForVisible(40000);

      return this.noThanks.click();
  }
}

export default new FeedbackPage();
