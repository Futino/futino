<script lang="ts">
  const hourlyRate = 25.45;
  const cogs = 5.35;
  const markup = 1.4; // 40%
  const maintenanceHours = 1;

  let chosenHours = 5;

	$: hours = chosenHours + maintenanceHours;
	$: expenses = hours * hourlyRate + cogs;
	$: markedUp = expenses * markup;
	// Calculate stripe fees
	$: fees = markedUp * 0.0713 + 0.6;
	$: price = markedUp + fees;
</script>

<input type="number" name="chosenHours" bind:value={chosenHours} />
<p>{price}</p>
