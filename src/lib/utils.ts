/**
 * Utility functions for the application
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 * This allows for conditional and dynamic class names while avoiding conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Checks if the user prefers reduced motion
 * Used to conditionally apply animations
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Formats a phone number for better accessibility
 */
export function formatPhoneNumber(phoneNumber: string): string {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Format the number based on length
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  return phoneNumber;
}

/**
 * Ensures proper contrast ratio for text on background
 * @param bgColor - Background color in hex format
 * @param lightColor - Color to use on dark backgrounds
 * @param darkColor - Color to use on light backgrounds
 */
export function ensureContrast(
  bgColor: string, 
  lightColor: string = '#ffffff', 
  darkColor: string = '#000000'
): string {
  // Simple luminance calculation (not perfect but works for basic cases)
  const hex = bgColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate relative luminance using the formula from WCAG
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return light text for dark backgrounds, dark text for light backgrounds
  return luminance > 0.5 ? darkColor : lightColor;
}
