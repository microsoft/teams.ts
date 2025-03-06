import {
  Body1,
  FluentProvider,
  mergeClasses,
  teamsDarkTheme,
  teamsLightTheme,
  Toaster,
} from '@fluentui/react-components';
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { ActivityContext, useActivityStore } from './stores/ActivityStore';
import { ActivityEvent } from './types/Event';
import { CardContext, useCardStore } from './stores/CardStore';
import { ChatContext, useChatStore } from './stores/ChatStore';
import { SocketClient } from './socket-client';
import ActivitiesScreen from './screens/ActivitiesScreen/ActivitiesScreen';
import CardsScreen from './screens/CardsScreen';
import ChatScreen from './screens/ChatScreen/ChatScreen';
import DevtoolsBanner from './components/DevtoolsBanner/DevtoolsBanner';
import Logger from './components/Logger/Logger';
import PageNav from './components/PageNav/PageNav';
import useAppClasses from './App.styles';
import useTheme from './hooks/useTheme';

const socket = new SocketClient();

export default function App() {
  const classes = useAppClasses();
  const [theme] = useTheme();
  const activityStore = useActivityStore();
  const chatStore = useChatStore();
  const cardStore = useCardStore();
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
    socket.on('disconnect', () => {
      Logger.info('Disconnected from server...');
      setConnected(false);
    });
  }, [activityStore, chatStore]);

  const fluentTheme = useMemo(() => {
    return theme === 'dark' ? teamsDarkTheme : teamsLightTheme;
  }, [theme]);

  return (
    <FluentProvider theme={fluentTheme}>
      <ChatContext.Provider value={chatStore}>
        <ActivityContext.Provider value={activityStore}>
          <CardContext.Provider value={cardStore}>
            <Body1 id="app-root" className={mergeClasses(classes.default, classes.appContainer)}>
              <BrowserRouter basename="/devtools" data-tid="browser-router">
                <nav id="app-sidebar" className={classes.sideBar} aria-label="Sidebar navigation">
                  <header id="banner" className={classes.header}>
                    <DevtoolsBanner connected={connected} />
                  </header>
                </nav>
                <div id="app-content" className={classes.mainLayout} data-tid="main-layout">
                  <PageNav />
                  <main id="page-content" className={classes.mainContent}>
                    <Routes>
                      <Route path="" element={<ChatScreen isConnected={connected} />} />
                      <Route path="cards" element={<CardsScreen />} />
                      <Route path="activities" element={<ActivitiesScreen />} />
                      {/* <Route path="logs" element={<Logs />} /> */}
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>
                </div>
              </BrowserRouter>
            </Body1>
            <Toaster />
          </CardContext.Provider>
        </ActivityContext.Provider>
      </ChatContext.Provider>
    </FluentProvider>
  );
}

App.displayName = 'App';
