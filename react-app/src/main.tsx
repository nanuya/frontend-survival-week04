import { createRoot } from 'react-dom/client';
import App from './App';

function main() {
  const $root = document.querySelector('#root');

  if (!$root) return null;

  return createRoot($root).render(<App />);
}

main();
