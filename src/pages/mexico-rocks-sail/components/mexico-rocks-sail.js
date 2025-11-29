import React from 'react'
import { graphql, StaticQuery } from "gatsby"

function MexicoRocksSail() {
  return (
    <StaticQuery 
      query={graphql`
        query MexicoRocksSailPage {
          allGraphCmsMexicoRocksSail {    
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
        <div className='mexico-rocks-sail-main'>
          {data.allGraphCmsMexicoRocksSail.edges.map(({ node: mexicoRocksSail }) => (
            <div key={mexicoRocksSail.remoteId}>
              {/* Header Section with Image */}
              <div className="content-header">
                <div className="header-overlay"></div>
                {mexicoRocksSail.headerImage?.image?.url ? (
                  <img
                    src={mexicoRocksSail.headerImage.image.url}
                    alt={mexicoRocksSail.headerImage.imageAltText || mexicoRocksSail.pageTitle}
                    title={mexicoRocksSail.headerImage.imageTitle}
                    className="header-image"
                  />
                ) : null}
                <div className="header-cont">
                  <h1>{mexicoRocksSail.pageTitle}</h1>
                </div>
              </div>
                
              <div className="content-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {/* Page Content */}
                      <div className='mexico-rocks-sail-cont'>
                        {mexicoRocksSail.pageCont?.html ? (
                          <div dangerouslySetInnerHTML={{ __html: mexicoRocksSail.pageCont.html }} />
                        ) : mexicoRocksSail.pageCont?.text ? (
                          <div>{mexicoRocksSail.pageCont.text}</div>
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

export default MexicoRocksSail