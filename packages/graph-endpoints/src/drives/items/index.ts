export * as analytics from './analytics';
export * as children from './children';
export * as createdByUser from './createdByUser';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as permissions from './permissions';
export * as subscriptions from './subscriptions';
export * as versions from './versions';
export * as workbook from './workbook';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}',
    'delete'
  >;
  'GET /drives/{drive-id}/items': Operation<'/drives/{drive-id}/items', 'get'>;
  'GET /drives/{drive-id}/items/{driveItem-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}',
    'patch'
  >;
  'POST /drives/{drive-id}/items': Operation<'/drives/{drive-id}/items', 'post'>;
  'POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/checkin': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/checkin',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/checkout': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/checkout',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/content',
    'get'
  >;
  'PUT /drives/{drive-id}/items/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/content',
    'put'
  >;
  'DELETE /drives/{drive-id}/items/{driveItem-id}/content': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/content',
    'delete'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/copy': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/copy',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/createLink': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/createLink',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/createUploadSession',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/discardCheckout',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/follow': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/follow',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/invite': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/invite',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/listItem': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/listItem',
    'get'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/permanentDelete',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/preview': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/preview',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/restore': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/restore',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/retentionLabel': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
    'patch'
  >;
  'DELETE /drives/{drive-id}/items/{driveItem-id}/retentionLabel': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/thumbnails': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails',
    'get'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/thumbnails': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails',
    'post'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
    'patch'
  >;
  'DELETE /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
    'delete'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/unfollow': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/unfollow',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/validatePermission': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/validatePermission',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}']['response']> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items`
 *
 * Get a list of driveItem objects shared with the owner of a drive. The driveItems returned from the sharedWithMe method always include the remoteItem facet that indicates they are items from a different drive.
 */
export function list(
  params?: IEndpoints['GET /drives/{drive-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items',
    paramDefs: {
      path: ['drive-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}`
 *
 * All items contained in the drive. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}']['response']> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /drives/{drive-id}/items`
 *
 */
export function create(
  body: IEndpoints['POST /drives/{drive-id}/items']['body'],
  params?: IEndpoints['POST /drives/{drive-id}/items']['parameters']
): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items']['response']> {
  return {
    method: 'post',
    path: '/drives/{drive-id}/items',
    paramDefs: {
      path: ['drive-id'],
    },
    params,
    body,
  };
}

export const assignSensitivityLabel = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/assignSensitivityLabel',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const checkin = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/checkin`
   *
   * Check in a checked out driveItem resource, which makes the version of the document available to others.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkin']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkin']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkin']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/checkin',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const checkout = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/checkout`
   *
   * Check out a driveItem resource to prevent others from editing the document, and prevent your changes from being visible until the documented is checked in.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkout']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/checkout']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/checkout',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const content = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/content']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/content',
      paramDefs: {
        query: ['$format'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /drives/{drive-id}/items/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/content']['body'],
    params?: IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /drives/{drive-id}/items/{driveItem-id}/content']['response']
  > {
    return {
      method: 'put',
      path: '/drives/{drive-id}/items/{driveItem-id}/content',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/items/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/content']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/items/{driveItem-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const copy = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/copy`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/copy']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/copy']['parameters']
  ): EndpointRequest<IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/copy']['response']> {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/copy',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const createLink = {
  /**
  * `POST /drives/{drive-id}/items/{driveItem-id}/createLink`
  *
  * Create a link to share a driveItem driveItem. The createLink action creates a new sharing link if the specified link type doesn&#x27;t already exist for the calling application.
If a sharing link of the specified type already exists for the app, the existing sharing link is returned. DriveItem resources inherit sharing permissions from their ancestors.
  */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createLink']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createLink']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createLink']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/createLink',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const createUploadSession = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/createUploadSession']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/createUploadSession',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const discardCheckout = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout`
   *
   * Discard the check out of a driveItem. This action releases a driveItem resource that was previously checked out. Any changes made to the item while it was checked out are discarded.  The same user that performed the checkout must discard it. Another alternative is to use application permissions.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/discardCheckout']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/discardCheckout',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const extractSensitivityLabels = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/extractSensitivityLabels',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const follow = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/follow`
   *
   * Follow a driveItem.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/follow']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/follow']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/follow',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const invite = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/invite`
   *
   * Send a sharing invitation for a driveItem. A sharing invitation provides permissions to the recipients and, optionally, sends them an email to notify them that the item was shared.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/invite']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/invite']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/invite']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/invite',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const listItem = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/listItem`
   *
   * For drives in SharePoint, the associated document library list item. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/listItem']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/listItem']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/listItem',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete`
   *
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/permanentDelete']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/permanentDelete',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const preview = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/preview`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/preview']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/preview']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/preview']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/preview',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const restore = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/restore`
   *
   * Restore a deleted driveItem that is currently in the recycle bin.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/restore']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/restore']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/restore',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const retentionLabel = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/retentionLabel`
   *
   * Information about retention label and settings enforced on the driveItem. Read-write.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel`
   *
   * Lock or unlock a retention label on a driveItem that classifies content as records. For information about retention labels from an administrator&#x27;s perspective, see Use retention labels to manage the lifecycle of documents stored in SharePoint. For more information about how you can lock and unlock retention labels, see Use record versioning to update records stored in SharePoint or OneDrive.
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['response']
  > {
    return {
      method: 'patch',
      path: '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/items/{driveItem-id}/retentionLabel`
   *
   * Remove a retention label from a driveItem. For information about retention labels from an administrator&#x27;s perspective, see Use retention labels to manage the lifecycle of documents stored in SharePoint.
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/retentionLabel']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/items/{driveItem-id}/retentionLabel',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const thumbnails = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/thumbnails`
   *
   * Collection of thumbnailSet objects associated with the item. For more information, see getting thumbnails. Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/thumbnails']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/thumbnails']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/thumbnails`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/thumbnails']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/thumbnails']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/thumbnails']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}`
   *
   * Collection of thumbnailSet objects associated with the item. For more information, see getting thumbnails. Read-only. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'driveItem-id', 'thumbnailSet-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'thumbnailSet-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['drive-id', 'driveItem-id', 'thumbnailSet-id'],
      },
      params,
    };
  },
};

export const unfollow = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/unfollow`
   *
   * Unfollow a driveItem.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/unfollow']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/unfollow']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/unfollow',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const validatePermission = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/validatePermission`
   *
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/validatePermission']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/validatePermission']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/validatePermission']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/validatePermission',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};
