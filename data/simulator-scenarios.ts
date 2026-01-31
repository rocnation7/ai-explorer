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

  // SCENARIO 7: Email Response Drafting
  {
    id: 'email-drafting',
    title: 'Email Response Drafting',
    description: 'Generate professional responses to common client inquiries quickly',
    category: 'communication',
    difficulty: 'beginner',
    clientProfile: {
      name: 'David & Karen Mitchell',
      portfolio: 'Balanced growth portfolio',
      situation: 'Ages 55 & 53, both professionals, planning for retirement in 10 years',
      aum: '$1.2M',
    },
    learningObjectives: [
      'Learn to craft quick yet personalized email responses',
      'See how AI maintains professional tone while saving time',
      'Understand the importance of verifying facts before sending',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Generic response without client context',
        prompt: 'Reply to David Mitchell who asked about his portfolio performance this quarter.',
        output:
          'Hi David,\n\nYour portfolio performed well this quarter. The markets were positive and your investments benefited. Let me know if you have any questions.\n\nBest regards',
        issues: [
          'No specific performance numbers provided',
          'Generic and impersonal tone',
          'Doesn\'t address what the client actually asked',
          'Missing any acknowledgment of client\'s specific situation',
          'No next steps or offer to discuss further',
        ],
        explanation:
          'Without context or specifics, AI produces a response that could apply to anyone and provides no real value to the client.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added client context and specific performance data',
        prompt:
          'Reply to David Mitchell (age 55, $1.2M balanced portfolio, planning retirement in 10 years) who asked about his Q3 portfolio performance. Include: 1) Specific return figures, 2) Context vs. benchmarks, 3) Relevance to his retirement goals. Tone: professional, warm, 150-200 words.',
        output:
          'Hi David,\n\nThank you for reaching out about your Q3 performance. I\'m pleased to report your portfolio returned +5.2% for the quarter, outperforming your blended benchmark by 40 basis points.\n\nBreaking this down: your equity allocation (+7.1%) benefited from the continued strength in large-cap growth stocks, while your fixed income holdings (+1.8%) provided steady returns as interest rates stabilized.\n\nMore importantly, this quarter\'s performance keeps you well on track for your retirement goals. Year-to-date, your portfolio has grown by approximately $85,000, putting you ahead of the pace we projected when we updated your financial plan last spring.\n\nAs we approach year-end, I\'d like to schedule a brief call to review potential tax-loss harvesting opportunities and discuss any adjustments you\'d like to consider for 2024.\n\nWould next Tuesday or Wednesday work for a 20-minute call?\n\nWarm regards',
        issues: [
          'Much better! But should verify all performance figures',
          'Could add compliance disclaimers for performance reporting',
          'Missing personal touch about David specifically',
        ],
        explanation:
          'Adding specific context about the client and their goals transforms a generic response into a meaningful, personalized communication.',
        highlights: {
          added: [
            'Specific return figures (+5.2%, +7.1%, +1.8%)',
            'Benchmark comparison',
            'Connection to retirement goals',
            'Proactive next steps (call scheduling)',
            'Dollar value context ($85,000 YTD growth)',
          ],
          improved: ['Professional yet warm tone', 'Client-specific relevance', 'Actionable follow-up'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added compliance language and verification reminders',
        prompt:
          'Reply to David Mitchell (age 55, $1.2M balanced portfolio, planning retirement in 10 years) who asked about his Q3 portfolio performance. Include: 1) Specific return figures, 2) Context vs. benchmarks, 3) Relevance to his retirement goals. Tone: professional, warm, 150-200 words.\n\nCompliance requirements:\n- Include past performance disclaimer\n- Verify figures before sending\n- Use appropriate qualifiers for projections',
        output:
          'Hi David,\n\nThank you for reaching out about your Q3 performance. I\'m pleased to report your portfolio returned +5.2% for the quarter, outperforming your blended benchmark by 40 basis points. Past performance does not guarantee future results.\n\nBreaking this down: your equity allocation (+7.1%) benefited from continued strength in large-cap growth stocks, while your fixed income holdings (+1.8%) provided steady returns as interest rates stabilized.\n\nThis quarter\'s performance keeps you on track toward your retirement goals. Year-to-date, your portfolio has grown by approximately $85,000, which aligns with the projections in your financial plan, though actual future results may vary based on market conditions.\n\nAs we approach year-end, I\'d like to schedule a brief call to review potential tax-loss harvesting opportunities and discuss any adjustments you might consider for 2024.\n\nWould next Tuesday or Wednesday work for a 20-minute call?\n\nWarm regards',
        issues: [
          'Compliance covered',
          'Could add a personal note about David or Karen',
          'Consider mentioning their specific retirement timeline',
        ],
        explanation:
          'Adding appropriate disclaimers and qualifiers protects both advisor and client while maintaining a professional, helpful tone.',
        highlights: {
          added: [
            'Past performance disclaimer',
            'Qualifying language ("may vary," "approximately")',
            'Removed absolute projections',
          ],
          improved: ['Regulatory compliance', 'Professional standards', 'Risk-appropriate language'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with personal touches',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nPersonal notes: David and Karen just returned from their 30th anniversary trip to Italy. David mentioned he\'s thinking about reducing work hours next year.',
        output:
          'Hi David,\n\nWelcome back! I hope you and Karen had a wonderful time celebrating your 30th anniversary in Italy. That\'s a milestone worth celebrating!\n\nThank you for reaching out about your Q3 performance. I\'m pleased to report your portfolio returned +5.2% for the quarter, outperforming your blended benchmark by 40 basis points. Past performance does not guarantee future results.\n\nBreaking this down: your equity allocation (+7.1%) benefited from continued strength in large-cap growth stocks, while your fixed income holdings (+1.8%) provided steady returns as interest rates stabilized.\n\nThis quarter\'s performance keeps you on track toward your retirement goals. Year-to-date, your portfolio has grown by approximately $85,000, which aligns with the projections in your financial plan, though actual future results may vary based on market conditions.\n\nGiven your thoughts about potentially reducing your work hours next year, I\'d especially like to review how that might affect our projections when we talk. As we approach year-end, we can also discuss tax-loss harvesting opportunities.\n\nWould next Tuesday or Wednesday work for a 20-minute call?\n\nWarm regards',
        issues: [],
        explanation:
          'The personal touches—acknowledging the anniversary trip and connecting to David\'s work plans—transform a good email into one that strengthens the client relationship. Only the human advisor knows these details.',
        highlights: {
          added: [
            'Anniversary trip acknowledgment',
            'Connection to work reduction plans',
            'More relevant call agenda based on client\'s life',
          ],
          improved: ['Personal connection', 'Relationship building', 'Contextual relevance'],
        },
        educationalNote:
          'AI can generate professional, compliant responses quickly. But only the human advisor knows about the Italy trip and David\'s career thoughts. These details make clients feel truly known and valued.',
      },
    ],
  },

  // SCENARIO 8: Performance Attribution Stories
  {
    id: 'performance-stories',
    title: 'Performance Attribution Stories',
    description: 'Translate complex performance data into clear client narratives',
    category: 'analysis',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Thomas Wright',
      portfolio: 'Aggressive growth, tech-heavy allocation',
      situation: 'Age 38, tech entrepreneur, high risk tolerance, $3.5M portfolio',
      aum: '$3.5M',
    },
    learningObjectives: [
      'Learn to translate complex attribution data into clear narratives',
      'See how AI connects portfolio performance to market context',
      'Understand how to explain both outperformance and underperformance',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Technical data dump without narrative',
        prompt: 'Explain Thomas Wright\'s portfolio performance this quarter.',
        output:
          'Portfolio Performance Summary:\n\n- Total Return: +8.3%\n- Benchmark: +6.1%\n- Alpha: +2.2%\n\nTop Contributors:\n- Technology: +3.2%\n- Healthcare: +1.1%\n\nTop Detractors:\n- Energy: -0.4%\n- Utilities: -0.2%',
        issues: [
          'Just numbers with no context or explanation',
          'Client won\'t understand why these results occurred',
          'No connection to investment strategy or decisions',
          'Missing market context entirely',
          'Feels like a spreadsheet, not a communication',
        ],
        explanation:
          'Raw performance data without narrative context leaves clients confused about what happened and why it matters.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added narrative context and market explanation',
        prompt:
          'Create a performance attribution story for Thomas Wright (age 38, tech entrepreneur, $3.5M aggressive growth portfolio). His portfolio returned +8.3% vs benchmark +6.1%. Technology was the main driver. Explain: 1) What drove the performance, 2) Why the positioning made sense, 3) What it means going forward. Tone: sophisticated but accessible, 250-300 words.',
        output:
          'Thomas,\n\nYour portfolio delivered strong results this quarter, returning +8.3% compared to +6.1% for your benchmark—an outperformance of over 2 percentage points.\n\nWhat Drove the Performance:\n\nThe technology sector was the primary engine of your returns, contributing +3.2% to overall performance. Your concentrated positions in semiconductor companies and cloud infrastructure providers benefited from continued enterprise AI adoption and data center expansion. Companies like NVIDIA and Microsoft, which comprise significant portions of your tech allocation, saw substantial gains as AI monetization began exceeding analyst expectations.\n\nYour healthcare allocation added another +1.1%, with biotech holdings performing well following positive clinical trial announcements in the obesity drug space.\n\nThe energy sector was a modest drag (-0.4%), as oil prices pulled back from summer highs. However, your underweight position here limited the impact.\n\nWhy This Positioning Makes Sense:\n\nYour aggressive growth strategy is designed to capture innovation-driven returns over the long term. While this creates more volatility than a balanced portfolio, quarters like this demonstrate the upside potential. Your tech-heavy allocation reflects both your professional expertise in the sector and your high risk tolerance.\n\nLooking Ahead:\n\nTechnology valuations have expanded, which increases short-term risk. However, the fundamental drivers—AI adoption, cloud computing growth, and digital transformation—remain intact. We\'ll continue monitoring positioning while staying true to your long-term growth objectives.\n\nI\'d welcome the chance to discuss these results in more detail if you\'re interested.\n\nBest regards',
        issues: [
          'Strong narrative, but needs compliance review',
          'Forward-looking statements need qualifiers',
          'Should acknowledge concentration risk more explicitly',
        ],
        explanation:
          'Transforming data into a narrative helps clients understand the "why" behind performance, not just the numbers.',
        highlights: {
          added: [
            'Narrative explanation of drivers',
            'Specific company examples with context',
            'Connection to broader market themes (AI, cloud)',
            'Strategic rationale for positioning',
            'Forward-looking perspective',
          ],
          improved: ['Storytelling flow', 'Client understanding', 'Investment context'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added compliance language and risk acknowledgments',
        prompt:
          'Create a performance attribution story for Thomas Wright (age 38, tech entrepreneur, $3.5M aggressive growth portfolio). His portfolio returned +8.3% vs benchmark +6.1%. Technology was the main driver. Explain: 1) What drove the performance, 2) Why the positioning made sense, 3) What it means going forward. Tone: sophisticated but accessible, 250-300 words.\n\nCompliance requirements:\n- Acknowledge concentration risk\n- Qualify forward-looking statements\n- Include performance disclaimers\n- Note that past performance doesn\'t guarantee future results',
        output:
          'Thomas,\n\nYour portfolio delivered strong results this quarter, returning +8.3% compared to +6.1% for your benchmark—an outperformance of over 2 percentage points. Past performance does not guarantee future results.\n\nWhat Drove the Performance:\n\nThe technology sector was the primary engine of your returns, contributing +3.2% to overall performance. Your concentrated positions in semiconductor companies and cloud infrastructure providers benefited from continued enterprise AI adoption and data center expansion. This concentration, while contributing to strong results this quarter, does carry additional risk compared to more diversified approaches.\n\nYour healthcare allocation added another +1.1%, with biotech holdings performing well following positive clinical trial announcements.\n\nThe energy sector was a modest drag (-0.4%), as oil prices pulled back from summer highs. However, your underweight position here limited the impact.\n\nWhy This Positioning Makes Sense for You:\n\nYour aggressive growth strategy is designed to pursue innovation-driven returns over the long term. While this creates more volatility than a balanced portfolio, your high risk tolerance and long time horizon allow you to weather short-term fluctuations in pursuit of higher potential growth.\n\nLooking Ahead:\n\nTechnology valuations have expanded, which may increase short-term volatility. The fundamental drivers—AI adoption, cloud computing growth, digital transformation—appear to remain intact, though market conditions can change. We\'ll continue monitoring positioning while staying aligned with your long-term objectives.\n\nI\'d welcome the chance to discuss these results further.\n\nBest regards',
        issues: [
          'Compliance is solid',
          'Could reference Thomas\'s specific investment philosophy',
          'Consider acknowledging his industry expertise',
        ],
        explanation:
          'Adding risk acknowledgments and appropriate qualifiers ensures the communication is both informative and compliant.',
        highlights: {
          added: [
            'Past performance disclaimer',
            'Concentration risk acknowledgment',
            'Qualified forward-looking statements ("may," "appears to")',
            'Risk tolerance connection',
          ],
          improved: ['Regulatory compliance', 'Balanced perspective', 'Risk communication'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with personal context and advisor insights',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nAdvisor notes: Thomas sold his first startup to a major tech company. He has deep knowledge of the semiconductor industry and often discusses AI trends. He recently mentioned exploring angel investing in AI startups.',
        output:
          'Thomas,\n\nYour portfolio delivered strong results this quarter, returning +8.3% compared to +6.1% for your benchmark—an outperformance of over 2 percentage points. Past performance does not guarantee future results.\n\nWhat Drove the Performance:\n\nNo surprise to you—the technology sector was the primary engine of your returns, contributing +3.2% to overall performance. Your concentrated positions in semiconductor companies and cloud infrastructure providers benefited from the AI adoption trends you\'ve been tracking closely. The thesis you\'ve championed—that enterprise AI monetization would exceed expectations—played out this quarter.\n\nYour healthcare allocation added another +1.1%, with biotech holdings performing well following positive clinical trial announcements.\n\nEnergy was a modest drag (-0.4%), but your underweight position limited the impact.\n\nRisk Acknowledgment:\n\nYour tech concentration contributed significantly to this quarter\'s outperformance, though it does carry higher volatility than a diversified approach. Given your industry expertise and high risk tolerance, this aligns with our agreed strategy—but it\'s worth periodic review as your portfolio grows.\n\nLooking Ahead:\n\nTechnology valuations have expanded, which may increase short-term volatility. That said, you understand these dynamics better than most. Speaking of which—I\'d be interested to hear your thoughts on the angel investing opportunities you mentioned. While that\'s outside your managed portfolio, understanding your total exposure to early-stage tech would help me think holistically about your positioning here.\n\nLet me know if you\'d like to discuss—I always enjoy your perspective on where the industry is heading.\n\nBest regards',
        issues: [],
        explanation:
          'The advisor adds crucial context: acknowledging Thomas\'s expertise, referencing his angel investing interest, and treating him as a knowledgeable partner rather than just a client. This transforms a performance report into a strategic conversation.',
        highlights: {
          added: [
            'Acknowledgment of Thomas\'s industry expertise',
            'Reference to his thesis on AI monetization',
            'Connection to angel investing discussion',
            'Invitation for his perspective',
            'Holistic wealth management approach',
          ],
          improved: ['Peer-level communication', 'Strategic partnership tone', 'Relationship depth'],
        },
        educationalNote:
          'AI can translate performance data into narratives, but only the human advisor knows about Thomas\'s startup exit, semiconductor expertise, and angel investing interests. These insights transform a report into a strategic dialogue.',
      },
    ],
  },

  // SCENARIO 9: Firm-Wide Communication Templates
  {
    id: 'communication-templates',
    title: 'Firm-Wide Communication Templates',
    description: 'Create consistent, on-brand templates for your advisor team',
    category: 'planning',
    difficulty: 'beginner',
    clientProfile: {
      name: 'Horizon Wealth Partners',
      portfolio: 'RIA firm with 12 advisors',
      situation: 'Growing firm seeking to standardize client communications while preserving advisor personality',
      aum: '$850M firm-wide',
    },
    learningObjectives: [
      'Learn to create scalable communication templates for teams',
      'See how AI maintains brand consistency with personalization flexibility',
      'Understand template design for compliance and adoption',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Generic template without firm voice or flexibility',
        prompt: 'Create a client welcome email template for our RIA firm.',
        output:
          'Subject: Welcome to Our Firm\n\nDear [Client Name],\n\nWelcome to our firm. We are excited to have you as a client.\n\nYour advisor will be in touch soon to schedule your first meeting. Please let us know if you have any questions.\n\nThank you for choosing us.\n\nBest regards,\n[Advisor Name]',
        issues: [
          'No personality or brand voice',
          'Doesn\'t set expectations for the relationship',
          'Missing key information clients need at onboarding',
          'No personalization options for advisors',
          'Could be from any generic firm',
        ],
        explanation:
          'A template without brand voice or structure just creates more work for advisors who need to heavily modify it anyway.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added firm voice, structure, and personalization variables',
        prompt:
          'Create a client welcome email template for Horizon Wealth Partners, an RIA firm that emphasizes personalized service and long-term relationships. Include: 1) Warm, professional brand voice, 2) Key onboarding information, 3) Clear next steps, 4) Personalization variables for advisors. Mark customizable sections with [brackets].',
        output:
          'Subject: Welcome to Horizon Wealth Partners, [Client First Name]\n\nDear [Client First Name],\n\nOn behalf of everyone at Horizon Wealth Partners, I\'m delighted to welcome you to our client family. Building meaningful, long-term relationships is at the core of everything we do, and I\'m honored that you\'ve chosen to partner with us for your financial journey.\n\nWhat Happens Next:\n\nOver the coming days, you\'ll receive several items to help you get started:\n\n• Account documentation and agreements (arriving via [DocuSign/mail])\n• Secure client portal access credentials\n• Our client welcome guide with important contact information\n\nOur First Meeting:\n\nI\'ve tentatively scheduled our initial planning session for [Date/Time]. During this meeting, we\'ll:\n\n• Review your complete financial picture\n• Discuss your goals, concerns, and priorities\n• Begin developing your personalized financial strategy\n\nPlease bring [specific documents if needed] to help us make the most of our time together.\n\n[PERSONALIZATION SECTION - Advisor adds 1-2 sentences specific to this client\'s situation, such as referencing how they were introduced, a specific goal they mentioned, or something from your first conversation.]\n\nIf you have any questions before our meeting, please don\'t hesitate to reach out directly at [phone] or [email]. I\'m here to help.\n\nI look forward to working together.\n\nWarm regards,\n\n[Advisor Name]\n[Title]\nHorizon Wealth Partners\n[Phone] | [Email]',
        issues: [
          'Good structure, but needs compliance elements',
          'Should include firm disclosures',
          'Could add more guidance for advisors on personalization',
        ],
        explanation:
          'A well-structured template with clear personalization prompts makes it easy for advisors to create consistent yet personal communications.',
        highlights: {
          added: [
            'Firm brand voice ("client family," "honored")',
            'Clear next steps checklist',
            'Meeting agenda preview',
            'Explicit personalization prompt for advisors',
            'Multiple contact options',
          ],
          improved: ['Professional warmth', 'Client expectations', 'Actionable structure'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added compliance elements and advisor guidance',
        prompt:
          'Create a client welcome email template for Horizon Wealth Partners, an RIA firm that emphasizes personalized service and long-term relationships. Include: 1) Warm, professional brand voice, 2) Key onboarding information, 3) Clear next steps, 4) Personalization variables for advisors. Mark customizable sections with [brackets].\n\nCompliance requirements:\n- Include standard fiduciary disclosure\n- Add firm contact information for compliance\n- Include ADV disclosure reference\n- Provide advisor guidance notes',
        output:
          '---ADVISOR GUIDANCE---\nThis template is approved for new client welcomes. Personalize the bracketed sections but do not modify compliance language. Submit to compliance if adding investment-specific content.\n---END GUIDANCE---\n\nSubject: Welcome to Horizon Wealth Partners, [Client First Name]\n\nDear [Client First Name],\n\nOn behalf of everyone at Horizon Wealth Partners, I\'m delighted to welcome you to our client family. Building meaningful, long-term relationships is at the core of everything we do, and I\'m honored that you\'ve chosen to partner with us for your financial journey.\n\nAs a fiduciary, we are legally and ethically obligated to act in your best interest at all times. This commitment guides every recommendation we make and every strategy we develop.\n\nWhat Happens Next:\n\nOver the coming days, you\'ll receive several items to help you get started:\n\n• Account documentation and agreements (arriving via [DocuSign/mail])\n• Secure client portal access credentials\n• Our client welcome guide with important contact information\n• Our Form ADV Part 2 disclosure brochure (please review and retain)\n\nOur First Meeting:\n\nI\'ve tentatively scheduled our initial planning session for [Date/Time]. During this meeting, we\'ll:\n\n• Review your complete financial picture\n• Discuss your goals, concerns, and priorities\n• Begin developing your personalized financial strategy\n\n[PERSONALIZATION SECTION - Add 1-2 sentences specific to this client. Reference how you connected, a specific goal they mentioned, or something meaningful from your first conversation. Keep it genuine and brief.]\n\nIf you have any questions before our meeting, please don\'t hesitate to reach out directly at [phone] or [email]. I\'m here to help.\n\nI look forward to working together.\n\nWarm regards,\n\n[Advisor Name]\n[Title]\nHorizon Wealth Partners\n[Phone] | [Email]\n\n---\nHorizon Wealth Partners | 123 Main Street, Suite 400, Anytown, ST 12345\nFor questions about your account or our services, contact compliance@horizonwealth.com\nInvestment advisory services offered through Horizon Wealth Partners, a registered investment advisor.',
        issues: [
          'Comprehensive template ready for firm-wide use',
          'Could add examples in advisor guidance',
          'Consider version for different client types',
        ],
        explanation:
          'Including compliance elements and clear advisor guidance creates a template that\'s both safe to use and easy to customize correctly.',
        highlights: {
          added: [
            'Advisor guidance section with clear rules',
            'Fiduciary disclosure statement',
            'ADV reference in onboarding items',
            'Firm compliance contact',
            'Standard footer with disclosures',
          ],
          improved: ['Regulatory compliance', 'Advisor guardrails', 'Professional standards'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final template with examples and firm-specific customization',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nFirm notes: Horizon Wealth specializes in serving medical professionals. Many clients are referred by existing clients or COIs. The firm emphasizes work-life balance and understands busy professional schedules.',
        output:
          '---ADVISOR GUIDANCE---\nThis template is approved for new client welcomes. Personalize the bracketed sections but do not modify compliance language. Submit to compliance if adding investment-specific content.\n\nPERSONALIZATION EXAMPLES:\n• Referral: "Dr. Patel mentioned you\'re navigating your first year as an attending—that\'s both exciting and financially complex. I look forward to helping you build a strong foundation."\n• Direct inquiry: "I appreciated our initial conversation about balancing student loan payoff with retirement savings. These are exactly the trade-offs we\'ll work through together."\n• COI referral: "Sarah Chen at First National Bank suggested we connect given your upcoming practice acquisition. I\'ve helped several physicians through similar transitions."\n---END GUIDANCE---\n\nSubject: Welcome to Horizon Wealth Partners, [Client First Name]\n\nDear [Client First Name],\n\nOn behalf of everyone at Horizon Wealth Partners, I\'m delighted to welcome you to our client family. We\'ve built our practice around serving medical professionals like you, and I understand that your time is valuable and your financial situation has unique complexities.\n\nAs a fiduciary, we are legally and ethically obligated to act in your best interest at all times. This commitment guides every recommendation we make.\n\nWhat Happens Next:\n\nOver the coming days, you\'ll receive:\n\n• Account documentation (via DocuSign for your convenience)\n• Secure client portal access—review anytime, anywhere\n• Our physician client welcome guide with relevant resources\n• Our Form ADV Part 2 disclosure brochure\n\nOur First Meeting:\n\nI know your schedule is demanding, so I\'ve tentatively blocked [Date/Time] for our initial session. If that doesn\'t work, my calendar link is below—find a time that fits your schedule, including early morning or evening options.\n\nIn our first meeting, we\'ll:\n\n• Review your complete financial picture (income, debt, benefits, insurance)\n• Discuss your priorities—whether that\'s paying down loans, buying a home, or maximizing retirement savings\n• Create an initial roadmap for the year ahead\n\n[PERSONALIZATION: Add 1-2 sentences referencing how you connected and something specific about their situation.]\n\nQuestions before we meet? I\'m always reachable at [phone] or [email]—and I actually respond.\n\nLooking forward to working together.\n\nWarm regards,\n\n[Advisor Name]\n[Title], Horizon Wealth Partners\n[Phone] | [Email]\nSchedule time: [Calendar Link]\n\n---\nHorizon Wealth Partners | Wealth Management for Medical Professionals\n123 Main Street, Suite 400, Anytown, ST 12345\nCompliance inquiries: compliance@horizonwealth.com\nInvestment advisory services offered through Horizon Wealth Partners, a registered investment advisor.',
        issues: [],
        explanation:
          'The final template reflects the firm\'s specific niche (medical professionals), includes realistic personalization examples, and acknowledges clients\' busy schedules. This level of specificity dramatically increases template adoption.',
        highlights: {
          added: [
            'Medical professional-specific language',
            'Personalization examples for common scenarios',
            'Flexible scheduling acknowledgment',
            'Calendar link for self-scheduling',
            'Physician-specific welcome guide reference',
            'Approachable tone ("I actually respond")',
          ],
          improved: ['Niche relevance', 'Practical adoption', 'Template usability'],
        },
        educationalNote:
          'AI can generate professional templates with compliance elements. But only the firm principal knows that Horizon specializes in physicians, that many clients are referrals, and that the firm culture values accessibility. These details make templates that advisors will actually use.',
      },
    ],
  },

  // SCENARIO 10: Compliance Review Assistance
  {
    id: 'compliance-review',
    title: 'Compliance Review Assistance',
    description: 'Pre-screen advisor communications for compliance red flags',
    category: 'analysis',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Sample Advisor Communication',
      portfolio: 'Client newsletter draft',
      situation: 'Quarterly market update written by advisor before compliance review',
      aum: 'N/A',
    },
    learningObjectives: [
      'Learn how AI can identify common compliance issues',
      'See how pre-screening reduces compliance review burden',
      'Understand the difference between AI flagging and compliance judgment',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Simple spell-check level review',
        prompt: 'Review this advisor newsletter for any issues.',
        output:
          'Review Complete:\n\n- No spelling errors found\n- Grammar appears correct\n- Document is 450 words\n\nRecommendation: Approved for distribution.',
        issues: [
          'Completely misses substantive compliance concerns',
          'Focuses only on surface-level issues',
          'False sense of approval',
          'Provides no educational value',
          'Dangerous if used as actual compliance review',
        ],
        explanation:
          'A superficial review that doesn\'t understand regulatory requirements provides no value and could create significant risk.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added compliance framework and specific scanning',
        prompt:
          'Review this advisor newsletter for compliance issues. Scan for: 1) Performance claims without disclaimers, 2) Guarantees or promises of returns, 3) Forward-looking statements, 4) Missing disclosures, 5) Testimonial implications. Flag all potential issues with severity and explanation.\n\nNEWSLETTER TEXT:\n"Dear Clients, I\'m pleased to report our portfolios outperformed the market by 3% this quarter! Our investment strategy will continue delivering strong returns as we\'ve positioned for the upcoming bull market. Client John Smith says we\'re the best advisors he\'s ever worked with. Call me to learn how you can achieve similar results."',
        output:
          'COMPLIANCE PRE-SCREEN REPORT\n\n🔴 HIGH SEVERITY ISSUES:\n\n1. Performance Claim Without Disclaimer\n   Text: "outperformed the market by 3%"\n   Issue: Performance claim requires past performance disclaimer and benchmark definition\n   Suggested fix: Add "Past performance does not guarantee future results" and specify benchmark\n\n2. Guarantee of Future Returns\n   Text: "will continue delivering strong returns"\n   Issue: Implies guaranteed future performance, prohibited under SEC rules\n   Suggested fix: Replace with "is designed to pursue returns" or similar qualified language\n\n3. Market Prediction\n   Text: "positioned for the upcoming bull market"\n   Issue: Forward-looking prediction presented as fact\n   Suggested fix: Remove or add "in our opinion" with disclaimer about forward-looking statements\n\n🟡 MEDIUM SEVERITY ISSUES:\n\n4. Client Testimonial\n   Text: "Client John Smith says we\'re the best advisors"\n   Issue: Testimonials require disclosure under SEC marketing rule; must include required disclosures\n   Suggested fix: Either remove or add required testimonial disclosures per Rule 206(4)-1\n\n5. Promissory Language\n   Text: "how you can achieve similar results"\n   Issue: Implies guaranteed similar outcomes for new clients\n   Suggested fix: Remove or qualify heavily\n\n⚠️ MISSING REQUIRED ELEMENTS:\n- Firm disclosure/footer\n- ADV reference\n- Contact information for compliance\n\nOVERALL: This communication requires significant revision before compliance review.',
        issues: [
          'Good identification of issues',
          'Should note this is pre-screening, not final compliance approval',
          'Could provide more context on rule citations',
        ],
        explanation:
          'Systematic scanning against a compliance framework catches issues that advisors often miss, saving time for everyone.',
        highlights: {
          added: [
            'Severity categorization (high/medium)',
            'Specific text citations',
            'Rule-based issue identification',
            'Suggested fixes for each issue',
            'Missing elements checklist',
          ],
          improved: ['Issue visibility', 'Actionable feedback', 'Educational value'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added proper disclaimers and compliance workflow context',
        prompt:
          'Review this advisor newsletter for compliance issues. Scan for: 1) Performance claims without disclaimers, 2) Guarantees or promises of returns, 3) Forward-looking statements, 4) Missing disclosures, 5) Testimonial implications. Flag all potential issues with severity and explanation.\n\nInclude:\n- Clear statement that this is pre-screening only\n- Final compliance approval still required\n- Relevant rule citations where applicable\n- Educational context for advisor learning\n\nNEWSLETTER TEXT:\n"Dear Clients, I\'m pleased to report our portfolios outperformed the market by 3% this quarter! Our investment strategy will continue delivering strong returns as we\'ve positioned for the upcoming bull market. Client John Smith says we\'re the best advisors he\'s ever worked with. Call me to learn how you can achieve similar results."',
        output:
          '⚠️ AI PRE-SCREEN REPORT - NOT A COMPLIANCE APPROVAL ⚠️\nThis automated review flags potential issues for advisor revision before formal compliance submission. Final approval requires human compliance review.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🔴 HIGH SEVERITY ISSUES (Likely to be rejected):\n\n1. PERFORMANCE CLAIM WITHOUT REQUIRED DISCLAIMER\n   Location: "outperformed the market by 3%"\n   Rule: SEC Rule 206(4)-1(a)(1) - General Prohibitions\n   Issue: Performance claims require standardized presentation and past performance disclaimer\n   Required: "Past performance does not guarantee future results. The S&P 500 returned X% during this period."\n   Learn more: Performance advertising must follow specific formatting requirements per SEC guidance\n\n2. GUARANTEE OF FUTURE RETURNS\n   Location: "will continue delivering strong returns"\n   Rule: SEC Rule 206(4)-1(a)(2) - Material Misstatements\n   Issue: Language implies guaranteed future performance\n   Required: Use qualified language like "seeks to deliver" or "is designed to pursue"\n   Learn more: Any language suggesting certainty about future performance is prohibited\n\n3. UNQUALIFIED MARKET PREDICTION\n   Location: "positioned for the upcoming bull market"\n   Rule: SEC Rule 206(4)-1(a)(2); general anti-fraud provisions\n   Issue: Presents market prediction as fact rather than opinion\n   Required: Either remove or add "In our view..." and forward-looking statement disclaimer\n   Learn more: Predictions must be clearly labeled as opinions with appropriate qualifications\n\n🟡 MEDIUM SEVERITY ISSUES (Requires revision):\n\n4. TESTIMONIAL COMPLIANCE\n   Location: "Client John Smith says we\'re the best advisors"\n   Rule: SEC Rule 206(4)-1(b) - Testimonials and Endorsements\n   Issue: Client testimonials now permitted but require specific disclosures\n   Required: Add disclosures including: whether compensation was provided, material conflicts of interest, and that experience may not be representative\n   Learn more: The 2020 Marketing Rule changed testimonial requirements significantly\n\n5. PROMISSORY LANGUAGE\n   Location: "how you can achieve similar results"\n   Rule: SEC Rule 206(4)-1(a)(1)\n   Issue: Implies new clients will receive same performance\n   Required: Remove or heavily qualify—each client\'s situation is different\n\n📋 MISSING REQUIRED ELEMENTS:\n☐ Past performance disclaimer\n☐ Firm name and contact information\n☐ Offer of Form ADV Part 2\n☐ Forward-looking statement disclaimer (if predictions retained)\n☐ Testimonial disclosures (if testimonial retained)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📊 SUMMARY:\n• High severity issues: 3\n• Medium severity issues: 2\n• Missing elements: 5\n\nRECOMMENDATION: Significant revision required before compliance submission. Address all high-severity issues first.\n\n🔒 NEXT STEP: Revise and resubmit. Once AI pre-screen shows no high-severity issues, submit to compliance for human review and final approval.',
        issues: [
          'Comprehensive and educational',
          'Could add example of properly revised text',
          'Consider linking to firm\'s compliance resources',
        ],
        explanation:
          'The report clearly states its limitations, provides educational context, and positions itself as a tool to help advisors—not replace compliance.',
        highlights: {
          added: [
            'Clear disclaimer about pre-screening limitations',
            'Rule citations for each issue',
            '"Learn more" educational context',
            'Missing elements checklist',
            'Next steps guidance',
          ],
          improved: ['Regulatory accuracy', 'Educational value', 'Workflow integration'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with firm-specific context and revised example',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nFirm notes: This is advisor Mark Johnson\'s third similar violation this quarter. Firm uses Redtail CRM and Orion for reporting. Compliance officer is Jane Williams. Firm recently updated testimonial policy.',
        output:
          '⚠️ AI PRE-SCREEN REPORT - NOT A COMPLIANCE APPROVAL ⚠️\nThis automated review flags potential issues for advisor revision before formal compliance submission. Final approval requires human compliance review by Jane Williams.\n\n👤 ADVISOR PATTERN ALERT:\nThis is the third communication this quarter flagged for performance guarantee language. Consider scheduling a brief training refresher with Mark on compliant performance discussion.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🔴 HIGH SEVERITY ISSUES (Likely to be rejected):\n\n1. PERFORMANCE CLAIM WITHOUT REQUIRED DISCLAIMER\n   Location: "outperformed the market by 3%"\n   Rule: SEC Rule 206(4)-1(a)(1)\n   Issue: Performance claims require disclaimers and benchmark definition\n   Fix: "Past performance does not guarantee future results. The S&P 500 returned X% during this period."\n   Firm resource: See Orion report templates for compliant performance language\n\n2. GUARANTEE OF FUTURE RETURNS\n   Location: "will continue delivering strong returns"\n   Rule: SEC Rule 206(4)-1(a)(2)\n   Issue: Language implies guaranteed future performance (REPEAT ISSUE FOR THIS ADVISOR)\n   Fix: Use "seeks to deliver" or "is designed to pursue"\n   Firm resource: Approved language library in Redtail > Documents > Compliance Templates\n\n3. UNQUALIFIED MARKET PREDICTION\n   Location: "positioned for the upcoming bull market"\n   Fix: Remove or add "In our view..." with forward-looking disclaimer\n\n🟡 MEDIUM SEVERITY ISSUES:\n\n4. TESTIMONIAL COMPLIANCE\n   Location: "Client John Smith says we\'re the best advisors"\n   Issue: Missing required disclosures under firm\'s updated testimonial policy\n   Firm resource: See updated testimonial policy (revised January 2024) in Compliance SharePoint\n   Required disclosures: Compensation status, conflicts, typicality statement\n   Note: Ensure client has signed testimonial release form\n\n5. PROMISSORY LANGUAGE\n   Location: "how you can achieve similar results"\n   Fix: Remove entirely—each client\'s situation and results will differ\n\n📋 MISSING REQUIRED ELEMENTS:\n☐ Past performance disclaimer\n☐ Firm footer (use standard from Redtail templates)\n☐ Testimonial disclosures per January 2024 policy\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n✏️ EXAMPLE REVISION:\n\nOriginal: "I\'m pleased to report our portfolios outperformed the market by 3% this quarter!"\n\nCompliant: "I\'m pleased to share that many client portfolios performed well this quarter. For your specific performance, please review your Orion portal or contact me directly. Past performance does not guarantee future results."\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🔒 NEXT STEPS:\n1. Revise using approved language from Redtail templates\n2. Re-run AI pre-screen after revision\n3. Submit to Jane Williams for final compliance approval\n4. Log in Redtail under client communication record\n\n📞 Questions? Contact compliance@firm.com or schedule time with Jane.',
        issues: [],
        explanation:
          'The final version includes firm-specific context: the advisor\'s pattern of issues, references to firm systems (Redtail, Orion), the compliance officer\'s name, and the recent policy update. This makes the tool feel integrated with firm operations.',
        highlights: {
          added: [
            'Advisor pattern alert noting repeat issues',
            'References to firm systems (Redtail, Orion)',
            'Compliance officer name',
            'Firm resource links',
            'Example of compliant revision',
            'Updated testimonial policy reference',
          ],
          improved: ['Firm integration', 'Actionable guidance', 'Pattern recognition'],
        },
        educationalNote:
          'AI can systematically scan for compliance issues, but only the firm principal knows about Mark\'s pattern of violations, the recent policy update, and which systems the firm uses. This context transforms a generic scan into an integrated compliance workflow.',
      },
    ],
  },

  // SCENARIO 11: Onboarding New Advisors
  {
    id: 'advisor-onboarding',
    title: 'New Advisor Onboarding Support',
    description: 'Accelerate new advisor training with AI-powered knowledge access',
    category: 'planning',
    difficulty: 'beginner',
    clientProfile: {
      name: 'New Advisor Question',
      portfolio: 'Training scenario',
      situation: 'New advisor in first month asking about firm processes',
      aum: 'N/A',
    },
    learningObjectives: [
      'See how AI provides instant access to firm knowledge',
      'Learn how to structure knowledge bases for new advisors',
      'Understand the balance between AI answers and mentor guidance',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Generic answer without firm context',
        prompt: 'A new advisor asks: "How do I handle a client who wants to invest in cryptocurrency?"',
        output:
          'Cryptocurrency is a volatile asset class. You should discuss the risks with your client and ensure they understand the potential for significant losses. Make sure any investment aligns with their risk tolerance and investment objectives.',
        issues: [
          'No reference to firm policy on crypto',
          'Doesn\'t explain the approval process',
          'Missing compliance requirements',
          'No guidance on who to escalate to',
          'Generic advice that could apply anywhere',
        ],
        explanation:
          'Without firm-specific context, new advisors get generic answers that may conflict with actual firm policies and procedures.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added firm policies and process guidance',
        prompt:
          'A new advisor at Meridian Wealth asks: "How do I handle a client who wants to invest in cryptocurrency?" Provide an answer that includes: 1) Firm policy on crypto, 2) Approved approaches, 3) Required documentation, 4) Who to consult. Use firm knowledge base context.',
        output:
          'Great question! Here\'s how Meridian Wealth handles cryptocurrency requests:\n\n📋 FIRM POLICY:\nMeridian Wealth permits cryptocurrency exposure up to 5% of a client\'s liquid investable assets, subject to the following conditions:\n\n✅ APPROVED APPROACHES:\n• Grayscale Bitcoin Trust (GBTC) - approved\n• Grayscale Ethereum Trust (ETHE) - approved\n• Spot Bitcoin ETFs (IBIT, FBTC, BITB) - approved as of January 2024\n• Direct crypto custody - NOT approved (regulatory complexity)\n\n📝 REQUIRED DOCUMENTATION:\n1. Crypto Risk Acknowledgment Form (in Redtail > Forms > Alternative Investments)\n2. Updated Investment Policy Statement reflecting crypto allocation\n3. Suitability documentation in CRM notes\n\n🔄 PROCESS:\n1. Assess client suitability (high risk tolerance, long time horizon)\n2. Have client sign Crypto Risk Acknowledgment\n3. Update IPS to include crypto allocation\n4. Execute trade through normal channels (approved products only)\n5. Document rationale in Redtail client notes\n\n👤 QUESTIONS? ESCALATE TO:\n• General policy questions: Your mentor or team lead\n• Specific suitability concerns: Chief Compliance Officer (Jane Williams)\n• Complex client situations: Investment Committee\n\n📚 RELATED RESOURCES:\n• Alternative Investments Policy (Compliance SharePoint > Policies)\n• Client Suitability Questionnaire (Redtail > Forms)\n• Recent crypto webinar recording (Training Library)',
        issues: [
          'Good structure, but should remind this is guidance, not advice',
          'Could add example of how to discuss with client',
          'Should note when to involve mentor',
        ],
        explanation:
          'Firm-specific answers with policy references, approved products, and escalation paths give new advisors actionable guidance.',
        highlights: {
          added: [
            'Specific firm policy (5% max allocation)',
            'Approved vs. not approved products',
            'Required documentation list',
            'Step-by-step process',
            'Escalation contacts by issue type',
            'Links to related resources',
          ],
          improved: ['Actionability', 'Firm integration', 'New advisor confidence'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added appropriate caveats and learning guidance',
        prompt:
          'A new advisor at Meridian Wealth asks: "How do I handle a client who wants to invest in cryptocurrency?" Provide an answer that includes: 1) Firm policy on crypto, 2) Approved approaches, 3) Required documentation, 4) Who to consult. Use firm knowledge base context.\n\nInclude:\n- Reminder to verify with mentor for first few cases\n- Note about policy update frequency\n- Learning opportunity framing',
        output:
          '💡 NEW ADVISOR TIP: For your first 2-3 crypto discussions, loop in your mentor before the client conversation. This is a nuanced topic and a great learning opportunity!\n\nGreat question! Here\'s how Meridian Wealth handles cryptocurrency requests:\n\n📋 FIRM POLICY (Last updated: January 2024):\nMeridian Wealth permits cryptocurrency exposure up to 5% of a client\'s liquid investable assets, subject to specific conditions. Note: This policy is reviewed quarterly given the evolving regulatory landscape.\n\n✅ APPROVED APPROACHES:\n• Grayscale Bitcoin Trust (GBTC) - approved\n• Grayscale Ethereum Trust (ETHE) - approved\n• Spot Bitcoin ETFs (IBIT, FBTC, BITB) - approved as of January 2024\n• Direct crypto custody - NOT approved (regulatory complexity)\n\n⚠️ IMPORTANT: Always verify you\'re using current approved product list. Check Compliance SharePoint for latest version.\n\n📝 REQUIRED DOCUMENTATION:\n1. Crypto Risk Acknowledgment Form (Redtail > Forms > Alternative Investments)\n2. Updated Investment Policy Statement reflecting crypto allocation\n3. Suitability documentation in CRM notes\n\n🔄 PROCESS:\n1. Assess client suitability (high risk tolerance, long time horizon, understand volatility)\n2. Have client sign Crypto Risk Acknowledgment\n3. Update IPS to include crypto allocation\n4. Execute trade through normal channels\n5. Document rationale in Redtail\n\n💬 CONVERSATION FRAMEWORK:\nWhen discussing with clients, cover:\n• Volatility reality (60%+ drawdowns have occurred)\n• Regulatory uncertainty\n• Role in overall portfolio (speculation vs. allocation)\n• Why we limit to 5% maximum\n\n👤 ESCALATION:\n• First few cases: Loop in your mentor\n• Suitability concerns: Jane Williams (CCO)\n• Complex situations: Investment Committee\n• Client pushing for >5% or direct custody: Firm answer is no—escalate if they persist\n\n📚 LEARN MORE:\n• Alternative Investments Policy (Compliance SharePoint)\n• Crypto Client Conversation Guide (Training Library)\n• Recording: "Navigating Crypto Conversations" webinar (January 2024)\n\n✅ You\'re asking the right questions—this is exactly how to use this resource!',
        issues: [
          'Comprehensive guidance with appropriate caveats',
          'Could add example client scenarios',
          'Consider linking to mentor scheduling',
        ],
        explanation:
          'Adding mentor involvement recommendations and learning framing helps new advisors build skills while avoiding mistakes.',
        highlights: {
          added: [
            'New advisor tip at top',
            'Policy update date and review frequency',
            'Verification reminder',
            'Conversation framework',
            'Encouragement for asking questions',
          ],
          improved: ['Learning orientation', 'Safety guardrails', 'Mentor integration'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with personalized context',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nAdvisor context: This is Sarah Chen, started two weeks ago, came from a wirehouse where crypto was fully prohibited. Her mentor is Michael Torres. She\'s been doing great with client communication but this is her first alternative investment question.',
        output:
          '👋 Hi Sarah! Great question—and I can see why this might feel unfamiliar coming from your wirehouse background where crypto was probably off the table entirely.\n\n💡 FIRST-TIME TIP: Since this is your first alternative investment question, definitely sync with Michael before the client conversation. He\'s handled several of these and can share what works. I\'ve included his calendar link below.\n\nHere\'s how Meridian handles cryptocurrency requests:\n\n📋 FIRM POLICY (Last updated: January 2024):\nUnlike your previous firm, Meridian permits cryptocurrency exposure—but with guardrails. Maximum 5% of liquid investable assets, approved products only. Policy reviewed quarterly.\n\n✅ APPROVED APPROACHES:\n• Grayscale Bitcoin Trust (GBTC)\n• Grayscale Ethereum Trust (ETHE)\n• Spot Bitcoin ETFs (IBIT, FBTC, BITB) - new as of January 2024\n• Direct crypto custody - NOT approved\n\n⚠️ Always verify current approved list in Compliance SharePoint before trading.\n\n📝 REQUIRED DOCUMENTATION:\n1. Crypto Risk Acknowledgment Form (Redtail > Forms > Alternative Investments)\n2. Updated IPS reflecting crypto allocation\n3. Suitability documentation in CRM\n\n💬 CONVERSATION FRAMEWORK:\n(Michael is great at these conversations—ask him to walk through his approach)\n• Volatility reality: 60%+ drawdowns have occurred\n• Regulatory uncertainty\n• Position sizing: Why 5% max protects the relationship\n• Speculation vs. strategic allocation\n\n📅 NEXT STEP:\nSchedule 15 minutes with Michael before your client meeting: [Michael\'s Calendar Link]\n\nHe mentioned in your last 1:1 that he wants to help you with alternative investment discussions, so this is perfect timing.\n\n👤 IF CLIENT PUSHES BACK:\n• Wants >5%: Firm policy is firm—explain why\n• Wants direct custody: Not available at Meridian\n• Gets frustrated: Loop in Michael or escalate to Jane Williams (CCO)\n\n📚 RESOURCES:\n• Alternative Investments Policy (Compliance SharePoint)\n• Crypto Conversation Guide (Training Library)\n• "Navigating Crypto Conversations" webinar recording\n\n✅ You\'re doing great, Sarah! Two weeks in and already asking the right questions. That client communication feedback from your first week was excellent—you\'ve got the foundation, now we\'re just adding tools.',
        issues: [],
        explanation:
          'The personalized response acknowledges Sarah\'s background, connects her to her specific mentor, references her recent positive feedback, and provides exactly the right level of guidance for someone two weeks in.',
        highlights: {
          added: [
            'Acknowledgment of wirehouse background',
            'Mentor name and calendar link',
            'Reference to recent 1:1 discussion',
            'Encouragement based on actual feedback',
            'Personalized to first alternative investment question',
          ],
          improved: ['Personal connection', 'Mentor integration', 'Confidence building'],
        },
        educationalNote:
          'AI can provide instant access to firm policies and procedures. But only the system with advisor context knows Sarah came from a wirehouse, Michael is her mentor, and she got positive feedback on client communication. This personalization makes new advisors feel supported, not just informed.',
      },
    ],
  },

  // SCENARIO 12: Practice Management Insights
  {
    id: 'practice-insights',
    title: 'Practice Management Insights',
    description: 'Analyze firm-wide data to identify opportunities and risks',
    category: 'analysis',
    difficulty: 'advanced',
    clientProfile: {
      name: 'Summit Advisory Group',
      portfolio: 'RIA firm monthly health report',
      situation: 'Growing firm seeking proactive insights into advisor performance and client health',
      aum: '$1.2B across 8 advisors',
    },
    learningObjectives: [
      'See how AI identifies patterns across firm data',
      'Learn to prioritize insights by impact and urgency',
      'Understand the balance between metrics and management judgment',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Basic metrics without insight',
        prompt: 'Generate a monthly practice report for Summit Advisory Group.',
        output:
          'Summit Advisory Group - Monthly Report\n\nTotal AUM: $1.2B\nClients: 412\nAdvisors: 8\n\nNew clients: 6\nLost clients: 2\nNet new assets: $14M\n\nMeetings held: 187\nEmails sent: 2,340',
        issues: [
          'Just numbers without context or comparison',
          'No insight into what the data means',
          'Doesn\'t identify trends or concerns',
          'No actionable recommendations',
          'Treats all metrics equally',
        ],
        explanation:
          'Raw data dumps require manual analysis to be useful. Principals need insights, not just metrics.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added trend analysis and comparisons',
        prompt:
          'Generate a monthly practice insights report for Summit Advisory Group ($1.2B AUM, 8 advisors, 412 clients). Include: 1) Key metrics with trend indicators, 2) Variance from benchmarks, 3) Patterns worth attention, 4) Advisor-level highlights. Make insights actionable.',
        output:
          'SUMMIT ADVISORY GROUP - PRACTICE INSIGHTS\nNovember 2024 | Prepared for Leadership Team\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 EXECUTIVE SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nOverall firm health: STRONG with emerging concerns\n\n🟢 Strengths:\n• Net new assets: $14M (↑ 23% vs. 3-month average)\n• Client retention: 99.5% (above 98% industry benchmark)\n• Revenue per advisor: $312K (↑ 8% YoY)\n\n🟡 Attention Areas:\n• Client meeting frequency: ↓ 12% from Q2 average\n• Response time to client emails: ↑ 18% (now 4.2 hours avg)\n• New client onboarding completion: 67% on-time (target: 90%)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📈 KEY METRICS DETAIL\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nGROWTH:\n• New clients: 6 (vs. 4 avg) ✅\n• Lost clients: 2 (vs. 3 avg) ✅\n• Net asset flows: +$14M ✅\n\nCLIENT ENGAGEMENT:\n• Total meetings: 187 (↓ 8% MoM) ⚠️\n• Avg meetings per client: 0.45 (target: 0.5) ⚠️\n• Email response time: 4.2 hrs (was 3.5 hrs) ⚠️\n\nADVISOR PRODUCTIVITY:\n• Clients per advisor: 51.5 (optimal: 50-75) ✅\n• AUM per advisor: $150M (above $100M benchmark) ✅\n• Meeting hours per week: 12.3 (target: 15) ⚠️\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n👥 ADVISOR SPOTLIGHT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🌟 Top Performer: Sarah Martinez\n• Net new assets: $4.2M (30% of firm total)\n• Client meeting frequency: 2.1 per client (highest on team)\n• Email response: 2.1 hours average\n\n⚠️ Needs Attention: Tom Richards\n• Meeting frequency: ↓ 35% from his Q2 average\n• Email response time: 8.4 hours (double firm average)\n• No new client meetings in 3 weeks\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 RECOMMENDED ACTIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n1. Schedule 1:1 with Tom Richards - engagement metrics suggest burnout or personal issue\n2. Review onboarding process - completion rate below target\n3. Celebrate Sarah\'s success - share best practices with team',
        issues: [
          'Good insights, but should clarify data sources',
          'Tom Richards situation needs sensitive handling guidance',
          'Could add client-level risk indicators',
        ],
        explanation:
          'Trend analysis and comparisons transform data into actionable insights that drive management decisions.',
        highlights: {
          added: [
            'Executive summary with health indicator',
            'Trend arrows and benchmark comparisons',
            'Advisor-level performance highlights',
            'Specific recommended actions',
            'Color-coded severity indicators',
          ],
          improved: ['Pattern recognition', 'Actionability', 'Management focus'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added appropriate caveats and sensitive handling guidance',
        prompt:
          'Generate a monthly practice insights report for Summit Advisory Group ($1.2B AUM, 8 advisors, 412 clients). Include: 1) Key metrics with trend indicators, 2) Variance from benchmarks, 3) Patterns worth attention, 4) Advisor-level highlights. Make insights actionable.\n\nInclude:\n- Data source and confidence indicators\n- Guidance for sensitive personnel discussions\n- Reminder that metrics need context\n- Client risk indicators',
        output:
          'SUMMIT ADVISORY GROUP - PRACTICE INSIGHTS\nNovember 2024 | Prepared for Leadership Team\n\n📋 DATA SOURCES: Redtail CRM, Orion, Outlook (last sync: Nov 30)\n⚠️ INTERPRETATION NOTE: Metrics provide signals, not conclusions. Always gather context before acting on personnel or client insights.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 EXECUTIVE SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nOverall firm health: STRONG with emerging concerns\n\n🟢 Strengths:\n• Net new assets: $14M (↑ 23% vs. 3-month average)\n• Client retention: 99.5% (above 98% industry benchmark)\n• Revenue per advisor: $312K (↑ 8% YoY)\n\n🟡 Attention Areas:\n• Client meeting frequency declining\n• Email response times increasing\n• Onboarding completion below target\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚨 CLIENT RISK INDICATORS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHigh-Value Clients Showing Engagement Drop:\n• Henderson Family ($4.2M) - No contact in 67 days (typically monthly)\n• Patel Trust ($2.8M) - Declined last 2 meeting requests\n• Morrison Account ($1.9M) - Opened competing brokerage account*\n\n*Detected via aggregation feed - may have innocent explanation\n\nRecommendation: Prioritize outreach to these relationships this week.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n👥 ADVISOR INSIGHTS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🌟 Highlight: Sarah Martinez\n• Leading the team in new asset acquisition\n• Client engagement metrics consistently strong\n• Consider: Share her client communication approach with team\n\n⚠️ Attention Needed: Tom Richards\nMetrics showing decline vs. his historical average:\n• Meeting frequency: ↓ 35%\n• Email response: 2x firm average\n• No prospecting activity in 3 weeks\n\n🔒 SENSITIVE: These metrics may indicate burnout, personal issues, or job dissatisfaction. Approach with curiosity, not judgment.\n\nSuggested approach:\n• Schedule casual 1:1 (not performance review)\n• Ask open-ended questions about workload and wellbeing\n• Listen before drawing conclusions\n• Metrics are a signal to check in, not evidence of a problem\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 RECOMMENDED ACTIONS (Prioritized)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n1. 🔴 URGENT: Reach out to at-risk high-value clients\n2. 🟡 THIS WEEK: Check in with Tom Richards\n3. 🟢 THIS MONTH: Review onboarding process bottlenecks\n4. 🟢 THIS MONTH: Team meeting on client engagement best practices',
        issues: [
          'Strong sensitivity guidance included',
          'Could add industry context for benchmarks',
          'Consider seasonal adjustment notes',
        ],
        explanation:
          'Adding appropriate caveats prevents metrics from being misused in personnel decisions while still providing valuable signals.',
        highlights: {
          added: [
            'Data sources and sync timestamp',
            'Interpretation warning',
            'Client risk indicators section',
            'Sensitive handling guidance for personnel',
            'Prioritized action list',
          ],
          improved: ['Data confidence', 'Ethical use guidance', 'Risk identification'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with firm-specific context',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nFirm notes: Tom\'s wife had a baby 6 weeks ago. Henderson family\'s patriarch passed away 2 months ago. Sarah is being recruited by a competitor. Firm is considering opening a second office.',
        output:
          'SUMMIT ADVISORY GROUP - PRACTICE INSIGHTS\nNovember 2024 | Prepared for Leadership Team\n\n📋 DATA SOURCES: Redtail CRM, Orion, Outlook (last sync: Nov 30)\n⚠️ INTERPRETATION NOTE: Metrics provide signals, not conclusions. Context below incorporates known factors.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 EXECUTIVE SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nOverall firm health: STRONG with strategic considerations\n\n🟢 Strengths:\n• Net new assets: $14M (↑ 23% vs. 3-month average)\n• Client retention: 99.5%\n• Revenue per advisor: $312K (↑ 8% YoY) - supports second office exploration\n\n🟡 Strategic Focus:\n• Retention risk: Sarah Martinez (top producer) being recruited\n• Client transition: Henderson family navigating estate settlement\n• Capacity planning: Metrics support expansion discussion\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚨 CLIENT RELATIONSHIP ALERTS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🔵 Henderson Family ($4.2M) - CONTEXT KNOWN\nNo contact in 67 days following patriarch\'s passing.\nStatus: Expected during estate settlement period\nAction: Schedule gentle check-in for January; offer estate planning resources when appropriate\n\n🟡 Patel Trust ($2.8M) - INVESTIGATE\nDeclined last 2 meeting requests - no known context\nAction: Advisor should reach out personally this week\n\n🟡 Morrison Account ($1.9M) - INVESTIGATE\nOpened competing brokerage account per aggregation feed\nAction: May be diversifying or receiving inheritance; check in casually\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n👥 ADVISOR INSIGHTS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🚨 STRATEGIC PRIORITY: Sarah Martinez\nPerformance: Exceptional—30% of new assets, best engagement metrics\nRisk: Actively being recruited by competitor\nAction: Proactive retention conversation needed NOW\nConsider: Equity opportunity, expanded role, compensation review, or involvement in second office planning\n\n✅ CONTEXT KNOWN: Tom Richards\nMetrics: Engagement down 35%, response times doubled\nContext: Wife had baby 6 weeks ago—temporary adjustment expected\nAction: Check in on work-life balance; offer temporary load reduction if needed\nNote: His pre-paternity metrics were excellent—this is likely transitional\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📈 SECOND OFFICE ANALYSIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nCurrent metrics supporting expansion:\n• Revenue per advisor: $312K (sustainable at scale)\n• AUM per advisor: $150M (capacity exists)\n• Net new assets: Positive trend supports growth thesis\n\nRisks to consider:\n• Losing Sarah would significantly impact growth story\n• Tom\'s transition adds near-term capacity constraint\n• Two other advisors approaching optimal client load\n\nRecommendation: Sarah retention is prerequisite to expansion timing\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 RECOMMENDED ACTIONS (Priority Order)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n1. 🔴 IMMEDIATE: Sarah Martinez retention conversation\n2. 🟡 THIS WEEK: Supportive check-in with Tom on new-parent transition\n3. 🟡 THIS WEEK: Personal outreach to Patel and Morrison accounts\n4. 🟢 JANUARY: Henderson family check-in (after holiday estate activities settle)\n5. 🟢 THIS MONTH: Second office decision depends on Sarah outcome',
        issues: [],
        explanation:
          'The final version incorporates critical context that completely changes how the data should be interpreted: Tom\'s new baby explains his metrics, Henderson\'s engagement drop is expected grief, and Sarah\'s recruitment risk makes her success a retention concern, not just a celebration. This context is essential for good management decisions.',
        highlights: {
          added: [
            'Known context integrated into each insight',
            'Tom\'s paternity leave context',
            'Henderson family bereavement context',
            'Sarah recruitment risk flagged as strategic priority',
            'Second office analysis tied to current dynamics',
            'Reframed recommendations based on context',
          ],
          improved: ['Contextual accuracy', 'Strategic relevance', 'Human-centered interpretation'],
        },
        educationalNote:
          'AI can identify patterns in data, but only leadership knows that Tom just had a baby, the Henderson patriarch passed away, and Sarah is being recruited. Without this context, metrics could drive exactly wrong conclusions. AI surfaces signals; humans provide meaning.',
      },
    ],
  },

  // SCENARIO 13: Client Segmentation Strategies
  {
    id: 'client-segmentation',
    title: 'Client Segmentation Strategies',
    description: 'Identify meaningful client segments for service model design',
    category: 'analysis',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Clearview Financial',
      portfolio: 'RIA firm segmentation analysis',
      situation: 'Firm seeking to move beyond AUM tiers to behavior-based segments',
      aum: '$650M across 320 households',
    },
    learningObjectives: [
      'See how AI identifies natural client clusters beyond AUM',
      'Learn to translate segments into service models',
      'Understand the role of business context in segmentation',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Simple AUM-based tiering',
        prompt: 'Create client segments for our RIA firm.',
        output:
          'Client Segmentation:\n\nTier 1: $1M+ AUM (Premium)\nTier 2: $500K-$1M AUM (Standard)\nTier 3: Under $500K AUM (Basic)\n\nService levels:\n- Tier 1: Quarterly meetings\n- Tier 2: Semi-annual meetings\n- Tier 3: Annual meetings',
        issues: [
          'Just repackages AUM into tiers',
          'Ignores behavioral and needs differences',
          'Doesn\'t identify profitable opportunities',
          'Treats all $1M+ clients the same',
          'No insight into what makes segments different',
        ],
        explanation:
          'AUM-only segmentation misses the complexity of client needs and behavior that drives both satisfaction and profitability.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Multi-dimensional analysis identifying natural clusters',
        prompt:
          'Analyze Clearview Financial\'s client base (320 households, $650M AUM) across multiple dimensions: AUM, revenue, meeting frequency, planning complexity, referral activity, and tenure. Identify 4-5 natural segments with distinct characteristics and service needs.',
        output:
          'CLEARVIEW FINANCIAL - CLIENT SEGMENTATION ANALYSIS\n\n📊 METHODOLOGY:\nClustering analysis across 6 dimensions: AUM, revenue/AUM ratio, meeting frequency, planning complexity score, referral activity, and client tenure. Identified 5 natural segments.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🔷 SEGMENT 1: "Delegators" (68 households, $285M AUM)\nCharacteristics:\n• High AUM ($2-8M), high revenue clients\n• Low meeting frequency (1-2 per year)\n• Minimal engagement between meetings\n• Strong trust, prefer advisor to handle everything\n• Low planning complexity needs\n\nService implication: Don\'t over-service; they value efficiency over attention\n\n🔷 SEGMENT 2: "Engagers" (52 households, $180M AUM)\nCharacteristics:\n• Upper mass affluent to HNW ($800K-$3M)\n• High meeting frequency (4+ per year)\n• Frequent questions and check-ins\n• Complex planning needs (estate, tax, multi-goal)\n• High referral activity\n\nService implication: Investment in relationship pays off through referrals\n\n🔷 SEGMENT 3: "Builders" (85 households, $95M AUM)\nCharacteristics:\n• Younger, accumulation phase ($300K-$800K)\n• Growing income, regular contributions\n• Moderate engagement\n• Future HNW trajectory\n• Low current revenue, high lifetime value\n\nService implication: Invest now for future relationship value\n\n🔷 SEGMENT 4: "Retirees" (78 households, $75M AUM)\nCharacteristics:\n• Decumulation phase ($200K-$600K)\n• Regular, predictable service needs\n• Income-focused concerns\n• Lower complexity planning\n• Long tenure, low attrition\n\nService implication: Efficient, systematized service model\n\n🔷 SEGMENT 5: "Legacy Clients" (37 households, $15M AUM)\nCharacteristics:\n• Sub-optimal economics (<$250K AUM)\n• Long tenure (original clients, inherited relationships)\n• Low engagement, low growth\n• Emotional attachment to relationship\n\nService implication: Strategic decision needed on service level or transition\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📈 KEY INSIGHT:\n21% of clients (Segment 2: Engagers) generate 48% of referrals. Current service model under-invests in this group relative to their value.',
        issues: [
          'Strong segmentation, but needs service model recommendations',
          'Should quantify economics of each segment',
          'Legacy client handling needs sensitivity',
        ],
        explanation:
          'Multi-dimensional clustering reveals segments invisible to AUM-only analysis, particularly the high-value "Engagers" segment.',
        highlights: {
          added: [
            'Five distinct behavioral segments',
            'Characteristics based on multiple dimensions',
            'Service implications for each segment',
            'Referral value identification',
            'Lifetime value consideration for Builders',
          ],
          improved: ['Beyond-AUM segmentation', 'Actionable insights', 'Strategic clarity'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added economics and service model framework',
        prompt:
          'Analyze Clearview Financial\'s client base (320 households, $650M AUM) across multiple dimensions. Identify 4-5 natural segments with distinct characteristics and service needs.\n\nInclude:\n- Revenue and profitability metrics per segment\n- Recommended service model for each\n- Investment required vs. value delivered\n- Sensitive handling for legacy client decisions',
        output:
          'CLEARVIEW FINANCIAL - CLIENT SEGMENTATION ANALYSIS\nStrategic Planning Document | Confidential\n\n📊 METHODOLOGY:\nClustering analysis across AUM, revenue, engagement, complexity, referrals, and tenure.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📈 SEGMENT ECONOMICS SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n| Segment     | HHs | AUM    | Revenue | Rev/HH | Margin |\n|-------------|-----|--------|---------|--------|--------|\n| Delegators  | 68  | $285M  | $1.42M  | $20.9K | 65%    |\n| Engagers    | 52  | $180M  | $990K   | $19.0K | 45%    |\n| Builders    | 85  | $95M   | $570K   | $6.7K  | 35%    |\n| Retirees    | 78  | $75M   | $450K   | $5.8K  | 50%    |\n| Legacy      | 37  | $15M   | $90K    | $2.4K  | 15%    |\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔷 SEGMENT 1: DELEGATORS (68 HH, 44% of revenue)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nProfile: High-trust, low-touch HNW clients\nNeeds: Competence, efficiency, don\'t waste their time\n\nRECOMMENDED SERVICE MODEL:\n• 2 proactive touchpoints per year (review + planning)\n• On-demand availability for major decisions\n• Concise, executive-style communications\n• Proactive tax and estate coordination\n\nService investment: LOW | Value delivery: HIGH | Margin: PROTECT\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔷 SEGMENT 2: ENGAGERS (52 HH, 28% of revenue, 48% of referrals)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nProfile: Relationship-oriented, complex needs, referral engines\nNeeds: Attention, comprehensive planning, feeling prioritized\n\nRECOMMENDED SERVICE MODEL:\n• Quarterly reviews + ad-hoc availability\n• Comprehensive financial planning relationship\n• Proactive life event check-ins\n• Referral program with recognition\n• Priority response times\n\nService investment: HIGH | Value delivery: HIGH | Margin: INVEST TO GROW\n⚠️ This segment is UNDER-SERVED relative to value. Referral economics justify increased investment.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔷 SEGMENT 3: BUILDERS (85 HH, 16% of revenue)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nProfile: Younger professionals, accumulation phase, future HNW\nNeeds: Guidance, education, growing with them\n\nRECOMMENDED SERVICE MODEL:\n• Semi-annual reviews with planning focus\n• Digital-first engagement options\n• Systematic saving and investment automation\n• Career milestone planning (equity comp, home purchase)\n\nService investment: MODERATE | Value delivery: FUTURE | Margin: INVEST FOR LIFETIME VALUE\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔷 SEGMENT 4: RETIREES (78 HH, 13% of revenue)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nProfile: Stable, predictable needs, income-focused\nNeeds: Security, consistency, income reliability\n\nRECOMMENDED SERVICE MODEL:\n• Annual comprehensive review\n• Quarterly income/portfolio reports (automated)\n• Social Security/Medicare/RMD planning support\n• Systematized service with personal touch\n\nService investment: LOW-MODERATE | Value delivery: STEADY | Margin: OPTIMIZE\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔷 SEGMENT 5: LEGACY CLIENTS (37 HH, 2.5% of revenue)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nProfile: Long-tenured, sub-scale relationships\nEconomics: $2.4K revenue/HH, 15% margin, consuming disproportionate resources\n\n⚠️ SENSITIVE DECISION REQUIRED:\nOptions for leadership consideration:\n\n1. GRANDFATHER: Maintain current service, accept lower margins\n   • Preserves relationships, no disruption\n   • Cost: ~$50K annually in margin drag\n\n2. RIGHT-SIZE: Reduce service level with clear communication\n   • Move to systematized, digital-first service\n   • Risk: Some attrition, reputation concern\n\n3. TRANSITION: Thoughtfully transition to another advisor/firm\n   • Partner with junior advisor or digital platform\n   • Maintain relationship as referral source\n   • Risk: Must be handled with extreme care\n\nNote: This segment often includes founding clients and referral sources. Decisions should weigh relationship history, not just economics.',
        issues: [
          'Comprehensive analysis with sensitivity',
          'Could add implementation timeline',
          'Consider pilot program recommendation',
        ],
        explanation:
          'Adding economics and specific service recommendations transforms analysis into actionable strategy, while treating legacy clients with appropriate care.',
        highlights: {
          added: [
            'Segment economics table',
            'Revenue and margin analysis',
            'Specific service model per segment',
            'Investment vs. value framework',
            'Sensitive options for legacy clients',
          ],
          improved: ['Profitability focus', 'Actionable recommendations', 'Ethical consideration'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with firm-specific strategic context',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nFirm notes: Firm founder is retiring next year and two of the legacy clients are his personal friends. One Engager family (the Hendersons, $2.8M) recently referred 3 new clients. Firm is considering launching a young professionals program.',
        output:
          'CLEARVIEW FINANCIAL - CLIENT SEGMENTATION ANALYSIS\nStrategic Planning Document | Confidential\nPrepared for Leadership Transition Planning\n\n📋 STRATEGIC CONTEXT:\n• Founder transition in 12 months\n• Legacy client decisions intersect with founder retirement\n• Young professionals program under consideration\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📈 SEGMENT ECONOMICS SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n| Segment     | HHs | AUM    | Revenue | Margin | Strategic Priority |\n|-------------|-----|--------|---------|--------|-------------------|\n| Delegators  | 68  | $285M  | $1.42M  | 65%    | Protect           |\n| Engagers    | 52  | $180M  | $990K   | 45%    | Invest & Grow     |\n| Builders    | 85  | $95M   | $570K   | 35%    | Develop (Program) |\n| Retirees    | 78  | $75M   | $450K   | 50%    | Optimize          |\n| Legacy      | 37  | $15M   | $90K    | 15%    | Transition Plan   |\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🌟 STRATEGIC HIGHLIGHT: ENGAGERS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n⭐ CASE STUDY: The Henderson Family ($2.8M)\nRecent activity: Referred 3 new clients in past 90 days\nReferral value: Estimated $4.2M in new AUM pipeline\n\nThis single household demonstrates Engager economics:\n• Direct revenue: $19K/year\n• Referral value: $4.2M AUM = ~$35K additional annual revenue\n• Total relationship value: 3x direct revenue\n\nRECOMMENDATION: Formal recognition for the Hendersons; model for Engager investment thesis.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚀 BUILDERS: YOUNG PROFESSIONALS PROGRAM\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nThe Builders segment (85 HH, $95M) is ideal pilot for young professionals program:\n\nProfile match:\n• Average age: 34\n• Average income: $185K (growing ~8% annually)\n• Common needs: Equity comp, home purchase, family planning\n• Tech-comfortable, values efficiency\n\nProgram recommendation:\n• Digital-first platform with advisor escalation\n• Cohort-based financial education events\n• Systematized planning milestones\n• Preferential pricing with graduation to full service\n\nEconomics: Current $6.7K/HH revenue; project $15K/HH at maturity (5-7 years)\nThis segment could represent $2M+ annual revenue at maturity.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚠️ LEGACY CLIENTS: FOUNDER TRANSITION PLAN\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🔒 CONFIDENTIAL: Founder relationships require special handling\n\nOf the 37 Legacy households:\n• 2 are personal friends of the founder (identified)\n• 8 are original firm clients (founding relationships)\n• 27 are inherited or sub-scale relationships\n\nRECOMMENDED APPROACH:\n\n1. FOUNDER\'S PERSONAL RELATIONSHIPS (2 HH):\n   • Founder continues to serve personally through transition\n   • After retirement: Founder\'s choice—maintain friendship relationship or transition\n   • Firm provides "founder emeritus" arrangement if desired\n   • No economic optimization; this is relationship preservation\n\n2. FOUNDING CLIENTS (8 HH):\n   • Personal outreach from founder introducing successor\n   • Maintain current service level through transition\n   • Reassess in 18 months post-transition\n   • These relationships have reputational value beyond economics\n\n3. OTHER LEGACY CLIENTS (27 HH):\n   • Transition to systematized service model\n   • Communicate with care and grandfather for 12 months\n   • Offer transition support if they choose to leave\n   • Target: 50% margin improvement through efficiency\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 IMPLEMENTATION PRIORITIES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nQ1: \n• Launch Engager recognition program (Henderson as first honoree)\n• Design Young Professionals pilot program\n• Founder begins legacy client transition conversations\n\nQ2-Q3:\n• Pilot Young Professionals program with 20 Builders\n• Implement Engager investment model\n• Complete legacy client transition planning\n\nQ4:\n• Full program launches\n• Founder transition with relationship handoffs\n• Measure and refine segment economics',
        issues: [],
        explanation:
          'The final analysis integrates critical strategic context: the founder\'s retirement timeline, his personal relationships within the legacy segment, the Henderson referral success story, and the young professionals program consideration. This transforms data analysis into succession-aware strategic planning.',
        highlights: {
          added: [
            'Founder transition context throughout',
            'Henderson family case study with referral value',
            'Young professionals program connection to Builders',
            'Three-tier legacy client approach respecting founder relationships',
            'Implementation timeline aligned with transition',
          ],
          improved: ['Strategic integration', 'Succession planning', 'Human relationship preservation'],
        },
        educationalNote:
          'AI can identify behavioral clusters and economic patterns, but only leadership knows that two legacy clients are the founder\'s personal friends, the Hendersons just made three referrals, and a young professionals program is being considered. This context shapes strategy in ways pure data analysis cannot.',
      },
    ],
  },

  // SCENARIO 14: Research Synthesis
  {
    id: 'research-synthesis',
    title: 'Research Synthesis',
    description: 'Transform complex research into audience-appropriate summaries',
    category: 'communication',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Investment Research Report',
      portfolio: 'Institutional research on AI sector',
      situation: 'CIO needs to distribute research to advisors and clients',
      aum: 'N/A',
    },
    learningObjectives: [
      'See how AI adapts content for different audiences',
      'Learn to maintain accuracy while simplifying complexity',
      'Understand version control for multi-audience communication',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Over-simplified summary losing key insights',
        prompt: 'Summarize our AI sector research report for clients.',
        output:
          'AI Sector Update:\n\nAI stocks have performed well this year. Companies like NVIDIA and Microsoft are leading the sector. We think AI will continue to be important for the economy. Consider adding AI exposure to your portfolio.',
        issues: [
          'Loses all substantive content from research',
          'Generic statements anyone could make',
          'No specific investment thesis or rationale',
          'Missing risk considerations entirely',
          'Sounds like marketing, not research',
        ],
        explanation:
          'Summarization without structure loses the analytical value that makes research worth distributing.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Structured synthesis preserving key insights',
        prompt:
          'Create three versions of our AI sector research: 1) Executive summary for CIO peers (2 pages), 2) Advisor briefing with talking points (1 page), 3) Client-ready summary (500 words). Source material covers AI infrastructure buildout, hyperscaler capex trends, and semiconductor positioning. Maintain analytical rigor across all versions.',
        output:
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 VERSION 1: EXECUTIVE SUMMARY (CIO Peers)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAI INFRASTRUCTURE: INVESTMENT THESIS UPDATE\n\nKey Finding: AI monetization is outpacing infrastructure investment, creating a capex-to-revenue gap that favors semiconductor and infrastructure providers through 2026.\n\nHyperscaler Analysis:\n• Combined capex guidance up 32% YoY ($180B+ in 2024)\n• Incremental spending heavily weighted toward AI compute\n• Microsoft, Google, Amazon all raised capex guidance last quarter\n• Meta emerging as unexpected AI infrastructure leader\n\nSemiconductor Positioning:\n• NVIDIA maintains >80% AI accelerator market share\n• AMD gaining traction in inference workloads (15% share target by 2025)\n• ASML and semiconductor equipment benefiting from capacity expansion\n• Memory companies (SK Hynix, Micron) seeing HBM demand outstrip supply\n\nValuation Considerations:\n• NVIDIA trades at 35x forward earnings vs. 25x historical\n• Premium justified by 80%+ revenue growth and margin expansion\n• Risk: multiple compression if growth decelerates below 50%\n• Opportunity: broader AI beneficiary basket for diversified exposure\n\nPortfolio Implications:\n• Maintain overweight to AI infrastructure\n• Diversify within theme (semiconductors, cloud, enterprise software)\n• Monitor capex/revenue ratio for sustainability signals\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 VERSION 2: ADVISOR BRIEFING\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAI SECTOR: KEY POINTS FOR CLIENT CONVERSATIONS\n\nThe Headline:\nAI is transitioning from hype to real business value. Companies are spending massively on AI infrastructure, and that spending is starting to generate revenue.\n\nTalking Points:\n\n1. "Why now?" - Major tech companies increased AI spending by 32% this year. They\'re not doing this for fun—they\'re seeing real business returns.\n\n2. "Isn\'t this a bubble?" - Unlike crypto or meme stocks, AI spending is driven by Fortune 500 companies with real budgets and business cases. The spending is showing up in revenue growth for AI providers.\n\n3. "How do we invest?" - Three layers: semiconductors (NVIDIA, AMD), cloud providers (Microsoft, Amazon, Google), and enterprise software using AI. Diversification within the theme reduces single-stock risk.\n\n4. "What are the risks?" - Valuations are elevated, especially for NVIDIA. A slowdown in AI spending or competition could pressure prices. We recommend diversified exposure rather than concentrated bets.\n\nClient-Ready Stat:\n"Tech companies are spending $180 billion on AI infrastructure this year—that\'s a 32% increase. They expect this to pay off in revenue growth and efficiency gains."\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 VERSION 3: CLIENT SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nUNDERSTANDING THE AI INVESTMENT OPPORTUNITY\n\nYou\'ve likely noticed AI appearing everywhere—from chatbots to search results to business tools. Behind the headlines, a significant investment shift is occurring that affects your portfolio.\n\nWhat\'s Happening:\n\nMajor technology companies are investing heavily in AI capabilities. This year, companies like Microsoft, Google, and Amazon are spending over $180 billion on AI infrastructure—a 32% increase from last year. This spending is creating opportunities for companies that provide AI technology.\n\nWhere We\'re Seeing Value:\n\nWe\'re finding investment opportunities across three areas:\n\n• Companies building AI chips and hardware (the picks and shovels)\n• Cloud platforms hosting AI applications (the infrastructure)\n• Software companies incorporating AI into their products (the applications)\n\nHow This Affects Your Portfolio:\n\nYour portfolio includes exposure to AI through our technology holdings. We\'re maintaining an overweight position in this sector, though we\'re diversifying across multiple companies rather than concentrating in any single stock.\n\nImportant Considerations:\n\nAs with any investment theme, there are risks. Technology valuations are elevated, and any slowdown in AI adoption could affect these investments. We\'re monitoring these positions closely and will adjust as market conditions change.\n\nPlease reach out if you\'d like to discuss how AI investments fit into your overall financial plan.',
        issues: [
          'Strong multi-version output',
          'Needs compliance review reminders',
          'Should include forward-looking disclaimers',
        ],
        explanation:
          'Creating audience-appropriate versions preserves analytical value while making research accessible to each constituency.',
        highlights: {
          added: [
            'Three distinct versions with different depth',
            'Executive version with full analytical framework',
            'Advisor version with client conversation tools',
            'Client version with accessible language',
            'Consistent thesis across all versions',
          ],
          improved: ['Audience appropriateness', 'Practical utility', 'Message consistency'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added compliance elements and risk disclosures',
        prompt:
          'Create three versions of our AI sector research with appropriate compliance elements for each audience. Include forward-looking statement disclaimers, risk disclosures, and version tracking for compliance archival.',
        output:
          'RESEARCH SYNTHESIS - AI SECTOR ANALYSIS\nVersion Control: RS-2024-047 | Compliance Review: Pending\nSource Document: "AI Infrastructure Investment Thesis" (12/15/2024)\n\n⚠️ COMPLIANCE NOTES FOR ALL VERSIONS:\n• Forward-looking statements require disclaimers\n• Performance projections are estimates, not guarantees\n• Individual client suitability varies\n• Archive all versions per retention policy\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 VERSION 1: EXECUTIVE SUMMARY\nAudience: CIO peers, institutional investors\nCompliance: Institutional use only\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAI INFRASTRUCTURE: INVESTMENT THESIS UPDATE\n\n[Full executive analysis as before...]\n\nRisk Factors:\n• Valuation compression risk if growth decelerates\n• Competitive dynamics in AI accelerator market\n• Regulatory uncertainty around AI development\n• Concentration risk in NVIDIA-dependent portfolios\n• Cyclical capex spending patterns in technology\n\nForward-Looking Statement: This analysis contains projections based on current data and assumptions. Actual results may differ materially. Past performance does not guarantee future results.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 VERSION 2: ADVISOR BRIEFING\nAudience: Internal advisors\nCompliance: Internal use only - do not distribute to clients\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Advisor content as before...]\n\n⚠️ ADVISOR GUIDANCE:\n• Do not guarantee AI sector performance\n• Suitability depends on individual client risk tolerance\n• Use client-approved version for written distribution\n• Document any AI-related recommendations in CRM\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 VERSION 3: CLIENT SUMMARY\nAudience: Retail clients\nCompliance: Approved for client distribution after review\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Client content as before...]\n\n---\nImportant Disclosures:\nThis information is provided for educational purposes and reflects our current views on the AI sector. Investment decisions should be made based on your individual circumstances, risk tolerance, and financial goals. The AI sector involves significant risks including volatility, regulatory uncertainty, and the potential for rapid technological change. Past performance does not guarantee future results. Please consult with your advisor before making investment decisions.\n\n[Firm Name] | [Address] | [ADV Disclosure Reference]',
        issues: [
          'Compliance framework established',
          'Could add specific firm positioning context',
          'Consider timing for client distribution',
        ],
        explanation:
          'Version tracking, audience labeling, and appropriate disclaimers ensure research synthesis meets compliance requirements for each use case.',
        highlights: {
          added: [
            'Version control numbering',
            'Audience and compliance labels',
            'Risk factors section',
            'Forward-looking disclaimers',
            'Advisor guidance notes',
            'Client disclosure footer',
          ],
          improved: ['Regulatory compliance', 'Audit trail', 'Distribution control'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final versions with firm-specific positioning',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nFirm notes: Firm is underweight NVIDIA due to valuation concerns. CIO believes AMD is better risk/reward. Several large clients have asked about AI investing. Firm hosts quarterly webinar and this could be featured topic.',
        output:
          'RESEARCH SYNTHESIS - AI SECTOR ANALYSIS\nVersion Control: RS-2024-047 | Compliance Status: APPROVED\nSource: "AI Infrastructure Investment Thesis" (12/15/2024)\nFirm Position: Constructive on AI theme; diversified approach; AMD preferred over NVIDIA\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 VERSION 1: EXECUTIVE SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Full executive analysis with firm positioning...]\n\nFIRM POSITIONING:\nWe maintain a constructive view on AI infrastructure but differ from consensus on implementation:\n\n• NVIDIA: Underweight vs. benchmark. Valuation at 35x forward earnings prices in substantial execution. Prefer to access AI theme through diversified basket.\n\n• AMD: Overweight. Better risk/reward at current levels. Inference market share gains underappreciated. 15% AI accelerator share target by 2025 achievable.\n\n• Diversified approach: Prefer basket of semiconductors, cloud infrastructure, and enterprise software over concentrated NVIDIA position.\n\nRationale: Client portfolios benefit from AI exposure without concentration risk that single-stock positions create.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 VERSION 2: ADVISOR BRIEFING\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🎯 FIRM POSITION: Constructive on AI, diversified approach, AMD over NVIDIA\n\nWhy We\'re Different:\nMany clients ask "Why don\'t we own more NVIDIA?" Here\'s our thinking:\n\n1. Valuation discipline: NVIDIA trades at 35x earnings. That\'s pricing in near-perfect execution. We prefer better risk/reward.\n\n2. AMD opportunity: AMD is gaining share in AI inference (running AI models). Less expensive, similar exposure to AI growth.\n\n3. Diversification: Rather than betting on one company, we spread AI exposure across semiconductors, cloud, and software. Better risk management.\n\nClient Conversation Guide:\n\n"I\'ve heard NVIDIA is the way to play AI. Why don\'t we own more?"\n\n→ "NVIDIA is an excellent company, and we do have exposure. However, we believe the stock price already reflects much of the optimism. We prefer a diversified approach that captures AI growth while managing concentration risk. We\'re also finding opportunities in AMD, which is gaining market share at a more attractive valuation."\n\n📅 WEBINAR OPPORTUNITY:\nThis topic is ideal for next quarter\'s client webinar. Many clients are asking about AI. Consider featuring CIO perspective on our positioning.\n\nAction: Discuss with marketing for Q1 webinar planning.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 VERSION 3: CLIENT SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nUNDERSTANDING OUR AI INVESTMENT APPROACH\n\nYou may have noticed significant attention on artificial intelligence and wondered how this affects your portfolio. We\'d like to share our perspective.\n\nOur View on AI:\n\nWe believe AI represents a meaningful long-term investment opportunity. Major technology companies are investing over $180 billion in AI infrastructure this year—a 32% increase—because they\'re seeing real business returns.\n\nOur Approach:\n\nRather than concentrating in any single AI stock, we take a diversified approach:\n\n• We invest across the AI ecosystem: chip makers, cloud providers, and software companies\n• We focus on companies with attractive valuations relative to their growth potential\n• We manage concentration risk by spreading exposure across multiple holdings\n\nYou may have heard about NVIDIA, the leading AI chip company. While we have exposure to NVIDIA, we believe some of the stock\'s potential is already reflected in its price. We\'re finding opportunities in other AI beneficiaries that may offer better risk-adjusted returns.\n\nWhat This Means for You:\n\nYour portfolio includes thoughtful AI exposure as part of our overall technology allocation. We\'re positioned to benefit from AI growth while maintaining the diversification that supports your long-term goals.\n\n💡 Coming Soon: We\'re planning a webinar on AI investing for next quarter. Watch for details if you\'d like to learn more about this topic.\n\nQuestions? Please reach out to schedule a conversation about how AI fits into your financial plan.\n\n---\n[Standard disclosures...]',
        issues: [],
        explanation:
          'The final versions incorporate the firm\'s specific positioning (AMD over NVIDIA), address the client questions advisors are receiving, and connect to the webinar opportunity. This transforms generic research synthesis into firm-specific communication strategy.',
        highlights: {
          added: [
            'Firm positioning statement at top',
            'AMD vs. NVIDIA rationale',
            'Client objection handling script',
            'Webinar opportunity connection',
            'Consistent positioning across all versions',
          ],
          improved: ['Firm voice integration', 'Advisor enablement', 'Client communication strategy'],
        },
        educationalNote:
          'AI can synthesize research for multiple audiences, but only the CIO knows the firm\'s specific positioning on NVIDIA vs. AMD, that clients have been asking about AI, and that a webinar opportunity exists. This context aligns research with firm strategy and advisor needs.',
      },
    ],
  },

  // SCENARIO 15: Investment Committee Documents
  {
    id: 'committee-docs',
    title: 'Investment Committee Documents',
    description: 'Prepare structured materials for investment committee meetings',
    category: 'planning',
    difficulty: 'advanced',
    clientProfile: {
      name: 'Quarterly IC Meeting',
      portfolio: 'Investment Committee preparation',
      situation: 'CIO preparing materials for quarterly investment committee review',
      aum: 'Firm-wide policy discussion',
    },
    learningObjectives: [
      'Learn to structure investment committee materials efficiently',
      'See how AI organizes complex multi-topic agendas',
      'Understand the balance between thoroughness and actionability',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Unstructured brain dump',
        prompt: 'Prepare materials for our investment committee meeting.',
        output:
          'Investment Committee Meeting\n\nAgenda:\n- Review performance\n- Discuss market outlook\n- Consider allocation changes\n- Any other business\n\nPlease come prepared to discuss.',
        issues: [
          'No substance or preparation materials',
          'Vague agenda with no decision points',
          'No supporting data or analysis',
          'Committee members cannot prepare effectively',
          'Meeting will be inefficient without structure',
        ],
        explanation:
          'Investment committees need structured materials with clear decision points to use their time effectively.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Structured agenda with supporting materials',
        prompt:
          'Prepare comprehensive investment committee materials for quarterly review. Include: 1) Performance review with attribution, 2) Market outlook summary, 3) Asset allocation review with recommendations, 4) Specific decision items with supporting analysis. Format for a 90-minute meeting.',
        output:
          'INVESTMENT COMMITTEE MEETING\nQ4 2024 Quarterly Review | 90 Minutes\nPrepared by: Office of the CIO\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 AGENDA & TIME ALLOCATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n1. Performance Review (20 min)\n2. Market Outlook (15 min)\n3. Asset Allocation Review (25 min)\n4. Decision Items (25 min)\n5. Wrap-up & Action Items (5 min)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 SECTION 1: PERFORMANCE REVIEW\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nModel Portfolio Performance (Q4 2024):\n\n| Strategy    | Return | Benchmark | Alpha  | YTD    |\n|-------------|--------|-----------|--------|--------|\n| Growth      | +8.2%  | +7.1%     | +1.1%  | +22.4% |\n| Balanced    | +5.4%  | +4.8%     | +0.6%  | +14.2% |\n| Conservative| +3.1%  | +2.9%     | +0.2%  | +8.6%  |\n| Income      | +2.8%  | +2.4%     | +0.4%  | +7.8%  |\n\nAttribution Highlights:\n• Equity overweight contributed +0.8% (market up strongly)\n• International underweight cost -0.3% (emerging markets rallied)\n• Duration positioning added +0.2% (rates fell)\n• Security selection in tech added +0.4%\n\nKey Takeaway: Strategies outperformed benchmarks; EM underweight was key detractor.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🌍 SECTION 2: MARKET OUTLOOK\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nEconomic Summary:\n• US GDP growth: 2.4% (moderating but positive)\n• Inflation: 2.8% (trending toward target)\n• Fed policy: Pausing, potential cuts in 2025\n• Labor market: Softening but resilient\n\nMarket Observations:\n• Equity valuations elevated (S&P 500 at 21x forward)\n• Credit spreads tight (near cycle lows)\n• Yield curve normalizing (no longer inverted)\n• Volatility low (VIX around 14)\n\nCIO View:\n• Maintain modest equity overweight (economic growth supports earnings)\n• Add duration (rate cuts likely in 2025)\n• Reduce credit risk (spreads don\'t compensate for risk)\n• Consider increasing EM (valuation opportunity)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚖️ SECTION 3: ASSET ALLOCATION REVIEW\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nCurrent vs. Strategic Weights (Balanced Model):\n\n| Asset Class  | Current | Strategic | Variance | Recommendation |\n|--------------|---------|-----------|----------|----------------|\n| US Equity    | 42%     | 40%       | +2%      | Maintain       |\n| Intl Equity  | 13%     | 15%       | -2%      | Increase       |\n| Fixed Income | 38%     | 38%       | 0%       | Maintain       |\n| Alternatives | 5%      | 5%        | 0%       | Maintain       |\n| Cash         | 2%      | 2%        | 0%       | Maintain       |\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n✅ SECTION 4: DECISION ITEMS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDECISION 1: Increase Emerging Market Equity Allocation\nProposal: Increase EM from 3% to 5% across balanced strategies\nRationale: Valuation discount to DM at 10-year wide; China stimulus improving sentiment\nRisk: EM volatility, currency risk, geopolitical uncertainty\nVote Required: Yes/No\n\nDECISION 2: Extend Fixed Income Duration\nProposal: Increase portfolio duration from 5.2 to 6.0 years\nRationale: Fed cutting cycle likely; capture price appreciation as rates fall\nRisk: Inflation resurgence could hurt long bonds\nVote Required: Yes/No\n\nDECISION 3: Add Private Credit Allocation (New)\nProposal: Introduce 3% private credit allocation in Balanced and Growth models\nRationale: Yield premium over public markets; diversification benefit\nRisk: Illiquidity, complexity, due diligence burden\nVote Required: Yes/No, or table for further analysis',
        issues: [
          'Good structure, needs pre-read distribution plan',
          'Should include dissenting views for discussion',
          'Add backup materials for deeper analysis',
        ],
        explanation:
          'Clear structure with time allocations, supporting data, and specific decision items enables productive committee meetings.',
        highlights: {
          added: [
            'Time-boxed agenda',
            'Performance attribution analysis',
            'Market outlook with CIO view',
            'Asset allocation variance table',
            'Specific decision items with rationale and risks',
          ],
          improved: ['Meeting efficiency', 'Decision clarity', 'Preparation quality'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added governance elements and documentation standards',
        prompt:
          'Prepare investment committee materials with proper governance documentation. Include: 1) Pre-read distribution timeline, 2) Quorum and voting requirements, 3) Documentation for compliance records, 4) Minority view section for contested items.',
        output:
          'INVESTMENT COMMITTEE MEETING\nQ4 2024 Quarterly Review | December 18, 2024 | 2:00-3:30 PM\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 GOVERNANCE & ADMINISTRATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nCommittee Members: [List of 6 members]\nQuorum Requirement: 4 of 6 members (67%)\nVoting Threshold: Simple majority for tactical changes; 2/3 for strategic policy changes\n\nPre-Read Distribution:\n• Materials distributed: December 13 (5 business days prior)\n• Questions/comments due: December 16 by 5 PM\n• Final materials with Q&A addendum: December 17\n\nDocumentation:\n• Meeting will be recorded for compliance records\n• Minutes prepared within 5 business days\n• All decisions documented with vote count and rationale\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n[Performance and Market sections as before...]\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n✅ SECTION 4: DECISION ITEMS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDECISION 1: Increase Emerging Market Equity Allocation\nProposal: Increase EM from 3% to 5% across balanced strategies\nType: Tactical (simple majority required)\n\nCIO Recommendation: APPROVE\nRationale: Valuation discount at 10-year wides; China stimulus improving\n\n⚠️ ALTERNATIVE VIEW (J. Williams):\nConcern: Geopolitical risk underpriced; prefer to wait for tariff clarity post-inauguration. Suggest tabling until Q1.\n\nSupporting Analysis: See Appendix A for EM valuation analysis and risk scenarios.\n\nVote: [ ] Approve  [ ] Reject  [ ] Table to Q1\n\n---\n\nDECISION 2: Extend Fixed Income Duration\nProposal: Increase duration from 5.2 to 6.0 years\nType: Tactical (simple majority required)\n\nCIO Recommendation: APPROVE\nRationale: Fed cutting cycle likely; position for rate decline\n\n⚠️ ALTERNATIVE VIEW (M. Chen):\nConcern: Inflation may prove stickier than market expects. Prefer gradual increase (to 5.6) rather than full move.\n\nSupporting Analysis: See Appendix B for rate scenario analysis.\n\nVote: [ ] Approve full increase  [ ] Approve partial (to 5.6)  [ ] Reject\n\n---\n\nDECISION 3: Add Private Credit Allocation\nProposal: Introduce 3% private credit in Balanced and Growth models\nType: Strategic (2/3 majority required)\n\nCIO Recommendation: TABLE FOR FURTHER ANALYSIS\nRationale: Opportunity is attractive but due diligence incomplete. Recommend working group to evaluate managers and structure.\n\nVote: [ ] Approve  [ ] Reject  [ ] Table & form working group\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📎 APPENDICES (Distributed Separately)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAppendix A: Emerging Markets Deep Dive (12 pages)\nAppendix B: Fixed Income Duration Analysis (8 pages)\nAppendix C: Private Credit Market Overview (15 pages)\nAppendix D: Q4 Performance Attribution Detail (6 pages)',
        issues: [
          'Strong governance framework',
          'Could add risk management review section',
          'Consider adding action item tracking from prior meeting',
        ],
        explanation:
          'Governance documentation, alternative views, and voting procedures ensure decisions are well-documented and defensible.',
        highlights: {
          added: [
            'Quorum and voting requirements',
            'Pre-read distribution timeline',
            'Alternative view sections',
            'Vote type classification (tactical vs. strategic)',
            'Appendix references for deeper analysis',
          ],
          improved: ['Governance compliance', 'Minority voice inclusion', 'Decision documentation'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with committee-specific context',
        prompt:
          '[Same as Stage 3, with additional context:]\n\nCommittee notes: J. Williams missed last meeting and wants to revisit the Japan decision from Q3. M. Chen is retiring next quarter and this may be her last meeting. One board member asked about crypto policy after client inquiries.',
        output:
          'INVESTMENT COMMITTEE MEETING\nQ4 2024 Quarterly Review | December 18, 2024 | 2:00-3:30 PM\n\n💡 CHAIR\'S NOTES:\n• Welcome back J. Williams (missed Q3 due to travel)\n• This is M. Chen\'s final meeting before retirement—we\'ll acknowledge her 12 years of service\n• Board member inquiry on crypto policy added to agenda\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 AGENDA & TIME ALLOCATION (Revised)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n1. Performance Review (15 min) - abbreviated\n2. Q3 Decision Follow-up: Japan (10 min) - per J. Williams request\n3. Market Outlook (15 min)\n4. Asset Allocation Review (20 min)\n5. Decision Items (20 min)\n6. NEW: Cryptocurrency Policy Discussion (10 min) - board inquiry\n7. Recognition: M. Chen retirement (5 min)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔄 Q3 FOLLOW-UP: JAPAN ALLOCATION (For J. Williams)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nQ3 Decision: Increased Japan allocation from 3% to 5%\nJ. Williams was absent; requested review of decision and results\n\nOutcome Since Implementation:\n• Japan allocation return: +4.2% (vs. +2.8% for ex-Japan developed)\n• Yen strengthened 3% vs. USD (tailwind to returns)\n• Thesis playing out: corporate governance reforms driving buybacks\n\nCommittee may reaffirm or revisit based on discussion.\n\n[Performance, Market Outlook, Asset Allocation sections as before...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🆕 NEW AGENDA ITEM: CRYPTOCURRENCY POLICY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nBackground: Board member received client inquiries about cryptocurrency. Requested IC review of firm policy.\n\nCurrent Policy: No direct cryptocurrency exposure in managed portfolios.\n\nMarket Context:\n• Spot Bitcoin ETFs approved January 2024\n• $50B+ in ETF assets gathered\n• Several peer firms now permit limited (2-5%) crypto exposure\n\nOptions for Discussion:\n1. Maintain current prohibition (status quo)\n2. Permit limited crypto ETF exposure (e.g., max 3%) with enhanced suitability\n3. Form working group to develop comprehensive policy (defer decision)\n\nCIO Preliminary View: Option 3 recommended. Topic warrants careful policy development rather than reactive decision.\n\nNote: This is a discussion item, not a vote. Seeking committee input on direction.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎉 RECOGNITION: M. CHEN RETIREMENT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nThis is M. Chen\'s final Investment Committee meeting after 12 years of service.\n\nContributions to note:\n• Championed duration extension strategy (2019) that protected portfolios in 2020\n• Led private credit due diligence working group\n• Served as voice of risk management through multiple market cycles\n\n📝 Chair will offer remarks and present recognition gift.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Appendices and supporting materials as before...]',
        issues: [],
        explanation:
          'The final materials address committee-specific dynamics: J. Williams\'s absence and request to revisit Japan, M. Chen\'s retirement recognition, and the board\'s crypto inquiry. This transforms a standard IC meeting into one that addresses the actual context committee members are navigating.',
        highlights: {
          added: [
            'Chair\'s notes with meeting context',
            'Q3 follow-up section for absent member',
            'Cryptocurrency policy discussion (board inquiry)',
            'Retirement recognition segment',
            'Revised time allocation for new items',
          ],
          improved: ['Committee dynamics awareness', 'Inclusive preparation', 'Institutional memory'],
        },
        educationalNote:
          'AI can structure investment committee materials with proper governance elements. But only the CIO knows that J. Williams missed last meeting, M. Chen is retiring, and the board asked about crypto. These details ensure the meeting addresses what the committee actually needs to discuss.',
      },
    ],
  },
]
