/**
 * Controls for which card width the element should be displayed.
 * If targetWidth isn't specified, the element is rendered at all card widths.
 * Using targetWidth makes it possible to author responsive cards that adapt
 * their layout to the available horizontal space.
 */
export type TargetWidth =
  | 'VeryNarrow'
  | 'Narrow'
  | 'Standard'
  | 'Wide'
  | 'atLeast:VeryNarrow'
  | 'atMost:VeryNarrow'
  | 'atLeast:Narrow'
  | 'atMost:Narrow'
  | 'atLeast:Standard'
  | 'atMost:Standard'
  | 'atLeast:Wide'
  | 'atMost:Wide';
