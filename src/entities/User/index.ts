import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from './model/selectors/roleSelectors';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';
import { UserRole } from './model/consts/userConsts';
import { saveJsonSettings } from './model/services/saveJsonSettings';
import { useJsonSettings } from './model/selectors/jsonSettings';

export { userReducer, userActions, getUserAuthData };

export type { UserSchema, User };

export { UserRole };

export { getUserInited };

export { isUserAdmin, isUserManager, getUserRoles };

export { saveJsonSettings };

export { useJsonSettings };
