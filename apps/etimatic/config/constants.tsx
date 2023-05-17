import { createContext, useContext } from 'react';

export const Constants = {
  mail: 'yago@etimatic.com',
  location: {
    address: 'C/ Lepanto 71, Bajo. 30510',
    city: 'Yecla - Murcia',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Etimatic+Packaging',
  },
  phones: [{ display: '968 796 550', callNumber: '+34-968-796-550' }],
};

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
    throw new Error('useConstants must be used within a ConstantsProvider');
  }
  return context;
};
