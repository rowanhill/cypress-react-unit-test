// I hope to get types and docs from functions imported from ./index one day
// but for now have to document methods in both places
// like this: import {mount} from './index'

interface ReactModule {
  name: string
  type: string
  location: string
  source: string
}

interface ReactElement {
  type: any;
  props: any;
  key: string | number | null;
}

declare namespace Cypress {
  interface Cypress {
    stylesCache: any
    React: string
    ReactDOM: string
    Styles: string
    modules: ReactModule[]
  }

  // NOTE: By default, avoiding React.Component/Element typings
  // for many cases, we don't want to import @types/react
  interface Chainable<Subject> {
    state: (key) => any,
    injectReactDOM: () => Chainable<void>
    copyComponentStyles: (component: ReactElement) => Chainable<void>
    /**
     * Mount a React component in a blank document; register it as an alias
     * To access: use an alias or original component reference
     *  @function   cy.mount
     *  @param      {ReactElement}  jsx - component to mount
     *  @param      {string}  alias - alias to use later
     *  @example
    ```
    import Hello from './hello.jsx'
    // mount and access by alias
    cy.mount(<Hello />, 'Hello')
    // using default alias
    cy.get('@Component')
    // using specified alias
    cy.get('@Hello').its('state').should(...)
    // using original component
    cy.get(Hello)
    ```
    **/
    mount: (jsx: ReactElement, alias?: string) => Chainable<void>
    get<S = any>(alias: string | symbol | Function, options?: Partial<Loggable & Timeoutable>): Chainable<any>
  }
}
