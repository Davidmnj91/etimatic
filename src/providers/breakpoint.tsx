import { createContext, useContext } from 'react';
import { BreakPoints } from '../themes';

type BreakpointProviderProps = {
  breakpoints: BreakPoints;
  children: React.ReactNode;
};

const BreakpointContext = createContext<BreakpointProviderProps>(undefined);

export const BreakpointProvider = (props: BreakpointProviderProps) => {
  return <BreakpointContext.Provider value={props}>{props.children}</BreakpointContext.Provider>;
};

export const useBreakpoint = () => {
  const context = useContext(BreakpointContext);
  if (context === undefined) {
    throw new Error('useBreakpoint must be used within a BreakpointProvider');
  }

  return {
    is: (breakpoint: keyof BreakPoints) => {
      return typeof window !== 'undefined'
        ? window.matchMedia(
            `(min-width: ${context.breakpoints[breakpoint].minWidth}px) and (max-width: ${context.breakpoints[breakpoint].maxWidth}px)`
          ).matches
        : false;
    },
  };
};
