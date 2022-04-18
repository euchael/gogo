// React
import {useState} from 'react';

// Libs
import {Waypoint} from 'react-waypoint';
import {useSpring, animated, useTransition} from 'react-spring';

const AppFadeInLeft = ({children}) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 600,
    from: {opacity: 0, transform: 'translate3d(-25%, 0px, 0px)'},
    to: {
      opacity: !inView ? 0 : 1,
      transform: !inView
        ? 'translate3d(-25%, 0px, 0px)'
        : 'translate3d(0%, 0px, 0px)',
    },
  });

  const handleVIew = () => {
    setInview(true);
    console.log('appfadeinLeft');
  };
  return (
    <Waypoint onEnter={handleVIew}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default AppFadeInLeft;
