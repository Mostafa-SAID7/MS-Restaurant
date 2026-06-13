/**
 * Centralized font configuration
 * Using Tapestry for display/headings and Outfit for body text
 */

export const fontConfig = {
  // Display font - used for headings, titles, and prominent text
  display: "font-display",
  // Body font - used for regular text and body content
  body: "font-body",
  // Serif accent - alternative for special emphasis
  serif: "font-serif",
};

// Font size presets for consistent typography
export const fontSizes = {
  heading1: "text-4xl sm:text-6xl md:text-7xl", // Hero title
  heading2: "text-3xl sm:text-5xl", // Section titles
  heading3: "text-xl sm:text-2xl", // Component headings
  body: "text-base", // Regular body text
  small: "text-sm", // Small text, captions
  xsmall: "text-xs", // Extra small, tags, badges
};

// Font weight presets
export const fontWeights = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};
