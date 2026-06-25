const location = "some_location";

const keywords = [
  "moving abroad",
  "going abroad",
  "relocating",
  "moving",
  "shifting",
  "vacating",
  "urgent",
  "urgent sale",
  "must sell",
  "need money",
  "today only",
  "final price",
  "transfer",
  "onsite",
  "germany",
  "canada",
  "usa",
  "uk",
  "australia"
];

const products = [
  "",
  "ps5",
  "ps4",
  "gaming pc",
  "desktop",
  "computer",
  "cpu",
  "thinkcentre",
  "optiplex",
  "mini pc",
  "server",
  "raspberry pi",
  "synology",
  "qnap",
  "ups",
  "office chair",
  "monitor",
  "rtx",
  "ryzen"
];

function slug(s) {
  return s.trim().replace(/\s+/g, "-").toLowerCase();
}

const urls = [];

for (const product of products) {
  for (const keyword of keywords) {
    const query = [product, keyword].filter(Boolean).join(" ");
    urls.push(
      `https://www.olx.in/${location}/q-${slug(query)}`
    );
  }
}

console.log(urls.join("\n"));
