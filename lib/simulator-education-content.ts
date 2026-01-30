import type { EducationalContent, StageInfo } from '@/types/simulator'

// Stage Information with novice-friendly language
export const stageInfo: StageInfo[] = [
  {
    id: 0,
    name: 'naive',
    displayName: 'First Draft (Too Basic)',
    description: 'A simple AI output without guidance or constraints',
    color: '#dc2626',
    iconName: 'AlertCircle',
    educationalConcept: 'what-is-ai',
  },
  {
    id: 1,
    name: 'refined',
    displayName: 'Adding Important Details',
    description: 'AI output with specific context and requirements',
    color: '#ca8a04',
    iconName: 'Sparkles',
    educationalConcept: 'context-matters',
  },
  {
    id: 2,
    name: 'compliance',
    displayName: 'Making it Safe & Professional',
    description: 'Output with compliance guardrails and regulatory awareness',
    color: '#2563eb',
    iconName: 'Shield',
    educationalConcept: 'guardrails-essential',
  },
  {
    id: 3,
    name: 'advisor-ready',
    displayName: 'Polished & Ready to Send',
    description: 'Final, human-reviewed output ready for client communication',
    color: '#16a34a',
    iconName: 'CheckCircle2',
    educationalConcept: 'human-in-loop',
  },
]

// Educational content for each stage
export const educationalContent: Record<number, EducationalContent> = {
  0: {
    stageId: 0,
    concept: 'What is AI Output?',
    explanation:
      'AI generates text based on a "prompt" - instructions you provide. Without clear guidance, AI output can be generic, vague, or miss important details.',
    why: 'Starting with a basic prompt helps you see what AI can do on its own, and why specific instructions matter.',
    watchFor: [
      'Generic language that could apply to anyone',
      'Missing specific numbers, dates, or client details',
      'Lack of professional tone or structure',
      'No compliance considerations',
    ],
    analogy:
      'Think of it like asking someone to "make dinner" vs. "make chicken parmesan for 4 people with dietary restrictions." More details = better results.',
  },
  1: {
    stageId: 1,
    concept: 'Why Context Makes AI Better',
    explanation:
      'Adding specific details to your prompt—like client names, portfolio values, and situational context—helps AI create more relevant, personalized output.',
    why: 'Context turns generic AI responses into useful, client-specific communications that feel personal and professional.',
    watchFor: [
      'Specific client details (names, portfolio values)',
      'Relevant dates and timeframes',
      'Concrete examples instead of generalizations',
      'More natural, conversational tone',
    ],
    analogy:
      'Like a chef knowing your guests are vegetarian—context allows AI to tailor the output to your exact needs.',
  },
  2: {
    stageId: 2,
    concept: 'Compliance is Non-Negotiable',
    explanation:
      'Financial communications must include proper disclaimers, avoid promises, and follow regulatory guidelines. AI needs explicit instructions to include these safeguards.',
    why: 'In wealth management, compliance violations can lead to serious consequences. Teaching AI to follow guardrails protects you and your clients.',
    watchFor: [
      'Disclaimers about past performance',
      'Qualifiers like "designed to" instead of "will"',
      'Cautious language about forward-looking statements',
      'References to risk and volatility where appropriate',
    ],
    analogy:
      'Like safety equipment in construction—compliance guardrails protect everyone involved and are required, not optional.',
  },
  3: {
    stageId: 3,
    concept: 'Humans Always Stay in Control',
    explanation:
      'Even the best AI output needs human review. Advisors add personal touches, verify accuracy, and ensure the message aligns with the relationship.',
    why: 'AI is a powerful tool, but it cannot replace human judgment, empathy, and relationship knowledge. The magic happens when AI assists, not replaces.',
    watchFor: [
      'Personal references only humans would know',
      'Relationship-specific nuances',
      'Final tone and voice adjustments',
      'Verification of all facts and figures',
    ],
    analogy:
      'Like spell-check in a love letter—AI helps with the mechanics, but you add the heart and authenticity.',
  },
}

