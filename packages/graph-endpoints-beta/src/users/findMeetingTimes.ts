import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/findMeetingTimes': Operation<'/users/{user-id}/findMeetingTimes', 'post'>;
}

/**
  * `POST /users/{user-id}/findMeetingTimes`
  *
  * Suggest meeting times and locations based on organizer and attendee availability, and time or location constraints specified as parameters. If findMeetingTimes cannot return any meeting suggestions, the response would indicate a reason in the emptySuggestionsReason property.
Based on this value, you can better adjust the parameters and call findMeetingTimes again. The algorithm used to suggest meeting times and locations undergoes fine-tuning from time to time. In scenarios like test environments where the input parameters and calendar data remain static, expect that the suggested results may differ over time.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/findMeetingTimes']['body'],
  params?: IEndpoints['POST /users/{user-id}/findMeetingTimes']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/findMeetingTimes']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/findMeetingTimes',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
