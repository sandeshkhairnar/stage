import React from 'react'
import { graphql, StaticQuery } from "gatsby"

function HalfDayReefFishing({ data }) {
  return (
    <StaticQuery 
      query={graphql`
        query HalfDayReefFishingPage {
          allGraphCmsFishingtrip {    
            edges {
              node {
                remoteId: id
                secondPageTItle
                headerImage {
                  id
                  imageAltText
                  imageTitle
                  image {
                    url
                  }
                }
                secondPageCont {
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
        <div className='half-day-reef-fishing-main'>
          {data.allGraphCmsFishingtrip.edges.map(({ node: fishingTrip }) => (
            <div key={fishingTrip.remoteId}>
              {/* Header Section with Image */}
              <div className="content-header">
                <div className="header-overlay"></div>
                {fishingTrip.headerImage?.image?.url ? (
                  <img
                    src={fishingTrip.headerImage.image.url}
                    alt={fishingTrip.headerImage.imageAltText || fishingTrip.secondPageTItle}
                    title={fishingTrip.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : null}
                <div className="header-cont">
                  <h1>{fishingTrip.secondPageTItle}</h1>
                </div>
              </div>
                
              <div className="content-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Page Content */}
                      <div className='half-day-reef-fishing-cont'>
                        {fishingTrip.secondPageCont?.html ? (
                          <div dangerouslySetInnerHTML={{ __html: fishingTrip.secondPageCont.html }} />
                        ) : fishingTrip.secondPageCont?.text ? (
                          <div>{fishingTrip.secondPageCont.text}</div>
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

export default HalfDayReefFishing