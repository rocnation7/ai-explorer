// Tool-based workflows for different roles
// These go beyond chat and showcase specific AI tools in action

export interface ToolWorkflow {
  tool: string
  title: string
  difficulty: "Basic" | "Intermediate" | "Advanced"
  description: string
  workflow: string
  value: string
  toolCategory: string
}

export const toolWorkflowsByRole: Record<string, ToolWorkflow[]> = {
  "wealth-advisor": [
    {
      tool: "Claude for Excel",
      title: "Portfolio Performance Analysis at Scale",
      difficulty: "Intermediate",
      description: "Analyze hundreds of client portfolios simultaneously, identifying trends, outliers, and opportunities across your entire book.",
      workflow: "Upload client performance data → Use Claude formulas to identify underperformers → Generate personalized action items → Export to CRM",
      value: "Review 200+ portfolios in the time it used to take for 20. Identify rebalancing opportunities and proactive outreach candidates automatically.",
      toolCategory: "Spreadsheet Intelligence"
    },
    {
      tool: "NotebookLM",
      title: "Client Knowledge Base",
      difficulty: "Basic",
      description: "Create a searchable, AI-powered knowledge base for each high-value client from years of meeting notes, emails, and interactions.",
      workflow: "Upload client documents → Ask questions about preferences, concerns, history → Generate pre-meeting briefings → Create audio summary for commute",
      value: "Instant recall of client details without searching through years of files. Never miss mentioning a grandchild's college plans or their views on ESG.",
      toolCategory: "Research & Synthesis"
    },
    {
      tool: "Gamma",
      title: "Quarterly Review Presentations",
      difficulty: "Basic",
      description: "Transform portfolio data and market commentary into beautiful, client-ready presentation decks in minutes.",
      workflow: "Paste key portfolio stats and talking points → Select presentation template → Review and customize → Export branded deck",
      value: "Create 10 customized client presentations in an hour instead of a day. Maintain consistent quality while personalizing content.",
      toolCategory: "Presentation Creation"
    },
    {
      tool: "Perplexity Pro",
      title: "Real-Time Client Question Research",
      difficulty: "Basic",
      description: "Answer unexpected client questions about current events, market news, or policy changes with cited, current information.",
      workflow: "Client asks about breaking news → Search with Perplexity during/after call → Get cited answers → Follow up with informed response",
      value: "Respond to 'what do you think about X?' questions with confidence and sources, not 'let me get back to you' delays.",
      toolCategory: "Real-Time Research"
    },
  ],
  "ria-principal": [
    {
      tool: "Claude Projects",
      title: "Firm-Wide AI Assistant",
      difficulty: "Intermediate",
      description: "Create a custom AI workspace pre-loaded with your investment philosophy, compliance guidelines, and communication templates.",
      workflow: "Upload firm documents (ADV, investment policy, style guides) → Train team on Claude Projects → Advisors generate compliant content → Review output quality",
      value: "Ensure every advisor produces work that sounds like your firm. New advisors get up to speed 3x faster with institutional knowledge at their fingertips.",
      toolCategory: "Contextual Workspaces"
    },
    {
      tool: "Hebbia",
      title: "Due Diligence at Scale",
      difficulty: "Advanced",
      description: "Analyze hundreds of fund documents, manager questionnaires, and due diligence reports to identify patterns, red flags, and opportunities.",
      workflow: "Upload fund documents and DDQs → Ask cross-document questions → Extract structured data → Generate comparison reports",
      value: "Complete manager due diligence reviews 10x faster. Identify fee discrepancies or strategy drift across 50+ managers simultaneously.",
      toolCategory: "Document Intelligence"
    },
    {
      tool: "Claude for Excel",
      title: "Practice Management Dashboard",
      difficulty: "Advanced",
      description: "Build dynamic dashboards that analyze advisor productivity, client engagement, and revenue metrics with AI-powered insights.",
      workflow: "Connect CRM/portfolio data → Use Claude formulas for advanced analysis → Create visualizations → Set up automated alerts",
      value: "Identify at-risk client relationships before they leave. Spot productivity patterns and coaching opportunities across your advisor team.",
      toolCategory: "Spreadsheet Intelligence"
    },
    {
      tool: "ChatGPT Advanced Data Analysis",
      title: "Client Segmentation Strategy",
      difficulty: "Intermediate",
      description: "Upload your entire client database and use Python-powered analysis to discover meaningful segments and service model opportunities.",
      workflow: "Export anonymized client data → Upload to ChatGPT → Request clustering analysis → Review segment characteristics → Design service models",
      value: "Discover that your 'mass affluent' segment actually contains 3 distinct groups with different needs. Build targeted service models that improve retention.",
      toolCategory: "Data Analysis"
    },
  ],
  "cio": [
    {
      tool: "NotebookLM",
      title: "Investment Committee Knowledge Base",
      difficulty: "Intermediate",
      description: "Convert years of IC notes, research memos, and decisions into a searchable, queryable institutional memory.",
      workflow: "Upload IC meeting notes and decisions → Create audio briefings before meetings → Query past discussions on similar topics → Generate position papers",
      value: "New committee members get instant context on past decisions. 'Why did we avoid X in 2021?' answered in seconds, not hours of archive diving.",
      toolCategory: "Research & Synthesis"
    },
    {
      tool: "Elicit",
      title: "Academic Research for Investment Themes",
      difficulty: "Advanced",
      description: "Synthesize academic literature on emerging investment topics like climate risk, behavioral finance, or factor investing.",
      workflow: "Define research question → Elicit searches academic papers → Extract key findings → Synthesize into thought leadership",
      value: "Support positioning papers with academic rigor. Find the 15 most relevant papers on a topic from thousands, not by manually searching.",
      toolCategory: "Academic Research"
    },
    {
      tool: "Perplexity Pro",
      title: "Market Event Response",
      difficulty: "Basic",
      description: "Rapidly research breaking market events with cited sources to craft timely, informed commentary.",
      workflow: "Market event occurs → Research with Perplexity → Review cited sources → Draft response → Distribute to advisors",
      value: "Deliver informed commentary within hours of major events, not days. Stand out as the firm that responds quickly with substance.",
      toolCategory: "Real-Time Research"
    },
    {
      tool: "Claude Projects",
      title: "Research Translation Engine",
      difficulty: "Intermediate",
      description: "Upload institutional research and automatically generate advisor-facing and client-facing versions with appropriate language and depth.",
      workflow: "Upload research report → Request multiple audience versions → Review and refine → Distribute appropriate versions",
      value: "One research piece becomes three audience-appropriate versions. Advisors get talking points, clients get accessible insights, IC gets full analysis.",
      toolCategory: "Contextual Workspaces"
    },
  ],
  "client-service": [
    {
      tool: "Claude Projects",
      title: "Client Service Knowledge Base",
      difficulty: "Basic",
      description: "Create a custom AI assistant trained on your firm's policies, procedures, and common client scenarios for instant support.",
      workflow: "Upload service procedures and FAQs → Team queries for answers → AI provides consistent responses → Update knowledge base monthly",
      value: "New team members handle complex questions from day one. Reduce 'let me check with my manager' delays by 80%.",
      toolCategory: "Contextual Workspaces"
    },
    {
      tool: "Claude for Excel",
      title: "Account Opening Automation",
      difficulty: "Intermediate",
      description: "Streamline account opening paperwork by using AI to pre-fill forms, check for errors, and flag missing information.",
      workflow: "Client provides information → Claude formulas validate and pre-fill documents → Flag inconsistencies → Generate completed package",
      value: "Reduce account opening errors by 90%. Process new accounts in 20 minutes instead of 2 hours.",
      toolCategory: "Spreadsheet Intelligence"
    },
    {
      tool: "NotebookLM",
      title: "Complex Client Situation Briefings",
      difficulty: "Intermediate",
      description: "For high-touch service situations, create comprehensive briefings from all client interactions, notes, and history.",
      workflow: "Upload client interaction history → Generate situation summary → Identify key sensitivities → Create service action plan",
      value: "Handle escalated situations with full context. 'This client called 3 times last month about X' is automatically surfaced.",
      toolCategory: "Research & Synthesis"
    },
    {
      tool: "ChatGPT Advanced Data Analysis",
      title: "Service Quality Analysis",
      difficulty: "Advanced",
      description: "Analyze service metrics, response times, and client satisfaction data to identify improvement opportunities.",
      workflow: "Export service data → Upload to ChatGPT → Request trend analysis → Identify bottlenecks → Generate improvement recommendations",
      value: "Discover that Tuesday afternoons have 3x longer response times. Find patterns in service issues before they become problems.",
      toolCategory: "Data Analysis"
    },
  ],
}
