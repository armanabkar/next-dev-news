# Next.js Dev News

> Simple Dev news blog built with Next.js (not markdown based yet).

<h2 align="center">
  <img src="./screenshot.png" alt="next-dev-news" width="600px" />
  <br>
</h2>

## Installation & Usage

### Run the development server:

```bash
npm run dev
```

### Build for production AND generate static website into "out" folder:

```bash
npm run build
```

### Run in production:

```bash
npm start
```

### API Routes:

GET /api/articles
GET /api/articles/:id

## Posts

The blog isn't markdown based yet, so you can add your posts to ./data.js file:

```javascript
export const articles = [
  {
    id: '1',
    title: 'Post 1 Title',
    excerpt: 'Post 1 summary...',
    body: 'Post 1 body',
  },
  {
    id: '2',
    title: 'Post 2 Title',
    excerpt: 'Post 2 summary...',
    body: 'Post 2 body',
  }
]
```