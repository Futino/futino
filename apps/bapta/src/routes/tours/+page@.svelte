<script lang="ts">
  import tours from "../../lib/components/tsData/tours";
  import FAQSection from "$lib/components/organisms/FAQSection.svelte";
  import safariFaq from "$lib/components/tsData/safariFaq";
  import TourCard from "$lib/components/molecules/TourCard.svelte";

  // List of currently selected cards, to be used when submitting and checking if card already in list.
  export let selectedCards: number[] = [];

  // Adds the card with index "selectedCardIndex" if it isn't already in the list.
  function addCard(selectedCardIndex: number) {
    if (selectedCards.includes(selectedCardIndex)) {
      console.log("List already contains item: " + selectedCardIndex);
    } else {
      selectedCards.push(selectedCardIndex);
      console.log("New List: " + selectedCards);
    }
  }

  const locations = [
    "All Locations",
    "Zanzibar Beach",
    "Mount Kilimanjaro",
    "Tanzania",
    "Mount Meru",
  ];
</script>

<svelte:head>
  <title>Bapta - Tanzanian Safaris</title>
  <meta
    name="description"
    content="Search for the safari of your dreams, our luxury and midrange safaris are fully customizable."
  />
</svelte:head>

<!--Hero-->
<section
  class="w-full h-screen shadow-lg shadow-background lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 pt-56 place-items-center border-b border-secondary/40 bg-[url('/images/safari/57.webp')] bg-cover object-contain bg-top"
>
  <div
    class="flex flex-col max-w-2xl self-center items-center h-fit inner-section bg-surface/90 shadow-2xl drop-shadow-2xl rounded-lg py-12 pl-10 pr-14"
  >
    <h1 class="font-bold text-primary display-medium">
      Explore Our Safaris
    </h1>
    <h1 class="pb-4 title-medium">
      Discover Thrilling Adventures in Africa's Wilderness
    </h1>

    <!--
    doesn't work
		<OutlineButton href="#tours">
			<h1 class="px-4 py-1 title-large">See Tours</h1>
		</OutlineButton>-->
  </div>
</section>

<!--Tours-->
<section class="section text-left shadow-lg" id="tours">
  <div class="flex flex-col gap-8 items-center inner-section">
    <div class="text-center">
      <h1 class="display-large">Safari Tour Packages</h1>
      <h1 class="headline-small">Click on a tour to learn more!</h1>
      <h1 class="body-medium text-outline pt-4 max-w-xl">
        * Each Journey is only a starting point and is fully customizeable. <br
        />
        * Prices displayed are estimations and may vary.
      </h1>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-10 xl:grid-cols-3 xl:-mx-8 2xl:-mx-4"
    >
      {#each tours as tour}
        <TourCard {tour} />
      {/each}
    </div>
  </div>
</section>

<FAQSection faqs={safariFaq} />
