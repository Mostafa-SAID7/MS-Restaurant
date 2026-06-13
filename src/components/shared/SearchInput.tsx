import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  debounceMs?: number;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search projects...",
  className = "",
  debounceMs = 300,
}: SearchInputProps) {
  const [localValue, setLocalValue] = useState(value);

  // Keep ref to latest onChange so the debounce effect never stales
  // and never needs onChange as a dependency (avoids re-trigger on every render)
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  // Sync external value changes to local state
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Debounce: only re-runs when localValue or debounceMs changes
  // NOT when onChange reference changes (avoids page-reset bug)
  useEffect(() => {
    const handler = setTimeout(() => {
      onChangeRef.current(localValue);
    }, debounceMs);

    return () => {
      clearTimeout(handler);
    };
  }, [localValue, debounceMs]);

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-gold" />
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-border bg-secondary/30 py-3 pl-11 pr-11 text-sm outline-none backdrop-blur-md transition-all placeholder:text-muted-foreground focus:border-gold/60 focus:bg-secondary/50 focus:ring-1 focus:ring-gold/30"
      />
      {localValue && (
        <button
          onClick={() => setLocalValue("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
