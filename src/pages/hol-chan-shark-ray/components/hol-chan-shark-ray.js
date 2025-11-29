import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function HolChanSharkRay({ data }) {
  return (
    <StaticQuery 
      query={graphql`
        query HolChanSharkRayPage {
          allGraphCmsHolChanSharkRay {    
            edges {
              node {
                remoteId: id
                pageTitle
                headerImage {
                  id
                  imageAltText
                  imageTitle
                  image {
                    gatsbyImageData(quality: 60)
                    url
                  }
                }
                pageCont {
                  html
                  markdown
                  raw
                  text
                }
                publishedAt
                updatedAt
              }
            }
          }
        }
      `}
      render={data => (  
        <div className='hol-chan-shark-ray-main'>
          {data.allGraphCmsHolChanSharkRay.edges.map(({ node: holChanSharkRay }) => (
            <div key={holChanSharkRay.remoteId}>
              {/* Header Section with Image */}
              <div className="content-header">
                <div className="header-overlay"></div>
                {holChanSharkRay.headerImage?.image?.url ? (
                  <img
                    src={holChanSharkRay.headerImage.image.url}
                    alt={holChanSharkRay.headerImage.imageAltText || holChanSharkRay.pageTitle}
                    title={holChanSharkRay.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : holChanSharkRay.headerImage?.image?.url ? (
                  <img 
                    src={holChanSharkRay.headerImage.image.url}
                    alt={holChanSharkRay.headerImage.imageAltText || holChanSharkRay.pageTitle}
                    title={holChanSharkRay.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : null}
                <div className="header-cont">
                  <h1>{holChanSharkRay.pageTitle}</h1>
                </div>
              </div>
                
              <div className="content-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Page Content */}
                      <div className='hol-chan-shark-ray-cont'>
                        {holChanSharkRay.pageCont?.html ? (
                          <div dangerouslySetInnerHTML={{ __html: holChanSharkRay.pageCont.html }} />
                        ) : holChanSharkRay.pageCont?.text ? (
                          <div>{holChanSharkRay.pageCont.text}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    />
  );
}

export default HolChanSharkRay