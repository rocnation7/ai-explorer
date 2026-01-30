// Simulator Type Definitions

export type ScenarioCategory = 'communication' | 'analysis' | 'planning'
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'
export type StageStatus = 'pending' | 'current' | 'completed'

export interface ClientProfile {
  name: string
  portfolio: string
  situation: string
  aum?: string
}

export interface DiffHighlight {
  added: string[]
  improved: string[]
  removed?: string[]
}

export interface StageOutput {
  stageId: number
  stageName: string
  stageDescription: string
  prompt: string
  output: string
  issues: string[]
  highlights?: DiffHighlight
  explanation: string
  educationalNote?: string
}

export interface Scenario {
  id: string
  title: string
  description: string
  category: ScenarioCategory
  difficulty: DifficultyLevel
  clientProfile: ClientProfile
  stages: StageOutput[]
  learningObjectives: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: 'progress' | 'milestone' | 'mastery'
  unlocked?: boolean
}

export interface UserProgress {
  scenariosCompleted: string[]
  currentStreak: number
  achievementsUnlocked: string[]
  totalStagesCompleted: number
  lastCompletedDate?: string
}

export interface StageInfo {
  id: number
  name: string
  displayName: string
  description: string
  color: string
  iconName: string
  educationalConcept: string
}

export interface EducationalContent {
  stageId: number
  concept: string
  explanation: string
  why: string
  watchFor: string[]
  analogy?: string
}
