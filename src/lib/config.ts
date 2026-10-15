/** Browser-safe configuration only. Never export secrets from this module. */
export const appConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "Focusboard",
  tagline: "Your messages, turned into meaningful action.",
  currentChunk: 1,
  totalChunks: 8,
} as const;
