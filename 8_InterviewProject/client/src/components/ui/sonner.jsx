import { Toaster as Sonner } from "sonner";

const Dot = ({ color }) => (
  <span style={{
    width: 6, height: 6, borderRadius: '50%',
    background: color, display: 'inline-block', flexShrink: 0
  }} />
);

const Toaster = ({ ...props }) => (
  <Sonner
    theme="light"
    position="bottom-right"
    duration={1000}
    icons={{
      success: <Dot color="#22c55e" />,
      info:    <Dot color="#3b82f6" />,
      warning: <Dot color="#f59e0b" />,
      error:   <Dot color="#ef4444" />,
      loading: <Dot color="#a1a1aa" />,
    }}
    toastOptions={{
      style: {
        fontFamily: 'var(--sans)',
        background: 'var(--text-h)',
        color: 'var(--bg)',
        border: '0.5px solid var(--text-h)',
        borderRadius: '8px',
        padding: '10px 14px',
        gap: '8px',
        alignItems: 'center',
        boxShadow: 'none',
        width: '260px',
      },
      classNames: {
        title: 'toast-title',
        description: 'toast-description',
      },
    }}
    {...props}
  />
);

export { Toaster };