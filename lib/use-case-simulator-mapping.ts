// Mapping between use case slugs and simulator scenario IDs
// This enables the "Launch Simulator" button on use case pages to open the correct scenario

export const useCaseToSimulatorMap: Record<string, string> = {
  // Wealth Advisor use cases
  'portfolio-commentary': 'portfolio-commentary',
  'meeting-prep': 'meeting-prep',
  'market-updates': 'market-volatility',
  'email-drafting': 'email-drafting',
  'performance-stories': 'performance-stories',
  'tax-loss-communication': 'tax-loss-harvesting',

  // RIA Principal use cases
  'communication-templates': 'communication-templates',
  'compliance-review': 'compliance-review',
  'advisor-onboarding': 'advisor-onboarding',
  'practice-insights': 'practice-insights',
  'client-segmentation': 'client-segmentation',

  // CIO/Investment Committee use cases
  'research-synthesis': 'research-synthesis',
  'committee-docs': 'committee-docs',
  'market-commentary': 'market-commentary',
  'positioning-narratives': 'positioning-narratives',
  'crisis-communication': 'crisis-communication',

  // Client Service & Operations use cases
  'inquiry-responses': 'inquiry-responses',
  'document-prep': 'document-prep',
  'onboarding-communication': 'onboarding-communication',
  'issue-resolution': 'issue-resolution',
  'knowledge-base': 'knowledge-base',
}

// Get the simulator scenario ID for a given use case slug
export function getSimulatorScenarioId(useCaseSlug: string): string | null {
  return useCaseToSimulatorMap[useCaseSlug] || null
}

// Check if a use case has a corresponding simulator scenario
export function hasSimulator(useCaseSlug: string): boolean {
  return useCaseSlug in useCaseToSimulatorMap
}
