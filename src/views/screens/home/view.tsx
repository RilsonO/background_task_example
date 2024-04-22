import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Button } from '../../components/button/view';
import { useHomeViewModel } from './view-model';

export function Home() {
  const { handleRegisterMyTask, handleUnregisterMyTask } = useHomeViewModel();
  return (
    <SafeAreaView style={styles.Container}>
      <Button title='Register' onPress={handleRegisterMyTask} />
      <Button title='Unregister' onPress={handleUnregisterMyTask} />
    </SafeAreaView>
  );
}
