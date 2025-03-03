import { Activity } from '@microsoft/spark.api';

export function getActivityPath(activity: Activity): string {
  const path: Array<string> = [activity.type];

  if (activity.type === 'invoke' || activity.type === 'event' || activity.type === 'command') {
    path.push(activity.name);
  }

  if (activity.type === 'installationUpdate') {
    path.push(activity.action);
  }

  if (
    activity.type === 'messageDelete' ||
    activity.type === 'messageUpdate' ||
    activity.type === 'conversationUpdate'
  ) {
    path.push(activity.channelData.eventType);
  }

  return path.join('/');
}
