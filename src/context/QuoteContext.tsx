import { createContext } from 'react';

type QuoteContextType = [number, React.Dispatch<React.SetStateAction<number>>];

export const QuoteContext = createContext<QuoteContextType>([0, () => {}]);
