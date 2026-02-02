"use client"

import { useEffect, useState } from "react"
import { VisitorPopup } from "./visitor-popup"
import { hasVisitedBefore, markAsVisited } from "@/lib/first-visit"

export function FirstVisitProvider() {
  const [showPopup, setShowPopup] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Small delay to let the page render first
    const timer = setTimeout(() => {
      if (!hasVisitedBefore()) {
        setShowPopup(true)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setShowPopup(false)
    markAsVisited()
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) return null

  return <VisitorPopup isOpen={showPopup} onClose={handleClose} />
}
