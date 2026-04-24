import path from 'path';

import dotenv from 'dotenv';

import { cardAttachment, MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import {
  AdaptiveCard,
  IAdaptiveCard,
  OpenDialogData,
  SubmitAction,
  SubmitData,
  TextInput,
} from '@microsoft/teams.cards';
import { ConsoleLogger } from '@microsoft/teams.common';
import { DevtoolsPlugin } from '@microsoft/teams.dev';

dotenv.config({
  path: path.join(__dirname, '..', 'env', '.env.local'),
});

const logger = new ConsoleLogger('@tests/dialogs');

if (!process.env['BOT_ENDPOINT']) {
  logger.warn(
    'No remote endpoing detected. Using webpages for dialog will not work as expected'
  );
}

function createTaskFetchSubmitAction(title: string, dialogId: string): SubmitAction {
  return new SubmitAction().withTitle(title).withData(new OpenDialogData(dialogId));
}

const app = new App({
  logger,
  plugins: [new DevtoolsPlugin()],
});

// Hosts a static webpage at /tabs/dialog-form
app.tab('dialog-form', path.join(__dirname, 'views', 'customform'));

app.on('message', async ({ send }) => {
  await send({ type: 'typing' });

  // Create the launcher adaptive card
  const card: IAdaptiveCard = new AdaptiveCard({
    type: 'TextBlock',
    text: 'Select the examples you want to see!',
    size: 'Large',
    weight: 'Bolder',
  }).withActions(
    createTaskFetchSubmitAction('Simple form test', 'simple_form'),
    createTaskFetchSubmitAction('Webpage Dialog', 'webpage_dialog'),
    createTaskFetchSubmitAction('Multi-step Form', 'multi_step_form'),
    createTaskFetchSubmitAction('Mixed Example', 'mixed_example')
  );

  // Send the card as an attachment
  await send(new MessageActivity('Enter this form').addCard('adaptive', card));
});

app.event('error', ({ error }) => {
  logger.error('Error', error);
});

// Each dialog.open handler matches a specific dialog_id set by OpenDialogData
app.on('dialog.open.simple_form', async () => {
  const dialogCard = new AdaptiveCard(
    {
      type: 'TextBlock',
      text: 'This is a simple form',
      size: 'Large',
      weight: 'Bolder',
    },
    new TextInput()
      .withLabel('Name')
      .withIsRequired()
      .withId('name')
      .withPlaceholder('Enter your name')
  ).withActions(
    new SubmitAction()
      .withTitle('Submit')
      .withData(new SubmitData('simple_form'))
  );

  return {
    task: {
      type: 'continue',
      value: {
        title: 'Simple Form Dialog',
        card: cardAttachment('adaptive', dialogCard),
      },
    },
  };
});

app.on('dialog.open.webpage_dialog', async () => {
  return {
    task: {
      type: 'continue',
      value: {
        title: 'Webpage Dialog',
        // Here we are using a webpage that is hosted in the same
        // server as the agent. This server needs to be publicly accessible,
        // needs to set up teams.js client library (https://www.npmjs.com/package/@microsoft/teams-js)
        // and needs to be registered in the manifest.
        url: `${process.env['BOT_ENDPOINT']}/tabs/dialog-form`,
        width: 1000,
        height: 800,
      },
    },
  };
});

app.on('dialog.open.multi_step_form', async () => {
  const dialogCard = new AdaptiveCard(
    {
      type: 'TextBlock',
      text: 'This is a multi-step form',
      size: 'Large',
      weight: 'Bolder',
    },
    new TextInput()
      .withLabel('Name')
      .withIsRequired()
      .withId('name')
      .withPlaceholder('Enter your name')
  ).withActions(
    new SubmitAction()
      .withTitle('Submit')
      .withData(new SubmitData('multi_step_1'))
  );

  return {
    task: {
      type: 'continue',
      value: {
        title: 'Multi-step Form Dialog',
        card: cardAttachment('adaptive', dialogCard),
      },
    },
  };
});

// Each dialog.submit handler matches a specific action set by SubmitData
app.on('dialog.submit.simple_form', async ({ activity, send }) => {
  const name = activity.value.data.name;
  await send(`Hi ${name}, thanks for submitting the form!`);
  return {
    task: {
      type: 'message',
      value: 'Form was submitted',
    },
  };
});

// The submission from a webpage happens via the microsoftTeams.tasks.submitTask(formData)
// call.
app.on('dialog.submit.webpage_dialog', async ({ activity, send }) => {
  const name = activity.value.data.name;
  const email = activity.value.data.email;
  await send(
    `Hi ${name}, thanks for submitting the form! We got that your email is ${email}`
  );
  return { status: 200 };
});

app.on('dialog.submit.multi_step_1', async ({ activity }) => {
  const name = activity.value.data.name;
  const nextStepCard = new AdaptiveCard(
    {
      type: 'TextBlock',
      text: 'Email',
      size: 'Large',
      weight: 'Bolder',
    },
    new TextInput()
      .withLabel('Email')
      .withIsRequired()
      .withId('email')
      .withPlaceholder('Enter your email')
  ).withActions(
    new SubmitAction()
      .withTitle('Submit')
      // Carry forward data from previous step
      .withData(new SubmitData('multi_step_2', { name }))
  );
  return {
    task: {
      type: 'continue',
      value: {
        title: `Thanks ${name} - Get Email`,
        card: cardAttachment('adaptive', nextStepCard),
      },
    },
  };
});

app.on('dialog.submit.multi_step_2', async ({ activity, send }) => {
  const name = activity.value.data.name;
  const email = activity.value.data.email;
  await send(
    `Hi ${name}, thanks for submitting the form! We got that your email is ${email}`
  );
  return { status: 200 };
});

app.start(process.env.PORT || 3978).catch(console.error);
