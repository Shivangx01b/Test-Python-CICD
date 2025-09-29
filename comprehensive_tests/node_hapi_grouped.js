const Hapi = require('@hapi/hapi');
const axios = require('axios');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  // Grouped routes under /api/v1 prefix
  server.route([
    {
      method: 'GET',
      path: '/api/v1/users',
      handler: async (request, h) => {
        // Expected full_path: /api/v1/users
        const response = await axios.get('https://external-api.com/users');
        return response.data;
      }
    },
    {
      method: 'POST', 
      path: '/api/v1/users',
      handler: async (request, h) => {
        // Expected full_path: /api/v1/users
        await axios.post('https://validation-api.com/users', request.payload);
        return { status: 'created' };
      }
    },
    {
      method: 'GET',
      path: '/api/v1/users/{id}',
      handler: (request, h) => {
        // Expected full_path: /api/v1/users/{id}
        return { id: request.params.id };
      }
    },
    {
      method: 'GET',
      path: '/api/v1/posts',
      handler: async (request, h) => {
        // Expected full_path: /api/v1/posts
        const response = await fetch('https://external-api.com/posts');
        return response.json();
      }
    }
  ]);

  // Grouped routes under /api/v2 prefix
  server.route([
    {
      method: 'GET',
      path: '/api/v2/users', 
      handler: (request, h) => {
        // Expected full_path: /api/v2/users
        return { version: 'v2' };
      }
    }
  ]);

  // Direct routes (no grouping)
  server.route([
    {
      method: 'GET',
      path: '/health',
      handler: (request, h) => {
        // Expected full_path: /health
        return { status: 'healthy' };
      }
    },
    {
      method: 'GET', 
      path: '/status',
      handler: (request, h) => {
        // Expected full_path: /status
        return { status: 'ok' };
      }
    }
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();