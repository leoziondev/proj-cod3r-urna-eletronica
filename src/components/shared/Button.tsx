import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string
}

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button className={cn('py-1.5 px-4 text-white text-sm transition-all rounded-md', className)} {...props}>
            {children}
        </button>
    )
}