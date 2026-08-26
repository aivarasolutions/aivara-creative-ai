import { Card, CardContent } from "./card";

interface PortfolioCardProps {
  title: string;
  category: string;
  image?: string;
  description?: string;
  hasAudio?: boolean;
  hasVideo?: boolean;
}

export function PortfolioCard({ title, category, description }: PortfolioCardProps) {
  return (
    <Card className="bg-black/60 border border-white/10 hover:border-white/20 transition-all overflow-hidden group">
      <div aria-hidden="true" className="relative aspect-video overflow-hidden bg-gradient-to-br from-pink-600/20 via-teal-500/20 to-yellow-400/20 p-5">
        <div className="h-full rounded-xl border border-white/20 bg-black/25 p-3 backdrop-blur-sm">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <div className="grid h-[calc(100%-20px)] grid-cols-3 gap-2">
            <span className="rounded-md bg-white/20" />
            <span className="col-span-2 rounded-md bg-white/10" />
            <span className="col-span-2 rounded-md bg-white/10" />
            <span className="rounded-md bg-teal-300/25" />
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="text-xs text-teal-400 mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
        {description && <p className="text-sm text-gray-400">{description}</p>}
      </CardContent>
    </Card>
  );
}