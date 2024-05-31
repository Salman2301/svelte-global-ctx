<script lang="ts">
  import { PageCtx } from '$lib/context';
  import SampleButton from "./component/Button.svelte";

  const pageCtx = new PageCtx("sample");
  const title = pageCtx.get("title");

</script>

<h1>{$title}</h1>
<SampleButton />

