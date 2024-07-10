import React from 'react'
import { useProgress } from '@react-three/drei'

const planktonGreen = '#00FF00'
const chumBucketGray = '#808080'

export function Loader({ onEnter }) {
  const { progress } = useProgress()

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#0098ea', // Ocean blue background
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      zIndex: 1000,
      fontFamily: "'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif"
    }}>
      <div style={{
        fontSize: '48px',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        Welcome to The TONBucket
      </div>
      <div style={{
        width: '200px',
        height: '200px',
        background: planktonGreen,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 20px rgba(0,255,0,0.5)',
        animation: 'pulse 2s infinite'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'white',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'black',
            borderRadius: '50%'
          }} />
        </div>
      </div>
      <div style={{
        fontSize: '24px',
        margin: '20px 0',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
      }}>
        Loading PlankTONs evil plans... {progress.toFixed(0)}%
      </div>
      <div style={{
        width: '300px',
        height: '20px',
        background: chumBucketGray,
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: planktonGreen,
          transition: 'width 0.3s ease-in-out'
        }} />
      </div>
      {progress === 100 && (
        <button 
          onClick={onEnter}
          style={{
            padding: '15px 30px',
            fontSize: '24px',
            marginTop: '30px',
            cursor: 'pointer',
            background: planktonGreen,
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}
        >
          Enter the Chum Bucket
        </button>
      )}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
