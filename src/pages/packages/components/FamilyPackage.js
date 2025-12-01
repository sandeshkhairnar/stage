import React from 'react';

const FamilyPackage = () => {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-warning text-dark">
        <h3 className="h4 mb-0">FAMILY PACKAGE</h3>
      </div>
      <div className="card-body">
        <p className="text-muted mb-3">5 Night Family Package at Mata Rocks by Barefoot</p>
        
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col" className="w-50">Inclusions</th>
                <th scope="col" className="text-end">Price in BZD</th>
                <th scope="col" className="text-end">Price in USD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5 Nights in Ocean View Junior Suite Pool Deck with 2 Queen Beds</td>
                <td className="text-end">$2,737.00</td>
                <td className="text-end">$1,368.50</td>
              </tr>
              <tr>
                <td>Welcome Cocktail on Arrival</td>
                <td className="text-end">$24.00</td>
                <td className="text-end">$12.00</td>
              </tr>
              <tr>
                <td>RT Tropic Air Flights for 4 pax (BZE to SPR return)</td>
                <td className="text-end">$1,400.00</td>
                <td className="text-end">$700.00</td>
              </tr>
              <tr>
                <td>Golf Cart Rental for entire stay</td>
                <td className="text-end">$400.00</td>
                <td className="text-end">$200.00</td>
              </tr>
              <tr>
                <td>Half Day Snorkeling Trip to Hol Chan and Shark Ray Alley</td>
                <td className="text-end">$600.00</td>
                <td className="text-end">$300.00</td>
              </tr>
              <tr>
                <td>Private Full Day Fishing Trip & Beach Picnic for 4 pax</td>
                <td className="text-end">$1,300.00</td>
                <td className="text-end">$650.00</td>
              </tr>
              <tr>
                <td>1 Hour Jet Ski Rental for 4 pax (2 persons per Jet Ski)</td>
                <td className="text-end">$800.00</td>
                <td className="text-end">$400.00</td>
              </tr>
              <tr className="table-active">
                <td><strong>Total for 5 Night Package:</strong></td>
                <td className="text-end"><strong>$7,261.00</strong></td>
                <td className="text-end"><strong>$3,630.50</strong></td>
              </tr>
              <tr>
                <td>10% Package Rate Markup for Mata Rocks</td>
                <td className="text-end">$726.10</td>
                <td className="text-end">$363.05</td>
              </tr>
              <tr className="table-success">
                <td><strong>Grand Total for Package:</strong></td>
                <td className="text-end"><strong>$7,987.10</strong></td>
                <td className="text-end"><strong>$3,993.55</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FamilyPackage;