import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function CoralGardensManatee({ data }) {
  return (
    <StaticQuery 
      query={graphql`
        query CoralGardensManateePage {
          allGraphCmsCoralGardensManatee {    
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
        <div className='coral-gardens-manatee-main'>
          {data.allGraphCmsCoralGardensManatee.edges.map(({ node: coralGardens }) => (
            <div key={coralGardens.remoteId}>
              {/* Header Section with Image */}
              <div className="content-header">
                <div className="header-overlay"></div>
                {coralGardens.headerImage?.image?.gatsbyImageData ? (
                  <img
                    src={coralGardens.headerImage.image.url}
                    alt={coralGardens.headerImage.imageAltText || coralGardens.pageTitle}
                    title={coralGardens.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : coralGardens.headerImage?.image?.url ? (
                  <img 
                    src={coralGardens.headerImage.image.url}
                    alt={coralGardens.headerImage.imageAltText || coralGardens.pageTitle}
                    title={coralGardens.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : null}
                <div className="header-cont">
                  <h1>{coralGardens.pageTitle}</h1>
                </div>
              </div>
                
              <div className="content-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Page Content */}
                      <div className='coral-gardens-manatee-cont'>
                        {coralGardens.pageCont?.html ? (
                          <div dangerouslySetInnerHTML={{ __html: coralGardens.pageCont.html }} />
                        ) : coralGardens.pageCont?.text ? (
                          <div>{coralGardens.pageCont.text}</div>
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

export default CoralGardensManatee