import { json } from '@sveltejs/kit';
import { getGuestbookCollection } from '$lib/mongo';
import { Timestamp } from 'mongodb';

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
	guestbook.date = new Timestamp(0, Math.floor(Date.now() / 1000));
	await collection.insertOne(guestbook);
	return new Response();
}
