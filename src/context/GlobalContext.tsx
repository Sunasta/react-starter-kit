import type React from 'react';
import { AuthProvider } from './Auth';
import Automations from './Automations';
import { LanguageProvider } from './Language';
import Persist from './Persist';
import { ThemeProvider } from './Theme';

type ComponentProps = {
  children: React.ReactNode;
};

type Component = React.FC<ComponentProps>;

const combineComponents = (components: Component[]): Component =>
  components.reduce<Component>(
    (AccumulatedComponent, CurrentComponent) =>
      function CombinedComponent({ children }: ComponentProps) {
        return (
          <AccumulatedComponent>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponent>
        );
      },
    ({ children }) => <>{children}</>,
  );

// add context providers here to combine them and avoid nesting for interactivity between contexts
const GlobalContextProvider = combineComponents([AuthProvider, ThemeProvider, LanguageProvider]);

function GlobalContexts({ children }: ComponentProps) {
  return (
    <GlobalContextProvider>
      <Persist>
        <Automations>{children}</Automations>
      </Persist>
    </GlobalContextProvider>
  );
}

export default GlobalContexts;
