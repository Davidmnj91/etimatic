import { createContext, useContext } from 'react';
import { Constants } from '../config/constants';

type ConstantsProviderProps = {
  children: React.ReactNode;
};

const ConstantsContext = createContext<typeof Constants>(Constants);

export const ConstantsProvider = ({ children }: ConstantsProviderProps) => {
  return <ConstantsContext.Provider value={Constants}>{children}</ConstantsContext.Provider>;
};

export const useConstants = () => {
  const context = useContext(ConstantsContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a ConstantsProvider');
  }
  return context;
};
