import type { Scenario } from '@/types/simulator'

export const simulatorScenarios: Scenario[] = [
  // SCENARIO 1: Portfolio Commentary Generation
  {
    id: 'portfolio-commentary',
    title: 'Portfolio Commentary Generation',
    description: 'Generate personalized quarterly commentary for a client',
    category: 'communication',
    difficulty: 'beginner',
    clientProfile: {
      name: 'Sarah Johnson',
      portfolio: '60/40 stocks/bonds',
      situation: '58 years old, planning retirement in 3-5 years',
      aum: '$2.5M',
    },
    learningObjectives: [
      'See how context transforms generic AI output into personalized communication',
      'Understand the importance of compliance disclaimers in performance reporting',
      'Learn how to balance professional tone with personal warmth',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Basic AI response without specific guidance',
        prompt: 'Write a quarterly portfolio update for Sarah Johnson.',
        output:
          "Dear Sarah,\n\nYour portfolio performed well this quarter with strong returns across most asset classes. Stocks were up and bonds provided stability. The market was volatile but ended positively. Your portfolio is on track to meet your goals.\n\nLet me know if you have questions.\n\nBest regards",
        issues: [
          'Too generic - could apply to anyone',
          'No specific performance figures or data',
          'Lacks personal context about client goals',
          'Missing market context and analysis',
          'No compliance disclaimers',
        ],
        explanation:
          'Without specific instructions, AI produces generic output that lacks the personalization and detail needed for effective client communication.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added client context, performance specifics, and tone guidelines',
        prompt:
          'Write a quarterly portfolio update for Sarah Johnson, a 58-year-old client with a $2.5M balanced portfolio (60/40 stocks/bonds). Focus on: 1) Q4 performance with specific figures, 2) how this supports her retirement income goals, 3) current positioning. Tone: professional but warm, 250-300 words.',
        output:
          "Dear Sarah,\n\nI'm pleased to share your fourth quarter portfolio update. Your balanced portfolio returned +4.2% for the quarter, outpacing your custom benchmark by 30 basis points. For the full year, your portfolio gained +11.8%, keeping you well-positioned for your retirement income objectives.\n\nThe quarter saw a notable divergence in performance. Your equity holdings (+5.8%) benefited from the year-end rally in large-cap technology and healthcare stocks, while your fixed income allocation (+1.2%) provided steady income despite interest rate volatility. This is exactly the type of balanced performance we're targeting as you approach retirement.\n\nLooking ahead, we remain focused on generating the sustainable income stream you'll need when you retire in the next 3-5 years. Your current positioning - with increased exposure to dividend-paying stocks and shorter-duration bonds - is designed to provide both growth potential and downside protection during this critical transition phase.\n\nGiven recent market strength, I'd like to discuss potential rebalancing opportunities when we meet next month. As always, I'm here to address any questions about your portfolio or retirement planning.\n\nWarm regards",
        issues: [
          'Much better! But still needs compliance disclaimers',
          'Should avoid forward-looking statements without qualifiers',
          'Phrases like "is designed to" need compliance-friendly language',
        ],
        explanation:
          'Adding specific client details, performance numbers, and tone guidance dramatically improves relevance and professionalism.',
        highlights: {
          added: [
            'Specific performance figures (+4.2%, +11.8%)',
            'Client age and retirement timeline',
            'Portfolio allocation details (60/40)',
            'Sector-specific performance attribution',
          ],
          improved: ['Professional yet warm tone', 'Client-specific context', 'Actionable next steps'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Incorporated compliance guardrails and regulatory requirements',
        prompt:
          'Write a quarterly portfolio update for Sarah Johnson, a 58-year-old client with a $2.5M balanced portfolio (60/40 stocks/bonds). Focus on: 1) Q4 performance with specific figures, 2) how this supports her retirement income goals, 3) current positioning. Tone: professional but warm, 250-300 words.\n\nCompliance requirements:\n- Include standard disclosure about past performance\n- Avoid absolute predictions about future returns\n- Use appropriate qualifiers ("designed to", "intended to", "may")\n- Do not guarantee outcomes',
        output:
          "Dear Sarah,\n\nI'm pleased to share your fourth quarter portfolio update. Your balanced portfolio returned +4.2% for the quarter, outpacing your custom benchmark by 30 basis points. For the full year, your portfolio gained +11.8%, keeping you well-positioned for your retirement income objectives. Past performance does not guarantee future results.\n\nThe quarter saw a notable divergence in performance. Your equity holdings (+5.8%) benefited from the year-end rally in large-cap technology and healthcare stocks, while your fixed income allocation (+1.2%) provided steady income despite interest rate volatility. This balanced performance reflects the diversification strategy designed to support your goals as you approach retirement.\n\nLooking ahead, we remain focused on generating sustainable income for your retirement in the next 3-5 years. Your current positioning - with increased exposure to dividend-paying stocks and shorter-duration bonds - is intended to provide both growth potential and downside protection during this transition phase, though market conditions may vary.\n\nGiven recent market strength, I'd like to discuss potential rebalancing opportunities when we meet next month. As always, I'm here to address any questions about your portfolio or retirement planning.\n\nWarm regards",
        issues: [
          'Nearly ready - just needs final personalization',
          'Advisor should verify all performance figures',
          'Consider adding a personal note from recent conversations',
        ],
        explanation:
          'Adding compliance disclaimers and qualifying language protects both advisor and client while maintaining professionalism.',
        highlights: {
          added: [
            'Past performance disclaimer',
            'Qualifying language ("designed to", "intended to", "may vary")',
            'Removed absolute future predictions',
          ],
          improved: ['Regulatory compliance', 'Risk-aware language', 'Professional standards met'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final output with human touches and personalization',
        prompt:
          '[Same as Stage 3, with additional instruction:]\n\nPersonalization: Sarah mentioned her daughter Emma\'s wedding next spring. Add a brief personal note acknowledging this.',
        output:
          "Dear Sarah,\n\nI hope this note finds you excited about Emma's wedding plans! I know spring will be here before we know it.\n\nI'm pleased to share your fourth quarter portfolio update. Your balanced portfolio returned +4.2% for the quarter, outpacing your custom benchmark by 30 basis points. For the full year, your portfolio gained +11.8%, keeping you well-positioned for your retirement income objectives. Past performance does not guarantee future results.\n\nThe quarter saw a notable divergence in performance. Your equity holdings (+5.8%) benefited from the year-end rally in large-cap technology and healthcare stocks, while your fixed income allocation (+1.2%) provided steady income despite interest rate volatility. This balanced performance reflects the diversification strategy designed to support your goals as you approach retirement.\n\nLooking ahead, we remain focused on generating sustainable income for your retirement in the next 3-5 years. Your current positioning - with increased exposure to dividend-paying stocks and shorter-duration bonds - is intended to provide both growth potential and downside protection during this transition phase, though market conditions may vary.\n\nGiven recent market strength, I'd like to discuss potential rebalancing opportunities when we meet next month. As always, I'm here to address any questions about your portfolio or retirement planning.\n\nWarm regards",
        issues: [],
        explanation:
          'The final step is human review and personalization. AI provides the structure and compliance, but the advisor adds the warmth and relationship knowledge that makes communication truly effective.',
        highlights: {
          added: [
            'Personal reference to daughter\'s wedding',
            'Human warmth and relationship context',
            'Advisor-specific voice and style',
          ],
          improved: ['Client relationship depth', 'Authentic personal connection', 'Ready to send'],
        },
        educationalNote:
          'This is why AI is a tool, not a replacement. Only the human advisor knows about Emma\'s wedding.',
      },
    ],
  },

  // SCENARIO 2: Client Meeting Preparation
  {
    id: 'meeting-prep',
    title: 'Client Meeting Preparation',
    description: 'Prepare a comprehensive briefing for an annual review meeting',
    category: 'planning',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Michael Chen',
      portfolio: 'Growth-oriented equity focus',
      situation: '42 years old, tech executive, aggressive growth strategy',
      aum: '$5M',
    },
    learningObjectives: [
      'Learn how to structure comprehensive meeting preparation',
      'See the value of including compliance flags proactively',
      'Understand how context about client personality shapes communication',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Generic meeting prep without client specifics',
        prompt: 'Create a briefing document for an annual review meeting with Michael Chen.',
        output:
          'ANNUAL REVIEW BRIEFING\n\nClient: Michael Chen\n\nAgenda:\n1. Portfolio review\n2. Performance discussion\n3. Goal assessment\n4. Questions\n\nNotes:\n- Review returns\n- Discuss market outlook\n- Address concerns\n- Schedule follow-up',
        issues: [
          'Skeletal and unhelpful - no actionable information',
          'Missing portfolio specifics and performance data',
          'No client context or relationship history',
          'Lacks talking points or preparation guidance',
        ],
        explanation:
          'A vague prompt produces a vague result. This briefing provides no value to the advisor preparing for the meeting.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added client profile, portfolio details, and comprehensive structure',
        prompt:
          'Create a detailed briefing document for an annual review meeting with Michael Chen, a 42-year-old tech executive with a $5M aggressive growth portfolio. Include: 1) Portfolio snapshot with YTD performance, 2) Recent account activity, 3) Progress toward goals, 4) Key talking points, 5) Recommended discussion topics. Make it actionable and specific.',
        output:
          'ANNUAL REVIEW BRIEFING - MICHAEL CHEN\n\nCLIENT SNAPSHOT:\n• Age: 42, Tech Executive (Senior Director at major software company)\n• AUM: $5.0M (up from $4.2M last year)\n• Risk Profile: Aggressive growth\n• Primary Goals: Early retirement at 55, wealth accumulation\n\nPORTFOLIO PERFORMANCE (YTD):\n• Total Return: +18.2% (vs. S&P 500: +16.1%)\n• Allocation: 90% equities, 10% alternatives\n• Top performers: Technology sector (+24%), Healthcare (+19%)\n• Asset growth: +$780K from returns, +$120K from contributions\n\nRECENT ACTIVITY:\n• Q3: Increased technology exposure from 35% to 42%\n• Added position in emerging markets ETF ($150K)\n• Rebalanced out of underperforming small-cap value\n\nGOAL PROGRESS:\n• Early Retirement Target: On track (currently 62% of target)\n• Projected retirement assets at age 55: $8.2M (goal: $7.5M)\n• Annual contribution rate: Strong at $120K/year\n\nKEY TALKING POINTS:\n• Congratulate on strong performance and discipline\n• Discuss concentration risk in technology sector\n• Review tax-loss harvesting opportunities before year-end\n• Explore increasing alternative allocation for diversification\n\nRECOMMENDED DISCUSSION:\n1. Technology sector concentration - comfort level?\n2. Tax optimization strategies for high-income year\n3. Estate planning considerations as wealth grows\n4. Any upcoming liquidity needs or stock option exercises',
        issues: [
          'Excellent detail, but missing compliance considerations',
          'Should flag potential suitability issues (90% equity allocation)',
          'No mention of previous meeting notes or client concerns',
        ],
        explanation:
          'Providing specific client data and structure transforms this into a truly useful prep document.',
        highlights: {
          added: [
            'Specific performance numbers and comparisons',
            'Recent account activity with dollar amounts',
            'Goal progress tracking',
            'Actionable talking points',
            'Recommended discussion topics',
          ],
          improved: ['Comprehensive structure', 'Actionable insights', 'Meeting readiness'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added compliance flags and regulatory awareness',
        prompt:
          'Create a detailed briefing document for an annual review meeting with Michael Chen, a 42-year-old tech executive with a $5M aggressive growth portfolio. Include: 1) Portfolio snapshot with YTD performance, 2) Recent account activity, 3) Progress toward goals, 4) Key talking points, 5) Recommended discussion topics. Make it actionable and specific.\n\nCompliance additions:\n- Flag any concentration risks or suitability concerns\n- Note required disclosures or regulatory items\n- Include reminder to document client decisions\n- Reference previous meeting notes from CRM',
        output:
          'ANNUAL REVIEW BRIEFING - MICHAEL CHEN\n\n⚠️ COMPLIANCE FLAGS:\n• High equity concentration (90%) - confirm continued suitability\n• Technology sector at 42% - discuss concentration risk management\n• Alternative investments - ensure client understands liquidity constraints\n• Document all investment decisions and risk acknowledgments\n\nCLIENT SNAPSHOT:\n• Age: 42, Tech Executive (Senior Director at major software company)\n• AUM: $5.0M (up from $4.2M last year)\n• Risk Profile: Aggressive growth (last updated: Annual review 2023)\n• Primary Goals: Early retirement at 55, wealth accumulation\n\nPORTFOLIO PERFORMANCE (YTD):\n• Total Return: +18.2% (vs. S&P 500: +16.1%)\n• Allocation: 90% equities, 10% alternatives\n• Top performers: Technology sector (+24%), Healthcare (+19%)\n• Asset growth: +$780K from returns, +$120K from contributions\n\nRECENT ACTIVITY:\n• Q3: Increased technology exposure from 35% to 42%\n• Added position in emerging markets ETF ($150K)\n• Rebalanced out of underperforming small-cap value\n\nGOAL PROGRESS:\n• Early Retirement Target: On track (currently 62% of target)\n• Projected retirement assets at age 55: $8.2M (goal: $7.5M)\n• Annual contribution rate: Strong at $120K/year\n\nFROM LAST MEETING (Q4 2023):\n• Client expressed interest in crypto exposure - tabled for further research\n• Discussed potential job change - still at current company\n• Mentioned upcoming home purchase - not proceeding yet\n\nKEY TALKING POINTS:\n• Congratulate on strong performance and contribution discipline\n• Address technology sector concentration (now 42%, up from 35%)\n• Review tax-loss harvesting opportunities before year-end\n• Discuss estate planning as assets approach $5M+ threshold\n\nCOMPLIANCE REQUIRED:\n✓ Review and confirm aggressive risk tolerance still appropriate\n✓ Discuss and document concentration risk acknowledgment\n✓ Provide alternative investment disclosures if adding allocation\n✓ Coordinate with tax advisor if implementing tax strategies\n\nRECOMMENDED DISCUSSION:\n1. Technology concentration - revisit client comfort with sector risk\n2. Tax optimization: Loss harvesting, Roth conversions, gifting strategies\n3. Estate planning: Review beneficiaries, consider trust structures\n4. Upcoming equity compensation events or liquidity needs',
        issues: [
          'Comprehensive and compliance-aware',
          'Could add more personal context about client communication style',
          'Consider noting any special client preferences for meeting format',
        ],
        explanation:
          'Adding compliance flags ensures the advisor addresses regulatory requirements proactively, protecting both parties.',
        highlights: {
          added: [
            'Compliance flags section at top',
            'Previous meeting notes and context',
            'Required compliance checklist',
            'Risk acknowledgment reminders',
          ],
          improved: ['Regulatory compliance', 'Risk management', 'Documentation prompts'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final prep with advisor notes and personal touches',
        prompt:
          '[Same as Stage 3, with additional notes:]\n\nAdvisor context: Michael is analytical and tech-savvy, appreciates data. He asked about crypto last time. He tends to be overconfident in tech sector. Add advisor preparation notes.',
        output:
          'ANNUAL REVIEW BRIEFING - MICHAEL CHEN\n\n⚠️ COMPLIANCE FLAGS:\n• High equity concentration (90%) - confirm continued suitability\n• Technology sector at 42% - discuss concentration risk management\n• Alternative investments - ensure client understands liquidity constraints\n• Document all investment decisions and risk acknowledgments\n\n📋 ADVISOR PREP NOTES:\n• Michael is highly analytical - bring data visualizations of sector exposure\n• He\'s tech-optimistic (works in industry) - may need gentle pushback on concentration\n• Bring research on crypto/digital assets (he asked last time)\n• He responds well to scenarios and Monte Carlo projections\n• Keep meeting tight and data-focused (he\'s busy)\n\nCLIENT SNAPSHOT:\n• Age: 42, Tech Executive (Senior Director at major software company)\n• AUM: $5.0M (up from $4.2M last year)\n• Risk Profile: Aggressive growth (last updated: Annual review 2023)\n• Primary Goals: Early retirement at 55, wealth accumulation\n• Communication Style: Data-driven, appreciates charts and projections\n\nPORTFOLIO PERFORMANCE (YTD):\n• Total Return: +18.2% (vs. S&P 500: +16.1%)\n• Allocation: 90% equities, 10% alternatives\n• Top performers: Technology sector (+24%), Healthcare (+19%)\n• Asset growth: +$780K from returns, +$120K from contributions\n\nRECENT ACTIVITY:\n• Q3: Increased technology exposure from 35% to 42%\n• Added position in emerging markets ETF ($150K)\n• Rebalanced out of underperforming small-cap value\n\nGOAL PROGRESS:\n• Early Retirement Target: On track (currently 62% of target)\n• Projected retirement assets at age 55: $8.2M (goal: $7.5M)\n• Annual contribution rate: Strong at $120K/year\n\nFROM LAST MEETING (Q4 2023):\n• ❗ Client expressed interest in crypto exposure - prepared research materials\n• Discussed potential job change - still at current company, happy there\n• Mentioned upcoming home purchase - decided to rent another year\n\nKEY TALKING POINTS:\n• Celebrate exceptional performance (+18.2%) and consistent savings\n• Gently address tech concentration: "Your conviction paid off, but let\'s stress-test a sector pullback"\n• Present crypto research with appropriate risk framework\n• Highlight tax-loss harvesting value in high-income year\n\nCOMPLIANCE REQUIRED:\n✓ Review and confirm aggressive risk tolerance still appropriate\n✓ Discuss and document concentration risk acknowledgment\n✓ Provide alternative investment disclosures if adding allocation\n✓ If discussing crypto: Clear risk disclosure and suitability discussion\n✓ Coordinate with tax advisor if implementing tax strategies\n\nRECOMMENDED DISCUSSION:\n1. Technology concentration - show 2000-2002 tech bubble scenario analysis\n2. Crypto allocation (max 5%) - education-first approach with risk emphasis\n3. Tax optimization: Specific dollar estimates for loss harvesting, Roth conversion\n4. Estate planning: Intro trust attorney, discuss gifting strategies\n\n💡 MEETING APPROACH:\n• Start with wins: Strong performance, goal progress\n• Use data to discuss concentration (he\'ll respect the numbers)\n• Frame crypto as "educated speculation" with strict limits\n• End with action items: Tax strategy implementation, estate attorney intro',
        issues: [],
        explanation:
          'The final version includes advisor-specific preparation notes that only a human would know. AI provides the structure and compliance framework, but the advisor adds strategic insights about client personality and communication preferences.',
        highlights: {
          added: [
            'Advisor preparation notes section',
            'Client communication style insights',
            'Strategic approach for sensitive topics (concentration risk)',
            'Crypto research preparation (from client request)',
            'Meeting flow recommendations',
          ],
          improved: ['Personalization', 'Strategic preparation', 'Client-specific approach'],
        },
        educationalNote:
          'Notice how the advisor added context about Michael\'s personality and preferences. This human insight transforms a good prep document into an exceptional one.',
      },
    ],
  },

  // SCENARIO 3: Market Volatility Email
  {
    id: 'market-volatility',
    title: 'Market Volatility Communication',
    description: 'Calm client concerns during a market downturn with factual reassurance',
    category: 'communication',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Robert & Linda Martinez',
      portfolio: 'Conservative balanced portfolio',
      situation: 'Retired couple, age 68 & 66, living on portfolio income',
      aum: '$1.8M',
    },
    learningObjectives: [
      'Learn to craft calm, reassuring messages during market stress',
      'Understand tone management in crisis communication',
      'See how to balance empathy with factual perspective',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Generic market update without client context',
        prompt: 'Write an email to clients about recent market volatility.',
        output:
          'Subject: Market Update\n\nDear Clients,\n\nThe markets have been volatile recently with significant declines across major indices. This is normal market behavior and nothing to worry about. Markets go up and down. Your portfolio is diversified and will recover.\n\nStay calm and stick to your plan.\n\nBest regards',
        issues: [
          'Tone is dismissive rather than empathetic',
          'No specific context or data',
          'Lacks concrete reassurance or action steps',
          '"Nothing to worry about" minimizes legitimate client concerns',
          'No acknowledgment of client-specific situation',
        ],
        explanation:
          'Generic market commentary fails to address the real anxiety clients feel. Worse, dismissive language ("nothing to worry about") can damage trust.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added empathy, specific data, and client-relevant context',
        prompt:
          'Write an email to Robert & Linda Martinez (retired couple, age 68 & 66, conservative portfolio, $1.8M) about the recent 8% market decline. Tone: calm, empathetic, fact-based. Include: 1) Acknowledgment of their concerns, 2) Specific performance context, 3) Why their portfolio positioning helps, 4) What we\'re doing. 300-350 words.',
        output:
          'Subject: Your Portfolio During Recent Market Decline\n\nDear Robert and Linda,\n\nI wanted to reach out during this period of market volatility. Seeing headlines about an 8% market decline can be unsettling, especially when you\'re relying on your portfolio for retirement income. I understand this may cause concern, and I want to provide you with perspective specific to your situation.\n\nHere\'s what\'s happening with your portfolio:\n\nYour conservative allocation (45% stocks, 45% bonds, 10% cash) has cushioned the impact significantly. While the broad stock market is down 8%, your overall portfolio is down approximately 3.2%. Your bond holdings and cash reserves have provided the stability they\'re designed for during equity market stress.\n\nImportantly, your income is secure. Your monthly distributions come from bond interest and dividends, not from selling stocks at depressed prices. We structured your portfolio specifically for this: keeping 18 months of living expenses in stable, liquid holdings so you never have to sell equities during downturns.\n\nWhat I\'m watching:\n\nThe current decline appears driven by inflation concerns and interest rate uncertainty rather than fundamental economic problems. Corporate earnings remain solid, and employment is strong. Historically, pullbacks of this magnitude occur every 1-2 years and typically recover within 3-6 months.\n\nI\'m monitoring your portfolio daily and will reach out if any action is warranted. For now, your diversified positioning is working exactly as intended—providing stability when markets are stressed.\n\nIf you\'d like to discuss this further, I\'m happy to schedule a call. I know market volatility can be uncomfortable, and talking through your specific situation often provides reassurance.\n\nWarm regards',
        issues: [
          'Much better tone and specificity, but needs compliance disclaimers',
          'Avoid predicting recovery timeframes without qualifiers',
          'Should not imply the advisor can predict market direction',
        ],
        explanation:
          'Adding client-specific context (their age, conservative allocation, income needs) transforms generic advice into personally relevant reassurance.',
        highlights: {
          added: [
            'Empathetic acknowledgment of client feelings',
            'Specific portfolio impact (3.2% vs. 8% market)',
            'Income security explanation',
            'Historical context for perspective',
            'Offer to discuss personally',
          ],
          improved: ['Calm, professional tone', 'Client-relevant facts', 'Reassurance through data'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added compliance language and appropriate risk disclaimers',
        prompt:
          'Write an email to Robert & Linda Martinez (retired couple, age 68 & 66, conservative portfolio, $1.8M) about the recent 8% market decline. Tone: calm, empathetic, fact-based. Include: 1) Acknowledgment of their concerns, 2) Specific performance context, 3) Why their portfolio positioning helps, 4) What we\'re doing. 300-350 words.\n\nCompliance requirements:\n- Avoid predicting market recoveries or timing\n- Use qualifiers for any forward-looking statements\n- Disclaim that past patterns don\'t guarantee future results\n- Don\'t minimize risk inappropriately',
        output:
          'Subject: Your Portfolio During Recent Market Decline\n\nDear Robert and Linda,\n\nI wanted to reach out during this period of market volatility. Seeing headlines about an 8% market decline can be unsettling, especially when you\'re relying on your portfolio for retirement income. I understand this may cause concern, and I want to provide you with perspective specific to your situation.\n\nHere\'s what\'s happening with your portfolio:\n\nYour conservative allocation (45% stocks, 45% bonds, 10% cash) has helped cushion the impact. While the broad stock market is down 8%, your overall portfolio is down approximately 3.2%. Your bond holdings and cash reserves have provided the stability they\'re designed to offer during equity market stress.\n\nImportantly, your income stream is positioned to weather volatility. Your monthly distributions come from bond interest and dividends, reducing the need to sell stocks at depressed prices. We structured your portfolio with approximately 18 months of living expenses in stable holdings specifically to help navigate periods like this, though market conditions can vary.\n\nWhat I\'m monitoring:\n\nThe current decline appears driven by inflation concerns and interest rate uncertainty. While corporate earnings and employment remain solid, market volatility may persist. Historically, pullbacks of this magnitude have occurred periodically, though past patterns don\'t guarantee future results.\n\nI\'m reviewing your portfolio regularly and will reach out if any adjustments may be appropriate. For now, your diversified positioning is functioning as intended—though all investments carry risk, including potential loss of principal.\n\nIf you\'d like to discuss your specific situation, I\'m available for a call. Market volatility can be uncomfortable, and I\'m here to address any questions or concerns.\n\nWarm regards',
        issues: [
          'Compliance language is solid',
          'Could add a personal touch showing you remember their situation',
          'Consider offering specific next steps or timeline for follow-up',
        ],
        explanation:
          'Adding appropriate qualifiers and disclaimers protects both advisor and client while maintaining a reassuring tone.',
        highlights: {
          added: [
            'Qualifying language ("has helped," "positioned to," "may persist")',
            'Risk disclaimer ("all investments carry risk")',
            'Past performance disclaimer',
            'Removed predictions about recovery timing',
          ],
          improved: ['Regulatory compliance', 'Appropriate risk acknowledgment', 'Professional standards'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with personal context and strategic advisor notes',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nPersonal notes: Robert tends to be more anxious than Linda. They mentioned last month they want to take their grandchildren to Europe next summer. Add reassurance about that trip.',
        output:
          'Subject: Your Portfolio During Recent Market Decline\n\nDear Robert and Linda,\n\nI wanted to reach out during this period of market volatility. Seeing headlines about an 8% market decline can be unsettling, especially when you\'re relying on your portfolio for retirement income. I understand this may cause concern, and I want to provide you with perspective specific to your situation.\n\nFirst, your plans for the Europe trip with your grandchildren next summer remain fully intact. The funds for that are in your money market allocation and completely unaffected by equity market movements.\n\nHere\'s what\'s happening with your portfolio:\n\nYour conservative allocation (45% stocks, 45% bonds, 10% cash) has helped cushion the impact. While the broad stock market is down 8%, your overall portfolio is down approximately 3.2%. Your bond holdings and cash reserves have provided the stability they\'re designed to offer during equity market stress.\n\nImportantly, your income stream is positioned to weather volatility. Your monthly distributions come from bond interest and dividends, reducing the need to sell stocks at depressed prices. We structured your portfolio with approximately 18 months of living expenses in stable holdings specifically to help navigate periods like this, though market conditions can vary.\n\nWhat I\'m monitoring:\n\nThe current decline appears driven by inflation concerns and interest rate uncertainty. While corporate earnings and employment remain solid, market volatility may persist. Historically, pullbacks of this magnitude have occurred periodically, though past patterns don\'t guarantee future results.\n\nI\'m reviewing your portfolio regularly and will reach out if any adjustments may be appropriate. For now, your diversified positioning is functioning as intended—though all investments carry risk, including potential loss of principal.\n\nI\'ll plan to call you both early next week to check in, but please don\'t hesitate to reach out sooner if you\'d like to talk. Robert, I know market news can feel overwhelming—remember we built your portfolio specifically for times like this.\n\nWarm regards',
        issues: [],
        explanation:
          'The advisor adds personal touches that AI could never know: Robert\'s anxiety tendency, Linda\'s calmer demeanor, and their specific plans for a Europe trip. This transforms the message from informative to deeply reassuring.',
        highlights: {
          added: [
            'Immediate reassurance about Europe trip plans',
            'Personal acknowledgment of Robert\'s anxiety patterns',
            'Specific follow-up plan (call early next week)',
            'Direct address to Robert about portfolio design rationale',
          ],
          improved: ['Personal connection', 'Relationship-based reassurance', 'Proactive follow-up'],
        },
        educationalNote:
          'AI provides the compliance framework and structure, but only the human advisor knows about the Europe trip and Robert\'s tendency toward anxiety. This personal knowledge makes all the difference.',
      },
    ],
  },

  // SCENARIO 4: Tax Loss Harvesting Recommendation
  {
    id: 'tax-loss-harvesting',
    title: 'Tax Loss Harvesting Explanation',
    description: 'Explain a complex tax strategy in simple, actionable terms',
    category: 'communication',
    difficulty: 'advanced',
    clientProfile: {
      name: 'Dr. Jennifer Park',
      portfolio: 'Taxable investment account, high-income professional',
      situation: 'Physician, age 51, high tax bracket, recent market decline created opportunity',
      aum: '$3.2M',
    },
    learningObjectives: [
      'Learn to simplify complex tax concepts for clients',
      'See how to present recommendations with clear value propositions',
      'Understand the importance of CPA coordination disclaimers',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Technical jargon without clear explanation',
        prompt: 'Write an email explaining tax loss harvesting to Dr. Jennifer Park.',
        output:
          'Subject: Tax Loss Harvesting Opportunity\n\nDear Dr. Park,\n\nI wanted to let you know about a tax loss harvesting opportunity in your account. We can sell positions at a loss and buy similar securities to maintain market exposure while capturing tax losses. This will generate capital losses that can offset gains and reduce your tax liability.\n\nLet me know if you want to proceed.\n\nBest regards',
        issues: [
          'Uses jargon without explanation ("capital losses," "offset gains")',
          'No specific dollar amounts or estimated tax benefit',
          'Doesn\'t explain what happens or why it matters to her',
          'Missing wash sale rule disclaimer',
          'No CPA coordination mention',
        ],
        explanation:
          'Technical financial concepts need translation into plain language with specific, client-relevant examples.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added clear explanation, specific numbers, and concrete benefits',
        prompt:
          'Write an email to Dr. Jennifer Park (age 51, physician in highest tax bracket) explaining a tax loss harvesting opportunity. She has $85,000 in unrealized losses in her tech holdings. Explain: 1) What we\'re recommending in simple terms, 2) The specific tax benefit in dollars, 3) What happens to her portfolio, 4) Next steps. Tone: educational but concise, 250-300 words.',
        output:
          'Subject: Tax Savings Opportunity: $28,000+ Potential Benefit\n\nDear Dr. Park,\n\nThe recent decline in technology stocks has created a valuable tax-saving opportunity in your portfolio. I wanted to explain a strategy called "tax loss harvesting" that could save you approximately $28,000 in taxes.\n\nWhat we\'re recommending:\n\nYou currently have $85,000 in unrealized losses in your technology holdings—positions that have declined in value since purchase. We\'d sell these positions to "realize" the losses for tax purposes, then immediately reinvest the proceeds in similar (but not identical) funds to maintain your market exposure.\n\nWhy this helps you:\n\n• Immediate tax benefit: $85,000 in realized losses can offset other capital gains or up to $3,000 of ordinary income per year\n• Estimated tax savings: Approximately $28,000 (based on your 39.6% capital gains rate)\n• Portfolio impact: Minimal—you stay fully invested in technology, just in different specific holdings\n• Unused losses: Any excess can be carried forward to future tax years\n\nWhat happens to your portfolio:\n\nFor example, we\'d sell your Vanguard Technology ETF (VGT) at a loss and buy the iShares Technology ETF (IYW). These funds track similar companies but are legally different investments, so the swap is permissible. Your technology exposure remains essentially unchanged.\n\nNext steps:\n\nIf this makes sense, I recommend implementing before year-end to capture the benefit on your 2024 tax return. The entire process takes 1-2 business days, and your portfolio stays fully invested throughout.\n\nI\'d be happy to discuss this strategy in more detail or coordinate with your CPA to ensure it aligns with your broader tax planning.\n\nBest regards',
        issues: [
          'Good explanation, but missing critical compliance items',
          'Need wash sale rule disclosure',
          'Should emphasize CPA coordination more strongly',
          'Missing disclaimer about tax advice limitations',
        ],
        explanation:
          'Breaking down complex concepts with specific examples and dollar amounts makes the strategy clear and actionable.',
        highlights: {
          added: [
            'Specific dollar amounts ($85K loss, $28K estimated benefit)',
            'Clear explanation of the strategy in simple terms',
            'Concrete example of fund swap (VGT → IYW)',
            'Timeline and process explanation',
            'CPA coordination mention',
          ],
          improved: ['Clarity for non-financial professional', 'Actionable recommendation', 'Value quantification'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added tax disclaimers, wash sale rules, and CPA coordination',
        prompt:
          'Write an email to Dr. Jennifer Park (age 51, physician in highest tax bracket) explaining a tax loss harvesting opportunity. She has $85,000 in unrealized losses in her tech holdings. Explain: 1) What we\'re recommending in simple terms, 2) The specific tax benefit in dollars, 3) What happens to her portfolio, 4) Next steps. Tone: educational but concise, 250-300 words.\n\nCompliance requirements:\n- Include wash sale rule explanation\n- Disclaimer about not providing tax advice\n- Strong recommendation to coordinate with CPA\n- Note that tax rates and situation may vary',
        output:
          'Subject: Tax Savings Opportunity: $28,000+ Potential Benefit\n\nDear Dr. Park,\n\nThe recent decline in technology stocks has created a valuable tax-saving opportunity in your portfolio. I wanted to explain a strategy called "tax loss harvesting" that could potentially save you approximately $28,000 in taxes, though I recommend discussing this with your CPA to confirm the benefit in your specific tax situation.\n\nWhat we\'re recommending:\n\nYou currently have approximately $85,000 in unrealized losses in your technology holdings. We\'d sell these positions to realize the losses for tax purposes, then immediately reinvest in similar (but not identical) funds to maintain your market exposure.\n\nEstimated tax benefit:\n\n• The $85,000 in realized losses can offset capital gains or up to $3,000 of ordinary income per year\n• Potential tax savings: Approximately $28,000 (assuming current capital gains rates)\n• Unused losses carry forward to offset future gains\n• Actual benefit depends on your specific tax situation—your CPA can provide precise calculations\n\nWhat happens to your portfolio:\n\nFor example, we\'d sell your Vanguard Technology ETF (VGT) at a loss and buy the iShares Technology ETF (IYW). These track similar companies but are different enough to avoid "wash sale" rules—IRS regulations that disallow the tax benefit if you buy a "substantially identical" security within 30 days before or after the sale.\n\nImportant considerations:\n\n⚠️ Wash Sale Rule: You must avoid repurchasing the same or substantially identical security for 30 days before and after the sale\n⚠️ Tax Advice: As your investment advisor, I cannot provide specific tax advice. Please consult your CPA before proceeding\n⚠️ Your tax bracket and situation may affect the actual benefit\n\nNext steps:\n\nIf you\'d like to explore this strategy, I recommend:\n1. Forward this email to your CPA for review\n2. Schedule a three-way call with you, me, and your CPA to coordinate\n3. If approved, implement before year-end to capture the 2024 tax benefit\n\nThe process takes 1-2 business days, and your portfolio stays fully invested throughout.\n\nPlease let me know how you\'d like to proceed.\n\nBest regards',
        issues: [
          'Comprehensive compliance coverage',
          'Could add personal context about her specific situation',
          'Consider mentioning if there are other holdings with loss opportunities',
        ],
        explanation:
          'Tax strategies require careful compliance disclaimers. Advisors must make clear they\'re not providing tax advice and encourage CPA coordination.',
        highlights: {
          added: [
            'Wash sale rule explanation with warning symbol',
            'Tax advice disclaimer',
            'CPA coordination strongly emphasized',
            'Qualifiers about estimated benefits ("approximately," "potential")',
            'Three-way call suggestion',
          ],
          improved: ['Regulatory compliance', 'Professional boundaries', 'Risk disclosure'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with personal context and strategic nuances',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nAdvisor notes: Jennifer is analytically-minded and appreciates details. She mentioned her CPA is David Chen at ABC Tax Advisors. She has concentrated stock from a recent bonus that she\'s thinking of selling—this loss could offset that gain perfectly.',
        output:
          'Subject: Tax Savings Opportunity: $28,000+ Potential Benefit\n\nDear Dr. Park,\n\nThe recent decline in technology stocks has created a valuable tax-saving opportunity in your portfolio—one that may be particularly timely given your thoughts about selling some of your concentrated stock position from your recent bonus.\n\nI wanted to explain a strategy called "tax loss harvesting" that could potentially save you approximately $28,000 in taxes. Given the analytical detail you appreciate, I\'ve included the mechanics below, though I recommend discussing this with David Chen at ABC Tax Advisors to confirm the benefit in your specific situation.\n\nWhat we\'re recommending:\n\nYou currently have approximately $85,000 in unrealized losses in your technology holdings. We\'d sell these positions to realize the losses for tax purposes, then immediately reinvest in similar (but not identical) funds to maintain your market exposure.\n\nWhy this is timely for you:\n\nIf you proceed with selling your concentrated stock position (which would generate a capital gain), these $85,000 in losses could offset a significant portion of that gain—potentially saving you substantial taxes on both transactions. David can model the exact savings based on your complete tax picture.\n\nEstimated tax benefit:\n\n• The $85,000 in realized losses can offset capital gains (like from your stock sale) or up to $3,000 of ordinary income per year\n• Potential tax savings: Approximately $28,000-32,000 (depending on final gain amounts)\n• Unused losses carry forward to offset future gains\n• Actual benefit depends on your specific tax situation and other transactions\n\nWhat happens to your portfolio:\n\nExample swap: Sell Vanguard Technology ETF (VGT) at a loss → Buy iShares Technology ETF (IYW)\n\nThese funds track similar companies but are different enough to avoid "wash sale" rules—IRS regulations that disallow the tax benefit if you buy a "substantially identical" security within 30 days before or after the sale. Your technology exposure remains essentially unchanged.\n\nImportant considerations:\n\n⚠️ Wash Sale Rule: You must avoid repurchasing the same or substantially identical security for 30 days before and after the sale\n⚠️ Tax Advice: As your investment advisor, I cannot provide specific tax advice. Please consult David before proceeding\n⚠️ Your tax bracket and situation may affect the actual benefit\n⚠️ Timing: This only helps on your 2024 return if executed before December 31\n\nNext steps:\n\nGiven the potential coordination with your stock sale decision, I recommend:\n\n1. I can reach out to David Chen to brief him on this opportunity (with your permission)\n2. Schedule a three-way call with you, me, and David to coordinate both transactions\n3. David can model the combined tax impact of the loss harvesting + stock sale\n4. If the strategy makes sense, implement before year-end\n\nThe loss harvesting process takes 1-2 business days, and your portfolio stays fully invested throughout.\n\nWould you like me to coordinate with David, or would you prefer to discuss with him first and then loop me in?\n\nBest regards',
        issues: [],
        explanation:
          'The advisor connects this strategy to Jennifer\'s specific situation (concentrated stock decision), knows her CPA\'s name, and understands her preference for analytical detail. This transforms a generic recommendation into a timely, coordinated wealth management strategy.',
        highlights: {
          added: [
            'Connection to her concentrated stock decision',
            'CPA name and firm (David Chen, ABC Tax Advisors)',
            'Proactive offer to coordinate with CPA',
            'Higher estimated savings ($28K-32K) given the stock sale context',
            'Acknowledgment of her analytical preferences',
          ],
          improved: ['Personalization', 'Strategic coordination', 'Timely relevance'],
        },
        educationalNote:
          'AI can explain tax loss harvesting mechanics, but only the human advisor knows about Jennifer\'s concentrated stock dilemma and can connect these strategies into coordinated wealth planning.',
      },
    ],
  },

  // SCENARIO 5: Estate Planning Discussion Prep
  {
    id: 'estate-planning-prep',
    title: 'Estate Planning Discussion Prep',
    description: 'Prepare for a sensitive conversation about estate planning and legacy',
    category: 'planning',
    difficulty: 'advanced',
    clientProfile: {
      name: 'William & Patricia Thompson',
      portfolio: 'Multi-generational wealth, complex family structure',
      situation: 'Ages 72 & 70, blended family with adult children from previous marriages, $8.5M estate',
      aum: '$8.5M',
    },
    learningObjectives: [
      'Learn to prepare for sensitive, emotionally-complex discussions',
      'Understand how to navigate family dynamics with empathy',
      'See the value of involving specialists (estate attorney, tax advisor)',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Transactional approach without empathy or nuance',
        prompt: 'Create talking points for an estate planning discussion with William & Patricia Thompson.',
        output:
          'ESTATE PLANNING DISCUSSION\n\nTopics to cover:\n• Review current wills and trusts\n• Update beneficiaries\n• Discuss asset distribution\n• Consider tax implications\n• Recommend estate attorney\n\nAction items:\n• Schedule follow-up\n• Send estate planning resources',
        issues: [
          'Completely tone-deaf to the sensitivity of the topic',
          'No acknowledgment of blended family complexity',
          'Transactional rather than consultative approach',
          'Missing specific client context',
          'No preparation for difficult conversations',
        ],
        explanation:
          'Estate planning is deeply personal and often emotional. A checklist approach will make clients uncomfortable and damage trust.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added empathy, family context, and structured approach',
        prompt:
          'Create detailed talking points for an estate planning discussion with William & Patricia Thompson (ages 72 & 70, blended family with adult children from previous marriages, $8.5M estate). Include: 1) Sensitive conversation openers, 2) Key topics to address, 3) Family dynamics considerations, 4) Professional resources needed, 5) Approach for navigating difficult topics. Tone: empathetic, consultative, non-judgmental.',
        output:
          'ESTATE PLANNING DISCUSSION - WILLIAM & PATRICIA THOMPSON\n\nCONVERSATION APPROACH:\n\nOpening (set empathetic tone):\n"I know estate planning conversations can feel uncomfortable, but they\'re one of the most important gifts you can give your family. This is about ensuring your wishes are honored and reducing potential stress for your loved ones during an already difficult time. There are no right or wrong answers—just what feels right for both of you."\n\nFAMILY CONTEXT TO CONSIDER:\n• Blended family: William has 2 adult children from first marriage, Patricia has 1\n• Ages: His children are 48 & 45, her son is 42\n• Potential sensitivities around "fair vs. equal" distribution\n• Important to honor both partners\' wishes while maintaining family harmony\n• Acknowledge this requires delicate balance and open communication\n\nKEY TOPICS TO ADDRESS:\n\n1. Current Estate Planning Status\n   • When were current wills last updated?\n   • Are trusts in place? What type?\n   • Have circumstances changed since documents were drafted?\n   • Beneficiary designations on retirement accounts and insurance\n\n2. Legacy Vision and Values\n   • What do you want your legacy to be?\n   • How do you want to support your children?\n   • Are there charitable causes important to you?\n   • What values do you want to pass along with assets?\n\n3. Asset Distribution Philosophy\n   • Have you discussed how you\'d like assets distributed?\n   • Equal vs. equitable considerations for blended families\n   • Specific assets with sentimental value (family home, heirlooms)\n   • Timing of distributions (outright vs. over time)\n\n4. Practical Considerations\n   • Executor/trustee selection (neutral third party vs. family)\n   • Healthcare directives and powers of attorney\n   • Guardianship considerations (if applicable to grandchildren)\n   • Digital assets and account access\n\n5. Tax Optimization\n   • Current estate tax exposure ($8.5M estate, $13.6M exemption per person)\n   • Gifting strategies to reduce taxable estate\n   • Charitable giving for tax and legacy benefits\n   • Step-up in basis considerations\n\nDIFFICULT CONVERSATION NAVIGATION:\n\nIf discussing unequal distribution:\n"Some couples choose equal distribution, others choose what feels equitable given each child\'s circumstances. Neither is wrong—it\'s about what reflects your values and situation."\n\nIf tension around blended family:\n"Blended families often find that clear communication now prevents misunderstandings later. Some families benefit from a family meeting with the estate attorney to answer questions openly."\n\nIf reluctance to discuss:\n"I understand this topic can feel morbid. Think of it as a planning conversation, like retirement planning, but one that ensures your family is cared for according to your wishes."\n\nPROFESSIONAL RESOURCES NEEDED:\n✓ Estate planning attorney (specialized in blended families)\n✓ Tax advisor (for estate tax and gifting strategies)\n✓ Insurance specialist (if life insurance restructuring needed)\n✓ Optional: Family therapist/mediator (if family dynamics are complex)\n\nSUGGESTED NEXT STEPS:\n1. Gather current estate planning documents for review\n2. Both partners independently consider their wishes\n3. Discuss together to find common ground\n4. Schedule consultation with estate attorney (I can provide referrals)\n5. Consider family meeting to communicate plans (optional, but often helpful)\n\nNOTES FOR ADVISOR:\n• Listen more than talk—this is their process, not yours\n• Avoid inserting your own values about "fair" distribution\n• Normalize difficult feelings and conversations\n• Position yourself as a resource, not a decision-maker\n• Follow up with compassion—this may take multiple conversations',
        issues: [
          'Excellent empathy and structure, but needs compliance notes',
          'Should include disclaimer about legal advice boundaries',
          'Missing specific prompts for uncovering hidden family issues',
        ],
        explanation:
          'Adding family context, empathetic framing, and structured topics transforms this into a truly helpful preparation guide.',
        highlights: {
          added: [
            'Empathetic conversation openers',
            'Blended family dynamics acknowledgment',
            'Legacy vision questions (not just asset distribution)',
            'Difficult conversation navigation scripts',
            'Professional resource recommendations',
            'Advisor self-coaching notes',
          ],
          improved: ['Emotional intelligence', 'Client-centered approach', 'Family sensitivity'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added professional boundaries and compliance considerations',
        prompt:
          'Create detailed talking points for an estate planning discussion with William & Patricia Thompson (ages 72 & 70, blended family with adult children from previous marriages, $8.5M estate). Include: 1) Sensitive conversation openers, 2) Key topics to address, 3) Family dynamics considerations, 4) Professional resources needed, 5) Approach for navigating difficult topics. Tone: empathetic, consultative, non-judgmental.\n\nCompliance requirements:\n- Clear disclaimer that you\'re not providing legal or tax advice\n- Emphasis on attorney and CPA necessity\n- Avoid giving specific legal guidance\n- Note the importance of state-specific estate laws',
        output:
          'ESTATE PLANNING DISCUSSION - WILLIAM & PATRICIA THOMPSON\n\n⚠️ ADVISOR BOUNDARIES:\n• I am not an attorney or tax advisor—this is education and facilitation only\n• All legal and tax recommendations must come from qualified specialists\n• Estate laws vary by state—refer to licensed attorney\n• My role: Coordinate financial aspects and professional resources\n\nCONVERSATION APPROACH:\n\nOpening (set empathetic tone):\n"I know estate planning conversations can feel uncomfortable, but they\'re one of the most important gifts you can give your family. This is about ensuring your wishes are honored and reducing potential stress for your loved ones. I want to help you think through the financial aspects and connect you with legal and tax professionals who can formalize your plans. There are no right or wrong answers—just what feels right for both of you."\n\nFAMILY CONTEXT TO CONSIDER:\n• Blended family: William has 2 adult children from first marriage, Patricia has 1\n• Ages: His children are 48 & 45, her son is 42\n• Potential sensitivities around "fair vs. equal" distribution\n• Important to honor both partners\' wishes while maintaining family harmony\n• Acknowledge this requires delicate balance and open communication\n\nKEY TOPICS TO ADDRESS:\n\n1. Current Estate Planning Status\n   • When were current wills last updated? (Attorney should review)\n   • Are trusts in place? What type? (Attorney should verify appropriateness)\n   • Have circumstances changed since documents were drafted?\n   • Beneficiary designations on retirement accounts and insurance (I can help coordinate)\n\n2. Legacy Vision and Values\n   • What do you want your legacy to be?\n   • How do you want to support your children?\n   • Are there charitable causes important to you?\n   • What values do you want to pass along with assets?\n\n3. Asset Distribution Philosophy\n   • Have you discussed how you\'d like assets distributed?\n   • Equal vs. equitable considerations for blended families\n   • Specific assets with sentimental value (family home, heirlooms)\n   • Timing of distributions (outright vs. over time)\n   ⚠️ Note: Specific legal mechanisms require attorney guidance\n\n4. Practical Considerations\n   • Executor/trustee selection (attorney can advise on pros/cons)\n   • Healthcare directives and powers of attorney (legal documents)\n   • Guardianship considerations if applicable\n   • Digital assets and account access\n\n5. Tax Optimization Opportunities\n   • Current estate tax exposure ($8.5M estate, $13.6M exemption per person for 2024)\n   • Potential gifting strategies (CPA and attorney should coordinate)\n   • Charitable giving for tax and legacy benefits\n   • Step-up in basis considerations\n   ⚠️ Note: Tax laws vary by state; CPA must provide specific advice\n\nDIFFICULT CONVERSATION NAVIGATION:\n\nIf discussing unequal distribution:\n"Some couples choose equal distribution, others choose what feels equitable given each child\'s circumstances. Neither is wrong. Your estate attorney can explain the legal mechanisms for either approach and help you think through implications."\n\nIf tension around blended family:\n"Blended families often find that clear communication now prevents misunderstandings later. Some families benefit from a family meeting with the estate attorney to answer questions openly. Your attorney can facilitate if helpful."\n\nIf reluctance to discuss:\n"I understand this topic can feel morbid. Think of it as a planning conversation that ensures your family is cared for according to your wishes. We\'ll focus on the financial coordination—the attorney handles the legal specifics."\n\nPROFESSIONAL RESOURCES REQUIRED:\n✓ Estate planning attorney (specialized in blended families, licensed in your state)\n✓ Tax advisor/CPA (for estate tax and gifting strategies)\n✓ Insurance specialist (if life insurance restructuring needed)\n✓ Optional: Family therapist/mediator (if family dynamics are complex)\n\n⚠️ COMPLIANCE REMINDER:\n• Do not draft legal documents or provide legal advice\n• Do not provide specific tax recommendations (refer to CPA)\n• Do not tell clients how to distribute assets (facilitate their decision)\n• Always defer legal/tax questions to licensed professionals\n\nSUGGESTED NEXT STEPS:\n1. Gather current estate planning documents for attorney review\n2. Both partners independently consider their wishes\n3. Discuss together to find common ground\n4. I\'ll provide referrals to estate attorney and tax advisor\n5. Schedule joint consultation with attorney and CPA\n6. Consider family meeting to communicate plans (attorney can facilitate)\n\nNOTES FOR ADVISOR:\n• Listen more than talk—this is their process, not yours\n• Avoid inserting your own values about "fair" distribution\n• Stay within your professional boundaries—refer legal/tax questions immediately\n• Position yourself as coordinator, not expert in law or taxes\n• Follow up with compassion—this may take multiple conversations\n• Document all recommendations to seek legal/tax advice',
        issues: [
          'Strong professional boundaries established',
          'Could add more specific questions about their current family communication',
          'Consider adding prompts about second-to-die life insurance',
        ],
        explanation:
          'Estate planning requires careful boundary-setting. Financial advisors must facilitate the conversation while making clear they cannot provide legal or tax advice.',
        highlights: {
          added: [
            'Professional boundaries section at top',
            'Repeated disclaimers throughout ("attorney should," "CPA must")',
            'Compliance reminder section',
            'Documentation requirements',
            'State-specific law acknowledgment',
          ],
          improved: ['Professional boundaries', 'Legal compliance', 'Proper referrals'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final prep with personal insights and strategic approach',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nAdvisor notes: William is direct and business-like, Patricia is more emotional about family topics. They haven\'t updated estate plans since marriage 15 years ago. William\'s daughter from first marriage is estranged. Patricia worries about fairness. Their home in Napa is worth $2.5M and both want it to stay "in the family" but haven\'t defined what that means.',
        output:
          'ESTATE PLANNING DISCUSSION - WILLIAM & PATRICIA THOMPSON\n\n⚠️ ADVISOR BOUNDARIES:\n• I am not an attorney or tax advisor—this is education and facilitation only\n• All legal and tax recommendations must come from qualified specialists\n• Estate laws vary by state (California in this case)—refer to licensed attorney\n• My role: Coordinate financial aspects and professional resources\n\n💡 STRATEGIC APPROACH FOR THIS COUPLE:\n• William prefers direct, businesslike discussions—lead with facts and logistics\n• Patricia is more emotionally attuned—validate feelings and family concerns\n• Balance both communication styles throughout conversation\n• Sensitive topics: Estrangement (William\'s daughter), fairness concerns (Patricia), Napa home\n• Estate plans are 15 years old—significant changes likely needed\n\n🏡 SPECIFIC ISSUE TO ADDRESS: The Napa Home ($2.5M)\n• Both want it to "stay in the family" but haven\'t defined this\n• Questions to explore: Which family? Both families? One child to buy out others? Shared ownership?\n• This asset alone represents 30% of estate—significant planning needed\n• Attorney must advise on ownership structures (tenants in common, trust provisions, right of first refusal, etc.)\n\nCONVERSATION APPROACH:\n\nOpening (acknowledge both communication styles):\n"I know estate planning conversations can feel uncomfortable, and I appreciate you both being willing to tackle this important topic. William, I\'ll make sure we cover the practical and financial aspects efficiently. Patricia, I know family harmony is important to you, and we\'ll make sure to address those concerns thoughtfully. My goal today is to help you think through the financial and family aspects, then connect you with legal and tax professionals who can formalize your plans."\n\nFAMILY CONTEXT TO CONSIDER:\n• Blended family: William has 2 adult children from first marriage (ages 48 & 45), Patricia has 1 (age 42)\n• ⚠️ SENSITIVE: William\'s older daughter is estranged—address delicately\n• Patricia has concerns about fairness across all children\n• Documents are 15+ years old—pre-date significant asset growth and family changes\n• Napa home is emotionally significant to both\n\nKEY TOPICS TO ADDRESS:\n\n1. Current Estate Planning Status (URGENT—15 years old)\n   • Documents drafted before current asset levels ($8.5M vs. likely much less in 2009)\n   • Likely don\'t reflect current tax laws or family situation\n   • Beneficiary designations may be outdated\n   • Attorney review is critical given time elapsed\n\n2. Legacy Vision and Values\n   • What do you want your legacy to be?\n   • How do you envision supporting all children? (Address fairness concern gently)\n   • The Napa home: What does "staying in the family" mean to each of you?\n   • Are there charitable causes important to you?\n\n3. Asset Distribution Philosophy\n   • Equal vs. equitable: Patricia\'s concern about fairness\n   • ⚠️ Estrangement question: William, how do you think about providing for [daughter\'s name]?\n   • Specific assets: Napa home ownership/access for next generation\n   • Timing: Outright distribution vs. trust structures\n\n4. The Napa Home (Critical Discussion)\n   Questions to explore:\n   • Do you envision one child living there? All having access? Selling eventually?\n   • How do you balance $2.5M asset with fairness to other children?\n   • Should one child have option to buy out others at discounted rate?\n   • Or should it be sold and proceeds distributed?\n   • Attorney can structure legally once you decide philosophically\n\n5. Practical Considerations\n   • Executor/trustee: Consider professional given blended family complexity\n   • Healthcare directives and powers of attorney (update these too)\n   • Digital assets and account access\n   • California-specific estate considerations\n\n6. Tax Optimization Opportunities\n   • $8.5M estate is below current exemption ($27.2M combined for 2024)\n   • BUT exemption may decrease in 2026—planning window is narrow\n   • Napa home will receive step-up in basis (good for capital gains)\n   • Gifting strategies to reduce taxable estate if laws change\n   • Charitable giving options\n   ⚠️ Note: California has no state estate tax, but CPA should confirm full picture\n\nDIFFICULT CONVERSATION NAVIGATION:\n\nIf discussing estranged daughter:\n[To William] "I know your relationship with [name] is complicated. Only you can decide what feels right. Some parents choose to provide for all children regardless of relationship status, others don\'t. Your estate attorney can explain legal options for either path, and there\'s no judgment either way."\n\nIf Patricia worries about fairness:\n"Patricia, your concern about fairness is thoughtful. The Napa home makes this complex—its emotional value may differ from its financial value. Some families give the home to children who\'ll use it and balance with other assets. Others sell and distribute proceeds equally. Let\'s explore what \'fair\' means to both of you."\n\nIf tension about the home:\n"The Napa home is significant both financially and emotionally. You both want it in \'the family,\' but you may discover you define that differently—and that\'s okay. The attorney can structure whatever you decide. The hard part is the family conversation, not the legal mechanism."\n\nPROFESSIONAL RESOURCES REQUIRED:\n✓ Estate planning attorney (specialized in blended families, California-licensed, ideally with real estate trust experience)\n✓ Tax advisor/CPA (California estate and gift tax expertise)\n✓ Real estate attorney or appraiser (for Napa home valuation and options)\n✓ Optional but recommended: Family therapist/mediator (given estrangement and fairness concerns)\n\n⚠️ COMPLIANCE REMINDER:\n• Do not provide legal advice about estate structures, trusts, or inheritance laws\n• Do not provide tax advice about estate tax, gift tax, or California tax implications\n• Do not counsel about the estrangement or family relationship decisions\n• Refer all legal, tax, and psychological questions to appropriate licensed professionals\n• Document all recommendations to seek professional advice\n\nSUGGESTED NEXT STEPS:\n1. Gather current estate planning documents (wills, trusts, powers of attorney from 2009)\n2. Each partner: Write down your vision for asset distribution and the Napa home\n3. Compare notes privately to identify areas of agreement/disagreement\n4. I\'ll provide referrals to:\n   - Estate planning attorney (I recommend [NAME] who specializes in blended families)\n   - Your CPA for tax coordination\n   - Optional: Family mediator if needed for difficult conversations\n5. Schedule joint consultation with attorney and CPA\n6. After legal plan is drafted, consider family meeting to communicate (attorney can facilitate)\n\nNOTES FOR ADVISOR:\n• Start conversation with William\'s preferred style (direct, businesslike) to get buy-in\n• Pivot to Patricia\'s concerns (emotion, fairness) once framework is established\n• The estrangement is William\'s decision alone—support whatever he chooses\n• The Napa home will likely be the most emotional discussion—allow time\n• Reinforce that 15-year-old documents are almost certainly inadequate\n• Position legal/tax professionals as essential, not optional\n• This will take multiple conversations—don\'t rush\n• Follow up after they meet with attorney to coordinate financial implementation',
        issues: [],
        explanation:
          'The final version includes crucial personal context: William\'s communication style, Patricia\'s fairness concerns, the estrangement issue, and the Napa home complexity. AI provides the structure and compliance framework, but only the human advisor can navigate these deeply personal dynamics with appropriate sensitivity.',
        highlights: {
          added: [
            'Strategic approach section based on communication styles',
            'Specific Napa home issue highlighted (30% of estate)',
            'Estrangement acknowledged with sensitive approach',
            'Patricia\'s fairness concerns directly addressed',
            '15-year document age flagged as urgent',
            'California-specific considerations',
            'Recommended attorney name (advisor\'s network)',
            'Balance between William\'s and Patricia\'s preferences',
          ],
          improved: [
            'Deeply personalized approach',
            'Family dynamics sensitivity',
            'Strategic conversation flow',
            'Real-world complexity acknowledged',
          ],
        },
        educationalNote:
          'This scenario shows AI\'s limitations most clearly. While AI can provide estate planning frameworks and compliance boundaries, only the human advisor knows about the estrangement, Patricia\'s worries, the Napa home\'s emotional significance, and each spouse\'s communication preferences. These human insights are irreplaceable.',
      },
    ],
  },

  // SCENARIO 6: Portfolio Rebalancing Notification
  {
    id: 'rebalancing-notification',
    title: 'Portfolio Rebalancing Recommendation',
    description: 'Explain why rebalancing is needed now and what action to take',
    category: 'communication',
    difficulty: 'beginner',
    clientProfile: {
      name: 'James & Rebecca Sullivan',
      portfolio: 'Moderate allocation, 60/40 target',
      situation: 'Married couple, ages 54 & 52, strong stock market has shifted allocation to 68/32',
      aum: '$4.1M',
    },
    learningObjectives: [
      'Learn to explain technical concepts (rebalancing) in simple terms',
      'See how to present recommendations with clear rationale',
      'Understand how to make passive strategies feel proactive and valuable',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Technical jargon without clear explanation of why it matters',
        prompt: 'Write an email recommending portfolio rebalancing to James & Rebecca Sullivan.',
        output:
          'Subject: Portfolio Rebalancing Needed\n\nDear James and Rebecca,\n\nYour portfolio has drifted from its target allocation and needs rebalancing. Your equity exposure is now 68% instead of the target 60%. We should sell some stocks and buy bonds to get back to target.\n\nPlease confirm you\'d like us to proceed.\n\nBest regards',
        issues: [
          'Sounds like a problem rather than normal portfolio maintenance',
          'No explanation of why this matters to them',
          'Technical language ("drifted," "equity exposure") without translation',
          'No context about market performance or timing',
          'Feels transactional rather than advisory',
        ],
        explanation:
          'Rebalancing is a routine but important activity. Framing it as a "problem" creates anxiety instead of demonstrating value.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added context, clear explanation, and client-relevant benefits',
        prompt:
          'Write an email to James & Rebecca Sullivan (ages 54 & 52, $4.1M portfolio, 60/40 moderate allocation target) explaining that recent market strength has shifted their portfolio to 68/32 and recommending rebalancing. Explain: 1) Why this happened (good news), 2) Why rebalancing matters for their goals, 3) What we\'ll do specifically, 4) The benefit to them. Tone: educational, positive, advisory. 250-300 words.',
        output:
          'Subject: Good News: Strong Markets Create Rebalancing Opportunity\n\nDear James and Rebecca,\n\nI have good news to share: your portfolio has benefited significantly from the recent stock market strength. Your equity holdings are up 14% year-to-date, which has increased the value of your portfolio from $3.9M to $4.1M. This is excellent progress toward your retirement goals.\n\nThis strong performance has created a natural side effect: your portfolio allocation has shifted from your target 60% stocks / 40% bonds to approximately 68% stocks / 32% bonds. While this drift is caused by positive returns (which is great!), it does mean you\'re now taking more risk than your plan intended.\n\nWhy rebalancing matters:\n\nYour 60/40 target allocation was designed to balance growth potential with stability as you approach retirement in the next 8-10 years. At 68% stocks, you\'re more exposed to market downturns than we\'d recommend for this stage of your financial journey. Rebalancing brings you back to your target risk level.\n\nWhat we\'ll do:\n\nWith your approval, we\'ll sell approximately $330,000 of your equity holdings and reinvest in bonds. This "sells high" in stocks (after strong gains) and locks in some of those profits into more stable investments. The entire process is tax-efficient and takes 1-2 business days.\n\nThe benefit to you:\n\nRebalancing is one of the most valuable disciplines in investing. It forces you to systematically "buy low and sell high" rather than chasing performance. Studies show investors who rebalance regularly have better long-term outcomes with less volatility.\n\nIf this approach sounds good, simply reply to confirm and I\'ll execute the rebalancing this week. As always, I\'m happy to discuss any questions you have.\n\nBest regards',
        issues: [
          'Clear and educational, but missing some compliance items',
          'Should include disclaimer about not guaranteeing outcomes',
          'Mention tax efficiency but doesn\'t specify if this is taxable or qualified account',
          'Could quantify the risk reduction more specifically',
        ],
        explanation:
          'Framing rebalancing as a result of "good news" (strong returns) makes it feel positive. Explaining the "why" helps clients understand the value of the recommendation.',
        highlights: {
          added: [
            'Positive framing ("good news," "strong performance")',
            'Specific numbers ($3.9M → $4.1M, 68/32 vs. 60/40)',
            'Clear explanation of why rebalancing matters',
            'Educational note about "buy low, sell high" discipline',
            'Simple approval process',
          ],
          improved: ['Educational tone', 'Client value proposition', 'Positive context'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added compliance disclaimers and tax considerations',
        prompt:
          'Write an email to James & Rebecca Sullivan (ages 54 & 52, $4.1M portfolio, 60/40 moderate allocation target) explaining that recent market strength has shifted their portfolio to 68/32 and recommending rebalancing. Explain: 1) Why this happened (good news), 2) Why rebalancing matters for their goals, 3) What we\'ll do specifically, 4) The benefit to them. Tone: educational, positive, advisory. 250-300 words.\n\nCompliance requirements:\n- Specify this is for their IRA (tax-deferred), no capital gains tax\n- Disclaimer about not guaranteeing future results\n- Note that rebalancing involves market risk\n- Appropriate qualifiers about expected benefits',
        output:
          'Subject: Good News: Strong Markets Create Rebalancing Opportunity\n\nDear James and Rebecca,\n\nI have good news to share: your IRA portfolio has benefited significantly from the recent stock market strength. Your equity holdings are up 14% year-to-date, which has increased the value of your portfolio from $3.9M to $4.1M. This is excellent progress toward your retirement goals, though past performance does not guarantee future results.\n\nThis strong performance has created a natural side effect: your portfolio allocation has shifted from your target 60% stocks / 40% bonds to approximately 68% stocks / 32% bonds. While this drift is caused by positive returns, it does mean you\'re now taking more market risk than your investment plan intended.\n\nWhy rebalancing matters:\n\nYour 60/40 target allocation was designed to balance growth potential with stability as you approach retirement in the next 8-10 years. At 68% stocks, you\'re more exposed to potential market downturns. Rebalancing helps manage this risk by bringing you back to your target allocation, though all investments carry risk and rebalancing does not guarantee against loss.\n\nWhat we\'ll do:\n\nWith your approval, we\'ll sell approximately $330,000 of your equity holdings and reinvest in bonds within your IRA. Because this is in your tax-deferred retirement account, there are no capital gains tax implications—the rebalancing is tax-free. The process takes 1-2 business days.\n\nThe benefit:\n\nRebalancing is designed to help maintain your intended risk level and can support better long-term outcomes by systematically reducing positions that have appreciated and adding to those that haven\'t. While this doesn\'t guarantee results, it aligns with evidence-based investment practices.\n\nIf this approach sounds appropriate, simply reply to confirm and I\'ll execute the rebalancing this week. As always, I\'m happy to discuss any questions.\n\nBest regards',
        issues: [
          'Solid compliance coverage',
          'Could add a note about their specific timeline to retirement',
          'Consider mentioning exact funds being sold/bought for transparency',
        ],
        explanation:
          'Adding disclaimers about risk and performance maintains compliance while preserving the educational, advisory tone.',
        highlights: {
          added: [
            'IRA specification (tax implications clarified)',
            'Past performance disclaimer',
            'Risk disclaimers ("does not guarantee against loss")',
            'Qualifying language ("designed to help," "can support")',
            'Tax-free rebalancing benefit highlighted',
          ],
          improved: ['Regulatory compliance', 'Risk disclosure', 'Tax clarity'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with personal context and strategic insights',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nAdvisor notes: Rebecca asked last quarter about being "too conservative" when stocks were doing well. This is a good opportunity to reinforce the value of discipline. James is retiring in 18 months and they want to know the portfolio is positioned for income generation. Add specific fund names for transparency.',
        output:
          'Subject: Good News: Strong Markets Create Rebalancing Opportunity\n\nDear James and Rebecca,\n\nI have good news to share: your IRA portfolio has benefited significantly from the recent stock market strength. Your equity holdings are up 14% year-to-date, which has increased the value of your portfolio from $3.9M to $4.1M. This is excellent progress toward your retirement goals, though past performance does not guarantee future results.\n\nRebecca, I know you asked last quarter whether the 60/40 allocation was "too conservative" given strong stock returns. This quarter is a perfect example of why we maintain that discipline: we\'re now able to lock in some of those stock gains and shift to bonds while markets are strong—exactly the kind of strategic positioning that pays off over time.\n\nWhat\'s happened:\n\nYour portfolio allocation has shifted from your target 60% stocks / 40% bonds to approximately 68% stocks / 32% bonds due to strong equity performance. While this drift is caused by good returns, it does mean you\'re taking more market risk than intended—particularly important as James approaches retirement in 18 months.\n\nWhy rebalancing matters now:\n\nYour 60/40 target allocation was specifically designed for this pre-retirement phase: enough growth potential to continue building wealth, but enough stability to protect against downturns right before you need to start drawing income. At 68% stocks, you\'re more exposed to potential volatility just as you\'re transitioning to retirement. Rebalancing manages this risk and positions you for income generation.\n\nWhat we\'ll do specifically:\n\nWith your approval, we\'ll:\n• Sell $200,000 from Vanguard Total Stock Market Index Fund (VTSAX)\n• Sell $130,000 from Vanguard Total International Stock Index Fund (VTIAX)\n• Buy $330,000 of Vanguard Total Bond Market Index Fund (VBTLX)\n\nThis brings you back to 60/40 and increases your bond allocation, which will generate more predictable income when James retires. Because this is in your IRA, there are no capital gains tax implications—the rebalancing is tax-free.\n\nThe benefit:\n\nThis is exactly the kind of disciplined portfolio management that often makes the difference between good and great long-term results. By rebalancing now, we\'re:\n✓ Locking in stock market gains from the past year\n✓ Reducing risk as retirement approaches\n✓ Increasing income-generating bond holdings\n✓ Maintaining your strategic allocation rather than chasing performance\n\nWhile this doesn\'t guarantee results and all investments carry risk, it aligns with evidence-based practices for pre-retirees.\n\nIf this approach sounds appropriate, simply reply to confirm and I\'ll execute the rebalancing this week. Given James\'s retirement timeline, I\'d recommend proceeding soon to lock in current valuations.\n\nAs always, I\'m happy to discuss any questions—and Rebecca, I hope this demonstrates why the "boring" 60/40 allocation actually creates these valuable opportunities!\n\nBest regards',
        issues: [],
        explanation:
          'The advisor adds personal context that transforms this from a generic rebalancing notice into a strategic, timely recommendation. Referencing Rebecca\'s previous question about being "too conservative" demonstrates listening and provides teaching moment. Mentioning James\'s 18-month retirement timeline adds urgency and relevance.',
        highlights: {
          added: [
            'Reference to Rebecca\'s previous "too conservative" question',
            'James\'s specific retirement timeline (18 months)',
            'Specific fund names for complete transparency (VTSAX, VTIAX, VBTLX)',
            'Connection to income generation goal',
            'Checkmark list of specific benefits',
            'Gentle humor at the end about "boring" allocation',
            'Urgency based on retirement timeline',
          ],
          improved: [
            'Deeply personalized',
            'Addresses past concerns',
            'Transparent specifics',
            'Strategic timing context',
          ],
        },
        educationalNote:
          'AI can explain rebalancing mechanics and compliance language, but only the human advisor remembers Rebecca\'s concern about being too conservative and knows James is retiring in 18 months. These details make the recommendation timely, relevant, and convincing.',
      },
    ],
  },
]
