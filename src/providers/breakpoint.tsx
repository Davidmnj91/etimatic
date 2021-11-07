import { createContext, useCallback, useContext, useEffect, useState } from 'react';
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

  const isBreakpoint = (breakpoint: keyof BreakPoints) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: MediaQueryListEvent) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(
        `(min-width: ${context.breakpoints[breakpoint].minWidth}px) and (max-width: ${context.breakpoints[breakpoint].maxWidth}px)`
      );
      media.addEventListener('change', updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
  };

  return {
    isBreakpoint,
  };
};
