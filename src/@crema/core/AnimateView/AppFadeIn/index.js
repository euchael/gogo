// React
import {useState} from 'react';

// Libs
import {Waypoint} from 'react-waypoint';
import {useSpring, animated} from 'react-spring';

const AppFadeIn = ({children}) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 600,
    to: {
      y: !inView ? 24 : 0,
      opacity: !inView ? 0 : 1,
    },
  });

  const handleVIew = () => {
    setInview(true);
    console.log('appfadein');
  };
  return (
    <Waypoint onEnter={handleVIew}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default AppFadeIn;
