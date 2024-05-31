import { getContext, setContext } from 'svelte';

import type { ContextTypes as SampleCtx } from './sample';

// This file contains all the context needed for the +page
// Create the context type in a new file and import it here
// add the type to below `AllPageCtx`

type AllPageCtx = {
  sample: SampleCtx;
}

export class PageCtx<T extends keyof AllPageCtx> {
  page: T;
  constructor(page: T) {
    this.page = page;
  }

  set(obj: AllPageCtx[T]) {
    for (const [key, value] of Object.entries(obj)) {
      setContext(key, value);
    }
  }

  get<K extends keyof AllPageCtx[T]>(key: K): AllPageCtx[T][K] {
    return getContext(key);
  }
}