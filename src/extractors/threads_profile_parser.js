import { fetchJson, generateRandomId } from './helpers.js';

export async function parseThreadsProfile(username) {
try {
// Simulated endpoint
const url = `https://www.threads.net/@${username}`;
const mockData = await fetchJson(url);

return {
url,
profileId: generateRandomId(),
is_private: false,
profile_pic_url: mockData.profile_pic_url,
username,
hd_profile_pic_versions: mockData.hd_profile_pic_versions,
is_verified: mockData.is_verified,
biography: mockData.biography,
bio_links: mockData.bio_links,
follower_count: mockData.follower_count,
pk: String(generateRandomId()),
full_name: mockData.full_name
};
} catch (err) {
console.error(`Error parsing profile for ${username}:`, err);
throw err;
}
}