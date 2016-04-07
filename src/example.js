import React from 'react';
import TeaserList from './';

const today = new Date();
const list = [
  {
    image: {
      src: 'http://cdn.static-economist.com/sites/default/files/imagecache/original-size/20151003_WOM001_473.png',
      title: 'Just an image',
    },
    flyTitle: 'The UN, religion and development',
    title: 'Faith and secular global bodies learn to live together',
    dateTime: today,
    text: 'THERE are many reasons why sceptics might find fault with the ' +
      '17 Sustainable Development Goals, along with 169 associated targets',
    link: {
      href: 'http://www.economist.com/blogs/erasmus/2015/09/',
    },
    itemType: 'http://schema.org/BlogPosting',
    itemProp: 'blogPost',
    teaserId: '1',
  },
  {
    image: {
      src: 'http://cdn.static-economist.com/sites/default/files/imagecache/original-size/20151003_WOM001_473.png',
      title: 'Just an image',
    },
    flyTitle: 'The UN, religion and development',
    title: 'Faith and secular global bodies learn to live together',
    dateTime: today,
    text: 'THERE are many reasons why sceptics might find fault with the ' +
      '17 Sustainable Development Goals, along with 169 associated targets',
    link: {
      href: 'http://www.economist.com/blogs/erasmus/2015/09/',
    },
    itemType: 'http://schema.org/BlogPosting',
    itemProp: 'blogPost',
    teaserId: '2',
  },
  {
    image: {
      src: 'http://cdn.static-economist.com/sites/default/files/imagecache/original-size/20151003_WOM001_473.png',
      title: 'Just an image',
    },
    flyTitle: 'The UN, religion and development',
    title: 'Faith and secular global bodies learn to live together',
    dateTime: today,
    text: 'THERE are many reasons why sceptics might find fault with the ' +
      '17 Sustainable Development Goals, along with 169 associated targets',
    link: {
      href: 'http://www.economist.com/blogs/erasmus/2015/09/',
    },
    itemType: 'http://schema.org/BlogPosting',
    itemProp: 'blogPost',
    teaserId: '3',
  },
];
export default (
  <TeaserList list={list} />
);
