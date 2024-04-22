import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import styles from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.Container} {...rest}>
      <Text style={styles.Title}>{title}</Text>
    </TouchableOpacity>
  );
}
