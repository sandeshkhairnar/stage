import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const BacalarChicoReserve = () => {
  const data = useStaticQuery(graphql`
    query BacalarChicoReservePage {
      allGraphCmsBacalarChicoReserve {    
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
    <div className='bacalar-chico-reserve-main'>
      {data.allGraphCmsBacalarChicoReserve.edges.map(({ node: bacalarReserve }) => (
        <div key={bacalarReserve.remoteId}>
          {/* Header Section with Image */}
          <div className="content-header">
            <div className="header-overlay"></div>
            {bacalarReserve.headerImage?.image?.url ? (
              <img
                src={bacalarReserve.headerImage.image.url}
                alt={bacalarReserve.headerImage.imageAltText || bacalarReserve.pageTitle}
                title={bacalarReserve.headerImage.imageTitle}
                className="header-image"
              />
            ) : null}
            <div className="header-cont">
              <h1>{bacalarReserve.pageTitle}</h1>
            </div>
          </div>
            
          <div className="content-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Page Content */}
                  <div className='bacalar-chico-reserve-cont'>
                    {bacalarReserve.pageCont?.html ? (
                      <div dangerouslySetInnerHTML={{ __html: bacalarReserve.pageCont.html }} />
                    ) : bacalarReserve.pageCont?.text ? (
                      <div>{bacalarReserve.pageCont.text}</div>
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

export default BacalarChicoReserve