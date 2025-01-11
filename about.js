```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the fetch call fails
  const data = await fetch('/api/data');
  const json = await data.json();
  return (
    <div>
      <h1>About Page</h1>
      <p>{json.message}</p> 
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate a network error or delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  // Simulate an error response
  res.status(500).json({ error: 'Failed to fetch data' });
}
```