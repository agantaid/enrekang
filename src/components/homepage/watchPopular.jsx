import { Center, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import langHome from './lang';
import '../../../node_modules/video-react/dist/video-react.css';
import CardWatch from './cardWatch';

// https://video-react.js.org/components/player/
// player di react

const WatchPopular = ({ videos }) => {
  // lang
  const { locale } = useRouter();
  const { titleWatch } = langHome[locale];

  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Center mb="45px">
        <Text fontSize={{ base: '18px', md: '36px' }} fontWeight="600">
          {titleWatch}
        </Text>
      </Center>
      <Slider {...settings}>
        {videos?.map((video) => (
          <CardWatch
            key={video.id}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/videos/${video?.name}`}
          />
        ))}
      </Slider>
    </div>
  );
};

export default WatchPopular;
