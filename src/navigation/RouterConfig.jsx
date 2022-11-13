import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Place } from '../pages';
import { HOME, PLACE } from './CONSTANTS';

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={PLACE} element={<Place />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
