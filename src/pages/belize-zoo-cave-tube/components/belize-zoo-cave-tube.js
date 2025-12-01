import React from 'react'
import { graphql, StaticQuery } from "gatsby"

function CaveTubingBelizeZoo() {
  return (
    <StaticQuery 
      query={graphql`
        query CaveTubingBelizeZooPage {
          allGraphCmsCaveTubing {    
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
        <div className='belize-zoo-cave-tube-main'>
          {data.allGraphCmsCaveTubing.edges.map(({ node: caveTubing }) => (
            <div key={caveTubing.remoteId}>
              {/* Header Section with Image */}
              <div className="content-header">
                <div className="header-overlay"></div>
                {caveTubing.headerImage?.image?.url ? (
                  <img
                    src={caveTubing.headerImage.image.url}
                    alt={caveTubing.headerImage.imageAltText || caveTubing.pageTitle}
                    title={caveTubing.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : null}
                <div className="header-cont">
                  <h1>{caveTubing.pageTitle}</h1>
                </div>
              </div>
                
              <div className="content-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Page Content */}
                      <div className='belize-zoo-cave-tube-cont'>
                        {caveTubing.pageCont?.html ? (
                          <div dangerouslySetInnerHTML={{ __html: caveTubing.pageCont.html }} />
                        ) : caveTubing.pageCont?.text ? (
                          <div>{caveTubing.pageCont.text}</div>
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

export default CaveTubingBelizeZoo