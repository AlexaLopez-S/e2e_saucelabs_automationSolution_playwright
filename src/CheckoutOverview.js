class CheckoutOverview{
    constructor(page){
        this.finishButton = page.getByTestId("finish");
    }

   /**
   * Click finish button
   */
    async clickFinishButton(){
        await this.finishButton.click();
    }
}
export default CheckoutOverview;