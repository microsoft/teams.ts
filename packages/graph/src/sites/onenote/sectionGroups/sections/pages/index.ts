import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ContentClient } from './content';
import { CopyToSectionClient } from './copyToSection';
import { OnenotePatchContentClient } from './onenotePatchContent';
import { ParentNotebookClient } from './parentNotebook';
import { ParentSectionClient } from './parentSection';

/**
 * /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages
 * Provides operations to manage the pages property of the microsoft.graph.onenoteSection entity.
 */
export class PagesClient {
  protected baseUrl =
    '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages';
  protected http: http.Client;

  constructor(
    protected readonly onenoteSectionId: string,
    options?: http.Client | http.ClientOptions
  ) {
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
   * `/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content`
   *
   * Provides operations to manage the media for the site entity.
   */
  content(onenotePageId: string) {
    return new ContentClient(onenotePageId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/copyToSection`
   *
   * Provides operations to call the copyToSection method.
   */
  copyToSection(onenotePageId: string) {
    return new CopyToSectionClient(onenotePageId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/onenotePatchContent`
   *
   * Provides operations to call the onenotePatchContent method.
   */
  onenotePatchContent(onenotePageId: string) {
    return new OnenotePatchContentClient(onenotePageId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook`
   *
   * Provides operations to manage the parentNotebook property of the microsoft.graph.onenotePage entity.
   */
  parentNotebook(onenotePageId: string) {
    return new ParentNotebookClient(onenotePageId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection`
   *
   * Provides operations to manage the parentSection property of the microsoft.graph.onenotePage entity.
   */
  parentSection(onenotePageId: string) {
    return new ParentSectionClient(onenotePageId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
        { name: 'onenotePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenoteSection-id': this.onenoteSectionId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages`
   *
   * The collection of pages in the section.  Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages',
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
        { name: 'sectionGroup-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenoteSection-id': this.onenoteSectionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}`
   *
   * The collection of pages in the section.  Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
        { name: 'onenotePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenoteSection-id': this.onenoteSectionId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
        { name: 'onenotePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenoteSection-id': this.onenoteSectionId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages',
      [
        { name: 'site-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'onenoteSection-id': this.onenoteSectionId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages']['response']
      );
  }
}
