"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

interface VisitorPopupProps {
  isOpen: boolean
  onClose: () => void
}

interface VisitorFormData {
  firstName: string
  lastName: string
  email: string
}

export function VisitorPopup({ isOpen, onClose }: VisitorPopupProps) {
  const [step, setStep] = useState<"form" | "success">("form")
  const [formData, setFormData] = useState<VisitorFormData>({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Log the captured data (ready for database integration)
    console.log("Visitor data captured:", formData)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))

    setStep("success")

    // Auto-close after success
    setTimeout(() => {
      onClose()
      // Reset form after modal closes
      setTimeout(() => {
        setStep("form")
        setFormData({ firstName: "", lastName: "", email: "" })
      }, 300)
    }, 2500)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle>Welcome to AI Explorer</DialogTitle>
              <DialogDescription>
                Please share your details to get personalized insights on AI in
                wealth management.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Smith"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="visitorEmail">Email Address *</Label>
                <Input
                  id="visitorEmail"
                  type="email"
                  placeholder="john.smith@company.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1.5"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-6"
              >
                Continue
              </Button>

              <p className="text-xs text-[#6a6a6a] text-center">
                Your information is safe with us. View our{" "}
                <a href="/terms" className="underline hover:text-[#1a1f36]">
                  terms of use
                </a>
                .
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="mb-2">Welcome!</DialogTitle>
            <DialogDescription>
              Thank you for joining us. Explore how AI is transforming wealth
              management.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
