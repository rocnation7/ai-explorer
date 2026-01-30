"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'
import type { DiffHighlight } from '@/types/simulator'

interface OutputDiffViewerProps {
  currentOutput: string
  previousOutput?: string
  highlights?: DiffHighlight
  stageId: number
}

export function OutputDiffViewer({
  currentOutput,
  previousOutput,
  highlights,
  stageId,
}: OutputDiffViewerProps) {
  const [showDiff, setShowDiff] = useState(false)

  // Only show diff view for stages 1-3 (when there's a previous stage)
  if (stageId === 0 || !previousOutput) {
    return (
      <div className="space-y-4">
        <div className="bg-white border border-[#e5e5dc] rounded-lg p-6 shadow-sm">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-wrap text-[#1a1f36] leading-relaxed">
              {currentOutput}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Toggle Button */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-[#1a1f36]">Generated Output</h4>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowDiff(!showDiff)}
          className="gap-2"
        >
          {showDiff ? (
            <>
              <EyeOff className="w-4 h-4" />
              Hide Changes
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              Show What Changed
            </>
          )}
        </Button>
      </div>

      {/* Output Display */}
      <div className="bg-white border border-[#e5e5dc] rounded-lg p-6 shadow-sm">
        <div className="prose prose-sm max-w-none">
          <div className="whitespace-pre-wrap text-[#1a1f36] leading-relaxed">
            {currentOutput}
          </div>
        </div>
      </div>

      {/* Diff Highlights */}
      {showDiff && highlights && (
        <div className="bg-gradient-to-br from-[#f8f7f2] to-white border border-[#e5e5dc] rounded-lg p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#b8945f] rounded-full" />
            <h5 className="font-semibold text-[#1a1f36]">
              What AI Improved in This Stage
            </h5>
          </div>

          {highlights.added && highlights.added.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center text-green-700 text-xs font-bold">
                  +
                </div>
                <span className="text-sm font-medium text-green-900">
                  Added ({highlights.added.length})
                </span>
              </div>
              <ul className="ml-8 space-y-1.5">
                {highlights.added.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-green-800 bg-green-50 px-3 py-1.5 rounded border-l-2 border-green-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {highlights.improved && highlights.improved.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-700 text-xs font-bold">
                  ↑
                </div>
                <span className="text-sm font-medium text-blue-900">
                  Improved ({highlights.improved.length})
                </span>
              </div>
              <ul className="ml-8 space-y-1.5">
                {highlights.improved.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-blue-800 bg-blue-50 px-3 py-1.5 rounded border-l-2 border-blue-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {highlights.removed && highlights.removed.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center text-yellow-700 text-xs font-bold">
                  −
                </div>
                <span className="text-sm font-medium text-yellow-900">
                  Removed/Fixed ({highlights.removed.length})
                </span>
              </div>
              <ul className="ml-8 space-y-1.5">
                {highlights.removed.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-yellow-800 bg-yellow-50 px-3 py-1.5 rounded border-l-2 border-yellow-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-[#e5e5dc]">
            <p className="text-xs text-[#6a6a6a] italic">
              💡 Tip: Notice how adding context and guardrails dramatically improves AI
              output quality. Each improvement makes the result more professional and
              client-ready.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
