import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const LamanaiMayanRuin = () => {
  const data = useStaticQuery(graphql`
    query LamanaiMayanRuinPage {
      allGraphCmsLamanaiMayanRuin {    
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
  `)

  return (  
    <div className='lamanai-mayan-ruin-main'>
      {data.allGraphCmsLamanaiMayanRuin.edges.map(({ node: lamanaiRuin }) => (
        <div key={lamanaiRuin.remoteId}>
          {/* Header Section with Image */}
          <div className="content-header">
            <div className="header-overlay"></div>
            {lamanaiRuin.headerImage?.image?.url ? (
              <img
                src={lamanaiRuin.headerImage.image.url}
                alt={lamanaiRuin.headerImage.imageAltText || lamanaiRuin.pageTitle}
                title={lamanaiRuin.headerImage.imageTitle}
                className="header-image"
              />
            ) : null}
            <div className="header-cont">
              <h1>{lamanaiRuin.pageTitle}</h1>
            </div>
          </div>
            
          <div className="content-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Page Content */}
                  <div className='lamanai-mayan-ruin-cont'>
                    {lamanaiRuin.pageCont?.html ? (
                      <div dangerouslySetInnerHTML={{ __html: lamanaiRuin.pageCont.html }} />
                    ) : lamanaiRuin.pageCont?.text ? (
                      <div>{lamanaiRuin.pageCont.text}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LamanaiMayanRuin