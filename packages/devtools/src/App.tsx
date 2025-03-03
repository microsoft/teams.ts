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
import useTheme from './hooks/useTheme';
import useAppClasses from './App.styles';
import { SocketClient } from './socket-client';

import { ActivityEvent } from './types/Event';
import { ChatContext, useChatStore } from './stores/ChatStore';
import { ActivityContext, useActivityStore } from './stores/ActivityStore';
import { CardContext, useCardStore } from './stores/CardStore';
import ChatScreen from './screens/ChatScreen/ChatScreen';
import DevtoolsBanner from './components/DevtoolsBanner/DevtoolsBanner';
import PageNavButton from './components/PageNavButton/PageNavButton';
import ActivitiesScreen from './screens/ActivitiesScreen/ActivitiesScreen';
import CardsScreen from './screens/CardsScreen';

const socket = new SocketClient();

export default function App() {
  const classes = useAppClasses();
  const [theme] = useTheme();
  const activityStore = useActivityStore();
  const chatStore = useChatStore();
  const cardStore = useCardStore();

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let mounted = true;

    const connectSocket = async () => {
      try {
        await socket.connect();
        if (mounted) {
          console.info('Connected to server...');
          setConnected(true);
        }
      } catch (error) {
        if (mounted) {
          console.error('Connection error:', error);
          setConnected(false);
        }
      }
    };

    connectSocket();

    // Set up socket event handlers
    socket.on('disconnect', () => {
      if (mounted) {
        console.info('Disconnected from server...');
        setConnected(false);
      }
    });

    // Set up activity event handler
    const handleActivity = (event: ActivityEvent) => {
      activityStore.put(event);
      chatStore.onActivity(event);
    };

    socket.on('activity', handleActivity);

    // Cleanup function
    return () => {
      mounted = false;
      socket.off('activity');

      // Disconnect the socket
      socket.disconnect(() => {
        console.info('Disconnected from server...');
      });
    };
  }, [activityStore, chatStore]); // Add dependencies explicitly

  const fluentTheme = useMemo(() => {
    return theme === 'dark' ? teamsDarkTheme : teamsLightTheme;
  }, [theme]);

  return (
    <FluentProvider theme={fluentTheme}>
      <ChatContext.Provider value={chatStore}>
        <ActivityContext.Provider value={activityStore}>
          <CardContext.Provider value={cardStore}>
            <Toaster />
            <Body1 id="app-root" className={mergeClasses(classes.default, classes.appContainer)}>
              <BrowserRouter basename="/devtools" data-tid="browser-router">
                <nav id="app-sidebar" className={classes.sideBar} aria-label="Sidebar navigation">
                  <header id="banner" className={classes.header}>
                    <DevtoolsBanner connected={connected} />
                  </header>
                </nav>
                <div id="app-content" className={classes.mainLayout} data-tid="main-layout">
                  <nav
                    id="top-nav"
                    className={classes.pageNavContainer}
                    aria-label="Page navigation"
                    data-tid="top-nav"
                  >
                    <div className={classes.navButtonContainer}>
                      <PageNavButton to="/" iconType="chat" label="Chat" />
                      <PageNavButton to="/cards" iconType="cards" label="Cards" />
                      <PageNavButton to="/activities" iconType="activities" label="Activities" />

                      {/* TODO: Add logs page back once implemented */}
                      {/* <PageNavButton
                        to="/logs"
                        iconType="logs"
                        label="Logs"
                      /> */}
                    </div>
                  </nav>
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
          </CardContext.Provider>
        </ActivityContext.Provider>
      </ChatContext.Provider>
    </FluentProvider>
  );
}
