import { json } from "@sveltejs/kit";
import { API_BASE_URL } from "$lib/config";

export const GET = async ({ url }) => {
	const prompt = url.searchParams.get("prompt");
	const wordLimit = url.searchParams.get("word_limit") || "300"; // Default to 300 if not provided
	const temperature = url.searchParams.get("temperature") || "0"; // Default to 0.8 if not provided
	const prompt_type = url.searchParams.get("prompt_type") || "generic"; // Default to generic if not provided

	if (!prompt) {
		return json({ error: "No prompt provided" }, { status: 400 });
	}

	const apiUrl = `${API_BASE_URL}/improve?word_limit=${wordLimit}&prompt=${encodeURIComponent(prompt)}&temperature=${temperature}&prompt_type=${prompt_type}`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			return json(
				{ error: `API call failed with status ${response.status}: ${response.statusText}` },
				{ status: 500 }
			);
		}

		const data = await response.json();
		return json({ improvedPrompt: data });
	} catch (error) {
		console.error("Error calling external API:", error);
		return json(
			{ error: "Failed to improve prompt due to an external API error." },
			{ status: 500 }
		);
	}
};