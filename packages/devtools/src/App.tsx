import {
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useDebugValue,
  useState,
} from "react";
import {
  Body1,
  FluentProvider,
  mergeClasses,
  teamsDarkTheme,
  teamsLightTheme,
  Toaster,
} from "@fluentui/react-components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import ActivitiesScreen from "./screens/ActivitiesScreen/ActivitiesScreen";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import Logger from "./components/Logger/Logger";
import PageNav from "./components/PageNav/PageNav";
import CardsScreen from "./screens/CardsScreen";
import CustomScreen from "./screens/CustomScreen";
import useTheme from "./hooks/useTheme";
import { useActivityStore } from "./stores/ActivityStore";
import { useChatStore } from "./stores/ChatStore";
import { MetadataContext, useMetadataStore } from "./stores/MetadataStore";
import { ActivityEvent } from "./types/Event";
import { Page } from "./types/Page";
import useAppClasses from "./App.styles";
import { SocketClient } from "./socket-client";

const socket = new SocketClient();

// Memoized selectors
const selectMetadataPages = (state: any) =>
  state.metadata?.pages as Page[] | undefined;
const selectPutActivity = (state: any) => state.put;
const selectOnActivity = (state: any) => state.onActivity;
const selectSetMetadata = (state: any) => state.set;

export default function App() {
  const classes = useAppClasses();
  const [theme] = useTheme();
  const socketRef = useRef(socket);
  const [connected, setConnected] = useState(socket.connected);

  // Use specific selectors with debug values
  const metadataPages = useMetadataStore(selectMetadataPages);
  useDebugValue(
    metadataPages?.length ?? 0,
    (count) => `${count} metadata pages`,
  );

  const putActivity = useActivityStore(selectPutActivity);
  const onActivity = useChatStore(selectOnActivity);
  const setMetadata = useMetadataStore(selectSetMetadata);

  const handleConnect = useCallback(() => {
    Logger.info("Connected to server...");
    setConnected(true);
  }, []);

  const handleDisconnect = useCallback(() => {
    Logger.info("Disconnected from server...");
    setConnected(false);
  }, []);

  const handleActivity = useCallback(
    (event: ActivityEvent) => {
      // Batch store updates to prevent multiple re-renders
      Promise.resolve().then(() => {
        putActivity(event);
        onActivity(event);
      });
    },
    [putActivity, onActivity],
  );

  const handleMetadata = useCallback(
    (event: { body: any }) => {
      setMetadata(event.body);
    },
    [setMetadata],
  );

  useEffect(() => {
    const socket = socketRef.current;

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("activity", handleActivity);
    socket.on("metadata", handleMetadata);

    socket.connect();

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("activity");
      socket.off("metadata");
      socket.disconnect();
    };
  }, [handleConnect, handleDisconnect, handleActivity, handleMetadata]);

  const fluentTheme = useMemo(() => {
    return theme === "dark" ? teamsDarkTheme : teamsLightTheme;
  }, [theme]);

  return (
    <FluentProvider theme={fluentTheme}>
      <MetadataContext.Provider value={useMetadataStore()}>
        <BrowserRouter basename="/devtools" data-tid="browser-router">
          {/*
                Note: The accessibility warning about focusable aria-hidden elements is a known false positive
                for tabster dummy elements. These elements are intentionally designed to redirect focus while
                remaining hidden from screen readers. See discussion:
                https://github.com/microsoft/fluentui/issues/25133#issuecomment-1279371471
              */}
          <Body1
            id="app-root"
            data-tabster='{"root":{"deloser":true}}'
            className={mergeClasses(classes.default, classes.appContainer)}
          >
            <PageNav connected={connected} />
            <main id="page-content" className={classes.mainContent}>
              <Routes>
                <Route
                  path=""
                  element={<ChatScreen isConnected={connected} />}
                />
                <Route path="cards" element={<CardsScreen />} />
                <Route path="activities" element={<ActivitiesScreen />} />
                {metadataPages?.map((page: Page) => (
                  <Route
                    key={page.name}
                    path={page.name}
                    element={<CustomScreen {...page} />}
                  />
                ))}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </Body1>
        </BrowserRouter>
        <Toaster position="top" />
      </MetadataContext.Provider>
    </FluentProvider>
  );
}

App.displayName = "App";
