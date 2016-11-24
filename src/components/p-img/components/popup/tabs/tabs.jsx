import React from 'react';
import FilterTab from './filter-tab';
import {filterTypes} from '../../../constants';
import './tabs.scss';


export const Tabs = () => {
  return (
    <div className="popup-tabs-container">
      <FilterTab filter={filterTypes.SHOW_IMAGES}>
        Images
      </FilterTab>

      <FilterTab filter={filterTypes.SHOW_GIF_IMAGES}>
        Gifs
      </FilterTab>
    </div>
  );
};

export default Tabs;
