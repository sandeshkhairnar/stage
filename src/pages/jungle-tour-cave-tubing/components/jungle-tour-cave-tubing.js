import React from 'react'
import { graphql, StaticQuery } from "gatsby"

function CaveTubingJungleZipline({ data }) {
  return (
    <StaticQuery 
      query={graphql`
        query CaveTubingJungleZiplinePage {
          allGraphCmsCaveTubing {    
            edges {
              node {
                remoteId: id
                thirdPageTItle
                headerImage {
                  id
                  imageAltText
                  imageTitle
                  image {
                    url
                  }
                }
                thirdPageCont {
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
        <div className='cave-tubing-jungle-zipline-main'>
          {data.allGraphCmsCaveTubing.edges.map(({ node: caveTubing }) => (
            <div key={caveTubing.remoteId}>
              {/* Header Section with Image */}
              <div className="content-header">
                <div className="header-overlay"></div>
                {caveTubing.headerImage?.image?.url ? (
                  <img
                    src={caveTubing.headerImage.image.url}
                    alt={caveTubing.headerImage.imageAltText || caveTubing.thirdPageTItle}
                    title={caveTubing.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : null}
                <div className="header-cont">
                  <h1>{caveTubing.thirdPageTItle}</h1>
                </div>
              </div>
                
              <div className="content-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Page Content */}
                      <div className='cave-tubing-jungle-zipline-cont'>
                        {caveTubing.thirdPageCont?.html ? (
                          <div dangerouslySetInnerHTML={{ __html: caveTubing.thirdPageCont.html }} />
                        ) : caveTubing.thirdPageCont?.text ? (
                          <div>{caveTubing.thirdPageCont.text}</div>
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

export default CaveTubingJungleZipline