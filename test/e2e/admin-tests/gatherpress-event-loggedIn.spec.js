
const { test } = require('@playwright/test');
const { login } = require('../reusable-user-steps/common');
const { nth } = require('lodash');

test.describe('e2e test for publish event through admin side', () => {
	test.beforeEach(async ({ page }) => {
		test.setTimeout(120000);
		await page.setViewportSize({ width: 1920, height: 720 });
		await page.waitForLoadState('networkidle');
	});

})

test('01-e2e test for publish the online event', async({page})=>{

    await login({ page, username: 'testuser1' });

    await page.getByRole('link', { name: 'Events', exact: true }).click();

    await page.locator('#wpbody-content').getByRole('link', { name: 'Add New' }).click();

    const currentDate = new Date().toISOString().split('T')[0]; // format YYYY-MM-DD

    const event_title = await page.getByLabel('Add title').fill(`online T-Event: ${currentDate}`);

    await page.getByLabel('Block: Event Date').locator('div').nth(4).isVisible();
    await page.getByRole('heading', { name: 'Date & time' }).isVisible();

    
    await page.getByRole('button', { name: 'Event settings' }).click();
    await page.getByRole('button', { name: 'Event settings' }).click();
    await page.getByLabel('Venue Selector').selectOption('ol',{timeout:60000});
   
    await page.getByRole('button', { name: 'Publish', exact: true }).click();
    await page.getByLabel('Editor publish').getByRole('button', { name: 'Publish', exact: true }).click();

    await page.getByText(`${event_title} is now live.`).isVisible({timeout:60000})
    await page.locator('.post-publish-panel__postpublish-buttons').filter({hasText:'View Event'}).isVisible({timeout:30000});
})


test('02-verify the logged in user view RSVP button on home page and do RSVP', async({page})=>{

    await login({ page, username: 'testuser1' });

    await page.getByRole('menuitem', { name: 'GatherPress' }).click();

    await page.evaluate(() => window.scrollTo(0, 5000));
    await page.getByRole('link', { name: 'RSVP' }).first().click({timeout:60000});

    await page.locator('a').filter({ hasText: 'Attend' }).click();
    await page.getByText('Close').click();
    await page.locator('.gatherpress-rsvp-response__items').first().isVisible();

    await page.getByText('Attending').nth(1).isVisible({timeout:30000});

    await page.locator('.gatherpress-rsvp-response__items').first().isVisible();
    await page.locator('.gatherpress-rsvp-response__items').first().screenshot({path:'attending.png'});

})