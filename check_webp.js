
import https from 'https';

const urls = [
  "https://quick-peach-3qmttuq1nx.edgeone.app/LOGO%20LONG@2x.webp",
  "https://quick-peach-3qmttuq1nx.edgeone.app/LOGO%20LONG@2x.png?format=webp",
  "https://quick-peach-3qmttuq1nx.edgeone.app/LOGO%20LONG@2x.png?fm=webp"
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`URL: ${url} - Status: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`Error fetching ${url}: ${e.message}`);
  });
});
