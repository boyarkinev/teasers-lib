import './BackwardButton.css';

import { useLocation, useNavigate } from 'react-router';

import { ArrowLeft } from '@/shared/assets';
import { PATH } from '@/shared/constants';
import { Button, Divider, Image, useMantineTheme } from '@mantine/core';

/**
 * Component. Кнопка возврата на предыдущую страницу
 * @name BackwardButton
 * @layer features
 * @returns JSX
 */
export const BackwardButton = () => {
  const { state } = useLocation();
  const { colors } = useMantineTheme();
  const navigate = useNavigate();

  const handleClickBackwardBtn = () => {
    navigate(state ? state.prevPath : '/', {
      state: state.prevPath === PATH ? null : { ...state, prevPath: PATH },
    });
  };

  return (
    <Divider
      className='app-backward-btn-wrapper'
      color={colors.violet[2]}
      label={
        <Button radius='xl' onClick={handleClickBackwardBtn}>
          <Image src={ArrowLeft} />
        </Button>
      }
      labelPosition='left'
    />
  );
};
