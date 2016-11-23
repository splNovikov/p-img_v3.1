import React from 'react';
import FilterTab from './filterTab';
import './tabs.scss';

export const Tabs = () => {
  return (
    <div className="popup-tabs-container">
      <FilterTab filter='SHOW_IMAGES'>
        Images
      </FilterTab>

      <FilterTab filter='SHOW_GIF_IMAGES'>
        Gifs
      </FilterTab>
    </div>
  );
};

export default Tabs;
