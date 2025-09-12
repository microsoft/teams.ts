import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    'delete'
  >;
  'GET /teams/{team-id}/schedule/timeCards': Operation<
    '/teams/{team-id}/schedule/timeCards',
    'get'
  >;
  'GET /teams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    'patch'
  >;
  'POST /teams/{team-id}/schedule/timeCards': Operation<
    '/teams/{team-id}/schedule/timeCards',
    'post'
  >;
  'POST /teams/{team-id}/schedule/timeCards/clockIn': Operation<
    '/teams/{team-id}/schedule/timeCards/clockIn',
    'post'
  >;
  'POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
    'post'
  >;
  'POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
    'post'
  >;
  'POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser',
    'post'
  >;
  'POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
    'post'
  >;
  'POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak': Operation<
    '/teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 * Delete a timeCard instance in a schedule.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'timeCard-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/timeCards`
 *
 * Retrieve a list of timeCard entries in a schedule.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/schedule/timeCards']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/timeCards',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 * Get the properties and relationships of a timeCard object by ID.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['team-id', 'timeCard-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}`
 *
 * Replace an existing timeCard with updated values.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/schedule/timeCards/{timeCard-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}',
    paramDefs: {
      path: ['team-id', 'timeCard-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/schedule/timeCards`
 *
 * Create a timeCard instance in a schedule.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/schedule/timeCards']['body'],
  params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timeCards']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/schedule/timeCards',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const clockIn = {
  /**
   * `POST /teams/{team-id}/schedule/timeCards/clockIn`
   *
   * Clock in to start a timeCard.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/clockIn']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/clockIn']['parameters']
  ): EndpointRequest<IEndpoints['POST /teams/{team-id}/schedule/timeCards/clockIn']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/timeCards/clockIn',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const clockOut = {
  /**
   * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut`
   *
   * Clock out to end an open timeCard.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}/clockOut',
      paramDefs: {
        path: ['team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const confirm = {
  /**
   * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm`
   *
   * Confirm a specific timeCard.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}/confirm',
      paramDefs: {
        path: ['team-id', 'timeCard-id'],
      },
      params,
    };
  },
};

export const confirmForUser = {
  /**
   * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}/confirmForUser',
      paramDefs: {
        path: ['team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const endBreak = {
  /**
   * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak`
   *
   * End the open break in a specific timeCard.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}/endBreak',
      paramDefs: {
        path: ['team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};

export const startBreak = {
  /**
   * `POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak`
   *
   * Start a break in a specific timeCard.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['body'],
    params?: IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/schedule/timeCards/{timeCard-id}/startBreak',
      paramDefs: {
        path: ['team-id', 'timeCard-id'],
      },
      params,
      body,
    };
  },
};
