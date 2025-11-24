import { 
  LayoutGrid, 
  List,
  BarChart3,
  Volume2,
  Link as LinkIcon,
  ChevronDown,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const ControlBar = () => {
  return (
    <div className="border-b border-border bg-card/50 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-foreground">Pulse</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Info className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs max-w-xs">
                    Real-time token discovery across multiple stages
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="h-7">
              <LayoutGrid className="w-4 h-4 mr-1" />
              Display
              <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                  <BarChart3 className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Analytics View</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                  <Volume2 className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Sound Alerts</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                  <LinkIcon className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Quick Links</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex items-center gap-2 ml-2">
            <Button variant="outline" size="sm" className="h-7 text-xs">
              <span className="w-2 h-2 bg-success rounded-full mr-1.5 animate-pulse" />
              1
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              <span className="w-2 h-2 bg-muted-foreground rounded-full mr-1.5" />
              0
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
