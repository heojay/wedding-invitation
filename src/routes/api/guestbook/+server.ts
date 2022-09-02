import clientPromise from '$lib/mongo';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const dbConnection = await clientPromise;
	const db = dbConnection.db();
	const collection = db.collection('guestbook');
	const guestbooks = await collection.find().toArray();
	return json({
		guestbooks
	});
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const dbConnection = await clientPromise;
	const db = dbConnection.db();
	const collection = db.collection('guestbook');
	const guestbook = await request.json();
	await collection.insertOne(guestbook);
	return new Response();
}
