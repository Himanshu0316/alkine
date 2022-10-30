const {By ,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function datascr(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://food.grab.com/sg/en/restaurants");
      
    var btn = await driver.findElement(By.className("ant-btn"))
      for(var i=1;i<10;i++){
         await btn.click();
      }
    driver.quit();
}

datascr()