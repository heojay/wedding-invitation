import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();
const URI = process.env['MONGODB_URI'];

export async function getMongoClient(): Promise<MongoClient> {
	let client: MongoClient;

	if (!URI) {
		throw new Error('Please add your Mongo URI to .env.local');
	}
	if (process.env['NODE_ENV'] === 'development') {
		if (!global._mongoClientPromise) {
			client = new MongoClient(URI);
			global._mongoClientPromise = client.connect();
		}
		return global._mongoClientPromise;
	} else {
		client = new MongoClient(URI);
		return client.connect();
	}
}

export async function getDb() {
	return (await getMongoClient()).db();
}

export async function getGuestbookCollection() {
	return (await getDb()).collection('guestbook');
}
