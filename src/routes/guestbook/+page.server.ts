import clientPromise from '$lib/mongo';

/** @type {import('./$types').Action} */
export async function POST({ request }) {
	const dbConnection = await clientPromise;
	const db = dbConnection.db();
	const collection = db.collection('guestbook');
	const guestbook = await request.json();
	const dbGuestbook = await collection.insertOne(guestbook);
	return { status: 200, body: { dbGuestbook } };
}
