import React, { Component, useEffect } from "react";
import axios from "axios";
import { Button, Row } from "react-bootstrap";
import "../../Styles/TravelPackage.css";
import Header from "../Header";
import NavbarV3 from "../navbar-v4";
import Footer from "../Footer";
import Reactstars from "react-rating-stars-component";
import Pageheader from "./page-header";
import { Link } from "react-router-dom";
import "../../assets/css/style.css"

export default class CardItemsT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page:1,
      pageCount:0

    };
  }

  componentDidMount() {
    this.retrievePosts();
    console.log(this.state.page)
  }

  // pagination = () => {
  //   useEffect(()=>{
  //     axios.get("http://localhost:8070/travelpackages").then((res) => {
  //       if (res.data.items) {
  //         this.setState({
  //           pageCount:res.data.existingPackage[0].pagination.pageCount
  //         });
  //         // console.log(this.state.travelpackages);
  //       }
  //     });

  //   },[items])
  // }

  retrievePosts(page) {
    axios.get(`http://localhost:8070/travelpackages?page=${page}`).then((res) => {
      if (res.data.success) {
        console.log(res.data.items)
        this.setState({
          posts: res.data.items,
          // pageCount:res.data.
          pageCount:res.data.existingPackage[0].pagination.pageCount
        });
      }
    });
  }


  

  handlePrevious(page){
    if(page === 1){
      this.setState({
        page:this.state.page
      })
    }
    this.setState({
      page:page-1
    })
    this.retrievePosts(this.state.page-1)
    
  }

  handleNext=(page, pageCount)=>{
    console.log("line"+ page)
    if(page === pageCount){
      this.setState({
        page:page
      })
    }
    else{
      this.setState({
        page:page+1
      })
    }
    console.log("line for"+this.state.page)
    this.retrievePosts(this.state.page+1)
  }

  sorting = () =>{
    	const data = document.getElementById("sort");
      let sort_value = data.options[data.selectedIndex].value;
      console.log(sort_value)
      axios.get("http://localhost:8070/travelpackages").then((res) => {
      if (res.data.success) {
        console.log(res.data.existingPackage)
        this.sortData(res.data.existingPackage, sort_value);
      }
    });
  }

    
    
      // console.log(this.state.posts)
    	// if(order === sort_value){
    	// 	const sorted = this.state.posts.sort((a,b)=>
    	// 		a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1
    	// 	);
    	// 	this.setState({
      //     posts:sorted
      //   })
    	// 	// setorder("DSC")
    	// }
    	// if(order === "DSC"){
    	// 	const sorted = [...myData].sort((a,b)=>
    	// 		a[col].toLowerCase() < b[col].toLowerCase() ? 1: -1
    	// 	);
    	// 	setMyData(sorted);
    	// 	setorder("ASC")
    	// }
    

  sortData(post,sort){
    const sorted = post.sort((a,b)=>
        a[sort].toLowerCase() > b[sort].toLowerCase() ? 1: -1
    );
    console.log(sorted)
    this.setState({ posts: sorted });
  };

  filterData(posts, searchkey) {
    const result = posts.filter(
      (post) =>
        post.packageName.toLowerCase().includes(searchkey) ||
        post.packageName.toUpperCase().includes(searchkey)
    );
    this.setState({ posts: result });
  }




  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    axios.get("http://localhost:8070/travelpackages").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPackage, searchkey);
      }
    });
  };

  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    const {page} = this.state;
    const {pageCount} = this.state;
    console.log(page);
    console.log(pageCount);
    return (
      <div>
        <Header />
        {/* <NavbarV3 /> */}
        <Pageheader headertitle="Package" />
        <div className="ltn__product-area ltn__product-gutter mb-100">
				<div className="container">
						<div className="row">
							<div className="col-lg-12">
							<div className="ltn__shop-options">
								<ul>
								<li>
									<div className="ltn__grid-list-tab-menu ">
									<div className="nav">
										<a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></a>
										<a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a>
									</div>
									</div>
								</li>
								<li>
									<div className="short-by text-center">
									<select className="nice-select" id="sort" name="sort"
                  onChange={this.sorting}>
										<option>Default sorting</option>
										<option value="packageName">Sort by packagename</option>
										<option value="destination">Sort by locations</option>
										<option>Sort by price: low to high</option>
										<option>Sort by price: high to low</option>
									</select>
									</div> 
								</li>
								<li>
									<div className="showing-product-number text-right">
									<span>Showing 9 of 20 results</span>
									</div> 
								</li>
								</ul>
							</div>
							<div className="tab-content ">
								<div className="tab-pane fade active show" id="liton_product_grid">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view">
									<div className="row">
									<div className="col-lg-12">
										{/* Search Widget */}
										<div className="ltn__search-widget mb-30">
										<form action="#">
											<input type="text" name="search" placeholder="Search your keyword..." onChange={this.handleSearchArea}/>
											<button type="submit"><i className="fas fa-search" /></button>
										</form>
										</div>
									</div>
									{/* ltn__product-item */}
                  {this.state.posts.map((posts, idx) => (
                  
									<div className="col-lg-4 col-sm-6 col-12">
										<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img">
											<Link to={`/travelpackages/travelpackage/${posts._id}`}><img src={`/uploads/${posts.packageImage}`} alt="#" /></Link>
											{/* <div className="real-estate-agent">
											<div className="agent-img">
												<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											</div> */}
										</div>
										<div className="product-info">
											<div className="product-badge">
											<ul>
												<li className="sale-badg">{posts.packageName}</li>
											</ul>
											</div>
											<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
											<div className="product-img-location">
											<ul>
												<li className="go-top">
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
												</li>
											</ul>
											</div>
										</div>
										<div className="product-info-bottom">
											<div className="product-price">
											<span>$34,900<label>/Month</label></span>
											</div>
										</div>
										</div>
									</div>
                  ))}
									
									</div>
								</div>
								</div>
							</div>
							<div className="ltn__pagination-area text-center">
								<div className="ltn__pagination">
								<ul>
                  {/* page:{this.state.page}
                  page:count:{this.state.pageCount} */}
									<li><a onClick={() => this.handlePrevious(page) }><i className="fas fa-angle-double-left" /></a></li>
									{/* <li><a href="#">1</a></li>
									<li className="active"><a href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#">...</a></li> */}
									<li><a>{this.state.page}</a></li>
                   {page>=3 ? (
        //  <Link onClick={this.logout}>LogOut</Link>
    
        <li></li>
      ) : (
        // <Link to="/register">SignIn/SignUp</Link>
        // <li><a><i className="fas fa-angle-double-right" /></a></li>
        <li><a onClick={ () => this.handleNext(page, pageCount) }><i className="fas fa-angle-double-right" /></a></li>
      )}
                  
									{/* <li><a onClick={ () => this.handleNext(page, pageCount) }><i className="fas fa-angle-double-right" /></a></li> */}
								</ul>
								</div>
							</div>
							</div>
						</div>
				</div>
			</div>

        {/* <div className="ltn__shop-options">
          <ul className="justify-content-start">
          
            <li className="d-none pl-3">
              <div className="showing-product-number text-right">
                <span>Showing 1–12 of 18 results</span>
              </div>
            </li>
            <li>
              <div className="short-by text-center">
                <select
                  className="nice-select"
                  onChange={(e) => sorting(e.target.value)}
                  
                >
                  <option value="">Default Sorting</option>
                  <option value="title">Sort by popularity</option>
                  <option>Sort by new arrivals</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>
            </li>
            <li>
              <div className="short-by text-center">
                <select className="nice-select">
                  <option>Per Page: 12</option>
                  <option>Per Page: 20</option>
                  <option>Per Page: 30</option>
                  <option>Per Page: 50</option>
                  <option>Per Page: 100</option>
                </select>
              </div>
            </li>
          </ul>
        </div> */}
        {/* <div className="col-lg-12">
 
          <div className="ltn__search-widget mb-30">
            <form action="#">
              <input
                type="text"
                name="search"
                placeholder="Search package"
                onChange={this.handleSearchArea}
              />
              <button type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
        </div> */}

        {/* <div className="infotr bodytravelpackage">
          <div className="bodytravelpackage container" id="bbimg">
            <div>
              <br />
              <div class="row text-center text-lg-start"></div>
              <hr />

              <div
                class="d-flex flex-row align-items-center mb-2"
                style={{
                  backgroundColor: "hsla(100, 27%, 53%, 0.27)",
                  paddingBottom: "5px",
                  paddingTop: "7px",
                  
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>

              <hr />
              <Row xs={1} md={2} className="g-4" id="by" class="rounded">

                {this.state.posts.map((posts, idx) => (
                  
                  <div class="container py-1" >
                    <article class="postcard postcardtr dark blue">
                      <a class="postcard__img_link">
                        <img
                          class="postcard__img"
                          src={`/uploads/${posts.packageImage}`}
                          alt="..."
                        />
                      </a>
                      <div class="postcard__text">
                        <h1 class="postcard__title blue">
                          <a href="#"> {posts.packageName}</a>
                        </h1>

                        <div class="d-flex">
                          <div class="form-outline mr-4">
                            <time
                              class="postcard__subtitle small smalltr"
                              datetime="2020-05-25 12:00:00"
                            >
                              <i class="fas fa-calendar-alt mr-2"></i>
                              {posts.date}
                            </time>
                          </div>
                          <div class="form-outline ">
                            <Reactstars
                              edit={false}
                              size={20}
                              value={Math.floor(posts.reviewsAvg)}
                            />
                          </div>
                        </div>

                        <div class="postcard__bar"></div>
                      
                        <br />
                        

                        <ul class="postcard__tagbox">
                          <li class="tag__item">
                            <i class="fas fa-tag mr-2"></i>PP Rs.&nbsp;
                            <a style={{ color: " hsl(180,100%,50%)" }}>
                              {posts.perperson}
                            </a>
                          </li>
                          <li class="tag__item">
                            <i class="fas fa-clock mr-2"></i>
                            {posts.noofdays}&nbsp;{posts.noofnights}
                          </li>
                          <li class="tag__item play blue">
                            <a style={{ color: "  hsl(60,100%,50%) " }}>
                              <i class="fas fa-car mr-2"></i>
                              {posts.vehical}
                            </a>
                          </li>
                        </ul>

                        <button
                          type="button"
                          className="btn btn-primary abv d-flex"
                          id="cardbtn2"
              
                        >
                          <a
                            href={`/travelpackages/travelpackage/${posts.id}`}
            
                            style={{
                              textDecoration: "none",
                              color: "white",
                            }}
                          >
                            View Details &nbsp;
                            <i class="fas fa-hand-point-right"> </i>
                          </a>
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
              </Row>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}
