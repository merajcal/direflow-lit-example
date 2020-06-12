import React, { FC, useContext, useState, useEffect } from 'react';
import { EventContext, Styled } from 'direflow-component';
import styles from './App.css';

interface IProps {
  componentTitle: string;
  sampleList: string[];
}

const App: FC<IProps> = (props) => {
  const [initialList, setInitialList] = useState<string[]>([]);

  useEffect(() => {
    setInitialList(props.sampleList);
  }, [props.sampleList]);

  const renderSampleList = initialList.map((sample: string) => (
    <div key={sample} className='sample-text'>
      → {sample}
    </div>
  ));

  return (
    <Styled styles={styles}>
      <div className='app'>
        <div className='top'>
          <div className='header-image' />
        </div>
        <div className='bottom'>
          <div className='header-title'>{props.componentTitle}</div>
          <div>{renderSampleList}</div>
          <button className='button'>
            Click me!
          </button>
        </div>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Direflow Lit',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

export default App;
