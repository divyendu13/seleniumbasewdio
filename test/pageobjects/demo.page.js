const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DemoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () {return $('h1')}
    get textinputfield () {return $('#myTextInput')}
    get textarea () {return $('textarea.area1')}
    get prefilledtextarea () {return $('[name="preText2"]')}
    get hoverdropdown () {return $('#myDropdown')}
    get hoveroption () {return $('#dropOption2')}
    get heading3 () {return $('h3')}
    get button () {return $('#myButton')}
    get paragraphwithtext () {return $('#pText')}
    get svgelement () {return $('svg[name="svgName"]')}
    get progressbar () {return $('#progressBar')}
    get slider () {return $('#myslider')}
    get selectdropdown () {return $('#mySelect')}
    get HTMLmeter () {return $('#meterBar')}
    get img () {return $('//img')}
    get iframe1 () {return $('#myFrame1')}
    get innertext () {return $('//h4')}
    get iframe2 () {return $('iframe#myFrame2')}
    get radiobtn () {return $('#radioButton2')}
    get checkbox1 () {return $('#checkBox1')}
    get checkbox2 () {return $('#checkBox2')}
    get checkbox3 () {return $('#checkBox3')}
    get checkbox4 () {return $('#checkBox4')}
    get mylink1 () {return $('#myLink1')}
    get mylink2 () {return $('#myLink2')}
    get mylink3 () {return $('#myLink3')}
    get mylink4 () {return $('#myLink4')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to type in input field 
     */
    async typeUpdate (userinput) {
        await (await this.textinputfield).setValue(userinput);
        await (await this.textarea).setValue(userinput);
        await (await this.prefilledtextarea).setValue(userinput);
    }

    async hover(){
        await (await this.hoverdropdown).moveTo();
        await (await this.hoveroption).click();
    }

    async selectall(){
      await  (await this.checkbox2).click();
       await (await this.checkbox3).click();
       await (await this.checkbox4).click()
    }

    


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('demo_page');
    }
}

module.exports = new DemoPage();
