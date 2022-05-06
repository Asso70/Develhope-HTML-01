export interface IJoke {
  error: boolean,
  category: "Any" | "Misc" | "Programming" | "Dark" | "Pun" | "Spooky" | "Christmas",
  type: "single" | "twopart",
  joke?: string,
  setup?: string,
  delivery?: string,
  flags: {
    nsfw: boolean,
    religious: boolean,
    political: false,
    racist: boolean,
    sexist: boolean,
    explicit: true,
  },
  id: number,
  safe: boolean,
  lang: string | "cs" | "de" | "en" | "es" | "fr" | "pt",
}