// Glossary of AI terms for novices
export const glossary = {
  prompt: {
    term: 'Prompt',
    definition:
      'The instructions or questions you give to AI. Think of it as a very specific request that guides what AI creates.',
    example: 'Instead of "write an email," try "write a professional email to a client explaining portfolio rebalancing in simple terms."',
  },
  context: {
    term: 'Context',
    definition:
      'Background information that helps AI understand the situation. Context includes client details, goals, constraints, and any relevant history.',
    example: 'Adding "Client is 55, retiring in 5 years, conservative risk tolerance" gives AI crucial context.',
  },
  guardrails: {
    term: 'Guardrails',
    definition:
      'Rules and boundaries you set to ensure AI output is safe, compliant, and appropriate. In finance, this includes regulatory requirements.',
    example: 'Requiring disclaimers about past performance, avoiding promises about future returns, using qualifying language.',
  },
  'human-in-the-loop': {
    term: 'Human-in-the-Loop',
    definition:
      'A principle where humans review, approve, and modify AI output before it is used. AI assists, humans decide.',
    example: 'AI drafts a client email, but the advisor reviews it, adds personal touches, and approves before sending.',
  },
  'prompt-engineering': {
    term: 'Prompt Engineering',
    definition:
      'The practice of crafting better prompts to get better AI results. It is a learnable skill, not magic.',
    example: 'Improving "write a summary" to "write a 3-paragraph executive summary highlighting investment performance and next steps, in a reassuring tone."',
  },
}

// "Did You Know?" facts that appear during the experience
export const didYouKnowFacts = [
  'AI tools like ChatGPT are trained on billions of words, but they do not "know" anything—they predict what words come next based on patterns.',
  'The quality of AI output is directly related to the quality of your prompt. Better prompts = better results, every time.',
  'In financial services, AI should never make final decisions. It is a drafting tool, not a decision-maker.',
  'Adding specific examples to your prompt ("write it like this...") dramatically improves AI output relevance.',
  'Compliance-aware AI prompts can save hours of manual review time while maintaining regulatory standards.',
  'Most professionals spend 30%+ of their time on communication. AI can reduce that significantly when used thoughtfully.',
  'AI does not get tired, have bad days, or procrastinate—it is a consistent starting point for any writing task.',
  'The best AI users treat it like a junior colleague: give clear instructions, provide feedback, and review everything.',
]

// Key takeaways shown at the end
export const keyTakeaways = [
  {
    title: 'AI is a tool, not a replacement',
    description:
      'Use AI to draft, research, and accelerate work—but humans provide judgment, empathy, and final approval.',
  },
  {
    title: 'Prompts are everything',
    description:
      'The clearer and more specific your instructions, the better AI performs. Prompt engineering is a learnable skill.',
  },
  {
    title: 'Guardrails protect everyone',
    description:
      'In wealth management, compliance is non-negotiable. Always include regulatory guardrails in your AI workflows.',
  },
  {
    title: 'Context drives quality',
    description:
      'Generic prompts create generic output. Adding client-specific context transforms AI from mediocre to magical.',
  },
]

// Tips for getting started with AI
export const gettingStartedTips = [
  {
    icon: '💡',
    title: 'Start Small',
    description: 'Begin with low-risk tasks like drafting emails or summarizing documents.',
  },
  {
    icon: '📝',
    title: 'Build a Prompt Library',
    description: 'Save prompts that work well. Reuse and refine them over time.',
  },
  {
    icon: '🔒',
    title: 'Check Your Compliance',
    description: 'Work with your compliance team to establish approved AI use cases and guardrails.',
  },
  {
    icon: '👥',
    title: 'Learn Together',
    description: 'Share what works with colleagues. AI skills compound when teams collaborate.',
  },
  {
    icon: '🎯',
    title: 'Measure Impact',
    description: 'Track time saved and quality improvements to demonstrate AI is value to leadership.',
  },
]
