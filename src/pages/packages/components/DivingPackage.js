import React from 'react';

const DivingPackage = () => {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-info text-white">
        <h3 className="h4 mb-0">DIVING PACKAGE</h3>
      </div>
      <div className="card-body">
        <p className="text-muted mb-3">4 Night Diving Package at Mata Rocks by Barefoot</p>
        
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
                <td>4 Nights in Ocean View Pool Deck with King Size Bed</td>
                <td className="text-end">$1,999.20</td>
                <td className="text-end">$999.60</td>
              </tr>
              <tr>
                <td>Welcome Cocktail on Arrival</td>
                <td className="text-end">$24.00</td>
                <td className="text-end">$12.00</td>
              </tr>
              <tr>
                <td>RT Tropic Air Flights for 2 pax (BZE to SPR return)</td>
                <td className="text-end">$700.00</td>
                <td className="text-end">$350.00</td>
              </tr>
              <tr>
                <td>Airport transfers in San Pedro</td>
                <td className="text-end">$40.00</td>
                <td className="text-end">$20.00</td>
              </tr>
              <tr>
                <td>24 Hour Golf Cart Rental</td>
                <td className="text-end">$90.00</td>
                <td className="text-end">$45.00</td>
              </tr>
              <tr>
                <td>Full Breakfast during entire stay (2 pax)</td>
                <td className="text-end">$200.00</td>
                <td className="text-end">$100.00</td>
              </tr>
              <tr>
                <td>2 Days - 2 Local Tank Dives and 1 Night Dive for 2 pax</td>
                <td className="text-end">$1,150.00</td>
                <td className="text-end">$575.00</td>
              </tr>
              <tr className="table-active">
                <td><strong>Total for 4 Night Package:</strong></td>
                <td className="text-end"><strong>$4,203.20</strong></td>
                <td className="text-end"><strong>$2,101.60</strong></td>
              </tr>
              <tr>
                <td>10% Package Rate Markup for Mata Rocks</td>
                <td className="text-end">$420.32</td>
                <td className="text-end">$210.16</td>
              </tr>
              <tr className="table-success">
                <td><strong>Grand Total for Package:</strong></td>
                <td className="text-end"><strong>$4,623.52</strong></td>
                <td className="text-end"><strong>$2,311.76</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DivingPackage;