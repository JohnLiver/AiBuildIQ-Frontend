import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BoxProps {
  width: string
  height: string
  backgroundColor: string
  letter1: string
  letter2: string
  buttons: Array<{
    text: string
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  }>
}

export const Box: React.FC<BoxProps> = ({
  width,
  height,
  backgroundColor,
  letter1,
  letter2,
  buttons
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-[2%]",
        width,
        height,
        backgroundColor
      )}
      style={{ minHeight: 'fit-content' }}
    >
      <span className="text-4xl font-bold mb-4 text-center">"{letter1}"</span>
      <span className="text-2xl mb-4 text-center">"{letter2}"</span>
      <div className="flex flex-wrap gap-2 justify-center">
        {buttons.map((button, index) => (
          <Button key={index} variant={button.variant || "default"}>
            {button.text}
          </Button>
        ))}
      </div>
    </div>
  )
}
