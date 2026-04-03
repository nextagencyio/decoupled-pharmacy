import { test, expect } from '@playwright/test'

test.describe('Pharmacy site - non-demo mode', () => {
  test('homepage renders hero and CTA from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Your Health')
    // CTA section from Drupal content
    await expect(page.locator('text=Ready to Switch')).toBeVisible()
  })

  test('services listing page shows Drupal content', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Services')
    // At least one service card should be visible
    await expect(page.locator('text=Prescription Filling').first()).toBeVisible()
    await expect(page.locator('text=Immunizations').first()).toBeVisible()
  })

  test('health tips listing page shows Drupal content', async ({ page }) => {
    await page.goto('/health-tips')
    await expect(page.locator('h1')).toContainText('Health Tips')
    await expect(page.locator('text=Medication Safety').first()).toBeVisible()
  })

  test('locations listing page shows Drupal content', async ({ page }) => {
    await page.goto('/locations')
    await expect(page.locator('h1')).toContainText('Locations')
    await expect(page.locator('text=CareFirst Downtown').first()).toBeVisible()
  })

  test('service detail page renders via catch-all route', async ({ page }) => {
    await page.goto('/services/prescription-filling')
    await expect(page.locator('h1')).toContainText('Prescription Filling')
    await expect(page.locator('text=Same-day').first()).toBeVisible()
  })

  test('about page renders from Drupal', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About CareFirst')
  })

  test('navigation links are present in header', async ({ page }) => {
    await page.goto('/')
    const header = page.locator('header')
    await expect(header.locator('a[href="/services"]')).toBeVisible()
    await expect(header.locator('a[href="/health-tips"]')).toBeVisible()
    await expect(header.locator('a[href="/locations"]')).toBeVisible()
  })
})
