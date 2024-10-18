import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Menu Categories</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white">Breakfast</Link></li>
              <li><Link to="#" className="text-white">Lunch</Link></li>
              <li><Link to="#" className="text-white">Dinner</Link></li>
              <li><Link to="#" className="text-white">Desserts</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Specials</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white">Today's Specials</Link></li>
              <li><Link to="#" className="text-white">Seasonal Offers</Link></li>
              <li><Link to="#" className="text-white">Chef's Favorites</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white">Order Tracking</Link></li>
              <li><Link to="#" className="text-white">FAQs</Link></li>
              <li><Link to="#" className="text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Subscribe for Updates</h5>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
              <button className="btn btn-warning" type="button">Subscribe</button>
            </div>
            <div className="mb-3">
              <a href="#" className="text-white me-2"><i className="fab fa-whatsapp"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            </div>
            <p className="small">Phone: +123 456 7890</p>
            <p className="small">Email: support@recipehut.com</p>
          </div>
        </div>

        <hr className="my-4 text-white" />
        <div className="text-center">
          <p className="mb-0">&copy; 2023 Recipe Hut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
