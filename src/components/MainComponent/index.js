import React from 'react';
import '../MainComponent/_maincontainer.scss';
import Product from '../Product';
import Sidebar from '../SideBar';

const MainContainer = () => {
  return (
    <section className="main-container">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
                <Sidebar/>
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8">
                <Product/>
            </div>
        </div>
    </div>
</section>
  )
}

export default MainContainer;