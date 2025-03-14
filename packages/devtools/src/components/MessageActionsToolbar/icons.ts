import {
  bundleIcon,
  DeleteRegular,
  DeleteFilled,
  EditFilled,
  EditRegular,
  FluentIcon,
  SearchFilled,
  SearchRegular,
  TextQuote16Filled,
  TextQuote16Regular,
  MoreHorizontalRegular,
  MoreHorizontal20Filled,
} from '@fluentui/react-icons/lib/fonts';

const EditIcon = bundleIcon(EditFilled as FluentIcon, EditRegular as FluentIcon);

const TextQuoteIcon = bundleIcon(TextQuote16Filled as FluentIcon, TextQuote16Regular as FluentIcon);

const SearchIcon = bundleIcon(SearchFilled as FluentIcon, SearchRegular as FluentIcon);

const DeleteIcon = bundleIcon(DeleteFilled as FluentIcon, DeleteRegular as FluentIcon);

const MoreHorizontalIcon = bundleIcon(
  MoreHorizontal20Filled as FluentIcon,
  MoreHorizontalRegular as FluentIcon
);

export { DeleteIcon, EditIcon, MoreHorizontalIcon, SearchIcon, TextQuoteIcon };
