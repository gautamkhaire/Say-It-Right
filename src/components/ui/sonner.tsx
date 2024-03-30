"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white rounded-full group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-green-600 text-xl",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-black",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-black",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
