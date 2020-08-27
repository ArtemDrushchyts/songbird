import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './index.scss';

const Player = ({ src, from }) => (
  <AudioPlayer
    src={src}
    layout="horizontal-reverse"
    customProgressBarSection={[
      RHAP_UI.CURRENT_TIME,
      RHAP_UI.PROGRESS_BAR,
      RHAP_UI.DURATION,
      RHAP_UI.VOLUME,
    ]}
    customAdditionalControls={[]}
    customVolumeControls={[]}
    className="audio-player"
    autoPlayAfterSrcChange={false}
    // onPlay={() => {
    //   if (from === 'QuestionPanel') {
    //     document.querySelectorAll('.audio-player > audio')[1].pause();
    //   } else document.querySelectorAll('.audio-player > audio')[0].pause();
    // }}
  />
);

export default Player;
