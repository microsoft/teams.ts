import fastify, { FastifyInstance } from 'fastify';
import { HttpMethod, IHttpAdapter, HttpRouteHandler } from '@microsoft/teams.apps/dist/http/adapter';

/**
 * Fastify adapter for HttpServer
 *
 * Handles Fastify-specific HTTP framework concerns:
 * - Fastify app creation and initialization
 * - Route registration via Fastify routing
 * - Request/response data extraction and sending
 * - Server lifecycle management
 *
 * Usage:
 *   const adapter = new FastifyAdapter();
 *   const app = new App({ httpAdapter: adapter });
 *   await app.initialize();
 *   await app.start(3978);
 */
export class FastifyAdapter implements IHttpAdapter {
  protected fastify: FastifyInstance;
  protected isUserProvidedInstance: boolean;

  constructor(instance?: FastifyInstance) {
    this.isUserProvidedInstance = !!instance;
    this.fastify = instance || fastify({ logger: true });
  }

  /**
   * Get the Fastify instance for adding custom routes/plugins
   */
  get instance(): FastifyInstance {
    return this.fastify;
  }

  /**
   * Register a route handler for a given HTTP method and path
   */
  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void {
    this.fastify.route({
      method,
      url: path,
      handler: async (request, reply) => {
        try {
          const response = await handler({
            body: request.body as unknown,
            headers: request.headers as Record<string, string>
          });
          reply.status(response.status).send(response.body);
        } catch (err) {
          reply.status(500).send({ error: 'Internal server error' });
        }
      }
    });
  }

  /**
   * Start the server
   * Throws if instance was user-provided
   */
  async start(port: number): Promise<void> {
    if (this.isUserProvidedInstance) {
      throw new Error(
        'Cannot call start() when Fastify instance was provided by user. ' +
        'User should call fastify.listen() directly.'
      );
    }

    await this.fastify.listen({ port, });
  }

  /**
   * Stop the server
   */
  async stop(): Promise<void> {
    if (!this.isUserProvidedInstance) {
      await this.fastify.close();
    }
  }
}
