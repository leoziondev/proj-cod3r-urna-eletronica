import { cn } from "@/lib/utils";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Container({
    children,
    className
  }: Props) {
    return (
        <div className={cn('w-full max-w-7xl mx-auto p-5', className)}>
            {children}
        </div>
    )
}