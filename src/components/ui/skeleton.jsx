import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <>
    <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} >
    <div className={cn("animate-pulse rounded-md bg-muted", className)}  />
    </div>
    
    </>
  );
}

export { Skeleton }
