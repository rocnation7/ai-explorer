"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Shield,
  Info,
  Copy,
  Check,
} from 'lucide-react'
import { OutputDiffViewer } from '@/components/output-diff-viewer'
import {
  showAchievementToast,
  showStageCompletionConfetti,
  AchievementToaster,
  useProgressToast,
} from '@/components/achievement-toast'
import {
  initializeProgress,
  saveProgress,
  updateProgressOnStageCompletion,
  getNewlyUnlockedAchievements,
  getScenarioProgress,
} from '@/lib/achievements'
import { simulatorScenarios } from '@/data/simulator-scenarios'
import { stageInfo, educationalContent, keyTakeaways } from '@/lib/simulator-education-content'
import type { UserProgress } from '@/types/simulator'

const stageIcons = {
  AlertCircle,
  Sparkles,
  Shield,
  CheckCircle2,
}

export function WorkflowSimulator() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null)
  const [currentStage, setCurrentStage] = useState(0)
  const [showOutput, setShowOutput] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [progress, setProgress] = useState<UserProgress>(initializeProgress())
  const [copiedOutput, setCopiedOutput] = useState(false)
  const { showProgressToast } = useProgressToast()

  // Initialize progress from localStorage on mount
  useEffect(() => {
    setProgress(initializeProgress())
  }, [])

  const scenario = simulatorScenarios.find((s) => s.id === selectedScenario)
  const currentStageData = scenario?.stages[currentStage]
  const previousStageData = currentStage > 0 ? scenario?.stages[currentStage - 1] : undefined
  const currentStageInfo = stageInfo[currentStage]
  const currentEducation = educationalContent[currentStage]

  const handleScenarioSelect = (scenarioId: string) => {
    setSelectedScenario(scenarioId)
    setCurrentStage(0)
    setShowOutput(false)
    setCopiedOutput(false)
  }

  const handleGenerateOutput = () => {
    setGenerating(true)
    setShowOutput(false)

    // Simulate AI generation delay for realism
    setTimeout(() => {
      setGenerating(false)
      setShowOutput(true)

      // Show confetti for stage completion
      showStageCompletionConfetti(currentStage)

      // Update progress
      if (scenario) {
        const updatedProgress = updateProgressOnStageCompletion(
          progress,
          currentStage,
          scenario.id
        )

        // Check for new achievements
        const newAchievements = getNewlyUnlockedAchievements(updatedProgress)
        newAchievements.forEach((achievement) => {
          setTimeout(() => showAchievementToast(achievement), 500)
        })

        setProgress(updatedProgress)
        saveProgress(updatedProgress)

        // Show progress toast
        const progressPercent = getScenarioProgress(currentStage)
        showProgressToast(`Stage ${currentStage + 1} Complete`, progressPercent)
      }
    }, 1500)
  }

  const handleNextStage = () => {
    if (currentStage < 3) {
      setCurrentStage(currentStage + 1)
      setShowOutput(false)
      setCopiedOutput(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePreviousStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1)
      setShowOutput(false)
      setCopiedOutput(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleStartOver = () => {
    setCurrentStage(0)
    setShowOutput(false)
    setCopiedOutput(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCopyOutput = async () => {
    if (currentStageData) {
      await navigator.clipboard.writeText(currentStageData.output)
      setCopiedOutput(true)
      setTimeout(() => setCopiedOutput(false), 2000)
    }
  }

  const StageIcon = currentStageInfo ? stageIcons[currentStageInfo.iconName as keyof typeof stageIcons] : AlertCircle

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#f8f7f2] via-white to-[#f5f5f0] py-16">
        <AchievementToaster />

        <div className="max-w-6xl mx-auto px-6">
          {/* Scenario Selection */}
          {!selectedScenario ? (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#e5e5dc] rounded-full shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#b8945f]" />
                  <span className="text-sm text-[#4a4a4a] font-medium">
                    Choose Your Scenario
                  </span>
                </div>
                <h2 className="text-3xl font-serif text-[#1a1f36]">
                  See AI Workflows in Action
                </h2>
                <p className="text-lg text-[#6a6a6a] max-w-2xl mx-auto">
                  Select a scenario to see how AI transforms from basic output to
                  advisor-ready communication through four stages of refinement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {simulatorScenarios.map((s) => {
                  const isCompleted = progress.scenariosCompleted.includes(s.id)

                  return (
                    <button
                      key={s.id}
                      onClick={() => handleScenarioSelect(s.id)}
                      className="group relative bg-white border-2 border-[#e5e5dc] rounded-lg p-6 text-left hover:border-[#b8945f] hover:shadow-lg transition-all duration-300"
                    >
                      {isCompleted && (
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          </div>
                        </div>
                      )}

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            s.category === 'communication' ? 'bg-blue-100 text-blue-600' :
                            s.category === 'analysis' ? 'bg-purple-100 text-purple-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            {s.category === 'communication' ? '💬' :
                             s.category === 'analysis' ? '📊' : '📋'}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-[#1a1f36] text-lg group-hover:text-[#b8945f] transition-colors">
                              {s.title}
                            </h3>
                            <p className="text-sm text-[#6a6a6a] mt-1">{s.description}</p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-[#e5e5dc] space-y-2">
                          <div className="flex items-center gap-2 text-xs text-[#4a4a4a]">
                            <span className="font-medium">{s.clientProfile.name}</span>
                            <span className="text-[#6a6a6a]">•</span>
                            <span>{s.clientProfile.aum}</span>
                          </div>
                          <p className="text-xs text-[#6a6a6a]">
                            {s.clientProfile.situation}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            s.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                            s.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {s.difficulty}
                          </span>
                          <span className="text-xs text-[#6a6a6a]">
                            {s.category}
                          </span>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-[#b8945f]" />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Back to scenarios */}
              <button
                onClick={() => setSelectedScenario(null)}
                className="text-sm text-[#6a6a6a] hover:text-[#b8945f] transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Scenarios
              </button>

              {/* Scenario Header */}
              <div className="bg-white border border-[#e5e5dc] rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-serif text-[#1a1f36] mb-2">
                      {scenario?.title}
                    </h2>
                    <p className="text-[#6a6a6a] mb-4">{scenario?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-3 py-1 bg-[#f5f5f0] rounded-full text-sm text-[#4a4a4a]">
                        <span className="font-medium">{scenario?.clientProfile.name}</span>
                      </div>
                      <div className="px-3 py-1 bg-[#f5f5f0] rounded-full text-sm text-[#4a4a4a]">
                        {scenario?.clientProfile.aum}
                      </div>
                      <div className="px-3 py-1 bg-[#f5f5f0] rounded-full text-sm text-[#4a4a4a]">
                        {scenario?.clientProfile.portfolio}
                      </div>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#b8945f]">
                      {getScenarioProgress(currentStage)}%
                    </div>
                    <div className="text-xs text-[#6a6a6a]">Complete</div>
                  </div>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="bg-white border border-[#e5e5dc] rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  {stageInfo.map((stage, index) => {
                    const Icon = stageIcons[stage.iconName as keyof typeof stageIcons]
                    const isCompleted = index < currentStage
                    const isCurrent = index === currentStage
                    const isUpcoming = index > currentStage

                    return (
                      <div key={stage.id} className="flex items-center flex-1">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center gap-2">
                              <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                                  isCompleted
                                    ? 'bg-[#b8945f] border-[#b8945f] text-white'
                                    : isCurrent
                                    ? 'bg-white border-[#b8945f] text-[#b8945f] animate-pulse-glow'
                                    : 'bg-[#f5f5f0] border-[#e5e5dc] text-[#6a6a6a]'
                                }`}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="w-6 h-6" />
                                ) : (
                                  <Icon className="w-6 h-6" />
                                )}
                              </div>
                              <div className="text-center">
                                <div
                                  className={`text-xs font-medium ${
                                    isCurrent ? 'text-[#b8945f]' : 'text-[#6a6a6a]'
                                  }`}
                                >
                                  Stage {index + 1}
                                </div>
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="max-w-xs">
                              <div className="font-semibold mb-1">{stage.displayName}</div>
                              <div className="text-xs">{stage.description}</div>
                            </div>
                          </TooltipContent>
                        </Tooltip>

                        {index < 3 && (
                          <div className="flex-1 h-1 mx-2">
                            <div
                              className={`h-full rounded transition-all duration-500 ${
                                isCompleted ? 'bg-[#b8945f]' : 'bg-[#e5e5dc]'
                              }`}
                            />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Current Stage Info */}
              {currentStageInfo && (
                <div
                  className={`border-l-4 rounded-lg p-6 ${
                    currentStage === 0
                      ? 'bg-red-50 border-red-500'
                      : currentStage === 1
                      ? 'bg-yellow-50 border-yellow-500'
                      : currentStage === 2
                      ? 'bg-blue-50 border-blue-500'
                      : 'bg-green-50 border-green-500'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        currentStage === 0
                          ? 'bg-red-100 text-red-600'
                          : currentStage === 1
                          ? 'bg-yellow-100 text-yellow-600'
                          : currentStage === 2
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-green-100 text-green-600'
                      }`}
                    >
                      <StageIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-[#1a1f36]">
                          {currentStageInfo.displayName}
                        </h3>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-[#6a6a6a] hover:text-[#b8945f] cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-sm">
                            <div className="space-y-2">
                              <div className="font-semibold">{currentEducation?.concept}</div>
                              <div className="text-xs">{currentEducation?.explanation}</div>
                              {currentEducation?.analogy && (
                                <div className="text-xs italic border-t border-white/20 pt-2">
                                  💡 {currentEducation.analogy}
                                </div>
                              )}
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      <p className="text-[#4a4a4a] mb-3">{currentStageData?.stageDescription}</p>
                      {currentEducation && (
                        <div className="text-sm text-[#6a6a6a] bg-white/50 rounded p-3">
                          <div className="font-medium mb-1">Why this matters:</div>
                          <div>{currentEducation.why}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Prompt Display */}
              {currentStageData && (
                <div className="bg-white border border-[#e5e5dc] rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-[#1a1f36]">
                      The Prompt (What We Ask AI)
                    </h4>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 text-[#6a6a6a] hover:text-[#b8945f]" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <div className="text-xs">
                          The prompt is the instruction you give to AI. Notice how it gets more
                          specific and detailed at each stage.
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="bg-[#1a1f36] text-gray-300 font-mono text-sm p-4 rounded border border-[#2a3f5f] whitespace-pre-wrap">
                    {currentStageData.prompt}
                  </div>
                </div>
              )}

              {/* Generate Button */}
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleGenerateOutput}
                  disabled={generating}
                  className="group gap-2 min-w-[200px]"
                >
                  {generating ? (
                    <>
                      <Sparkles className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Output
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>

              {/* Output Display with Diff */}
              {showOutput && currentStageData && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-[#1a1f36]">AI-Generated Output</h4>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyOutput}
                      className="gap-2"
                    >
                      {copiedOutput ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Output
                        </>
                      )}
                    </Button>
                  </div>

                  <OutputDiffViewer
                    currentOutput={currentStageData.output}
                    previousOutput={previousStageData?.output}
                    highlights={currentStageData.highlights}
                    stageId={currentStage}
                  />

                  {/* Issues to Address */}
                  {currentStageData.issues.length > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h5 className="font-semibold text-yellow-900 mb-3">
                        {currentStage === 3 ? 'Final Review Notes:' : 'Issues to Address:'}
                      </h5>
                      <ul className="space-y-2">
                        {currentStageData.issues.map((issue, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-yellow-800"
                          >
                            <span className="text-yellow-600 mt-0.5">•</span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Educational Note */}
                  {currentStageData.educationalNote && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-900">
                          {currentStageData.educationalNote}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={handlePreviousStage}
                      disabled={currentStage === 0}
                      className="gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous Stage
                    </Button>

                    {currentStage < 3 ? (
                      <Button variant="primary" onClick={handleNextStage} className="gap-2 group">
                        Next Stage
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    ) : (
                      <Button variant="primary" onClick={handleStartOver} className="gap-2">
                        Start Over
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Key Takeaways (shown after completing all stages) */}
              {currentStage === 3 && showOutput && (
                <div className="bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] rounded-lg p-8 text-white mt-8">
                  <h3 className="text-2xl font-serif mb-6">Key Takeaways</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {keyTakeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#b8945f] flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold mb-1">{takeaway.title}</div>
                          <div className="text-sm text-gray-300">{takeaway.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}
