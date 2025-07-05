import React from 'react';
import { useAlert } from '../../../contexts/AlertContext';

export default function AlertBox() {
  const { alerts } = useAlert();

  const getStyles = (type) => {
    switch (type) {
      case 'success':
        return { backgroundColor: '#e6ffed', borderColor: '#3bb77e' };
      case 'error':
        return { backgroundColor: '#ffe6e6', borderColor: '#ff4d4f' };
      case 'info':
      default:
        return { backgroundColor: '#f0f4ff', borderColor: '#409eff' };
    }
  };

  return (
    <div style={wrapperStyles}>
      {alerts.map((alert, index) => {
        const styles = getStyles(alert.type);
        return (
          <div
            key={alert.id}
            style={{
              ...alertBoxStyles,
              display: 'flex',
              gap: '1em',
              alignItems: 'center',
              backgroundColor: styles.backgroundColor,
              border: `1px solid ${styles.borderColor}`,
              marginBottom: index === 0 ? 0 : '10px',
            }}
          >
          {alert.ntype === 'notification' ?
              <img src="/icons/notification.png" style={{width: '.8em'}} alt="notification-icon" /> :
              <img src="/icons/notification.png" alt="notification-icon" />
          }
            {alert.message}
          </div>
        );
      })}
    </div>
  );
}

const wrapperStyles = {
  position: 'fixed',
  right: '10px',
  bottom: '10px',
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'flex-end',
  zIndex: 3000,
};

const alertBoxStyles = {
  padding: '14px 20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  color: '#333',
  minWidth: '260px',
  fontSize: '14px',
  fontWeight: 500,
};
