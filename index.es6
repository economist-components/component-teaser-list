import React from 'react';
import Teaser from '@economist/component-teaser';

export default class TeaserList extends React.Component {
  static get propTypes() {
    return {
      list: React.PropTypes.array.isRequired,
    };
  }
  render() {
    const teaserList = [];
    this.props.list.map((teaser) => {
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
}
