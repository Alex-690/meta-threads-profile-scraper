import assert from 'assert';
import { parseThreadsProfile } from '../src/extractors/threads_profile_parser.js';

(async () => {
const result = await parseThreadsProfile("testuser");

assert.ok(result.username === "testuser");
assert.ok(typeof result.follower_count === "number");
assert.ok(typeof result.full_name === "string");

console.log("All tests passed.");
})();