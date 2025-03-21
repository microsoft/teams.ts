import {
  KeyboardEvent,
  useEffect,
  useRef,
  FormEvent,
  forwardRef,
  ForwardedRef,
  useCallback,
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
}

/**
 * ContentEditableArea component - a contentEditable div that mimics the behavior of Textarea
 */
const ContentEditableArea = forwardRef<HTMLDivElement, ContentEditableAreaProps>(
  (
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
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
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

    const rootClassName = mergeClasses(
      classes.base,
      disabled && classes.disabled,
      !disabled && classes.interactive,
      !disabled && appearance === 'outline' && classes.outline,
      !disabled && appearance === 'outline' && classes.outlineInteractive,
      !disabled && appearance.startsWith('filled') && classes.filled,
      !disabled && appearance === 'filled-darker' && classes['filled-darker'],
      !disabled && appearance === 'filled-lighter' && classes['filled-lighter'],
      className
    );

    const contentEditableClassName = mergeClasses(
      classes.contentEditableBase,
      classes[size],
      disabled && classes.contentEditableDisabled
    );

    // Update empty state on input
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
      <span className={rootClassName}>
        <div
          ref={ref}
          role="textbox"
          aria-multiline
          aria-disabled={disabled}
          className={contentEditableClassName}
          contentEditable={!disabled}
          onInput={handleInput}
          onKeyDown={onKeyDown}
          data-placeholder={placeholder}
          suppressContentEditableWarning={true}
          {...rest}
          title={'Compose Box'}
        />
      </span>
    );
  }
) as React.ForwardRefExoticComponent<
  ContentEditableAreaProps & React.RefAttributes<HTMLDivElement>
>;

ContentEditableArea.displayName = 'ContentEditableArea';
export default ContentEditableArea;
