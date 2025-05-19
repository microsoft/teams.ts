import { FC, memo, useEffect, useRef } from "react";
import {
  Button,
  Subtitle1,
  Toast,
  ToastBody,
  ToastTitle,
  useToastController,
} from "@fluentui/react-components";
import { AttachRegular } from "@fluentui/react-icons";
import { IAdaptiveCard } from "@microsoft/teams.cards";
import { useNavigate, useLocation } from "react-router";

import { adaptiveCardToolsBaseUrl } from "../components/Card/AdaptiveCard";
import Logger from "../components/Logger/Logger";
import { useCardStore } from "../stores/CardStore";

import useCardsScreenClasses from "./CardsScreen.styles";
import { sampleCard } from "./SampleCard";

const designerUrl = `${adaptiveCardToolsBaseUrl}/designer`;

interface ICardPayloadMessage {
  type: "cardPayload";
  payload: string;
}

function isCardPayloadEventData(data: any): data is ICardPayloadMessage {
  return (
    typeof data === "object" &&
    (data as ICardPayloadMessage).type === "cardPayload" &&
    typeof (data as ICardPayloadMessage).payload === "string"
  );
}

const childLog = Logger.child("CardsScreen");

const NewCardsScreen: FC = memo(() => {
  const cardsClasses = useCardsScreenClasses();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const { setCurrentCard } = useCardStore();
  const { dispatchToast } = useToastController();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === adaptiveCardToolsBaseUrl &&
        event.data === "ac-designer-ready"
      ) {
        // Send the card payload to the iframe
        iframeRef.current?.contentWindow?.postMessage(
          {
            type: "cardPayload",
            id: "card", // id is not used in the designer
            payload: JSON.stringify(sampleCard),
          },
          designerUrl,
        );
      }

      if (isCardPayloadEventData(event.data)) {
        // The iframe sent us a card payload
        const card = JSON.parse(event.data.payload) as IAdaptiveCard;

        const isEditing = location.state?.isEditing ?? false;

        childLog.debug(
          "Attaching card in mode:",
          isEditing ? "edit" : "compose",
        );
        childLog.info("Setting card in store:");

        setCurrentCard(card, isEditing ? "edit" : "compose");

        dispatchToast(
          <Toast>
            <ToastTitle>Card Attached</ToastTitle>
            <ToastBody>{`Card has been attached to the compose box.`}</ToastBody>
          </Toast>,
          { intent: "success" },
        );

        // Navigate to ChatScreen after setting the card
        navigate("/chat", { state: { isEditing } });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  });

  const onGetCurrentCardPayloadClick = () => {
    // Send a message to the iframe to get the current card payload
    iframeRef.current?.contentWindow?.postMessage(
      {
        type: "getCurrentCardPayload",
      },
      designerUrl,
    );
  };

  return (
    <div className={cardsClasses.root}>
      <div className={cardsClasses.header}>
        <Subtitle1>Adaptive Cards Designer</Subtitle1>
        <Button
          appearance="primary"
          icon={<AttachRegular />}
          onClick={onGetCurrentCardPayloadClick}
          style={{ alignSelf: "flex-end" }}
        >
          Attach card
        </Button>
      </div>
      <iframe
        id="card-designer"
        ref={iframeRef}
        className={cardsClasses.iframe}
        src={designerUrl}
        title="Adaptive Cards Designer"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
});

NewCardsScreen.displayName = "NewCardsScreen";
export default NewCardsScreen;
