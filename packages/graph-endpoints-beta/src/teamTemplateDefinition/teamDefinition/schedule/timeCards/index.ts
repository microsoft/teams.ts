import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/clockIn': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/clockIn',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/clockOut': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/clockOut',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirm': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirm',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirmForUser': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirmForUser',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/endBreak': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/endBreak',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/startBreak': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/startBreak',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplateDefinition-id', 'timeCard-id'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards`
 *
 * The time cards in the schedule.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}`
 *
 * The time cards in the schedule.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'timeCard-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'timeCard-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
    },
    params,
    body,
  };
}

export const clockIn = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/clockIn`
   *
   * Clock in to start a timeCard.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/clockIn']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/clockIn']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/clockIn']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/clockIn',
      paramDefs: {
        path: ['teamTemplateDefinition-id'],
      },
      params,
      body,
    };
  },
};

export const clockOut = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/clockOut`
   *
   * Clock out to end an open timeCard.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/clockOut']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/clockOut']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/clockOut']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/clockOut',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const confirm = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirm`
   *
   * Confirm a specific timeCard.
   */
  create: function create(
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirm']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirm']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirm',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'timeCard-id'],
      },
      params,
    };
  },
};

export const confirmForUser = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirmForUser`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirmForUser']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirmForUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirmForUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/confirmForUser',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const endBreak = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/endBreak`
   *
   * End the open break in a specific timeCard.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/endBreak']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/endBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/endBreak']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/endBreak',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const startBreak = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/startBreak`
   *
   * Start a break in a specific timeCard.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/startBreak']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/startBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/startBreak']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/startBreak',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};
