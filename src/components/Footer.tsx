import { Button } from '@/components/ui/button';
import { ChevronDown, Wallet, Twitter, FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Section - Presets */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">PRESET 1</span>
          <Button variant="ghost" size="sm" className="h-6 text-xs">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-1.5" />
            1
          </Button>
          <Button variant="ghost" size="sm" className="h-6 text-xs">
            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mr-1.5" />
            0
          </Button>
          <Button variant="ghost" size="sm" className="h-6 px-2">
            <ChevronDown className="w-3 h-3" />
          </Button>
        </div>

        {/* Center Section - Stats */}
        <div className="hidden md:flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Volume 24h:</span>
            <span className="font-mono font-semibold text-success">$86.6K</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Trades:</span>
            <span className="font-mono font-semibold">$282B</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">TVL:</span>
            <span className="font-mono font-semibold text-primary">$130.4Z</span>
          </div>
        </div>

        {/* Right Section - Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-success/20 text-success rounded-md">
              <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              <span className="font-semibold">Connection is stable</span>
            </div>
          </div>

          <Button variant="outline" size="sm" className="h-7 text-xs">
            GLOBAL
            <ChevronDown className="w-3 h-3 ml-1" />
          </Button>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <FileText className="w-3.5 h-3.5" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Twitter className="w-3.5 h-3.5" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Wallet className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
