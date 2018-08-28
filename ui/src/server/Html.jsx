/* eslint react/no-array-index-key: 0 */
/* Index keys doesn't matter because it is rendered only once on the server */
import React from 'react';
import PropTypes from 'prop-types';

const renderAssets = resources => {
  return resources.map((r, index) => {
    const { as, async, content, defer, link, rel, type } = r;

    if (type === 'css' && link) {
      return <link key={index} rel="stylesheet" type="text/css" href={link} />;
    } else if (type === 'js' && content) {
      return (
        <script
          key={index}
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: content }}
          defer={defer}
          async={async}
        />
      );
    } else if (type === 'hint' && rel) {
      return <link key={index} rel={rel} as={as} href={link} />;
    } else if (type === 'link' && rel) {
      return <link key={index} rel={rel} href={link} />;
    }

    return <script key={index} src={r.link} defer={defer} async={async} />;
  });
};
const Html = ({
  head,
  children,
  resourceHints = [],
  additionalHeadResources = [],
  additionalBodyResources = [],
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.script && head.script.toComponent()}
        {renderAssets(resourceHints)}
        {head.link && head.link.toComponent()}
        {renderAssets(additionalHeadResources)}
      </head>
      <body>
        <main id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {renderAssets(additionalBodyResources)}
      </body>
    </html>
  );
};

Html.propTypes = {
  head: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  resourceHints: PropTypes.array,
  additionalHeadResources: PropTypes.arrayOf(
    PropTypes.shape({
      async: PropTypes.oneOf(['async']),
      content: PropTypes.string,
      defer: PropTypes.oneOf(['defer']),
      link: PropTypes.string,
      type: PropTypes.oneOf(['css', 'js', 'link', 'hint']).isRequired,
    }),
  ),
  additionalBodyResources: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['css', 'js', 'link', 'hint']).isRequired,
      link: PropTypes.string,
      content: PropTypes.string,
      defer: PropTypes.oneOf(['defer']),
    }),
  ),
};

Html.defaultProps = {
  resourceHints: [],
  additionalHeadResources: [],
  additionalBodyResources: [],
};

export default Html;
