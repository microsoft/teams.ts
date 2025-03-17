import { Page } from '../types/Page';

export default function CustomScreen(page: Page) {
  return <iframe src={page.url} height="100%" width="100%" />;
}
