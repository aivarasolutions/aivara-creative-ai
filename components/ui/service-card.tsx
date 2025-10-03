import Link from "next/link";
import { Card, CardContent } from "./card";
import { Button } from "./button";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Card className="bg-black/60 border border-white/10 hover:border-white/20 transition-all group">
      <CardContent className="p-8">
        {icon && <div className="mb-4 text-teal-400">{icon}</div>}
        <h3 className="text-2xl font-semibold mb-4 text-teal-300 group-hover:text-teal-200 transition">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <Link href={href}>
          <Button variant="outline" className="w-full">Learn More</Button>
        </Link>
      </CardContent>
    </Card>
  );
}