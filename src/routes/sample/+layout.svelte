<script lang="ts">
  import { PageCtx } from '$lib/context';
  import { writable } from 'svelte/store';

	const pageCtx = new PageCtx("sample");
  pageCtx.set({
    title: writable("This is a sample title")
    // You can also add more property and it will be type check against
    // src/lib/context/sample.ts type.
    // It's completly type safe and need to add all the context, preferably in +layout.svelte
   })
</script>

  <slot></slot>