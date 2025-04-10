import { FC } from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Attachment } from '@microsoft/spark.api';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { useCardValidation } from '../../../hooks/useCardValidation';
import PasteCardDialog from './PasteCardDialog';

// Mock the hooks
jest.mock('../../../hooks/useCardValidation');
jest.mock('../../../hooks/useOperatingSystem', () => ({
  __esModule: true,
  default: () => ({ isMac: false }),
}));

const mockDispatchToast = jest.fn();
jest.mock('@fluentui/react-components', () => ({
  ...jest.requireActual('@fluentui/react-components'),
  useToastController: () => ({ dispatchToast: mockDispatchToast }),
}));

// Test wrapper to provide necessary context
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
  <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
);

describe('PasteCardDialog', () => {
  const mockOnClose = jest.fn();
  const mockOnSave = jest.fn();
  const mockValidateCardInput = jest.fn();
  const mockAttachment: Attachment = {
    contentType: 'application/vnd.microsoft.card.adaptive',
    content: { type: 'AdaptiveCard', version: '1.0' },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useCardValidation as jest.Mock).mockReturnValue({ validateCardInput: mockValidateCardInput });
  });

  it('renders when open', () => {
    render(<PasteCardDialog isOpen={true} onClose={mockOnClose} onSave={mockOnSave} />, {
      wrapper: Wrapper,
    });

    expect(screen.getByText('Paste Card JSON')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Paste your card JSON here...')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<PasteCardDialog isOpen={false} onClose={mockOnClose} onSave={mockOnSave} />, {
      wrapper: Wrapper,
    });

    expect(screen.queryByText('Paste Card JSON')).not.toBeInTheDocument();
  });

  it('handles valid card input', () => {
    mockValidateCardInput.mockReturnValue({
      isValid: true,
      attachment: mockAttachment,
    });

    render(<PasteCardDialog isOpen={true} onClose={mockOnClose} onSave={mockOnSave} />, {
      wrapper: Wrapper,
    });

    const textarea = screen.getByPlaceholderText('Paste your card JSON here...');
    fireEvent.change(textarea, { target: { value: '{"type": "adaptive"}' } });

    const attachButton = screen.getByText('Attach card');
    fireEvent.click(attachButton);

    expect(mockValidateCardInput).toHaveBeenCalledWith('{"type": "adaptive"}');
    expect(mockOnSave).toHaveBeenCalledWith(mockAttachment);
    expect(mockOnClose).toHaveBeenCalled();
    expect(mockDispatchToast).not.toHaveBeenCalled();
  });

  it('handles invalid card input', () => {
    mockValidateCardInput.mockReturnValue({
      isValid: false,
      error: 'Invalid JSON format',
    });

    render(<PasteCardDialog isOpen={true} onClose={mockOnClose} onSave={mockOnSave} />, {
      wrapper: Wrapper,
    });

    const textarea = screen.getByPlaceholderText('Paste your card JSON here...');
    fireEvent.change(textarea, { target: { value: 'invalid json' } });

    const attachButton = screen.getByText('Attach card');
    fireEvent.click(attachButton);

    expect(mockValidateCardInput).toHaveBeenCalledWith('invalid json');
    expect(mockOnSave).not.toHaveBeenCalled();
    expect(mockOnClose).not.toHaveBeenCalled();
    expect(mockDispatchToast).toHaveBeenCalled();
  });

  it('handles unsupported card type', () => {
    mockValidateCardInput.mockReturnValue({
      isValid: false,
      error: 'hero cards are not supported in Teams',
      isUnsupportedType: true,
    });

    render(<PasteCardDialog isOpen={true} onClose={mockOnClose} onSave={mockOnSave} />, {
      wrapper: Wrapper,
    });

    const textarea = screen.getByPlaceholderText('Paste your card JSON here...');
    fireEvent.change(textarea, { target: { value: '{"type": "hero"}' } });

    const attachButton = screen.getByText('Attach card');
    fireEvent.click(attachButton);

    expect(mockValidateCardInput).toHaveBeenCalledWith('{"type": "hero"}');
    expect(mockOnSave).not.toHaveBeenCalled();
    expect(mockOnClose).not.toHaveBeenCalled();
    expect(mockDispatchToast).toHaveBeenCalled();
  });

  it('handles keyboard shortcut', () => {
    mockValidateCardInput.mockReturnValue({
      isValid: true,
      attachment: mockAttachment,
    });

    render(<PasteCardDialog isOpen={true} onClose={mockOnClose} onSave={mockOnSave} />, {
      wrapper: Wrapper,
    });

    const textarea = screen.getByPlaceholderText('Paste your card JSON here...');
    fireEvent.change(textarea, { target: { value: '{"type": "adaptive"}' } });
    fireEvent.keyDown(textarea, { key: 'Enter', ctrlKey: true });

    expect(mockValidateCardInput).toHaveBeenCalledWith('{"type": "adaptive"}');
    expect(mockOnSave).toHaveBeenCalledWith(mockAttachment);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('disables input and button when disabled prop is true', () => {
    render(
      <PasteCardDialog isOpen={true} onClose={mockOnClose} onSave={mockOnSave} disabled={true} />,
      { wrapper: Wrapper }
    );

    expect(screen.getByPlaceholderText('Paste your card JSON here...')).toBeDisabled();
    expect(screen.getByText('Attach card')).toBeDisabled();
  });
});
