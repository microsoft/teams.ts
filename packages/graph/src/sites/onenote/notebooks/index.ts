import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CopyNotebookClient } from './copyNotebook';
import { GetNotebookFromWebUrlClient } from './getNotebookFromWebUrl';
import { SectionGroupsClient } from './sectionGroups';
import { SectionsClient } from './sections';

/**
 * /sites/{site-id}/onenote/notebooks
 * Provides operations to manage the notebooks property of the microsoft.graph.onenote entity.
 */
export class NotebooksClient {
  protected baseUrl = '/sites/{site-id}/onenote/notebooks';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/copyNotebook`
   *
   * Provides operations to call the copyNotebook method.
   */
  copyNotebook(notebookId: string) {
    return new CopyNotebookClient(notebookId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/getNotebookFromWebUrl`
   *
   * Provides operations to call the getNotebookFromWebUrl method.
   */
  get getNotebookFromWebUrl() {
    return new GetNotebookFromWebUrlClient(this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups`
   *
   * Provides operations to manage the sectionGroups property of the microsoft.graph.notebook entity.
   */
  sectionGroups(notebookId: string) {
    return new SectionGroupsClient(notebookId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sections`
   *
   * Provides operations to manage the sections property of the microsoft.graph.notebook entity.
   */
  sections(notebookId: string) {
    return new SectionsClient(notebookId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/onenote/notebooks`
   *
   * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/onenote/notebooks']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites/{site-id}/onenote/notebooks']['response']);
  }

  /**
   * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}`
   *
   * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/onenote/notebooks`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/notebooks']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/notebooks']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks',
      [{ name: 'site-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /sites/{site-id}/onenote/notebooks']['response']);
  }
}
