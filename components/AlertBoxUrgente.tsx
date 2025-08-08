import React from 'react';
import { useVturbVideoTime } from '@/hooks/useVturbVideoTime';

interface AlertBoxUrgenteProps {
  targetSeconds?: number;
}

const AlertBoxUrgente: React.FC<AlertBoxUrgenteProps> = ({ targetSeconds = 885 }) => {
  const show = useVturbVideoTime(targetSeconds);

  if (!show) return null;

  const staticBorderColor = '#e53e3e';
  const normalBackgroundColor = '#ffebee';
  // Mantém o restante do estilo estático para simplificar

  return (
    <div
      style={{
        backgroundColor: normalBackgroundColor,
        color: '#c53030',
        fontWeight: 'bold',
        fontSize: '16px',
        border: `2px dashed ${staticBorderColor}`,
        borderRadius: '8px',
        padding: '16px',
        margin: '16px auto',
        width: '100%',
        maxWidth: '640px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <span role="img" aria-label="lock" style={{ fontSize: '24px', marginRight: '12px' }}>
        🔐
      </span>
      <span>
        El sistema cerrará tu acceso si no confirmas ahora. YouTube solo mantiene activas solicitudes con retorno inmediato.
      </span>
    </div>
  );
};

export default AlertBoxUrgente; 