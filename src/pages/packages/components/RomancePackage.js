import React from 'react';

const RomancePackage = () => {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-primary text-white">
        <h3 className="h4 mb-0">ROMANCE PACKAGE</h3>
      </div>
      <div className="card-body">
        <p className="text-muted mb-3">5 Night Romance Package at Mata Rocks by Barefoot Beach Resort</p>
        
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
                <td>5 Nights in Ocean View Junior Suite with King bed and Balcony</td>
                <td className="text-end">$2,677.50</td>
                <td className="text-end">$1,338.75</td>
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
                <td>Golf Cart Rental for entire stay</td>
                <td className="text-end">$400.00</td>
                <td className="text-end">$200.00</td>
              </tr>
              <tr>
                <td>Catamaran Sunset Cruise</td>
                <td className="text-end">$400.00</td>
                <td className="text-end">$200.00</td>
              </tr>
              <tr>
                <td>Half Day Snorkeling Trip to Hol Chan and Shark Ray Alley</td>
                <td className="text-end">$300.00</td>
                <td className="text-end">$150.00</td>
              </tr>
              <tr>
                <td>Romantic Candlelit Dinner on the beach with wine</td>
                <td className="text-end">$400.00</td>
                <td className="text-end">$200.00</td>
              </tr>
              <tr className="table-active">
                <td><strong>Total for 5 Night Package:</strong></td>
                <td className="text-end"><strong>$4,901.50</strong></td>
                <td className="text-end"><strong>$2,450.75</strong></td>
              </tr>
              <tr>
                <td>10% Package Rate Markup for Mata Rocks</td>
                <td className="text-end">$490.15</td>
                <td className="text-end">$245.07</td>
              </tr>
              <tr className="table-success">
                <td><strong>Grand Total for Package:</strong></td>
                <td className="text-end"><strong>$5,391.65</strong></td>
                <td className="text-end"><strong>$2,695.82</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RomancePackage;