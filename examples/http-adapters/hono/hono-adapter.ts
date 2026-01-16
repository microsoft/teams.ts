import http from 'http';
import { Hono, Context } from 'hono';
import { IHttpAdapter, IRouteConfig } from '@microsoft/teams.apps/dist/plugins/http/adapter';

/**
 * Hono adapter for ConfigurableHttpPlugin
 *
 * Handles Hono-specific HTTP framework concerns:
 * - Accepts an existing Hono app (with your own routes)
 * - Route registration via Hono routing (adds Teams bot routes)
 * - Request/response data extraction and sending
 * - Server lifecycle management
 */
export class HonoAdapter implements IHttpAdapter {
  protected hono: Hono;
  protected server: http.Server;

  /**
   * Create adapter with your existing Hono app
   * @param hono Your Hono app with your custom routes
   */
  constructor(hono: Hono) {
    this.hono = hono;
    // Create server - will be attached in initialize()
    this.server = http.createServer();
  }

  /**
   * Get the underlying HTTP server
   */
  getServer(): http.Server {
    return this.server;
  }

  /**
   * Register a route with Hono
   */
  registerRoute(config: IRouteConfig): void {
    const { method, path, handler } = config;

    // Convert handler to Hono handler signature
    const honoHandler = async (c: Context) => {
      try {
        // Parse body the Hono way
        let body: any = {};
        if (c.req.method !== 'GET' && c.req.method !== 'HEAD') {
          body = await c.req.json().catch(() => ({}));
        }

        const headers = Object.fromEntries(c.req.raw.headers.entries());

        let responseData: { status: number; body: any } | undefined;

        // Provide helpers to the handler
        await handler({
          extractRequestData: () => ({
            body,
            headers
          }),
          sendResponse: (response) => {
            responseData = response;
          }
        });

        // Send the response
        if (responseData) {
          return c.json(responseData.body, responseData.status as any);
        } else {
          return c.json({ error: 'No response provided' }, 500);
        }
      } catch (err) {
        console.error('Hono handler error:', err);
        return c.json({ error: 'Internal server error' }, 500);
      }
    };

    // Register with Hono using the appropriate method
    switch (method.toLowerCase()) {
      case 'get':
        this.hono.get(path, honoHandler);
        break;
      case 'post':
        this.hono.post(path, honoHandler);
        break;
      case 'put':
        this.hono.put(path, honoHandler);
        break;
      case 'patch':
        this.hono.patch(path, honoHandler);
        break;
      case 'delete':
        this.hono.delete(path, honoHandler);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  }

  /**
   * Initialize - attach Hono request handler to Node.js server
   */
  async initialize(): Promise<void> {
    // Simple approach: manually convert Node.js request to Web API Request
    // This is what @hono/node-server does internally
    this.server.on('request', async (req, res) => {
      try {
        const url = `http://${req.headers.host || 'localhost'}${req.url}`;

        // Read body as string for POST/PUT/PATCH
        let bodyData: string | undefined;
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          bodyData = await new Promise<string>((resolve, reject) => {
            let data = '';
            req.on('data', (chunk) => { data += chunk; });
            req.on('end', () => resolve(data));
            req.on('error', reject);
          });
        }

        // Create Web API Request for Hono
        const webRequest = new Request(url, {
          method: req.method,
          headers: req.headers as HeadersInit,
          body: bodyData
        });

        // Call Hono's fetch - it will route through registered routes and parse JSON
        const webResponse = await this.hono.fetch(webRequest);

        // Convert Web API Response to Node.js response
        res.statusCode = webResponse.status;
        webResponse.headers.forEach((value, key) => {
          res.setHeader(key, value);
        });
        const body = await webResponse.text();
        res.end(body);
      } catch (err) {
        console.error('Hono adapter error:', err);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    });
  }

  /**
   * Start the server
   */
  async start(port: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.server.listen(port, () => {
        resolve();
      });

      this.server.once('error', reject);
    });
  }
}
