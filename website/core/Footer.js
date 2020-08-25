/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          {/* <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a> */}
          <div>
            <h5>Aonde nos encontrar</h5>
            <a href={this.docUrl('doc1.html')}>
              Website
            </a>
            <a href={this.docUrl('doc1.html')}>
              Facebook
            </a>
            <a href={this.docUrl('doc2.html')}>Instagram</a>
          </div>
          <div>
            <h5>Contato</h5>
            <a
              href="mailto:contato@octopo.com.br"
              target="_blank"
              rel="noreferrer noopener">
              Email (contato@octopo.com.br)
            </a>
            <a
              href="https://wa.me/552433489468/"
              target="_blank"
              rel="noreferrer noopener">
                Whatsapp
            </a>
          </div>
        </section>

        <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/logo.png`}
            alt="Facebook Open Source"
            width="170"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
