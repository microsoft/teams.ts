import { App } from '@microsoft/teams.apps';
import { AdaptiveCard, TextBlock, OpenUrlAction, ActionSet } from '@microsoft/teams.cards';
import { ConsoleLogger } from '@microsoft/teams.common/logging';

const app = new App({
  logger: new ConsoleLogger('@examples/meetings', { level: 'debug' })
});

app.on('message', async ({ reply, activity }) => {
  await reply({ type: 'typing' });
  await reply(`you said "${activity.text}"`);
});

app.on('meetingStart', async ({ activity, send }) => {
  const meetingData = activity.value;
  const startTime = new Date(meetingData.StartTime).toLocaleString();

  const card = new AdaptiveCard(
    new TextBlock(`'${meetingData.Title}' has started at ${startTime}.`, {
      wrap: true,
      weight: 'Bolder'
    }),
    new ActionSet(
      new OpenUrlAction(meetingData.JoinUrl).withTitle('Join the meeting')
    )
  );

  await send(card);
});

app.on('meetingEnd', async ({ activity, send }) => {
  const meetingData = activity.value;
  const endTime = new Date(meetingData.EndTime).toLocaleString();

  const card = new AdaptiveCard(
    new TextBlock(`'${meetingData.Title}' has ended at ${endTime}.`, {
      wrap: true,
      weight: 'Bolder'
    })
  );

  await send(card);
});

app.on('meetingParticipantJoin', async ({ activity, send }) => {
  const meetingData = activity.value;
  const member = meetingData.members[0].user.name;
  const role = meetingData.members[0].meeting.role;

  const card = new AdaptiveCard(
    new TextBlock(`${member} has joined the meeting as ${role}.`, {
      wrap: true,
      weight: 'Bolder'
    })
  );

  await send(card);
});

app.on('meetingParticipantLeave', async ({ activity, send }) => {
  const meetingData = activity.value;
  const member = meetingData.members[0].user.name;

  const card = new AdaptiveCard(
    new TextBlock(`${member} has left the meeting.`, {
      wrap: true,
      weight: 'Bolder'
    })
  );

  await send(card);
});

app.start().catch(console.error);
