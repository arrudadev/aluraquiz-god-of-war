import { Lottie } from '@crello/react-lottie';

import loadingAnimation from '../../animations/loading.json';
import { Card, CardContent, CardHeader } from '../Card';

const LoadingWidget: React.FC = () => {
  return (
    <Card>
      <CardHeader>Carregando...</CardHeader>

      <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{
            animationData: loadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default LoadingWidget;
