import { configureStore } from '@reduxjs/toolkit';

import devicesReducer from './devicesSlice';
import installationsReducer from './installationSlice';
import servicesReducer from './serviceSlice';
import alertsReducer from './alertsSlice';

export const store = configureStore({
  reducer: {
    devices: devicesReducer,
    installations: installationsReducer,
    services: servicesReducer,
    alerts: alertsReducer,
  },
});
