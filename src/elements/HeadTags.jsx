import React from 'react';
import { Helmet } from 'react-helmet';
import '@fortawesome/fontawesome-svg-core/styles.css';

import '../style.css';

const HeadTags = () => {
  const BASE_URL = 'https://fedeclaudi.github.io/';
  
  return (
    <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Federico Claudi</title>
          <meta name="description" content="Transform your writing with AI-powered editing, summarization, and style enhancement. Polpo makes human-AI collaboration seamless." />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          
          {/* Core fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Fira+Code&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Fira+Code&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=DM Serif Display"/>
              
          {/* Font Awesome */}
          <script defer src="https://kit.fontawesome.com/63bbb160c9.js" crossOrigin="anonymous"></script>

    </Helmet>
  );
};

export default HeadTags;
