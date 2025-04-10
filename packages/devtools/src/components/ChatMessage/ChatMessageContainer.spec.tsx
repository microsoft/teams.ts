import { render, screen } from '@testing-library/react';
import ChatMessageContainer from './ChatMessageContainer';

// Mock the date formatting utilities
jest.mock('../../utils/date-format', () => ({
  formatMessageTime: jest.fn().mockReturnValue('1:45 pm'),
  formatMessageTooltipTime: jest.fn().mockReturnValue('April 9, 2025 13:45'),
  formatMessageDateTime: jest.fn().mockReturnValue('2025-04-09T13:45:00.000Z'),
}));

// Mock the ChatStore dependency
jest.mock('../../stores/ChatStore', () => ({
  useChatStore: jest.fn().mockReturnValue({
    deleteMessage: jest.fn(),
    editMessage: jest.fn(),
  }),
}));

// Mock the ChatAvatarWrapper component
jest.mock('./ChatAvatarWrapper', () => {
  return {
    __esModule: true,
    default: function MockAvatar(props: { id: string; isConnected?: boolean }) {
      return <div data-testid={`mock-avatar-${props.id}`}>Mock Avatar</div>;
    },
  };
});

// FluentUI components are now mocked through the centralized mock in __mocks__/@fluentui/react-components.js

// This is needed to avoid issues with MessageActionsToolbar imports
jest.mock(
  '../MessageActionsToolbar/icons',
  () => ({
    EditIcon: () => <div>EditIcon</div>,
    TextQuoteIcon: () => <div>TextQuoteIcon</div>,
    DeleteIcon: () => <div>DeleteIcon</div>,
    MoreHorizontalIcon: () => <div>MoreHorizontalIcon</div>,
  }),
  { virtual: true }
);

describe('ChatMessageContainer', () => {
  const mockMessage = {
    id: '123',
    text: 'Hello world',
    createdDateTime: '2025-04-09T13:45:00Z',
    from: {
      name: 'Test User',
      user: { id: 'user-123' },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with the correctly formatted timestamp for received messages', () => {
    render(<ChatMessageContainer value={mockMessage} />);

    // Verify the formatted time is displayed
    expect(screen.getByText('1:45 pm')).toBeInTheDocument();

    // Check time element structure
    const timeElement = screen.getByText('1:45 pm');
    expect(timeElement.tagName).toBe('TIME');
    expect(timeElement).toHaveAttribute('dateTime', '2025-04-09T13:45:00.000Z');
  });

  it('renders with the correctly formatted timestamp for sent messages', () => {
    const sentMessage = {
      ...mockMessage,
      from: {
        name: 'Me',
        user: { id: 'devtools' },
      },
    };

    render(<ChatMessageContainer value={sentMessage} />);

    // Verify the formatted time is displayed
    expect(screen.getByText('1:45 pm')).toBeInTheDocument();
  });

  it('does not render time if createdDateTime is missing', () => {
    const messageWithNoTime = {
      ...mockMessage,
      createdDateTime: undefined,
    };

    render(<ChatMessageContainer value={messageWithNoTime} />);

    // Time should not be rendered
    expect(screen.queryByText('1:45 pm')).not.toBeInTheDocument();
  });
});
