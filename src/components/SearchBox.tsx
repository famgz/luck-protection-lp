import { ReactNode } from 'react';
import { CiSearch } from 'react-icons/ci';
import { cn } from '@/lib/utils';

interface SearchBoxProps {
  children: ReactNode;
  className?: string;
}

export default function SearchBox({ children, className }: SearchBoxProps) {
  return (
    <div
      className={cn(
        'inline-flex h-[44px] w-full flex-1 items-center justify-start gap-2 rounded-lg border border-light px-4 text-sm text-muted transition-colors duration-200 focus-within:border-primary',
        className
      )}
    >
      <CiSearch size={22} className="font-bold" />
      {children}
    </div>
  );
}
