import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';

const TASK_NAME = 'MY_TASK';

TaskManager.defineTask(TASK_NAME, () => {
  try {
    const receivedNewData = `My Task (fetch): ${Math.random()}`;
    console.log(receivedNewData);
    return receivedNewData
      ? BackgroundFetch.BackgroundFetchResult.NewData
      : BackgroundFetch.BackgroundFetchResult.NoData;
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

const register = () => {
  return BackgroundFetch.registerTaskAsync(TASK_NAME, {
    minimumInterval: 2, //seconds
    stopOnTerminate: false,
    startOnBoot: true,
  });
};

const unregister = () => {
  return BackgroundFetch.unregisterTaskAsync(TASK_NAME);
};

export default { register, unregister };
