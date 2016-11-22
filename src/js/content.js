import React from 'react';
import timeSince from './timeSince';

const cleanUrl = (url) => {
  const cleanedUrl = url
    .replace(/http:\/\/|https:\/\/|\.html|\.pdf|\.php|www\.|\.aspx|\.asp|\/$/gi, '')
    .split('?')[0].split('#')[0].split(':')[0];
  if (cleanedUrl.length > 93) {
    return `${cleanedUrl.slice(0, 90)}...`;
  }
  return cleanedUrl;
};

const Content = ({ result, index, style }) => (
  <div className={`content ${index}${style ? ' expanded' : ''}`}>
    <div className="contentHeader">
      <span className="contentTitle">
        {result._source.title}
      </span>
      <span className="contentTimestamp">
        {timeSince(new Date().getTime() - result._source.timeInfo[result._source.timeInfo.length - 1][1])} ago
      </span>
      <span className="contentUrl">
        <a href={result._source.url} target="_blank">{cleanUrl(result._source.url)}</a>
        <span className="viewedTimestamp">
          viewed for {timeSince(result._source.timeInfo.reduce((prev, next) =>
            prev + next[2], 0), true)}
        </span>
      </span>
    </div>
    <div className={`contentBody ${index}${style ? ' expanded' : ''}`}>
      {result._source.text.split('\n').map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  </div>
);

export default Content;
