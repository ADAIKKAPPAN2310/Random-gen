# @adaikkappan_ramaiah/random-gen

A tiny, dependency‑free utility for generating random hex colors and simple random passwords.

- randomColor() → returns a hex color like `#A1B2C3`
- randomPassword(len = 10) → returns a password of the given length using letters, numbers, and `@#$%^&*`

Source: [index.js](https://github.com/ADAIKKAPPAN2310/Random-gen/blob/main/index.js)

Note: This library uses Math.random() and is not cryptographically secure. Do not use it for secrets, tokens, or other security‑sensitive purposes.

## Installation

```sh
npm install @adaikkappan_ramaiah/random-gen
# or
yarn add @adaikkappan_ramaiah/random-gen
# or
pnpm add @adaikkappan_ramaiah/random-gen
```

## Usage

ES Modules (Node.js or modern bundlers)

```js
import { randomColor, randomPassword } from '@adaikkappan_ramaiah/random-gen';

console.log(randomColor());       // e.g. "#3FA2C7"
console.log(randomPassword());    // e.g. "Aq9#tL2@Xf"
console.log(randomPassword(16));  // length = 16
```

CommonJS (CJS projects)

If this package is ESM-only, use dynamic import:

```js
(async () => {
  const { randomColor, randomPassword } = await import('@adaikkappan_ramaiah/random-gen');
  console.log(randomColor());
  console.log(randomPassword(12));
})();
```

Browser (via CDN)

```html
<script type="module">
  import { randomColor, randomPassword } from 'https://unpkg.com/@adaikkappan_ramaiah/random-gen?module';
  document.body.style.backgroundColor = randomColor();
  console.log(randomPassword(12));
</script>
```

## API

- randomColor(): string
  - Returns a 7‑character hex color string in the form `#RRGGBB` using uppercase hex digits (0–9, A–F).
  - Example: `"#12ABEF"`

- randomPassword(len = 10): string
  - Returns a random string of the requested length (default 10).
  - Character set: `A–Z a–z 0–9 @ # $ % ^ & *`
  - The `len` parameter is coerced via `Number(len)`. Pass a valid number (e.g., 8, 12, 16).
  - Examples:
    - `randomPassword()` → length 10
    - `randomPassword(16)` → length 16

## Security

- This package uses `Math.random()` and is NOT a cryptographically secure RNG.
- Do not use for passwords, secrets, tokens, or any security‑critical code.
- For secure randomness in Node.js, use the Crypto module:

```js
import { randomBytes } from 'node:crypto';
const token = randomBytes(16).toString('hex'); // 32 hex chars
```

## TypeScript

No types are required to use this package. If you prefer, you can add a minimal ambient declaration in your project:

```ts
declare module '@adaikkappan_ramaiah/random-gen' {
  export function randomColor(): string;
  export function randomPassword(len?: number | string): string;
}
```

## License

ISC © 2025 ADAIKKAPPAN2310

## Links

- npm: https://www.npmjs.com/package/@adaikkappan_ramaiah/random-gen
- Repository: https://github.com/ADAIKKAPPAN2310/Random-gen