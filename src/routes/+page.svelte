<script>
	import * as songData from '$lib/data/songs.json';
	import ResultsEntry from '$lib/components/ResultsEntry.svelte';
</script>

{#each Object.entries(songData) as [pack, songs]}
	{#each songs as song}
		<ResultsEntry {pack} {...song} />
	{/each}
{/each}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
