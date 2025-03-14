import { useEffect, useMemo, useState } from 'react';
import {
  Body1,
  FluentProvider,
  mergeClasses,
  teamsDarkTheme,
  teamsLightTheme,
  Toaster,
} from '@fluentui/react-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Logger from './components/Logger/Logger';
import PageNav from './components/PageNav/PageNav';
import useTheme from './hooks/useTheme';
import { useActivityStore } from './stores/ActivityStore';
import { useChatStore } from './stores/ChatStore';
import { SocketClient } from './socket-client';
import ActivitiesScreen from './screens/ActivitiesScreen/ActivitiesScreen';
import CardsScreen from './screens/CardsScreen';
import ChatScreen from './screens/ChatScreen/ChatScreen';
import CustomScreen from './screens/CustomScreen';
import { ActivityEvent } from './types/Event';
import useAppClasses from './App.styles';
import { MetadataContext, useMetadataStore } from './stores/MetadataStore';

const socket = new SocketClient();

export default function App() {
  const classes = useAppClasses();
  const [theme] = useTheme();
  const metadataStore = useMetadataStore();
  const activityStore = useActivityStore();
  const chatStore = useChatStore();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const connectSocket = async () => {
      try {
        socket.connect();
        Logger.info('Connected to server...');
        setConnected(true);
      } catch (error) {
        Logger.error('Error connecting to server:', error);
        setConnected(false);
      }
    };
    connectSocket();
    return () => {
      socket.off('activity');
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleActivity = (event: ActivityEvent) => {
      activityStore.put(event);
      chatStore.onActivity(event);
    };

    socket.on('activity', handleActivity);
    socket.on('metadata', (event) => metadataStore.set(event.body));
    socket.on('disconnect', () => {
      Logger.info('Disconnected from server...');
      setConnected(false);
    });
  }, [activityStore, chatStore, metadataStore]);

  const fluentTheme = useMemo(() => {
    return theme === 'dark' ? teamsDarkTheme : teamsLightTheme;
  }, [theme]);

  return (
    <FluentProvider theme={fluentTheme}>
      <MetadataContext.Provider value={metadataStore}>
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
                <Route path="" element={<ChatScreen isConnected={connected} />} />
                <Route path="cards" element={<CardsScreen />} />
                <Route path="activities" element={<ActivitiesScreen />} />
                {metadataStore.metadata &&
                  metadataStore.metadata.pages.map((page) => (
                    <Route path={page.name} element={<CustomScreen {...page} />} />
                  ))}
                {/* <Route path="logs" element={<Logs />} /> */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </Body1>
        </BrowserRouter>
        <Toaster />
      </MetadataContext.Provider>
    </FluentProvider>
  );
}

App.displayName = 'App';
