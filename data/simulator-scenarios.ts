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

  // SCENARIO 16: Market Commentary
  {
    id: 'market-commentary',
    title: 'Market Commentary for Distribution',
    description: 'Create timely market commentary for clients and distribution partners',
    category: 'communication',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Multi-Audience Distribution',
      portfolio: 'Firmwide commentary',
      situation: 'Market selloff - down 3% this week on inflation concerns',
      aum: 'Firmwide',
    },
    learningObjectives: [
      'Learn to create balanced, non-alarmist market commentary',
      'Understand how to address current events while maintaining perspective',
      'See how to adapt messaging for different audiences (advisors vs. clients)',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Generic market update without context',
        prompt: 'Write a market commentary about this week\'s market decline.',
        output:
          'Market Update\n\nMarkets declined this week. The S&P 500 fell 3% due to inflation concerns. Volatility increased. Investors should stay calm and focused on long-term goals.\n\nWe continue to monitor the situation.',
        issues: [
          'Too brief and generic',
          'No specific context or data',
          'Lacks perspective on magnitude',
          'No actionable insights',
          'Sounds like every other market commentary',
        ],
        explanation:
          'Generic market updates don\'t add value. Clients need context, perspective, and insight—not just a recitation of what happened.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added data, context, and perspective',
        prompt:
          'Write a market commentary about this week\'s 3% market decline. Include: 1) What drove the selloff (hotter-than-expected CPI), 2) Historical context (how common are 3% weekly declines?), 3) What it means for positioning, 4) Forward-looking perspective. Tone: Calm, analytical, reassuring without being dismissive. 400-500 words.',
        output:
          'MARKET COMMENTARY: Putting This Week\'s Decline in Perspective\nWeek Ending January 26, 2026\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWHAT HAPPENED\n\nU.S. equity markets declined 3.2% this week (S&P 500) following Tuesday\'s CPI report, which showed inflation reaccelerating to 3.4% year-over-year versus expectations of 2.9%. The hotter-than-expected print triggered concerns that the Federal Reserve may delay rate cuts or even consider additional tightening.\n\nThe selloff was broad-based: all 11 sectors finished lower, led by rate-sensitive areas including technology (-4.8%) and real estate (-5.1%). Bond markets also declined, with the 10-year Treasury yield rising 22 basis points to 4.68% as investors repriced Fed expectations.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPUTTING IT IN CONTEXT\n\nWhile a 3% weekly decline feels significant in the moment, it\'s important to maintain perspective:\n\n• This is the 47th time since 2010 the S&P 500 has fallen 3% or more in a week\n• On average, markets experience a 3%+ weekly decline about 3 times per year\n• Following such declines, markets have been positive 3 months later 68% of the time\n• The S&P 500 remains up +2.8% year-to-date and +18.2% over the past 12 months\n\nThe inflation data was disappointing but not catastrophic. Core CPI (excluding food and energy) rose 3.2%, still well below the 6%+ levels seen in 2022. The Fed\'s preferred measure (core PCE) has been more encouraging, and one month of data doesn\'t derail the broader disinflationary trend.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWHAT IT MEANS FOR POSITIONING\n\nThe primary impact is on rate cut timing. Markets had priced in 4-5 Fed cuts in 2026; that\'s now down to 2-3 cuts with the first likely pushed to mid-year. This recalibration is healthy—markets had gotten ahead of themselves.\n\nFor portfolios:\n\n• Equity fundamentals remain solid: Q4 earnings season is tracking 8% growth with 75% of companies beating estimates\n• Higher-for-longer rates support our preference for quality companies with strong balance sheets\n• Fixed income yields remain attractive for long-term investors; the 10-year at 4.7% offers real return potential\n• Volatility creates opportunities; we\'re monitoring oversold areas for tactical additions\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nLOOKING AHEAD\n\nThis week\'s decline is a reminder that volatility is a normal part of investing, not a signal to abandon strategy. The key question isn\'t whether we\'ll see more volatility (we will), but whether the fundamental backdrop supports staying invested (it does).\n\nEconomic growth remains positive, corporate earnings are growing, and while the path to 2% inflation may be bumpier than hoped, the direction is still downward. Patience and perspective remain the most valuable assets in uncertain times.\n\nWe\'ll continue to monitor inflation data, Fed communications, and earnings trends. As always, we\'re here to discuss how these developments affect your specific situation.',
        issues: [
          'Strong content, but needs compliance disclaimers',
          'Should acknowledge uncertainty more explicitly',
          'Avoid phrases that sound like predictions ("will see more volatility")',
        ],
        explanation:
          'Adding historical context, specific data, and forward perspective transforms generic commentary into valuable insight.',
        highlights: {
          added: [
            'Specific CPI numbers and market reaction',
            'Historical frequency of 3% declines (47 times since 2010)',
            'Sector performance breakdown',
            'Fed policy implications',
            'Portfolio positioning implications',
          ],
          improved: ['Analytical depth', 'Historical perspective', 'Actionable insights'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added compliance language and risk disclosures',
        prompt:
          'Write the same market commentary with proper compliance elements: 1) Past performance disclaimers, 2) Forward-looking statement qualifiers, 3) Risk disclosures, 4) Clear statement that it\'s not personalized advice.',
        output:
          'MARKET COMMENTARY: Putting This Week\'s Decline in Perspective\nWeek Ending January 26, 2026\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWHAT HAPPENED\n\nU.S. equity markets declined 3.2% this week (S&P 500) following Tuesday\'s CPI report, which showed inflation reaccelerating to 3.4% year-over-year versus expectations of 2.9%. The hotter-than-expected print triggered concerns that the Federal Reserve may delay rate cuts or even consider additional tightening.\n\nThe selloff was broad-based: all 11 sectors finished lower, led by rate-sensitive areas including technology (-4.8%) and real estate (-5.1%). Bond markets also declined, with the 10-year Treasury yield rising 22 basis points to 4.68% as investors repriced Fed expectations.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPUTTING IT IN CONTEXT\n\nWhile a 3% weekly decline feels significant in the moment, historical perspective is important:\n\n• Since 2010, the S&P 500 has fallen 3% or more in a week 47 times\n• Markets have historically experienced 3%+ weekly declines about 3 times per year on average\n• The S&P 500 remains up +2.8% year-to-date and +18.2% over the past 12 months\n\nPast performance is not indicative of future results. Historical patterns do not guarantee similar outcomes in current or future market environments.\n\nThe inflation data was disappointing but represents one month in a longer trend. Core CPI (excluding food and energy) rose 3.2%, still well below the 6%+ levels seen in 2022. While one month of data doesn\'t define the trajectory, it does suggest the path to the Fed\'s 2% target may take longer than previously anticipated.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIMPLICATIONS\n\nThe primary impact is on expectations for Fed policy. Markets have adjusted rate cut expectations from 4-5 cuts in 2026 down to 2-3 cuts, with the first likely pushed to mid-year.\n\nPortfolio considerations:\n\n• Equity fundamentals: Q4 earnings season is tracking 8% growth with 75% of companies beating estimates through January 26\n• Rate environment: Higher-for-longer rates may support quality companies with strong balance sheets\n• Fixed income: Yields around current levels have historically provided meaningful real return potential, though future returns are not guaranteed\n• Market volatility: Periods of volatility may create opportunities, though timing and security selection involve risk\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nLOOKING AHEAD\n\nThis week\'s decline serves as a reminder that market volatility is a normal part of investing. While the fundamental economic backdrop—including positive GDP growth and corporate earnings—remains supportive, markets may experience continued volatility as inflation and policy uncertainty persist.\n\nThis commentary is provided for informational purposes only and does not constitute investment advice or a recommendation for any specific security or strategy. Market conditions can change rapidly, and all investments carry risk, including the potential loss of principal. Please consult with your advisor to discuss how these developments may affect your specific situation and goals.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIMPORTANT DISCLOSURES\n\nPast performance is not indicative of future results. All investments involve risk, including loss of principal. The opinions expressed are current as of the date of this commentary and are subject to change. This material is provided for informational purposes and should not be construed as investment advice or a recommendation. Economic and market forecasts presented are subject to considerable uncertainty and may not occur as anticipated. Please consult your financial advisor regarding your specific situation.',
        issues: [
          'Compliance elements in place',
          'Could segment for different audiences (advisor vs. end client)',
          'May want executive summary for quick scanning',
        ],
        explanation:
          'Compliance language protects the firm while maintaining analytical value. Qualifiers like "may," "historically," and "not guaranteed" are essential.',
        highlights: {
          added: [
            'Past performance disclaimers',
            'Forward-looking statement qualifiers ("may," "potential")',
            'Not personalized advice disclosure',
            'Risk warnings (loss of principal, uncertainty)',
            'Formal disclosures section',
          ],
          improved: ['Regulatory compliance', 'Risk disclosure', 'Professional standards'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with executive summary and multi-audience adaptation',
        prompt:
          '[Same as Stage 3, with additions:]\n\nCreate two versions: 1) Advisor-facing (more technical, includes talking points), 2) Client-facing (simplified, more reassuring tone). Add executive summary to each.',
        output:
          '═══════════════════════════════════════════════\nVERSION 1: ADVISOR-FACING\n═══════════════════════════════════════════════\n\nMARKET COMMENTARY: Week Ending January 26, 2026\nFor Advisor Use | Includes Client Talking Points\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 EXECUTIVE SUMMARY (30-Second Version for Advisors)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n• Markets down 3.2% on hot CPI (3.4% vs 2.9% expected)\n• Completely normal volatility—47th occurrence of 3%+ weekly decline since 2010\n• Rate cut expectations pushed out (was 4-5 cuts, now 2-3); healthy recalibration\n• Fundamentals solid: earnings +8%, growth positive, trend still disinflationary\n• Client message: Volatility is normal, strategy unchanged, stay the course\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 DETAILED ANALYSIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Full analysis as in Stage 3...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 CLIENT TALKING POINTS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIf clients call concerned about the decline:\n\n1. Acknowledge and validate:\n   "I understand seeing red on your statement is unsettling. Let\'s put this in context."\n\n2. Provide perspective:\n   "A 3% weekly decline happens about 3 times a year on average. This is the market working normally, not a crisis."\n\n3. Focus on fundamentals:\n   "What matters more than one week is the underlying economy: growth is positive, companies are earning more, and inflation—while bumpy—is still trending down."\n\n4. Reinforce strategy:\n   "Your portfolio is built for moments like this. We don\'t make emotional changes based on short-term volatility. That\'s how we\'ve been successful over time."\n\n5. Offer connection:\n   "I\'m always here if you want to talk through your specific situation. Would you like to schedule a quick call?"\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n\n═══════════════════════════════════════════════\nVERSION 2: CLIENT-FACING\n═══════════════════════════════════════════════\n\nMARKET UPDATE: Putting This Week in Perspective\nWeek Ending January 26, 2026\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 THE QUICK VERSION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nMarkets declined 3.2% this week after inflation data came in higher than expected. While it\'s never pleasant to see portfolio values dip, this type of short-term volatility is completely normal—and doesn\'t change our long-term strategy.\n\nKey points:\n• 3% weekly declines happen about 3 times per year on average\n• The economy is still growing and companies are still profitable\n• One month of inflation data doesn\'t derail the bigger trend\n• Your portfolio is designed for moments like this\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWHAT HAPPENED\n\nThis week, the government released inflation data showing prices rose more than economists expected. Markets reacted by pulling back, with stocks declining and interest rates rising as investors adjusted their expectations for when the Federal Reserve might cut rates.\n\nThe decline was broad, affecting most sectors and investment types. It\'s the kind of volatility that feels significant when you\'re experiencing it—but is actually quite common historically.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWHY WE\'RE NOT CONCERNED\n\nPerspective matters. Since 2010, we\'ve seen markets fall 3% or more in a single week 47 different times. In most cases, markets recovered and continued growing over the following months.\n\nMore importantly, the fundamentals that drive long-term returns remain intact:\n\n• The economy is still growing\n• Companies are reporting solid earnings (profits are up about 8% this quarter)\n• While inflation isn\'t falling as quickly as we\'d like, it\'s still well below the peak levels of 2022\n\nOne week of market volatility doesn\'t change these realities.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWHAT IT MEANS FOR YOU\n\nYour portfolio is built to weather volatility like this. We don\'t make emotional changes based on short-term market movements because we know that staying disciplined is what drives long-term success.\n\nThat said, if you\'re feeling concerned or want to talk through how this affects your specific situation, please don\'t hesitate to reach out. We\'re always here.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nImportant: This commentary is for informational purposes and doesn\'t constitute personalized advice. All investments involve risk. Please contact your advisor with questions specific to your situation.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        issues: [],
        explanation:
          'The advisor version includes technical depth and talking points for client conversations. The client version uses simpler language, shorter sentences, and a more reassuring tone while maintaining the same factual foundation.',
        highlights: {
          added: [
            'Two distinct versions for different audiences',
            'Executive summary for quick scanning',
            'Client talking points for advisors',
            'Simplified language in client version',
            'Offer to connect personally',
          ],
          improved: ['Audience targeting', 'Usability', 'Relationship building'],
        },
        educationalNote:
          'AI can draft market commentary quickly—but the CIO must verify all data, add firm-specific views, and decide whether the tone matches the moment. Advisors then personalize with relationship knowledge: which clients will call, what their concerns are, and how to reassure them effectively.',
      },
    ],
  },

  // SCENARIO 17: Positioning Narratives
  {
    id: 'positioning-narratives',
    title: 'Investment Positioning Narratives',
    description: 'Craft compelling narratives explaining portfolio positioning decisions',
    category: 'analysis',
    difficulty: 'advanced',
    clientProfile: {
      name: 'Investment Committee',
      portfolio: 'Model portfolios',
      situation: 'Shifting from growth to value tilt after 3 years of growth outperformance',
      aum: 'Firmwide models',
    },
    learningObjectives: [
      'Learn to translate tactical shifts into compelling narratives',
      'Understand how to justify positioning changes with data and logic',
      'See how to communicate strategy changes without second-guessing past decisions',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Vague explanation without supporting logic',
        prompt: 'Explain why we\'re shifting from growth to value stocks.',
        output:
          'Portfolio Positioning Update\n\nWe are shifting our equity allocation from growth stocks to value stocks. Growth has outperformed for several years, and we believe it\'s time for a change. Value stocks look more attractive now.\n\nThis change will be implemented over the next quarter.',
        issues: [
          'No explanation of WHY now',
          'No supporting data or analysis',
          'Sounds arbitrary ("time for a change")',
          'Doesn\'t acknowledge opportunity cost',
          'No definition of "attractive"',
        ],
        explanation:
          'Positioning changes without clear rationale undermine credibility. Investors need to understand the logic, not just the action.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added valuation data, market context, and specific rationale',
        prompt:
          'Explain our shift from growth to value with supporting analysis. Include: 1) Current valuation spreads (growth vs value), 2) Historical context, 3) Catalysts for rotation, 4) Expected timeline and magnitude. Tone: Analytical, confident but not dogmatic. 500-600 words.',
        output:
          'INVESTMENT POSITIONING: Growth-to-Value Rotation\nStrategic Shift | Q1 2026\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nEXECUTIVE SUMMARY\n\nAfter three years of growth stock outperformance, we are tactically rotating equity exposure toward value stocks. This shift is driven by valuation extremes, changing economic conditions, and improving fundamentals in traditionally value-oriented sectors.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTHE VALUATION CASE\n\nThe valuation spread between growth and value stocks has reached extreme levels:\n\n| Metric                          | Current | Historical Avg | Percentile |\n|---------------------------------|---------|----------------|------------|\n| Growth P/E premium over Value   | 12.8x   | 6.2x           | 95th       |\n| Russell 1000 Growth P/E         | 32.4x   | 24.1x          | 92nd       |\n| Russell 1000 Value P/E          | 19.6x   | 17.9x          | 68th       |\n\nGrowth stocks are trading at a 12.8x P/E premium to value stocks—the widest since the late 1990s tech bubble (excluding the 2020-2021 pandemic anomaly). Historically, spreads this wide have preceded periods of value outperformance 78% of the time over the subsequent 12-24 months.\n\nThis doesn\'t mean growth stocks are "expensive" in absolute terms given their superior earnings growth. But it does suggest the market is pricing in perpetual growth dominance—a risky assumption.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTHE FUNDAMENTAL CASE\n\nValue sectors are experiencing improving fundamentals:\n\n**Financials**: Net interest margins expanding as yield curve normalizes; loan growth accelerating; capital return capacity strong\n\n**Energy**: Structural underinvestment supporting prices; free cash flow yields attractive; energy transition creating opportunities for diversified players\n\n**Industrials**: Infrastructure spending cycle beginning; reshoring tailwinds; order backlogs at multi-year highs\n\nMeanwhile, growth sectors face headwinds:\n\n• Technology: Margin pressure from AI infrastructure costs; regulatory scrutiny intensifying; easy comps ending\n• Consumer Discretionary: Higher-for-longer rates pressuring affordability; pandemic pull-forward demand normalizing\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTHE MACRO CASE\n\nThe economic environment is shifting in value\'s favor:\n\n1. **Rates staying higher**: Fed pivoting more slowly benefits banks and insurers\n2. **Economic reacceleration**: Manufacturing and capital spending cycles favor industrials\n3. **Inflation moderating but not collapsing**: Supports commodity-linked sectors\n\nGrowth stocks thrive in low-rate, low-growth, low-inflation environments where scarce growth commands a premium. We\'re transitioning to a higher-rate, moderate-growth regime where cash flows and dividends matter more than distant earnings promises.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIMPLEMENTATION\n\nWe are implementing this shift gradually:\n\n• **Magnitude**: Reducing growth from 65% to 50% of equity allocation; increasing value from 35% to 50%\n• **Timeline**: Phased implementation over Q1 2026 (complete by March 31)\n• **Approach**: Trimming mega-cap tech winners (MSFT, GOOGL, NVDA) while adding financials (JPM, BAC) and industrials (CAT, DE)\n• **Guardrails**: Maintaining quality focus (not buying low-quality value traps); preserving tax efficiency where possible\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nRISKS AND MONITORING\n\nThis rotation carries risks:\n\n• Growth could continue outperforming if rates fall faster than expected\n• AI investment cycle could drive another leg of tech outperformance\n• Value sectors could disappoint if economic growth slows\n\nWe will monitor:\n\n• Valuation spread (would reconsider if spread compresses to <8x)\n• Relative earnings revisions (need value estimates rising, growth stabilizing)\n• Macro data (employment, manufacturing, credit conditions)\n\nThis is a tactical tilt, not a permanent abandonment of growth. We retain significant exposure to growth leaders and will rebalance if conditions change.',
        issues: [
          'Strong analytical foundation, but lacks acknowledgment of past success',
          'Should address "aren\'t we late?" question',
          'Needs client-facing simplification',
        ],
        explanation:
          'Supporting positioning shifts with valuation data, fundamental analysis, and macro context builds conviction and trust.',
        highlights: {
          added: [
            'Valuation spread table showing 95th percentile extremes',
            'Historical success rate (78% of wide spreads preceded value outperformance)',
            'Sector-by-sector fundamental analysis',
            'Macro regime shift explanation',
            'Specific implementation details (50/50 target, Q1 timeline)',
            'Risk acknowledgment and monitoring plan',
          ],
          improved: ['Analytical rigor', 'Data-driven narrative', 'Implementation clarity'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added disclaimers and addressed potential objections',
        prompt:
          'Enhance the positioning narrative with: 1) Acknowledgment that growth has worked well (no regret), 2) Address timing risk ("are we late?"), 3) Compliance disclaimers, 4) Clear statement this is tactical not strategic.',
        output:
          'INVESTMENT POSITIONING: Growth-to-Value Rotation\nStrategic Shift | Q1 2026\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nEXECUTIVE SUMMARY\n\nAfter three successful years of growth stock leadership, we are making a tactical rotation toward value stocks. This shift reflects changing valuations, fundamentals, and macro conditions—not a rejection of our previous positioning, which served clients well.\n\n**Important**: This is a tactical tilt within our equity allocation, not a strategic overhaul. We retain significant growth exposure and will adjust as conditions evolve. Past performance does not guarantee future results.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nACKNOWLEDGING WHAT WORKED\n\nOur growth-oriented positioning from 2023-2025 was successful:\n\n• Growth stocks outperformed value by an average of 12% annually\n• Overweights in technology and consumer discretionary added meaningful alpha\n• Clients benefited from the AI investment cycle and strong mega-cap earnings\n\nWe are not rotating because growth "didn\'t work"—we\'re rotating because the risk/reward has shifted. Success means recognizing when conditions change, even if it means moving away from recent winners.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTHE VALUATION CASE\n\n[Same detailed analysis as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nADDRESSING TIMING RISK: "ARE WE LATE?"\n\nA fair question: if valuations have been stretched for months, why act now?\n\nSeveral answers:\n\n1. **Valuation alone doesn\'t trigger rotations**: We needed confirming signals (improving value fundamentals, macro shift, technical deterioration in growth leadership). These aligned in Q4 2025.\n\n2. **Rotations take time**: Historically, growth-to-value rotations play out over 12-24 months, not weeks. Even if we\'re "late" to recognize the shift, there\'s typically ample opportunity.\n\n3. **Risk management**: Staying overweight growth at 95th percentile valuations feels riskier than rotating "early" into value. The asymmetry favors action.\n\n4. **Gradual approach**: Our phased Q1 implementation allows us to adjust if we\'re wrong. We\'re not making a binary bet.\n\nTiming market rotations perfectly is impossible. We focus on probabilities, risk management, and maintaining flexibility to adjust.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIMPLEMENTATION\n\n[Same implementation details...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nRISKS AND MONITORING\n\n[Same risk section...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIMPORTANT DISCLOSURES\n\nThis analysis represents our current views as of January 2026 and is subject to change. Past performance, including the historical success rate of wide valuation spreads, does not guarantee future results. \n\nInvesting in value stocks involves risks, including the possibility that value stocks may remain out of favor longer than anticipated or that selected securities may not perform as expected. \n\nThis positioning shift is tactical in nature and may be adjusted based on changing market conditions. Not all portfolios will implement this shift identically; individual circumstances, tax considerations, and account restrictions may result in variations.\n\nThis material is for informational purposes and does not constitute investment advice. Please consult your advisor regarding your specific situation.',
        issues: [
          'Excellent, nearly ready',
          'Could add FAQ section for common advisor questions',
        ],
        explanation:
          'Acknowledging past success, addressing timing concerns, and adding disclaimers makes positioning narratives credible and compliant.',
        highlights: {
          added: [
            'Acknowledgment of prior positioning success (growth worked)',
            '"Are we late?" section addressing timing concerns',
            'Emphasis on tactical vs. strategic nature',
            'Past performance disclaimers',
            'Risk disclosures specific to value investing',
            'Account-level variation disclaimer',
          ],
          improved: ['Credibility', 'Objection handling', 'Compliance'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with advisor FAQ and talking points',
        prompt:
          '[Same as Stage 3, with additions:]\n\nAdd: 1) FAQ section for advisors (5-7 common client questions), 2) One-page executive summary version, 3) Elevator pitch (2-3 sentences).',
        output:
          'INVESTMENT POSITIONING: Growth-to-Value Rotation\nQ1 2026 | Full Report + Advisor Resources\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 ELEVATOR PITCH (30 seconds)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"After three successful years of growth stock outperformance, we\'re making a tactical shift toward value stocks. The valuation spread between growth and value is at 95th percentile extremes, value fundamentals are improving, and the macro environment is shifting in value\'s favor. We\'re moving gradually—from 65/35 growth/value to 50/50 over Q1—while maintaining quality standards and flexibility to adjust."\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Full detailed analysis sections from Stage 3...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 ADVISOR FAQ: COMMON CLIENT QUESTIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Q: Why are you moving away from the stocks that have been working?**\n\nA: "We\'re not abandoning growth stocks—we\'re rebalancing. Think of it like profit-taking after a great run, while reinvesting in areas that now offer better value. We still own growth leaders like Microsoft and Google; we\'re just reducing from 65% to 50% of the equity portfolio."\n\n**Q: Doesn\'t this mean you were wrong before?**\n\nA: "Not at all. Our growth positioning worked beautifully for three years—clients benefited significantly. But successful investing means adjusting when conditions change. Valuations, fundamentals, and the economic environment have all shifted. Staying flexible is what allows us to capture opportunities."\n\n**Q: Are we late? Haven\'t others already made this move?**\n\nA: "Some investors have rotated earlier, some later. What matters is that the opportunity remains attractive. Historical data shows growth-to-value rotations typically play out over 12-24 months, not weeks. We\'re implementing gradually, which gives us room to adjust if we\'re early or late."\n\n**Q: What if growth stocks keep going up?**\n\nA: "That\'s possible, and we\'re retaining 50% growth exposure for that reason. But at current valuations, growth stocks need to sustain very high earnings growth to justify their prices. The risk of disappointment feels higher than the opportunity cost of being slightly underweight."\n\n**Q: Will this cause taxes / selling in my account?**\n\nA: "We\'re implementing tax-efficiently wherever possible—using new contributions, harvesting losses, and prioritizing tax-deferred accounts. Your advisor will discuss your specific account before making changes."\n\n**Q: How long will you maintain this value tilt?**\n\nA: "This is a tactical shift, not a permanent allocation. We\'ll monitor valuation spreads, relative earnings trends, and macro conditions continuously. If conditions change—for example, if the growth/value spread compresses meaningfully—we\'ll adjust. Typical tactical tilts last 12-24 months, but we stay flexible."\n\n**Q: What happens if you\'re wrong?**\n\nA: "We could be wrong, which is why we\'re not making an all-or-nothing bet. We\'re moving from 65/35 to 50/50—a tilt, not an overhaul. We maintain quality standards (avoiding value traps), and we\'ll adjust quickly if the data changes. The beauty of tactical tilts is they\'re reversible."\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📄 ONE-PAGE EXECUTIVE SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**WHAT**: Tactical rotation from 65% growth / 35% value → 50% / 50%\n\n**WHY**: \n• Valuation spread at 95th percentile (12.8x, vs 6.2x historical avg)\n• Value fundamentals improving (financials, energy, industrials)\n• Macro regime shifting (higher rates, moderate growth favors value)\n\n**WHEN**: Q1 2026 (gradual implementation through March 31)\n\n**HOW**: \n• Trim mega-cap tech (MSFT, GOOGL, NVDA)\n• Add financials (JPM, BAC) and industrials (CAT, DE)\n• Maintain quality focus (no value traps)\n• Tax-efficient where possible\n\n**RISKS**: \n• Growth could extend rally (AI cycle, rate cuts)\n• Value could disappoint (economic slowdown)\n• Timing risk (rotation may take time)\n\n**MONITORING**: \n• Valuation spread (<8x would trigger reconsideration)\n• Relative earnings revisions\n• Macro data (employment, manufacturing, credit)\n\n**BOTTOM LINE**: After three successful years of growth leadership, risk/reward favors rebalancing toward value. This is a tactical tilt, not a strategic overhaul. We retain significant growth exposure and will adjust as conditions evolve.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Disclosures section as in Stage 3...]',
        issues: [],
        explanation:
          'The elevator pitch, FAQ, and one-pager give advisors the tools to communicate the shift at multiple levels—from a 30-second client conversation to a deep analytical discussion.',
        highlights: {
          added: [
            'Elevator pitch for quick conversations',
            'Seven-question FAQ addressing common objections',
            'One-page executive summary for scanning',
            'Tax-efficiency talking point',
            'Flexibility and reversibility emphasis',
          ],
          improved: ['Advisor enablement', 'Client communication readiness', 'Multi-level messaging'],
        },
        educationalNote:
          'AI can structure positioning narratives with data, logic, and supporting analysis. But only the CIO knows the firm\'s historical positioning (growth worked for 3 years), the internal debate about timing (some committee members wanted to rotate earlier), and which client questions advisors are fielding ("Will this cause taxes?"). These human details transform analysis into communication.',
      },
    ],
  },

  // SCENARIO 18: Crisis Communication
  {
    id: 'crisis-communication',
    title: 'Crisis Communication & Rapid Response',
    description: 'Craft urgent client communication during market crisis events',
    category: 'communication',
    difficulty: 'advanced',
    clientProfile: {
      name: 'All Clients',
      portfolio: 'Firmwide',
      situation: 'Major bank failure triggering market selloff and client panic',
      aum: 'Firmwide',
    },
    learningObjectives: [
      'Learn to communicate quickly without appearing panicked',
      'Understand balance between urgency and reassurance',
      'See how to provide perspective while acknowledging uncertainty',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Generic reassurance without substance',
        prompt: 'Write an urgent message to clients about the bank failure and market selloff.',
        output:
          'Dear Clients,\n\nWe are monitoring the recent bank failure and market volatility. While markets are down, we recommend staying calm and sticking to your long-term plan. Volatility is normal.\n\nWe are here if you have questions.\n\nBest regards',
        issues: [
          'Too generic - could be sent during any crisis',
          'No specific information about what happened',
          'No explanation of exposure or impact',
          'Sounds dismissive of legitimate concerns',
          'No clear next steps or timeline for updates',
        ],
        explanation:
          'During a crisis, clients need specific information and context, not platitudes. Generic "stay calm" messages increase anxiety rather than reducing it.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added specific details, exposure analysis, and action plan',
        prompt:
          'Write crisis communication about the bank failure. Include: 1) What happened (specific facts), 2) Market impact so far, 3) Client exposure analysis, 4) Our immediate actions, 5) What we\'re monitoring, 6) Timeline for next update. Tone: Urgent but calm, factual, reassuring without being dismissive. 400-500 words.',
        output:
          'URGENT CLIENT UPDATE: Bank Failure & Market Response\nSent: March 15, 2026 | 4:30 PM ET\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWHAT HAPPENED\n\nPacific Capital Bank (PCB), the 18th largest U.S. bank with $240 billion in assets, was closed today by federal regulators after a three-day bank run that saw $68 billion in deposit outflows. The FDIC has been appointed receiver and will reopen the bank tomorrow under government control.\n\nThis is the third bank failure in the past 10 days following Silicon Valley Bank and Signature Bank. All three failures share similar characteristics: concentrated deposit bases, significant unrealized losses on bond portfolios, and rapid social-media-fueled withdrawals.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nMARKET IMPACT\n\nMarkets reacted sharply:\n\n• S&P 500: -4.2% (now -8.4% from recent highs)\n• Regional banks: -18.6% (worst day since 2020)\n• 10-year Treasury yield: fell to 3.42% (flight to safety)\n• VIX (volatility index): surged to 34 (elevated fear)\n\nThe selloff has been broad but concentrated in financials. Technology and consumer staples are holding up relatively better.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nYOUR EXPOSURE\n\nWe have completed an urgent review of all client portfolios:\n\n✅ **Direct PCB exposure**: ZERO. We do not hold Pacific Capital Bank bonds or equity in any client portfolios.\n\n✅ **Related bank exposure**: MINIMAL. Our bank holdings are concentrated in large, diversified institutions (JPMorgan, Bank of America, Wells Fargo) with strong deposit bases and capital ratios. These account for approximately 3-4% of typical balanced portfolios.\n\n✅ **Deposit safety**: Client cash held at our custodian (Fidelity) is separate from any troubled institutions and remains fully secure.\n\n⚠️ **Indirect impact**: While direct exposure is minimal, your portfolio will reflect today\'s broad market decline (estimated -2.5% to -3.5% depending on allocation).\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nOUR IMMEDIATE ACTIONS\n\n1. ✅ Completed exposure analysis (see above)\n2. ✅ Reviewed counterparty risk with custodians\n3. ✅ Assessed liquidity across all strategies\n4. 🔄 Monitoring credit spreads for opportunities (in progress)\n5. 🔄 Emergency Investment Committee call scheduled for 7 PM tonight\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWHAT WE\'RE MONITORING\n\nKey questions over the next 48-72 hours:\n\n• Will additional banks face pressure? (watching deposit flows)\n• How will regulators respond? (Fed emergency lending, FDIC backstops)\n• Is this contagion or isolated? (systemic risk vs. idiosyncratic issues)\n• What\'s the economic impact? (credit tightening, small business lending)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nNEXT STEPS\n\n📧 **Next Update**: Tomorrow (March 16) by 12 PM ET, following tonight\'s emergency committee call and morning market assessment.\n\n📞 **Questions**: If you need to speak with your advisor before tomorrow\'s update, please call or email. We are prioritizing urgent client calls.\n\n🔒 **No Panic Moves**: We are NOT recommending wholesale changes to portfolios at this time. Crises create volatility but also opportunity. We will be thoughtful, not reactive.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWe understand this is unsettling. Bank failures are scary, especially when they cluster. But your portfolios are built for moments like this: diversified, quality-focused, and managed by a team with experience navigating crises.\n\nWe will keep you informed as the situation develops.\n\n[Leadership signature]',
        issues: [
          'Strong content, needs compliance disclaimers',
          'Should acknowledge emotional impact more explicitly',
          'Could add historical context (past bank crises)',
        ],
        explanation:
          'Specific facts, exposure analysis, and clear action steps provide the information clients need to feel informed rather than anxious.',
        highlights: {
          added: [
            'Specific facts (PCB, $240B assets, $68B outflows)',
            'Market impact numbers (-4.2%, -18.6% regional banks)',
            'Direct exposure analysis (ZERO PCB, minimal banks)',
            'Deposit safety confirmation',
            'Immediate actions checklist',
            'What we\'re monitoring (deposit flows, regulators, contagion)',
            'Timeline for next update (tomorrow 12 PM)',
          ],
          improved: ['Specificity', 'Transparency', 'Action orientation'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added disclaimers, acknowledgment of uncertainty, and guardrails',
        prompt:
          'Enhance the crisis communication with: 1) Explicit acknowledgment of uncertainty, 2) Disclaimers about projections, 3) Emotional validation of client concerns, 4) Clear statement about what we DON\'T know.',
        output:
          'URGENT CLIENT UPDATE: Bank Failure & Market Response\nSent: March 15, 2026 | 4:30 PM ET\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚠️ IMPORTANT CONTEXT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nThis is a rapidly evolving situation. The information below reflects what we know as of 4:30 PM ET today. Conditions may change significantly overnight or over the weekend. We will update you as new information becomes available.\n\nIf you\'re feeling anxious right now, that\'s completely understandable. Bank failures are unsettling, and seeing your portfolio decline is never easy. Our goal with this message is to give you facts, context, and transparency about what we know—and what we don\'t.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nWHAT HAPPENED\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPacific Capital Bank (PCB), the 18th largest U.S. bank with $240 billion in assets, was closed today by federal regulators after a three-day bank run that saw $68 billion in deposit outflows. The FDIC has been appointed receiver and will reopen the bank tomorrow under government control.\n\nThis is the third bank failure in the past 10 days following Silicon Valley Bank and Signature Bank. All three share similar characteristics: concentrated deposit bases, significant unrealized losses on bond portfolios, and rapid social-media-fueled withdrawals.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nMARKET IMPACT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same market impact section as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nYOUR EXPOSURE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same exposure analysis as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nWHAT WE DON\'T KNOW (YET)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHonestly, there is significant uncertainty right now:\n\n❓ **Will more banks fail?** We don\'t know. Regulators are monitoring deposit flows at regional banks closely. The next 48 hours are critical.\n\n❓ **How will the Fed respond?** The Fed could announce emergency lending facilities this weekend (they did in 2008 and 2020). We\'re watching for announcements.\n\n❓ **Is this 2008 all over again?** We don\'t think so—banks today are better capitalized, and the issues appear concentrated rather than systemic—but it\'s too early to be certain.\n\n❓ **How long will volatility last?** Market crises typically see elevated volatility for weeks to months, not days. We should expect continued choppiness.\n\n❓ **Should we sell everything?** Absolutely not. But we understand the impulse. Panic selling during crises has historically been the single most damaging mistake investors make.\n\nWe will have better answers to these questions over the next 24-48 hours. Right now, transparency about uncertainty is more honest than false confidence.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nOUR IMMEDIATE ACTIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same actions as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nHISTORICAL PERSPECTIVE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nBank failures are not new, and markets have recovered from past crises:\n\n• **2008 Financial Crisis**: 25 banks failed in a single year; S&P 500 fell -38% but recovered fully within 4 years\n• **Savings & Loan Crisis (1980s-90s)**: Over 1,000 institutions failed; markets continued growing long-term\n• **2020 COVID Crisis**: Markets fell -34% in 5 weeks but recovered in 5 months\n\nPast performance does not predict the future, and this crisis may play out differently. But history shows that resilient, diversified portfolios managed with discipline tend to recover.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nNEXT STEPS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same next steps as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nFinal thought: Crises test our discipline. It\'s natural to want to "do something" when markets are falling. But the best action is often patience, perspective, and thoughtful analysis—not reactive selling. We\'re in this with you.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nIMPORTANT DISCLOSURES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nThis communication is based on information available as of 4:30 PM ET on March 15, 2026, and conditions may change rapidly. Market projections and historical comparisons do not guarantee future outcomes. \n\nAll investments carry risk, including potential loss of principal. Market volatility can result in significant short-term losses. This message is for informational purposes and does not constitute personalized investment advice. Please contact your advisor with questions specific to your situation.\n\n[Leadership signature]',
        issues: [
          'Excellent transparency and emotional intelligence',
          'Could add media/social media guidance',
        ],
        explanation:
          'Acknowledging uncertainty and validating emotions builds trust during crises. Clients appreciate honesty over false confidence.',
        highlights: {
          added: [
            '"What We Don\'t Know" section with honest uncertainty',
            'Emotional validation ("If you\'re feeling anxious, that\'s understandable")',
            'Historical crisis context (2008, S&L, COVID)',
            'Explicit anti-panic message ("Should we sell everything? Absolutely not.")',
            'Rapidly evolving situation caveat at top',
            'Disclaimers about projections and uncertainty',
          ],
          improved: ['Emotional intelligence', 'Transparency', 'Trust building'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with multi-channel distribution and follow-up plan',
        prompt:
          '[Same as Stage 3, with additions:]\n\nAdd: 1) Guidance for advisors on handling inbound calls, 2) Social media/external communication guardrails, 3) Follow-up communication cadence, 4) Internal team coordination notes.',
        output:
          '═══════════════════════════════════════════════\nVERSION 1: CLIENT-FACING COMMUNICATION\n═══════════════════════════════════════════════\n\n[Same detailed client communication as Stage 3...]\n\n═══════════════════════════════════════════════\nVERSION 2: ADVISOR BRIEFING & CALL HANDLING\n═══════════════════════════════════════════════\n\nINTERNAL: ADVISOR CRISIS RESPONSE PROTOCOL\nMarch 15, 2026 | 4:30 PM ET\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚨 IMMEDIATE ACTIONS FOR ADVISORS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n1. ✅ Client communication sent at 4:30 PM (see above)\n2. 📞 **Expect high call volume tonight and tomorrow morning**\n3. 🔴 **Do NOT post about this on social media** (firm communication only)\n4. 📧 **Forward all media inquiries** to [Communications Director]\n5. ⏰ **Be available for emergency IC call**: Tonight 7 PM (Zoom link sent separately)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📞 HANDLING INBOUND CLIENT CALLS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**PRIORITY 1: Anxious clients wanting to sell**\n\nScript:\n"I completely understand your concern. Let me walk you through three things: 1) Your specific exposure (which is minimal), 2) What we know and don\'t know, 3) Why selling now would likely lock in losses rather than protect you."\n\nKey points:\n• Acknowledge emotion first, facts second\n• Walk through THEIR specific portfolio (use exposure analysis)\n• Remind them of 2020: those who sold in March missed the recovery\n• Offer to schedule a longer call tomorrow after IC meeting\n\n**PRIORITY 2: Clients asking if their deposits are safe**\n\nScript:\n"Your cash held at Fidelity (our custodian) is completely separate from the failed banks and is fully secure. If you have deposits at other institutions, FDIC insurance covers up to $250,000 per account type. Let\'s review your situation."\n\n**PRIORITY 3: Sophisticated clients asking for alpha opportunities**\n\nScript:\n"We\'re analyzing opportunities right now—credit spreads have widened, and quality names are getting sold off indiscriminately. But we\'re not rushing. We\'ll have a clearer view after tonight\'s IC call and will reach out tomorrow if we identify actionable opportunities in your portfolio."\n\n**PRIORITY 4: Clients asking "Is this 2008?"**\n\nScript:\n"I don\'t think so, and here\'s why: Banks today have 3x the capital ratios they had in 2008, mortgage underwriting is much tighter, and the issues we\'re seeing appear concentrated in a few poorly managed regional banks rather than systemic. That said, it\'s early, and we\'re monitoring closely."\n\n**RED FLAGS - Escalate to [Leadership]:**\n• Client threatening to liquidate entire portfolio immediately\n• Client mentioning deposits >$250K at a troubled institution\n• Media/press calling for comment\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔒 SOCIAL MEDIA & EXTERNAL COMMUNICATION GUARDRAILS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**DO NOT:**\n• Post about the crisis on personal social media\n• Speculate about additional bank failures\n• Share client communication externally\n• Respond to press inquiries (forward to Communications)\n• Make predictions about regulatory response\n\n**DO:**\n• Share official firm communications only\n• Direct clients to official firm website for updates\n• Refer media to Communications Director\n• Coordinate with team before making any public statements\n\n**WHY**: Loose talk during crises can:\n• Create regulatory issues\n• Spread misinformation\n• Increase client panic\n• Create compliance liabilities\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📅 FOLLOW-UP COMMUNICATION CADENCE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Tonight (March 15)**\n• 7:00 PM: Emergency Investment Committee call\n• 9:00 PM: Internal advisor debrief (post-IC)\n\n**Tomorrow (March 16)**\n• 12:00 PM: Client update #2 (email)\n• 3:00 PM: Advisor office hours (Q&A session)\n\n**Weekend (March 17-18)**\n• Monitoring only (no proactive communication unless major developments)\n• On-call team available for urgent client issues\n\n**Monday (March 19)**\n• 8:00 AM: Pre-market advisor briefing\n• 4:00 PM: End-of-day client update #3\n\n**Ongoing**\n• Daily updates while crisis is active\n• Transition to weekly updates once situation stabilizes\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n👥 INTERNAL TEAM COORDINATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**CIO Team**: Monitoring markets, credit spreads, regulatory announcements\n**Operations**: Verifying custodial relationships, cash sweep safety\n**Compliance**: Reviewing all external communications, media protocol\n**Technology**: Ensuring systems stable for high trading volume\n**Client Service**: Triaging inbound calls, flagging urgent issues\n\n**Communication Hub**: [Slack channel #crisis-response-2026]\n**Leadership On-Call**: [Names and phone numbers]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nRemember: Clients are looking to us for calm, competence, and clarity. We\'ve been through crises before (2020, 2008, dot-com). This is what we\'re here for. Let\'s support each other and our clients.\n\n—[Leadership]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        issues: [],
        explanation:
          'Crisis communication requires coordination across client-facing messaging, advisor enablement, and internal protocols. The client message is only one piece of a comprehensive response.',
        highlights: {
          added: [
            'Advisor call handling scripts (4 priority scenarios)',
            'Social media guardrails (DO/DO NOT lists)',
            'Escalation triggers (when to involve leadership)',
            'Follow-up communication cadence (daily during crisis)',
            'Internal team coordination (who does what)',
            'Slack channel for real-time coordination',
            'Multi-day timeline (tonight through Monday)',
          ],
          improved: ['Advisor enablement', 'Consistency', 'Coordination', 'Risk management'],
        },
        educationalNote:
          'AI can draft crisis communication quickly—but human judgment determines: 1) When to send (too early risks spreading panic; too late risks appearing unprepared), 2) Tone calibration (reassuring vs. dismissive), 3) What NOT to say (avoid speculation, predictions, guarantees), 4) Internal coordination (advisors need scripts before clients start calling). Speed matters in crises, but judgment matters more.',
      },
    ],
  },

  // SCENARIO 19: Client Inquiry Responses
  {
    id: 'inquiry-responses',
    title: 'Responding to Client Inquiries',
    description: 'Draft clear, accurate responses to common client service questions',
    category: 'communication',
    difficulty: 'beginner',
    clientProfile: {
      name: 'Robert Chen',
      portfolio: 'Individual brokerage account',
      situation: 'Question about a missing dividend payment',
      aum: '$850K',
    },
    learningObjectives: [
      'Learn to respond with empathy while gathering necessary information',
      'Understand importance of setting expectations for resolution timeline',
      'See how to balance speed with accuracy in client service',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Generic response without investigation',
        prompt: 'Respond to a client asking why their dividend payment is missing.',
        output:
          'Hi Robert,\n\nThank you for reaching out. We will look into the missing dividend and get back to you.\n\nBest regards,\nClient Service Team',
        issues: [
          'No acknowledgment of concern or inconvenience',
          'No timeline for response',
          'Didn\'t ask for key information (which security, when expected)',
          'Doesn\'t explain possible reasons or next steps',
          'Too generic - sounds like an auto-reply',
        ],
        explanation:
          'Generic responses increase client anxiety and often require multiple back-and-forth messages to gather basic information.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added empathy, information gathering, and timeline',
        prompt:
          'Respond to Robert Chen about a missing dividend. Include: 1) Acknowledgment of concern, 2) Questions to gather necessary info (which security, expected date), 3) Possible explanations, 4) Timeline for resolution, 5) Interim steps. Tone: Helpful, professional, reassuring. 200-250 words.',
        output:
          'Hi Robert,\n\nThank you for reaching out about the missing dividend payment. I understand how concerning it can be when an expected payment doesn\'t arrive as scheduled—let me help you get to the bottom of this.\n\nTo investigate effectively, I need a few details:\n\n1. Which security were you expecting a dividend from? (Company name or ticker symbol)\n2. When did you expect to receive this payment?\n3. Do you recall the approximate dividend amount?\n\nIn the meantime, here are the most common reasons dividend payments may be delayed or missing:\n\n• **Timing**: Dividends typically arrive 1-3 business days after the payment date. If the payment date was recent, it may still be in transit.\n• **Ex-dividend date**: You must own the stock before the ex-dividend date to receive the dividend. If you purchased recently, you may not be eligible for this payment.\n• **Corporate action**: Occasionally companies delay or cancel dividends due to financial conditions or restructuring.\n• **Account processing**: In rare cases, custodial delays can occur.\n\nOnce you provide the security details, I can:\n\n1. Verify the dividend payment schedule\n2. Confirm your eligibility (purchase date vs. ex-dividend date)\n3. Check with our custodian for any processing delays\n\nI\'ll have an answer for you within 24 hours of receiving this information. If this is urgent, feel free to call me directly at [phone number].\n\nThank you for your patience.\n\nBest regards,\n[Name]\nClient Service Team',
        issues: [
          'Good information gathering, but could investigate proactively first',
          'Might seem like passing work back to client',
          'Could check account before responding',
        ],
        explanation:
          'Asking clarifying questions while providing context reduces anxiety and sets clear expectations for resolution.',
        highlights: {
          added: [
            'Empathy statement ("I understand how concerning...")',
            'Specific information requests (security, date, amount)',
            'Common reasons for delays (timing, ex-div date, corporate actions)',
            '24-hour resolution timeline',
            'Direct phone number for urgency',
            'Clear next steps',
          ],
          improved: ['Client experience', 'Information gathering', 'Expectation setting'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Proactive investigation before responding',
        prompt:
          'Before responding, assume you\'ve checked Robert\'s account and found: He owns 500 shares of Johnson & Johnson (JNJ), purchased Feb 10. JNJ declared a $1.24/share dividend with ex-div date Feb 15, payment date March 10. Today is March 12. The dividend ($620) posted to his account yesterday (March 11). Respond with this information.',
        output:
          'Hi Robert,\n\nThank you for reaching out about your dividend payment. I completely understand the concern when an expected payment doesn\'t appear when anticipated—let me clarify what happened.\n\n✅ **Good news**: The dividend has been received and is now in your account.\n\nHere are the details:\n\n**Security**: Johnson & Johnson (JNJ) - 500 shares\n**Dividend**: $1.24 per share\n**Total payment**: $620.00\n**Payment date**: March 10, 2026 (Monday)\n**Posted to your account**: March 11, 2026 (yesterday)\n\nThe dividend posted one day after the official payment date, which is completely normal. Dividend payments typically arrive 1-3 business days after the company\'s stated payment date due to settlement and processing timelines.\n\nYou can see this payment reflected in:\n• Your account activity (under "Dividends & Interest")\n• Your updated cash balance (increased by $620)\n• Your March statement (when it\'s generated)\n\nIf you\'re not seeing the payment in your account view, try refreshing your browser or logging out and back in. Occasionally there\'s a slight display lag, but the funds are definitely there.\n\nIs there anything else I can help clarify about this dividend or your account?\n\nBest regards,\n[Name]\nClient Service Team\n\nP.S. For future reference, JNJ typically pays dividends quarterly. Your next payment should be expected around early June 2026.',
        issues: [
          'Excellent proactive response',
          'Could add screenshot or reference number',
          'Minor: could acknowledge if client checked before the posting date',
        ],
        explanation:
          'Proactively investigating before responding resolves issues in one interaction rather than multiple back-and-forth messages.',
        highlights: {
          added: [
            'Proactive investigation before asking questions',
            'Specific dividend details (JNJ, $1.24/share, $620 total)',
            'Explanation of timing (posted March 11, normal 1-day delay)',
            'Where to find the payment in account',
            'Troubleshooting tip (refresh browser)',
            'Forward-looking info (next dividend ~June)',
          ],
          improved: ['Efficiency', 'Client satisfaction', 'First-contact resolution'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with educational context and relationship building',
        prompt:
          '[Same investigation, with addition:]\n\nRobert is a relatively new client (6 months) and this is his first dividend inquiry. Add educational context about dividend timelines and position this as a learning opportunity.',
        output:
          'Hi Robert,\n\nThank you for reaching out about your dividend payment. I completely understand the concern when an expected payment doesn\'t appear when anticipated—especially if this is one of your first dividends with us. Let me clarify what happened and give you some context for future reference.\n\n✅ **Good news**: The dividend has been received and is now in your account.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 YOUR DIVIDEND DETAILS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Security**: Johnson & Johnson (JNJ) - 500 shares\n**Dividend**: $1.24 per share\n**Total payment**: $620.00\n**Payment date**: March 10, 2026 (Monday)\n**Posted to your account**: March 11, 2026 (yesterday)\n\nThe dividend posted one day after the official payment date, which is completely normal. Here\'s why:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📚 HOW DIVIDEND TIMELINES WORK\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDividend payments go through several steps:\n\n1. **Declaration Date**: Company announces the dividend (JNJ announced Feb 1)\n2. **Ex-Dividend Date**: Last day to buy the stock and still receive the dividend (Feb 15 for JNJ)\n3. **Record Date**: Company checks who owns the stock (Feb 17)\n4. **Payment Date**: Company sends payment to custodians (March 10)\n5. **Settlement**: Your account receives funds (March 11 - yesterday)\n\nThere\'s typically a 1-3 business day lag between the payment date and when funds appear in your account. This is normal settlement timing, not a delay or issue.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 WHERE TO FIND IT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nYou can see this payment:\n• **Account Activity** → Filter by "Dividends & Interest"\n• **Cash Balance** → Increased by $620 as of yesterday\n• **March Statement** → Will show when generated (around April 5)\n\nIf you\'re not seeing it, try refreshing your browser or logging out and back in—occasionally there\'s a slight display lag.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔮 LOOKING AHEAD\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nJNJ pays dividends quarterly. Your next payment should arrive around early June 2026. You\'ll see the dividend announcement about 4-6 weeks before the payment date.\n\nIf you\'d like, I can set up email alerts for upcoming dividend payments so you know what to expect. Just let me know!\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDoes this help clarify the timing? And is there anything else about dividends or your account I can explain?\n\nAlso, feel free to reach out anytime you have questions like this—we\'d much rather you ask than wonder. That\'s what we\'re here for.\n\nBest regards,\n[Name]\nClient Service Team\n[Phone] | [Email]',
        issues: [],
        explanation:
          'Turning a simple inquiry into an educational opportunity builds client confidence and reduces future inquiries. New clients especially benefit from context about how processes work.',
        highlights: {
          added: [
            'Recognition that Robert is a new client',
            'Educational section on dividend timeline (5 steps explained)',
            'Visual organization with section headers',
            'Forward-looking dividend timeline (next payment ~June)',
            'Offer to set up alerts',
            'Encouragement to ask questions anytime',
            'Direct contact info for follow-up',
          ],
          improved: ['Client education', 'Relationship building', 'Long-term inquiry reduction'],
        },
        educationalNote:
          'AI can draft responses quickly—but only a human knows: 1) Robert is a new client (needs more education), 2) This is his first dividend question (opportunity to build confidence), 3) Whether to offer proactive alerts (relationship building), 4) The right tone (educational vs. condescending). AI provides structure; humans provide context.',
      },
    ],
  },

  // SCENARIO 20: Document Preparation
  {
    id: 'document-prep',
    title: 'Document Preparation & Assembly',
    description: 'Prepare client-ready documents from internal data and templates',
    category: 'communication',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Thompson Family Trust',
      portfolio: 'Trust account',
      situation: 'Need annual trust accounting report for beneficiaries',
      aum: '$3.2M',
    },
    learningObjectives: [
      'Learn to translate complex data into client-friendly documents',
      'Understand importance of accuracy and compliance in formal documents',
      'See how to adapt templates for specific client circumstances',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Data dump without structure',
        prompt: 'Create an annual trust accounting report for the Thompson Family Trust.',
        output:
          'TRUST ACCOUNTING REPORT\nThompson Family Trust\n\nBeginning Value: $2,850,000\nEnding Value: $3,200,000\nGain: $350,000\n\nIncome received: $95,000\nExpenses: $28,000\nDistributions: $75,000\n\nSincerely,\n[Trustee]',
        issues: [
          'No context or explanation',
          'Missing required trust accounting elements',
          'No breakdown of income sources or expense categories',
          'Doesn\'t show principal vs. income allocation',
          'Missing beneficiary information',
          'No compliance language',
        ],
        explanation:
          'Trust accounting has specific legal requirements. A simple data dump doesn\'t meet fiduciary standards or help beneficiaries understand the trust activity.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added required accounting elements and structure',
        prompt:
          'Create a formal trust accounting report with: 1) Principal and income accounts separated, 2) Detailed receipts and disbursements, 3) Asset schedule, 4) Beneficiary distributions, 5) Trustee fees. Use proper trust accounting format. Period: Jan 1 - Dec 31, 2025.',
        output:
          'ANNUAL TRUST ACCOUNTING\nThompson Family Trust\nAccounting Period: January 1, 2025 - December 31, 2025\nPrepared by: [Trustee Name]\nDate: January 15, 2026\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nI. SUMMARY OF ACCOUNTS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPRINCIPAL ACCOUNT:\nBalance, January 1, 2025                    $2,550,000\nCapital gains realized                         $285,000\nPrincipal disbursements                       ($120,000)\nBalance, December 31, 2025                  $2,715,000\n\nINCOME ACCOUNT:\nBalance, January 1, 2025                       $15,000\nIncome received                                $95,000\nIncome disbursements                          ($28,000)\nDistributions to beneficiaries                ($75,000)\nBalance, December 31, 2025                      $7,000\n\nTOTAL TRUST VALUE, December 31, 2025       $2,722,000\n\n*Note: Total trust value includes undistributed income. Market value of investments as of 12/31/2025: $3,200,000 (includes unrealized gains of $478,000).\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nII. RECEIPTS - PRINCIPAL ACCOUNT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nCapital Gains (Realized):\n  Sale of ABC Corp stock                       $142,000\n  Sale of XYZ mutual fund                      $108,000\n  Short-term capital gains                      $35,000\n    Total Principal Receipts                   $285,000\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nIII. DISBURSEMENTS - PRINCIPAL ACCOUNT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDistribution to Emma Thompson (principal)      $50,000\nDistribution to Michael Thompson (principal)   $50,000\nLegal fees (trust administration)              $12,000\nAccounting fees (tax preparation)               $8,000\n    Total Principal Disbursements             $120,000\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nIV. RECEIPTS - INCOME ACCOUNT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDividend income                                $58,000\nInterest income (bonds)                        $32,000\nInterest income (cash/money market)             $5,000\n    Total Income Receipts                      $95,000\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nV. DISBURSEMENTS - INCOME ACCOUNT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTrustee fees                                   $18,000\nInvestment management fees                      $8,500\nCustodial fees                                  $1,500\n    Total Income Disbursements                 $28,000\n\nDistributions to Beneficiaries (Income):\n  Emma Thompson (50%)                          $37,500\n  Michael Thompson (50%)                       $37,500\n    Total Income Distributions                 $75,000\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nVI. SCHEDULE OF ASSETS (December 31, 2025)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nEQUITIES:\n  Large-cap US stocks                        $1,450,000\n  International stocks                          $425,000\n  Small/mid-cap stocks                          $215,000\n    Subtotal Equities                        $2,090,000\n\nFIXED INCOME:\n  Corporate bonds                               $685,000\n  Municipal bonds                               $285,000\n  Treasury bonds                                $120,000\n    Subtotal Fixed Income                    $1,090,000\n\nCASH & EQUIVALENTS:\n  Money market fund                              $20,000\n\nTOTAL ASSETS (Market Value)                  $3,200,000\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nVII. BENEFICIARY SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nEmma Thompson (Income & Principal Beneficiary):\n  Income distributions received                $37,500\n  Principal distributions received             $50,000\n    Total distributions                        $87,500\n\nMichael Thompson (Income & Principal Beneficiary):\n  Income distributions received                $37,500\n  Principal distributions received             $50,000\n    Total distributions                        $87,500\n\nTOTAL DISTRIBUTIONS TO BENEFICIARIES          $175,000',
        issues: [
          'Good structure, needs trustee attestation',
          'Should include performance context',
          'Missing explanation of significant transactions',
          'Needs disclosure about unrealized gains',
        ],
        explanation:
          'Proper trust accounting format separates principal and income, details all receipts and disbursements, and provides a complete asset schedule.',
        highlights: {
          added: [
            'Separate principal and income accounts',
            'Detailed receipts by category (dividends, interest, cap gains)',
            'Complete disbursements (fees, distributions)',
            'Asset schedule by category',
            'Beneficiary distribution summary',
            'Beginning and ending balances',
          ],
          improved: ['Fiduciary compliance', 'Transparency', 'Beneficiary clarity'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added attestations, disclosures, and explanatory notes',
        prompt:
          'Enhance the trust accounting with: 1) Trustee attestation, 2) Explanation of significant transactions, 3) Performance context, 4) Unrealized gain disclosure, 5) Right to object language, 6) Contact information.',
        output:
          'ANNUAL TRUST ACCOUNTING\nThompson Family Trust (Tax ID: XX-XXXXXXX)\nAccounting Period: January 1, 2025 - December 31, 2025\nPrepared by: [Trustee Name], Trustee\nDate: January 15, 2026\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nTRUSTEE\'S LETTER TO BENEFICIARIES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDear Emma and Michael,\n\nI am pleased to present the annual accounting for the Thompson Family Trust for the period ending December 31, 2025.\n\nThis was a successful year for the trust. The portfolio generated $95,000 in income (dividends and interest), which was distributed to you as income beneficiaries after payment of trust expenses. Additionally, the trust realized $285,000 in capital gains from strategic rebalancing, which was allocated to principal.\n\nSignificant transactions during the year included:\n\n• Sale of ABC Corp stock ($142,000 gain): This position had grown to over 12% of the portfolio, creating concentration risk. We sold half the position to rebalance.\n\n• Sale of XYZ mutual fund ($108,000 gain): We transitioned from this actively managed fund to lower-cost index funds, reducing annual expenses by approximately $4,000.\n\n• Principal distributions ($100,000 total): As authorized by the trust document and approved by both beneficiaries, we distributed $50,000 to each of you for the down payments on your respective homes.\n\nThe trust\'s market value grew from $2,850,000 (12/31/2024) to $3,200,000 (12/31/2025), representing a 12.3% total return. This compared favorably to a blended 60/40 benchmark, which returned 10.8% during the same period.\n\nPlease review the detailed accounting below. If you have any questions or wish to discuss any aspect of the trust administration, I am available to meet.\n\nSincerely,\n[Trustee Name]\nTrustee\n\n[Detailed accounting sections as in Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nVIII. PERFORMANCE CONTEXT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTotal Return (12/31/2024 - 12/31/2025):\n  Beginning market value                     $2,850,000\n  Ending market value                        $3,200,000\n  Plus: Distributions to beneficiaries         $175,000\n  Total value                                $3,375,000\n  Total return                                    12.3%\n\nBenchmark Comparison:\n  Thompson Trust                                  12.3%\n  60/40 Blended Benchmark*                        10.8%\n  S&P 500                                         14.2%\n  Bloomberg Aggregate Bond                         3.1%\n\n*60% S&P 500 / 40% Bloomberg Aggregate Bond\n\nThe trust\'s performance benefited from strong equity returns while maintaining a balanced allocation appropriate for a trust with both income and growth objectives.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nIX. UNREALIZED GAINS DISCLOSURE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAs of December 31, 2025, the trust holds unrealized capital gains of approximately $478,000. These gains are not reflected in the principal account receipts above (which includes only realized gains). \n\nUnrealized gains represent the difference between the current market value of investments and their original cost basis. While these gains increase the trust\'s market value, they are not distributed or taxed until the securities are sold.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nX. TRUSTEE ATTESTATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nI, [Trustee Name], as Trustee of the Thompson Family Trust, certify that:\n\n1. This accounting is true and accurate to the best of my knowledge.\n2. All transactions were made in accordance with the trust document and applicable law.\n3. All income and principal have been allocated in accordance with the trust terms.\n4. All investments were made consistent with the prudent investor standard.\n5. I have no personal interest in any transaction except as disclosed.\n\nSigned: ____________________________\n        [Trustee Name], Trustee\nDate:   January 15, 2026\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nXI. BENEFICIARY APPROVAL & RIGHT TO OBJECT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nBeneficiaries have the right to:\n• Review supporting documentation (statements, receipts, invoices)\n• Request clarification or additional information\n• Object to this accounting within 60 days of receipt\n\nIf you approve this accounting and have no objections, please sign and return the enclosed approval form within 60 days.\n\nIf you have questions or concerns, please contact:\n\n[Trustee Name]\n[Address]\n[Phone]\n[Email]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nXII. ATTACHMENTS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nA. Year-end custodial statement (12/31/2025)\nB. Schedule K-1 (Beneficiary\'s Share of Income) - 2025\nC. Receipts for trust expenses (legal, accounting, fees)\nD. Beneficiary approval form',
        issues: [
          'Excellent fiduciary documentation',
          'Could add investment policy statement reference',
          'Consider adding tax implications section',
        ],
        explanation:
          'Trustee attestation, right to object language, and performance context ensure the accounting meets fiduciary standards and beneficiary expectations.',
        highlights: {
          added: [
            'Trustee letter explaining significant transactions',
            'Performance context (12.3% vs 10.8% benchmark)',
            'Unrealized gains disclosure',
            'Trustee attestation with five certifications',
            'Right to object (60-day window)',
            'Contact information for questions',
            'List of attachments (statements, K-1s, receipts)',
          ],
          improved: ['Fiduciary protection', 'Transparency', 'Legal compliance'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with beneficiary-specific notes and education',
        prompt:
          '[Same content, with additions:]\n\nEmma is a first-time beneficiary who doesn\'t understand trust accounting. Michael is financially sophisticated. Add: 1) Simplified one-page summary for Emma, 2) Glossary of terms, 3) FAQ section.',
        output:
          '═══════════════════════════════════════════════\nVERSION 1: ONE-PAGE SUMMARY (For Emma)\n═══════════════════════════════════════════════\n\nTHOMPSON FAMILY TRUST - 2025 IN PLAIN ENGLISH\nFor: Emma Thompson\n\nHi Emma,\n\nTrust accounting can look complicated, but here\'s what happened in 2025 in simple terms:\n\n💰 **What You Received This Year**\n• Income distributions: $37,500 (your share of dividends and interest)\n• Principal distribution: $50,000 (for your home down payment)\n• Total to you: $87,500\n\n📊 **How the Trust Performed**\n• Trust value grew from $2.85M to $3.2M (+12.3%)\n• This is good! It beat the benchmark (comparison standard) by 1.5%\n• You and Michael each own 50% of the trust\n\n💡 **What This Means**\n• The trust earned $95,000 in income (dividends/interest)\n• After paying expenses ($28K), the remaining income was split between you and Michael\n• The trust also made smart investment moves that created $285K in gains (which stay in the trust for long-term growth)\n\n🤔 **Common Questions**\n\n**Why is the "principal account" different from "income account"?**\nIncome (dividends, interest) gets distributed to you annually. Principal (the main investment pool) stays in the trust and grows over time, though you can sometimes get principal distributions (like your $50K home down payment).\n\n**What are "unrealized gains"?**\nThe trust owns investments that have gone up in value but haven\'t been sold yet. When they\'re sold, those gains become "realized" and get added to the principal account.\n\n**Do I owe taxes on this?**\nYes, on the income distributions ($37,500). You\'ll receive a Schedule K-1 form for your tax return. The principal distribution ($50K) is generally not taxable to you. Your tax preparer can explain.\n\n**What happens next?**\nPlease review the full accounting (attached) and sign the approval form if everything looks good. If you have ANY questions, call me—I\'m happy to walk through anything that\'s confusing.\n\n— [Trustee]\n\n═══════════════════════════════════════════════\nVERSION 2: FULL FORMAL ACCOUNTING\n═══════════════════════════════════════════════\n\n[Complete detailed accounting as in Stage 3...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAPPENDIX A: GLOSSARY OF TRUST TERMS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Principal Account**: The main body of the trust; capital gains and principal receipts go here. Generally preserved for long-term growth.\n\n**Income Account**: Dividends, interest, and other income; typically distributed to income beneficiaries annually.\n\n**Realized Gains**: Profits from selling investments; allocated to principal.\n\n**Unrealized Gains**: Increase in value of investments still held; not taxed or distributed until sold.\n\n**Trustee Fees**: Compensation for administering the trust (managing investments, preparing accounting, tax filings, distributions).\n\n**Prudent Investor Standard**: Legal requirement that trustees invest responsibly, considering risk, return, and diversification.\n\n**Schedule K-1**: Tax form showing your share of trust income; you\'ll need this for your personal tax return.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nAPPENDIX B: FREQUENTLY ASKED QUESTIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Q: Why did the trust sell ABC Corp stock?**\nA: The position had grown to over 12% of the portfolio, creating too much concentration in a single stock. We sold half to reduce risk while maintaining some exposure.\n\n**Q: What are trustee fees based on?**\nA: Fees are calculated as 0.60% of average trust assets annually, consistent with industry standards for trusts of this size and complexity. This covers investment management, administration, accounting, and tax preparation.\n\n**Q: Can I request additional principal distributions?**\nA: Yes. The trust document allows discretionary principal distributions for health, education, maintenance, and support (HEMS standard). Requests should be made in writing with explanation of need.\n\n**Q: How is income vs. principal determined?**\nA: Dividends and interest are income. Capital gains (from selling investments) are principal. This follows the Uniform Principal and Income Act.\n\n**Q: What if I disagree with an investment decision?**\nA: You have the right to raise concerns. However, investment decisions are governed by the prudent investor standard, not beneficiary preference. I\'m happy to discuss the reasoning behind any decision.\n\n**Q: When will I receive next year\'s accounting?**\nA: Accountings are prepared annually, typically mid-January. You\'ll receive the 2026 accounting in January 2027.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        issues: [],
        explanation:
          'Different beneficiaries have different levels of financial sophistication. Providing a simplified summary alongside formal accounting ensures all beneficiaries can understand their trust.',
        highlights: {
          added: [
            'One-page plain-English summary for less sophisticated beneficiary',
            'Glossary defining trust terms',
            'FAQ addressing common questions',
            'Visual organization (emojis, sections)',
            'Tax implications explained simply',
            'Offer to walk through confusing items',
          ],
          improved: ['Accessibility', 'Beneficiary education', 'Relationship building'],
        },
        educationalNote:
          'AI can structure trust accounting documents with proper legal format and calculations. But only the trustee knows: 1) Emma is new to trusts and needs simplified explanation, 2) Michael is financially savvy and prefers detailed data, 3) The ABC Corp sale was contentious (Michael wanted to hold), 4) Emma will have questions about taxes (just got married, first year filing jointly). These nuances transform compliance documents into beneficiary communication.',
      },
    ],
  },

  // SCENARIO 21: Client Onboarding Communication
  {
    id: 'onboarding-communication',
    title: 'New Client Onboarding Sequence',
    description: 'Create welcoming, structured communication for new clients',
    category: 'communication',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Patricia Williams',
      portfolio: 'New client - rollover IRA',
      situation: 'Just signed on, transferring $1.2M from previous advisor',
      aum: '$1.2M',
    },
    learningObjectives: [
      'Learn to create structured onboarding that reduces client anxiety',
      'Understand the balance between process and personal welcome',
      'See how to set expectations and build confidence from day one',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Generic welcome without substance',
        prompt: 'Write a welcome email for a new client who just signed on.',
        output:
          'Dear Patricia,\n\nWelcome to our firm! We\'re excited to have you as a client. Your paperwork has been received and we\'ll be in touch soon about next steps.\n\nPlease let us know if you have any questions.\n\nBest regards,\nClient Service Team',
        issues: [
          'Too generic - sounds automated',
          'No specific next steps or timeline',
          'Doesn\'t acknowledge the transition from another advisor',
          'Missing critical onboarding information',
          'No personal welcome from actual team members',
          'Doesn\'t set expectations or reduce anxiety',
        ],
        explanation:
          'New clients are often anxious about transitions. Generic welcomes do nothing to build confidence or clarify what happens next.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added timeline, team intros, and next steps',
        prompt:
          'Write a comprehensive welcome email for Patricia Williams. Include: 1) Personal welcome from advisor and team, 2) What happens next (timeline), 3) Account transfer process, 4) First meeting details, 5) Resources/logins, 6) Contact information. Tone: Warm, professional, reassuring. 400-500 words.',
        output:
          'Welcome to [Firm Name]!\n\nDear Patricia,\n\nOn behalf of the entire team, I want to personally welcome you to [Firm Name]. We\'re honored that you\'ve chosen to trust us with your financial future, and we\'re committed to making this transition as smooth as possible.\n\nI know that changing advisors can feel uncertain—especially after working with someone for years. Please know that we\'ve guided hundreds of clients through this process, and we\'ll be with you every step of the way.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📅 WHAT HAPPENS NEXT (Your First 30 Days)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Week 1: Account Setup & Transfer Initiation**\n• Your account paperwork has been submitted to Fidelity (our custodian)\n• Account opening: 3-5 business days\n• Transfer request sent to your previous firm: initiated today\n• Expected timeline: 7-10 business days for assets to transfer\n\n**Week 2-3: Asset Transfer & Review**\n• Assets arrive in your new account\n• We\'ll review the transferred holdings\n• Prepare preliminary portfolio recommendations\n\n**Week 4: Your First Portfolio Review Meeting**\n• **Date**: [Scheduled date/time]\n• **Format**: In-person at our office (or Zoom if you prefer)\n• **Agenda**: Review current holdings, discuss investment strategy, answer all your questions\n• Calendar invitation sent separately\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n👥 YOUR TEAM\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**[Advisor Name]** - Lead Advisor\nYour primary point of contact for investment strategy, financial planning, and big-picture questions.\n📧 [email] | 📞 [phone]\n\n**[Service Associate Name]** - Client Service Associate\nHandles account administration, transfers, statements, and day-to-day questions.\n📧 [email] | 📞 [phone]\n\n**[Operations Contact]** - Operations Specialist\nEnsures smooth transfers, resolves any custodial issues, and handles technical account matters.\n📧 [email] | 📞 [phone]\n\nYou can reach any of us anytime. We typically respond within a few hours during business days.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔐 ACCESS & RESOURCES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nOnce your account is open (3-5 days), you\'ll receive:\n\n• **Client portal login** (view accounts, documents, statements 24/7)\n• **Mobile app access** (iOS/Android)\n• **Secure document sharing** (upload tax returns, estate docs, etc.)\n• **Performance reporting** (updated monthly)\n\nLogin instructions will be sent via email from our custodian, Fidelity.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 COMMON QUESTIONS DURING TRANSITIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Q: Will my assets be out of the market during the transfer?**\nA: For in-kind transfers (moving securities as-is), assets remain invested throughout. For cash transfers, there may be 1-3 days where funds are uninvested, which is normal.\n\n**Q: What if the market moves while we\'re transferring?**\nA: If you\'re concerned about market exposure during the transition, let me know. We can discuss timing or interim strategies.\n\n**Q: Can I make changes before we meet?**\nA: We generally recommend waiting until after our first meeting so we can discuss changes together. But if something is urgent, call me directly.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPatricia, thank you again for choosing us. This is the beginning of a long partnership, and we take that responsibility seriously. \n\nIf you have any questions—even small ones—before our first meeting, please don\'t hesitate to reach out. We\'re here.\n\nWarmly,\n\n[Advisor Name]\n[Title]\n[Firm Name]\n[Phone] | [Email]',
        issues: [
          'Good structure and detail',
          'Could add what to expect in first statement',
          'Should mention paperwork tracking',
          'Could add client resources (educational content)',
        ],
        explanation:
          'A structured welcome with clear timeline, team introductions, and proactive FAQ reduces new client anxiety and sets professional tone.',
        highlights: {
          added: [
            'Personal welcome acknowledging transition anxiety',
            '30-day timeline with weekly milestones',
            'Team introductions with specific roles',
            'Contact information for each team member',
            'Portal/app access information',
            'FAQ addressing common concerns',
            'First meeting date/agenda',
          ],
          improved: ['Clarity', 'Anxiety reduction', 'Professionalism'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added tracking, disclosures, and regulatory information',
        prompt:
          'Enhance the welcome email with: 1) Transfer tracking link/status updates, 2) Regulatory disclosures (ADV, CRS, privacy policy), 3) What to do if previous advisor contacts her, 4) Expectation-setting about communication frequency.',
        output:
          'Welcome to [Firm Name]!\n\nDear Patricia,\n\nOn behalf of the entire team, I want to personally welcome you to [Firm Name]. We\'re honored that you\'ve chosen to trust us with your financial future, and we\'re committed to making this transition as smooth as possible.\n\nI know that changing advisors can feel uncertain—especially after working with someone for years. Please know that we\'ve guided hundreds of clients through this process, and we\'ll be with you every step of the way.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📅 WHAT HAPPENS NEXT (Your First 30 Days)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same timeline section as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 TRACKING YOUR TRANSFER\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWe\'ll keep you updated throughout the transfer process:\n\n✅ **Transfer initiated**: Today (confirmation email sent)\n📧 **Account opening confirmation**: Expected within 3-5 days\n📧 **Assets in transit notification**: When previous firm releases assets\n📧 **Transfer complete**: When all assets arrive\n📧 **Portfolio review ready**: When we\'ve completed our analysis\n\nYou\'ll receive an email at each milestone. No need to wonder where things stand—we\'ll keep you informed.\n\n**Transfer tracking**: You can also check status anytime by:\n• Logging into the client portal (once account is open)\n• Calling [Service Associate] at [phone]\n• Emailing transfers@[firm].com\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n👥 YOUR TEAM\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same team section as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📞 HOW WE\'LL COMMUNICATE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHere\'s what to expect from us:\n\n**During Onboarding (First 30 days)**:\n• Proactive status updates at each transfer milestone\n• Quick responses to any questions (same-day during business hours)\n• Scheduled first meeting (Week 4)\n\n**Ongoing Communication**:\n• Quarterly portfolio reviews (meeting or written update)\n• Monthly statements (from Fidelity)\n• Market commentary (as significant events occur)\n• Annual planning meeting\n• Ad-hoc check-ins as needed\n\nYou\'re welcome to reach out anytime between scheduled touchpoints. We\'re here when you need us.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚖️ IF YOUR PREVIOUS ADVISOR CONTACTS YOU\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIt\'s not uncommon for previous advisors to reach out when they learn about a transfer. If this happens:\n\n• You\'re under no obligation to explain your decision\n• Simply let them know you\'ve made your choice and ask them to cooperate with the transfer\n• Forward any communications to us if you\'re uncomfortable\n• If they delay or obstruct the transfer, contact [Operations Specialist] immediately—we\'ll handle it\n\nTransfers are routine, and professional firms cooperate fully. If you experience any pressure or delay tactics, we\'re here to advocate for you.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔐 ACCESS & RESOURCES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same resources section as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 COMMON QUESTIONS DURING TRANSITIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same FAQ section as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 IMPORTANT REGULATORY DOCUMENTS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAs a new client, you\'ve received (or will receive separately) the following regulatory documents:\n\n• **Form ADV Part 2A** (Firm Brochure): Describes our services, fees, and potential conflicts of interest\n• **Form ADV Part 2B** (Brochure Supplement): Background on your advisor\n• **Form CRS** (Customer Relationship Summary): Simple overview of our relationship\n• **Privacy Policy**: How we protect your personal information\n\nThese documents are also available anytime in the client portal under "Regulatory Documents."\n\nYou\'re not required to re-sign these (you signed acknowledgment with your onboarding paperwork), but please review them and let me know if you have questions.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPatricia, thank you again for choosing us. This is the beginning of a long partnership, and we take that responsibility seriously.\n\nIf you have any questions—even small ones—before our first meeting, please don\'t hesitate to reach out. We\'re here.\n\nWarmly,\n\n[Advisor Name]\n[Title]\n[Firm Name]\n[Phone] | [Email]\n\nP.S. You should receive your account opening confirmation from Fidelity within 3-5 business days. If you don\'t see it by [date], please let [Service Associate] know.',
        issues: [
          'Comprehensive onboarding',
          'Could add educational resources',
          'Might consider welcome gift or personal touch',
        ],
        explanation:
          'Proactive transfer tracking, guidance on handling previous advisor, and regulatory transparency build trust and reduce friction.',
        highlights: {
          added: [
            'Transfer milestone notifications (5 touchpoints)',
            'Transfer tracking options (portal, phone, email)',
            'Communication frequency expectations',
            'Guidance on handling previous advisor contact',
            'Regulatory document list (ADV, CRS, privacy)',
            'P.S. with specific expectation (account confirmation by [date])',
          ],
          improved: ['Transparency', 'Regulatory compliance', 'Client confidence'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with personalization and welcome resources',
        prompt:
          '[Same content, with additions:]\n\nPatricia mentioned in her initial meeting that she\'s anxious about the transition because her previous advisor retired and she felt "abandoned." She also mentioned she loves gardening. Add: 1) Personal acknowledgment of her specific concern, 2) Welcome resource kit, 3) Small personal touch.',
        output:
          'Welcome to [Firm Name]!\n\nDear Patricia,\n\nOn behalf of the entire team, I want to personally welcome you to [Firm Name]. We\'re honored that you\'ve chosen to trust us with your financial future.\n\nI know this transition has been difficult. When you mentioned that your previous advisor\'s retirement left you feeling "abandoned," I completely understood. After 15 years of working with someone, it\'s natural to feel uncertain about starting over. Please know that we\'re not just here for the good times—we\'re committed to being your long-term partner through every season of your financial life. You won\'t be abandoned here.\n\nI\'m also enclosing a small token of appreciation (separate package)—a collection of heirloom seeds from a local nursery. I remember you mentioned your love of gardening, and I thought you might enjoy trying some new varieties this spring. Think of it as a fresh start in more ways than one.\n\nNow, let\'s talk about what happens next:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📅 WHAT HAPPENS NEXT (Your First 30 Days)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Complete timeline and tracking sections from Stage 3...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📚 YOUR WELCOME RESOURCE KIT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nTo help you get oriented, we\'ve prepared a Welcome Kit (arriving separately via mail):\n\n📘 **"Your First Year with [Firm Name]"** - A guide covering:\n   • What to expect at each stage\n   • How to read your statements\n   • Common questions answered\n   • Our investment philosophy explained simply\n\n📄 **Quick Reference Card** - Key contacts, portal login, and important phone numbers (keep this handy!)\n\n💳 **Client Portal Guide** - Step-by-step instructions for accessing your accounts online\n\n📊 **Sample Portfolio Review** - Example of what our quarterly reviews look like\n\n🎧 **Recommended Podcast Episodes** - Short, approachable financial planning topics (optional, for when you\'re gardening!)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💭 A NOTE ON TRANSITIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPatricia, I want to address the elephant in the room: I know you\'re wondering if we\'ll be here for you long-term, especially after the experience with your previous advisor\'s unexpected retirement.\n\nHere\'s what I can tell you:\n\n• I\'m 48 years old and have no plans to retire anytime soon. I love this work.\n• Our firm has a formal succession plan. If anything were to happen to me, [Name] would step in as your lead advisor. You\'d meet them within the first year so the relationship is already established.\n• We\'re a team-based practice. You\'re not dependent on one person—[Service Associate] and [Operations Specialist] know your situation and are here for continuity.\n• When the time comes (many years from now!) for me to transition toward retirement, you\'ll have years of notice and a thoughtful handoff plan.\n\nYou deserve stability and transparency. You\'ll have both here.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[All other sections from Stage 3...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nPatricia, thank you again for choosing us. I know you had options, and I don\'t take your trust lightly. This is the beginning of a long partnership, and we\'re committed to earning that trust every single day.\n\nIf you have any questions—even small ones—before our first meeting, please don\'t hesitate to reach out. And if you feel anxious about anything during the transition, call me directly. That\'s what I\'m here for.\n\nWarmly,\n\n[Advisor Name]\n[Title]\n[Firm Name]\n[Direct Phone] | [Email]\n\nP.S. I\'m looking forward to hearing about your garden this summer. And if those heirloom seeds don\'t germinate, let me know—I\'ll get you replacements. Fresh starts should actually start!',
        issues: [],
        explanation:
          'Personalization transforms a professional welcome into a relationship-building moment. Acknowledging Patricia\'s specific anxiety (abandonment) and her interests (gardening) shows attentiveness and care.',
        highlights: {
          added: [
            'Direct acknowledgment of her "abandoned" feeling',
            'Succession plan transparency (addressing her specific concern)',
            'Personal welcome gift (heirloom seeds) tied to her interests',
            'Welcome Resource Kit with 5 helpful materials',
            'Advisor age/retirement timeline disclosure (builds trust)',
            'Team-based continuity explanation',
            'Personal P.S. about her garden',
          ],
          improved: ['Personalization', 'Trust building', 'Anxiety mitigation', 'Relationship depth'],
        },
        educationalNote:
          'AI can draft comprehensive onboarding emails with proper structure, timelines, and disclosures. But only the advisor knows: 1) Patricia feels "abandoned" by her previous advisor\'s retirement (must address directly), 2) She loves gardening (opportunity for personal connection), 3) She needs reassurance about continuity (succession plan discussion), 4) She responds well to thoroughness (welcome kit will resonate). This human context transforms process into partnership.',
      },
    ],
  },

  // SCENARIO 22: Issue Resolution & Service Recovery
  {
    id: 'issue-resolution',
    title: 'Resolving Client Issues & Service Recovery',
    description: 'Handle client complaints and service failures professionally',
    category: 'communication',
    difficulty: 'advanced',
    clientProfile: {
      name: 'David Martinez',
      portfolio: 'Taxable brokerage account',
      situation: 'Frustrated about a trade execution error that caused tax consequences',
      aum: '$950K',
    },
    learningObjectives: [
      'Learn to acknowledge mistakes without being defensive',
      'Understand the balance between apology and solution',
      'See how service recovery can strengthen client relationships',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Defensive response without ownership',
        prompt: 'Respond to a client upset about a trade execution error.',
        output:
          'Dear David,\n\nWe received your message about the trade error. These things happen sometimes in the market. We\'ll look into it and get back to you.\n\nBest regards,\nClient Service',
        issues: [
          'Dismissive tone ("these things happen")',
          'No ownership or apology',
          'No acknowledgment of impact (tax consequences)',
          'No timeline for resolution',
          'Doesn\'t explain what happened or why',
          'No proposed solution or compensation',
        ],
        explanation:
          'Defensive responses make clients angrier. When mistakes happen, ownership and solutions matter more than excuses.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added ownership, explanation, and proposed solution',
        prompt:
          'Respond to David Martinez about a trade error. Context: We accidentally sold the wrong security (sold 200 shares of Stock A instead of Stock B), creating a $8,500 taxable gain he didn\'t intend. Include: 1) Clear apology and ownership, 2) Explanation of what happened, 3) Impact analysis (tax), 4) Proposed solution, 5) Prevention steps. Tone: Apologetic but professional, solution-focused. 400-500 words.',
        output:
          'Dear David,\n\nI want to start with an apology: we made a mistake on your recent trade, and I take full responsibility. I know this has created both frustration and an unintended tax consequence, and I\'m committed to making this right.\n\nLet me explain what happened, what it means for you, and how we\'re going to fix it.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nWHAT HAPPENED\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nOn January 12, you approved rebalancing your portfolio, which included selling 200 shares of TechCorp (Stock B) to reduce concentration risk. \n\nDue to an error in our trade entry system, we mistakenly sold 200 shares of InnovateCo (Stock A) instead. This error was not caught during our standard trade verification process—which is our responsibility, not yours.\n\nThe mistake was discovered on January 15 when you reviewed your monthly statement and brought it to our attention. We immediately halted further portfolio changes and began investigating.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nTHE IMPACT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nThis error created two problems:\n\n1. **Unintended tax consequence**: The sale of InnovateCo generated a $8,500 short-term capital gain (you\'ve held this position less than one year). At your marginal tax rate (35% federal + 5% state), this creates approximately $3,400 in unexpected tax liability.\n\n2. **Wrong position sold**: You still hold the TechCorp position we intended to reduce, leaving your portfolio more concentrated than planned.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nOUR PROPOSED SOLUTION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nHere\'s what we\'re proposing to make this right:\n\n**1. Full tax reimbursement**\nWe will credit your account for the full estimated tax impact of $3,400. This will be processed within 48 hours.\n\n**2. Correct the intended rebalancing**\nWe will execute the original intended trade (sell TechCorp) at no additional cost to you. Given current market prices, this can be done immediately or we can wait for a price recovery—your choice.\n\n**3. Repurchase InnovateCo (optional)**\nIf you\'d like to repurchase the InnovateCo shares that were sold in error, we will cover any price increase between the sale date and repurchase date (currently about $600). The decision is yours.\n\n**4. Fee waiver**\nWe\'re waiving your management fees for Q1 2026 ($2,375) as an additional acknowledgment of our error and your inconvenience.\n\n**Total compensation**: Approximately $6,400 ($3,400 tax + $2,375 fee waiver + up to $600 repurchase protection).\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nPREVENTION STEPS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWe\'ve already implemented the following to prevent this from happening again:\n\n• Enhanced trade verification: All rebalancing trades now require dual-review before execution\n• System update: Our trade entry system now requires ticker symbol confirmation before submission\n• Client notification: We now send same-day trade confirmations via email (previously sent only at month-end)\n• Team training: We\'ve reviewed this error with the entire operations team\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nNEXT STEPS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nI\'d like to speak with you directly to:\n1. Answer any questions about what happened\n2. Confirm the proposed solution works for you\n3. Discuss your preferences on the TechCorp sale timing and InnovateCo repurchase\n\nI\'ll call you tomorrow (January 16) at 10 AM. If that doesn\'t work, please let me know a better time.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDavid, I\'m genuinely sorry this happened. You trusted us to execute a straightforward rebalancing trade, and we failed. That\'s unacceptable, and I understand if you\'re questioning whether we\'re the right fit.\n\nWhat I can tell you is that we take full ownership, we\'re making you financially whole, and we\'ve taken concrete steps to ensure this doesn\'t happen again.\n\nI hope this proposed resolution demonstrates our commitment to making this right.\n\nSincerely,\n\n[Advisor Name]\n[Title]\n[Phone] | [Email]',
        issues: [
          'Strong ownership and solution',
          'Could add more empathy for emotional impact',
          'Should mention escalation path if not satisfied',
          'Could reference error-free track record to provide context',
        ],
        explanation:
          'Taking ownership, explaining clearly, and proposing comprehensive solutions turns service failures into opportunities to demonstrate commitment.',
        highlights: {
          added: [
            'Clear apology and ownership ("I take full responsibility")',
            'Detailed explanation of what happened (wrong ticker entered)',
            'Impact analysis ($8,500 gain, $3,400 tax)',
            'Comprehensive solution (tax reimbursement, fee waiver, repurchase protection)',
            'Prevention steps (4 specific changes implemented)',
            'Offer to discuss personally (call scheduled)',
            'Financial quantification ($6,400 total compensation)',
          ],
          improved: ['Accountability', 'Transparency', 'Solution quality'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added compliance elements and escalation options',
        prompt:
          'Enhance the resolution response with: 1) Acknowledgment of emotional impact, 2) Escalation path if unsatisfied, 3) Compliance/regulatory disclosure about error reporting, 4) Written confirmation of resolution terms.',
        output:
          'Dear David,\n\nI want to start with an apology: we made a mistake on your recent trade, and I take full responsibility. I know this has created both frustration and an unintended tax consequence. More than that, I know it\'s shaken your confidence in our ability to handle your finances carefully—and that may be the biggest impact of all.\n\nYou trusted us with something important, and we let you down. I\'m committed to making this right and earning back your trust.\n\nLet me explain what happened, what it means for you, and how we\'re going to fix it.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same "What Happened," "The Impact," and "Proposed Solution" sections as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCONFIRMATION OF RESOLUTION TERMS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIf you agree to this resolution, we will:\n\n1. ✅ Credit $3,400 to your account within 48 hours (tax reimbursement)\n2. ✅ Waive Q1 2026 management fees ($2,375) - reflected in March billing\n3. ✅ Execute corrected TechCorp sale per your instruction (no cost)\n4. ✅ Protect you from InnovateCo price increase if you choose to repurchase (up to $600)\n5. ✅ Provide written confirmation of all adjustments\n\nYou are not required to accept this resolution. If you prefer a different approach, I\'m open to discussing alternatives.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nREGULATORY DISCLOSURE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nWe are required to report this trade error to our custodian (Fidelity) and maintain documentation in our compliance records. This is standard procedure for operational errors and does not reflect negatively on you or your account.\n\nYou have the right to:\n• Request full documentation of the error and resolution\n• File a complaint with our compliance department\n• Contact FINRA or the SEC if you believe the issue is not resolved appropriately\n\nWe hope it doesn\'t come to that, but you should know your rights.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nIF YOU\'RE NOT SATISFIED\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIf this proposed resolution doesn\'t fully address your concerns, please let me know. You also have the option to escalate to:\n\n**[Managing Director Name]**\nManaging Director\n[Phone] | [Email]\n\nOr\n\n**[Compliance Officer Name]**\nChief Compliance Officer\n[Phone] | [Email]\n\nI want you to feel heard and fairly treated. If speaking with someone else would help, I encourage you to reach out.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nPREVENTION STEPS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[Same prevention steps as Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nNEXT STEPS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nI\'d like to speak with you directly to:\n1. Answer any questions about what happened\n2. Confirm the proposed solution works for you (or discuss alternatives)\n3. Discuss your preferences on TechCorp sale timing and InnovateCo repurchase\n\nI\'ll call you tomorrow (January 16) at 10 AM. If that doesn\'t work, please let me know a better time—or if you\'d prefer someone else to call you, I can arrange that.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nDavid, I\'m genuinely sorry this happened. You trusted us to execute a straightforward rebalancing trade, and we failed. That\'s unacceptable.\n\nI understand if you\'re frustrated, disappointed, or questioning whether we\'re the right firm for you. Those feelings are completely valid.\n\nWhat I can tell you is that in [X] years of managing client portfolios, this is the first trade execution error we\'ve made. That doesn\'t excuse it—but I want you to know this is not typical of how we operate.\n\nWe take full ownership, we\'re making you financially whole (and then some), and we\'ve taken concrete steps to ensure this doesn\'t happen again.\n\nI hope this proposed resolution demonstrates our commitment to making this right. But more than that, I hope we have the opportunity to show you—over time—that this was an isolated mistake, not a pattern.\n\nSincerely,\n\n[Advisor Name]\n[Title]\n[Direct Phone] | [Email]\n\nP.S. If you decide this error is a deal-breaker and you want to move your account elsewhere, I will ensure the transition is handled smoothly with zero friction. I hope it doesn\'t come to that, but I respect whatever decision you make.',
        issues: [
          'Excellent ownership and options',
          'Could add reference to insurance/E&O coverage',
          'Strong resolution framework',
        ],
        explanation:
          'Acknowledging emotional impact, providing escalation paths, and respecting client autonomy turns a complaint into an opportunity to demonstrate integrity.',
        highlights: {
          added: [
            'Emotional impact acknowledgment ("shaken your confidence")',
            'Written confirmation of resolution terms (5 specific items)',
            'Regulatory disclosure (FINRA/SEC rights)',
            'Escalation options (Managing Director, CCO)',
            'Track record context (first error in X years)',
            'Offer to facilitate transfer if client wants to leave',
            'Validation of client feelings ("completely valid")',
          ],
          improved: ['Empathy', 'Transparency', 'Client autonomy'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with internal coordination and follow-up plan',
        prompt:
          '[Same resolution, with additions:]\n\nDavid is a high-value client ($950K), referred by another client (Susan Chen), and has been with the firm for 2 years. Add: 1) Internal coordination notes for team, 2) Follow-up plan, 3) Relationship preservation strategy.',
        output:
          '═══════════════════════════════════════════════\nVERSION 1: CLIENT-FACING RESOLUTION LETTER\n═══════════════════════════════════════════════\n\n[Complete resolution letter from Stage 3...]\n\n═══════════════════════════════════════════════\nVERSION 2: INTERNAL TEAM COORDINATION\n═══════════════════════════════════════════════\n\nINTERNAL MEMO: Service Recovery Plan - David Martinez\nDate: January 15, 2026\nClassification: High Priority\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🚨 CLIENT PROFILE & CONTEXT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Client**: David Martinez\n**AUM**: $950,000\n**Tenure**: 2 years (client since January 2024)\n**Referral source**: Susan Chen (important relationship)\n**Risk level**: HIGH - Error involves unintended tax consequence; client is vocal and influential\n\n**Background**: David is a successful entrepreneur (sold his business in 2023, became client shortly after). He\'s analytical, detail-oriented, and expects precision. He has a low tolerance for errors—mentioned in initial meeting that he left his previous advisor due to "sloppiness."\n\n**Relationship status before error**: Strong. NPS score of 9/10 in last survey. Has referred two prospects (neither converted yet).\n\n**Risk if mishandled**: \n• Loss of $950K client\n• Potential impact on referral source (Susan Chen, $2.1M client)\n• Negative online review (David is active on social media)\n• Loss of future referrals\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 ERROR SUMMARY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**What happened**: Trade entry error - sold Stock A (InnovateCo) instead of Stock B (TechCorp)\n**Financial impact**: $8,500 unintended capital gain → ~$3,400 tax liability\n**Root cause**: Manual ticker entry error + failed verification process\n**Discovery**: Client caught it in monthly statement review (not us - bad)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💰 PROPOSED RESOLUTION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n1. Tax reimbursement: $3,400 (credit within 48 hours)\n2. Q1 fee waiver: $2,375\n3. Repurchase protection: Up to $600\n4. Corrected trade execution: No cost\n\n**Total cost to firm**: ~$6,400\n**Approval required**: Managing Director (approved)\n**E&O claim**: Filed (reference #2026-012)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📞 IMMEDIATE ACTION ITEMS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**[Advisor Name]** (Lead Advisor):\n• ✅ Resolution letter sent (January 15, 4:00 PM)\n• ⏳ Phone call scheduled: January 16, 10:00 AM\n• ⏳ Follow-up meeting: Schedule within 7 days for full debrief\n\n**[Operations Manager]**:\n• ✅ Trade error documented in compliance system\n• ✅ E&O claim filed with insurance carrier\n• ⏳ Process $3,400 credit by EOD January 16\n• ⏳ Update billing system for Q1 fee waiver\n• ⏳ Prepare written confirmation of all adjustments\n\n**[Compliance Officer]**:\n• ✅ Regulatory filing requirements reviewed (none required for this error type)\n• ⏳ Monitor resolution; be available if client escalates\n• ⏳ Review prevention measures implemented\n\n**[Managing Director]**:\n• ✅ Resolution plan approved\n• ⏳ Be available for escalation call if needed\n• ⏳ Reach out to Susan Chen (referral source) to proactively address (\"We had a service issue with David; wanted you to know we\'re handling it personally\")\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔄 FOLLOW-UP PLAN (90-Day Service Recovery)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Week 1**: \n• Resolution call (January 16)\n• Written confirmation of terms\n• Execute corrected trade per client direction\n\n**Week 2**:\n• In-person meeting to review resolution and rebuild trust\n• Walk through enhanced verification procedures\n• Solicit feedback on service improvements\n\n**Month 1** (February):\n• Personal check-in (not just transactional)\n• Ensure fee waiver reflected correctly\n• Monitor for any residual concerns\n\n**Month 2** (March):\n• Quarterly review meeting (scheduled early, not at standard interval)\n• Discuss tax planning to offset unintended gain if possible\n• Ask directly: "How are we doing? Has trust been restored?"\n\n**Month 3** (April):\n• Send handwritten note acknowledging his patience during resolution\n• Consider small gesture (e.g., book related to his interests, lunch)\n• Evaluate: Is relationship back on track?\n\n**Ongoing**:\n• Enhanced attention to detail on all David\'s transactions (double-check everything)\n• Same-day trade confirmations (new process for all clients, but especially important here)\n• Quarterly "How are we doing?" check-ins (in addition to standard reviews)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚠️ RED FLAGS TO MONITOR\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSigns the relationship may not recover:\n• Reduced responsiveness to outreach\n• Cancels follow-up meeting\n• Stops referring (he\'d mentioned two prospects recently)\n• Requests full portfolio documentation (prep for transfer)\n• Susan Chen (referral source) becomes distant\n\nIf any of these occur → Escalate to Managing Director immediately\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 LESSONS LEARNED (Firm-Wide)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n1. **Prevention measures implemented** (see client letter)\n2. **Service recovery playbook**: This case will become template for future errors\n3. **Cost of errors**: $6,400 direct cost + staff time + relationship risk = ~$10K total\n4. **Ownership culture**: Taking full responsibility (vs. deflecting) is the only path to preservation\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAll team members: Please treat this resolution as highest priority. David\'s response to how we handle this mistake will determine whether we keep a great client relationship or lose a $950K account.\n\nQuestions or concerns → Contact [Managing Director] immediately.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        issues: [],
        explanation:
          'Service recovery requires both client-facing resolution and internal coordination. The best external response fails without internal follow-through and relationship monitoring.',
        highlights: {
          added: [
            'Client context (entrepreneur, low error tolerance, referred by Susan Chen)',
            'Risk assessment (loss of client, referral source impact, online review)',
            '90-day follow-up plan (weekly → monthly check-ins)',
            'Internal action items for each team member',
            'Red flags to monitor (signs relationship not recovering)',
            'Proactive outreach to referral source',
            'E&O insurance claim documentation',
            'Cost analysis ($6,400 direct + time = ~$10K)',
          ],
          improved: ['Coordination', 'Relationship preservation', 'Systematic follow-up'],
        },
        educationalNote:
          'AI can draft apologetic, solution-oriented client responses. But only humans know: 1) David left his previous advisor over "sloppiness" (this error is his worst fear), 2) Susan Chen referred him (her trust is at stake too), 3) He mentioned two prospects recently (referrals at risk), 4) He\'s active on social media (online review risk), 5) His NPS was 9/10 before this (strong relationship worth saving). This context shapes not just the apology, but the entire 90-day recovery strategy.',
      },
    ],
  },

  // SCENARIO 23: Knowledge Base Article Creation
  {
    id: 'knowledge-base',
    title: 'Creating Internal Knowledge Base Articles',
    description: 'Document processes and answers for team efficiency and consistency',
    category: 'planning',
    difficulty: 'intermediate',
    clientProfile: {
      name: 'Internal Operations Team',
      portfolio: 'N/A - Internal resource',
      situation: 'Recurring question: "How do we handle IRA beneficiary changes for clients?"',
      aum: 'Firmwide',
    },
    learningObjectives: [
      'Learn to document processes clearly for team use',
      'Understand how to balance comprehensiveness with usability',
      'See how knowledge bases reduce repetitive questions and improve consistency',
    ],
    stages: [
      {
        stageId: 0,
        stageName: 'First Draft (Too Basic)',
        stageDescription: 'Minimal documentation without detail',
        prompt: 'Write a knowledge base article on how to process IRA beneficiary changes.',
        output:
          'IRA Beneficiary Changes\n\nTo process an IRA beneficiary change:\n1. Client requests beneficiary change\n2. Send them the form\n3. Process when received\n\nContact Operations if you have questions.',
        issues: [
          'No detail on which form',
          'No timeline expectations',
          'Missing compliance requirements',
          'No troubleshooting guidance',
          'Doesn\'t explain why steps matter',
          'No examples or edge cases',
        ],
        explanation:
          'Minimal documentation forces team members to ask repetitive questions, creating inefficiency and inconsistency.',
      },
      {
        stageId: 1,
        stageName: 'Adding Important Details',
        stageDescription: 'Added step-by-step process, forms, and timelines',
        prompt:
          'Create a comprehensive knowledge base article on IRA beneficiary changes. Include: 1) Step-by-step process, 2) Required forms, 3) Timeline, 4) Compliance requirements, 5) Common questions, 6) Where to get help. Audience: Client service team. Tone: Clear, instructional, practical. 500-600 words.',
        output:
          'KNOWLEDGE BASE ARTICLE\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 IRA Beneficiary Changes: Complete Process Guide\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Last Updated**: January 2026\n**Process Owner**: Operations Team\n**Applies To**: All IRA account types (Traditional, Roth, Inherited)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nOVERVIEW\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nIRA beneficiary designations are critical estate planning documents that supersede wills. Processing changes accurately and promptly is essential to ensure client wishes are honored.\n\nTypical reasons for changes:\n• Marriage or divorce\n• Birth of children/grandchildren\n• Death of previously named beneficiary\n• Estate planning updates\n• Trust establishment\n\n**Processing time**: 5-7 business days from receipt of complete, signed form.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nSTEP-BY-STEP PROCESS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**STEP 1: Client Requests Change**\n\nWhen a client requests a beneficiary change:\n\n1. **Ask why** (understanding context helps catch errors):\n   - Recent life event? (marriage, divorce, birth, death)\n   - Part of broader estate plan update?\n   - Working with estate attorney?\n\n2. **Determine account type**:\n   - Traditional IRA\n   - Roth IRA\n   - Inherited IRA (special rules apply)\n\n3. **Confirm current beneficiaries**:\n   - Pull current designation from custodian system\n   - Review with client to ensure accuracy\n   - Many clients don\'t remember current designations\n\n**STEP 2: Provide Correct Form**\n\n**Form location**: S:\\\\Operations\\\\Forms\\\\Beneficiary-Designations\\\n\n**Which form to use**:\n• **Fidelity IRAs**: Use Fidelity Change of Beneficiary form (Form #559)\n• **Schwab IRAs**: Use Schwab Beneficiary Designation form (Form #400)\n• **Multiple accounts**: Separate form required for EACH account\n\n**How to send**:\n• Email PDF with instructions (use template: "Beneficiary Change Instructions")\n• For complex situations: Schedule call to review before client completes\n• Include return instructions (DocuSign preferred, or mail to Operations)\n\n**STEP 3: Review Completed Form**\n\nWhen client returns form, verify:\n\n✅ **Completeness**:\n   - All beneficiary names spelled correctly\n   - Social Security Numbers or dates of birth included\n   - Addresses complete (required for some custodians)\n   - Percentages add to 100% (primary AND contingent)\n   - Client signature present and dated\n\n✅ **Common errors to catch**:\n   - Primary beneficiaries don\'t total 100%\n   - Contingent beneficiaries listed but no primary\n   - "Estate" listed (discouraged for tax reasons—flag for advisor review)\n   - Minor children named without trust (may require guardianship—flag for advisor)\n   - Ex-spouse still named (post-divorce—verify this is intentional)\n\n✅ **Compliance requirements**:\n   - **Married clients changing away from spouse**: May require spousal consent (check state law)\n   - **Community property states** (AZ, CA, ID, LA, NV, NM, TX, WA, WI): Extra scrutiny\n   - **Trust as beneficiary**: Verify trust exists and obtain copy for file\n\n**STEP 4: Submit to Custodian**\n\nSubmission method:\n• **Fidelity**: Upload via Wealthscape (preferred) or fax to 800-XXX-XXXX\n• **Schwab**: Upload via Schwab Alliance or mail to [address]\n\nAfter submission:\n• Log in tracking spreadsheet (S:\\\\Operations\\\\Beneficiary-Changes-Log.xlsx)\n• Expected confirmation: 3-5 business days\n• If no confirmation within 5 days → Follow up with custodian\n\n**STEP 5: Confirm with Client**\n\nOnce custodian confirms:\n\n1. Send confirmation email to client (template: "Beneficiary Change Confirmed")\n2. Include copy of updated beneficiary designation\n3. Remind client to:\n   - Store copy with estate planning documents\n   - Review beneficiaries every 3-5 years or after major life events\n   - Coordinate with estate attorney if applicable\n\n4. Update client\'s permanent file\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCOMMON QUESTIONS & TROUBLESHOOTING\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Q: Client wants to name a trust as beneficiary. Is this OK?**\nA: Yes, but requires advisor review. Trust must be valid and irrevocable. Obtain copy of trust for file. Custodian may require certification of trust.\n\n**Q: Client is divorcing and wants to remove spouse immediately. Can we rush this?**\nA: Yes. Mark as "urgent" and call custodian directly (don\'t just submit online). Some states automatically revoke ex-spouse as beneficiary upon divorce, but don\'t rely on this—process change ASAP.\n\n**Q: Client wants to name minor children. Red flag?**\nA: Yes. Minors cannot inherit IRAs directly (requires court-appointed guardian). Recommend client establish trust or name adult custodian under UTMA. Loop in advisor for estate planning discussion.\n\n**Q: What if percentages don\'t add to 100%?**\nA: Form will be rejected. Contact client to correct before submitting. Don\'t guess their intent.\n\n**Q: Client named "estate" as beneficiary. Is this bad?**\nA: Generally yes (estate beneficiaries lose stretch IRA benefits). Flag for advisor review before processing. Advisor should discuss with client and/or their estate attorney.\n\n**Q: How often should beneficiaries be reviewed?**\nA: Best practice: Every 3-5 years, and after major life events (marriage, divorce, birth, death). Include reminder in annual client review meetings.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nWHEN TO ESCALATE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nEscalate to Operations Manager if:\n• Spousal consent required and client refuses\n• Trust named as beneficiary (requires attorney review)\n• Client requests change while in nursing home/diminished capacity\n• Custodian rejects form multiple times\n• Urgent change needed (death/divorce) but custodian not responsive\n\nEscalate to Compliance if:\n• Suspected elder financial abuse\n• Undue influence concerns (caregiver named as sole beneficiary)\n• Client pressured by family member present during call\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nRELATED RESOURCES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n• KB Article: "Trust as IRA Beneficiary: Requirements"\n• KB Article: "Spousal Consent Rules by State"\n• Template: "Beneficiary Change Client Email"\n• Template: "Beneficiary Confirmation Email"\n• Form Library: S:\\\\Operations\\\\Forms\\\\Beneficiary-Designations\\\n• Video Tutorial: "How to Submit Beneficiary Changes" (3 min)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nCONTACT\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nQuestions about this process?\n**Operations Team**: operations@firm.com | Ext. 405\n**After-hours urgent**: Call Operations Manager at [cell number]',
        issues: [
          'Good comprehensive detail',
          'Could add visual flowchart',
          'Should include compliance approval date',
          'Could add examples of completed forms',
        ],
        explanation:
          'Detailed process documentation with forms, timelines, and troubleshooting reduces errors and repetitive questions.',
        highlights: {
          added: [
            'Complete 5-step process with sub-steps',
            'Form numbers and locations',
            'Completeness checklist (what to verify)',
            'Common errors to catch (percentages, ex-spouse, minors)',
            'Compliance requirements (spousal consent, community property)',
            'Timeline expectations (5-7 days, 3-5 confirmation)',
            '7-question FAQ with specific answers',
            'Escalation criteria (when to involve manager/compliance)',
            'Related resources and templates',
          ],
          improved: ['Team efficiency', 'Consistency', 'Error prevention'],
        },
      },
      {
        stageId: 2,
        stageName: 'Making it Safe & Professional',
        stageDescription: 'Added visual aids, compliance approval, and version control',
        prompt:
          'Enhance the knowledge base article with: 1) Visual process flowchart (described in text), 2) Compliance review/approval, 3) Version control, 4) Example scenarios, 5) Quick reference checklist.',
        output:
          'KNOWLEDGE BASE ARTICLE\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 IRA Beneficiary Changes: Complete Process Guide\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Article ID**: KB-OPS-015\n**Version**: 2.3\n**Last Updated**: January 15, 2026\n**Next Review Date**: July 15, 2026\n**Process Owner**: Operations Team\n**Compliance Approval**: ✅ Approved by [CCO Name] on January 10, 2026\n**Applies To**: All IRA account types (Traditional, Roth, Inherited)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚡ QUICK START CHECKLIST (30-Second Version)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nFor experienced team members who just need a reminder:\n\n☐ Understand reason for change (life event, estate plan, etc.)\n☐ Pull current beneficiaries from custodian system\n☐ Send correct form for custodian (Fidelity #559 or Schwab #400)\n☐ Review returned form for completeness (names, SSNs, percentages = 100%)\n☐ Check for red flags (minor children, estate, ex-spouse, trust)\n☐ Submit to custodian (Wealthscape or Schwab Alliance preferred)\n☐ Log in tracking spreadsheet\n☐ Confirm with client when processed (3-5 days)\n☐ Update permanent file\n\n⚠️ **Red flags**: Minor beneficiaries, "estate" designation, trust beneficiary, post-divorce spouse removal → Escalate to advisor\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 VISUAL PROCESS FLOW\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n```\n┌─────────────────────────────────────────────────────┐\n│ 1. CLIENT REQUESTS BENEFICIARY CHANGE              │\n│    Ask: Why? Which account? Current beneficiaries? │\n└────────────────────┬────────────────────────────────┘\n                     ▼\n┌─────────────────────────────────────────────────────┐\n│ 2. SEND APPROPRIATE FORM                            │\n│    Fidelity → Form #559                             │\n│    Schwab → Form #400                               │\n│    (Email with instructions)                        │\n└────────────────────┬────────────────────────────────┘\n                     ▼\n┌─────────────────────────────────────────────────────┐\n│ 3. CLIENT COMPLETES & RETURNS FORM                  │\n│    (DocuSign, email, or mail)                       │\n└────────────────────┬────────────────────────────────┘\n                     ▼\n┌─────────────────────────────────────────────────────┐\n│ 4. REVIEW FOR COMPLETENESS & ERRORS                 │\n│    ✓ Names, SSNs, addresses                         │\n│    ✓ Percentages = 100%                             │\n│    ✓ Signature & date                               │\n│    ⚠️  Check red flags (see checklist)             │\n└────────────────────┬────────────────────────────────┘\n                     ▼\n            ┌────────┴────────┐\n            │ Red flags?      │\n            └────┬───────┬────┘\n                 │ YES   │ NO\n                 ▼       ▼\n       ┌─────────────────────────────┐\n       │ Escalate to Advisor/        │\n       │ Compliance as needed        │\n       └─────────┬───────────────────┘\n                 ▼\n┌─────────────────────────────────────────────────────┐\n│ 5. SUBMIT TO CUSTODIAN                              │\n│    Log in tracking spreadsheet                      │\n│    Expect confirmation: 3-5 days                    │\n└────────────────────┬────────────────────────────────┘\n                     ▼\n┌─────────────────────────────────────────────────────┐\n│ 6. CONFIRM WITH CLIENT                              │\n│    Send confirmation email + copy of designation    │\n│    Update permanent file                            │\n│    Done! ✅                                         │\n└─────────────────────────────────────────────────────┘\n```\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n[Complete detailed process from Stage 2...]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📝 EXAMPLE SCENARIOS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**SCENARIO 1: Simple Change (Low Risk)**\n\n*Client*: Jane Smith, age 62, married\n*Request*: "I want to update my IRA beneficiaries. My husband is currently 100% primary, but I\'d like to add my two adult children as 50/50 contingent beneficiaries."\n\n✅ **How to handle**:\n1. Confirm husband remains 100% primary (no spousal consent needed)\n2. Send Fidelity Form #559\n3. Review for: Names spelled correctly, percentages add to 100%, signature present\n4. Process normally\n5. No escalation needed\n\n**Processing time**: Standard (5-7 days)\n\n---\n\n**SCENARIO 2: Divorce Situation (Medium Risk)**\n\n*Client*: Tom Johnson, age 58, recently divorced\n*Request*: "My ex-wife is still listed as my IRA beneficiary. I want to change it to my kids immediately."\n\n⚠️ **How to handle**:\n1. **Urgency**: Mark as high priority (ex-spouse should be removed ASAP)\n2. Verify divorce is final (ask for decree date)\n3. Send form with expedited instructions\n4. When received, call custodian to process urgently (don\'t just submit online)\n5. Some states auto-revoke ex-spouse, but process change anyway\n6. **Advisor involvement**: Loop in advisor to discuss overall estate plan (will, trusts, etc. may also need updates)\n\n**Processing time**: Expedited (2-3 days)\n\n---\n\n**SCENARIO 3: Trust as Beneficiary (High Risk/Complexity)**\n\n*Client*: Sarah Williams, age 70, working with estate attorney\n*Request*: "My attorney recommended I name my revocable living trust as the beneficiary of my IRA."\n\n🚨 **How to handle**:\n1. **STOP**: Do not process without advisor review\n2. Request copy of trust document\n3. Escalate to advisor immediately\n4. Advisor should:\n   - Review trust provisions (see-through trust requirements)\n   - Discuss with client\'s estate attorney\n   - Understand tax implications\n5. If approved, custodian may require:\n   - Full trust document OR\n   - Certification of trust\n   - EIN for trust\n6. Extra processing time required (trust review)\n\n**Processing time**: Extended (10-14 days minimum)\n**Escalation**: Mandatory advisor review\n\n---\n\n**SCENARIO 4: Red Flag - Minor Children (High Risk)**\n\n*Client*: Maria Garcia, age 45, single parent\n*Request*: "I want my two kids (ages 8 and 12) to be equal beneficiaries of my IRA."\n\n🚨 **How to handle**:\n1. **STOP**: Minors cannot inherit IRAs directly\n2. Explain problem: "Minors require court-appointed guardian to manage inherited IRAs. This creates legal complications and expenses."\n3. **Solutions to discuss** (involve advisor):\n   - Establish trust for children\n   - Name adult custodian under UTMA/UGMA\n   - Name trusted adult as beneficiary with understanding they\'ll manage for kids\n4. Do NOT process until alternative solution in place\n5. Recommend estate planning attorney consultation\n\n**Processing time**: On hold until resolution\n**Escalation**: Mandatory advisor + possible attorney referral\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nVERSION HISTORY\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**v2.3** (January 2026):\n• Added visual process flowchart\n• Added quick start checklist\n• Added 4 example scenarios\n• Updated form numbers (Fidelity changed from #558 to #559)\n• Compliance review: January 10, 2026\n\n**v2.2** (July 2025):\n• Added state-by-state spousal consent requirements\n• Added Schwab-specific instructions (new custodian)\n• Updated escalation criteria\n\n**v2.1** (January 2025):\n• Initial comprehensive version\n• Replaced previous 1-page quick guide\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📞 FEEDBACK & UPDATES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nThis article is reviewed every 6 months. If you notice:\n• Outdated information\n• Missing scenarios\n• Confusing instructions\n• Process changes not reflected\n\nPlease submit update request:\n📧 kb-updates@firm.com\n\nYour feedback keeps our knowledge base accurate and useful!\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        issues: [
          'Excellent comprehensive resource',
          'Could add video walkthrough link',
          'Consider adding printable PDF version',
        ],
        explanation:
          'Adding visual flows, quick reference checklists, example scenarios, and version control makes knowledge bases more useful and maintainable.',
        highlights: {
          added: [
            'Quick start checklist (9-item, 30-second version)',
            'Visual process flowchart (ASCII diagram)',
            'Four detailed example scenarios (simple to complex)',
            'Version history with change log',
            'Compliance approval date and reviewer',
            'Next review date (6-month cycle)',
            'Feedback mechanism for updates',
            'Article ID for easy reference',
          ],
          improved: ['Usability', 'Visual learning', 'Compliance documentation', 'Maintainability'],
        },
      },
      {
        stageId: 3,
        stageName: 'Polished & Ready to Send',
        stageDescription: 'Final version with search optimization and accessibility',
        prompt:
          '[Same content, with additions:]\n\nOptimize for: 1) Searchability (tags, keywords), 2) Accessibility (screen readers), 3) Mobile viewing, 4) Print-friendliness, 5) Training integration.',
        output:
          'KNOWLEDGE BASE ARTICLE\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 IRA Beneficiary Changes: Complete Process Guide\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Article ID**: KB-OPS-015\n**Version**: 2.3\n**Last Updated**: January 15, 2026\n**Next Review Date**: July 15, 2026\n**Process Owner**: Operations Team\n**Compliance Approval**: ✅ Approved by [CCO Name] on January 10, 2026\n\n**Search Tags**: #beneficiary #IRA #forms #estate-planning #Fidelity #Schwab #divorce #trust #minors #spousal-consent\n\n**Related Topics**: Estate Planning, Account Administration, Compliance, Forms\n\n**Difficulty Level**: ⭐⭐ Intermediate (requires attention to detail and compliance knowledge)\n\n**Estimated Reading Time**: 8 minutes (Quick Start: 30 seconds)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📱 VIEWING OPTIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n• **Full Article** (this page) - Comprehensive reference with all details\n• **[Quick Start Checklist]** - Print-friendly 1-page version\n• **[Video Walkthrough]** - 5-minute tutorial (closed captions available)\n• **[Mobile App]** - Optimized for phone viewing\n• **[Audio Version]** - Listen while working (8 min)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎯 WHO SHOULD USE THIS ARTICLE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Primary Audience**: Client Service Associates, Operations Team\n**Also Useful For**: Advisors (understanding process), New Hires (training), Compliance (audit reference)\n\n**Prerequisites**: \n• Basic understanding of IRA accounts\n• Access to custodian systems (Fidelity Wealthscape, Schwab Alliance)\n• Familiarity with firm\'s form library\n\n**Training Integration**: This article is part of:\n• New Hire Training Module 3: "Account Administration"\n• Annual Compliance Refresher (Operations track)\n• Operations Certification Program (required reading)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n[All content from Stage 3, including Quick Start, Visual Flow, Detailed Process, Examples, etc.]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n♿ ACCESSIBILITY FEATURES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nThis article includes:\n• **Alt text** for all diagrams and flowcharts\n• **Screen reader compatibility** (semantic HTML structure)\n• **High contrast mode** available (toggle in settings)\n• **Adjustable text size** (use browser zoom or KB settings)\n• **Keyboard navigation** (use Tab key to navigate sections)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔍 RELATED SEARCHES\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nUsers who viewed this article also searched for:\n• "How to handle inherited IRA beneficiary designations"\n• "Spousal consent requirements by state"\n• "Trust as IRA beneficiary: see-through trust rules"\n• "Minor beneficiaries: UTMA vs. trust"\n• "Beneficiary designation mistakes to avoid"\n• "IRA beneficiary vs. will: which takes precedence?"\n\n[Browse all related articles →]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 ARTICLE STATS & FEEDBACK\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Usage**: 127 views this month | 1,450 total views\n**Helpfulness**: ⭐⭐⭐⭐⭐ (4.8/5 based on 34 ratings)\n\n**Was this article helpful?**\n[👍 Yes] [👎 No] [💬 Leave Comment]\n\n**Common feedback**:\n• "Visual flowchart is super helpful!" (12 mentions)\n• "Example scenarios make it clear" (8 mentions)\n• "Would love more state-specific guidance" (3 mentions)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📥 DOWNLOAD & PRINT OPTIONS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Full Article**:\n• [Download PDF] (print-optimized, 6 pages)\n• [Download Word Doc] (editable for notes)\n• [Email to Yourself]\n\n**Quick References**:\n• [Print Quick Start Checklist] (1 page)\n• [Print Flowchart Only] (1 page)\n• [Print Red Flags Reference Card] (wallet size)\n\n**Bulk Downloads**:\n• [Download All Beneficiary Articles] (ZIP, 15 articles)\n• [Download Operations Manual] (complete section)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎓 TRAINING & CERTIFICATION\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**For New Hires**:\nThis article is part of Operations Training Module 3. After reading:\n• [Take Quiz] (10 questions, 80% to pass)\n• [Practice Exercise] (sample beneficiary forms to review)\n• [Schedule Shadowing] (observe 2-3 real cases)\n\n**For Experienced Staff**:\n• [Annual Refresher Quiz] (5 questions, compliance requirement)\n• [What\'s New in v2.3?] (2-minute update summary)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔔 STAY UPDATED\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Subscribe to updates**:\n☐ Email me when this article is updated\n☐ Notify me of related new articles\n☐ Include in my weekly KB digest\n\n**Article history**: \n• Last updated 5 days ago\n• Next scheduled review: July 2026\n• [View all versions]\n• [See what changed in latest version]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💬 QUESTIONS OR FEEDBACK?\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n**Can\'t find what you need?**\n• [Ask the Knowledge Base] (AI-powered search)\n• [Submit Question to Operations Team]\n• [Request New Article Topic]\n\n**Found an error or outdated info?**\n• [Report Issue] (priority response)\n• [Suggest Improvement]\n\n**Want to contribute?**\n• [Propose Article Update] (subject matter experts welcome)\n• [Share Your Process Improvement]\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📧 Article maintained by Operations Team | Last verified: January 15, 2026\n\n[Back to Knowledge Base Home] | [Browse Operations Articles] | [Search All Topics]',
        issues: [],
        explanation:
          'Optimizing knowledge base articles for search, accessibility, mobile viewing, and integration with training programs maximizes their utility and adoption across the organization.',
        highlights: {
          added: [
            'Search tags for discoverability (#beneficiary, #IRA, #divorce, etc.)',
            'Multiple viewing options (video, audio, mobile app)',
            'Accessibility features (screen reader, high contrast, keyboard nav)',
            'Training integration (quiz, practice exercises, shadowing)',
            'Download options (PDF, Word, quick reference cards)',
            'Article stats (127 views/month, 4.8/5 rating)',
            'Subscription options (email updates, weekly digest)',
            'Related searches section',
            'User feedback mechanism (helpful/not helpful)',
            'Difficulty level indicator (⭐⭐ Intermediate)',
          ],
          improved: [
            'Discoverability',
            'Accessibility',
            'Training effectiveness',
            'User engagement',
            'Continuous improvement',
          ],
        },
        educationalNote:
          'AI can draft comprehensive knowledge base articles with clear processes, examples, and troubleshooting. But ongoing maintenance requires: 1) User feedback (what\'s confusing?), 2) Process changes (new custodian, new regulations), 3) Training integration (quiz questions, certification requirements), 4) Analytics (which articles are most viewed? Which get "not helpful" ratings?), 5) Continuous improvement culture. Knowledge bases are living documents, not one-time projects. AI drafts; humans maintain.',
      },
    ],
  },
]
