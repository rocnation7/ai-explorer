"use client"

import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import confetti from 'canvas-confetti'
import type { Achievement } from '@/types/simulator'

// Show achievement toast with confetti
export function showAchievementToast(achievement: Achievement) {
  // Trigger confetti
  const count = 200
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  }

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    })
  }

  // Burst of confetti
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  })
  fire(0.2, {
    spread: 60,
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  })

  // Show toast
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-gradient-to-br from-[#1a1f36] to-[#2a3f5f] shadow-xl rounded-lg pointer-events-auto flex items-start gap-4 p-6 border border-[#b8945f]/20`}
      >
        <div className="flex-shrink-0 w-12 h-12 bg-[#b8945f] rounded-full flex items-center justify-center text-2xl">
          {achievement.icon}
        </div>
        <div className="flex-1">
          <div className="text-xs uppercase tracking-wider text-[#b8945f] font-semibold mb-1">
            Achievement Unlocked!
          </div>
          <h3 className="text-white font-semibold text-lg mb-1">
            {achievement.title}
          </h3>
          <p className="text-gray-300 text-sm">{achievement.description}</p>
        </div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    ),
    {
      duration: 5000,
      position: 'top-center',
    }
  )
}

// Confetti for stage completion (smaller celebration)
export function showStageCompletionConfetti(stageId: number) {
  const colors = {
    0: ['#dc2626', '#f87171'],
    1: ['#ca8a04', '#fbbf24'],
    2: ['#2563eb', '#60a5fa'],
    3: ['#16a34a', '#4ade80', '#b8945f'],
  }

  const stageColors = colors[stageId as keyof typeof colors] || ['#b8945f']

  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.6 },
    colors: stageColors,
    zIndex: 9999,
  })
}

// Provider component that sets up the toaster
export function AchievementToaster() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        className: '',
        style: {
          background: 'transparent',
          boxShadow: 'none',
          padding: 0,
        },
      }}
    />
  )
}

// Hook to show progress toast
export function useProgressToast() {
  const showProgressToast = (message: string, progress: number) => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto border border-[#e5e5dc]`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#1a1f36]">{message}</span>
              <span className="text-sm font-semibold text-[#b8945f]">{progress}%</span>
            </div>
            <div className="w-full bg-[#e5e5dc] rounded-full h-2">
              <div
                className="bg-[#b8945f] h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      ),
      {
        duration: 2000,
        position: 'bottom-right',
      }
    )
  }

  return { showProgressToast }
}
