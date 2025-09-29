const express = require('express');
const axios = require('axios');
const app = express();

// Router with grouped paths
const apiV1Router = express.Router();
const apiV2Router = express.Router();

// API v1 routes - should be grouped under /api/v1
apiV1Router.get('/users', async (req, res) => {
  // Expected full_path: /api/v1/users
  const users = await axios.get('https://external-api.com/users');
  res.json(users.data);
});

apiV1Router.post('/users', async (req, res) => {
  // Expected full_path: /api/v1/users
  await axios.post('https://validation-api.com/users', req.body);
  res.status(201).json({ status: 'created' });
});

apiV1Router.get('/users/:id', (req, res) => {
  // Expected full_path: /api/v1/users/:id
  res.json({ id: req.params.id });
});

apiV1Router.get('/posts', async (req, res) => {
  // Expected full_path: /api/v1/posts
  const posts = await fetch('https://external-api.com/posts');
  res.json(await posts.json());
});

// API v2 routes - should be grouped under /api/v2
apiV2Router.get('/users', (req, res) => {
  // Expected full_path: /api/v2/users
  res.json({ version: 'v2' });
});

// Mount routers with prefixes
app.use('/api/v1', apiV1Router);  // Group prefix
app.use('/api/v2', apiV2Router);  // Group prefix

// Direct routes (no grouping)
app.get('/health', (req, res) => {
  // Expected full_path: /health
  res.json({ status: 'healthy' });
});

app.get('/status', (req, res) => {
  // Expected full_path: /status
  res.json({ status: 'ok' });
});

// Nested grouping with middleware
const adminRouter = express.Router();
adminRouter.get('/stats', (req, res) => {
  // Expected full_path: /admin/stats
  res.json({ stats: 'data' });
});

app.use('/admin', adminRouter);  // Another group

app.listen(3000);