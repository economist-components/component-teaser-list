import React from 'react';
import Teaser from '@economist/component-teaser';

export default function TeaserList({ list }) {
  const teaserList = [];
  list.forEach((teaser) => {
    teaserList.push(
      <Teaser {...teaser} key={teaser.key || teaser.teaserId} />
    );
  });
  return (
    <div className="teaser-list">
      {teaserList}
    </div>
  );
}

TeaserList.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.shape({
    image: React.PropTypes.shape({
      src: React.PropTypes.string,
      title: React.PropTypes.string,
    }),
  })),
  flyTitle: React.PropTypes.string,
  title: React.PropTypes.string,
  dateTime: React.PropTypes.instanceOf(Date),
  text: React.PropTypes.string,
  link: React.PropTypes.shape({
    href: React.PropTypes.string,
  }),
  itemType: React.PropTypes.string,
  itemProp: React.PropTypes.string,
  teaserId: React.PropTypes.string,
};
