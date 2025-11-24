import { Token } from '@/types/token';
import { Button } from '@/components/ui/button';
import { 
  Copy, 
  Search, 
  Heart, 
  MessageCircle, 
  Users, 
  TrendingUp,
  ExternalLink,
  Twitter,
  Globe,
  Send
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useState } from 'react';

interface TokenCardProps {
  token: Token;
  onClick?: () => void;
}

export const TokenCard = ({ token, onClick }: TokenCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(2)}K`;
    return `$${num}`;
  };

  const formatCompact = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <div
      className={cn(
        "relative bg-card border border-border rounded-lg p-3 transition-all duration-200",
        "hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10",
        "cursor-pointer"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        {/* Token Image */}
        <div className="relative flex-shrink-0">
          <img 
            src={token.image} 
            alt={token.name}
            className="w-14 h-14 rounded-lg border border-border"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          )}
        </div>

        {/* Token Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-sm font-semibold text-foreground truncate">
                  {token.name}
                </h3>
                <span className="text-xs text-muted-foreground">{token.ticker}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-muted-foreground">{token.age}</span>
                {token.socials.twitter && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="hover:text-primary transition-colors">
                          <Twitter className="w-3 h-3" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>Twitter</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                {token.socials.website && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="hover:text-primary transition-colors">
                          <Globe className="w-3 h-3" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>Website</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                {token.socials.telegram && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="hover:text-primary transition-colors">
                          <Send className="w-3 h-3" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>Telegram</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                <button className="hover:text-primary transition-colors">
                  <Copy className="w-3 h-3" />
                </button>
                <button className="hover:text-primary transition-colors">
                  <Search className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-muted-foreground mb-0.5">MC</div>
              <div className="text-sm font-semibold font-mono">{formatNumber(token.marketCap)}</div>
              <div className="text-xs font-mono text-success">{formatNumber(token.price)}</div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-between text-xs mt-2">
            <div className="flex items-center gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-muted-foreground" />
                      <span className="font-mono">{token.holders}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Holders</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-muted-foreground" />
                      <span className="font-mono">{token.likes}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Likes</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 text-muted-foreground" />
                      <span className="font-mono">{token.replies}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>Replies</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="flex items-center gap-2">
              <span className={cn(
                "font-mono font-medium",
                token.priceChange > 0 && "text-success",
                token.priceChange < 0 && "text-destructive",
                token.priceChange === 0 && "text-muted-foreground"
              )}>
                {token.priceChange > 0 && '↑'}{token.priceChange < 0 && '↓'} {Math.abs(token.priceChange)}%
              </span>
            </div>
          </div>

          {/* Progress & Action */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1">
              <div className="text-[10px] text-muted-foreground mb-1">
                Bonding: {(token.bondingProgress * 100).toFixed(1)}%
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${token.bondingProgress * 100}%` }}
                />
              </div>
            </div>
            <Button 
              size="sm" 
              className="h-7 px-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs"
            >
              <TrendingUp className="w-3 h-3 mr-1" />
              SOL
            </Button>
          </div>

          {token.isPaid && (
            <div className="absolute top-2 right-2">
              <span className="text-[10px] px-2 py-0.5 bg-success/20 text-success rounded-full font-semibold">
                Paid
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
