import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text15">
                    <span>{/*locale-text_mmkqWM*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text19">
                    <span>{/*locale-text_uIlw1j*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text18">
                    <span>{/*locale-text_NO4tvu*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text21">
                    <span>{/*locale-text_tPgm7m*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text16">
                    <span>{/*locale-text_2bwZsq*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                <span>{/*locale-text_CDRNiY*/}</span>
              </span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text14">
                      <span>{/*locale-text_ciMr58*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text17">
                      <span>{/*locale-text_vtPiVW*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text20">
                      <span>{/*locale-text_xvToAq*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  privacyLink: undefined,
  link1: undefined,
  link5: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  logoAlt: 'Company Logo',
  termsLink: undefined,
  link3: undefined,
  link2: undefined,
  cookiesLink: undefined,
  link4: undefined,
}

Footer4.propTypes = {
  privacyLink: PropTypes.element,
  link1: PropTypes.element,
  link5: PropTypes.element,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  termsLink: PropTypes.element,
  link3: PropTypes.element,
  link2: PropTypes.element,
  cookiesLink: PropTypes.element,
  link4: PropTypes.element,
}

export default Footer4
