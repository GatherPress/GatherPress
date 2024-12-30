const { test, expect } = require('@playwright/test');
const { login } = require('../reusable-user-steps/common.js');

test.describe('e2e test for event, the user should view the event map on event post.', () => {
	test.beforeEach(async ({ page }) => {
		test.setTimeout(120000);
		//await page.setViewportSize({ width: 1920, height: 720 });
		await page.waitForLoadState('networkidle');
	});

	test('Test to create a new offline event and verify the entered location map should be visible on the event post.', async ({
		page,
	}) => {
		await login({ page, username: 'prashantbellad' });

        await page.getByRole('link', { name: 'Events', exact: true }).click();
        await page.locator('#wpbody-content').getByRole('link', { name: 'Add New Event' }).click();
        

        const currentDate = new Date().toISOString().split('T')[0]; // format YYYY-MM-DD
	const eventTitle = await page
		.getByLabel('Add title')
		.fill('test: offline  event');
	await page
		.getByLabel('Block: Event Date')
		.locator('div')
		.first()
		.isVisible();
	await page.getByRole('heading', { name: 'Date & time' }).isVisible();

    //await page.getByLabel('Settings', { exact: true }).click();
    // await page.getByLabel('Settings', { exact: true }).click();

    await page.getByRole('button', { name: 'Event settings' }).click();

    await page.getByLabel('Venue Selector').selectOption('76:test-venue-map');

    await expect(page.locator('#map')).toBeVisible();

    await page.getByRole('button', { name: 'Publish', exact: true }).click();
    await page.getByLabel('Editor publish').getByRole('button', { name: 'Publish', exact: true }).click();

    await page
    .getByText(`${eventTitle} is now live.`)
    .isVisible({ timeout: 60000 }); // verified the event is live.
await page
    .locator('.post-publish-panel__postpublish-buttons')
    .filter({ hasText: 'View Event' })
    .isVisible({ timeout: 30000 }); // verified the view event button.
		
    await page.goto('/');
    
    await page.getByRole('heading', { name: 'Upcoming Events' }).isVisible();
	await page.getByRole('link', { name: 'test: venue map' }).first().click();
    
    await expect(page.locator('#map')).toBeVisible();
    await page.screenshot({path:'venue-map.png', fullPage:true})
	});
});