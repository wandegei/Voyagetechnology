import Lottie from 'react-lottie';

const LottiePlay = ({json}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: json,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

export default LottiePlay;
