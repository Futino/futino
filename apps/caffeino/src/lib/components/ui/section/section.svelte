<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import { cssClasses } from 'shadcn-svelte';

	export let background = '';
	export let border = '';
	export let padding = '';
	export let shadow = '';
	export let gap = 'gap-6';
	export let typography = '';

	export let useInview = false;

	let scrollY: number;
	export let scrollEnterHeight: number;
	export let onInviewEnter: () => () => {};

	function setScrollEnterHeight() {
		scrollEnterHeight = scrollY;
	}

	let classesBase = cssClasses`
    grid place-items-center relative
    ${background} ${border} ${padding} ${shadow} ${typography} ${$$props.class}
  `;

	let mounted = false;
	onMount(() => {
		mounted = true;
		console.log('section mounted');
	});
</script>

<svelte:window bind:scrollY />

<section
	use:inview
	on:inview_enter={(event) => {
		setScrollEnterHeight();
		if (onInviewEnter) {
			onInviewEnter();
		}
	}}
	class={classesBase}
	style={$$props.style}
	id={$$props.id}
>
	<slot />
</section>
