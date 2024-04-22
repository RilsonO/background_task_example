import MyTask from '../../../services/MyTask';

export interface HomeViewModel {
  handleRegisterMyTask: () => void;
  handleUnregisterMyTask: () => void;
}

function useHomeViewModel(): HomeViewModel {
  const handleRegisterMyTask = () => {
    MyTask.register()
      .then(() => {
        console.log('task registered!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnregisterMyTask = () => {
    MyTask.unregister()
      .then(() => {
        console.log('task unregistered!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    handleRegisterMyTask,
    handleUnregisterMyTask,
  };
}

export { useHomeViewModel };
