import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort',
    'delete'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort',
    'patch'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/apply': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/apply',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear',
    'post'
  >;
  'POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/reapply': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/reapply',
    'post'
  >;
}

/**
 * `DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort`
 *
 */
export function del(
  params?: IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort']['response']
> {
  return {
    method: 'delete',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort',
    paramDefs: {
      header: ['If-Match'],
      path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
    },
    params,
  };
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort`
 *
 * The sorting for the table. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort']['response']
> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort`
 *
 */
export function update(
  body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort']['body'],
  params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort']['response']
> {
  return {
    method: 'patch',
    path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort',
    paramDefs: {
      path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
    },
    params,
    body,
  };
}

export const apply = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/apply`
   *
   * Perform a sort operation.
   */
  create: function create(
    body: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/apply']['body'],
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/apply']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/apply']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/apply',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      },
      params,
      body,
    };
  },
};

export const clear = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear`
   *
   * Clears the sorting that is currently on the table. While this doesn&#x27;t modify the table&#x27;s ordering, it clears the state of the header buttons.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/clear',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      },
      params,
    };
  },
};

export const reapply = {
  /**
   * `POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/reapply`
   *
   * Reapplies the current sorting parameters to the table.
   */
  create: function create(
    params?: IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/reapply']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/reapply']['response']
  > {
    return {
      method: 'post',
      path: '/drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/reapply',
      paramDefs: {
        path: ['drive-id', 'driveItem-id', 'workbookTable-id'],
      },
      params,
    };
  },
};
