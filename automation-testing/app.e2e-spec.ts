import { browser, by, element, ExpectedConditions as EC } from 'protractor';

describe('My Angular App', () => {
  beforeEach(async () => {
    await browser.get('http://localhost:4200/');
  });

  it('should display the logo image', async () => {
    const logoElement = element(by.css('img[src="./assets/tbz_logo.png"]'));
    await browser.wait(EC.presenceOf(logoElement), 5000);
    expect(await logoElement.isPresent()).toBe(true);
  });

  it('should display List Students button', async () => {
    const listStudentsButton = element(by.cssContainingText('a.btn.btn-info', 'List Students'));
    await browser.wait(EC.presenceOf(listStudentsButton), 5000);
    expect(await listStudentsButton.isPresent()).toBe(true);
  });

  it('should display Add Students button', async () => {
    const addStudentsButton = element(by.cssContainingText('a.btn.btn-info', 'Add Students'));
    await browser.wait(EC.presenceOf(addStudentsButton), 5000);
    expect(await addStudentsButton.isPresent()).toBe(true);
  });

  it('should navigate to List Students page', async () => {
    const listStudentsButton = element(by.cssContainingText('a.btn.btn-info', 'List Students'));
    await browser.wait(EC.elementToBeClickable(listStudentsButton), 5000);
    await listStudentsButton.click();
    await browser.wait(EC.urlContains('/students'), 5000);
    expect(await browser.getCurrentUrl()).toContain('/students');
  });

  it('should navigate to Add Students page', async () => {
    const addStudentsButton = element(by.cssContainingText('a.btn.btn-info', 'Add Students'));
    await browser.wait(EC.elementToBeClickable(addStudentsButton), 5000);
    await addStudentsButton.click();
    await browser.wait(EC.urlContains('/addstudents'), 5000);
    expect(await browser.getCurrentUrl()).toContain('/addstudents');
  });

  it('should add a new student', async () => {
    const addStudentsButton = element(by.cssContainingText('a.btn.btn-info', 'Add Students'));
    await browser.wait(EC.elementToBeClickable(addStudentsButton), 5000);
    await addStudentsButton.click();
    await browser.wait(EC.urlContains('/addstudents'), 5000);

    const nameInput = element(by.css('input[name="name"]'));
    const emailInput = element(by.css('input[name="email"]'));
    const submitButton = element(by.css('button[type="submit"]'));

    await browser.wait(EC.presenceOf(nameInput), 5000);
    await nameInput.sendKeys('Test Student');
    await emailInput.sendKeys('test@student.com');

    await browser.wait(EC.elementToBeClickable(submitButton), 5000);
    await submitButton.click();

    await browser.wait(EC.urlContains('/students'), 5000);
    expect(await browser.getCurrentUrl()).toContain('/students');

    const newStudent = element(by.cssContainingText('td', 'Test Student'));
    await browser.wait(EC.presenceOf(newStudent), 5000);
    expect(await newStudent.isPresent()).toBe(true);
  });
});