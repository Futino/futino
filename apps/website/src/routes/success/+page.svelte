<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
</script>

<main class="text-center">
	<!--Hero-->
	<section id="hero" class="h-screen place-items-center">
		<div id="tsparticles-hero" class="absolute w-full h-full -z-10" />
		<div class="grid gap-12 justify-items-center inner-section">
			<h1 class="font-extrabold tracking-tight display-medium lg:display-large">
				Welcome to the Club
			</h1>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="bg-surface flex p-6 gap-4 rounded-md flex-col justify-items-center">
					<h2 class="title-large">Manage your subscription</h2>
					<Button class="" href="https://billing.stripe.com/p/login/test_dR68Aq4hwePvfyU3cc">
						<p class="px-3 sm:px-5 md:px-6 title-medium">Client Portal</p>
					</Button>
				</div>

				<div class="bg-surface flex flex-col gap-4 justify-items-center p-6 rounded-md">
					<h2 class="title-large">Haven't booked a call yet?</h2>
					<Button class="" href="/booking" secondary={true}>
						<p class="px-3 sm:px-5 md:px-6 title-medium">Book a call</p>
					</Button>
				</div>
			</div>
		</div>
	</section>
</main>
