import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text24">
                  <span>{/*locale-text_Qs3YRc*/}</span>
                </span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text34">
                  <span>{/*locale-text_rA7wdx*/}</span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            <span>{/*locale-text_-Z4ii7*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            <span>{/*locale-text_NIK8fU*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        <span>{/*locale-text_OxZ7_H*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            <span>{/*locale-text_ny5weG*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            <span>{/*locale-text_PqTZxw*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        <span>{/*locale-text_I8JBDO*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            <span>{/*locale-text_9NmzND*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            <span>{/*locale-text_phnw3a*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text29">
                        <span>{/*locale-text_JQ6r5P*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            <span>{/*locale-text_S18Ggg*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            <span>{/*locale-text_MsKKu0*/}</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        <span>{/*locale-text_J7SI2s*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  heading1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMxNzU3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMxNzU3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author1Name: undefined,
  author2Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1636622433525-127afdf3662d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NTMxNzU3OXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  author2Name: undefined,
  author2Alt: 'Image of Jane Smith',
  review1: undefined,
  author4Position: undefined,
  author1Position: undefined,
  author3Alt: 'Image of David Johnson',
  content1: undefined,
  author1Alt: 'Image of John Doe',
  author3Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  author3Position: undefined,
  author4Alt: 'Image of Sarah Brown',
  review4: undefined,
  author3Name: undefined,
}

Testimonial17.propTypes = {
  heading1: PropTypes.element,
  author2Src: PropTypes.string,
  review2: PropTypes.element,
  author1Src: PropTypes.string,
  author4Name: PropTypes.element,
  author1Name: PropTypes.element,
  author2Position: PropTypes.element,
  author4Src: PropTypes.string,
  review3: PropTypes.element,
  author2Name: PropTypes.element,
  author2Alt: PropTypes.string,
  review1: PropTypes.element,
  author4Position: PropTypes.element,
  author1Position: PropTypes.element,
  author3Alt: PropTypes.string,
  content1: PropTypes.element,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author3Position: PropTypes.element,
  author4Alt: PropTypes.string,
  review4: PropTypes.element,
  author3Name: PropTypes.element,
}

export default Testimonial17
