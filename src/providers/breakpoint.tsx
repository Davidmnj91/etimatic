import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { BreakPointNames, FontNames } from '../themes';
import { BreakPoints } from '../themes/DesignSystem';

type BreakpointProviderProps = {
  breakpoints: BreakPoints<BreakPointNames, FontNames>;
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

  const isBreakpoint = (breakpoint: BreakPointNames) => {
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
