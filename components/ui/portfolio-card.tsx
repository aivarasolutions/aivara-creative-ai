import { Card, CardContent } from "./card";
import { Play } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  category: string;
  image?: string;
  description?: string;
  hasAudio?: boolean;
  hasVideo?: boolean;
}

export function PortfolioCard({ title, category, image, description, hasAudio, hasVideo }: PortfolioCardProps) {
  return (
    <Card className="bg-black/60 border border-white/10 hover:border-white/20 transition-all overflow-hidden group">
      {image && (
        <div className="relative aspect-video bg-gradient-to-br from-pink-600/20 via-teal-500/20 to-yellow-400/20 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          {(hasAudio || hasVideo) && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="p-4 rounded-full bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400">
                <Play className="h-6 w-6 text-black" />
              </div>
            </div>
          )}
        </div>
      )}
      <CardContent className="p-6">
        <div className="text-xs text-teal-400 mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
        {description && <p className="text-sm text-gray-400">{description}</p>}
      </CardContent>
    </Card>
  );
}