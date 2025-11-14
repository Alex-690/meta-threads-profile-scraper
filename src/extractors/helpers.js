js// Simulated network request and utility helpers.

export async function fetchJson(url) {
  // In absence of real Threads API access, return mock realistic data.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        profile_pic_url: "https://example.com/profile.jpg",
        hd_profile_pic_versions: [
          { height: 320, width: 320, url: "https://example.com/320.jpg" },
          { height: 640, width: 640, url: "https://example.com/640.jpg" }
        ],
        is_verified: Math.random() > 0.5,
        biography: "Sample biography text",
        bio_links: [{ url: "https://example.com" }],
        follower_count: Math.floor(Math.random() * 100000),
        full_name: "Sample User"
      });
    }, 300);
  });
}

export function generateRandomId() {
  return Math.floor(Math.random() * 1_000_000_000);
}