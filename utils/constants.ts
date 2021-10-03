const Breakpoints = {
  sm: 480, // Mobile devices
  md: 768, // Tablets
  lg: 1024, // Desktop
}

export const aboveBreakpoint = {
  sm: `@media (min-width: ${Breakpoints.sm}px)`,
  md: `@media (min-width: ${Breakpoints.md}px)`,
  lg: `@media (min-width: ${Breakpoints.lg}px)`,
}
