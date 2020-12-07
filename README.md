# Storybook Styled Wrapper Storybook Decorator

This module allows you to add CSS styles to your story via [vue-styled-components](https://www.npmjs.com/package/vue-styled-components).

## Installation

```sh
yarn add -D @netsells/storybook-styled-wrapper
```

## Usage

Enable globally:

```js
import styledWrapper from '@netsells/storybook-styled-wrapper';

export const decorators = [
    styledWrapper,
];
```

Enable on a per story basis:

```js
import styledWrapper from '@netsells/storybook-styled-wrapper';
import MyComponent from './MyComponent';

// Enable for all stories in this file
export default {
    decorators: [
        styledWrapper,
    ],
};

export const myComponent = () => ({
    // ...component
});

// Enable for single story
myComponent.decorators = [
    styledWrapper,
];
```

Add your CSS via the `wrapperStyles` parameter:

```js
myComponent.parameters = {
    wrapperStyles: `
        @media (min-width: 768px) {
            max-width: 300px;
        }
    `,
};
```

This will created a styled component wrapper around your component with the css you provided. It's recommended that you place this decorator last in your list of decorators in order for it to wrap your story markup itself.

If `wrapperStyles` is not provided for a story, the decorator will be skipped.
