import React from 'react'
import { useAnimationControl } from './FinalScene'

export function AnimationMenu() {
  const { currentAnimation, setCurrentAnimation } = useAnimationControl()

  // Add all available animations from your GLB file here
  const animations = ['jumpdown', 'walk', 'run', 'idle']

  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      background: 'rgba(0,0,0,0.5)',
      padding: '10px',
      borderRadius: '5px'
    }}>
      {animations.map(anim => (
        <button
          key={anim}
          onClick={() => setCurrentAnimation(anim)}
          style={{
            margin: '5px',
            padding: '5px 10px',
            background: currentAnimation === anim ? 'lightblue' : 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          {anim}
        </button>
      ))}
    </div>
  )
}