import { Button } from './components/ui/button';
import { cn } from './lib/utils';

function App() {
  return <Button className={cn('col-span-2')}>Click me</Button>;
}

export default App;
