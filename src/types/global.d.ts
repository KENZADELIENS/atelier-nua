// Declarations for common static assets
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}

// Fallback for other static assets
// Figma asset imports (they resolve to file paths at build time)
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

