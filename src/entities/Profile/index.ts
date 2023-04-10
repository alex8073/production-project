export { IProfile, IProfileSchema } from './types/profile';

export { profileReducer, profileActions } from './slice/profileSlice';

export { fetchProfileData } from './services/fetchProfileData/fetchProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { getProfileData } from './selectors/getProfileData/getProfileData';
export { getProfileError } from './selectors/getProfileError/getProfileError';
export { getProfileLoading } from './selectors/getProfileLoading/getProfileLoading';
