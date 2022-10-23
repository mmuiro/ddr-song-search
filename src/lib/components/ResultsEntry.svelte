<script lang="ts">
	import type { Difficulty } from '$lib/types';
	import { onMount } from 'svelte';
	import DiffButton from './DiffButton.svelte';
	import ChartInfo from './ChartInfo.svelte';
	export let title: string, artist: string, pack: string;
	export let subtitle: string | undefined;
	export let difficulties: Difficulty[];
	let selectedDifficulty: Difficulty;
	onMount(() => (selectedDifficulty = difficulties[0]));
</script>

<div>
	<div>
		<div class="entryheader">
			<h2>{title}</h2>
			{#if subtitle !== undefined}
				<h3>{subtitle}</h3>
			{/if}
		</div>
		<p>{artist}</p>
		<p>From {pack}</p>
		{#each difficulties as chart}
			<DiffButton {...chart} />
		{/each}
	</div>
	<ChartInfo />
</div>
