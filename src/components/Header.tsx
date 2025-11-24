import { 
  Search, 
  Wallet, 
  Settings, 
  Bell,
  LayoutGrid,
  BarChart3,
  Volume2,
  Link as LinkIcon,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AX</span>
            </div>
            <span className="font-bold text-lg">AXIOM</span>
            <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary rounded-full font-semibold">Pro</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-sm">
              Discover
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-primary">
              Pulse
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              Trackers
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              Perpetuals
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              Yield
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              Vision
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              Portfolio
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              Rewards
            </Button>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden lg:flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-1.5 w-64">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search by token or CA..." 
              className="bg-transparent border-0 h-6 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <kbd className="text-xs text-muted-foreground">/</kbd>
          </div>

          {/* Chain Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full" />
                  <span className="text-sm font-semibold">SOL</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover">
              <DropdownMenuItem>Solana</DropdownMenuItem>
              <DropdownMenuItem>Ethereum</DropdownMenuItem>
              <DropdownMenuItem>Base</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Deposit Button */}
          <Button className="h-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Deposit
          </Button>

          {/* Icon Buttons */}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Bell className="w-4 h-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Settings className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
