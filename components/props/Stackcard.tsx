import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function StackCard() {
  const stack = {
    frontend: ["Next.js", "Tailwind CSS", "shadcn/ui", "Zustand"],
    backend: ["tRPC", "Express", "Mongoose", "Redis"],
    mobile: ["Expo", "React Native"],
    integrations: ["Telegram Bot (grammY)", "TON"],
  }

  return (
    <Card className="bg-background/70 backdrop-blur-sm border border-border rounded-2xl shadow-lg">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          Стек технологий
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(stack).map(([category, items]) => (
          <div key={category}>
            <p className="text-muted-foreground capitalize text-sm font-medium mb-1">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-3 py-1 rounded-md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
