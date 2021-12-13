import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { BreakPoints, Optional } from '../design-system';
import { BreakPointNames, FontNames } from '../themes';

type BreakpointProviderProps = {
  breakpoints: BreakPoints<BreakPointNames, FontNames>;
  children: React.ReactNode;
};

const BreakpointContext =
  createContext<Optional<BreakpointProviderProps>>(undefined);

export const BreakpointProvider = (props: BreakpointProviderProps) => {
  return (
    <BreakpointContext.Provider value={props}>
      {props.children}
    </BreakpointContext.Provider>
  );
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
      const supportsNewListeners = media.addEventListener !== undefined;
      supportsNewListeners
        ? media.addEventListener('change', updateTarget)
        : media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () =>
        supportsNewListeners
          ? media.removeEventListener('change', updateTarget)
          : media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  return {
    isBreakpoint,
  };
};
