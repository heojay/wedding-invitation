/** @type {import('./$types').PageLoad} */
export async function load({ url, fetch }) {
	const res = await fetch(`${url.origin}/api/guestbook`);
	const { guestbooks } = await res.json();
	return { guestbooks };
}
