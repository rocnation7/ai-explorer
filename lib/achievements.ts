import type { Achievement, UserProgress } from '@/types/simulator'

// Achievement definitions
export const achievements: Achievement[] = [
  // Progress achievements
  {
    id: 'first-refinement',
    title: 'First Refinement Complete!',
    description: 'You made it to Stage 2 and saw how context improves AI output.',
    icon: '✨',
    category: 'progress',
  },
  {
    id: 'compliance-champion',
    title: 'Compliance Champion',
    description: 'You understand why guardrails matter in financial communications.',
    icon: '🛡️',
    category: 'progress',
  },
  {
    id: 'advisor-ready',
    title: 'Advisor-Ready Master',
    description: 'You completed a full 4-stage workflow to perfection.',
    icon: '🎯',
    category: 'progress',
  },

  // Milestone achievements
  {
    id: 'first-scenario',
    title: 'Journey Begins',
    description: 'Completed your first AI workflow scenario.',
    icon: '🚀',
    category: 'milestone',
  },
  {
    id: 'three-scenarios',
    title: 'Getting the Hang of It',
    description: 'Completed 3 different scenarios. You are learning fast!',
    icon: '📈',
    category: 'milestone',
  },
  {
    id: 'all-scenarios',
    title: 'Workflow Expert',
    description: 'Completed all available scenarios. You have seen it all!',
    icon: '👑',
    category: 'milestone',
  },

  // Mastery achievements
  {
    id: 'detail-oriented',
    title: 'Detail Oriented',
    description: 'Clicked on educational tooltips to deepen your understanding.',
    icon: '🔍',
    category: 'mastery',
  },
  {
    id: 'diff-master',
    title: 'Diff Detective',
    description: 'Used the diff viewer to analyze what changed between stages.',
    icon: '🕵️',
    category: 'mastery',
  },
  {
    id: 'copy-cat',
    title: 'Ready to Apply',
    description: 'Copied output to use in your own work. Taking action!',
    icon: '📋',
    category: 'mastery',
  },
]

// Check if an achievement should be unlocked
export function checkAchievement(
  achievementId: string,
  progress: UserProgress
): boolean {
  switch (achievementId) {
    case 'first-refinement':
      return progress.totalStagesCompleted >= 2

    case 'compliance-champion':
      return progress.totalStagesCompleted >= 3

    case 'advisor-ready':
      return progress.totalStagesCompleted >= 4

    case 'first-scenario':
      return progress.scenariosCompleted.length >= 1

    case 'three-scenarios':
      return progress.scenariosCompleted.length >= 3

    case 'all-scenarios':
      // Assuming 8 total scenarios (2 existing + 6 new)
      return progress.scenariosCompleted.length >= 8

    default:
      return false
  }
}

// Get newly unlocked achievements
export function getNewlyUnlockedAchievements(
  progress: UserProgress
): Achievement[] {
  const newlyUnlocked: Achievement[] = []

  achievements.forEach((achievement) => {
    const isUnlocked = checkAchievement(achievement.id, progress)
    const wasAlreadyUnlocked = progress.achievementsUnlocked.includes(achievement.id)

    if (isUnlocked && !wasAlreadyUnlocked) {
      newlyUnlocked.push(achievement)
    }
  })

  return newlyUnlocked
}

// Get all unlocked achievements for display
export function getUnlockedAchievements(progress: UserProgress): Achievement[] {
  return achievements.filter((achievement) =>
    progress.achievementsUnlocked.includes(achievement.id)
  )
}

// Initialize user progress from localStorage or create new
export function initializeProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return createEmptyProgress()
  }

  try {
    const stored = localStorage.getItem('simulator-progress')
    if (stored) {
      return JSON.parse(stored) as UserProgress
    }
  } catch (error) {
    console.error('Failed to load progress:', error)
  }

  return createEmptyProgress()
}

// Save progress to localStorage
export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem('simulator-progress', JSON.stringify(progress))
  } catch (error) {
    console.error('Failed to save progress:', error)
  }
}

// Create empty progress object
function createEmptyProgress(): UserProgress {
  return {
    scenariosCompleted: [],
    currentStreak: 0,
    achievementsUnlocked: [],
    totalStagesCompleted: 0,
  }
}

// Update progress when a stage is completed
export function updateProgressOnStageCompletion(
  progress: UserProgress,
  stageId: number,
  scenarioId: string
): UserProgress {
  const updated: UserProgress = {
    ...progress,
    totalStagesCompleted: progress.totalStagesCompleted + 1,
  }

  // If reaching stage 4 (final stage), mark scenario as completed
  if (stageId === 3 && !updated.scenariosCompleted.includes(scenarioId)) {
    updated.scenariosCompleted = [...updated.scenariosCompleted, scenarioId]
    updated.lastCompletedDate = new Date().toISOString()
  }

  // Check for newly unlocked achievements
  const newlyUnlocked = getNewlyUnlockedAchievements(updated)
  newlyUnlocked.forEach((achievement) => {
    if (!updated.achievementsUnlocked.includes(achievement.id)) {
      updated.achievementsUnlocked = [...updated.achievementsUnlocked, achievement.id]
    }
  })

  return updated
}

// Get progress percentage for a specific scenario
export function getScenarioProgress(currentStage: number): number {
  return Math.round(((currentStage + 1) / 4) * 100)
}
