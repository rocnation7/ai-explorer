const FIRST_VISIT_KEY = "ai-explorer-visited"

export function hasVisitedBefore(): boolean {
  if (typeof window === "undefined") return true
  return localStorage.getItem(FIRST_VISIT_KEY) === "true"
}

export function markAsVisited(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(FIRST_VISIT_KEY, "true")
  }
}

export function clearVisitedStatus(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(FIRST_VISIT_KEY)
  }
}
