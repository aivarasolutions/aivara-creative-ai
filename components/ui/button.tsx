import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const base =
    "rounded-2xl inline-flex items-center justify-center font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  const styles =
    variant === "outline"
      ? "border border-pink-400 text-pink-400 hover:bg-pink-500 hover:text-black"
      : "bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 hover:opacity-90 text-black";
  return <button className={clsx(base, styles, className)} {...props} />;
}
