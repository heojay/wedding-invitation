import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();
const URI = process.env['MONGODB_URI'];

let mongoClient = null;
let database = null;

export async function connectToDatabase() {
	try {
		if (mongoClient && database) {
			return { mongoClient, database };
		}
		if (!URI) {
			console.error('Please add your Mongo URI to .env.local');
			return;
		}
		if (process.env.NODE_ENV === 'development') {
			if (!global._mongoClient) {
				mongoClient = await new MongoClient(URI).connect();
				global._mongoClient = mongoClient;
			} else {
				mongoClient = global._mongoClient;
			}
		} else {
			mongoClient = await new MongoClient(URI).connect();
		}
		database = await mongoClient.db();
		return { mongoClient, database };
	} catch (e) {
		console.error(e);
	}
}

export async function getGuestbookCollection() {
	const { database } = await connectToDatabase();
	return database.collection('guestbook-dummy');
}
