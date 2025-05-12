import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CopyToNotebookClient } from './copyToNotebook';
import { CopyToSectionGroupClient } from './copyToSectionGroup';
import { PagesClient } from './pages';
import { ParentNotebookClient } from './parentNotebook';
import { ParentSectionGroupClient } from './parentSectionGroup';

/**
 * /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections
 * Provides operations to manage the sections property of the microsoft.graph.sectionGroup entity.
 */
export class SectionsClient {
  protected baseUrl =
    '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections';
  protected http: http.Client;

  constructor(
    protected readonly sectionGroupId: string,
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
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToNotebook`
   *
   * Provides operations to call the copyToNotebook method.
   */
  copyToNotebook(onenoteSectionId: string) {
    return new CopyToNotebookClient(onenoteSectionId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/copyToSectionGroup`
   *
   * Provides operations to call the copyToSectionGroup method.
   */
  copyToSectionGroup(onenoteSectionId: string) {
    return new CopyToSectionGroupClient(onenoteSectionId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages`
   *
   * Provides operations to manage the pages property of the microsoft.graph.onenoteSection entity.
   */
  pages(onenoteSectionId: string) {
    return new PagesClient(onenoteSectionId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook`
   *
   * Provides operations to manage the parentNotebook property of the microsoft.graph.onenoteSection entity.
   */
  parentNotebook(onenoteSectionId: string) {
    return new ParentNotebookClient(onenoteSectionId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup`
   *
   * Provides operations to manage the parentSectionGroup property of the microsoft.graph.onenoteSection entity.
   */
  parentSectionGroup(onenoteSectionId: string) {
    return new ParentSectionGroupClient(onenoteSectionId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sectionGroup-id': this.sectionGroupId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections`
   *
   * The sections in the section group. Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
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
        { name: 'notebook-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sectionGroup-id': this.sectionGroupId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
   *
   * The sections in the section group. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sectionGroup-id': this.sectionGroupId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
        { name: 'onenoteSection-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sectionGroup-id': this.sectionGroupId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections',
      [
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'sectionGroup-id': this.sectionGroupId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections']['response']
      );
  }
}
