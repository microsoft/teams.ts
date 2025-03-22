import {
  KeyboardEvent,
  useEffect,
  useRef,
  FormEvent,
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  ClipboardEvent,
  memo,
} from 'react';
import { mergeClasses } from '@fluentui/react-components';

import useContentEditableAreaClasses from './ContentEditableArea.styles';

interface ContentEditableAreaProps {
  /**
   * Styling the ContentEditableComposeBox should use.
   * @default outline
   */
  appearance?: 'outline' | 'filled-darker' | 'filled-lighter';

  /**
   * The default value of the ContentEditableComposeBox.
   */
  defaultValue?: string;

  /**
   * Size of the ContentEditableComposeBox.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The value of the ContentEditableComposeBox.
   */
  value: string | '';

  /**
   * Placeholder text when the ContentEditableComposeBox is empty
   */
  placeholder?: string;

  /**
   * When true, the control will be immutable by user interaction.
   */
  disabled?: boolean;

  /**
   * Called when the value changes
   */
  onInputChange: (e: FormEvent<HTMLDivElement>) => void;

  /**
   * Additional class name for the root element
   */
  className?: string;

  /**
   * Called when a key is pressed
   */
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;

  /**
   * Called when the defaultValue is set
   */
  onDefaultValue: (defaultValue: string) => void;

  /**
   * Toolbar component to render next to the textbox
   */
  toolbar: React.ReactNode;

  /**
   * Children to render below the text content
   */
  children?: React.ReactNode;

  /**
   * Whether to allow rich text input. Defaults to false.
   * // TODO: handle rich text input.
   */
  allowRichText?: boolean;
}

/**
 * ContentEditableArea component - a contentEditable div that mimics the behavior of Textarea
 */
const ContentEditableAreaBase: ForwardRefRenderFunction<
  HTMLDivElement,
  ContentEditableAreaProps
> = (
  {
    size = 'medium',
    appearance = 'outline',
    value,
    defaultValue,
    onInputChange,
    placeholder,
    disabled = false,
    className,
    onKeyDown,
    onDefaultValue,
    toolbar,
    children,
    allowRichText = false,
    ...rest
  },
  ref
) => {
  if (!ref) {
    throw new Error('ContentEditableComposeBox requires a ref');
  }
  const areaRef = ref as React.MutableRefObject<HTMLDivElement | null>;
  const isFirstMount = useRef(true);
  const classes = useContentEditableAreaClasses();

  // Handle both defaultValue and value changes
  useEffect(() => {
    if (!areaRef.current) return;

    // Handle defaultValue on first mount
    if (isFirstMount.current) {
      if (defaultValue !== undefined) {
        areaRef.current.textContent = defaultValue;
        onDefaultValue(defaultValue);
      }
      isFirstMount.current = false;
    }
    // Handle value changes after first mount
    else if (areaRef.current.innerText !== value) {
      areaRef.current.innerText = value || '';
    }

    // Always update empty state
    const content = areaRef.current.innerText.replace(/[\u200B\s]/g, '');
    areaRef.current.setAttribute('data-is-empty', (!content).toString());
  }, [defaultValue, value, areaRef, onDefaultValue]);

  const root = mergeClasses(
    classes.flexColumn,
    classes.base,
    classes.focusState,
    classes[size],
    disabled && classes.disabled,
    !disabled && classes.interactive,
    !disabled && appearance === 'outline' && classes.outline,
    !disabled && appearance === 'outline' && classes.outlineInteractive,
    !disabled && appearance.startsWith('filled') && classes.filled,
    !disabled && appearance === 'filled-darker' && classes['filled-darker'],
    !disabled && appearance === 'filled-lighter' && classes['filled-lighter'],
    className
  );

  const contentEditable = mergeClasses(
    classes.contentEditableBase,
    classes.placeholder,
    disabled && classes.contentEditableDisabled
  );

  const toolbarWrapper = mergeClasses(classes.toolbarWrapper, classes[size]);

  // Handle paste events to sanitize rich text
  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLDivElement>) => {
      if (disabled || allowRichText) return;

      // Prevent the default paste
      e.preventDefault();

      // Get plain text from clipboard
      const text = e.clipboardData.getData('text/plain');

      // Insert text at cursor position
      const selection = window.getSelection();
      if (!selection?.rangeCount) return;

      const range = selection.getRangeAt(0);
      range.deleteContents();

      const textNode = document.createTextNode(text);
      range.insertNode(textNode);

      // Move cursor to end of inserted text
      range.setStartAfter(textNode);
      range.setEndAfter(textNode);
      selection.removeAllRanges();
      selection.addRange(range);

      // Trigger input event
      const event = new Event('input', { bubbles: true });
      e.currentTarget.dispatchEvent(event);
    },
    [disabled, allowRichText]
  );

  // Add cleanup to input handler
  const handleInput = useCallback(
    (e: FormEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;
      const content = target.innerText.replace(/[\u200B\s]/g, '');
      target.setAttribute('data-is-empty', (!content).toString());
      onInputChange(e);
    },
    [onInputChange]
  );

  return (
    <span className={root}>
      <div className={classes.textboxRow}>
        <div className={mergeClasses(classes.flexColumn, classes.contentWrapper, classes[size])}>
          <div
            ref={ref}
            role="textbox"
            aria-multiline
            aria-disabled={disabled}
            className={contentEditable}
            contentEditable={!disabled}
            onInput={handleInput}
            onKeyDown={onKeyDown}
            onPaste={handlePaste}
            data-placeholder={placeholder}
            suppressContentEditableWarning={true}
            {...rest}
            title={'Compose Box'}
          />
          <div contentEditable={false}>{children}</div>
        </div>
        <div className={toolbarWrapper}>{toolbar}</div>
      </div>
    </span>
  );
};

const ContentEditableArea = memo(forwardRef(ContentEditableAreaBase));

ContentEditableArea.displayName = 'ContentEditableArea';
export default ContentEditableArea;
