<script lang="ts">
	import PromotionToggle from './PromotionToggle.svelte';
	import { promotions } from './plans';
	import type { Plan } from './plans';
	import type { Tab } from './tabs';
	export let tab: Tab;

	let subtitle = tab.subtitle;

	let plans: Plan[] = tab.plans;

	export let activeTabValue = 0;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="grid space-y-10 place-items-center">
	<h1 class="title-large">
		{subtitle}
	</h1>
	{#if tab.promotions}
		<PromotionToggle promotions={tab.promotions} />
	{/if}

	<ul class="flex flex-col justify-center xl:flex-row space-y-5 xl:space-x-5 xl:space-y-0">
		{#each plans as plan}
			<li class="justify-center">
				<button
					class="relative group overflow-hidden inline-block p-4 rounded-t-lg shadow-xl bg-surface-variant/20 border-2 border-transparent {activeTabValue ===
					plan.index
						? 'active border-2 rounded-xl  border-primary transition-all duration-500 scale-110'
						: 'rounded-xl'}"
					on:click={handleClick(plan.index)}
					type="button">
					<!--Shine Box-->
					<div
						class="absolute top-0 -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
				</button>
			</li>
		{/each}
	</ul>
</div>
