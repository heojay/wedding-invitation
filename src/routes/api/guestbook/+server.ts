import { json } from '@sveltejs/kit';
import { getGuestbookCollection } from '$lib/mongo';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const collection = await getGuestbookCollection();
	const guestbooks = await collection.find().toArray();
	return json({
		guestbooks
	});
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const collection = await getGuestbookCollection();
	const guestbook = await request.json();
	await collection.insertOne(guestbook);
	return new Response();
}
