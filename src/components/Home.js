import React, { useState } from 'react';
import About from './About';
import { useSpeechSynthesis } from 'react-speech-kit';

const Home = () => {

  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
  

  return <div className='container  py-5 mt-5 jumbotron'>

<textarea rows={10} cols={40}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      /><br />
      <button onClick={() => speak({ text: value })} className='btn btn-info w-50'>Speak</button>


  </div>;

};

export default Home;
