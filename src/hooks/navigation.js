import { useNavigation } from '@react-navigation/native';

export const useNavigationFunc = () => {
    const navigation = useNavigation();

    const navigateToDetails = (movie) => {
        navigation.navigate('details', movie);
    };

    return { navigateToDetails };
};
