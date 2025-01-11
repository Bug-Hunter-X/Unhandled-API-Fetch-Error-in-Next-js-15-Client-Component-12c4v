```javascript
// pages/about.js

export default async function About() {
  try {
    const data = await fetch('/api/data');
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const json = await data.json();
    return (
      <div>
        <h1>About Page</h1>
        <p>{json.message}</p>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>About Page</h1>
        <p>Error: {error.message}</p>
      </div>
    );
  }
}
```