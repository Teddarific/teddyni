const Breakpoints = {
  sm: 480, // Mobile devices
  md: 768, // Tablets
  lg: 1024, // Desktop
}

export const belowBreakpoint = {
  sm: `@media (max-width: ${Breakpoints.sm}px)`,
  md: `@media (max-width: ${Breakpoints.md}px)`,
  lg: `@media (max-width: ${Breakpoints.lg}px)`,
}
