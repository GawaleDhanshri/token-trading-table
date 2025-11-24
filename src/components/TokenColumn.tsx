import { Token } from '@/types/token';
import { TokenCard } from './TokenCard';
import { ColumnConfig } from '@/types/token';
import { 
  ChevronDown, 
  Filter, 
  TrendingUp,
  ArrowUpDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TokenColumnProps {
  config: ColumnConfig;
  tokens: Token[];
  onTokenClick?: (token: Token) => void;
}

export const TokenColumn = ({ config, tokens, onTokenClick }: TokenColumnProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* Column Header */}
      <div className="border-b border-border pb-3 mb-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
              {config.title}
              {config.subtitle && (
                <span className="text-xs text-primary">{config.subtitle}</span>
              )}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                  <ArrowUpDown className="w-3 h-3 mr-1" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover">
                <DropdownMenuItem>Market Cap</DropdownMenuItem>
                <DropdownMenuItem>Volume</DropdownMenuItem>
                <DropdownMenuItem>Age</DropdownMenuItem>
                <DropdownMenuItem>Holders</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="h-7 px-2">
              <Filter className="w-3 h-3" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
            P1
          </Button>
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
            P2
          </Button>
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
            P3
          </Button>
          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
            <ChevronDown className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Token List */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-2">
        {tokens.map((token) => (
          <TokenCard 
            key={token.id} 
            token={token} 
            onClick={() => onTokenClick?.(token)}
          />
        ))}
      </div>
    </div>
  );
};
