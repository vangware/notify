> This repository's code was moved to [lou.codes](https://lou.codes).

---

<img id="logo" alt="Notify by vangware" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

📣 Minimalistic Pub/Sub implementation.

## Usage

### 📦 Node

Install `@vangware/notify` as a dependency:

```bash
pnpm add @vangware/notify
# or
npm install @vangware/notify
# or
yarn add @vangware/notify
```

Import it and use it:

```typescript
import { broadcast } from "@vangware/notify";

const { emit, on } = broadcast<{ event: string }>();

const onEvent = on("event");
const offEvent = onEvent(console.log);

const emitEvent = emit("event");
emitEvent("Hello world 1"); // Logs "Hello world 1"
emitEvent("Hello world 2"); // Logs "Hello world 2"
offEvent();
emitEvent("Nope"); // Nothing happens
```

### 🦕 Deno

Import `@vangware/notify` using the `npm:` prefix, and use it directly:

```typescript
import { broadcast } from "npm:@vangware/notify";

const { emit, on } = broadcast<{ event: string }>();

const onEvent = on("event");
const offEvent = onEvent(console.log);

const emitEvent = emit("event");
emitEvent("Hello world 1"); // Logs "Hello world 1"
emitEvent("Hello world 2"); // Logs "Hello world 2"
offEvent();
emitEvent("Nope"); // Nothing happens
```

### 🌎 Browser

Import `@vangware/notify` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { broadcast } from "https://esm.sh/@vangware/notify";

	const { emit, on } = broadcast<{ event: string }>();

	const onEvent = on("event");
	const offEvent = onEvent(console.log);

	const emitEvent = emit("event");
	emitEvent("Hello world 1"); // Logs "Hello world 1"
	emitEvent("Hello world 2"); // Logs "Hello world 2"
	offEvent();
	emitEvent("Nope"); // Nothing happens
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]: https://github.com/vangware/notify/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/notify.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/notify
[coverage]: https://coveralls.io/github/vangware/notify
[documentation]: https://notify.vangware.com
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/notify.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/notify/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/notify.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/notify
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/notify.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/notify/issues
[vangware]: https://vangware.com
