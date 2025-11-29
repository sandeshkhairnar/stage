import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function AllDaySailingCayeCaulker({ data }) {
  return (
    <StaticQuery 
      query={graphql`
        query AllDaySailingCayeCaulkerPage {
          allGraphCmsAllDaySailingCayeCaulker {    
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
        <div className='all-day-sailing-caye-caulker-main'>
          {data.allGraphCmsAllDaySailingCayeCaulker.edges.map(({ node: allDaySailing }) => (
            <div key={allDaySailing.remoteId}>
              {/* Header Section with Image */}
              <div className="content-header">
                <div className="header-overlay"></div>
                {allDaySailing.headerImage?.image?.gatsbyImageData ? (
                  <img
                    src={allDaySailing.headerImage.image.url}
                    alt={allDaySailing.headerImage.imageAltText || allDaySailing.pageTitle}
                    title={allDaySailing.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : allDaySailing.headerImage?.image?.url ? (
                  <img 
                    src={allDaySailing.headerImage.image.url}
                    alt={allDaySailing.headerImage.imageAltText || allDaySailing.pageTitle}
                    title={allDaySailing.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : null}
                <div className="header-cont">
                  <h1>{allDaySailing.pageTitle}</h1>
                </div>
              </div>
                
              <div className="content-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Page Content */}
                      <div className='all-day-sailing-caye-caulker-cont'>
                        {allDaySailing.pageCont?.html ? (
                          <div dangerouslySetInnerHTML={{ __html: allDaySailing.pageCont.html }} />
                        ) : allDaySailing.pageCont?.text ? (
                          <div>{allDaySailing.pageCont.text}</div>
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

export default AllDaySailingCayeCaulker