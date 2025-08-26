import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/events/{event-id}/instances': Operation<'/me/events/{event-id}/instances', 'get'>;
}

/**
  * `GET /me/events/{event-id}/instances`
  *
  * Get the instances (occurrences) of an event for a specified time range.  If the event is a seriesMaster type, this API returns the 
occurrences and exceptions of the event in the specified time range.
  */
export function list(
  params?: IEndpoints['GET /me/events/{event-id}/instances']['parameters']
): EndpointRequest<IEndpoints['GET /me/events/{event-id}/instances']['response']> {
  return {
    method: 'get',
    path: '/me/events/{event-id}/instances',
    paramDefs: [
      { name: 'startDateTime', in: 'query' },
      { name: 'endDateTime', in: 'query' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'event-id', in: 'path' },
    ],
    params,
  };
}
