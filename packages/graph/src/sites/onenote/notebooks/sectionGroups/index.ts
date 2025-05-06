import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { ParentNotebookClient } from './parentNotebook';
import { ParentSectionGroupClient } from './parentSectionGroup';
import { SectionGroupsSectionGroupsClient } from './sectionGroupsSectionGroups';
import { SectionsClient } from './sections';

/**
 * /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups
 * Provides operations to manage the sectionGroups property of the microsoft.graph.notebook entity.
 */
export class SectionGroupsClient {
  protected baseUrl = '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups';
  protected http: http.Client;

  constructor(
    protected readonly notebookId: string,
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
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook`
   *
   * Provides operations to manage the parentNotebook property of the microsoft.graph.sectionGroup entity.
   */
  parentNotebook(sectionGroupId: string) {
    return new ParentNotebookClient(sectionGroupId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup`
   *
   * Provides operations to manage the parentSectionGroup property of the microsoft.graph.sectionGroup entity.
   */
  parentSectionGroup(sectionGroupId: string) {
    return new ParentSectionGroupClient(sectionGroupId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups`
   *
   * Provides operations to manage the sectionGroups property of the microsoft.graph.sectionGroup entity.
   */
  sectionGroupsSectionGroups(sectionGroupId: string) {
    return new SectionGroupsSectionGroupsClient(sectionGroupId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections`
   *
   * Provides operations to manage the sections property of the microsoft.graph.sectionGroup entity.
   */
  sections(sectionGroupId: string) {
    return new SectionsClient(sectionGroupId, this.http);
  }

  /**
   * `DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'notebook-id': this.notebookId,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups`
   *
   * The section groups in the notebook. Read-only. Nullable.
   */
  async list(
    params?: Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups',
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
      ],
      {
        ...(params || {}),
        'notebook-id': this.notebookId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups']['response']
      );
  }

  /**
   * `GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
   *
   * The section groups in the notebook. Read-only. Nullable.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'notebook-id': this.notebookId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
      );
  }

  /**
   * `PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}',
      [
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
        { name: 'sectionGroup-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'notebook-id': this.notebookId,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}']['response']
      );
  }

  /**
   * `POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups`
   *
   */
  async create(
    body: Endpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups']['body'],
    params?: Endpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups',
      [
        { name: 'site-id', in: 'path' },
        { name: 'notebook-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'notebook-id': this.notebookId,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups']['response']
      );
  }
}
