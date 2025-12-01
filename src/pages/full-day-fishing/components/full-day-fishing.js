import React from 'react'
import { graphql, StaticQuery } from "gatsby"

function FullDayReefFishing({ data }) {
  return (
    <StaticQuery 
      query={graphql`
        query FullDayReefFishingPage {
          allGraphCmsFishingtrip {    
            edges {
              node {
                remoteId: id
                pageTitle
                headerImage {
                  id
                  imageAltText
                  imageTitle
                  image {
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
        <div className='full-day-reef-fishing-main'>
          {data.allGraphCmsFishingtrip.edges.map(({ node: fishingTrip }) => (
            <div key={fishingTrip.remoteId}>
              {/* Header Section with Image */}
              <div className="content-header">
                <div className="header-overlay"></div>
                {fishingTrip.headerImage?.image?.url ? (
                  <img
                    src={fishingTrip.headerImage.image.url}
                    alt={fishingTrip.headerImage.imageAltText || fishingTrip.pageTitle}
                    title={fishingTrip.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : null}
                <div className="header-cont">
                  <h1>{fishingTrip.pageTitle}</h1>
                </div>
              </div>
                
              <div className="content-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Page Content */}
                      <div className='full-day-reef-fishing-cont'>
                        {fishingTrip.pageCont?.html ? (
                          <div dangerouslySetInnerHTML={{ __html: fishingTrip.pageCont.html }} />
                        ) : fishingTrip.pageCont?.text ? (
                          <div>{fishingTrip.pageCont.text}</div>
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

export default FullDayReefFishing