const DemoPage = require('../pageobjects/demo.page');


describe('Selenium Base demo page example tests', () =>

{
    it('should open the page and assert title of current page', async () =>{
        await DemoPage.open();
        browser.maximizeWindow();
        await expect(browser).toHaveTitle('Web Testing Page');
    });

    it('should have heading as Demo Page ', async () => {
        await expect(DemoPage.heading).toHaveTextContaining('Demo Page');
    });

    it('should type/update text in text fields on page', async () =>{
        await DemoPage.typeUpdate("This is Automated");
    });

    it('should hover over the dropdown link and changes page text', async () =>{
        await DemoPage.hover()
        await (await expect(DemoPage.heading3)).toHaveText('Link Two Selected');
    });

    it('should change the text on page on click', async () =>{
        await (await expect(DemoPage.paragraphwithtext)).toHaveText('This Text is Green');
        await (await DemoPage.button).click();
        await (await expect(DemoPage.paragraphwithtext)).toHaveText('This Text is Purple');
    });

    it('should check the svg is visible on page' , async () =>{
        await (await expect(DemoPage.svgelement)).toBeDisplayed();
    });

    it('should slide the progress bar to 100%', async () => {
        await (await expect(DemoPage.progressbar)).toHaveValue(50);
        await (await DemoPage.slider).dragAndDrop({ x: 100, y : 0})
        await (await expect(DemoPage.progressbar)).toHaveValue(100);
    });

    it('should select a value from dropdown and assert the value', async () =>{
        await (await expect(DemoPage.HTMLmeter)).toHaveValue(0.25);
        await (await DemoPage.selectdropdown).selectByVisibleText("Set to 75%");
        await (await expect(DemoPage.HTMLmeter)).toHaveValue(0.75);
    });
    
    it('should assert an element located inside an iFrame', async () => {
        await (await expect(DemoPage.img)).not.toBeDisplayed();
        await browser.switchToFrame(await DemoPage.iframe1);
        await (await expect(DemoPage.img)).toBeDisplayed();
        await browser.switchToParentFrame();
        await (await DemoPage.button).click()
    });

    it('should assert text located inside an iFrame', async () =>{
        
        await expect(await DemoPage.iframe2).not.toHaveText("iFrame Text");
        await browser.switchToFrame(await DemoPage.iframe2);
        await expect(await DemoPage.innertext).toHaveText("iFrame Text");
        await browser.switchToParentFrame()
    });
    
    it('should click on radio button and selects it', async () => {
        if(await (await DemoPage.radiobtn).isSelected){
           await (await DemoPage.radiobtn).click();
        }
        await expect( await DemoPage.radiobtn).toBeSelected();
    });

    it('should select  checkbox 1 and assert it', async () => {
        await expect( await DemoPage.checkbox1).not.toBeSelected();
        await (await DemoPage.checkbox1).click();
        await expect( await DemoPage.checkbox1).toBeSelected();
    });

    it('should select all the checkbox at once', async () =>{
        await DemoPage.selectall();
        await expect( await DemoPage.checkbox3).toBeSelected();
    });

    it('should assert the link text' , async () => {
        await expect(await DemoPage.mylink1).toHaveText("seleniumbase.com");
        await expect(await DemoPage.mylink2).toHaveText("SeleniumBase on GitHub");
        await expect(await DemoPage.mylink3).toHaveText("seleniumbase.io");
    });

    it('should click on link text ', async () => {
       await (await DemoPage.mylink4).click()
    });

    it('should drag and drop', async()=>{
        await DemoPage.open('other/drag_and_drop')
    })

});


