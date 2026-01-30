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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

interface EmailCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  trigger?: string // What triggered the modal (e.g., "use-case-view", "simulator-complete")
}

export function EmailCaptureModal({
  isOpen,
  onClose,
  trigger = "general"
}: EmailCaptureModalProps) {
  const [step, setStep] = useState<"form" | "success">("form")
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    firmType: "",
    aumBand: "",
    consent: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // In production, this would send to your CRM/marketing automation system
    console.log("Lead captured:", { ...formData, trigger })

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))

    setStep("success")

    // Auto-close after success
    setTimeout(() => {
      onClose()
      setTimeout(() => setStep("form"), 300)
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle>Stay Connected</DialogTitle>
              <DialogDescription>
                Get notified when we add new use cases, workflows, and AI
                guidance for wealth professionals.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="role">Your Role *</Label>
                <Select
                  required
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData({ ...formData, role: value })
                  }
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wealth-advisor">Wealth Advisor</SelectItem>
                    <SelectItem value="ria-principal">RIA Principal</SelectItem>
                    <SelectItem value="cio">CIO / Investment Committee</SelectItem>
                    <SelectItem value="client-service">
                      Client Service & Operations
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="firmType">Firm Type</Label>
                <Select
                  value={formData.firmType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, firmType: value })
                  }
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select firm type (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="independent-ria">Independent RIA</SelectItem>
                    <SelectItem value="broker-dealer">Broker-Dealer</SelectItem>
                    <SelectItem value="bank-trust">Bank/Trust Company</SelectItem>
                    <SelectItem value="family-office">Family Office</SelectItem>
                    <SelectItem value="asset-manager">Asset Manager</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="aumBand">AUM Band</Label>
                <Select
                  value={formData.aumBand}
                  onValueChange={(value) =>
                    setFormData({ ...formData, aumBand: value })
                  }
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select AUM (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-100m">Under $100M</SelectItem>
                    <SelectItem value="100m-500m">$100M - $500M</SelectItem>
                    <SelectItem value="500m-1b">$500M - $1B</SelectItem>
                    <SelectItem value="1b-5b">$1B - $5B</SelectItem>
                    <SelectItem value="over-5b">Over $5B</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={(e) =>
                    setFormData({ ...formData, consent: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 rounded border-[#e5e5dc] text-[#b8945f] focus:ring-[#b8945f]"
                />
                <Label htmlFor="consent" className="text-xs leading-relaxed cursor-pointer">
                  I consent to receive updates from Lazard about AI practices
                  in wealth management. I understand I can unsubscribe at any
                  time.
                </Label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Get Updates
              </Button>

              <p className="text-xs text-[#6a6a6a] text-center">
                We respect your privacy. View our{" "}
                <a href="/privacy" className="underline hover:text-[#1a1f36]">
                  privacy policy
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
            <DialogTitle className="mb-2">Thank You!</DialogTitle>
            <DialogDescription>
              You'll receive updates about new AI workflows and guidance for
              wealth professionals.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
