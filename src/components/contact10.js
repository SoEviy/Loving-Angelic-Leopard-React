import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text18">
                    <span>{/*locale-text_MGipAW*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text21">
                    <span>{/*locale-text_op5Qdv*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                    <span>{/*locale-text_HNOIaq*/}</span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    <span>{/*locale-text_G7WjQh*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                <span>{/*locale-text_cQC5Dh*/}</span>
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text20">
                    <span>{/*locale-text_gQ7Zg4*/}</span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    <span>{/*locale-text_THUg1M*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                <span>{/*locale-text_dZljal*/}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1658278477100-ab1bbc15d2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMxNzU3OXw&ixlib=rb-4.0.3&q=80&w=1400',
  location2ImageAlt: 'image2Alt',
  location1ImageAlt: 'image1Alt',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1570342802820-5c5166f10392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMxNzU3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  heading1: undefined,
  location2Description: undefined,
  location2: undefined,
  content1: undefined,
}

Contact10.propTypes = {
  location1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location2: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact10
