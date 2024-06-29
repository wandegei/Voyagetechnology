import React from 'react';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = (message, status) => {
  if (status) {
    toast (message);
    return;
  }

  toast.error (message);

};

export default ToastMessage;
