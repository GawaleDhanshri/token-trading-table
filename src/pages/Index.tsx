import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ControlBar } from '@/components/ControlBar';
import { TokenColumn } from '@/components/TokenColumn';
import { Footer } from '@/components/Footer';
import { mockTokens } from '@/data/mockTokens';
import { Token, ColumnConfig } from '@/types/token';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const columns: ColumnConfig[] = [
  { title: 'New Pairs', subtitle: 'Bonding: 0.47%', category: 'new', sortBy: 'age' },
  { title: 'Final Stretch', category: 'final', sortBy: 'marketCap' },
  { title: 'Migrated', category: 'migrated', sortBy: 'marketCap' },
];

const Index = () => {
  const [tokens, setTokens] = useState(mockTokens);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTokens(prev => 
        prev.map(token => ({
          ...token,
          price: token.price * (1 + (Math.random() - 0.5) * 0.02),
          priceChange: token.priceChange + (Math.random() - 0.5) * 2,
          marketCap: token.marketCap * (1 + (Math.random() - 0.5) * 0.01),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getTokensByCategory = (category: 'new' | 'final' | 'migrated') => {
    return tokens.filter(token => token.category === category);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <ControlBar />
      
      <main className="flex-1 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 h-full">
          {columns.map((column) => (
            <TokenColumn
              key={column.category}
              config={column}
              tokens={getTokensByCategory(column.category)}
              onTokenClick={setSelectedToken}
            />
          ))}
        </div>
      </main>

      <Footer />

      {/* Token Detail Modal */}
      <Dialog open={!!selectedToken} onOpenChange={() => setSelectedToken(null)}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedToken && (
                <>
                  <img 
                    src={selectedToken.image} 
                    alt={selectedToken.name}
                    className="w-10 h-10 rounded-lg"
                  />
                  <div>
                    <div className="font-bold text-lg">{selectedToken.name}</div>
                    <div className="text-sm text-muted-foreground">{selectedToken.ticker}</div>
                  </div>
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedToken && (
                <div className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Market Cap</div>
                      <div className="font-mono font-semibold">
                        ${selectedToken.marketCap.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Price</div>
                      <div className="font-mono font-semibold text-success">
                        ${selectedToken.price.toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Volume</div>
                      <div className="font-mono font-semibold">
                        ${selectedToken.volume.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Holders</div>
                      <div className="font-mono font-semibold">{selectedToken.holders}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">TX Count</div>
                      <div className="font-mono font-semibold">{selectedToken.stats.txCount}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Liquidity</div>
                      <div className="font-mono font-semibold">
                        ${selectedToken.stats.liquidity.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-2">
                      Bonding Progress: {(selectedToken.bondingProgress * 100).toFixed(1)}%
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${selectedToken.bondingProgress * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
