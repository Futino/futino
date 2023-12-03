<script lang="ts">
	import { Slider } from '$lib/components/ui/slider';
	const hourlyRate = 25.45;
	const cogs = 5.35;
	const markup = 1.4; // 40%
	const maintenanceHours = 1;

	$: chosenHours = [1];

	$: hours = chosenHours[0] + maintenanceHours;
	$: expenses = hours * hourlyRate + cogs;
	$: markedUp = expenses * markup;
	// Calculate stripe fees
	$: fees = markedUp * 0.0713 + 0.6;
	$: price = markedUp + fees;
</script>

<div class="flex flex-col gap-12 items-center justify-center h-screen w-full">
	<div class="flex gap-6 text-5xl">
		<p>{hours} hours</p>
		<p>${price}<span class="text-sm">per month</span></p>
	</div>
	<Slider bind:value={chosenHours} class="max-w-2xl" max={40} min={1} step={1} />
</div>
