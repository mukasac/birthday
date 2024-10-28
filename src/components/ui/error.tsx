// src/components/ui/error.tsx
import { Button } from "@/components/ui/button";

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function Error({ message = "Something went wrong!", onRetry }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <p className="text-red-500 mb-4">{message}</p>
      {onRetry && (
        <Button onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}