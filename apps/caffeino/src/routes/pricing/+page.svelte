<script lang="ts">
	import { Slider } from '$lib/components/ui/slider';
	const hourlyRate = 25.45;
	const cogs = 5.35;
	const markup = 1.4; // 40%
	const maintenanceHours = 1;

	const currencyFormatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',

		// These options are needed to round to whole numbers if that's what you want.
		minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)
	});

	$: slider = [1];
	$: chosenHours = Math.floor(slider[0] / Math.max(0.1, 10 - slider[0] / 20));
	$: hours = chosenHours + maintenanceHours;
	$: expenses = hours * hourlyRate + cogs;
	$: markedUp = expenses * markup;
	$: fees = markedUp * 0.0713 + 0.6;
	$: price = markedUp + fees;
</script>

<div class="flex flex-col gap-12 items-center justify-center h-screen w-full">
	<div class="flex gap-6 text-5xl">
		<p>{chosenHours} hours</p>
		<p>{currencyFormatter.format(price)}<span class="text-sm">per month</span></p>
	</div>
	<Slider bind:value={slider} class="max-w-2xl" max={134} min={0} step={1} />
</div>
