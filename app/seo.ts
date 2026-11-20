/**
 * Shared site details used by metadata, robots.txt and sitemap.xml.
 * Set NEXT_PUBLIC_SITE_URL in your production environment, e.g.
 * NEXT_PUBLIC_SITE_URL=https://www.your-domain.com
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
).replace(/\/$/, "");

export const SITE_NAME = "Dr. Thomas";

export const SITE_TITLE = "Dr. Thomas | Internal Medicine Specialist";

export const SITE_DESCRIPTION =
  "Dr. Thomas is an Internal Medicine specialist offering personalized consultations, chronic disease care and preventive healthcare focused on your long-term health.";

export const SITE_IMAGE = "/images/doctor.png";

/** Update this when the page content changes materially. */
export const SITE_LAST_MODIFIED =
  process.env.SITE_LAST_MODIFIED || "2026-11-20";
