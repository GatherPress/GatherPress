/**
 * WordPress dependencies
 */
const { test } = require('@wordpress/e2e-test-utils-playwright');

test.describe('Events in the Editor', () => {
	let eventTitle: string;
	const currentDate = new Date().toISOString().split('T')[0]; // format YYYY-MM-DD

	test.beforeEach(async ({ admin, page }) => {
		await admin.createNewPost({ postType: 'gatherpress_event' });

		await page
			.getByLabel('Block: Event Date')
			.locator('div')
			.first()
			.isVisible();
		await page.getByRole('heading', { name: 'Date & time' }).isVisible();

		// Open the Document -> Event settings panel.
		const panelToggle = page.getByRole('button', {
			name: 'Event settings',
		});

		if ((await panelToggle.getAttribute('aria-expanded')) === 'false') {
			await panelToggle.click();
		}
	});

	test.afterEach(async ({ page, requestUtils }) => {
		// Click again to close the element, to let upcoming tests not get flaky.
		await page.getByRole('button', { name: 'Event settings' }).click();

		await page
			.getByRole('button', { name: 'Publish', exact: true })
			.click();
		await page
			.getByLabel('Editor publish')
			.getByRole('button', { name: 'Publish', exact: true })
			.click();

		await page
			.getByText(`${eventTitle} is now live.`)
			.isVisible({ timeout: 60000 }); // verified the event is live.

		await page
			.locator('.post-publish-panel__postpublish-buttons')
			.filter({ hasText: 'View Event' })
			.isVisible({ timeout: 30000 }); // verified the view event button.

		await requestUtils.deleteAllPosts();
	});

	test('An admin should be able to publish an online event', async ({
		page,
	}) => {
		await page.getByLabel('Venue Selector').selectOption('Online event');
		eventTitle = await page
			.getByLabel('Add title')
			.fill(`online T-Event: ${currentDate}`);

		await page
			.getByPlaceholder('Add link to online event')
			.fill('www.google.com');
	});

	test('An admin should be able to publish an offline event', async ({
		page,
	}) => {
		await page
			.getByLabel('Venue Selector')
			.selectOption('Turin'); // Location of WCEU 2024 & part of https://github.com/GatherPress/demo-data
		eventTitle = await page
			.getByLabel('Add title')
			.fill(`offline T-Event:${currentDate}`);
	});

	/* 
	test('A user should be able to publish an online event', async ({
		page,
	}) => {
		await page.getByLabel('Venue Selector').selectOption('Online event');
		eventTitle = await page
			.getByLabel('Add title')
			.fill(`online T-Event: ${currentDate}`);
	});

	test('A user should be able publish an offline event', async ({
		page,
	}) => {
		await page.getByLabel('Venue Selector').selectOption('Turin'); // Location of WCEU 2024 & part of https://github.com/GatherPress/demo-data
		eventTitle = await page
			.getByLabel('Add title')
			.fill(`offline T-Event:${currentDate}`);
	}); */
});