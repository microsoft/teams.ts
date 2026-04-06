import fs from 'fs';
import http from 'http';

import os from 'os';
import path from 'path';

import express from 'express';
import supertest from 'supertest';

import { ExpressAdapter } from './express-adapter';

describe('ExpressAdapter', () => {
  let server: http.Server;
  let adapter: ExpressAdapter;

  afterEach(() => {
    if (server) {
      server.close();
    }
  });

  it('should initialize without errors', () => {
    server = http.createServer();
    expect(() => {
      adapter = new ExpressAdapter(server);
    }).not.toThrow();
  });

  it('should accept an Express app and handle requests without double handling', async () => {
    const app = express();
    app.get('/health', (_req, res) => {
      res.json({ ok: true });
    });

    adapter = new ExpressAdapter(app);

    adapter.registerRoute('POST', '/api/messages', async ({ body }) => {
      return { status: 200, body: { echo: (body as Record<string, unknown>).message } };
    });

    // User manages the server themselves
    server = http.createServer(app);

    // Verify custom routes on the Express app still work
    const healthRes = await supertest(server).get('/health').expect(200);
    expect(healthRes.body).toEqual({ ok: true });

    // Verify teams route registered by the adapter works
    const botRes = await supertest(server)
      .post('/api/messages')
      .send({ message: 'hello' })
      .expect(200);
    expect(botRes.body).toEqual({ echo: 'hello' });
  });

  it('should throw on start/stop when Express app is passed', async () => {
    const app = express();
    adapter = new ExpressAdapter(app);

    await expect(adapter.start(3000)).rejects.toThrow('server lifecycle is managed externally');
    await expect(adapter.stop()).rejects.toThrow('server lifecycle is managed externally');
  });

  describe('route registration and request handling', () => {
    it('should handle POST requests with JSON body parsing', async () => {
      server = http.createServer();
      adapter = new ExpressAdapter(server);

      const mockHandler = jest.fn(async ({ body }) => {
        return { status: 200, body: { echo: (body as Record<string, unknown>).message } };
      });

      adapter.registerRoute('POST', '/api/messages', mockHandler);

      const response = await supertest(server)
        .post('/api/messages')
        .send({ message: 'hello' })
        .expect(200);

      expect(response.body).toEqual({ echo: 'hello' });
      expect(mockHandler).toHaveBeenCalled();
    });

    it('should extract request headers correctly', async () => {
      server = http.createServer();
      adapter = new ExpressAdapter(server);

      let extractedHeaders: Record<string, string | string[]> | undefined;

      adapter.registerRoute('POST', '/api/test', async ({ headers }) => {
        extractedHeaders = headers;
        return { status: 200, body: { ok: true } };
      });

      await supertest(server)
        .post('/api/test')
        .set('Authorization', 'Bearer token123')
        .set('X-Custom-Header', 'custom-value')
        .expect(200);

      expect(extractedHeaders).toBeDefined();
      expect(extractedHeaders!['authorization']).toBe('Bearer token123');
      expect(extractedHeaders!['x-custom-header']).toBe('custom-value');
    });

    it('should handle errors in route handlers gracefully', async () => {
      server = http.createServer();
      adapter = new ExpressAdapter(server);

      adapter.registerRoute('POST', '/api/error', async () => {
        throw new Error('Handler error');
      });

      // Express default error handler should catch this and return 500
      const response = await supertest(server)
        .post('/api/error')
        .expect(500);

      // Express default error handler sends HTML error page in development
      expect(response.text).toContain('Error');
    });

    it('should set Content-Type to application/json for responses', async () => {
      server = http.createServer();
      adapter = new ExpressAdapter(server);

      adapter.registerRoute('POST', '/api/test', async () => {
        return { status: 200, body: { data: 'test' } };
      });

      const response = await supertest(server)
        .post('/api/test')
        .expect(200);

      expect(response.headers['content-type']).toMatch(/application\/json/);
    });

  });

  describe('static file serving', () => {
    it('should configure static file serving without errors', () => {
      server = http.createServer();
      adapter = new ExpressAdapter(server);

      expect(() => {
        adapter.serveStatic('/static', './public');
      }).not.toThrow();
    });

    it('should serve static files from directory', async () => {
      // Create a temporary directory with a test file
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'express-static-test-'));
      const testHtml = path.join(tmpDir, 'index.html');
      fs.writeFileSync(testHtml, '<html><body>Test Page</body></html>');

      try {
        server = http.createServer();
        adapter = new ExpressAdapter(server);

        adapter.serveStatic('/tabs/test', tmpDir);

        const response = await supertest(server)
          .get('/tabs/test/index.html')
          .expect(200);

        expect(response.text).toContain('Test Page');
      } finally {
        // Clean up
        fs.unlinkSync(testHtml);
        fs.rmdirSync(tmpDir);
      }
    });

    it('should serve index.html when accessing directory path with trailing slash', async () => {
      // Create a temporary directory with an index.html file
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'express-static-test-'));
      const indexHtml = path.join(tmpDir, 'index.html');
      fs.writeFileSync(indexHtml, '<html><body>Index Page</body></html>');

      try {
        server = http.createServer();
        adapter = new ExpressAdapter(server);

        adapter.serveStatic('/tabs/test', tmpDir);

        // Accessing /tabs/test/ with trailing slash should serve index.html
        const response = await supertest(server)
          .get('/tabs/test/')
          .expect(200);

        expect(response.text).toContain('Index Page');
      } finally {
        // Clean up
        fs.unlinkSync(indexHtml);
        fs.rmdirSync(tmpDir);
      }
    });
  });
});
