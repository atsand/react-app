import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  const [isShowSuccess, setIsShowSuccess] = useState(false);
  const [isShowWarning, setIsShowWarning] = useState(false);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [isShowError, setIsShowError] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const items = ['This', 'That', 'Another', 'One More'];

  return (
    <div>
      {isShowSuccess && (
        <Alert type="success" onClose={() => setIsShowSuccess(false)}>
          <h2>My success message</h2>
        </Alert>
      )}
      {isShowWarning && (
        <Alert type="warning" onClose={() => setIsShowWarning(false)}>
          <h2>My warning message</h2>
        </Alert>
      )}
      {isShowAlert && (
        <Alert type="alert" onClose={() => setIsShowAlert(false)}>
          <h2>My Alert message</h2>
        </Alert>
      )}
      {isShowError && (
        <Alert type="error" onClose={() => setIsShowError(false)}>
          <h2>My Error message</h2>
        </Alert>
      )}
      <div className="p-4">
        <Button color="primary" size="xs" onClick={() => setIsShowWarning(true)}>
          Warning
        </Button>
        <Button className="mx-4" onClick={() => setIsShowAlert(true)}>
          Alert
        </Button>
        <Button color="secondary" size="xl" onClick={() => setIsShowSuccess(true)}>
          Success
        </Button>
        <Button color="secondary" size="xl" onClick={() => setIsShowError(true)}>
          Error
        </Button>
      </div>
      <ListGroup heading="List" items={items} onSelectItem={() => handleSelectItem} />
    </div>
  );
}

export default App;
