Wanted a type safe get and set context in Svelte kit with reactivity across the page and component but scoped to per layout.

- You enter the type in the `/context` folder as I did with [src/lib/context/sample.ts](./src/lib/context/sample.ts)
- And in any page and component inside the `/sample` folder you can access the value with magic of svelte

```ts
  import { PageCtx } from '$lib/context';
  
  const pageCtx = new PageCtx("sample");
  const title = pageCtx.get("title");
```

- If you input the wrong page name it will throw error `new PageCtx("correct-name")`
- If you enter a wrong key to `get` or `set` it will throw error `pageCtx.get("correct-key")`
- If the value of the object didn't match the type, it will throw error `$title=true`
- If there is a missing key, during the setup of `.set()` in `+layout.svelte` it will throw error

