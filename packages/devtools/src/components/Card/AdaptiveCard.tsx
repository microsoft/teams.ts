import { ComponentProps, memo, useEffect, useRef, useState } from "react";
import {
  makeStyles,
  Toast,
  ToastBody,
  ToastTitle,
  useToastController,
} from "@fluentui/react-components";
import {
  IAdaptiveCard,
  isExecuteAction,
  isOpenUrlAction,
  isSubmitAction,
} from "@microsoft/teams.cards";

export type CardWidth = "veryNarrow" | "narrow" | "standard" | "wide";

export interface AdaptiveCardProps extends ComponentProps<"div"> {
  readonly card: IAdaptiveCard;
  readonly width?: CardWidth;
}

const useAdaptiveCardStyles = makeStyles({
  root: {
    '&[data-card-width="veryNarrow"]': {
      width: "216px",
    },
    '&[data-card-width="narrow"]': {
      width: "345px",
    },
    '&[data-card-width="standard"]': {
      width: "500px",
    },
    '&[data-card-width="wide"]': {
      width: "600px",
    },
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
    display: "block",
  },
});

interface IMessage {
  type: string;
}

interface IRendererReadyMessage extends IMessage {
  type: "ac-renderer-ready";
  id: string;
}

function isRendererReadyMessage(data: any): data is IRendererReadyMessage {
  return (
    typeof data === "object" &&
    (data as IRendererReadyMessage).type === "ac-renderer-ready" &&
    typeof (data as IRendererReadyMessage).id === "string"
  );
}

interface ICardPayloadMessage extends IMessage {
  type: "cardPayload";
  id: string;
  payload: string;
}

interface IOnActionExecutedMessage extends IMessage {
  type: "ac-action-executed";
  id: string;
  action: string;
}

function isOnActionExecutedMessage(
  data: any,
): data is IOnActionExecutedMessage {
  return (
    typeof data === "object" &&
    (data as IOnActionExecutedMessage).type === "ac-action-executed" &&
    typeof (data as IOnActionExecutedMessage).action === "object"
  );
}

interface IDimensions {
  width: number;
  height: number;
}

interface IDimensionsChangedMessage extends IDimensions {
  type: "ac-dimensions-changed";
  id: string;
}

function isDimensionsChangedMessage(
  data: any,
): data is IDimensionsChangedMessage {
  return (
    typeof data === "object" &&
    (data as IDimensionsChangedMessage).type === "ac-dimensions-changed" &&
    typeof (data as IDimensionsChangedMessage).width === "number" &&
    typeof (data as IDimensionsChangedMessage).height === "number"
  );
}

export const adaptiveCardToolsBaseUrl = "https://adaptivecards.microsoft.com";

const rendererUrl = `${adaptiveCardToolsBaseUrl}/renderer.html`;

let currentCardId = 0;

const AdaptiveCardComponent = memo((props: AdaptiveCardProps) => {
  const classes = useAdaptiveCardStyles();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const effectiveWidth = props.width || "standard";
  const { dispatchToast } = useToastController();
  const [dimensions, setDimensions] = useState<IDimensions>({
    width: 0,
    height: 0,
  });
  const cardId = useRef<string>((currentCardId++).toString());

  const postMessage = (message: IMessage) => {
    iframeRef.current?.contentWindow?.postMessage(message, rendererUrl);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== adaptiveCardToolsBaseUrl) {
        // This event isn't for us
        return;
      }

      if (
        isRendererReadyMessage(event.data) &&
        event.data.id === cardId.current
      ) {
        // Pass the card payload to the iframe
        const message: ICardPayloadMessage = {
          type: "cardPayload",
          id: cardId.current,
          payload: JSON.stringify(props.card),
        };

        postMessage(message);
      }

      if (
        isDimensionsChangedMessage(event.data) &&
        event.data.id === cardId.current
      ) {
        // The iframe sent us a dimensions changed event
        const { width, height } = event.data;

        setDimensions({ width, height });
      }

      if (
        isOnActionExecutedMessage(event.data) &&
        event.data.id === cardId.current
      ) {
        if (isOpenUrlAction(event.data.action)) {
          window.open(event.data.action.url, "_blank");
        }

        if (
          isSubmitAction(event.data.action) ||
          isExecuteAction(event.data.action)
        ) {
          dispatchToast(
            <Toast>
              <ToastTitle>Card Action</ToastTitle>
              <ToastBody>{`An action of type ${event.data.action.type} was clicked. Support for handling Action.Submit and Action.Execute is coming to DevTools in a later release.`}</ToastBody>
            </Toast>,
            { intent: "warning" },
          );

          // TODO: handle Action.Execute and Action.Submit
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  });

  return (
    <div
      className={classes.root}
      data-card-width={effectiveWidth}
      style={{
        height:
          dimensions.height > 0 ? Math.ceil(dimensions.height) : undefined,
      }}
    >
      <iframe
        ref={iframeRef}
        className={classes.iframe}
        src={`${rendererUrl}?id=${cardId.current}`}
        title="Adaptive Card Renderer"
      />
    </div>
  );
});

AdaptiveCardComponent.displayName = "AdaptiveCard";

export default AdaptiveCardComponent;
