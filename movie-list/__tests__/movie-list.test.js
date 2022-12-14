const { Builder, Capabilities } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { addMovie, verifyMovie } = require("../functions/addMovie");

beforeAll(async () => {
  await driver.get(
    "http://localhost:5501/movieList/index.html"
  );
});

afterAll(async () => {
  await driver.quit();
});

describe("movie-list tests", () => {
  test("should be able to add a movie", async () => {
    await addMovie(driver, "soul");
    //will prevent any actions for 5 seconds
    await driver.sleep(5000);
  });
});
test("Displayed movie matches entered movie", async () => {
  await verifyMovie(driver);
  await driver.sleep(5000);
});