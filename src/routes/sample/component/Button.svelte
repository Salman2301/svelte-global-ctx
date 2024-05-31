<script lang="ts">
  import { PageCtx } from '$lib/context';

  const pageCtx = new PageCtx("sample");
  const title = pageCtx.get("title");
</script>

<button onclick={()=>$title="Change Title"}>
  Change me
</button>

