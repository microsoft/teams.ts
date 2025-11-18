import path from 'path';

import dotenv from 'dotenv';

import { cardAttachment, MessageActivity } from '@microsoft/teams.api';
import { App } from '@microsoft/teams.apps';
import {
  AdaptiveCard,
  IAdaptiveCard,
  SubmitAction,
  TaskFetchAction,
  TaskFetchData,
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

const app = new App({
  logger,
  plugins: [new DevtoolsPlugin()],
});

// Hosts a static webpage at /tabs/dialog-form
app.tab('dialog-form', path.join(__dirname, 'views', 'customform'));

// :snippet-start: dialog-entry-point
app.on('message', async ({ send }) => {
  await send({ type: 'typing' });

  // Create the launcher adaptive card
  const card: IAdaptiveCard = new AdaptiveCard({
    type: 'TextBlock',
    text: 'Select the examples you want to see!',
    size: 'Large',
    weight: 'Bolder',
  }).withActions(
    // raw action
    {
      type: 'Action.Submit',
      title: 'Simple form test',
      data: {
        msteams: {
          type: 'task/fetch',
        },
        opendialogtype: 'simple_form',
      },
    },
    // Special type of action to open a dialog
    new TaskFetchAction({})
      .withTitle('Webpage Dialog')
      // This data will be passed back in an event so we can
      // handle what to show in the dialog
      .withValue(new TaskFetchData({ opendialogtype: 'webpage_dialog' })),
    new TaskFetchAction({})
      .withTitle('Multi-step Form')
      .withValue(new TaskFetchData({ opendialogtype: 'multi_step_form' })),
    new TaskFetchAction({})
      .withTitle('Mixed Example')
      .withValue(new TaskFetchData({ opendialogtype: 'mixed_example' }))
  );

  // Send the card as an attachment
  await send(new MessageActivity('Enter this form').addCard('adaptive', card));
});
// :snippet-end:

/**
// :snippet-start: dialog-open
app.on('dialog.open', async ({ activity }) => {
  const card: IAdaptiveCard = new AdaptiveCard()...

  // Return an object with the task value that renders a card
  return {
    task: {
      type: 'continue',
      value: {
        title: 'Title of Dialog',
        card: cardAttachment('adaptive', card),
      },
    },
  };
}
// :snippet-end:
*/

app.event('error', ({ error }) => {
  logger.error('Error', error);
});

app.on('dialog.open', async ({ activity, next }) => {
  const dialogType = activity.value.data.opendialogtype;

  // :snippet-start: dialog-simple-card
  if (dialogType === 'simple_form') {
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
    )
      // Inside the dialog, the card actions for submitting the card must be
      // of type Action.Submit
      .withActions(
        new SubmitAction()
          .withTitle('Submit')
          .withData({ submissiondialogtype: 'simple_form' })
      );

    // Return an object with the task value that renders a card
    return {
      task: {
        type: 'continue',
        value: {
          title: 'Simple Form Dialog',
          card: cardAttachment('adaptive', dialogCard),
        },
      },
    };
  }
  // :snippet-end:

  if (dialogType === 'webpage_dialog') {
    // :snippet-start: dialog-webpage
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
    // :snippet-end:
  }
  next();
});

app.on('dialog.open', async ({ activity, next }) => {
  const dialogType = activity.value.data.opendialogtype;

  if (dialogType === 'multi_step_form') {
    // :snippet-start: dialog-multi-step-step-1
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
    )
      // Inside the dialog, the card actions for submitting the card must be
      // of type Action.Submit
      .withActions(
        new SubmitAction()
          .withTitle('Submit')
          .withData({ submissiondialogtype: 'webpage_dialog_step_1' })
      );

    // Return an object with the task value that renders a card
    return {
      task: {
        type: 'continue',
        value: {
          title: 'Multi-step Form Dialog',
          card: cardAttachment('adaptive', dialogCard),
        },
      },
    };
    // :snippet-end:
  }

  next();
});

// :snippet-start: dialog-submission
app.on('dialog.submit', async ({ activity, send, next }) => {
  const dialogType = activity.value.data?.submissiondialogtype;

  if (dialogType === 'simple_form') {
    // This is data from the form that was submitted
    const name = activity.value.data.name;
    await send(`Hi ${name}, thanks for submitting the form!`);
    return {
      task: {
        type: 'message',
        // This appears as a final message in the dialog
        value: 'Form was submitted',
      },
    };
  }

  // :remove-start:
  next();
  // :remove-end:
});
// :snippet-end:

// :snippet-start: dialog-submission-webpage
// The submission from a webpage happens via the microsoftTeams.tasks.submitTask(formData)
// call.
app.on('dialog.submit', async ({ activity, send, next }) => {
  const dialogType = activity.value.data.submissiondialogtype;

  if (dialogType === 'webpage_dialog') {
    // This is data from the form that was submitted
    const name = activity.value.data.name;
    const email = activity.value.data.email;
    await send(
      `Hi ${name}, thanks for submitting the form! We got that your email is ${email}`
    );
    // You can also return a blank response
    return {
      status: 200,
    };
  }

  // :remove-start:
  next();
  // :remove-end:
});
// :snippet-end:

// :snippet-start: dialog-submission-multistep
app.on('dialog.submit', async ({ activity, send, next }) => {
  const dialogType = activity.value.data.submissiondialogtype;

  if (dialogType === 'webpage_dialog_step_1') {
    // This is data from the form that was submitted
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
      new SubmitAction().withTitle('Submit').withData({
        // This same handler will get called, so we need to identify the step
        // in the returned data
        submissiondialogtype: 'webpage_dialog_step_2',
        // Carry forward data from previous step
        name,
      })
    );
    return {
      task: {
        // This indicates that the dialog flow should continue
        type: 'continue',
        value: {
          // Here we customize the title based on the previous response
          title: `Thanks ${name} - Get Email`,
          card: cardAttachment('adaptive', nextStepCard),
        },
      },
    };
  } else if (dialogType === 'webpage_dialog_step_2') {
    const name = activity.value.data.name;
    const email = activity.value.data.email;
    await send(
      `Hi ${name}, thanks for submitting the form! We got that your email is ${email}`
    );
    // You can also return a blank response
    return {
      status: 200,
    };
  }

  // :remove-start:
  next();
  // :remove-end:
});
// :snippet-end:

app.start(process.env.PORT || 3978).catch(console.error);
