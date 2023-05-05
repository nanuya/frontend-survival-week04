import { createRoot } from 'react-dom/client';
import App from './App';

function main() {
  const $root = document.getElementById('root');

  if (!$root) return;

  createRoot($root).render(<App />);
}

main();
