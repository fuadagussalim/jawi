import { useSpring, animated } from 'react-spring'

const AnimatedLine = () => {
  console.log('animated')
  const props = useSpring({
    from: { y: 0 },
    to: { y: typeof window !== 'undefined' ? window.scrollY : 0 },
    config: { duration: 1000 },
    onFrame: (props) => {
      // Update the line position on each frame
      const line = document.getElementById('line')
      if (line) {
        line.style.transform = `translateY(${props.y}px)`
      }
    }
  })

  return (
    <animated.div
      id="line"
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        width: 2,
        height: '100vh',
        backgroundColor: 'red',
        transform: props.y.interpolate(y => `translateY(${y}px)`)
      }}
    />
  )
}

export default AnimatedLine