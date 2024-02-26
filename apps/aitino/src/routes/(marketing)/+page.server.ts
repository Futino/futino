import { fail, type Actions } from "@sveltejs/kit";
import { supabase } from "$lib/supabase";
import { z } from "zod";
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "../schema";
import axios from "axios";

const waitlistSchema = z.object({
	email: z.string().email({ message: "Invalid email address" })
});

export const load = async (event) => {
	const contactForm = await superValidate(formSchema);
	const waitlistForm = await superValidate(waitlistSchema);

	const session = await event.locals.getSession();

	// Always return { form } in load and form actions.
	return { contactForm, waitlistForm };
};

export const actions = {
	register: async ({ request }) => {
		const waitlistForm = await superValidate(request, waitlistSchema);

		if (!waitlistForm.valid) {
			return fail(400, {
				waitlistForm
			});
		}

		const { email } = waitlistForm.data;

		// check if user already register

		const selectAll = await supabase.from("waitlist_users").select("*").eq("email", email).single();
		// console.log(selectAll, 'all emails');

		const check_if_user_already_register = await supabase
			.from("waitlist_users")
			.select("*")
			.eq("email", email)
			.single();

		// console.log(check_if_user_already_register, 'check if user already register');
		if (check_if_user_already_register && check_if_user_already_register.data !== null) {
			return fail(400, {
				invalid: true,
				error: "You have already joined the waitlist. See you Soon 👋"
			});
		}

		const { data, error } = await supabase
			.from("waitlist_users")
			.insert([{ email: email }])
			.select();

		if (error) {
			return fail(400, {
				invalid: true,
				error: error.message
			});
		}

		return {
			success: true,
			message: "You have successfuly joined the waitlist. See you Soon 👋"
		};
	},
	contactUs: async ({ request }) => {
		const form = await superValidate(request, formSchema);

		console.log(form, "from backend");

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { name, email, description } = form.data;

		console.log(form.data.name, form.data.email, form.data.description);

		const { data, error } = await supabase
			.from("contact_form")
			.insert([{ name: name, email: email, description: description }])
			.select();

		if (error) {
			return fail(400, {
				invalid: true
			});
		}

		return {
			success: true
		};
	},
	ImprovePrompt: async ({ request, url }) => {
		console.log("from backend");
		const prompt = url.searchParams.get("prompt");
		const response = await axios.get(
			`https://api.aiti.no/improve?word_limit=300&prompt=${prompt}}`
		);

		return {
			success: true,
			message: "this is a test success"
		};
	}
} satisfies Actions;