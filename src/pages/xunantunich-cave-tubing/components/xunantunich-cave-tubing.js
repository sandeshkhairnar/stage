import React from 'react'
import { graphql, StaticQuery } from "gatsby"

function CaveTubingXunantunichRuins({ data }) {
  return (
    <StaticQuery 
      query={graphql`
        query CaveTubingXunantunichRuinsPage {
          allGraphCmsCaveTubing {    
            edges {
              node {
                remoteId: id
                secondPageTitle
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
        <div className='cave-tubing-xunantunich-ruins-main'>
          {data.allGraphCmsCaveTubing.edges.map(({ node: caveTubing }) => (
            <div key={caveTubing.remoteId}>
              {/* Header Section with Image */}
              <div className="content-header">
                <div className="header-overlay"></div>
                {caveTubing.headerImage?.image?.url ? (
                  <img
                    src={caveTubing.headerImage.image.url}
                    alt={caveTubing.headerImage.imageAltText || caveTubing.secondPageTitle}
                    title={caveTubing.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : null}
                <div className="header-cont">
                  <h1>{caveTubing.secondPageTitle}</h1>
                </div>
              </div>
                
              <div className="content-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Page Content */}
                      <div className='cave-tubing-xunantunich-ruins-cont'>
                        {caveTubing.secondPageCont?.html ? (
                          <div dangerouslySetInnerHTML={{ __html: caveTubing.secondPageCont.html }} />
                        ) : caveTubing.secondPageCont?.text ? (
                          <div>{caveTubing.secondPageCont.text}</div>
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

export default CaveTubingXunantunichRuins