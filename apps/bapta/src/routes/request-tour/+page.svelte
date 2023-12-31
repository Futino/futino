<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import type { Database } from "$lib/supabase.types";
  import journeys from "$lib/journeys";
  import { journeysStore } from "$lib/journeysStore";
  import { onMount } from "svelte";
  import JourneyCard from "$lib/components/molecules/JourneyCard.svelte";
  import AccommodationToggle from "../tours/AccommodationToggle.svelte";
  import { goto } from "$app/navigation";

  // Create a Supabase client object
  const supabase = createClient<Database>(
    "https://qnzxoapdhdycrblbeovn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs"
  );
  const accommodationOptions = [
    { label: "Midrange", index: 0, for: "midrange" },
    { label: "Luxury", index: 1, for: "luxury" },
  ];

  let standard: number = -1; // 0 is midrange, 1 is Luxury

  async function requestTour(e) {
    console.log("inserting test data");
    let rawData = new FormData(e.target);

    let formData: {
      firstName: string;
      lastName: string;
      email: string;
      whatsapp: string;
      people: string;
      message: string;
    } = {
      firstName: "",
      lastName: "",
      email: "",
      whatsapp: "",
      people: "",
      message: "",
    };

    // Assign data values from input elements.
    for (let field of rawData) {
      const [key, value]: [string, FormDataEntryValue] = field;
      formData[key as keyof typeof formData] = value as string;
    }

    goto("/thank-you");

    // Supabase only has one name property
    let journeys: string = $journeysStore.toString().replaceAll("-", " ");
    journeys = `${
      standard == -1 ? "No Preference." : accommodationOptions[standard].label
    } ${journeys}`;
    console.log(journeys);
    const { data, error } = await supabase.from("baptaTours").insert([
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        people: formData.people,
        tours: journeys,
        message: formData.message,
      },
    ]);
    console.log(error);
    $journeysStore = [];
  }

  function cancelForm() {
    journeysStore.reset();
    goto("/tours");
    $journeysStore = [];
  }
</script>

<div
  class="flex flex-col w-full h-full shadow-lg shadow-background lg:grid-cols-2 card-shadow grid-rows-2 px-4 lg:px-10 py-40 justify-center place-items-center border-b  border-secondary/40 bg-[url('/images/safari/18.webp')] bg-cover bg-left"
>
  <h1 class="font-bold text-primary display-medium">Request Your Tour</h1>

  <hr class="w-40 py-4" />
  <div class="grid grid-cols-1 md:grid-cols-5 place-items-center gap-5">
    <div
      class="rounded-lg shadow-lg col-span-3 shadow-black bg-surface/70 h-full p-5 title-large sm:headline-medium lg:display-small justify-items-center"
    >
      <h2>Your Selection:</h2>
      <h3 class="body-large max-w-xl mx-auto">
        * Each Journey is only a starting point and is fully customizeable. <br
        />
        * Prices displayed are estimations and may vary.
      </h3>
      <div class="text-left flex flex-col gap-8 pt-2">
        {#each $journeysStore as journeyId}
          <JourneyCard {journeyId} />
        {/each}
      </div>
    </div>

    <div
      class="p-5 rounded-lg self-start shadow-lg w-full max-w-xl col-span-2 shadow-black bg-surface/70 prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl prose-invert prose-main justify-items-center mx-auto"
    >
      <form class="flex flex-col gap-5" on:submit|preventDefault={requestTour}>
        <input
          class="bg-surface/70 border-black"
          type="text"
          name="firstName"
          placeholder="First Name *"
          required
        />
        <input
          class="bg-surface/70 border-black"
          name="lastName"
          type="text"
          placeholder="Last Name *"
          required
        />

        <input
          class="bg-surface/70 border-black"
          name="email"
          type="text"
          placeholder="Email *"
          required
        />
        <input
          class="bg-surface/70 border-black"
          name="whatsapp"
          placeholder="WhatsApp"
          type="text"
        />
        <input
          class="bg-surface/70 border-black"
          name="people"
          type="number"
          placeholder="People *"
          required
        />
        <div class="flex flex-col">
          <label
            for="message"
            class="block pt-4 title-large text-left text-primary"
            >Tell us more</label
          >
          <textarea
            id="message"
            rows="4"
            class="bg-surface/70 border-black"
            name="message"
            placeholder="I want to ask about..."
          />
        </div>
        <div class="-ml-2">
          <label
            for="accomodation"
            class="block ml-2 pt-4 title-large text-left text-primary"
            >Pick a standard:</label
          >

          <AccommodationToggle
            promotions={accommodationOptions}
            bind:activeTabValue={standard}
          />
        </div>
        <button
          type="submit"
          id="request"
          class="py-2 shadow-lg rounded-lg text-center bg-secondary text-secondary-on display-small"
        >
          Request Quote
        </button>
        <button
          type="reset"
          on:click={() => cancelForm()}
          id="request"
          class="py-2 shadow-lg rounded-lg text-center bg-surface text-surface-on headline-medium uppercase"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
</div>
