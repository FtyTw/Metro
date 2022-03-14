import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'e8ae59d95e445da13e5a518624ac0972';
const LANG = 'en-US';

export { isIOS, BASE_URL, API_KEY, LANG };
