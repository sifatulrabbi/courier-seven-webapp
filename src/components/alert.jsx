import React from 'react';
import { useAlert } from '../contexts';
import { FaTimes, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

function Alert() {
  const [show, setShow] = React.useState(false);
  const { alert } = useAlert();

  function toggleShow() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2500);
  }

  function hide() {
    setShow(false);
  }

  React.useEffect(() => {
    toggleShow();
  }, [alert]);

  return (
    <div className={`alert ${alert && alert.severity} ${show && 'show'}`}>
      {alert && (
        <div className='alert-body'>
          <span className='icon'>
            {alert.severity === 'error' ? (
              <FaExclamationTriangle />
            ) : (
              <FaCheck />
            )}
          </span>
          <span style={{ flexGrow: 1 }}>{alert.msg}</span>
          <button className='alert-btn' onClick={hide}>
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
}

export default Alert;
