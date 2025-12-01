import React from 'react';
import Layout from '../../components/layout';
import Seo from "../../components/seo"
import "./packages.scss"
import DivingPackage from './components/DivingPackage';
import FamilyPackage from './components/FamilyPackage';
import RomancePackage from './components/RomancePackage';
import packagesHero from '../../images/packages-hero.jpg'; // Import from src/images

const PackagesPage = () => {
  return (
    <Layout>
      <Seo title="Vacation Packages" />
      <div className='packages-main'>
        <div className="content-header">
          <div className="header-overlay"></div>
          <img
            src={packagesHero} // Use imported image variable
            alt="Mata Rocks Vacation Packages"
            title="Mata Rocks Packages"
            className="header-image"
          />
          <div className="header-cont">
            <h1>Exclusive Vacation Packages</h1>
          </div>
        </div>
        <div className="content-wrapper">
        <div className="packages-content">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-4 fw-bold text-primary">Mata Rocks by Barefoot</h2>
                <p className="lead text-muted">Choose Your Perfect Belize Adventure</p>
                <hr className="w-25 mx-auto my-4" />
              </div>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <RomancePackage />
                <DivingPackage />
                <FamilyPackage />
              </div>
            </div>
            
            <div className="row mt-5">
              <div className="col-12 text-center">
                <div className="alert alert-info">
                  <strong>Note:</strong> All packages include our signature hospitality and 24/7 concierge service.
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PackagesPage;