import puppeteer from 'puppeteer';

async function verify() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // 1. Desktop view
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  
  await page.screenshot({ path: 'portfolio-desktop.png', fullPage: true });
  console.log('Saved portfolio-desktop.png');

  // 2. Open Project Modal
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('Explore Project Details')) {
      await btn.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'portfolio-modal.png' });
  console.log('Saved portfolio-modal.png');

  // Close modal with Escape
  await page.keyboard.press('Escape');
  await new Promise(r => setTimeout(r, 400));

  // 3. Mobile view
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'portfolio-mobile.png', fullPage: true });
  console.log('Saved portfolio-mobile.png');

  console.log('Console errors:', consoleErrors);
  await browser.close();
}

verify().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});
